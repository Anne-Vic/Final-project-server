const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  date: { type: String, required: true },
  sport: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  meetingPoint: { type: String, required: true },
  time: { type: String, required: true },
  eventImg: {
    type: String,
    default:
      "https://res.cloudinary.com/djfnm2nsv/image/upload/v1610666964/Catch/Duo_m5ooon.jpg",
  },
  description: { type: String, required: true },
  isComplete: {
    type: Boolean,
    required: true,
    enum: ["true", "false"],
  },
  level: {
    type: String,
    required: true,
    enum: ["Beginner", "Intermediate", "Advanced"],
  },
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  participants: [{ type: Schema.Types.ObjectId, ref: "User" }],
  messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
