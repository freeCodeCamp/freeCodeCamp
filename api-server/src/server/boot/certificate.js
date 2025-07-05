import path from 'path';
import debug from 'debug';
import dedent from 'dedent';
import _ from 'lodash';
import loopback from 'loopback';
import { Observable } from 'rx';
import { isEmail } from 'validator';
import {
  completionHours,
  certTypes,
  certSlugTypeMap,
  certTypeTitleMap,
  certTypeIdMap,
  certIds,
  oldDataVizId,
  currentCertifications,
  upcomingCertifications,
  legacyCertifications,
  legacyFullStackCertification
} from '../../../../shared/config/certification-settings';
import { reportError } from '../middlewares/sentry-error-handler.js';

import { deprecatedEndpoint } from '../utils/disabled-endpoints';
import { getChallenges } from '../utils/get-curriculum';
import { ifNoUser401 } from '../utils/middleware';
import { observeQuery } from '../utils/rx';

const {
  legacyFrontEndChallengeId,
  legacyBackEndChallengeId,
  legacyDataVisId,
  legacyInfosecQaId,
  legacyFullStackId,
  respWebDesignId,
  frontEndDevLibsId,
  jsAlgoDataStructId,
  dataVis2018Id,
  apisMicroservicesId,
  qaV7Id,
  infosecV7Id,
  sciCompPyV7Id,
  dataAnalysisPyV7Id,
  machineLearningPyV7Id,
  relationalDatabaseV8Id,
  collegeAlgebraPyV8Id,
  foundationalCSharpV8Id,
  jsAlgoDataStructV8Id
} = certIds;

const log = debug('fcc:certification');

export default function bootCertificate(app) {
  const api = app.loopback.Router();
  // TODO: rather than getting all the challenges, then grabbing the certs,
  // consider just getting the certs.
  const certTypeIds = createCertTypeIds(getChallenges());
  const showCert = createShowCert(app);
  const verifyCert = createVerifyCert(certTypeIds, app);

  api.put('/certificate/verify', ifNoUser401, ifNoCertification404, verifyCert);
  api.get('/certificate/showCert/:username/:certSlug', showCert);
  api.get('/certificate/verify-can-claim-cert', deprecatedEndpoint);
  app.use(api);
}

export function getFallbackFullStackDate(completedChallenges, completedDate) {
  var chalIds = [
    respWebDesignId,
    jsAlgoDataStructId,
    frontEndDevLibsId,
    dataVis2018Id,
    apisMicroservicesId,
    legacyInfosecQaId
  ];

  const latestCertDate = completedChallenges
    .filter(chal => chalIds.includes(chal.id))
    .sort((a, b) => b.completedDate - a.completedDate)[0]?.completedDate;

  return latestCertDate ? latestCertDate : completedDate;
}

export function ifNoCertification404(req, res, next) {
  const { certSlug } = req.body;
  if (!certSlug) return res.status(404).end();
  if (
    currentCertifications.includes(certSlug) ||
    legacyCertifications.includes(certSlug) ||
    legacyFullStackCertification.includes(certSlug)
  )
    return next();
  if (
    process.env.SHOW_UPCOMING_CHANGES === 'true' &&
    upcomingCertifications.includes(certSlug)
  ) {
    return next();
  }
  res.status(404).end();
}

const renderCertifiedEmail = loopback.template(
  path.join(__dirname, '..', 'views', 'emails', 'certified.ejs')
);

function createCertTypeIds(allChallenges) {
  return {
    // legacy
    [certTypes.frontEnd]: getCertById(legacyFrontEndChallengeId, allChallenges),
    [certTypes.jsAlgoDataStruct]: getCertById(
      jsAlgoDataStructId,
      allChallenges
    ),
    [certTypes.backEnd]: getCertById(legacyBackEndChallengeId, allChallenges),
    [certTypes.dataVis]: getCertById(legacyDataVisId, allChallenges),
    [certTypes.infosecQa]: getCertById(legacyInfosecQaId, allChallenges),
    [certTypes.fullStack]: getCertById(legacyFullStackId, allChallenges),

    // modern
    [certTypes.respWebDesign]: getCertById(respWebDesignId, allChallenges),
    [certTypes.jsAlgoDataStructV8]: getCertById(
      jsAlgoDataStructV8Id,
      allChallenges
    ),
    [certTypes.frontEndDevLibs]: getCertById(frontEndDevLibsId, allChallenges),
    [certTypes.dataVis2018]: getCertById(dataVis2018Id, allChallenges),
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
    ),
    [certTypes.relationalDatabaseV8]: getCertById(
      relationalDatabaseV8Id,
      allChallenges
    ),
    [certTypes.collegeAlgebraPyV8]: getCertById(
      collegeAlgebraPyV8Id,
      allChallenges
    ),
    [certTypes.foundationalCSharpV8]: getCertById(
      foundationalCSharpV8Id,
      allChallenges
    )
  };
}

function hasCompletedTests(ids, completedChallenges = []) {
  return _.every(ids, ({ id }) =>
    _.find(completedChallenges, ({ id: completedId }) => completedId === id)
  );
}

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

