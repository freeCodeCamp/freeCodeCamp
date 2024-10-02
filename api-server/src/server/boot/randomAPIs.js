import { pick } from 'lodash';
import { getRedirectParams } from '../utils/redirection';
import { deprecatedEndpoint } from '../utils/disabled-endpoints';
import {
  getProgress,
  normaliseUserFields,
  publicUserProps
} from '../utils/publicUserProps';

module.exports = function (app) {
  const router = app.loopback.Router();
  const User = app.models.User;

  router.get('/api/github', deprecatedEndpoint);
  router.get('/u/:email', unsubscribeDeprecated);
  router.get('/unsubscribe/:email', unsubscribeDeprecated);
  router.get('/ue/:unsubscribeId', unsubscribeById);
  router.get('/resubscribe/:unsubscribeId', resubscribe);
  router.get('/api/users/get-public-profile', blockUserAgent, getPublicProfile);

  app.use(router);

  function unsubscribeDeprecated(req, res) {
    req.flash(
      'info',
      'We are no longer able to process this unsubscription request. ' +
        'Please go to your settings to update your email preferences'
    );
    const { origin } = getRedirectParams(req);
    res.redirectWithFlash(origin);
  }

  function unsubscribeById(req, res, next) {
    const { origin } = getRedirectParams(req);
    const { unsubscribeId } = req.params;
    if (!unsubscribeId) {
      req.flash('info', 'We could not find an account to unsubscribe');
      return res.redirectWithFlash(origin);
    }
    return User.find({ where: { unsubscribeId } }, (err, users) => {
      if (err || !users.length) {
        req.flash('info', 'We could not find an account to unsubscribe');
        return res.redirectWithFlash(origin);
      }
      const updates = users.map(user => {
        return new Promise((resolve, reject) =>
          user.updateAttributes(
            {
              sendQuincyEmail: false
            },
            err => {
              if (err) {
                reject(err);
              } else {
                resolve();
              }
            }
          )
        );
      });
      return Promise.all(updates)
        .then(() => {
          req.flash(
            'success',
            "We've successfully updated your email preferences."
          );
          return res.redirectWithFlash(
            `${origin}/unsubscribed/${unsubscribeId}`
          );
        })
        .catch(next);
    });
  }

  function resubscribe(req, res, next) {
    const { unsubscribeId } = req.params;
    const { origin } = getRedirectParams(req);
    if (!unsubscribeId) {
      req.flash(
        'info',
        'We we unable to process this request, please check and try again'
      );
      res.redirect(origin);
    }
    return User.find({ where: { unsubscribeId } }, (err, users) => {
      if (err || !users.length) {
        req.flash('info', 'We could not find an account to resubscribe');
        return res.redirectWithFlash(origin);
      }
      const [user] = users;
      return new Promise((resolve, reject) =>
        user.updateAttributes(
          {
            sendQuincyEmail: true
          },
          err => {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          }
        )
      )
        .then(() => {
          req.flash(
            'success',
            "We've successfully updated your email preferences. Thank you for resubscribing."
          );
          return res.redirectWithFlash(origin);
        })
        .catch(next);
    });
  }

  const blockedUserAgentParts = ['python', 'google-apps-script', 'curl'];

  function blockUserAgent(req, res, next) {
    const userAgent = req.headers['user-agent'];

    if (
      !userAgent ||
      blockedUserAgentParts.some(ua => userAgent.toLowerCase().includes(ua))
    ) {
      return res
        .status(400)
        .send(
          'This endpoint is no longer available outside of the freeCodeCamp ecosystem'
        );
    }

    return next();
  }

  async function getPublicProfile(req, res) {
    const { username } = req.query;
    if (!username) {
      return res.status(400).json({ error: 'No username provided' });
    }

    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const { completedChallenges, progressTimestamps, profileUI } = user;
    const allUser = {
      ...pick(user, publicUserProps),
      points: progressTimestamps.length,
      completedChallenges,
      ...getProgress(progressTimestamps),
      ...normaliseUserFields(user),
      joinDate: user.id.getTimestamp()
    };

    const publicUser = prepUserForPublish(allUser, profileUI);

    return res.json({
      entities: {
        user: {
          [user.username]: {
            ...publicUser
          }
        }
      },
      result: user.username
    });
  }

  function prepUserForPublish(user, profileUI) {
    const {
      about,
      calendar,
      completedChallenges,
      isDonating,
      joinDate,
      location,
      name,
      points,
      portfolio,
      username,
      yearsTopContributor
    } = user;
    const {
      isLocked = true,
      showAbout = false,
      showCerts = false,
      showDonation = false,
      showHeatMap = false,
      showLocation = false,
      showName = false,
      showPoints = false,
      showPortfolio = false,
      showTimeLine = false
    } = profileUI;

    if (isLocked) {
      return {
        isLocked,
        profileUI,
        username
      };
    }
    return {
      ...user,
      about: showAbout ? about : '',
      calendar: showHeatMap ? calendar : {},
      completedChallenges: (function () {
        if (showTimeLine) {
          return showCerts
            ? completedChallenges
            : completedChallenges.filter(
                ({ challengeType }) => challengeType !== 7
              );
        } else {
          return [];
        }
      })(),
      isDonating: showDonation ? isDonating : null,
      joinDate: showAbout ? joinDate : '',
      location: showLocation ? location : '',
      name: showName ? name : '',
      points: showPoints ? points : null,
      portfolio: showPortfolio ? portfolio : [],
      yearsTopContributor: yearsTopContributor
    };
  }
};
