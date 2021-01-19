const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

router.get("/by-event/:id", function (req, res, next) {
  console.log("SEARCH MESSAGE FOR EVENT ", req.params.id);
  Message.find({ event: req.params.id })
    .populate("author event")
    .then((dbRes) => res.status(200).json(dbRes))
    .catch((err) => res.status(400).json(err));
});

router.post("/by-event/:id", function (req, res, next) {
  console.log("CREATE MESSAGE FOR EVENT ", req.params.id);
  console.log(req.body);
  const updatedValues = { ...req.body };
  updatedValues.author = req.session.currentUser;
  updatedValues.event = req.params.id;
  Message.create(updatedValues)
    .then((message) => {
      console.log("message created");
      res.status(201).json(message);
    })
    .catch(next);
});

module.exports = router;
