import debugFactory from 'debug';
import dedent from 'dedent';
import { body } from 'express-validator';
import { pick } from 'lodash';
import fetch from 'node-fetch';

import {
  fixCompletedChallengeItem,
  fixCompletedExamItem,
  fixPartiallyCompletedChallengeItem,
  fixSavedChallengeItem
} from '../../common/utils';
import { removeCookies } from '../utils/getSetAccessToken';
import { ifNoUser401, ifNoUserRedirectHome } from '../utils/middleware';
import {
  getProgress,
  normaliseUserFields,
  userPropsForSession
} from '../utils/publicUserProps';
import { getRedirectParams } from '../utils/redirection';
import { trimTags } from '../utils/validators';
import {
  createDeleteUserToken,
  encodeUserToken
} from '../middlewares/user-token';
import { createDeleteMsUsername } from '../middlewares/ms-username';
import { deprecatedEndpoint } from '../utils/disabled-endpoints';

const log = debugFactory('fcc:boot:user');
const sendNonUserToHome = ifNoUserRedirectHome();

function bootUser(app) {
  const api = app.loopback.Router();

  const getSessionUser = createReadSessionUser(app);
  const postReportUserProfile = createPostReportUserProfile(app);
  const postDeleteAccount = createPostDeleteAccount(app);
  const postUserToken = createPostUserToken(app);
  const deleteUserToken = createDeleteUserToken(app);
  const postMsUsername = createPostMsUsername(app);
  const deleteMsUsername = createDeleteMsUsername(app);

  api.get('/account', sendNonUserToHome, deprecatedEndpoint);
  api.get('/account/unlink/:social', sendNonUserToHome, getUnlinkSocial);
  api.get('/user/get-session-user', getSessionUser);
  api.post(
    '/account/delete',
    ifNoUser401,
    deleteUserToken,
    deleteMsUsername,
    postDeleteAccount
  );
  api.post(
    '/account/reset-progress',
    ifNoUser401,
    deleteUserToken,
    deleteMsUsername,
    postResetProgress
  );
  api.post(
    '/user/report-user/',
    ifNoUser401,
    body('reportDescription').customSanitizer(trimTags),
    postReportUserProfile
  );

  api.post('/user/user-token', ifNoUser401, postUserToken);
  api.delete(
    '/user/user-token',
    ifNoUser401,
    deleteUserToken,
    deleteUserTokenResponse
  );

  api.post('/user/ms-username', ifNoUser401, postMsUsername);
  api.delete(
    '/user/ms-username',
    ifNoUser401,
    deleteMsUsername,
    deleteMsUsernameResponse
  );

  app.use(api);
}

function createPostUserToken(app) {
  const { UserToken } = app.models;

  return async function postUserToken(req, res) {
    const ttl = 900 * 24 * 60 * 60 * 1000;
    let encodedUserToken;

    try {
      await UserToken.destroyAll({ userId: req.user.id });
      const newUserToken = await UserToken.create({ ttl, userId: req.user.id });

      if (!newUserToken?.id) throw new Error();
      encodedUserToken = encodeUserToken(newUserToken.id);
    } catch (e) {
      return res.status(500).send('Error starting project');
    }

    return res.json({ userToken: encodedUserToken });
  };
}

function deleteUserTokenResponse(req, res) {
  if (!req.userTokenDeleted) {
    return res.status(500).send('Error deleting user token');
  }

  return res.send({ userToken: null });
}

function createPostMsUsername(app) {
  const { MsUsername } = app.models;

  return async function postMsUsername(req, res) {
    // example msTranscriptUrl: https://learn.microsoft.com/en-us/users/mot01/transcript/8u6awert43q1plo
    // the last part is the transcript ID
    // the username is irrelevant, and retrieved from the MS API response

    const { msTranscriptUrl } = req.body;

    if (!msTranscriptUrl) {
      return res
        .status(400)
        .send('Please include a Microsoft transcript URL in request');
    }

    const msTranscriptId = msTranscriptUrl.split('/').pop();
    const msTranscriptApiUrl = `https://learn.microsoft.com/api/profiles/transcript/share/${msTranscriptId}`;

    try {
      const msApiRes = await fetch(msTranscriptApiUrl);

      if (!msApiRes.ok) {
        res.status(500);
        throw new Error(
          'An error occurred trying to get your Microsoft transcript'
        );
      }

      const { userName } = await msApiRes.json();

      if (!userName) {
        res.status(500);
        throw new Error(
          'An error occured trying to link your Microsoft account'
        );
      }

      // Don't create if username is used by another fCC account
      const usernameUsed = await MsUsername.findOne({
        where: { msUsername: userName }
      });

      if (usernameUsed) {
        throw new Error('That username is already used');
      }

      await MsUsername.destroyAll({ userId: req.user.id });

      const ttl = 900 * 24 * 60 * 60 * 1000;
      const newMsUsername = await MsUsername.create({
        ttl,
        userId: req.user.id,
        msUsername: userName
      });

      if (!newMsUsername?.id) {
        res.status(500);
        throw new Error(
          'An error occured trying to link your Microsoft account'
        );
      }

      return res.json({ msUsername: userName });
    } catch (e) {
      log(e);
      return res.send(e.message);
    }
  };
}

function deleteMsUsernameResponse(req, res) {
  if (!req.msUsernameDeleted) {
    return res
      .status(500)
      .send('An error occurred trying to unlink your Microsoft username');
  }

  return res.send({ msUsername: null });
}

