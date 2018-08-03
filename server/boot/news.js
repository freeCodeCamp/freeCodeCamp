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
  if (context.url) {
    // 'client-side' routing hit on a redirect
    return res.redirect(context.url);
  }
  return res.render('layout-news', { title: 'News | freeCodeCamp', markup });
}

function createReferralHandler(app) {
  return function referralHandler(req, res, next) {
    const { Article } = app.models;
    const { shortId } = req.params;
    if (!shortId) {
      return res.redirect('/news');
    }
    console.log(shortId);
    return Article.findOne(
      {
        where: {
          or: [{ shortId }, { slugPart: shortId }]
        }
      },
      (err, article) => {
        if (err) {
          next(err);
        }
        if (!article) {
          return res.redirect('/news');
        }
        const {
          slugPart,
          shortId,
          author: { username }
        } = article;
        const slug = `/news/${username}/${slugPart}--${shortId}`;
        return res.redirect(slug);
      }
    );
  };
}

export default function newsBoot(app) {
  const router = app.loopback.Router();

  router.get('/n', (req, res) => res.redirect('/news'));
  router.get('/n/:shortId', createReferralHandler(app));

  router.get('/news', serveNewsApp);
  router.get('/news/*', serveNewsApp);

  app.use(router);
}
