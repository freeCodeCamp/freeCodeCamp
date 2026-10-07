'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Tell the browser that the event listener won't prevent a scroll.
 * Allowing the browser to continue scrolling without having to
 * to wait for the listener to return.
 */
var addPassiveEventListener = exports.addPassiveEventListener = function addPassiveEventListener(target, eventName, listener) {
  var listenerName = listener.name;
  if (!listenerName) {
    listenerName = eventName;
    console.warn('Listener must be a named function.');
  }

  if (!attachedListeners.has(eventName)) attachedListeners.set(eventName, new Set());
  var listeners = attachedListeners.get(eventName);
  if (listeners.has(listenerName)) return;

  var supportsPassiveOption = function () {
    var supportsPassiveOption = false;
    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function get() {
          supportsPassiveOption = true;
        }
      });
      window.addEventListener('test', null, opts);
    } catch (e) {}
    return supportsPassiveOption;
  }();
  target.addEventListener(eventName, listener, supportsPassiveOption ? { passive: true } : false);
  listeners.add(listenerName);
};

var removePassiveEventListener = exports.removePassiveEventListener = function removePassiveEventListener(target, eventName, listener) {
  target.removeEventListener(eventName, listener);
  attachedListeners.get(eventName).delete(listener.name || eventName);
};

var attachedListeners = new Map();