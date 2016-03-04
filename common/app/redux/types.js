import createTypes from '../utils/create-types';

export default createTypes([
  'updateTitle',

  'fetchUser',
  'setUser',

  'makeToast',
  'updatePoints',
  'handleError',
  // used to hit the server
  'hardGoTo'
], 'app');
