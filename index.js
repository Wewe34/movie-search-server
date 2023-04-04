import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import favorites from './routes/favorites.js';
import watchlist from './routes/watchlist.js';
import User from './db/schemas/User.js';

dotenv.config();

const app = express();
app.use(express.json())
app.use(cors({origin: [process.env.CLIENT], credentials: true}))

app.use('/favorites', favorites);
app.use('/watchlist', watchlist);

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  console.log('Request from client!');
  res.send('from the server!!');
})

run()
async function run() {
  try {
    const user = await User.findOne({user_id:'112851022833526308013'});
    console.log(user);
  } catch (error) {
    console.error(error)
  }
}

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

