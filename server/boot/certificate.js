import _ from 'lodash';
import loopback from 'loopback';
import moment from 'moment-timezone';
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
  legacyFrontEndChallengeId,
  legacyBackEndChallengeId,
  legacyDataVisId,

  respWebDesignId,
  frontEndLibsId,
  jsAlgoDataStructId,
  dataVis2018Id,
  apisMicroservicesId,
  infosecQaId
} from '../utils/constantStrings.json';
import certTypes from '../utils/certTypes.json';
import superBlockCertTypeMap from '../utils/superBlockCertTypeMap';
import {
  completeCommitment$
} from '../utils/commit';

const log = debug('fcc:certification');
const renderCertifedEmail = loopback.template(path.join(
  __dirname,
  '..',
  'views',
  'emails',
  'certified.ejs'
));

function isCertified(ids, completedChallenges = []) {
  return _.every(
    ids,
    ({ id }) => _.find(
      completedChallenges,
      ({ id: completedId }) => completedId === id
    )
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
  [certTypes.infosecQa]: infosecQaId
};

const certViews = {
  [certTypes.frontEnd]: 'certificate/legacy/front-end.jade',
  [certTypes.backEnd]: 'certificate/legacy/back-end.jade',
  [certTypes.dataVis]: 'certificate/legacy/data-visualization.jade',
  [certTypes.fullStack]: 'certificate/legacy/full-stack.jade',

  [certTypes.respWebDesign]: 'certificate/responsive-web-design.jade',
  [certTypes.frontEndLibs]: 'certificate/front-end-libraries.jade',
  [certTypes.jsAlgoDataStruct]:
  'certificate/javascript-algorithms-and-data-structures.jade',
  [certTypes.dataVis2018]: 'certificate/data-visualization.jade',
  [certTypes.apisMicroservices]: 'certificate/apis-and-microservices.jade',
  [certTypes.infosecQa]:
  'certificate/information-security-and-quality-assurance.jade'
};

const certText = {
  [certTypes.frontEnd]: 'Legacy Front End',
  [certTypes.backEnd]: 'Legacy Back End',
  [certTypes.dataVis]: 'Legacy Data Visualization',
  [certTypes.fullStack]: 'Legacy Full Stack',
  [certTypes.respWebDesign]: 'Responsive Web Design',
  [certTypes.frontEndLibs]: 'Front End Libraries',
  [certTypes.jsAlgoDataStruct]:
  'JavaScript Algorithms and Data Structures',
  [certTypes.dataVis2018]: 'Data Visualization',
  [certTypes.apisMicroservices]: 'APIs and Microservices',
  [certTypes.infosecQa]: 'Information Security and Quality Assurance'
};

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
      freeCodeCamp certifications!
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
  const { Email, Challenge, User } = app.models;

  function findUserByUsername$(username, fields) {
    return observeQuery(
      User,
      'findOne',
      {
        where: { username },
        fields
      }
    );
  }

  const certTypeIds = {
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
    [certTypes.infosecQa]: getIdsForCert$(infosecQaId, Challenge)
  };

  const superBlocks = Object.keys(superBlockCertTypeMap);

  router.post(
    '/certificate/verify',
    ifNoUser401,
    ifNoSuperBlock404,
    verifyCert
  );
  router.get(
    '/certification/:username/:cert',
    showCert
  );

  app.use(router);

  const noNameMessage = dedent`
  We need your name so we can put it on your certification.
  Add your name to your account settings and click the save button.
  Then we can issue your certification.
  `;

  const notCertifiedMessage = name => dedent`
  it looks like you have not completed the necessary steps.
  Please complete the required challenges to claim the
  ${name}
  `;

  const alreadyClaimedMessage = name => dedent`
    It looks like you already have claimed the ${name}
    `;

  const successMessage = (username, name) => dedent`
    @${username}, you have successfully claimed
    the ${name}!
    Congratulations on behalf of the freeCodeCamp team!
    `;

  function verifyCert(req, res, next) {
    const { body: { superBlock }, user } = req;
    log(superBlock);
    let certType = superBlockCertTypeMap[superBlock];
    log(certType);
    return user.getCompletedChallenges$()
      .flatMap(() => certTypeIds[certType])
      .flatMap(challenge => {
        const {
          id,
          tests,
          challengeType
        } = challenge;
        const certName = certText[certType];
        if (user[certType]) {
          return Observable.just(alreadyClaimedMessage(certName));
        }
        if (!user[certType] && !isCertified(tests, user.completedChallenges)) {
          return Observable.just(notCertifiedMessage(certName));
        }
        if (!user.name) {
          return Observable.just(noNameMessage);
        }
        const updateData = {
          $push: {
            completedChallenges: {
              id,
              completedDate: new Date(),
              challengeType
            }
          },
          $set: {
            [certType]: true
          }
        };
        // set here so sendCertifiedEmail works properly
        // not used otherwise
        user[certType] = true;
        user.completedChallenges[
          user.completedChallenges.length - 1
        ] = { id, completedDate: new Date() };
        return Observable.combineLatest(
          // update user data
          user.update$(updateData),
          // If user has committed to nonprofit,
          // this will complete their pledge
          completeCommitment$(user),
          // sends notification email is user has all 6 certs
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
              return successMessage(user.username, certName);
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

  function showCert(req, res, next) {
    let { username, cert } = req.params;
    username = username.toLowerCase();
    const certType = superBlockCertTypeMap[cert];
    const certId = certIds[certType];
    return findUserByUsername$(
      username,
      {
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
      }
    )
    .subscribe(
      user => {
        const { isLocked, showCerts } = user.profileUI;
        const profile = `/portfolio/${user.username}`;
        if (!user) {
          req.flash(
            'danger',
            `We couldn't find a user with the username ${username}`
          );
          return res.redirect('/');
        }

        if (!user.name) {
          req.flash(
            'danger',
            dedent`
              This user needs to add their name to their account
              in order for others to be able to view their certification.
            `
          );
          return res.redirect(profile);
        }

        if (user.isCheater) {
          return res.redirect(profile);
        }

        if (isLocked) {
          req.flash(
            'danger',
            dedent`
              ${username} has chosen to make their profile
                private. They will need to make their profile public
                in order for others to be able to view their certification.
            `
          );
          return res.redirect('/');
        }

        if (!showCerts) {
          req.flash(
            'danger',
            dedent`
              ${username} has chosen to make their certifications
                private. They will need to make their certifications public
                in order for others to be able to view them.
            `
          );
          return res.redirect('/');
        }

        if (!user.isHonest) {
          req.flash(
            'danger',
            dedent`
              ${username} has not yet agreed to our Academic Honesty Pledge.
            `
          );
          return res.redirect(profile);
        }

        if (user[certType]) {
          const { completedChallenges = {} } = user;
          const { completedDate = new Date() } = _.find(
            completedChallenges, ({ id }) => certId === id
          ) || {};

          return res.render(
            certViews[certType],
            {
              username: user.username,
              date: moment(new Date(completedDate)).format('MMMM D, YYYY'),
              name: user.name
            }
          );
        }
        req.flash(
          'danger',
          `Looks like user ${username} is not ${certText[certType]} certified`
        );
        return res.redirect(profile);
      },
      next
    );
  }
}
