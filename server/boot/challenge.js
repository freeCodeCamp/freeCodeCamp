import _ from 'lodash';
// import { Observable, Scheduler } from 'rx';
import debug from 'debug';
import accepts from 'accepts';

import { ifNoUserSend } from '../utils/middleware';

const log = debug('fcc:challenges');

function buildUserUpdate(
  user,
  challengeId,
  completedChallenge,
  timezone
) {
  const updateData = { $set: {} };
  let finalChallenge;
  const { timezone: userTimezone, challengeMap = {} } = user;

  const oldChallenge = challengeMap[challengeId];
  const alreadyCompleted = !!oldChallenge;


  if (alreadyCompleted) {
    // add data from old challenge
    finalChallenge = {
      ...completedChallenge,
      completedDate: oldChallenge.completedDate,
      lastUpdated: completedChallenge.completedDate
    };
  } else {
    updateData.$push = {
      progressTimestamps: {
        timestamp: Date.now(),
        completedChallenge: challengeId
      }
    };
    finalChallenge = completedChallenge;
  }

  updateData.$set = {
    [`challengeMap.${challengeId}`]: finalChallenge
  };

  if (
    timezone &&
    timezone !== 'UTC' &&
    (!userTimezone || userTimezone === 'UTC')
  ) {
    updateData.$set = {
      ...updateData.$set,
      timezone: userTimezone
    };
  }

  log('user update data', updateData);

  return { alreadyCompleted, updateData };
}

module.exports = function(app) {
  const router = app.loopback.Router();
  const send200toNonUser = ifNoUserSend(true);

  router.post(
    '/modern-challenge-completed',
    send200toNonUser,
    modernChallengeCompleted
  );

  router.post(
    '/completed-challenge/',
    send200toNonUser,
    completedChallenge
  );

  router.post(
    '/completed-zipline-or-basejump',
    send200toNonUser,
    completedZiplineOrBasejump
  );

  app.use(router);

  function modernChallengeCompleted(req, res, next) {
    const type = accepts(req).type('html', 'json', 'text');
    req.checkBody('id', 'id must be an ObjectId').isMongoId();
    req.checkBody('files', 'files must be an object with polyvinyls for keys')
      .isFiles();

    const errors = req.validationErrors(true);
    if (errors) {
      if (type === 'json') {
        return res.status(403).send({ errors });
      }

      log('errors', errors);
      return res.sendStatus(403);
    }

    const user = req.user;
    return user.getChallengeMap$()
      .flatMap(() => {
        const completedDate = Date.now();
        const {
          id,
          files
        } = req.body;

        const { alreadyCompleted, updateData } = buildUserUpdate(
          user,
          id,
          {
            id,
            files,
            completedDate
          }
        );

        const points = alreadyCompleted ? user.points : user.points + 1;

        return user.update$(updateData)
          .doOnNext(({ count }) => log('%s documents updated', count))
          .map(() => {
            if (type === 'json') {
              return res.json({
                points,
                alreadyCompleted
              });
            }
            return res.sendStatus(200);
          });
      })
      .subscribe(() => {}, next);
  }

  function completedChallenge(req, res, next) {
    req.checkBody('id', 'id must be an ObjectId').isMongoId();
    req.checkBody('name', 'name must be at least 3 characters')
      .isString()
      .isLength({ min: 3 });
    req.checkBody('challengeType', 'challengeType must be an integer')
      .isNumber();

    const type = accepts(req).type('html', 'json', 'text');

    const errors = req.validationErrors(true);

    if (errors) {
      if (type === 'json') {
        return res.status(403).send({ errors });
      }

      log('errors', errors);
      return res.sendStatus(403);
    }

    return req.user.getChallengeMap$()
      .flatMap(() => {
        const completedDate = Date.now();
        const {
          id,
          name,
          challengeType,
          solution,
          timezone
        } = req.body;

        const { alreadyCompleted, updateData } = buildUserUpdate(
          req.user,
          id,
          {
            id,
            challengeType,
            solution,
            name,
            completedDate
          },
          timezone
        );

        const user = req.user;
        const points = alreadyCompleted ? user.points : user.points + 1;

        return user.update$(updateData)
          .doOnNext(({ count }) => log('%s documents updated', count))
          .map(() => {
            if (type === 'json') {
              return res.json({
                points,
                alreadyCompleted
              });
            }
            return res.sendStatus(200);
          });
      })
      .subscribe(() => {}, next);
  }

  function completedZiplineOrBasejump(req, res, next) {
    const type = accepts(req).type('html', 'json', 'text');
    req.checkBody('id', 'id must be an ObjectId').isMongoId();
    req.checkBody('name', 'Name must be at least 3 characters')
      .isString()
      .isLength({ min: 3 });
    req.checkBody('challengeType', 'must be a number')
      .isNumber();
    req.checkBody('solution', 'solution must be a url').isURL();

    const errors = req.validationErrors(true);

    if (errors) {
      if (type === 'json') {
        return res.status(403).send({ errors });
      }
      log('errors', errors);
      return res.sendStatus(403);
    }

    const { user, body = {} } = req;

    const completedChallenge = _.pick(
      body,
      [ 'id', 'name', 'solution', 'githubLink', 'challengeType' ]
    );
    completedChallenge.challengeType = +completedChallenge.challengeType;
    completedChallenge.completedDate = Date.now();

    if (
      !completedChallenge.solution ||
      // only basejumps require github links
      (
        completedChallenge.challengeType === 4 &&
        !completedChallenge.githubLink
      )
    ) {
      req.flash('errors', {
        msg: 'You haven\'t supplied the necessary URLs for us to inspect ' +
          'your work.'
      });
      return res.sendStatus(403);
    }


    return user.getChallengeMap$()
      .flatMap(() => {
        const {
          alreadyCompleted,
          updateData
        } = buildUserUpdate(user, completedChallenge.id, completedChallenge);

        return user.update$(updateData)
          .doOnNext(({ count }) => log('%s documents updated', count))
          .doOnNext(() => {
            if (type === 'json') {
              return res.send({
                alreadyCompleted,
                points: alreadyCompleted ? user.points : user.points + 1
              });
            }
            return res.status(200).send(true);
          });
      })
      .subscribe(() => {}, next);
  }
};
