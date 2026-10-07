"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _utilities = require("../utilities");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const schema = [];
const create = (0, _utilities.iterateFunctionNodes)(context => {
  return functionNode => {
    for (const identifierNode of functionNode.params) {
      const nodeType = _lodash.default.get(identifierNode, 'type');

      const isAssignmentPattern = nodeType === 'AssignmentPattern';
      const hasTypeAnnotation = Boolean(_lodash.default.get(identifierNode, 'typeAnnotation'));
      const leftAnnotated = Boolean(_lodash.default.get(identifierNode, 'left.typeAnnotation'));

      if (isAssignmentPattern && hasTypeAnnotation && !leftAnnotated) {
        context.report({
          data: {
            name: (0, _utilities.quoteName)((0, _utilities.getParameterName)(identifierNode, context))
          },
          message: '{{name}}parameter type annotation must be placed on left-hand side of assignment.',
          node: identifierNode
        });
      }
    }
  };
});
var _default = {
  create,
  meta: {
    deprecated: true
  },
  schema
};
exports.default = _default;
module.exports = exports.default;