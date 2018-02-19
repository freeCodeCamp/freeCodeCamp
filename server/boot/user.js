import dedent from 'dedent';
import moment from 'moment-timezone';
import debugFactory from 'debug';
import { curry } from 'lodash';

import {
  frontEndChallengeId,
  backEndChallengeId,
  respWebDesignId,
  frontEndLibsId,
  jsAlgoDataStructId,
  dataVisId,
  dataVis2018Id,
  apisMicroservicesId,
  infosecQaId
} from '../utils/constantStrings.json';
import certTypes from '../utils/certTypes.json';
import superBlockCertTypeMap from '../utils/superBlockCertTypeMap';
import {
  ifNoUser401,
  ifNoUserRedirectTo,
  ifNotVerifiedRedirectToSettings
} from '../utils/middleware';
import { observeQuery } from '../utils/rx';

const debug = debugFactory('fcc:boot:user');
const sendNonUserToMap = ifNoUserRedirectTo('/map');
const sendNonUserToMapWithMessage = curry(ifNoUserRedirectTo, 2)('/map');
const certIds = {
  [certTypes.frontEnd]: frontEndChallengeId,
  [certTypes.backEnd]: backEndChallengeId,
  [certTypes.respWebDesign]: respWebDesignId,
  [certTypes.frontEndLibs]: frontEndLibsId,
  [certTypes.jsAlgoDataStruct]: jsAlgoDataStructId,
  [certTypes.dataVis]: dataVisId,
  [certTypes.dataVis2018]: dataVis2018Id,
  [certTypes.apisMicroservices]: apisMicroservicesId,
  [certTypes.infosecQa]: infosecQaId
};

const certViews = {
  [certTypes.frontEnd]: 'certificate/front-end.jade',
  [certTypes.backEnd]: 'certificate/back-end.jade',
  [certTypes.fullStack]: 'certificate/full-stack.jade',
  [certTypes.respWebDesign]: 'certificate/responsive-web-design.jade',
  [certTypes.frontEndLibs]: 'certificate/front-end-libraries.jade',
  [certTypes.jsAlgoDataStruct]:
  'certificate/javascript-algorithms-and-data-structures.jade',
  [certTypes.dataVis]: 'certificate/data-visualization.jade',
  [certTypes.dataVis2018]: 'certificate/data-visualization-2018.jade',
  [certTypes.apisMicroservices]: 'certificate/apis-and-microservices.jade',
  [certTypes.infosecQa]:
  'certificate/information-security-and-quality-assurance.jade'
};

const certText = {
  [certTypes.frontEnd]: 'Front End certified',
  [certTypes.backEnd]: 'Back End Certified',
  [certTypes.fullStack]: 'Full Stack Certified',
  [certTypes.respWebDesign]: 'Responsive Web Design Certified',
  [certTypes.frontEndLibs]: 'Front End Libraries Certified',
  [certTypes.jsAlgoDataStruct]:
  'JavaScript Algorithms and Data Structures Certified',
  [certTypes.dataVis]: 'Data Visualization Certified',
  [certTypes.dataVis2018]: 'Data Visualization Certified',
  [certTypes.apisMicroservices]: 'APIs and Microservices Certified',
  [certTypes.infosecQa]: 'Information Security and Quality Assurance Certified'
};

