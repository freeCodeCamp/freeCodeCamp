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

const frontEndChallangeId = '561add10cb82ac38a17513be';
const fullStackChallangeId = '660add10cb82ac38a17513be';
const debug = debugFactory('freecc:certification');
const sendMessageToNonUser = ifNoUserSend(
  'must be logged in to complete.'
);

function isCertified(frontEndIds, { completedChallenges, isFrontEndCert }) {
  if (isFrontEndCert) {
    return true;
  }
  return _.every(frontEndIds, ({ id }) => _.some(completedChallenges, { id }));
}

export default function certificate(app) {
  const router = app.loopback.Router();
  const { Challenge } = app.models;

  const frontEndChallangeIds$ = observeQuery(
    Challenge,
    'findById',
    frontEndChallangeId,
    {
      tests: true
    }
  )
    .map(({ tests = [] }) => tests)
    .shareReplay();

  const fullStackChallangeIds$ = observeQuery(
    Challenge,
    'findById',
    fullStackChallangeId,
    {
      tests: true
    }
  )
    .map(({ tests = [] }) => tests)
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
      .flatMap((tests) => {
        const { user } = req;
        if (
          isFront && !user.isFrontEndCert && isCertified(tests, user) ||
          !isFront && !user.isFullStackCert && isCertified(tests, user)
        ) {
          debug('certified');
          if (isFront) {
            user.isFrontEndCert = true;
            user.completedChallenges.push({
              completedDate: new Date(),
              id: frontEndChallangeId
            })
          } else {
            user.isFullStackCert = true;
            user.completedChallenges.push({
              completedDate: new Date(),
              id: fullStackChallangeId
            })
          }
          return saveUser(user);
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
              Looks like you have not completed the neccessary steps,
              Please return the map
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
