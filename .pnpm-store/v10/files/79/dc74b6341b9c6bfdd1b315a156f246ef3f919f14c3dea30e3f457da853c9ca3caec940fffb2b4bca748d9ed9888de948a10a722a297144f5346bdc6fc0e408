"use strict";

exports.__esModule = true;
exports.ignorePath = ignorePath;
var _micromatch = require("micromatch");
function ignorePath(path, ignore) {
  // Don't do anything if no ignore patterns
  if (!ignore) return false;
  const settings = {
    patterns: ``,
    options: {}
  };
  if (typeof ignore === `string`) {
    settings.patterns = ignore;
  } else if (Array.isArray(ignore)) {
    if (ignore.length > 0) {
      settings.patterns = ignore;
    }
  } else if (ignore === null) {
    return false;
  } else {
    if (!ignore.options && !ignore.patterns) {
      return false;
    }
    if (ignore.options) {
      settings.options = ignore.options;
    }
    if (ignore.patterns) {
      settings.patterns = ignore.patterns;
    }
  }
  return (0, _micromatch.isMatch)(path, settings.patterns, settings.options);
}