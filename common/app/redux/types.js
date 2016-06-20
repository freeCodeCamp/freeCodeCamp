import createTypes from '../utils/create-types';

export default createTypes([
  'updateTitle',

  'fetchUser',
  'addUser',
  'updateThisUser',
  'updateUserPoints',
  'showSignIn',

  'makeToast',
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
  'toggleWikiDrawer',

  // main chat
  'openMainChat',
  'closeMainChat',
  'toggleMainChat'
], 'app');
