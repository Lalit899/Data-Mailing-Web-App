import mongoose, { Schema } from "mongoose";

const formschema = new Schema({
    name:String,
    email:String,
    hobbies:String,
    phone:String,
});

export const Formdb = mongoose.models.Formdb || mongoose.model("Formdb",formschema);