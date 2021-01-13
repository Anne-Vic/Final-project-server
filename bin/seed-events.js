require("dotenv").config();
require("../config/mongo");
const Event = require("../model/Event");

const events = [
  {
    date: "29/01/2021",
    sport: "Tennis",
    city: "Paris",
    country: "France",
    meetingPoint: "Bercy station",
    time: "10h00",
    eventImg: "./Profil.PNG",
    description: "Looking for a tennis partner",
    status: "Uncomplete",
    level: "Beginner",
  },
  {
    date: "05/02/2021",
    sport: "Boxe",
    city: "Marseille",
    country: "France",
    meetingPoint: "Cours Julien",
    time: "14h00",
    eventImg: "./Profil.PNG",
    description: "Sparring partner for a 1H session",
    status: "Uncomplete",
    level: "Advanced",
  },
];

async function insertEvents() {
  try {
    await Event.deleteMany();
    await Event.insertMany(events);
    const inserted = await Event.find().populate("owner");
    console.log(inserted);
    console.log(`seed events done : ${inserted.length} documents inserted !`);
  } catch (err) {
    console.error(err);
  }
}

insertEvents();
