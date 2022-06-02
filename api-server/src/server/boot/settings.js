import debug from 'debug';
import { check } from 'express-validator';
import _ from 'lodash';
import isURL from 'validator/lib/isURL';

import { isValidUsername } from '../../../../utils/validate';
import { nanoidCharSet } from '../../common/models/user';
import { alertTypes } from '../../common/utils/flash.js';
import {
  deprecatedEndpoint,
  temporarilyDisabledEndpoint
} from '../utils/disabled-endpoints';
import { ifNoUser401, createValidatorErrorHandler } from '../utils/middleware';
import { getRedirectParams } from '../utils/redirection';

const generate = require('nanoid/generate');
const { DISCOURSE_SECRET, API_LOCATION } = process.env;

const log = debug('fcc:boot:settings');

export default function settingsController(app) {
  const api = app.loopback.Router();

  const updateMyUsername = createUpdateMyUsername(app);

  api.put('/update-privacy-terms', ifNoUser401, updatePrivacyTerms);

  api.post('/refetch-user-completed-challenges', deprecatedEndpoint);
  // Re-enable once we can handle the traffic
  // api.post(
  //   '/update-my-current-challenge',
  //   ifNoUser401,
  //   updateMyCurrentChallengeValidators,
  //   createValidatorErrorHandler(alertTypes.danger),
  //   updateMyCurrentChallenge
  // );
  api.post('/update-my-current-challenge', temporarilyDisabledEndpoint);
  api.put('/update-my-portfolio', ifNoUser401, updateMyPortfolio);
  api.put('/update-my-theme', ifNoUser401, updateMyTheme);
  api.put('/update-my-about', ifNoUser401, updateMyAbout);
  api.put(
    '/update-my-email',
    ifNoUser401,
    updateMyEmailValidators,
    createValidatorErrorHandler(alertTypes.danger),
    updateMyEmail
  );
  api.put('/update-my-profileui', ifNoUser401, updateMyProfileUI);
  api.put('/update-my-username', ifNoUser401, updateMyUsername);
  api.put('/update-user-flag', ifNoUser401, updateUserFlag);
  api.put('/update-my-socials', ifNoUser401, updateMySocials);
  api.put('/update-my-sound', ifNoUser401, updateMySound);
  api.put('/update-my-honesty', ifNoUser401, updateMyHonesty);
  api.put('/update-my-quincy-email', ifNoUser401, updateMyQuincyEmail);

  // DISCOURSE SSO
  api.post('/discourse/connect', ifNoUser401, connectDiscourse);
  // GET is only made from Discourse (ifNoUser401 NOT needed)
  api.get(
    '/auth/discourse/callback',
    checkDidAuthenticate,
    addDiscourseUserId,
    handleSuccessfulConnection
  );

  app.use(api);
}

const standardErrorMessage = {
  type: 'danger',
  message: 'flash.wrong-updating'
};

const standardSuccessMessage = {
  type: 'success',
  message: 'flash.updated-preferences'
};

const createStandardHandler = (req, res, next) => err => {
  if (err) {
    res.status(500).json(standardErrorMessage);
    return next(err);
  }
  return res.status(200).json(standardSuccessMessage);
};

const updateMyEmailValidators = [
  check('email').isEmail().withMessage('Email format is invalid.')
];

function updateMyEmail(req, res, next) {
  const {
    user,
    body: { email }
  } = req;
  return user
    .requestUpdateEmail(email)
    .subscribe(message => res.json({ message }), next);
}

// Re-enable once we can handle the traffic
// const updateMyCurrentChallengeValidators = [
//   check('currentChallengeId')
//     .isMongoId()
//     .withMessage('currentChallengeId is not a valid challenge ID')
// ];

// Re-enable once we can handle the traffic
// function updateMyCurrentChallenge(req, res, next) {
//   const {
//     user,
//     body: { currentChallengeId }
//   } = req;
//   return user.updateAttribute(
//     'currentChallengeId',
//     currentChallengeId,
//     (err, updatedUser) => {
//       if (err) {
//         return next(err);
//       }
//       const { currentChallengeId } = updatedUser;
//       return res.status(200).json(currentChallengeId);
//     }
//   );
// }

