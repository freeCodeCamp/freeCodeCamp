import express from 'express';
import { logover } from './logger/index';
import { challengeRouter } from './routes/challenge';
import { userRouter } from './routes/user';
import { mongoClient, connect } from './database/index';

const app = express();

await connect();

app.use(express.json());

app.use('/user', userRouter);
app.use('/challenge', challengeRouter);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  logover.info(`Server listening on port ${PORT}`);
});
