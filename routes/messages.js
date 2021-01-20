const express = require("express");
const router = express.Router();
const Message = require("../models/Message");
const requireAuth = require("../middlewares/requireAuth");

// GET MESSAGES FOR ONE EVENT
router.get("/by-event/:id", function (req, res, next) {
  console.log("SEARCH MESSAGE FOR EVENT ", req.params.id);
  Message.find({ event: req.params.id })
    .populate("author event")
    .then((dbRes) => res.status(200).json(dbRes))
    .catch((err) => res.status(400).json(err));
});

// CREATE A MESSAGE FOR ONE EVENT
router.post("/by-event/:id", function (req, res, next) {
  console.log("CREATE MESSAGE FOR EVENT ", req.params.id);
  console.log(req.body);
  const updatedValues = { ...req.body };
  updatedValues.author = req.session.currentUser;
  updatedValues.event = req.params.id;
  Message.create(updatedValues)
    .then((message) => {
      message
        .execPopulate("author")
        .then((populatedMessage) => {
          res.status(201).json(populatedMessage);
        })
        .catch(next);
    })
    .catch(next);
});

//GET ALL MESSAGES OF ONE USER
router.get("/mine", (req, res, next) => {
  Message.find({ author: req.session.currentUser })
    .populate("event author")
    .then((eventDocuments) => {
      res.status(200).json(eventDocuments);
    })
    .catch(next);
});

// // DELETE ONE MESSAGE
router.delete("/:id", requireAuth, (req, res, next) => {
  Message.findById(req.params.id)
    .then((messageDocument) => {
      console.log(req.params);
      if (!messageDocument) {
        return res.status(404).json({ message: "Message not found" });
      }
      if (messageDocument.author.toString() !== req.session.currentUser) {
        console.log("author", messageDocument.author.toString());
        console.log("session user", req.session.currentUser);
        return res
          .status(403)
          .json({ message: "You can't delete this message" });
      }

      Message.findByIdAndDelete(req.params.id)
        .then(() => {
          return res.sendStatus(204);
        })
        .catch(next);
    })
    .catch(next);
});

module.exports = router;
