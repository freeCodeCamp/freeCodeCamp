"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _utilities = require("../../utilities");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (context, report) => {
  const sourceCode = context.getSourceCode();
  return node => {
    const declarations = _lodash.default.get(node, 'declarations', []);

    for (const leaf of declarations) {
      const typeAnnotation = _lodash.default.get(leaf, 'id.typeAnnotation');

      if (typeAnnotation) {
        report({
          colon: sourceCode.getFirstToken(typeAnnotation),
          name: (0, _utilities.quoteName)((0, _utilities.getParameterName)(leaf, context)),
          node: leaf,
          type: node.kind + ' type annotation'
        });
      }
    }
  };
};

exports.default = _default;
module.exports = exports.default;