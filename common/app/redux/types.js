const types = [
  'updateTitle',

  'fetchUser',
  'setUser',

  'makeToast',
  'updatePoints',
  'handleError'
];

export default types
  // make into object with signature { type: nameSpace[type] };
  .reduce((types, type) => ({ ...types, [type]: `app.${type}` }), {});
