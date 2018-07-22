import { homeLocation } from '../../config/env';

import { defaultProfileImage } from '../../common/utils/constantStrings.json';
import { randomQuote } from '../../common/app/utils/get-words';
import { cachedMap } from '../utils/map';

export default function bootWelcome(app, done) {
  const { About } = app.models;
  let challengeCount = 0;

  if (!process.env.SEEDING) {
    cachedMap(app.models)
      .do(({ entities: { challenge } }) => {
        challengeCount = Object.keys(challenge).length;
      })
      .subscribe(
        () => {},
        err => {throw new Error(err);},
        () => {
          app.get('/welcome', addDefaultImage, welcome);
          done();
        }
      );
  }

  function addDefaultImage(req, res, next) {
    if (!req.user || req.user.picture) {
      return next();
    }
    return req.user.update$({ picture: defaultProfileImage })
    .subscribe(
      () => next(),
      next
    );
  }

  function welcome(req, res) {
    const { user } = req;

    if (!user) {
      return res.redirect(homeLocation);
    }

    const { quote, author} = randomQuote();
    const title = user ?
      `Welcome, ${user.name ? user.name : 'Camper'}!` :
      'Learn to Code and Help Nonprofits';
    const completedChallengeCount = user && user.completedChallengeCount || 0;
    const completedProjectCount = user && user.completedProjectCount || 0;
    const completedCertCount = user && user.completedCertCount || 0;
    const completedLegacyCertCount = user && user.completedLegacyCertCount || 0;
    return Promise.all([
      // news.getFeed(),
      About.getActiveUsersForRendering()
    ])
    .then(([
      // feed,
      activeUsers
    ]) => {
      return res.render(
        'userHome', {
          activeUsers,
          author,
          challengeCount,
          completedChallengeCount,
          completedProjectCount,
          completedCertCount,
          completedLegacyCertCount,
          // feed,
          quote,
          title
        });
      });
    }
  }
