import { has, pick, isEmpty } from 'lodash';
import debug from 'debug';
import { reportError } from '../middlewares/error-reporter';

const log = debug('fcc:boot:news');

export default function newsBoot(app) {
  const api = app.loopback.Router();

  api.get('/n/:shortId', createShortLinkHandler(app));

  api.post('/p', createPopularityHandler(app));

  app.use('/internal', api);
}

function createShortLinkHandler(app) {
  const { Article } = app.models;

  const referralHandler = createReferralHandler(app);

  return function shortLinkHandler(req, res, next) {
    const { query, user } = req;
    const { shortId } = req.params;

    // We manually report the error here as it should not affect this request
    referralHandler(query, shortId, !!user).catch(err => reportError(err));

    if (!shortId) {
      return res.sendStatus(400);
    }
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
          return res.status(404).send('Could not find article by shortId');
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
            'slugPart',
            'shortId',
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

  function findArticleByShortId(shortId) {
    return new Promise((resolve, reject) =>
      Article.findOne({ where: { shortId } }, (err, article) => {
        if (err) {
          log('Error returned from Article.findOne(shortId)');
          return reject(err);
        }
        log('article found');
        return resolve(article);
      })
    );
  }

  function findPopularityByShortId(shortId) {
    return new Promise((resolve, reject) =>
      Popularity.findOne(
        { where: { articleId: shortId } },
        (err, popularity) => {
          if (err) {
            log('Error returned from Popularity.findOne(shortId)');
            return reject(err);
          }
          log('popularity found');
          return resolve(popularity);
        }
      )
    );
  }

  function createPopularity(popularityUpdate, shortId) {
    return new Promise((resolve, reject) =>
      Popularity.create(
        {
          events: [popularityUpdate],
          articleId: shortId
        },
        err => {
          if (err) {
            return reject(err);
          }
          log('poulartiy created');
          return resolve();
        }
      )
    );
  }

  function updatePopularity(popularity, popularityUpdate) {
    return new Promise((resolve, reject) =>
      popularity.updateAttribute(
        'events',
        [popularityUpdate, ...popularity.events],
        err => {
          if (err) {
            log('Error returned from popularity.updateAttribute()');
            return reject(err);
          }
          log('poplarity updated');
          return resolve();
        }
      )
    );
  }

  function incrementArticleViews(article) {
    return new Promise((resolve, reject) =>
      article.updateAttributes({ $inc: { viewCount: 1 } }, err => {
        if (err) {
          log(err);
          return reject(err);
        }
        log('article views updated');
        return resolve();
      })
    );
  }

  return async function handlePopularityStats(req, res, next) {
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

    const articlePromise = findArticleByShortId(shortId);
    const popularityPromise = findPopularityByShortId(shortId);

    const [article, popularity] = await Promise.all([
      articlePromise,
      popularityPromise
    ]).catch(err => {
      log('find catch');
      return next(err);
    });
    if (!article || isEmpty(article)) {
      log('No article found to handle the populartity update');
      // sending 200 because the client shouldn't care for this
      return res.sendStatus(200);
    }

    const populartiyUpdate = {
      ...body,
      byAuthenticatedUser: !!user
    };

    const populartiyUpdateOrCreatePromise = isEmpty(popularity)
      ? createPopularity(populartiyUpdate, shortId)
      : updatePopularity(popularity, populartiyUpdate);
    const maybeUpdateArticlePromise =
      body.event === 'view' ? incrementArticleViews(article) : null;
    return Promise.all([
      populartiyUpdateOrCreatePromise,
      maybeUpdateArticlePromise
    ])
      .then(() => res.sendStatus(200))
      .catch(err => {
        log('updates catch');
        return next(err);
      });
  };
}

function createReferralHandler(app) {
  const { Popularity } = app.models;

  return function referralHandler(query, shortId, byAuthenticatedUser) {
    if (!query.refsource) {
      return Promise.resolve();
    }
    const eventUpdate = {
      event: `referral - ${query.refsource}`,
      timestamp: new Date(Date.now()),
      byAuthenticatedUser
    };
    return new Promise((resolve, reject) =>
      Popularity.findOne(
        { where: { articleId: shortId } },
        (err, popularity) => {
          if (err) {
            console.error(
              'Failed finding a `Popularity` in a referral handler',
              err
            );
            return reject(err);
          }

          if (popularity) {
            return popularity.updateAttribute(
              'events',
              [eventUpdate, ...popularity.events],
              err => {
                if (err) {
                  return reject(err);
                }
                log('populartiy updated');
                return resolve();
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
                return reject(err);
              }
              log('poulartiy created');
              return resolve();
            }
          );
        }
      )
    );
  };
}
