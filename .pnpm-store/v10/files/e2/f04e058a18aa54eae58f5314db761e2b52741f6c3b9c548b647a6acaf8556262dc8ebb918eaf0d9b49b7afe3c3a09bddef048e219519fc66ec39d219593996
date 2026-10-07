"use strict";

module.exports = function (nameForErrorMessage, window) {
  if (!window) {
    // Do nothing for window-less documents.
    return;
  }

  const error = new Error(`Not implemented: ${nameForErrorMessage}`);
  error.type = "not implemented";

  window._virtualConsole.emit("jsdomError", error);
};
