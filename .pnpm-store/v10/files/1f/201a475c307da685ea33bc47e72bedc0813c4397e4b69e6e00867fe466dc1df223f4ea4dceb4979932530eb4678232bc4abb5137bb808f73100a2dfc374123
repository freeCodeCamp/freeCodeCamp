"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PLACEHOLDERS_FLIPPED_ALIAS = exports.PLACEHOLDERS_ALIAS = exports.PLACEHOLDERS = void 0;
var _utils = require("./utils.js");
const PLACEHOLDERS = exports.PLACEHOLDERS = ["Identifier", "StringLiteral", "Expression", "Statement", "Declaration", "BlockStatement", "ClassBody", "Pattern"];
const PLACEHOLDERS_ALIAS = exports.PLACEHOLDERS_ALIAS = {
  Declaration: ["Statement"],
  Pattern: ["PatternLike", "LVal"]
};
for (const type of PLACEHOLDERS) {
  const alias = _utils.ALIAS_KEYS[type];
  if (alias != null && alias.length) PLACEHOLDERS_ALIAS[type] = alias;
}
const PLACEHOLDERS_FLIPPED_ALIAS = exports.PLACEHOLDERS_FLIPPED_ALIAS = {};
Object.keys(PLACEHOLDERS_ALIAS).forEach(type => {
  PLACEHOLDERS_ALIAS[type].forEach(alias => {
    if (!hasOwnProperty.call(PLACEHOLDERS_FLIPPED_ALIAS, alias)) {
      PLACEHOLDERS_FLIPPED_ALIAS[alias] = [];
    }
    PLACEHOLDERS_FLIPPED_ALIAS[alias].push(type);
  });
});

//# sourceMappingURL=placeholders.js.map
