/**
 * Lowercased string representing a particular keyboard key
 * @typedef {string} NormalizedKeyName
 */
import reactsGetEventKey from '../../vendor/react-dom/reactsGetEventKey';
import Configuration from '../../lib/config/Configuration';
import hasKey from '../../utils/object/hasKey';
/**
 * Returns key name from native or React keyboard event
 * @param {KeyboardEvent} event - Event containing the key name
 * @returns {NormalizedKeyName} Normalized name of the key
 */

function getKeyName(event) {
  var keyName = function () {
    var customKeyCodes = Configuration.option('customKeyCodes');
    var keyCode = event.keyCode || event.charCode;

    if (hasKey(customKeyCodes, keyCode)) {
      return customKeyCodes[keyCode];
    }

    if (event.nativeEvent) {
      return event.key;
    } else {
      return reactsGetEventKey(event);
    }
  }();

  if (keyName === '+') {
    return 'plus';
  } else {
    return keyName;
  }
}

export default getKeyName;