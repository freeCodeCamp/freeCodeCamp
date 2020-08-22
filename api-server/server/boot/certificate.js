import _ from 'lodash';
import loopback from 'loopback';
import path from 'path';
import dedent from 'dedent';
import { Observable } from 'rx';
import debug from 'debug';
import { isEmail } from 'validator';
import { reportError } from '../middlewares/sentry-error-handler.js';

import { ifNoUser401 } from '../utils/middleware';
import { observeQuery } from '../utils/rx';
import {
  legacyFrontEndChallengeId,
  legacyBackEndChallengeId,
  legacyDataVisId,
  legacyInfosecQaId,
  legacyFullStackId,
  respWebDesignId,
  frontEndLibsId,
  jsAlgoDataStructId,
  dataVis2018Id,
  apisMicroservicesId,
  qaV7Id,
  infosecV7Id,
  sciCompPyV7Id,
  dataAnalysisPyV7Id,
  machineLearningPyV7Id
} from '../utils/constantStrings.json';
import { oldDataVizId } from '../../../config/misc';
import certTypes from '../utils/certTypes.json';
import superBlockCertTypeMap from '../utils/superBlockCertTypeMap';
import { completeCommitment$ } from '../utils/commit';
import { getChallenges } from '../utils/get-curriculum';

const log = debug('fcc:certification');

export default function bootCertificate(app, done) {
  const api = app.loopback.Router();
  // TODO: rather than getting all the challenges, then grabbing the certs,
  // consider just getting the certs.
  getChallenges().then(allChallenges => {
    const certTypeIds = createCertTypeIds(allChallenges);
    const showCert = createShowCert(app);
    const verifyCert = createVerifyCert(certTypeIds, app);

    api.put('/certificate/verify', ifNoUser401, ifNoSuperBlock404, verifyCert);
    api.get('/certificate/showCert/:username/:cert', showCert);

    app.use(api);
    done();
  });
}

