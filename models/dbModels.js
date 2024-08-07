import mongoose from "mongoose";
import eventSchema from "./eventSchema";
import userSchema from "./userSchema";

const eventDb = mongoose.connection.useDb("event-db");

const Event = eventDb.model("Event", eventSchema);
const User = eventDb.model("User", userSchema);

export { Event, User };
