const express = require("express");
const router = express.Router();
const Event = require("../models/Event");
const uploader = require("../config/cloudinary");
const requireAuth = require("../middlewares/requireAuth");

//GET ALL EVENTS
router.get("/", (req, res, next) => {
  Event.find({})
    .populate("owner")
    .then((eventDocuments) => {
      res.status(200).json(eventDocuments);
    })
    .catch(next);
});

//GET ONE EVENT
router.get("/:id", (req, res, next) => {
  Event.findById(req.params.id).then((eventDocument) => {
    res.status(200).json(eventDocument);
  });
});

//CREATE ONE EVENT
router.post("/", requireAuth, uploader.single("eventImg"), (req, res, next) => {
  const updateValues = { ...req.body };

  if (req.file) {
    updateValues.image = req.file.path;
  }

  updateValues.id_user = req.session.currentUser;

  Event.create(updateValues)
    .then((eventDocument) => {
      eventDocument.populate("owner").execPopulate();
    })
    .then((event) => {
      console.log("event created");
      res.status(201).json(event);
    })
    .catch(next);
});

// UPDATE ONE EVENT BY THE EVENT OWNER ONLY
router.patch(
  "/:id",
  requireAuth,
  uploader.single("eventImg"),
  (req, res, next) => {
    const event = { ...req.body };

    Event.findById(req.params.id)
      .then((eventDocument) => {
        if (!eventDocument)
          return res.status(404).json({ message: "Event not found" });
        if (eventDocument.owner.toString() !== req.session.currentUser) {
          return res
            .status(403)
            .json({ message: "You are not allowed to update this event" });
        }

        if (req.file) {
          event.eventImg = req.file.secure_url;
        }

        Event.findByIdAndUpdate(req.params.id, event, { new: true })
          .populate("owner")
          .then((updatedDocument) => {
            return res.status(200).json(updatedDocument);
          })
          .catch(next);
      })
      .catch(next);
  }
);

// DELETE ONE EVENT BY THE EVENT OWNER ONLY
router.delete("/:id", requireAuth, (req, res, next) => {
  Event.findById(req.params.id)
    .then((eventDocument) => {
      if (!eventDocument) {
        return res.status(404).json({ message: "Event not found" });
      }
      if (eventDocument.owner.toString() !== req.session.currentUser) {
        return res.status(403).json({ message: "You can't delete this event" });
      }

      Event.findByIdAndDelete(req.params.id)
        .then(() => {
          return res.sendStatus(204);
        })
        .catch(next);
    })
    .catch(next);
});

module.exports = router;