module.exports = function(app) {
  const router = app.loopback.Router();
  const api = app.loopback.Router();
  const { Email, User } = app.models;

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

  api.post(
    '/account/delete',
    ifNoUser401,
    postDeleteAccount
  );
  api.get(
    '/account',
    sendNonUserToMap,
    getAccount
  );
  api.post(
    '/account/reset-progress',
    ifNoUser401,
    postResetProgress
  );
  api.get(
    '/account/unlink/:social',
    sendNonUserToMap,
    getUnlinkSocial
  );

  // Ensure these are the last routes!
  api.get(
    '/c/:username/:cert',
    showCert
  );

  router.get(
    '/user/:username/report-user/',
    sendNonUserToMapWithMessage('You must be signed in to report a user'),
    ifNotVerifiedRedirectToSettings,
    getReportUserProfile
  );

  api.post(
    '/user/:username/report-user/',
    ifNoUser401,
    postReportUserProfile
  );

  app.use('/:lang', router);
  app.use(api);

  function getAccount(req, res) {
    const { username } = req.user;
    return res.redirect('/' + username);
  }

  function getUnlinkSocial(req, res, next) {
    const { user } = req;
    const { username } = user;

    let social = req.params.social;
    if (!social) {
      req.flash('danger', 'No social account found');
      return res.redirect('/' + username);
    }

    social = social.toLowerCase();
    const validSocialAccounts = ['twitter', 'linkedin'];
    if (validSocialAccounts.indexOf(social) === -1) {
      req.flash('danger', 'Invalid social account');
      return res.redirect('/' + username);
    }

    if (!user[social]) {
      req.flash('danger', `No ${social} account associated`);
      return res.redirect('/' + username);
    }

    const query = {
      where: {
        provider: social
      }
    };

    return user.identities(query, function(err, identities) {
      if (err) { return next(err); }

      // assumed user identity is unique by provider
      let identity = identities.shift();
      if (!identity) {
        req.flash('danger', 'No social account found');
        return res.redirect('/' + username);
      }

      return identity.destroy(function(err) {
        if (err) { return next(err); }

        const updateData = { [social]: null };

        return user.update$(updateData)
          .subscribe(() => {
            debug(`${social} has been unlinked successfully`);

            req.flash('info', `You've successfully unlinked your ${social}.`);
            return res.redirect('/' + username);
          }, next);
      });
    });
  }

  function showCert(req, res, next) {
    let { username, cert } = req.params;
    username = username.toLowerCase();
    const certType = superBlockCertTypeMap[cert];
    const certId = certIds[certType];
    return findUserByUsername$(username, {
          isCheater: true,
          isLocked: true,
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
          challengeMap: true
      })
      .subscribe(
        user => {
          const profile = `/${user.username}`;
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
                in order for others to be able to view their certificate.
              `
            );
            return res.redirect(profile);
          }

          if (user.isCheater) {
            return res.redirect(`/${user.username}`);
          }

          if (user.isLocked) {
            req.flash(
              'danger',
              dedent`
                ${username} has chosen to make their profile
                  private. They will need to make their profile public
                  in order for others to be able to view their certificate.
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
            const { challengeMap = {} } = user;
            const { completedDate = new Date() } = challengeMap[certId] || {};

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
            `Looks like user ${username} is not ${certText[certType]}`
          );
          return res.redirect(profile);
        },
        next
      );
  }

  function postDeleteAccount(req, res, next) {
    User.destroyById(req.user.id, function(err) {
      if (err) { return next(err); }
      req.logout();
      req.flash('success', 'You have successfully deleted your account.');
      return res.status(200).end();
    });
  }

  function postResetProgress(req, res, next) {
    User.findById(req.user.id, function(err, user) {
      if (err) { return next(err); }
      return user.update$({
        progressTimestamps: [{
          timestamp: Date.now()
        }],
        currentChallengeId: '',
        isRespWebDesignCert: false,
        is2018DataVisCert: false,
        isFrontEndLibsCert: false,
        isJsAlgoDataStructCert: false,
        isApisMicroservicesCert: false,
        isInfosecQaCert: false,
        is2018FullStackCert: false,
        isFrontEndCert: false,
        isBackEndCert: false,
        isDataVisCert: false,
        isFullStackCert: false,
        challengeMap: {}
      })
      .subscribe(
        () => {
          req.flash('success', 'You have successfully reset your progress.');
          return res.status(200).end();
        },
        next
      );
    });
  }

  function getReportUserProfile(req, res) {
    const username = req.params.username.toLowerCase();
    return res.render('account/report-profile', {
      title: 'Report User',
      username
    });
  }

  function postReportUserProfile(req, res, next) {
    const { user } = req;
    const { username } = req.params;
    const report = req.sanitize('reportDescription').trimTags();

    if (!username || !report || report === '') {
      req.flash(
        'danger',
        'Oops, something is not right please re-check your submission.'
      );
      return next();
    }

    return Email.send$({
      type: 'email',
      to: 'team@freecodecamp.org',
      cc: user.email,
      from: 'team@freecodecamp.org',
      subject: 'Abuse Report : Reporting ' + username + '\'s profile.',
      text: dedent(`
        Hello Team,\n
        This is to report the profile of ${username}.\n
        Report Details:\n
        ${report}\n\n
        Reported by:
        Username: ${user.username}
        Name: ${user.name}
        Email: ${user.email}\n
        Thanks and regards,
        ${user.name}
      `)
    }, err => {
      if (err) {
        err.redirectTo = '/' + username;
        return next(err);
      }

      req.flash(
        'info',
        `A report was sent to the team with ${user.email} in copy.`
      );
      return res.redirect('/');
    });
  }

};