function updateMyPortfolio(...args) {
  const portfolioKeys = ['id', 'title', 'description', 'url', 'image'];
  const buildUpdate = body => {
    const portfolio = body?.portfolio?.map(elem => _.pick(elem, portfolioKeys));
    return { portfolio };
  };
  const validate = ({ portfolio }) => portfolio?.every(isPortfolioElement);
  const isPortfolioElement = elem =>
    Object.values(elem).every(val => typeof val == 'string');
  createUpdateUserProperties(buildUpdate, validate)(...args);
}

function updateMyProfileUI(req, res, next) {
  const {
    user,
    body: { profileUI }
  } = req;
  user.updateAttribute(
    'profileUI',
    profileUI,
    createStandardHandler(req, res, next)
  );
}

function updateMyAbout(req, res, next) {
  const {
    user,
    body: { name, location, about, picture }
  } = req;
  log(name, location, picture, about);
  // prevent dataurls from being stored
  const update = isURL(picture, { require_protocol: true })
    ? { name, location, about, picture }
    : { name, location, about };
  return user.updateAttributes(update, createStandardHandler(req, res, next));
}

function createUpdateMyUsername(app) {
  const { User } = app.models;
  return async function updateMyUsername(req, res, next) {
    const { user, body } = req;
    const usernameDisplay = body.username.trim();
    const username = usernameDisplay.toLowerCase();
    if (
      username === user.username &&
      user.usernameDisplay &&
      usernameDisplay === user.usernameDisplay
    ) {
      return res.json({
        type: 'info',
        message: 'flash.username-used'
      });
    }
    const validation = isValidUsername(username);

    if (!validation.valid) {
      return res.json({
        type: 'info',
        message: `Username ${username} ${validation.error}`
      });
    }

    const exists =
      username === user.username ? false : await User.doesExist(username);

    if (exists) {
      return res.json({
        type: 'info',
        message: 'flash.username-taken'
      });
    }

    return user.updateAttributes({ username, usernameDisplay }, err => {
      if (err) {
        res.status(500).json(standardErrorMessage);
        return next(err);
      }

      return res.status(200).json({
        type: 'success',
        message: `flash.username-updated`,
        variables: { username: usernameDisplay }
      });
    });
  };
}

const updatePrivacyTerms = (req, res, next) => {
  const {
    user,
    body: { quincyEmails }
  } = req;
  const update = {
    acceptedPrivacyTerms: true,
    sendQuincyEmail: !!quincyEmails
  };
  return user.updateAttributes(update, err => {
    if (err) {
      res.status(500).json(standardErrorMessage);
      return next(err);
    }
    return res.status(200).json(standardSuccessMessage);
  });
};

function updateMySocials(...args) {
  const buildUpdate = body =>
    _.pick(body, ['githubProfile', 'linkedin', 'twitter', 'website']);
  const validate = update =>
    Object.values(update).every(x => typeof x === 'string');
  createUpdateUserProperties(buildUpdate, validate)(...args);
}

function updateMyTheme(...args) {
  const buildUpdate = body => _.pick(body, 'theme');
  const validate = ({ theme }) => theme == 'default' || theme == 'night';
  createUpdateUserProperties(buildUpdate, validate)(...args);
}

function updateMySound(...args) {
  const buildUpdate = body => _.pick(body, 'sound');
  const validate = ({ sound }) => typeof sound === 'boolean';
  createUpdateUserProperties(buildUpdate, validate)(...args);
}

function updateMyHonesty(...args) {
  const buildUpdate = body => _.pick(body, 'isHonest');
  const validate = ({ isHonest }) => isHonest === true;
  createUpdateUserProperties(buildUpdate, validate)(...args);
}

function updateMyQuincyEmail(...args) {
  const buildUpdate = body => _.pick(body, 'sendQuincyEmail');
  const validate = ({ sendQuincyEmail }) =>
    typeof sendQuincyEmail === 'boolean';
  createUpdateUserProperties(buildUpdate, validate)(...args);
}

function createUpdateUserProperties(buildUpdate, validate) {
  return (req, res, next) => {
    const { user, body } = req;
    const update = buildUpdate(body);
    if (validate(update)) {
      user.updateAttributes(update, createStandardHandler(req, res, next));
    } else {
      handleInvalidUpdate(res);
    }
  };
}

function handleInvalidUpdate(res) {
  res.status(403).json({
    type: 'danger',
    message: 'flash.wrong-updating'
  });
}

