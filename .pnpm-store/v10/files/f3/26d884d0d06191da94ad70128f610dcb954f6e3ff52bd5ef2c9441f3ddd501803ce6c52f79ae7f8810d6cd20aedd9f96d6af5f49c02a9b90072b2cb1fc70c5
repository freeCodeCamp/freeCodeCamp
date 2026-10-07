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
    excludeVariableMatch: {
      type: 'string'
    },
    excludeVariableTypes: {
      additionalProperties: false,
      properties: {
        const: {
          type: 'boolean'
        },
        let: {
          type: 'boolean'
        },
        var: {
          type: 'boolean'
        }
      },
      type: 'object'
    }
  },
  type: 'object'
}];

const create = context => {
  const checkThisFile = !_lodash.default.get(context, 'settings.flowtype.onlyFilesWithFlowAnnotation') || (0, _utilities.isFlowFile)(context);

  if (!checkThisFile) {
    return () => {};
  }

  const excludeVariableMatch = new RegExp(_lodash.default.get(context, 'options[0].excludeVariableMatch', 'a^'), 'u');

  const excludeVariableTypes = _lodash.default.get(context, 'options[0].excludeVariableTypes', {});

  return {
    VariableDeclaration: variableDeclaration => {
      const variableType = _lodash.default.get(variableDeclaration, 'kind');

      if (_lodash.default.get(excludeVariableTypes, variableType)) {
        return;
      } // eslint-disable-next-line unicorn/no-array-for-each


      _lodash.default.forEach(variableDeclaration.declarations, variableDeclarator => {
        const identifierNode = _lodash.default.get(variableDeclarator, 'id');

        const identifierName = _lodash.default.get(identifierNode, 'name');

        if (excludeVariableMatch.test(identifierName)) {
          return;
        }

        const typeAnnotation = _lodash.default.get(identifierNode, 'typeAnnotation');

        if (!typeAnnotation) {
          context.report({
            data: {
              name: (0, _utilities.quoteName)(identifierName)
            },
            message: 'Missing {{name}}variable type annotation.',
            node: identifierNode
          });
        }
      });
    }
  };
};

var _default = {
  create,
  schema
};
exports.default = _default;
module.exports = exports.default;