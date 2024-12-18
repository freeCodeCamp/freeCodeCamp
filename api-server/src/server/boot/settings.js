import debug from 'debug';
import { check } from 'express-validator';
import _ from 'lodash';
import isURL from 'validator/lib/isURL';

import { isValidUsername } from '../../../../shared/utils/validate';
import { alertTypes } from '../../common/utils/flash.js';
import {
  deprecatedEndpoint,
  temporarilyDisabledEndpoint
} from '../utils/disabled-endpoints';
import { ifNoUser401, createValidatorErrorHandler } from '../utils/middleware';

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
  api.put(
    '/update-my-keyboard-shortcuts',
    ifNoUser401,
    updateMyKeyboardShortcuts
  );
  api.put('/update-my-honesty', ifNoUser401, updateMyHonesty);
  api.put('/update-my-quincy-email', ifNoUser401, updateMyQuincyEmail);
  api.put('/update-my-classroom-mode', ifNoUser401, updateMyClassroomMode);

  app.use(api);
}

const standardErrorMessage = {
  type: 'danger',
  message: 'flash.wrong-updating'
};

const createStandardHandler = (req, res, next, alertMessage) => err => {
  if (err) {
    res.status(500).json(standardErrorMessage);
    return next(err);
  }
  return res.status(200).json({ type: 'success', message: alertMessage });
};

const createUpdateUserProperties = (buildUpdate, validate, successMessage) => {
  return (req, res, next) => {
    const { user, body } = req;
    const update = buildUpdate(body);
    if (validate(update)) {
      user.updateAttributes(
        update,
        createStandardHandler(req, res, next, successMessage)
      );
    } else {
      handleInvalidUpdate(res);
    }
  };
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
    .subscribe(
      message => res.json({ type: message.type, message: message.message }),
      next
    );
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
  createUpdateUserProperties(
    buildUpdate,
    validate,
    'flash.portfolio-item-updated'
  )(...args);
}

// This API is responsible for what campers decide to make public in their profile, and what is private.
function updateMyProfileUI(req, res, next) {
  const {
    user,
    body: { profileUI }
  } = req;

  const update = {
    isLocked: !!profileUI.isLocked,
    showAbout: !!profileUI.showAbout,
    showCerts: !!profileUI.showCerts,
    showDonation: !!profileUI.showDonation,
    showHeatMap: !!profileUI.showHeatMap,
    showLocation: !!profileUI.showLocation,
    showName: !!profileUI.showName,
    showPoints: !!profileUI.showPoints,
    showPortfolio: !!profileUI.showPortfolio,
    showTimeLine: !!profileUI.showTimeLine
  };

  user.updateAttribute(
    'profileUI',
    update,
    createStandardHandler(req, res, next, 'flash.privacy-updated')
  );
}

export function updateMyAbout(req, res, next) {
  const {
    user,
    body: { name, location, about, picture }
  } = req;
  log(name, location, picture, about);
  // prevent dataurls from being stored
  const update = isURL(picture, { require_protocol: true })
    ? { name, location, about, picture }
    : { name, location, about, picture: '' };
  return user.updateAttributes(
    update,
    createStandardHandler(req, res, next, 'flash.updated-about-me')
  );
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
  return user.updateAttributes(
    update,
    createStandardHandler(req, res, next, 'flash.privacy-updated')
  );
};

const allowedSocialsAndDomains = {
  githubProfile: 'github.com',
  linkedin: 'linkedin.com',
  twitter: ['twitter.com', 'x.com'],
  website: ''
};

const socialVals = Object.keys(allowedSocialsAndDomains);

export function updateMySocials(...args) {
  const buildUpdate = body => _.pick(body, socialVals);
  const validate = update => {
    // Socials should point to their respective domains
    // or be empty strings
    return Object.keys(update).every(key => {
      const val = update[key];
      if (val === '') {
        return true;
      }
      if (key === 'website') {
        return isURL(val, { require_protocol: true });
      }

      const domain = allowedSocialsAndDomains[key];

      try {
        const url = new URL(val);
        const topDomain = url.hostname.split('.').slice(-2);
        if (topDomain.length === 2) {
          return Array.isArray(domain)
            ? domain.some(d => topDomain.join('.') === d)
            : topDomain.join('.') === domain;
        }
        return false;
      } catch (e) {
        return false;
      }
    });
  };
  createUpdateUserProperties(
    buildUpdate,
    validate,
    'flash.updated-socials'
  )(...args);
}

function updateMyTheme(...args) {
  const buildUpdate = body => _.pick(body, 'theme');
  const validate = ({ theme }) => theme == 'default' || theme == 'night';
  createUpdateUserProperties(
    buildUpdate,
    validate,
    'flash.updated-themes'
  )(...args);
}

function updateMyKeyboardShortcuts(...args) {
  const buildUpdate = body => _.pick(body, 'keyboardShortcuts');
  const validate = ({ keyboardShortcuts }) =>
    typeof keyboardShortcuts === 'boolean';
  createUpdateUserProperties(
    buildUpdate,
    validate,
    'flash.keyboard-shortcut-updated'
  )(...args);
}

function updateMyHonesty(...args) {
  const buildUpdate = body => _.pick(body, 'isHonest');
  const validate = ({ isHonest }) => isHonest === true;
  createUpdateUserProperties(
    buildUpdate,
    validate,
    'buttons.accepted-honesty'
  )(...args);
}

function updateMyQuincyEmail(...args) {
  const buildUpdate = body => _.pick(body, 'sendQuincyEmail');
  const validate = ({ sendQuincyEmail }) =>
    typeof sendQuincyEmail === 'boolean';
  createUpdateUserProperties(
    buildUpdate,
    validate,
    'flash.subscribe-to-quincy-updated'
  )(...args);
}

export function updateMyClassroomMode(...args) {
  const buildUpdate = body => _.pick(body, 'isClassroomAccount');
  const validate = ({ isClassroomAccount }) =>
    typeof isClassroomAccount === 'boolean';
  createUpdateUserProperties(
    buildUpdate,
    validate,
    'flash.classroom-mode-updated'
  )(...args);
}

function handleInvalidUpdate(res) {
  res.status(403).json({
    type: 'danger',
    message: 'flash.wrong-updating'
  });
}

function updateUserFlag(req, res, next) {
  const { user, body: update } = req;
  const allowedKeys = ['githubProfile', 'linkedin', 'twitter', 'website'];
  if (Object.keys(update).every(key => allowedKeys.includes(key))) {
    return user.updateAttributes(
      update,
      createStandardHandler(req, res, next, 'flash.updated-socials')
    );
  }
  return res.status(403).json({
    type: 'danger',
    message: 'flash.invalid-update-flag'
  });
}
