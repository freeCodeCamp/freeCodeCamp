import { has } from 'lodash';
import debug from 'debug';

const apiLog = debug('fcc:utils:popularity-handlers');

export function createPopularityHandler(app) {
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
    res.sendStatus(200);
    const { shortId } = body;
    apiLog('shortId', shortId);
    const populartiyUpdate = {
      ...body,
      byAuthenticatedUser: !!user
    };
    Popularity.findOne({ where: { articleId: shortId } }, (err, popularity) => {
      if (err) {
        apiLog(err);
        return next(err);
      }
      if (popularity) {
        return popularity.updateAttribute(
          'events',
          [populartiyUpdate, ...popularity.events],
          err => {
            if (err) {
              apiLog(err);
              return next(err);
            }
            return apiLog('poplarity updated');
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
            apiLog(err);
            return next(err);
          }
          return apiLog('poulartiy created');
        }
      );
    });
    return body.event === 'view'
      ? Article.findOne({ where: { shortId } }, (err, article) => {
          if (err) {
            apiLog(err);
            next(err);
          }
          return article.updateAttributes(
            { viewCount: article.viewCount + 1 },
            err => {
              if (err) {
                apiLog(err);
                return next(err);
              }
              return apiLog('article views updated');
            }
          );
        })
      : null;
  };
}

export function createRerralHandler(app) {
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
            return apiLog('poulartiy created');
          }
        );
      }
    );
  };
}
