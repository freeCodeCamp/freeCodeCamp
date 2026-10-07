import Configuration from '../../lib/config/Configuration';
/**
 * Whether the specified key name is among those defined as custom key codes
 * @param {ReactKeyName} keyName Name of the key
 * @returns {boolean} true if keyName matches a custom key name
 */

function isCustomKeyName(keyName) {
  return Configuration.option('_customKeyNamesDict')[keyName];
}

export default isCustomKeyName;