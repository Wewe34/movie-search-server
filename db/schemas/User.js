import mongoose from "mongoose";
import { selectionSchema } from "./Selection.js";

const userSchema = new mongoose.Schema({
    user_id: String,
    name: String,
    favorites: [selectionSchema],
    watchlist: [selectionSchema]
})

export default mongoose.model("User", userSchema);