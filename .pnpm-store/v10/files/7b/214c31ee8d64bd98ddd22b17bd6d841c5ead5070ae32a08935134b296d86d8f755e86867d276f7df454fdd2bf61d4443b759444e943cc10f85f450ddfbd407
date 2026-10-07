"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const util_js_1 = require("../util.cjs");

function getParser({
  tokenizers
}) {
  return function parseSpec(source) {
    var _a;

    let spec = (0, util_js_1.seedSpec)({
      source
    });

    for (const tokenize of tokenizers) {
      spec = tokenize(spec);
      if ((_a = spec.problems[spec.problems.length - 1]) === null || _a === void 0 ? void 0 : _a.critical) break;
    }

    return spec;
  };
}

exports.default = getParser;
//# sourceMappingURL=spec-parser.cjs.map
