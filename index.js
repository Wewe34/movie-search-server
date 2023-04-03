import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';



dotenv.config();

const app = express();

app.get('/', (req, res) => {
  console.log('Request from client!');
})

try {
  mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}${process.env.MONGO_CLUSTER}${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`);
  app.listen(8000, () =>
  console.log('listening on port 8000!!'),
);
} catch (error) {
  console.error(error)
}

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => {
  console.log("Connected to DB!")
})

