"use strict";

exports.__esModule = true;
exports.extractUndefinedGlobal = extractUndefinedGlobal;
/**
 * Extract undefined global variables used in server context from a reference error.
 */
function extractUndefinedGlobal(error) {
  const match = error.message.match(/(window|document|localStorage|navigator|alert|location) is not defined/i);
  if (match && match[1]) {
    return match[1];
  }
  return ``;
}
//# sourceMappingURL=extract-undefined-global.js.map