import { has, pick, isEmpty } from 'lodash';
import debug from 'debug';

const log = debug('fcc:boot:news');

export default function newsBoot(app) {
  const api = app.loopback.Router();

  // router.get('/n', (req, res) => res.redirect('/news'));
  // router.get('/n/:shortId', createShortLinkHandler(app));

  api.post('/p', createPopularityHandler(app));

  app.use('/internal', api);
}

function createShortLinkHandler(app) {
  const { Article } = app.models;

  const referralHandler = createRerralHandler(app);

  return function shortLinkHandler(req, res, next) {
    const { query, user } = req;
    const { shortId } = req.params;

    referralHandler(query, shortId, !!user);

    log(req.origin);
    log(query.refsource);
    if (!shortId) {
      return res.sendStatus(400);
    }
    log('shortId', shortId);
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
          return res.sendStatus(404);
        }
        const {
          slugPart,
          shortId,
          author: { username }
        } = article;
        const slug = `/news/${username}/${slugPart}--${shortId}`;
        const articleData = {
          ...pick(article, [
            'author',
            'renderableContent',
            'firstPublishedDate',
            'viewCount',
            'title',
            'featureImage',
            'meta'
          ]),
          slug
        };
        return res.json(articleData);
      }
    );
  };
}

function createPopularityHandler(app) {
  const { Article, Popularity } = app.models;

  return function handlePopularityStats(req, res, next) {
    const { body, user } = req;

    if (
      !has(body, 'event') ||
      !has(body, 'timestamp') ||
      !has(body, 'shortId')
    ) {
      console.warn('Popularity event recieved from client is malformed');
      console.log(JSON.stringify(body, null, 2));
      // sending 200 because the client shouldn't care for this
      return res.sendStatus(200);
    }
    const { shortId } = body;
    log('shortId', shortId);
    return Article.findOne({ shortId }, (err, article) => {
      if (err) {
        log(err);
        return next(err);
      }
      if (!article || isEmpty(article)) {
        log('No article found to handl;e the populartity update');
      // sending 200 because the client shouldn't care for this
        return res.sendStatus(200);
      }
      const populartiyUpdate = {
        ...body,
        byAuthenticatedUser: !!user
      };
      Popularity.findOne(
        { where: { articleId: shortId } },
        (err, popularity) => {
          if (err) {
            log(err);
            return next(err);
          }
          if (popularity) {
            return popularity.updateAttribute(
              'events',
              [populartiyUpdate, ...popularity.events],
              err => {
                if (err) {
                  log(err);
                  return next(err);
                }
                return log('poplarity updated');
              }
            );
          }
          return Popularity.create(
            {
              events: [populartiyUpdate],
              articleId: shortId
            },
            err => {
              if (err) {
                log(err);
                return next(err);
              }
              return log('poulartiy created');
            }
          );
        }
      );
      return body.event === 'view'
        ? article.updateAttributes(
            { viewCount: article.viewCount + 1 },
            err => {
              if (err) {
                log(err);
                return next(err);
              }
              return log('article views updated');
            }
          )
        : null;
    });
  };
}

function createRerralHandler(app) {
  const { Popularity } = app.models;

  return function referralHandler(query, shortId, byAuthenticatedUser) {
    if (!query.refsource) {
      return null;
    }
    const eventUpdate = {
      event: `referral - ${query.refsource}`,
      timestamp: new Date(Date.now()),
      byAuthenticatedUser
    };
    return Popularity.findOne(
      { where: { articleId: shortId } },
      (err, popularity) => {
        if (err) {
          console.error(
            'Failed finding a `Popularity` in a referral handler',
            err
          );
          return null;
        }

        if (popularity) {
          return popularity.updateAttribute(
            'events',
            [eventUpdate, ...popularity.events],
            err => {
              if (err) {
                console.error(
                  'Failed in updating the `events` attribute of a `popularity`',
                  err
                );
              }
            }
          );
        }
        return Popularity.create(
          {
            events: [eventUpdate],
            articleId: shortId
          },
          err => {
            if (err) {
              return console.error('Failed creating a new `Popularity`', err);
            }
            return log('poulartiy created');
          }
        );
      }
    );
  };
}
