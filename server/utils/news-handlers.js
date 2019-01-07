import debug from 'debug';

import { createReferralHandler } from './popularity-handlers';

const routerLog = debug('fcc:utils:news-handlers');

export function createShortLinkHandler(app) {
  const { Article } = app.models;

  const referralHandler = createReferralHandler(app);

  return function shortLinkHandler(req, res, next) {
    const { query, user } = req;
    const { shortId } = req.params;

    referralHandler(query, shortId, !!user);

    routerLog(req.origin);
    routerLog(query.refsource);
    if (!shortId) {
      return res.redirect('/news');
    }
    routerLog('shortId', shortId);
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
          author: { username }
        } = article;
        const slug = `/news/${username}/${slugPart}`;
        return res.redirect(slug);
      }
    );
  };
}
