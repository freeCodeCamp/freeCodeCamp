import AltedKeysDictionary from '../../const/AltedKeysDictionary';
/**
 * Returns the corresponding symbol or character for a particular key, when it is
 * pressed with the alt key also held down
 * @param {NormalizedKeyName} keyName Name of the key
 * @returns {ReactKeyName[]} Symbol or character for the key, when it is pressed with the
 *          alt key
 */

function resolveAltedAlias(keyName) {
  return AltedKeysDictionary[keyName] || [keyName];
}

export default resolveAltedAlias;