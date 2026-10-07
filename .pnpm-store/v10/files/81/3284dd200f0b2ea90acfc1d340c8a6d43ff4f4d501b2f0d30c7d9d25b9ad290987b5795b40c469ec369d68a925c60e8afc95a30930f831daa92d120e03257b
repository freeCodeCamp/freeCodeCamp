"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTokLabels = getTokLabels;
exports.getVisitorKeys = getVisitorKeys;
const _ESLINT_VISITOR_KEYS = require("eslint-visitor-keys");
const babel = require("./babel-core.cjs");
const ESLINT_VISITOR_KEYS = _ESLINT_VISITOR_KEYS.KEYS;
let visitorKeys;
function getVisitorKeys() {
  if (!visitorKeys) {
    const newTypes = {
      ChainExpression: ESLINT_VISITOR_KEYS.ChainExpression,
      ImportExpression: ESLINT_VISITOR_KEYS.ImportExpression,
      Literal: ESLINT_VISITOR_KEYS.Literal,
      MethodDefinition: ["decorators"].concat(ESLINT_VISITOR_KEYS.MethodDefinition),
      Property: ["decorators"].concat(ESLINT_VISITOR_KEYS.Property),
      PropertyDefinition: ["decorators", "typeAnnotation"].concat(ESLINT_VISITOR_KEYS.PropertyDefinition)
    };
    const conflictTypes = {
      ClassPrivateMethod: ["decorators"].concat(ESLINT_VISITOR_KEYS.MethodDefinition),
      ExportAllDeclaration: ESLINT_VISITOR_KEYS.ExportAllDeclaration
    };
    visitorKeys = Object.assign({}, newTypes, babel.types.VISITOR_KEYS, conflictTypes);
  }
  return visitorKeys;
}
let tokLabels;
function getTokLabels() {
  return tokLabels || (tokLabels = (p => p.reduce((o, [k, v]) => Object.assign({}, o, {
    [k]: v
  }), {}))((Object.entries || (o => Object.keys(o).map(k => [k, o[k]])))(babel.tokTypes).map(([key, tok]) => [key, tok.label])));
}

//# sourceMappingURL=ast-info.cjs.map
