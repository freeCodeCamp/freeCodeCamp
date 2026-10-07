import KeyEventManager from './lib/KeyEventManager';
/**
 * @callback keyCombinationListener
 */

/**
 * Adds a listener function that will be called the next time a key combination completes
 * @param {keyCombinationListener} callbackFunction Listener function to be called
 * @returns {function} Function to call to cancel listening to the next key combination
 */

function recordKeyCombination(callbackFunction) {
  var eventManager = KeyEventManager.getInstance();
  return eventManager.addKeyCombinationListener(callbackFunction);
}

export default recordKeyCombination;