function sendCertifiedEmail(
  {
    email = '',
    name,
    username,
    isRespWebDesignCert,
    isJsAlgoDataStructCertV8,
    isFrontEndLibsCert,
    isDataVisCert,
    isApisMicroservicesCert,
    isQaCertV7,
    isInfosecCertV7,
    isSciCompPyCertV7,
    isDataAnalysisPyCertV7,
    isMachineLearningPyCertV7,
    isRelationalDatabaseCertV8,
    isCollegeAlgebraPyCertV8,
    isFoundationalCSharpCertV8
  },
  send$
) {
  if (
    !isEmail(email) ||
    !isRespWebDesignCert ||
    !isJsAlgoDataStructCertV8 ||
    !isFrontEndLibsCert ||
    !isDataVisCert ||
    !isApisMicroservicesCert ||
    !isQaCertV7 ||
    !isInfosecCertV7 ||
    !isSciCompPyCertV7 ||
    !isDataAnalysisPyCertV7 ||
    !isMachineLearningPyCertV7 ||
    !isRelationalDatabaseCertV8 ||
    !isCollegeAlgebraPyCertV8 ||
    !isFoundationalCSharpCertV8
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
    isJsAlgoDataStructCertV8 = false,
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
    isMachineLearningPyCertV7 = false,
    isRelationalDatabaseCertV8 = false,
    isCollegeAlgebraPyCertV8 = false,
    isFoundationalCSharpCertV8 = false
  } = user;

  return {
    isRespWebDesignCert,
    isJsAlgoDataStructCert,
    isJsAlgoDataStructCertV8,
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
    isMachineLearningPyCertV7,
    isRelationalDatabaseCertV8,
    isCollegeAlgebraPyCertV8,
    isFoundationalCSharpCertV8
  };
}

function createVerifyCert(certTypeIds, app) {
  const { Email } = app.models;
  return function verifyCert(req, res, next) {
    const {
      body: { certSlug },
      user
    } = req;
    log(certSlug);
    let certType = certSlugTypeMap[certSlug];
    log(certType);
    return Observable.of(certTypeIds[certType])
      .flatMap(challenge => {
        const certName = certTypeTitleMap[certType];
        if (user[certType]) {
          return Observable.just({
            type: 'info',
            message: 'flash.already-claimed',
            variables: { name: certName }
          });
        }

        // certificate doesn't exist or
        // connection error
        if (!challenge) {
          reportError(`Error claiming ${certName}`);
          return Observable.just({
            type: 'danger',
            message: 'flash.wrong-name',
            variables: { name: certName }
          });
        }

        const { id, tests, challengeType } = challenge;
        if (!hasCompletedTests(tests, user.completedChallenges)) {
          return Observable.just({
            type: 'info',
            message: 'flash.incomplete-steps',
            variables: { name: certName }
          });
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
          return Observable.just({
            type: 'info',
            message: 'flash.name-needed'
          });
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
          // sends notification email is user has all 6 certs
          // if not it noop
          sendCertifiedEmail(user, Email.send$),
          (_, pledgeOrMessage) => ({ pledgeOrMessage })
        ).map(({ pledgeOrMessage }) => {
          if (typeof pledgeOrMessage === 'string') {
            log(pledgeOrMessage);
          }
          log('Certificates updated');
          return {
            type: 'success',
            message: 'flash.cert-claim-success',
            variables: {
              username: user.username,
              name: certName
            }
          };
        });
      })
      .subscribe(message => {
        return res.status(200).json({
          response: message,
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
    let { username, certSlug } = req.params;
    username = username.toLowerCase();
    const certType = certSlugTypeMap[certSlug];
    const certId = certTypeIdMap[certType];
    const certTitle = certTypeTitleMap[certType];
    const completionTime = completionHours[certType] || 300;
    return findUserByUsername$(username, {
      isBanned: true,
      isCheater: true,
      isFrontEndCert: true,
      isBackEndCert: true,
      isFullStackCert: true,
      isRespWebDesignCert: true,
      isFrontEndLibsCert: true,
      isJsAlgoDataStructCert: true,
      isJsAlgoDataStructCertV8: true,
      isDataVisCert: true,
      is2018DataVisCert: true,
      isApisMicroservicesCert: true,
      isInfosecQaCert: true,
      isQaCertV7: true,
      isInfosecCertV7: true,
      isSciCompPyCertV7: true,
      isDataAnalysisPyCertV7: true,
      isMachineLearningPyCertV7: true,
      isRelationalDatabaseCertV8: true,
      isCollegeAlgebraPyCertV8: true,
      isFoundationalCSharpCertV8: true,
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
              message: 'flash.username-not-found',
              variables: { username: username }
            }
          ]
        });
      }
      const { isLocked, showCerts, showName, showTimeLine } = user.profileUI;

      if (user.isCheater || user.isBanned) {
        return res.json({
          messages: [
            {
              type: 'info',
              message: 'flash.not-eligible'
            }
          ]
        });
      }

      if (!user.isHonest) {
        return res.json({
          messages: [
            {
              type: 'info',
              message: 'flash.not-honest',
              variables: { username: username }
            }
          ]
        });
      }

      if (isLocked) {
        return res.json({
          messages: [
            {
              type: 'info',
              message: 'flash.profile-private',
              variables: { username: username }
            }
          ]
        });
      }

      // If the user does not have a name, and have set their name to public,
      // warn them. Otherwise, fallback to username
      if (!user.name && user.showName) {
        return res.json({
          messages: [
            {
              type: 'info',
              message: 'flash.add-name'
            }
          ]
        });
      }

      if (!showCerts) {
        return res.json({
          messages: [
            {
              type: 'info',
              message: 'flash.certs-private',
              variables: { username: username }
            }
          ]
        });
      }

      if (!showTimeLine) {
        return res.json({
          messages: [
            {
              type: 'info',
              message: 'flash.timeline-private',
              variables: { username: username }
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
          completedDate = getFallbackFullStackDate(
            completedChallenges,
            completedDate
          );
        }

        const { username, name } = user;

        if (!showName) {
          return res.json({
            certSlug,
            certTitle,
            username,
            date: completedDate,
            completionTime
          });
        }

        return res.json({
          certSlug,
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
            message: 'flash.user-not-certified',
            variables: { username: username, cert: certTypeTitleMap[certType] }
          }
        ]
      });
    }, next);
  };
}
