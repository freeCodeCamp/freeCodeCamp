import { createTypes } from 'redux-create-types';

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

  // data handling
  'updateChallengesData',
  'updateHikesData',

  // night mode
  'toggleNightMode',
  'updateTheme',
  'addThemeToBody',

  // nav
  'openDropdown',
  'closeDropdown'
], 'app');
