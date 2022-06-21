import cors from 'cors';
import express from 'express';
import { blockRoute } from './routes/blockRoute';
import { indexRoute } from './routes/indexRoute';
import { saveRoute } from './routes/saveRoute';
import { stepRoute } from './routes/stepRoute';
import { superblockRoute } from './routes/superblockRoute';
import { toolsRoute } from './routes/toolsRoute';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3300'
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
