/* eslint-disable @typescript-eslint/no-misused-promises */
import cors from 'cors';
import express from 'express';
import { blockRoute } from './routes/blockRoute';
import { indexRoute } from './routes/indexRoute';
import { saveRoute } from './routes/saveRoute';
import { stepRoute } from './routes/stepRoute';
import { superblockRoute } from './routes/superblockRoute';
import { toolsRoute } from './routes/toolsRoute';

(() => {
  const app = express();

  app.use(
    cors({
      origin: 'http://localhost:3300'
    })
  );

  app.use(express.static('public'));
  app.use(express.json());
  app.use(express.urlencoded());

  app.post('/:superblock/:block/_tools/:command', async (req, res) => {
    await toolsRoute(req, res);
  });

  app.post('/:superblock/:block/:step', async (req, res) => {
    await saveRoute(req, res);
  });

  app.get('/:superblock/:block/:step', async (req, res) => {
    await stepRoute(req, res);
  });

  app.get('/:superblock/:block', async (req, res) => {
    await blockRoute(req, res);
  });

  app.get('/:superblock', async (req, res) => {
    await superblockRoute(req, res);
  });

  app.get('/', indexRoute);

  app.listen(3200, () => console.log('App is live on 3200!'));
})();
