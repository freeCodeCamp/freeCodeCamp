"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _utilities = require("../utilities");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const schema = [{
  additionalProperties: false,
  properties: {
    excludeArrowFunctions: {
      enum: [false, true, 'expressionsOnly']
    },
    excludeParameterMatch: {
      type: 'string'
    }
  },
  type: 'object'
}];
const create = (0, _utilities.iterateFunctionNodes)(context => {
  const skipArrows = _lodash.default.get(context, 'options[0].excludeArrowFunctions');

  const excludeParameterMatch = new RegExp(_lodash.default.get(context, 'options[0].excludeParameterMatch', 'a^'));
  return functionNode => {
    // It is save to ignore FunctionTypeAnnotation nodes in this rule.
    if (functionNode.type === 'FunctionTypeAnnotation') {
      return;
    }

    const isArrow = functionNode.type === 'ArrowFunctionExpression';
    const isArrowFunctionExpression = functionNode.expression;

    const functionAnnotation = isArrow && _lodash.default.get(functionNode, 'parent.id.typeAnnotation');

    if (skipArrows === 'expressionsOnly' && isArrowFunctionExpression || skipArrows === true && isArrow) {
      return;
    }

    _lodash.default.forEach(functionNode.params, identifierNode => {
      const parameterName = (0, _utilities.getParameterName)(identifierNode, context);

      if (excludeParameterMatch.test(parameterName)) {
        return;
      }

      let typeAnnotation;
      typeAnnotation = _lodash.default.get(identifierNode, 'typeAnnotation') || _lodash.default.get(identifierNode, 'left.typeAnnotation');

      if (isArrow && functionAnnotation) {
        typeAnnotation = true;
      }

      if (!typeAnnotation) {
        context.report({
          data: {
            name: (0, _utilities.quoteName)(parameterName)
          },
          message: 'Missing {{name}}parameter type annotation.',
          node: identifierNode
        });
      }
    });
  };
});
var _default = {
  create,
  schema
};
exports.default = _default;
module.exports = exports.default;