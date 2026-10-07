"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeProperties;
var _index = require("../constants/index.js");
const CLEAR_KEYS = ["tokens", "start", "end", "loc", "raw", "rawValue"];
const CLEAR_KEYS_PLUS_COMMENTS = [..._index.COMMENT_KEYS, "comments", ...CLEAR_KEYS];
function removeProperties(node, opts = {}) {
  const map = opts.preserveComments ? CLEAR_KEYS : CLEAR_KEYS_PLUS_COMMENTS;
  for (const key of map) {
    if (node[key] != null) node[key] = undefined;
  }
  for (const key of Object.keys(node)) {
    if (key.startsWith("_") && node[key] != null) node[key] = undefined;
  }
  const symbols = Object.getOwnPropertySymbols(node);
  for (const sym of symbols) {
    node[sym] = null;
  }
}

//# sourceMappingURL=removeProperties.js.map
