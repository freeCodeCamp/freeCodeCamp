import _ from 'lodash';
import loopback from 'loopback';
import path from 'path';
import dedent from 'dedent';
import { Observable } from 'rx';
import debug from 'debug';
import { isEmail } from 'validator';
import format from 'date-fns/format';

import { ifNoUser401 } from '../utils/middleware';
import { observeQuery } from '../utils/rx';
import {
  legacyFrontEndChallengeId,
  legacyBackEndChallengeId,
  legacyDataVisId,
  respWebDesignId,
  frontEndLibsId,
  jsAlgoDataStructId,
  dataVis2018Id,
  apisMicroservicesId,
  infosecQaId,
  fullStackId
} from '../utils/constantStrings.json';
import certTypes from '../utils/certTypes.json';
import superBlockCertTypeMap from '../utils/superBlockCertTypeMap';
import { completeCommitment$ } from '../utils/commit';

const log = debug('fcc:certification');

export default function bootCertificate(app) {
  const api = app.loopback.Router();

  const certTypeIds = createCertTypeIds(app);
  const showCert = createShowCert(app);
  const verifyCert = createVerifyCert(certTypeIds, app);

  api.put('/certificate/verify', ifNoUser401, ifNoSuperBlock404, verifyCert);
  api.get('/certificate/showCert/:username/:cert', showCert);

  app.use('/internal', api);
}

const noNameMessage = dedent`
  We need your name so we can put it on your certification.
  Add your name to your account settings and click the save button.
  Then we can issue your certification.
  `;

const notCertifiedMessage = name => dedent`
  It looks like you have not completed the necessary steps.
  Please complete the required projects to claim the
  ${name} Certification
  `;

const alreadyClaimedMessage = name => dedent`
    It looks like you already have claimed the ${name} Certification
    `;

const successMessage = (username, name) => dedent`
    @${username}, you have successfully claimed
    the ${name} Certification!
    Congratulations on behalf of the freeCodeCamp.org team!
    `;

function ifNoSuperBlock404(req, res, next) {
  const { superBlock } = req.body;
  if (superBlock && superBlocks.includes(superBlock)) {
    return next();
  }
  return res.status(404).end();
}

const renderCertifedEmail = loopback.template(
  path.join(__dirname, '..', 'views', 'emails', 'certified.ejs')
);

function createCertTypeIds(app) {
  const { Challenge } = app.models;

  return {
    // legacy
    [certTypes.frontEnd]: getIdsForCert$(legacyFrontEndChallengeId, Challenge),
    [certTypes.backEnd]: getIdsForCert$(legacyBackEndChallengeId, Challenge),
    [certTypes.dataVis]: getIdsForCert$(legacyDataVisId, Challenge),

    // modern
    [certTypes.respWebDesign]: getIdsForCert$(respWebDesignId, Challenge),
    [certTypes.frontEndLibs]: getIdsForCert$(frontEndLibsId, Challenge),
    [certTypes.dataVis2018]: getIdsForCert$(dataVis2018Id, Challenge),
    [certTypes.jsAlgoDataStruct]: getIdsForCert$(jsAlgoDataStructId, Challenge),
    [certTypes.apisMicroservices]: getIdsForCert$(
      apisMicroservicesId,
      Challenge
    ),
    [certTypes.infosecQa]: getIdsForCert$(infosecQaId, Challenge),
    [certTypes.fullStack]: getIdsForCert$(fullStackId, Challenge)
  };
}

function isCertified(ids, completedChallenges = []) {
  return _.every(ids, ({ id }) =>
    _.find(completedChallenges, ({ id: completedId }) => completedId === id)
  );
}

const certIds = {
  [certTypes.frontEnd]: legacyFrontEndChallengeId,
  [certTypes.backEnd]: legacyBackEndChallengeId,
  [certTypes.dataVis]: legacyDataVisId,
  [certTypes.respWebDesign]: respWebDesignId,
  [certTypes.frontEndLibs]: frontEndLibsId,
  [certTypes.jsAlgoDataStruct]: jsAlgoDataStructId,
  [certTypes.dataVis2018]: dataVis2018Id,
  [certTypes.apisMicroservices]: apisMicroservicesId,
  [certTypes.infosecQa]: infosecQaId,
  [certTypes.fullStack]: fullStackId
};

