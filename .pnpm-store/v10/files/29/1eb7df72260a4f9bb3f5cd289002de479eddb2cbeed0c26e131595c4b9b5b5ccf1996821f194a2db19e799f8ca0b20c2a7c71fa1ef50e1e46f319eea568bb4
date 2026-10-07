"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toKeyAlias;
var _index = require("../validators/generated/index.js");
var _cloneNode = require("../clone/cloneNode.js");
var _removePropertiesDeep = require("../modifications/removePropertiesDeep.js");
function toKeyAlias(node, key = node.key) {
  let alias;
  if (node.kind === "method") {
    return toKeyAlias.increment() + "";
  } else if ((0, _index.isIdentifier)(key)) {
    alias = key.name;
  } else if ((0, _index.isStringLiteral)(key)) {
    alias = JSON.stringify(key.value);
  } else {
    alias = JSON.stringify((0, _removePropertiesDeep.default)((0, _cloneNode.default)(key)));
  }
  if (node.computed) {
    alias = `[${alias}]`;
  }
  if (node.static) {
    alias = `static:${alias}`;
  }
  return alias;
}
toKeyAlias.uid = 0;
toKeyAlias.increment = function () {
  if (toKeyAlias.uid >= Number.MAX_SAFE_INTEGER) {
    return toKeyAlias.uid = 0;
  } else {
    return toKeyAlias.uid++;
  }
};

//# sourceMappingURL=toKeyAlias.js.map
