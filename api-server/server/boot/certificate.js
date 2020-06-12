import _ from 'lodash';
import loopback from 'loopback';
import path from 'path';
import dedent from 'dedent';
import { Observable } from 'rx';
import debug from 'debug';
import { isEmail } from 'validator';
import format from 'date-fns/format';
import { reportError } from '../middlewares/sentry-error-handler.js';

import { ifNoUser401 } from '../utils/middleware';
import { observeQuery } from '../utils/rx';
import {
  legacyFrontEndChallengeId,
  legacyBackEndChallengeId,
  legacyDataVisId,
  legacyInfosecQaId,
  respWebDesignId,
  frontEndLibsId,
  jsAlgoDataStructId,
  dataVis2018Id,
  apisMicroservicesId,
  infosecId,
  qaId,
  fullStackId,
  sciCompPyId,
  dataAnalysisPyId,
  machineLearningPyId
} from '../utils/constantStrings.json';
import { oldDataVizId } from '../../../config/misc';
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

  app.use(api);
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

function createCertTypeIds(app) {
  const { Challenge } = app.models;

  return {
    // legacy
    [certTypes.frontEnd]: getIdsForCert$(legacyFrontEndChallengeId, Challenge),
    [certTypes.backEnd]: getIdsForCert$(legacyBackEndChallengeId, Challenge),
    [certTypes.dataVis]: getIdsForCert$(legacyDataVisId, Challenge),
    [certTypes.infosecQa]: getIdsForCert$(legacyInfosecQaId, Challenge),

    // modern
    [certTypes.respWebDesign]: getIdsForCert$(respWebDesignId, Challenge),
    [certTypes.frontEndLibs]: getIdsForCert$(frontEndLibsId, Challenge),
    [certTypes.dataVis2018]: getIdsForCert$(dataVis2018Id, Challenge),
    [certTypes.jsAlgoDataStruct]: getIdsForCert$(jsAlgoDataStructId, Challenge),
    [certTypes.apisMicroservices]: getIdsForCert$(
      apisMicroservicesId,
      Challenge
    ),
    [certTypes.qa]: getIdsForCert$(qaId, Challenge),
    [certTypes.infosec]: getIdsForCert$(infosecId, Challenge),
    [certTypes.fullStack]: getIdsForCert$(fullStackId, Challenge),
    [certTypes.sciCompPy]: getIdsForCert$(sciCompPyId, Challenge),
    [certTypes.dataAnalysisPy]: getIdsForCert$(dataAnalysisPyId, Challenge),
    [certTypes.machineLearningPy]: getIdsForCert$(
      machineLearningPyId,
      Challenge
    )
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
  [certTypes.infosecQa]: legacyInfosecQaId,
  [certTypes.respWebDesign]: respWebDesignId,
  [certTypes.frontEndLibs]: frontEndLibsId,
  [certTypes.jsAlgoDataStruct]: jsAlgoDataStructId,
  [certTypes.dataVis2018]: dataVis2018Id,
  [certTypes.apisMicroservices]: apisMicroservicesId,
  [certTypes.qa]: qaId,
  [certTypes.infosec]: infosecId,
  [certTypes.fullStack]: fullStackId,
  [certTypes.sciCompPy]: sciCompPyId,
  [certTypes.dataAnalysisPy]: dataAnalysisPyId,
  [certTypes.machineLearningPy]: machineLearningPyId
};

const certText = {
  [certTypes.frontEnd]: 'Legacy Front End',
  [certTypes.backEnd]: 'Legacy Back End',
  [certTypes.dataVis]: 'Legacy Data Visualization',
  [certTypes.infosecQa]: 'Legacy Information Security and Quality Assurance',
  [certTypes.fullStack]: 'Full Stack',
  [certTypes.respWebDesign]: 'Responsive Web Design',
  [certTypes.frontEndLibs]: 'Front End Libraries',
  [certTypes.jsAlgoDataStruct]: 'JavaScript Algorithms and Data Structures',
  [certTypes.dataVis2018]: 'Data Visualization',
  [certTypes.apisMicroservices]: 'APIs and Microservices',
  [certTypes.qa]: 'Quality Assurance',
  [certTypes.infosec]: 'Information Security',
  [certTypes.sciCompPy]: 'Scientific Computing with Python',
  [certTypes.dataAnalysisPy]: 'Data Analysis with Python',
  [certTypes.machineLearningPy]: 'Machine Learning with Python'
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
  [certTypes.qa]: 300,
  [certTypes.infosec]: 300,
  [certTypes.sciCompPy]: 400,
  [certTypes.dataAnalysisPy]: 400,
  [certTypes.machineLearningPy]: 400
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
    is2020QaCert,
    is2020InfosecCert,
    is2020SciCompPyCert,
    is2020DataAnalysisPyCert,
    is2020MachineLearningPyCert
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
    !is2020QaCert ||
    !is2020InfosecCert ||
    !is2020SciCompPyCert ||
    !is2020DataAnalysisPyCert ||
    !is2020MachineLearningPyCert
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
    is2020QaCert = false,
    is2020InfosecCert = false,
    isFrontEndCert = false,
    isBackEndCert = false,
    isDataVisCert = false,
    isFullStackCert = false,
    is2020SciCompPyCert = false,
    is2020DataAnalysisPyCert = false,
    is2020MachineLearningPyCert = false
  } = user;

  return {
    isRespWebDesignCert,
    isJsAlgoDataStructCert,
    isFrontEndLibsCert,
    is2018DataVisCert,
    isApisMicroservicesCert,
    isInfosecQaCert,
    is2020QaCert,
    is2020InfosecCert,
    isFrontEndCert,
    isBackEndCert,
    isDataVisCert,
    isFullStackCert,
    is2020SciCompPyCert,
    is2020DataAnalysisPyCert,
    is2020MachineLearningPyCert
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

        // certificate doesn't exist or
        // connection error
        if (!challenge) {
          reportError(`Error claiming ${certName}`);
          return Observable.just(failureMessage(certName));
        }

        const { id, tests, challengeType } = challenge;
        if (!user[certType] && !isCertified(tests, user.completedChallenges)) {
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
      is2020QaCert: true,
      is2020InfosecCert: true,
      is2020SciCompPyCert: true,
      is2020DataAnalysisPyCert: true,
      is2020MachineLearningPyCert: true,
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
          date: format(new Date(completedDate), 'MMMM D, YYYY'),
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
