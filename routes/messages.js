const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

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

module.exports = router;