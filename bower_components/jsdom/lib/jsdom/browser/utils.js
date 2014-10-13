"use strict";

var jsdom = require("../../jsdom");

exports.NOT_IMPLEMENTED = function (target, nameForErrorMessage) {
  return function () {
    if (!jsdom.debugMode) {
      var raise = target ? target.raise : this.raise;
      raise.call(this, "error", "NOT IMPLEMENTED" + (nameForErrorMessage ? ": " + nameForErrorMessage : ""));
    }
  };
};
