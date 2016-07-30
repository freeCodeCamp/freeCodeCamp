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
  'updateCompletedChallenges',
  'showSignIn',

  'handleError',
  'toggleNightMode',
  // used to hit the server
  'hardGoTo',
  'delayedRedirect',

  'initWindowHeight',
  'updateWindowHeight',
  'updateNavHeight',

  // data handling
  'updateChallengesData',
  'updateJobsData',
  'updateHikesData',

  // drawers
  'toggleMapDrawer',
  'closeMapDrawer',
  'toggleWikiDrawer',

  // chat
  'openMainChat',
  'closeMainChat',
  'toggleMainChat',

  'openHelpChat',
  'closeHelpChat',
  'toggleHelpChat'
], 'app');