const certText = {
  [certTypes.frontEnd]: 'Legacy Front End',
  [certTypes.backEnd]: 'Legacy Back End',
  [certTypes.dataVis]: 'Legacy Data Visualization',
  [certTypes.fullStack]: 'Full Stack',
  [certTypes.respWebDesign]: 'Responsive Web Design',
  [certTypes.frontEndLibs]: 'Front End Libraries',
  [certTypes.jsAlgoDataStruct]: 'JavaScript Algorithms and Data Structures',
  [certTypes.dataVis2018]: 'Data Visualization',
  [certTypes.apisMicroservices]: 'APIs and Microservices',
  [certTypes.infosecQa]: 'Information Security and Quality Assurance'
};

const completionHours = {
  [certTypes.frontEnd]: 400,
  [certTypes.backEnd]: 400,
  [certTypes.dataVis]: 400,
  [certTypes.fullStack]: 1800,
  [certTypes.respWebDesign]: 300,
  [certTypes.frontEndLibs]: 300,
  [certTypes.jsAlgoDataStruct]: 300,
  [certTypes.dataVis2018]: 300,
  [certTypes.apisMicroservices]: 300,
  [certTypes.infosecQa]: 300
};

function getIdsForCert$(id, Challenge) {
  return observeQuery(Challenge, 'findById', id, {
    id: true,
    tests: true,
    name: true,
    challengeType: true
  }).shareReplay();
}

const superBlocks = Object.keys(superBlockCertTypeMap);

function sendCertifiedEmail(
  {
    email = '',
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
    from: 'quincy@freecodecamp.org',
    subject: dedent`
      Congratulations on completing all of the
      freeCodeCamp certifications!
    `,
    text: renderCertifedEmail({
      username,
      name
    })
  };
  return send$(notifyUser).map(() => true);
}

function getUserIsCertMap(user) {
  const {
    isRespWebDesignCert = false,
    isJsAlgoDataStructCert = false,
    isFrontEndLibsCert = false,
    is2018DataVisCert = false,
    isApisMicroservicesCert = false,
    isInfosecQaCert = false,
    isFrontEndCert = false,
    isBackEndCert = false,
    isDataVisCert = false,
    isFullStackCert = false
  } = user;

  return {
    isRespWebDesignCert,
    isJsAlgoDataStructCert,
    isFrontEndLibsCert,
    is2018DataVisCert,
    isApisMicroservicesCert,
    isInfosecQaCert,
    isFrontEndCert,
    isBackEndCert,
    isDataVisCert,
    isFullStackCert
  };
}

function createVerifyCert(certTypeIds, app) {
  const { Email } = app.models;
  return function verifyCert(req, res, next) {
    const {
      body: { superBlock },
      user
    } = req;
    log(superBlock);
    let certType = superBlockCertTypeMap[superBlock];
    log(certType);
    return user
      .getCompletedChallenges$()
      .flatMap(() => certTypeIds[certType])
      .flatMap(challenge => {
        const certName = certText[certType];
        if (user[certType]) {
          return Observable.just(alreadyClaimedMessage(certName));
        }

        let updateData = {
          [certType]: true
        };

        if (challenge) {
          const { id, tests, challengeType } = challenge;
          if (
            !user[certType] &&
            !isCertified(tests, user.completedChallenges)
          ) {
            return Observable.just(notCertifiedMessage(certName));
          }
          updateData = {
            ...updateData,
            completedChallenges: [
              ...user.completedChallenges,
              {
                id,
                completedDate: new Date(),
                challengeType
              }
            ]
          };
        }

        if (!user.name) {
          return Observable.just(noNameMessage);
        }
        // set here so sendCertifiedEmail works properly
        // not used otherwise
        user[certType] = true;
        const updatePromise = new Promise((resolve, reject) =>
          user.updateAttributes(updateData, err => {
            if (err) {
              return reject(err);
            }
            return resolve();
          })
        );
        return Observable.combineLatest(
          // update user data
          Observable.fromPromise(updatePromise),
          // If user has committed to nonprofit,
          // this will complete their pledge
          completeCommitment$(user),
          // sends notification email is user has all 6 certs
          // if not it noop
          sendCertifiedEmail(user, Email.send$),
          ({ count }, pledgeOrMessage) => ({ count, pledgeOrMessage })
        ).map(({ count, pledgeOrMessage }) => {
          if (typeof pledgeOrMessage === 'string') {
            log(pledgeOrMessage);
          }
          log(`${count} documents updated`);
          return successMessage(user.username, certName);
        });
      })
      .subscribe(message => {
        return res.status(200).json({
          response: {
            type: message.includes('Congratulations') ? 'success' : 'info',
            message
          },
          isCertMap: getUserIsCertMap(user)
        });
      }, next);
  };
}

