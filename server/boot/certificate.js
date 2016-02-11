import _ from 'lodash';
import dedent from 'dedent';
import { Observable } from 'rx';
import debug from 'debug';

import {
  ifNoUser401,
  ifNoUserSend
} from '../utils/middleware';

import { observeQuery } from '../utils/rx';

import {
  frontEndChallengeId,
  dataVisChallengeId,
  backEndChallengeId
} from '../utils/constantStrings.json';

import {
  completeCommitment$
} from '../utils/commit';

import certTypes from '../utils/certTypes.json';

const log = debug('freecc:certification');
const sendMessageToNonUser = ifNoUserSend(
  'must be logged in to complete.'
);

function isCertified(ids, challengeMap = {}) {
  return _.every(ids, ({ id }) => challengeMap[id]);
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
    [certTypes.dataVis]: getIdsForCert$(dataVisChallengeId, Challenge),
    [certTypes.backEnd]: getIdsForCert$(backEndChallengeId, Challenge)
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
    const { user } = req;
    return certTypeIds[certType]
      .flatMap(challenge => {
        const {
          id,
          tests,
          name,
          challengeType
        } = challenge;
        if (
          !user[certType] &&
          isCertified(tests, user.challengeMap)
        ) {
          const updateData = {
            $set: {
              [`challengeMap.${id}`]: {
                id,
                name,
                completedDate: new Date(),
                challengeType
              },
              [certType]: true
            }
          };

          return req.user.update$(updateData)
            // If user has commited to nonprofit,
            // this will complete his pledge
            .flatMap(
              () => completeCommitment$(user),
              ({ count }, pledgeOrMessage) => {
                if (typeof pledgeOrMessage === 'string') {
                  log(pledgeOrMessage);
                }
                log(`${count} documents updated`);
                return true;
              }
            );
        }
        return Observable.just(false);
      })
      .subscribe(
        (didCertify) => {
          if (didCertify) {
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
    return req.user.update$({ $set: { isHonest: true } }).subscribe(
      () => res.status(200).send(true),
      next
    );
  }
}
