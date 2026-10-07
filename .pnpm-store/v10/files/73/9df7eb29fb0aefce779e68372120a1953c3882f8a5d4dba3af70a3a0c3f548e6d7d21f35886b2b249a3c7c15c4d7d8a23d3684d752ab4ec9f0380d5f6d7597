import UnaltedKeysDictionary from '../../const/reverse-dictionaries/UnaltedKeysDictionary';
/**
 * Returns the name of the key that must be pressed with the alt key, to yield the
 * specified symbol
 * @param {ReactKeyName} keyName Name of the key
 * @returns {ReactKeyName[]} Name of the key that must be pressed with the alt key, to
 *          yield the specified symbol
 */

function resolveUnaltedAlias(keyName) {
  return UnaltedKeysDictionary[keyName] || [keyName];
}

export default resolveUnaltedAlias;