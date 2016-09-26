import flow from 'lodash/flow';

// we don't store loop protect disable key
export function removeNoprotect(val) {
  return val.replace(/noprotect/gi, '');
}

export function encodeScriptTags(val) {
  return val
    .replace(/<script>/gi, 'fccss')
    .replace(/<\/script>/gi, 'fcces');
}

export function decodeScriptTags(val) {
  return val
    .replace(/fccss/gi, '<script>')
    .replace(/fcces/gi, '</script>');
}

export function encodeFormAction(val) {
  return val.replace(
    // look for attributes in a form
    /<form[^>]*>/,
    // val is the string within the opening form tag
    // look for an `action` attribute, replace it with a fcc tag
    val => val.replace(/action(\s*?)=/, 'fccfaa$1=')
  );
}

export function decodeFormAction(val) {
  return val.replace(
    /<form[^>]*>/,
    val => val.replace(/fccfaa(\s*?)=/, 'action$1=')
  );
}

export const encodeFcc = flow([
  removeNoprotect,
  encodeFormAction,
  encodeScriptTags
]);

export const decodeFcc = flow([
  decodeFormAction,
  decodeScriptTags
]);
