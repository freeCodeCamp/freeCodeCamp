'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _passiveEventListeners = require('./passive-event-listeners');

var events = ['mousedown', 'wheel', 'touchmove', 'keydown'];

exports.default = {
  subscribe: function subscribe(cancelEvent) {
    return typeof document !== 'undefined' && events.forEach(function (event) {
      return (0, _passiveEventListeners.addPassiveEventListener)(document, event, cancelEvent);
    });
  }
};