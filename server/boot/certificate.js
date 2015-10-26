import _ from 'lodash';
import dedent from 'dedent';
import { Observable } from 'rx';
import debugFactory from 'debug';

import {
  ifNoUser401,
  ifNoUserSend
} from '../utils/middleware';

import {
  saveUser,
  observeQuery
} from '../utils/rx';

import {
  frontEndChallangeId,
  fullStackChallangeId
} from '../utils/constantStrings.json';

import {
  completeCommitment$
} from '../utils/commit';

const debug = debugFactory('freecc:certification');
const sendMessageToNonUser = ifNoUserSend(
  'must be logged in to complete.'
);

function isCertified(frontEndIds, { completedChallenges, isFrontEndCert }) {
  if (isFrontEndCert) {
    return true;
  }
  return _.every(frontEndIds, ({ id }) => {
    return _.some(completedChallenges, (challenge) => {
      return challenge.id === id || challenge._id === id;
    });
  });
}

export default function certificate(app) {
  const router = app.loopback.Router();
  const { Challenge } = app.models;

  const frontEndChallangeIds$ = observeQuery(
    Challenge,
    'findById',
    frontEndChallangeId,
    {
      id: true,
      tests: true,
      name: true,
      challengeType: true
    }
  )
    .shareReplay();

  const fullStackChallangeIds$ = observeQuery(
    Challenge,
    'findById',
    fullStackChallangeId,
    {
      id: true,
      tests: true,
      name: true,
      challengeType: true
    }
  )
    .shareReplay();

  router.post(
    '/certificate/verify/front-end',
    ifNoUser401,
    verifyCert
  );

  router.post(
    '/certificate/verify/full-stack',
    ifNoUser401,
    verifyCert
  );

  router.post(
    '/certificate/honest',
    sendMessageToNonUser,
    postHonest
  );

  app.use(router);

  function verifyCert(req, res, next) {
    const isFront = req.path.split('/').pop() === 'front-end';
    Observable.just({})
      .flatMap(() => {
        if (isFront) {
          return frontEndChallangeIds$;
        }
        return fullStackChallangeIds$;
      })
      .flatMap(challenge => {
        const { user } = req;
        const {
          id,
          tests,
          name,
          challengeType
        } = challenge;
        if (
          isFront && !user.isFrontEndCert && isCertified(tests, user) ||
          !isFront && !user.isFullStackCert && isCertified(tests, user)
        ) {
          debug('certified');
          if (isFront) {
            user.isFrontEndCert = true;
          } else {
            user.isFullStackCert = true;
          }

          user.completedChallenges.push({
            id,
            name,
            completedDate: new Date(),
            challengeType
          });
          return saveUser(user)
            // If user has commited to nonprofit,
            // this will complete his pledge
            .flatMap(
              user => completeCommitment$(user),
              (user, pledgeOrMessage) => {
                if (typeof pledgeOrMessage === 'string') {
                  debug(pledgeOrMessage);
                }
                // we are only interested in the user object
                // so we ignore return from completeCommitment$
                return user;
              }
            );
        }
        return Observable.just(user);
      })
      .subscribe(
        user => {
          if (
            isFront && user.isFrontEndCert ||
            !isFront && user.isFullStackCert
          ) {
            return res.status(200).send(true);
          }
          return res.status(200).send(
            dedent`
              Looks like you have not completed the neccessary steps.
              Please return to the challenge map.
            `
          );
        },
        next
      );
  }

  function postHonest(req, res, next) {
    const { user } = req;
    user.isHonest = true;
    saveUser(user)
      .subscribe(
        (user) => {
          res.status(200).send(!!user.isHonest);
        },
        next
      );
  }
}
