import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import NewsApp from '../../news/NewsApp';

function serveNewsApp(req, res) {
  const context = {};
  const markup = renderToString(
    <StaticRouter basename='/news' context={context} location={req.url}>
      <NewsApp />
    </StaticRouter>
  );
  return res.render('layout-news', { title: 'News | freeCodeCamp', markup });
}

export default function newsBoot(app) {
  const router = app.loopback.Router();

  router.get('/news', serveNewsApp);
  router.get('/news/*', serveNewsApp);

  app.use(router);
}
