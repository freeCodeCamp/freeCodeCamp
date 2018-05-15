import dedent from 'dedent';
import debugFactory from 'debug';
import { curry } from 'lodash';

import {
  ifNoUser401,
  ifNoUserRedirectTo,
  ifNotVerifiedRedirectToSettings
} from '../utils/middleware';

const debug = debugFactory('fcc:boot:user');
const sendNonUserToMap = ifNoUserRedirectTo('/map');
const sendNonUserToMapWithMessage = curry(ifNoUserRedirectTo, 2)('/map');

module.exports = function(app) {
  const router = app.loopback.Router();
  const api = app.loopback.Router();
  const { Email, User } = app.models;

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

  app.use(router);
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
        completedChallenges: []
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