function createReadSessionUser(app) {
  const { MsUsername, UserToken } = app.models;

  return async function getSessionUser(req, res, next) {
    const queryUser = req.user;

    let encodedUserToken;
    try {
      const userId = queryUser?.id;
      const userToken = userId
        ? await UserToken.findOne({
            where: { userId }
          })
        : null;

      encodedUserToken = userToken ? encodeUserToken(userToken.id) : undefined;
    } catch (e) {
      return next(e);
    }

    let msUsername;
    try {
      const userId = queryUser?.id;
      const msUser = userId
        ? await MsUsername.findOne({
            where: { userId }
          })
        : null;

      msUsername = msUser ? msUser.msUsername : undefined;
    } catch (e) {
      return next(e);
    }

    if (!queryUser || !queryUser.toJSON().username) {
      // TODO: This should return an error status
      return res.json({ user: {}, result: '' });
    }

    try {
      const [
        completedChallenges,
        completedExams,
        partiallyCompletedChallenges,
        progressTimestamps,
        savedChallenges
      ] = await Promise.all(
        [
          queryUser.getCompletedChallenges$(),
          queryUser.getCompletedExams$(),
          queryUser.getPartiallyCompletedChallenges$(),
          queryUser.getPoints$(),
          queryUser.getSavedChallenges$()
        ].map(obs => obs.toPromise())
      );

      const { calendar } = getProgress(progressTimestamps);
      const user = {
        ...queryUser.toJSON(),
        calendar,
        completedChallenges: completedChallenges.map(fixCompletedChallengeItem),
        completedExams: completedExams.map(fixCompletedExamItem),
        partiallyCompletedChallenges: partiallyCompletedChallenges.map(
          fixPartiallyCompletedChallengeItem
        ),
        savedChallenges: savedChallenges.map(fixSavedChallengeItem)
      };
      const response = {
        user: {
          [user.username]: {
            ...pick(user, userPropsForSession),
            username: user.usernameDisplay || user.username,
            isEmailVerified: !!user.emailVerified,
            ...normaliseUserFields(user),
            joinDate: user.id.getTimestamp(),
            userToken: encodedUserToken,
            msUsername
          }
        },
        result: user.username
      };
      return res.json(response);
    } catch (e) {
      // TODO: This should return an error status
      return res.json({ user: {}, result: '' });
    }
  };
}

function getUnlinkSocial(req, res, next) {
  const { user } = req;
  const { username } = user;
  const { origin } = getRedirectParams(req);
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

  return user.identities(query, function (err, identities) {
    if (err) {
      return next(err);
    }

    // assumed user identity is unique by provider
    let identity = identities.shift();
    if (!identity) {
      req.flash('danger', 'No social account found');
      return res.redirect('/' + username);
    }

    return identity.destroy(function (err) {
      if (err) {
        return next(err);
      }

      const updateData = { [social]: null };

      return user.updateAttributes(updateData, err => {
        if (err) {
          return next(err);
        }
        log(`${social} has been unlinked successfully`);

        req.flash('info', `You've successfully unlinked your ${social}.`);
        return res.redirectWithFlash(`${origin}/${username}`);
      });
    });
  });
}

function postResetProgress(req, res, next) {
  const { user } = req;
  return user.updateAttributes(
    {
      progressTimestamps: [Date.now()],
      currentChallengeId: '',
      isRespWebDesignCert: false,
      is2018DataVisCert: false,
      isFrontEndLibsCert: false,
      isJsAlgoDataStructCert: false,
      isApisMicroservicesCert: false,
      isInfosecQaCert: false,
      isQaCertV7: false,
      isInfosecCertV7: false,
      is2018FullStackCert: false,
      isFrontEndCert: false,
      isBackEndCert: false,
      isDataVisCert: false,
      isFullStackCert: false,
      isSciCompPyCertV7: false,
      isDataAnalysisPyCertV7: false,
      isMachineLearningPyCertV7: false,
      isRelationalDatabaseCertV8: false,
      isCollegeAlgebraPyCertV8: false,
      completedChallenges: [],
      completedExams: [],
      savedChallenges: [],
      partiallyCompletedChallenges: [],
      needsModeration: false
    },
    function (err) {
      if (err) {
        return next(err);
      }
      return res.status(200).json({});
    }
  );
}

function createPostDeleteAccount(app) {
  const { User } = app.models;
  return async function postDeleteAccount(req, res, next) {
    return User.destroyById(req.user.id, function (err) {
      if (err) {
        return next(err);
      }
      req.logout();
      removeCookies(req, res);
      return res.status(200).json({});
    });
  };
}

function createPostReportUserProfile(app) {
  const { Email } = app.models;
  return function postReportUserProfile(req, res, next) {
    const { user } = req;
    const { username, reportDescription: report } = req.body;
    const { origin } = getRedirectParams(req);
    log(username);
    log(report);

    if (!username || !report || report === '') {
      return res.json({
        type: 'danger',
        message: 'flash.provide-username'
      });
    }
    return Email.send$(
      {
        type: 'email',
        to: 'support@freecodecamp.org',
        cc: user.email,
        from: 'team@freecodecamp.org',
        subject: `Abuse Report : Reporting ${username}'s profile.`,
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
      },
      err => {
        if (err) {
          err.redirectTo = `${origin}/${username}`;
          return next(err);
        }

        return res.json({
          type: 'info',
          message: 'flash.report-sent',
          variables: { email: user.email }
        });
      }
    );
  };
}
export default bootUser;
