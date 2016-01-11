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
  frontEndChallengeId,
  dataVisChallengeId,
  backEndChallengeId
} from '../utils/constantStrings.json';

import {
  completeCommitment$
} from '../utils/commit';

import certTypes from '../utils/certTypes.json';

const debug = debugFactory('freecc:certification');
const sendMessageToNonUser = ifNoUserSend(
  'must be logged in to complete.'
);

function isCertified(ids, { completedChallenges }) {
  return _.every(ids, ({ id }) => {
    return _.some(completedChallenges, (challenge) => {
      return challenge.id === id || challenge._id === id;
    });
  });
}

function getIdsForCert$(id, Challenge) {
  return observeQuery(
    Challenge,
    'findById',
    id,
    {
      id: true,
      tests: true,
      name: true,
      challengeType: true
    }
  )
    .shareReplay();
}

export default function certificate(app) {
  const router = app.loopback.Router();
  const { Challenge } = app.models;

  const certTypeIds = {
    [certTypes.frontEnd]: getIdsForCert$(frontEndChallengeId, Challenge),
    [certTypes.backEnd]: getIdsForCert$(dataVisChallengeId, Challenge),
    [certTypes.dataVis]: getIdsForCert$(backEndChallengeId, Challenge)
  };

  router.post(
    '/certificate/verify/front-end',
    ifNoUser401,
    verifyCert.bind(null, certTypes.frontEnd)
  );

  router.post(
    '/certificate/verify/back-end',
    ifNoUser401,
    verifyCert.bind(null, certTypes.backEnd)
  );

  router.post(
    '/certificate/verify/data-visualization',
    ifNoUser401,
    verifyCert.bind(null, certTypes.dataVis)
  );

  router.post(
    '/certificate/honest',
    sendMessageToNonUser,
    postHonest
  );

  app.use(router);

  function verifyCert(certType, req, res, next) {
    Observable.just({})
      .flatMap(() => {
        return certTypeIds[certType];
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
          !user[certType] &&
          isCertified(tests, user)
        ) {
          user[certType] = true;
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
            user[certType]
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
