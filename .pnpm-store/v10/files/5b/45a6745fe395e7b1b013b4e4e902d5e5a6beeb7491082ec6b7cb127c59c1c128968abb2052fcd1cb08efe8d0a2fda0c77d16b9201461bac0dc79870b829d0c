import KeysWithKeyUpHiddenByCmd from '../../const/KeysWithKeyUpHiddenByCmd';
import hasKey from '../../utils/object/hasKey';
/**
 * Whether the specified key, when pressed down with the cmd key, never triggers a keyup
 * event in the browser
 * @param {NormalizedKeyName} keyName Name of the key
 * @returns {boolean} Whether the key has its keyup event hidden by cmd
 */

function keyupIsHiddenByCmd(keyName) {
  return keyName.length === 1 || hasKey(KeysWithKeyUpHiddenByCmd, keyName);
}

export default keyupIsHiddenByCmd;