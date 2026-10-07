import KeyOSAndLayoutAliasesDictionary from '../../const/KeyOSAndLayoutAliasesDictionary';
/**
 * Returns a list of accepted aliases for the specified key
 * @param {NormalizedKeyName} keyName Name of the key
 * @returns {ReactKeyName[]} List of key aliases
 */

function resolveKeyAlias(keyName) {
  return KeyOSAndLayoutAliasesDictionary[keyName] || [keyName];
}

export default resolveKeyAlias;