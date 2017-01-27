import _ from 'lodash';
import debug from 'debug';
import accepts from 'accepts';
import dedent from 'dedent';

import { ifNoUserSend } from '../utils/middleware';
import { cachedMap } from '../utils/map';
import createNameIdMap from '../../common/utils/create-name-id-map';
import {
  checkMapData,
  getFirstChallenge
} from '../../common/utils/get-first-challenge';

const log = debug('fcc:boot:challenges');

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

  return {
    alreadyCompleted,
    updateData,
    completedDate: finalChallenge.completedDate,
    lastUpdated: finalChallenge.lastUpdated
  };
}

export default function(app) {
  const send200toNonUser = ifNoUserSend(true);
  const api = app.loopback.Router();
  const router = app.loopback.Router();
  const Block = app.models.Block;
  const map$ = cachedMap(Block);

  api.post(
    '/modern-challenge-completed',
    send200toNonUser,
    modernChallengeCompleted
  );

  // deprecate endpoint
  // remove once new endpoint is live
  api.post(
    '/completed-challenge',
    send200toNonUser,
    completedChallenge
  );

  api.post(
    '/challenge-completed',
    send200toNonUser,
    completedChallenge
  );

  // deprecate endpoint
  // remove once new endpoint is live
  api.post(
    '/completed-zipline-or-basejump',
    send200toNonUser,
    projectCompleted
  );

  api.post(
    '/project-completed',
    send200toNonUser,
    projectCompleted
  );

  api.post(
    '/backend-challenge-completed',
    send200toNonUser,
    backendChallengeCompleted
  );

  router.get(
    '/challenges/current-challenge',
    redirectToCurrentChallenge
  );

  app.use(api);
  app.use('/:lang', router);

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

        const {
          alreadyCompleted,
          updateData,
          lastUpdated
        } = buildUserUpdate(
          user,
          id,
          { id, files, completedDate }
        );

        const points = alreadyCompleted ? user.points : user.points + 1;

        return user.update$(updateData)
          .doOnNext(({ count }) => log('%s documents updated', count))
          .map(() => {
            if (type === 'json') {
              return res.json({
                points,
                alreadyCompleted,
                completedDate,
                lastUpdated
              });
            }
            return res.sendStatus(200);
          });
      })
      .subscribe(() => {}, next);
  }

  function completedChallenge(req, res, next) {
    req.checkBody('id', 'id must be an ObjectId').isMongoId();
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
        const { id, solution, timezone } = req.body;

        const {
          alreadyCompleted,
          updateData,
          lastUpdated
        } = buildUserUpdate(
          req.user,
          id,
          { id, solution, completedDate },
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
                alreadyCompleted,
                completedDate,
                lastUpdated
              });
            }
            return res.sendStatus(200);
          });
      })
      .subscribe(() => {}, next);
  }

  function projectCompleted(req, res, next) {
    const type = accepts(req).type('html', 'json', 'text');
    req.checkBody('id', 'id must be an ObjectId').isMongoId();
    req.checkBody('challengeType', 'must be a number').isNumber();
    req.checkBody('solution', 'solution must be a URL').isURL();

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
      [ 'id', 'solution', 'githubLink', 'challengeType' ]
    );
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
          updateData,
          lastUpdated
        } = buildUserUpdate(user, completedChallenge.id, completedChallenge);

        return user.update$(updateData)
          .doOnNext(({ count }) => log('%s documents updated', count))
          .doOnNext(() => {
            if (type === 'json') {
              return res.send({
                alreadyCompleted,
                points: alreadyCompleted ? user.points : user.points + 1,
                completedDate: completedChallenge.completedDate,
                lastUpdated
              });
            }
            return res.status(200).send(true);
          });
      })
      .subscribe(() => {}, next);
  }

  function backendChallengeCompleted(req, res, next) {
    const type = accepts(req).type('html', 'json', 'text');
    req.checkBody('id', 'id must be an ObjectId').isMongoId();
    req.checkBody('solution', 'solution must be a URL').isURL();

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
      [ 'id', 'solution' ]
    );
    completedChallenge.completedDate = Date.now();


    return user.getChallengeMap$()
      .flatMap(() => {
        const {
          alreadyCompleted,
          updateData,
          lastUpdated
        } = buildUserUpdate(user, completedChallenge.id, completedChallenge);

        return user.update$(updateData)
          .doOnNext(({ count }) => log('%s documents updated', count))
          .doOnNext(() => {
            if (type === 'json') {
              return res.send({
                alreadyCompleted,
                points: alreadyCompleted ? user.points : user.points + 1,
                completedDate: completedChallenge.completedDate,
                lastUpdated
              });
            }
            return res.status(200).send(true);
          });
      })
      .subscribe(() => {}, next);
  }

  function redirectToCurrentChallenge(req, res, next) {
    const { user } = req;
    return map$
      .map(({ entities, result }) => ({
        result,
        entities: createNameIdMap(entities)
      }))
      .map(map => {
        checkMapData(map);
        const {
          entities: { challenge: challengeMap, challengeIdToName }
        } = map;
        let finalChallenge;
        const dashedName = challengeIdToName[user && user.currentChallengeId];
        finalChallenge = challengeMap[dashedName];
        // redirect to first challenge
        if (!finalChallenge) {
          finalChallenge = getFirstChallenge(map);
        }
        const { block, dashedName: finalDashedName } = finalChallenge || {};
        if (!finalDashedName || !block) {
          // this should normally not be hit if database is properly seeded
          console.error(new Error(dedent`
            Attemped to find '${dashedName}'
            from '${user && user.currentChallengeId || 'no challenge id found'}'
            but came up empty.
            db may not be properly seeded.
          `));
          if (dashedName) {
            // attempt to find according to dashedName
            return `/challenges/${dashedName}`;
          } else {
            return null;
          }
        }
        return `/challenges/${block}/${finalDashedName}`;
      })
      .subscribe(
        redirect => res.redirect(redirect || '/map'),
        next
      );
  }
}
