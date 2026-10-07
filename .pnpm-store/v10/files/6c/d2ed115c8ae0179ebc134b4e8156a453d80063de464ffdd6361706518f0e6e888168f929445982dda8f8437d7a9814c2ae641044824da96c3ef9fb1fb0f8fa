import ShiftedKeysDictionary from '../../const/ShiftedKeysDictionary';
/**
 * Returns the corresponding symbol or character for a particular key, when it is
 * pressed with the shift key also held down
 * @param {NormalizedKeyName} keyName Name of the key
 * @returns {ReactKeyName[]} Symbol or character for the key, when it is pressed with the
 *          shift key
 */

function resolveShiftedAlias(keyName) {
  return ShiftedKeysDictionary[keyName] || [keyName.length === 1 ? keyName.toUpperCase() : keyName];
}

export default resolveShiftedAlias;