import isNonPrintableKeyName from '../parsing-key-maps/isNonPrintableKeyName';
/**
 * Whether the specified key name is for a key that has a native keypress event
 * @param {NormalizedKeyName} keyName Name of the key
 * @returns {boolean} Whether the key has a native keypress event
 */

function hasKeyPressEvent(keyName) {
  return !isNonPrintableKeyName(keyName);
}

export default hasKeyPressEvent;