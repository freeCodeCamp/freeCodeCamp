"use strict";

(function () {
  exports.load = function (received, defaults, onto = {}) {
    var k, ref, v;
    for (k in defaults) {
      v = defaults[k];
      onto[k] = (ref = received[k]) != null ? ref : v;
    }
    return onto;
  };

  exports.overwrite = function (received, defaults, onto = {}) {
    var k, v;
    for (k in received) {
      v = received[k];
      if (defaults[k] !== void 0) {
        onto[k] = v;
      }
    }
    return onto;
  };
}).call(undefined);