import UnaltShiftedKeysDictionary from '../../const/reverse-dictionaries/UnaltShiftedKeysDictionary';
import resolveUnshiftedAlias from './resolveUnshiftedAlias';
/**
 * Returns the name of the key that must be pressed with the shift and alt keys,
 * to yield the specified symbol
 * @param {ReactKeyName} keyName Name of the key
 * @returns {ReactKeyName[]} Name of the key that must be pressed with the alt key, to
 *          yield the specified symbol
 */

function resolveUnaltShiftedAlias(keyName) {
  return UnaltShiftedKeysDictionary[keyName] || resolveUnshiftedAlias(keyName);
}

export default resolveUnaltShiftedAlias;