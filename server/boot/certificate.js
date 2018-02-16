import _ from 'lodash';
import loopback from 'loopback';
import path from 'path';
import dedent from 'dedent';
import { Observable } from 'rx';
import debug from 'debug';
import { isEmail } from 'validator';

import {
  ifNoUser401
} from '../utils/middleware';

import { observeQuery } from '../utils/rx';

import {
  // legacy
  frontEndChallengeId,
  backEndChallengeId,
  dataVisId,

  // modern
  respWebDesignId,
  frontEndLibsId,
  dataVis2018Id,
  jsAlgoDataStructId,
  apisMicroservicesId,
  infosecQaId
} from '../utils/constantStrings.json';
import {
  completeCommitment$
} from '../utils/commit';

import certTypes from '../utils/certTypes.json';
import superBlockCertTypeMap from '../utils/superBlockCertTypeMap';

const log = debug('fcc:certification');
const renderCertifedEmail = loopback.template(path.join(
  __dirname,
  '..',
  'views',
  'emails',
  'certified.ejs'
));

function isCertified(ids, challengeMap = {}) {
  return _.every(ids, ({ id }) => _.has(challengeMap, id));
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

// sendCertifiedEmail(
//   {
//     email: String,
//     username: String,
//     isRespWebDesignCert: Boolean,
//     isFrontEndLibsCert: Boolean,
//     isJsAlgoDataStructCert: Boolean,
//     isDataVisCert: Boolean,
//     isApisMicroservicesCert: Boolean,
//     isInfosecQaCert: Boolean
//   },
//   send$: Observable
// ) => Observable
function sendCertifiedEmail(
  {
    email,
    name,
    username,
    isRespWebDesignCert,
    isFrontEndLibsCert,
    isJsAlgoDataStructCert,
    isDataVisCert,
    isApisMicroservicesCert,
    isInfosecQaCert
  },
  send$
) {
  if (
    !isEmail(email) ||
    !isRespWebDesignCert ||
    !isFrontEndLibsCert ||
    !isJsAlgoDataStructCert ||
    !isDataVisCert ||
    !isApisMicroservicesCert ||
    !isInfosecQaCert
  ) {
    return Observable.just(false);
  }
  const notifyUser = {
    type: 'email',
    to: email,
    from: 'team@freeCodeCamp.org',
    subject: dedent`
      Congratulations on completing all of the
      freeCodeCamp certificates!
    `,
    text: renderCertifedEmail({
      username,
      name
    })
  };
  return send$(notifyUser).map(() => true);
}

export default function certificate(app) {
  const router = app.loopback.Router();
  const { Email, Challenge } = app.models;

  const certTypeIds = {
    // legacy
    [certTypes.frontEnd]: getIdsForCert$(frontEndChallengeId, Challenge),
    [certTypes.backEnd]: getIdsForCert$(backEndChallengeId, Challenge),
    [certTypes.dataVis]: getIdsForCert$(dataVisId, Challenge),

    // modern
    [certTypes.respWebDesign]: getIdsForCert$(respWebDesignId, Challenge),
    [certTypes.frontEndLibs]: getIdsForCert$(frontEndLibsId, Challenge),
    [certTypes.dataVis2018]: getIdsForCert$(dataVis2018Id, Challenge),
    [certTypes.jsAlgoDataStruct]: getIdsForCert$(jsAlgoDataStructId, Challenge),
    [certTypes.apisMicroservices]: getIdsForCert$(
      apisMicroservicesId,
      Challenge
    ),
    [certTypes.infosecQa]: getIdsForCert$(infosecQaId, Challenge)
  };

  const superBlocks = Object.keys(superBlockCertTypeMap);

  router.post(
    '/certificate/verify',
    ifNoUser401,
    ifNoSuperBlock404,
    verifyCert
  );

  app.use(router);

  const noNameMessage = dedent`
  We need your name so we can put it on your certificate.
  Add your name to your account settings and click the save button.
  Then we can issue your certificate.
  `;

  const notCertifiedMessage = name => dedent`
  it looks like you have not completed the neccessary steps.
  Please complete the required challenges to claim the
  ${name}
  `;

  const alreadyClaimedMessage = name => dedent`
    It looks like you already have claimed the ${name}
    `;

  const successMessage = (username, name) => dedent`
    @${username}, you have sucessfully claimed
    the ${name}!
    Congratulations on behalf of the freeCodeCamp team!
    `;

  function verifyCert(req, res, next) {
    const { body: { superBlock }, user } = req;

    let certType = superBlockCertTypeMap[superBlock];
    log(certType);
    if (certType === 'isDataVisCert') {
      certType = 'is2018DataVisCert';
      log(certType);
    }
    return user.getChallengeMap$()
    .flatMap(() => certTypeIds[certType])
    .flatMap(challenge => {
        const {
          id,
          tests,
          name,
          challengeType
        } = challenge;
        if (user[certType]) {
          return Observable.just(alreadyClaimedMessage(name));
        }
        if (!user[certType] && !isCertified(tests, user.challengeMap)) {
          return Observable.just(notCertifiedMessage(name));
        }
        if (!user.name) {
          return Observable.just(noNameMessage);
        }
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
        // set here so sendCertifiedEmail works properly
        // not used otherwise
        user[certType] = true;
        user.challengeMap[id] = { completedDate: new Date() };
        return Observable.combineLatest(
          // update user data
          user.update$(updateData),
          // If user has committed to nonprofit,
          // this will complete their pledge
          completeCommitment$(user),
          // sends notification email is user has all three certs
          // if not it noop
          sendCertifiedEmail(user, Email.send$),
          ({ count }, pledgeOrMessage) => ({ count, pledgeOrMessage })
        )
        .map(
            ({ count, pledgeOrMessage }) => {
              if (typeof pledgeOrMessage === 'string') {
                log(pledgeOrMessage);
              }
              log(`${count} documents updated`);
              return successMessage(user.username, name);
            }
          );
        })
      .subscribe(
        (message) => {
          return res.status(200).json({
            message,
            success: message.includes('Congratulations')
          });
        },
        next
      );
  }

  function ifNoSuperBlock404(req, res, next) {
    const { superBlock } = req.body;
    if (superBlock && superBlocks.includes(superBlock)) {
      return next();
    }
    return res.status(404).end();
  }
}
