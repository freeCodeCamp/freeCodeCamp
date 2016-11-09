import createTypes from '../utils/create-types';

export default createTypes([
  'analytics',
  'updateTitle',
  'updateAppLang',

  'fetchUser',
  'addUser',
  'updateThisUser',
  'updateUserPoints',
  'updateUserFlag',
  'updateUserEmail',
  'updateUserLang',
  'updateUserChallenge',
  'showSignIn',
  'loadCurrentChallenge',
  'updateMyCurrentChallenge',

  'handleError',
  // used to hit the server
  'hardGoTo',
  'delayedRedirect',

  'initWindowHeight',
  'updateWindowHeight',
  'updateNavHeight',

  // data handling
  'updateChallengesData',
  'updateHikesData',

  // night mode
  'toggleNightMode',
  'updateTheme',
  'addThemeToBody'
], 'app');
