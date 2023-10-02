import * as dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import express from 'express';
import { blockRoute } from './routes/block-route';
import { indexRoute } from './routes/index-route';
import { saveRoute } from './routes/save-route';
import { stepRoute } from './routes/step-route';
import { superblockRoute } from './routes/super-block-route';
import { toolsRoute } from './routes/tools-route';

const app = express();

app.use(
  cors({
    origin: process.env.CHALLENGE_EDITOR_CLIENT_LOCATION
  })
);

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());

app.post('/:superblock/:block/_tools/:command', (req, res, next) => {
  toolsRoute(req, res).catch(next);
});

app.post('/:superblock/:block/:step', (req, res, next) => {
  saveRoute(req, res).catch(next);
});

app.get('/:superblock/:block/:step', (req, res, next) => {
  stepRoute(req, res).catch(next);
});

app.get('/:superblock/:block', (req, res, next) => {
  blockRoute(req, res).catch(next);
});

app.get('/:superblock', (req, res, next) => {
  superblockRoute(req, res).catch(next);
});

app.get('/', indexRoute);

app.listen(3200, () => console.log('App is live on 3200!'));
