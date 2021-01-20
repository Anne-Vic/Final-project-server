require("dotenv").config();
require("./config/dbConnection");

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

// SOCKET IO
// const server = require("http").Server(app);
// const io = require("socket.io")(server);

// io.on("connection", (socket) => {
//   console.log(`Connecté au client ${socket.id}`);
//   // émission d'un évènement
//   io.emit("news", "Voici un nouvel élément envoyé par le serveur");
// });

// server.listen(3000, function () {
//   console.log("Votre app est disponible sur localhost:3000 !");
// });

/**
 * Middlewares
 */
const corsOptions = { origin: process.env.FRONTEND_URL, credentials: true };

app.use(cors(corsOptions));
app.use(logger("dev")); // This logs HTTP reponses in the console.
app.use(express.json()); // Access data sent as json @req.body
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    store: new MongoStore({ mongooseConnection: mongoose.connection }), // Persist session in database.
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

// Test to see if user is logged In before getting into any router.
app.use(function (req, res, next) {
  console.log("User in session =>", req.session.currentUser);
  next();
});

/**
 * Routes
 */

const authRouter = require("./routes/auth");
// const usersRouter = require("./routes/users");
const eventsRouter = require("./routes/events");
const messagesRouter = require("./routes/messages");

app.use("/api/auth", authRouter);
// app.use("/api/users", usersRouter);
app.use("/api/events", eventsRouter);
app.use("/api/messages", messagesRouter);

if (process.env.NODE_ENV === "production") {
  app.use("*", (req, res, next) => {
    // If no routes match, send them the React HTML.
    res.sendFile(__dirname + "/public/index.html");
  });
}

// 404 Middleware
app.use((req, res, next) => {
  const error = new Error("Ressource not found.");
  error.status = 404;
  next(err);
});

// Error handler middleware
// If you pass an argument to your next function in any of your routes or middlewares
// You will end up in this middleware
// next("toto") makes you end up here
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== "production") {
    console.error(err);
  }
  console.log("An error occured");
  res.status(err.status || 500);
  if (!res.headersSent) {
    res.json(err);
  }
});

module.exports = app;
