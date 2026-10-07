import KeyEventManager from './lib/KeyEventManager';
/**
 * @typedef {Object.<ActionName, KeyEventDescription[]>} ApplicationKeyMap
 */

/**
 * Generates and returns the application's key map, including not only those
 * that are live in the current focus, but all the key maps from all the
 * HotKeys and GlobalHotKeys components that are currently mounted
 * @returns {ApplicationKeyMap} The application's key map
 */

function getApplicationKeyMap() {
  return KeyEventManager.getInstance().getApplicationKeyMap();
}

export default getApplicationKeyMap;