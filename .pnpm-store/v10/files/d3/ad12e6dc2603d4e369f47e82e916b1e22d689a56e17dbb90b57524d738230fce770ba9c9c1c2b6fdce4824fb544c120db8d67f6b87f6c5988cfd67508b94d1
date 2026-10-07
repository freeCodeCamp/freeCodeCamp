"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Dictionary of keys that, when pressed down with the cmd key, never trigger a keyup
 * event in the browser
 */
var KeysWithKeyUpHiddenByCmd = {
  Enter: true,
  Backspace: true,
  ArrowRight: true,
  ArrowLeft: true,
  ArrowUp: true,
  ArrowDown: true,

  /**
   * Caps lock is a strange case where it not only fails to trigger a keyup event when,
   * pressed with cmd, but it's keyup event is triggered when caps lock is toggled off
   */
  CapsLock: true
};

for (var i = 1; i < 13; i++) {
  KeysWithKeyUpHiddenByCmd["F".concat(i)] = true;
}

var _default = KeysWithKeyUpHiddenByCmd;
exports.default = _default;