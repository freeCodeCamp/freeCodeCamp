const types = [
  'updateTitle',

  'fetchUser',
  'setUser',

  'makeToast',
  'updatePoints',
  'handleError',
  // used to hit the server
  'hardGoTo'
];

export default types
  // make into object with signature { type: nameSpace[type] };
  .reduce((types, type) => ({ ...types, [type]: `app.${type}` }), {});
