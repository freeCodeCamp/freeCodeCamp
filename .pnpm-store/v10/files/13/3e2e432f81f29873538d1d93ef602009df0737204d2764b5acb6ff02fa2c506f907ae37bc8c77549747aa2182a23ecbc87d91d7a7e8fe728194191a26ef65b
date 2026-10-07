"use strict";

exports.__esModule = true;
exports["default"] = stripComments;
function stripComments(str) {
  var s = "";
  var commentStart = str.indexOf("/*");
  var lastEnd = 0;
  while (commentStart >= 0) {
    s = s + str.slice(lastEnd, commentStart);
    var commentEnd = str.indexOf("*/", commentStart + 2);
    if (commentEnd < 0) {
      return s;
    }
    lastEnd = commentEnd + 2;
    commentStart = str.indexOf("/*", lastEnd);
  }
  s = s + str.slice(lastEnd);
  return s;
}
module.exports = exports.default;