import mongoose from "mongoose";

export const selectionSchema = new mongoose.Schema({
    Title: String,
    Year: String,
    Rated: String,
    Released: String,
    Runtime: String,
    Genre: String,
    Director: String,
    Writer: String,
    Actors: String,
    Plot: String,
    Poster: String,
    Ratings: [],
    imdbVotes: String,
    imdbID: String,
    Type: String
})

