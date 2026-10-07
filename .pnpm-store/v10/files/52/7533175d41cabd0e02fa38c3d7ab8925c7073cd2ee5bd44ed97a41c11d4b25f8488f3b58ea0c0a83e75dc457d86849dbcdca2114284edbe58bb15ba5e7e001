"use strict";

var _utils = require("./utils.js");
var _placeholders = require("./placeholders.js");
var _core = require("./core.js");
const defineType = (0, _utils.defineAliasedType)("Miscellaneous");
defineType("Noop", {
  visitor: []
});
defineType("Placeholder", {
  visitor: [],
  builder: ["expectedNode", "name"],
  fields: Object.assign({
    name: {
      validate: (0, _utils.assertNodeType)("Identifier")
    },
    expectedNode: {
      validate: (0, _utils.assertOneOf)(..._placeholders.PLACEHOLDERS)
    }
  }, (0, _core.patternLikeCommon)())
});
defineType("V8IntrinsicIdentifier", {
  builder: ["name"],
  fields: {
    name: {
      validate: (0, _utils.assertValueType)("string")
    }
  }
});

//# sourceMappingURL=misc.js.map
