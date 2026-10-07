"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ALIAS_KEYS", {
  enumerable: true,
  get: function () {
    return _utils.ALIAS_KEYS;
  }
});
Object.defineProperty(exports, "BUILDER_KEYS", {
  enumerable: true,
  get: function () {
    return _utils.BUILDER_KEYS;
  }
});
Object.defineProperty(exports, "DEPRECATED_ALIASES", {
  enumerable: true,
  get: function () {
    return _deprecatedAliases.DEPRECATED_ALIASES;
  }
});
Object.defineProperty(exports, "DEPRECATED_KEYS", {
  enumerable: true,
  get: function () {
    return _utils.DEPRECATED_KEYS;
  }
});
Object.defineProperty(exports, "FLIPPED_ALIAS_KEYS", {
  enumerable: true,
  get: function () {
    return _utils.FLIPPED_ALIAS_KEYS;
  }
});
Object.defineProperty(exports, "NODE_FIELDS", {
  enumerable: true,
  get: function () {
    return _utils.NODE_FIELDS;
  }
});
Object.defineProperty(exports, "NODE_PARENT_VALIDATIONS", {
  enumerable: true,
  get: function () {
    return _utils.NODE_PARENT_VALIDATIONS;
  }
});
Object.defineProperty(exports, "NODE_UNION_SHAPES__PRIVATE", {
  enumerable: true,
  get: function () {
    return _utils.NODE_UNION_SHAPES__PRIVATE;
  }
});
Object.defineProperty(exports, "PLACEHOLDERS", {
  enumerable: true,
  get: function () {
    return _placeholders.PLACEHOLDERS;
  }
});
Object.defineProperty(exports, "PLACEHOLDERS_ALIAS", {
  enumerable: true,
  get: function () {
    return _placeholders.PLACEHOLDERS_ALIAS;
  }
});
Object.defineProperty(exports, "PLACEHOLDERS_FLIPPED_ALIAS", {
  enumerable: true,
  get: function () {
    return _placeholders.PLACEHOLDERS_FLIPPED_ALIAS;
  }
});
exports.TYPES = void 0;
Object.defineProperty(exports, "VISITOR_KEYS", {
  enumerable: true,
  get: function () {
    return _utils.VISITOR_KEYS;
  }
});
require("./core.js");
require("./flow.js");
require("./jsx.js");
require("./misc.js");
require("./experimental.js");
require("./typescript.js");
var _utils = require("./utils.js");
var _placeholders = require("./placeholders.js");
var _deprecatedAliases = require("./deprecated-aliases.js");
Object.keys(_deprecatedAliases.DEPRECATED_ALIASES).forEach(deprecatedAlias => {
  _utils.FLIPPED_ALIAS_KEYS[deprecatedAlias] = _utils.FLIPPED_ALIAS_KEYS[_deprecatedAliases.DEPRECATED_ALIASES[deprecatedAlias]];
});
for (const {
  types,
  set
} of _utils.allExpandedTypes) {
  for (const type of types) {
    const aliases = _utils.FLIPPED_ALIAS_KEYS[type];
    if (aliases) {
      aliases.forEach(set.add, set);
    } else {
      set.add(type);
    }
  }
}
const TYPES = exports.TYPES = [].concat(Object.keys(_utils.VISITOR_KEYS), Object.keys(_utils.FLIPPED_ALIAS_KEYS), Object.keys(_utils.DEPRECATED_KEYS));

//# sourceMappingURL=index.js.map
