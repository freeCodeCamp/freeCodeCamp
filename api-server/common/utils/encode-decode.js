import _ from 'lodash/fp';

// we don't store loop protect disable key
export const removeNoprotect = _.replace(/noprotect/gi, '');

export const encodeScriptTags = _.flow(
  _.replace(/<script>/gi, 'fccss'),
  _.replace(/<\/script>/gi, 'fcces')
);

export const decodeScriptTags = _.flow(
  _.replace(/fccss/gi, '<script>'),
  _.replace(/fcces/gi, '</script>')
);

export const encodeFormAction = _.replace(
  // look for attributes in a form
  /<form[^>]*>/,
  // val is the string within the opening form tag
  // look for an `action` attribute, replace it with a fcc tag
  _.replace(/action(\s*?)=/, 'fccfaa$1=')
);

export const decodeFormAction = _.replace(
  /<form[^>]*>/,
  _.replace(/fccfaa(\s*?)=/, 'action$1=')
);

export const encodeFcc = _.flow(
  removeNoprotect,
  encodeFormAction,
  encodeScriptTags
);

export const decodeFcc = _.flow(
  decodeFormAction,
  decodeScriptTags
);
