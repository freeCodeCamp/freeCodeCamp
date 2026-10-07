"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utilities = require("../../utilities");

var _default = (context, report) => {
  const sourceCode = context.getSourceCode();
  return objectTypeIndexer => {
    // type X = { [a: b]: c }
    //              ^
    report({
      colon: (0, _utilities.getTokenBeforeParens)(sourceCode, objectTypeIndexer.key),
      node: objectTypeIndexer
    }); // type X = { [a: b]: c }
    //                  ^

    report({
      colon: sourceCode.getTokenAfter((0, _utilities.getTokenAfterParens)(sourceCode, objectTypeIndexer.key)),
      node: objectTypeIndexer
    });
  };
};

exports.default = _default;
module.exports = exports.default;