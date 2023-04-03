import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.listen(8000, () =>
  console.log('listening on port 8000!'),
);