export function getFallbackFrontEndDate(completedChallenges, completedDate) {
  var chalIds = [...Object.values(certIds), oldDataVizId];

  const latestCertDate = completedChallenges
    .filter(chal => chalIds.includes(chal.id))
    .sort((a, b) => b.completedDate - a.completedDate)[0].completedDate;

  return latestCertDate ? latestCertDate : completedDate;
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

const failureMessage = name => dedent`
    Something went wrong with the verification of ${name}, please try again.
    If you continue to receive this error, you can send a message to
    support@freeCodeCamp.org to get help.
    `;

function ifNoSuperBlock404(req, res, next) {
  const { superBlock } = req.body;
  if (superBlock && superBlocks.includes(superBlock)) {
    return next();
  }
  return res.status(404).end();
}

const renderCertifiedEmail = loopback.template(
  path.join(__dirname, '..', 'views', 'emails', 'certified.ejs')
);

function createCertTypeIds(allChallenges) {
  return {
    // legacy
    [certTypes.frontEnd]: getCertById(legacyFrontEndChallengeId, allChallenges),
    [certTypes.backEnd]: getCertById(legacyBackEndChallengeId, allChallenges),
    [certTypes.dataVis]: getCertById(legacyDataVisId, allChallenges),
    [certTypes.infosecQa]: getCertById(legacyInfosecQaId, allChallenges),
    [certTypes.fullStack]: getCertById(legacyFullStackId, allChallenges),

    // modern
    [certTypes.respWebDesign]: getCertById(respWebDesignId, allChallenges),
    [certTypes.frontEndLibs]: getCertById(frontEndLibsId, allChallenges),
    [certTypes.dataVis2018]: getCertById(dataVis2018Id, allChallenges),
    [certTypes.jsAlgoDataStruct]: getCertById(
      jsAlgoDataStructId,
      allChallenges
    ),
    [certTypes.apisMicroservices]: getCertById(
      apisMicroservicesId,
      allChallenges
    ),
    [certTypes.qaV7]: getCertById(qaV7Id, allChallenges),
    [certTypes.infosecV7]: getCertById(infosecV7Id, allChallenges),
    [certTypes.sciCompPyV7]: getCertById(sciCompPyV7Id, allChallenges),
    [certTypes.dataAnalysisPyV7]: getCertById(
      dataAnalysisPyV7Id,
      allChallenges
    ),
    [certTypes.machineLearningPyV7]: getCertById(
      machineLearningPyV7Id,
      allChallenges
    )
  };
}

function canClaim(ids, completedChallenges = []) {
  return _.every(ids, ({ id }) =>
    _.find(completedChallenges, ({ id: completedId }) => completedId === id)
  );
}

const certIds = {
  [certTypes.frontEnd]: legacyFrontEndChallengeId,
  [certTypes.backEnd]: legacyBackEndChallengeId,
  [certTypes.dataVis]: legacyDataVisId,
  [certTypes.infosecQa]: legacyInfosecQaId,
  [certTypes.fullStack]: legacyFullStackId,
  [certTypes.respWebDesign]: respWebDesignId,
  [certTypes.frontEndLibs]: frontEndLibsId,
  [certTypes.jsAlgoDataStruct]: jsAlgoDataStructId,
  [certTypes.dataVis2018]: dataVis2018Id,
  [certTypes.apisMicroservices]: apisMicroservicesId,
  [certTypes.qaV7]: qaV7Id,
  [certTypes.infosecV7]: infosecV7Id,
  [certTypes.sciCompPyV7]: sciCompPyV7Id,
  [certTypes.dataAnalysisPyV7]: dataAnalysisPyV7Id,
  [certTypes.machineLearningPyV7]: machineLearningPyV7Id
};

const certText = {
  [certTypes.frontEnd]: 'Legacy Front End',
  [certTypes.backEnd]: 'Legacy Back End',
  [certTypes.dataVis]: 'Legacy Data Visualization',
  [certTypes.infosecQa]: 'Legacy Information Security and Quality Assurance',
  [certTypes.fullStack]: 'Legacy Full Stack',
  [certTypes.respWebDesign]: 'Responsive Web Design',
  [certTypes.frontEndLibs]: 'Front End Libraries',
  [certTypes.jsAlgoDataStruct]: 'JavaScript Algorithms and Data Structures',
  [certTypes.dataVis2018]: 'Data Visualization',
  [certTypes.apisMicroservices]: 'APIs and Microservices',
  [certTypes.qaV7]: 'Quality Assurance',
  [certTypes.infosecV7]: 'Information Security',
  [certTypes.sciCompPyV7]: 'Scientific Computing with Python',
  [certTypes.dataAnalysisPyV7]: 'Data Analysis with Python',
  [certTypes.machineLearningPyV7]: 'Machine Learning with Python'
};

const completionHours = {
  [certTypes.frontEnd]: 400,
  [certTypes.backEnd]: 400,
  [certTypes.dataVis]: 400,
  [certTypes.infosecQa]: 300,
  [certTypes.fullStack]: 1800,
  [certTypes.respWebDesign]: 300,
  [certTypes.frontEndLibs]: 300,
  [certTypes.jsAlgoDataStruct]: 300,
  [certTypes.dataVis2018]: 300,
  [certTypes.apisMicroservices]: 300,
  [certTypes.qaV7]: 300,
  [certTypes.infosecV7]: 300,
  [certTypes.sciCompPyV7]: 400,
  [certTypes.dataAnalysisPyV7]: 400,
  [certTypes.machineLearningPyV7]: 400
};

function getCertById(anId, allChallenges) {
  return allChallenges
    .filter(({ id }) => id === anId)
    .map(({ id, tests, name, challengeType }) => ({
      id,
      tests,
      name,
      challengeType
    }))[0];
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
    isQaCertV7,
    isInfosecCertV7,
    isSciCompPyCertV7,
    isDataAnalysisPyCertV7,
    isMachineLearningPyCertV7
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
    !isQaCertV7 ||
    !isInfosecCertV7 ||
    !isSciCompPyCertV7 ||
    !isDataAnalysisPyCertV7 ||
    !isMachineLearningPyCertV7
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
    text: renderCertifiedEmail({
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
    isQaCertV7 = false,
    isInfosecCertV7 = false,
    isFrontEndCert = false,
    isBackEndCert = false,
    isDataVisCert = false,
    isFullStackCert = false,
    isSciCompPyCertV7 = false,
    isDataAnalysisPyCertV7 = false,
    isMachineLearningPyCertV7 = false
  } = user;

  return {
    isRespWebDesignCert,
    isJsAlgoDataStructCert,
    isFrontEndLibsCert,
    is2018DataVisCert,
    isApisMicroservicesCert,
    isInfosecQaCert,
    isQaCertV7,
    isInfosecCertV7,
    isFrontEndCert,
    isBackEndCert,
    isDataVisCert,
    isFullStackCert,
    isSciCompPyCertV7,
    isDataAnalysisPyCertV7,
    isMachineLearningPyCertV7
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
    return Observable.of(certTypeIds[certType])
      .flatMap(challenge => {
        const certName = certText[certType];
        if (user[certType]) {
          return Observable.just(alreadyClaimedMessage(certName));
        }

        // certificate doesn't exist or
        // connection error
        if (!challenge) {
          reportError(`Error claiming ${certName}`);
          return Observable.just(failureMessage(certName));
        }

        const { id, tests, challengeType } = challenge;
        if (!canClaim(tests, user.completedChallenges)) {
          return Observable.just(notCertifiedMessage(certName));
        }

        const updateData = {
          [certType]: true,
          completedChallenges: [
            ...user.completedChallenges,
            {
              id,
              completedDate: new Date(),
              challengeType
            }
          ]
        };

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
          (_, pledgeOrMessage) => ({ pledgeOrMessage })
        ).map(({ pledgeOrMessage }) => {
          if (typeof pledgeOrMessage === 'string') {
            log(pledgeOrMessage);
          }
          log('Certificates updated');
          return successMessage(user.username, certName);
        });
      })
      .subscribe(message => {
        return res.status(200).json({
          response: {
            type: message.includes('Congratulations') ? 'success' : 'info',
            message
          },
          isCertMap: getUserIsCertMap(user),
          // send back the completed challenges
          // NOTE: we could just send back the latest challenge, but this
          // ensures the challenges are synced.
          completedChallenges: user.completedChallenges
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
      isQaCertV7: true,
      isInfosecCertV7: true,
      isSciCompPyCertV7: true,
      isDataAnalysisPyCertV7: true,
      isMachineLearningPyCertV7: true,
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
              message:
                'We could not find a user with the username "' + username + '"'
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
              ${username} has chosen to make their portfolio
                private. They will need to make their portfolio public
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
        const certChallenge = _.find(
          completedChallenges,
          ({ id }) => certId === id
        );
        let { completedDate = new Date() } = certChallenge || {};

        // the challenge id has been rotated for isDataVisCert
        if (certType === 'isDataVisCert' && !certChallenge) {
          let oldDataVisIdChall = _.find(
            completedChallenges,
            ({ id }) => oldDataVizId === id
          );

          if (oldDataVisIdChall) {
            completedDate = oldDataVisIdChall.completedDate || completedDate;
          }
        }

        // if fullcert is not found, return the latest completedDate
        if (certType === 'isFullStackCert' && !certChallenge) {
          completedDate = getFallbackFrontEndDate(
            completedChallenges,
            completedDate
          );
        }

        const { username, name } = user;
        return res.json({
          certTitle,
          username,
          name,
          date: completedDate,
          completionTime
        });
      }
      return res.json({
        messages: [
          {
            type: 'info',
            message: `
It looks like user ${username} is not ${certText[certType]} certified
          `
          }
        ]
      });
    }, next);
  };
}