function createShowCert(app) {
  const { User } = app.models;

  function findUserByUsername$(username, fields) {
    return observeQuery(User, 'findOne', {
      where: { username },
      fields
    });
  }

  return function showCert(req, res, next) {
    let { username, cert } = req.params;
    username = username.toLowerCase();
    const certType = superBlockCertTypeMap[cert];
    const certId = certIds[certType];
    const certTitle = certText[certType];
    const completionTime = completionHours[certType] || 300;
    return findUserByUsername$(username, {
      isCheater: true,
      isFrontEndCert: true,
      isBackEndCert: true,
      isFullStackCert: true,
      isRespWebDesignCert: true,
      isFrontEndLibsCert: true,
      isJsAlgoDataStructCert: true,
      isDataVisCert: true,
      is2018DataVisCert: true,
      isApisMicroservicesCert: true,
      isInfosecQaCert: true,
      isHonest: true,
      username: true,
      name: true,
      completedChallenges: true,
      profileUI: true
    }).subscribe(user => {
      if (!user) {
        return res.json({
          messages: [
            {
              type: 'info',
              message: `We could not find a user with the username "${username}"`
            }
          ]
        });
      }
      const { isLocked, showCerts } = user.profileUI;

      if (!user.name) {
        return res.json({
          messages: [
            {
              type: 'info',
              message: dedent`
              This user needs to add their name to their account
              in order for others to be able to view their certification.
            `
            }
          ]
        });
      }

      if (user.isCheater) {
        return res.json({
          messages: [
            {
              type: 'info',
              message:
                'This user is not eligible for freeCodeCamp.org ' +
                'certifications at this time'
            }
          ]
        });
      }

      if (isLocked) {
        return res.json({
          messages: [
            {
              type: 'info',
              message: dedent`
              ${username} has chosen to make their profile
                private. They will need to make their profile public
                in order for others to be able to view their certification.
            `
            }
          ]
        });
      }

      if (!showCerts) {
        return res.json({
          messages: [
            {
              type: 'info',
              message: dedent`
              ${username} has chosen to make their certifications
                private. They will need to make their certifications public
                in order for others to be able to view them.
            `
            }
          ]
        });
      }

      if (!user.isHonest) {
        return res.json({
          messages: [
            {
              type: 'info',
              message: dedent`
              ${username} has not yet agreed to our Academic Honesty Pledge.
            `
            }
          ]
        });
      }

      if (user[certType]) {
        const { completedChallenges = [] } = user;
        const { completedDate = new Date() } =
          _.find(completedChallenges, ({ id }) => certId === id) || {};

        const { username, name } = user;
        return res.json({
          certTitle,
          username,
          name,
          date: format(new Date(completedDate), 'MMMM D, YYYY'),
          completionTime
        });
      }
      return res.json({
        messages: [
          {
            type: 'info',
            message: `It looks like user ${username} is not ${
              certText[certType]
            } certified`
          }
        ]
      });
    }, next);
  };
}
