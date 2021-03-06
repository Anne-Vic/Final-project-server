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

//GET ALL EVENTS OF ONE USER
router.get("/mine", (req, res, next) => {
  Event.find({ owner: req.session.currentUser })
    .populate("owner")
    .then((eventDocuments) => {
      res.status(200).json(eventDocuments);
    })
    .catch(next);
});

//GET ONE EVENT
router.get("/:id", (req, res, next) => {
  Event.findById(req.params.id)
    .populate("owner")
    .then((eventDocument) => {
      res.status(200).json(eventDocument);
    });
});

//GET ALL MESSAGES OF ONE EVENT
router.get("/:id/messages", (req, res, next) => {
  console.log(req.params.id);
  Event.findById(req.params.id)
    .populate("messages")
    .populate({
      path: "messages",
      populate: {
        path: "author",
        model: "User",
      },
    })
    .then((eventDocument) => {
      res.status(200).json(eventDocument);
    });
});

//CREATE ONE EVENT
router.post("/", requireAuth, uploader.single("eventImg"), (req, res, next) => {
  const updateValues = { ...req.body };

  if (req.file) {
    updateValues.eventImg = req.file.path; /*changer image par eventImg*/
  }

  updateValues.owner = req.session.currentUser;

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
    console.log("req body", event);

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
          event.eventImg = req.file.path;
        }

        console.log("req", req.file);

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
      console.log(req.params);
      if (!eventDocument) {
        return res.status(404).json({ message: "Event not found" });
      }
      if (eventDocument.owner.toString() !== req.session.currentUser) {
        console.log("owner", eventDocument.owner.toString());
        console.log("session user", req.session.currentUser);
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
