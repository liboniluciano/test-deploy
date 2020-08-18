import 'dotenv/config';

import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: 'https://marvel-quiz.vercel.app/'
}));
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 5000);