function updateUserFlag(req, res, next) {
  const { user, body: update } = req;
  const allowedKeys = [
    'theme',
    'sound',
    'isHonest',
    'portfolio',
    'sendQuincyEmail',
    'isGithub',
    'isLinkedIn',
    'isTwitter',
    'isWebsite',
    'githubProfile',
    'linkedin',
    'twitter',
    'website'
  ];
  if (Object.keys(update).every(key => allowedKeys.includes(key))) {
    return user.updateAttributes(update, createStandardHandler(req, res, next));
  }
  return res.status(403).json({
    type: 'danger',
    message: 'flash.invalid-update-flag'
  });
}

function connectDiscourse(req, res) {
  // Generate nonce
  const nonce = generate(nanoidCharSet, 20);
  // Save nonce to dedicated collection
  saveNonceToDB(nonce);
  // Create payload with nonce and return url: nonce=NONCE&return_sso_url=RETURN_URL
  const payload = `nonce=${nonce}&return_sso_url=${API_LOCATION}/auth/discourse/callback`;
  // BASE64 encode payload: BASE64_PAYLOAD
  const BASE64_PAYLOAD = Buffer.from(payload).toString('base64');
  // URL encode payload: URL_ENCODED_PAYLOAD
  const URL_ENCODED_PAYLOAD = encodeURIComponent(BASE64_PAYLOAD);

  // Generate HMAC-SHA256 signature from BASE64_PAYLOAD and secret:
  const signature = crypto.createHmac('sha256', DISCOURSE_SECRET);
  signature.update(BASE64_PAYLOAD);
  const HEX_SIGNATURE = signature.digest('hex');

  return res.json({
    URL_ENCODED_PAYLOAD,
    HEX_SIGNATURE
  });
  // Redirect does not work because of null origin in Discourse request
  // return res.redirect(
  //   `${FORUM_LOCATION}/session/sso_provider?sso=${URL_ENCODED_PAYLOAD}&sig=${HEX_SIGNATURE}`
  // );
}

function checkDidAuthenticate(req, res, next) {
  // Discourse will redirect logged in user to return_sso_url
  // Query string will include `sig` and `sso` with some user info
  // Compute the HMAC-SHA256 of sso using sso provider secret as key
  const signature = crypto.createHmac('sha256', DISCOURSE_SECRET);
  signature.update(req.query.sso);
  // Convert `sig` from hex string into bytes: SIGNATURE_BYTES
  const SIGNATURE_BYTES = Buffer.from(req.query.sig, 'hex');
  // Compare HMAC-SHA256 signature with SIGNATURE_BYTES (must be equal)
  const isValid = signature.digest('hex') === SIGNATURE_BYTES.toString('hex');
  if (!isValid) {
    log('invalid signature');
    return res.status(401).send('invalid signature');
  }
  // BASE64 decode sso - shuold be equal to passed embedded query string.
  const BASE64_SSO = Buffer.from(req.query.sso, 'base64').toString();
  req.externalId = BASE64_SSO.match(/external_id=([^&]+)/)[1];
  // Take `nonce` key and compare it with nonce generated
  const nonce = BASE64_SSO.match(/nonce=([^&]+)/)[1];
  const dbNonce = getNonceFromDB();
  if (nonce !== dbNonce) {
    log('invalid nonce');
    return res.status(401).send('invalid nonce');
  }
  return next();
}

function addDiscourseUserId(req, res, next) {
  // drop generated nonce from collection

  // Use query string with user information to store DISCOURSE_USER_ID in fCC DB
  const { externalId } = req;
  req.user.updateAttribute('discourseId', externalId, err => {
    // TODO: Use standardError or flash?
    if (err) {
      req.flash('error', 'We were unable to link your Discourse account');
      const { origin } = getRedirectParams(req);
      return res.redirectWithFlash(origin);
    }
    return next();
  });
}

function getNonceFromDB() {
  // TODO: Get nonce from nonce collection
}
function saveNonceToDB(nonce) {
  // TODO: Save nonce to nonce collection
  return nonce;
}

function handleSuccessfulConnection(req, res) {
  req.flash(
    'success',
    'You have successfully connected your Discourse account'
  );
  const { origin } = getRedirectParams(req);
  // Should this just redirect to /settings ?
  return res.redirectWithFlash(origin);
}
