"use strict";

exports.__esModule = true;
exports.getCodeFrame = getCodeFrame;
var _codeFrame = require("@babel/code-frame");
function getCodeFrame(query, line, column) {
  if (!line) {
    return query;
  }
  return (0, _codeFrame.codeFrameColumns)(query, {
    start: {
      line,
      column
    }
  }, {
    linesAbove: 10,
    linesBelow: 10
  });
}
//# sourceMappingURL=graphql-errors-codeframe.js.map