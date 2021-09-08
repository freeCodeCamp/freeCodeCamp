import debug from 'debug';
import { check } from 'express-validator';

import { isValidUsername } from '../../../../utils/validate';
import { nanoidCharSet } from '../../common/models/user';

import { alertTypes } from '../../common/utils/flash.js';
import { themes } from '../../common/utils/themes.js';
import { ifNoUser401, createValidatorErrorHandler } from '../utils/middleware';
import { getRedirectParams } from '../utils/redirection';

const generate = require('nanoid/generate');

const log = debug('fcc:boot:settings');

const { FORUM_LOCATION, DISCOURSE_SECRET, HOME_LOCATION } = process.env;

export default function settingsController(app) {
  const api = app.loopback.Router();

  const updateMyUsername = createUpdateMyUsername(app);

  api.put('/update-privacy-terms', ifNoUser401, updatePrivacyTerms);

  api.post(
    '/refetch-user-completed-challenges',
    ifNoUser401,
    refetchCompletedChallenges
  );
  api.post(
    '/update-my-current-challenge',
    ifNoUser401,
    updateMyCurrentChallengeValidators,
    createValidatorErrorHandler(alertTypes.danger),
    updateMyCurrentChallenge
  );
  api.post('/update-my-portfolio', ifNoUser401, updateMyPortfolio);
  api.post(
    '/update-my-theme',
    ifNoUser401,
    updateMyThemeValidators,
    createValidatorErrorHandler(alertTypes.danger),
    updateMyTheme
  );
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

function refetchCompletedChallenges(req, res, next) {
  const { user } = req;
  return user
    .requestCompletedChallenges()
    .subscribe(completedChallenges => res.json({ completedChallenges }), next);
}

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

const updateMyCurrentChallengeValidators = [
  check('currentChallengeId')
    .isMongoId()
    .withMessage('currentChallengeId is not a valid challenge ID')
];

function updateMyCurrentChallenge(req, res, next) {
  const {
    user,
    body: { currentChallengeId }
  } = req;
  return user.updateAttribute(
    'currentChallengeId',
    currentChallengeId,
    (err, updatedUser) => {
      if (err) {
        return next(err);
      }
      const { currentChallengeId } = updatedUser;
      return res.status(200).json(currentChallengeId);
    }
  );
}

const updateMyThemeValidators = [
  check('theme').isIn(Object.keys(themes)).withMessage('Theme is invalid.')
];

function updateMyTheme(req, res, next) {
  const {
    body: { theme }
  } = req;
  if (req.user.theme === theme) {
    return res.sendFlash(alertTypes.info, 'Theme already set');
  }
  return req.user
    .updateTheme(theme)
    .then(
      () => res.sendFlash(alertTypes.info, 'Your theme has been updated!'),
      next
    );
}

function updateMyPortfolio(req, res, next) {
  const {
    user,
    body: { portfolio }
  } = req;
  // if we only have one key, it should be the id
  // user cannot send only one key to this route
  // other than to remove a portfolio item
  const requestDelete = Object.keys(portfolio).length === 1;
  return user
    .updateMyPortfolio(portfolio, requestDelete)
    .subscribe(message => res.json({ message }), next);
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
  return user.updateAttributes(
    { name, location, about, picture },
    createStandardHandler(req, res, next)
  );
}

function createUpdateMyUsername(app) {
  const { User } = app.models;
  return async function updateMyUsername(req, res, next) {
    const {
      user,
      body: { username }
    } = req;
    if (username === user.username) {
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

    const exists = await User.doesExist(username);

    if (exists) {
      return res.json({
        type: 'info',
        message: 'flash.username-taken'
      });
    }

    return user.updateAttribute('username', username, err => {
      if (err) {
        res.status(500).json(standardErrorMessage);
        return next(err);
      }

      return res.status(200).json({
        type: 'success',
        message: `flash.username-updated`,
        variables: { username: username }
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

function updateUserFlag(req, res, next) {
  const { user, body: update } = req;
  return user.updateAttributes(update, createStandardHandler(req, res, next));
}

// redirect user to https://forum.freecodecamp.org/session/sso_provider?sso=URL_ENCODED_PAYLOAD&sig=HEX_SIGNATURE
function connectDiscourse(req, res) {
  // Generate nonce
  const nonce = generate(nanoidCharSet, 20);
  req.nonce = nonce;
  // Create payload with nonce and return url: nonce=NONCE&return_sso_url=RETURN_URL
  const payload = `nonce=${nonce}&return_sso_url=${HOME_LOCATION}/auth/discourse/callback`;
  // BASE64 encode payload: BASE64_PAYLOAD
  const BASE64_PAYLOAD = Buffer.from(payload).toString('base64');
  // URL encode payload: URL_ENCODED_PAYLOAD
  const URL_ENCODED_PAYLOAD = encodeURIComponent(BASE64_PAYLOAD);

  // Generate HMAC-SHA256 signature from BASE64_PAYLOAD and secret:
  const signature = crypto.createHmac('sha256', DISCOURSE_SECRET);
  signature.update(BASE64_PAYLOAD);
  const HEX_SIGNATURE = signature.digest('hex');
  log(URL_ENCODED_PAYLOAD, HEX_SIGNATURE);
  // TODO: This was a try to fix CORS - failed, but maybe needed anyway?
  res.set('Access-Control-Allow-Origin', HOME_LOCATION);
  return res.redirect(
    `${FORUM_LOCATION}/session/sso_provider?sso=${URL_ENCODED_PAYLOAD}&sig=${HEX_SIGNATURE}`
  );
}

function checkDidAuthenticate(req, res, next) {
  // Discourse will redirect logged in user to return_sso_url
  // Query string will include `sig` and `sso` with some user info
  log(req.query);
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
  log(req.query.sso);
  const BASE64_SSO = Buffer.from(req.query.sso, 'base64').toString();
  log(BASE64_SSO);
  // Take `nonce` key and compare it with nonce generated
  const nonce = BASE64_SSO.match(/nonce=([^&]+)/)[1];
  if (nonce !== req.nonce) {
    log('invalid nonce');
    return res.status(401).send('invalid nonce');
  }
  return next();
}

function addDiscourseUserId(req, res, next) {
  // drop generated nonce.
  delete req.nonce;
  // Use query string with user information to store DISCOURSE_USER_ID in fCC DB
  const { id } = req.query;
  const { userId } = req.body;
  log(id, userId);
  req.user.updateAttribute({ discourseId: id }, err => {
    // TODO: Use standardError or flash?
    if (err) {
      req.flash('error', 'We were unable to link your Discourse account');
      const { origin } = getRedirectParams(req);
      return res.redirectWithFlash(origin);
    }
    return next();
  });
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
