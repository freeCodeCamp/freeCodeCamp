"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperPluginUtils = require("@babel/helper-plugin-utils");
function remover({
  node
}) {
  var _extra$raw;
  const {
    extra
  } = node;
  if (extra != null && (_extra$raw = extra.raw) != null && _extra$raw.includes("_")) {
    extra.raw = extra.raw.replace(/_/g, "");
  }
}
var _default = exports.default = (0, _helperPluginUtils.declare)(api => {
  api.assertVersion(7);
  return {
    name: "transform-numeric-separator",
    inherits: require("@babel/plugin-syntax-numeric-separator").default,
    visitor: {
      NumericLiteral: remover,
      BigIntLiteral: remover
    }
  };
});

//# sourceMappingURL=index.js.map
