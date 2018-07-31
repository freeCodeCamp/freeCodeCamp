import React from 'react';
import { renderToString } from 'react-dom/server';

import NewsApp from '../../news/NewsApp';

export default function newsBoot(app) {
  const router = app.loopback.Router();

  router.get('/', (req, res) => {
    const markup = renderToString(<NewsApp />);
    return res.render('layout-news', {title: 'Hello News?', markup});
  });

  app.use('/news', router);
}
