const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  profileImg: {
    type: String,
    default: "/Profil.PNG",
  },
  eventCreated: [{ type: Schema.Types.ObjectId, ref: "Event" }],
  eventJoined: [{ type: Schema.Types.ObjectId, ref: "Event" }],
  // messageCreated : [{type: Schema.Types.ObjectId, ref: Message}],
  // messageJoined : [{type: Schema.Types.ObjectId, ref: Message}],
  // phoneNumber: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
