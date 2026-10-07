"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const schema = [{
  additionalProperties: false,
  properties: {
    any: {
      type: 'boolean'
    },
    Function: {
      type: 'boolean'
    },
    Object: {
      type: 'boolean'
    }
  },
  type: 'object'
}];

const reportWeakType = (context, weakType) => {
  return node => {
    context.report({
      data: {
        weakType
      },
      message: 'Unexpected use of weak type "{{weakType}}"',
      node
    });
  };
};

const genericTypeEvaluator = (context, {
  checkFunction,
  checkObject
}) => {
  return node => {
    const name = _lodash.default.get(node, 'id.name');

    if (checkFunction && name === 'Function' || checkObject && name === 'Object') {
      reportWeakType(context, name)(node);
    }
  };
};

const create = context => {
  const checkAny = _lodash.default.get(context, 'options[0].any', true) === true;
  const checkFunction = _lodash.default.get(context, 'options[0].Function', true) === true;
  const checkObject = _lodash.default.get(context, 'options[0].Object', true) === true;
  const checks = {};

  if (checkAny) {
    checks.AnyTypeAnnotation = reportWeakType(context, 'any');
  }

  if (checkFunction || checkObject) {
    checks.GenericTypeAnnotation = genericTypeEvaluator(context, {
      checkFunction,
      checkObject
    });
  }

  return checks;
};

var _default = {
  create,
  schema
};
exports.default = _default;
module.exports = exports.default;