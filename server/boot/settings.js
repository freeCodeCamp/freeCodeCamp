import { check } from 'express-validator/check';

import {
  ifNoUser401,
  createValidatorErrorHandler
} from '../utils/middleware';
import supportedLanguages from '../../common/utils/supported-languages.js';
import { themes } from '../../common/utils/themes.js';
import { alertTypes } from '../../common/utils/flash.js';

export default function settingsController(app) {
  const api = app.loopback.Router();
  const toggleUserFlag = flag => (req, res, next) => {
    const { user } = req;
    const currentValue = user[ flag ];
    return user
      .update$({ [ flag ]: !currentValue })
      .subscribe(
        () => res.status(200).json({
          flag,
          value: !currentValue,
          message: 'Your preferences have been updated'
        }),
        next
      );
  };

  const updateMyEmailValidators = [
    check('email')
      .isEmail()
      .withMessage('Email format is invalid.')
  ];

  function updateMyEmail(req, res, next) {
    const { user, body: { email } } = req;
    return user.requestUpdateEmail(email)
      .subscribe(
        message => res.sendFlash(alertTypes.info, message),
        next
      );
  }

  function updateFlag(req, res, next) {
    const { user, body: { flag, newValue } } = req;
    if ( typeof newValue === 'boolean') {
      return toggleUserFlag(flag)(req, res, next);
    }
    return user.requestUpdateFlag(flag, newValue)
      .subscribe(
        message => res.json({ message }),
        next
      );
  }

  function updateMultipleFlags(req, res, next) {
    const { user, body: { values } } = req;
    return user.requestUpdateMultipleFlags(values)
      .subscribe(
        message => res.json({ message }),
        next
      );
  }

  function updateMyLang(req, res, next) {
    const { user, body: { lang } = {} } = req;
    const langName = supportedLanguages[lang];
    const update = { languageTag: lang };
    if (!supportedLanguages[lang]) {
      return res.json({
        message: `${lang} is currently unsupported`
      });
    }
    if (user.languageTag === lang) {
      return res.json({
        message: `Your language is already set to ${langName}`
      });
    }
    return user.update$(update)
      .subscribe(
        () => res.json({
          message: `Your language has been updated to '${langName}'`
        }),
        next
      );
  }

  const updateMyCurrentChallengeValidators = [
    check('currentChallengeId')
      .isMongoId()
      .withMessage('currentChallengeId is not a valid challenge ID')
  ];

  function updateMyCurrentChallenge(req, res, next) {
    const { user, body: { currentChallengeId } } = req;
    return user.update$({ currentChallengeId }).subscribe(
      () => res.json({
        message:
          `your current challenge has been updated to ${currentChallengeId}`
      }),
      next
    );
  }

  api.post(
    '/update-my-current-challenge',
    ifNoUser401,
    updateMyCurrentChallengeValidators,
    createValidatorErrorHandler(alertTypes.danger),
    updateMyCurrentChallenge
  );

  const updateMyThemeValidators = [
    check('theme')
      .isIn(Object.keys(themes))
      .withMessage('Theme is invalid.')
  ];
  function updateMyTheme(req, res, next) {
    const { body: { theme } } = req;
    const errors = req.validationErrors(true);
    if (errors) {
      console.log(errors);
      return res.status(403).json({ errors });
    }
    if (req.user.theme === theme) {
      return res.sendFlash(alertTypes.info, 'Theme already set');
    }
    return req.user.updateTheme(theme)
      .then(
        () => res.sendFlash(alertTypes.info, 'Your theme has been updated'),
        next
      );
  }
  api.post(
    '/update-my-theme',
    ifNoUser401,
    updateMyThemeValidators,
    createValidatorErrorHandler(alertTypes.danger),
    updateMyTheme
  );

  api.post(
    '/toggle-available-for-hire',
    ifNoUser401,
    toggleUserFlag('isAvailableForHire')
  );
  api.post(
    '/toggle-lockdown',
    ifNoUser401,
    toggleUserFlag('isLocked')
  );
  api.post(
    '/toggle-announcement-email',
    ifNoUser401,
    toggleUserFlag('sendMonthlyEmail')
  );
  api.post(
    '/toggle-notification-email',
    ifNoUser401,
    toggleUserFlag('sendNotificationEmail')
  );
  api.post(
    '/toggle-quincy-email',
    ifNoUser401,
    toggleUserFlag('sendQuincyEmail')
  );
  api.post(
    '/update-my-email',
    ifNoUser401,
    updateMyEmailValidators,
    createValidatorErrorHandler(alertTypes.danger),
    updateMyEmail
  );
  api.post(
    '/update-flag',
    ifNoUser401,
    updateFlag
  );
  api.post(
    '/update-multiple-flags',
    ifNoUser401,
    updateMultipleFlags
  );
  api.post(
    '/update-my-lang',
    ifNoUser401,
    updateMyLang
  );

  app.use(api);
}
