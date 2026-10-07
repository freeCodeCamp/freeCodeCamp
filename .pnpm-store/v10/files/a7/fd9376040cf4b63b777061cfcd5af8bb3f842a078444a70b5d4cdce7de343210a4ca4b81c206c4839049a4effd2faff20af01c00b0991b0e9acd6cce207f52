"use strict";

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.util = exports.tokenizers = exports.transforms = exports.inspect = exports.stringify = exports.parse = void 0;

const index_js_1 = require("./parser/index.cjs");

const description_js_1 = require("./parser/tokenizers/description.cjs");

const name_js_1 = require("./parser/tokenizers/name.cjs");

const tag_js_1 = require("./parser/tokenizers/tag.cjs");

const type_js_1 = require("./parser/tokenizers/type.cjs");

const index_js_2 = require("./stringifier/index.cjs");

const align_js_1 = require("./transforms/align.cjs");

const indent_js_1 = require("./transforms/indent.cjs");

const crlf_js_1 = require("./transforms/crlf.cjs");

const index_js_3 = require("./transforms/index.cjs");

const util_js_1 = require("./util.cjs");

__exportStar(require("./primitives.cjs"), exports);

function parse(source, options = {}) {
  return (0, index_js_1.default)(options)(source);
}

exports.parse = parse;
exports.stringify = (0, index_js_2.default)();

var inspect_js_1 = require("./stringifier/inspect.cjs");

Object.defineProperty(exports, "inspect", {
  enumerable: true,
  get: function () {
    return inspect_js_1.default;
  }
});
exports.transforms = {
  flow: index_js_3.flow,
  align: align_js_1.default,
  indent: indent_js_1.default,
  crlf: crlf_js_1.default
};
exports.tokenizers = {
  tag: tag_js_1.default,
  type: type_js_1.default,
  name: name_js_1.default,
  description: description_js_1.default
};
exports.util = {
  rewireSpecs: util_js_1.rewireSpecs,
  rewireSource: util_js_1.rewireSource,
  seedBlock: util_js_1.seedBlock,
  seedTokens: util_js_1.seedTokens
};
//# sourceMappingURL=index.cjs.map
