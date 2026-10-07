"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash/"));

var _utilities = require("../utilities");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const schema = [];

const create = context => {
  const report = node => {
    context.report({
      loc: node.loc,
      message: 'Duplicate property.',
      node
    });
  };

  const analizeElement = element => {
    const {
      type
    } = element;
    let value;

    switch (type) {
      case 'GenericTypeAnnotation':
        value = element.id.name;
        break;

      case 'ObjectTypeAnnotation':
        // eslint-disable-next-line no-use-before-define
        value = builObjectStructure(element.properties);
        break;

      case 'TupleTypeAnnotation':
        // eslint-disable-next-line no-use-before-define
        value = buildArrayStructure(element.types);
        break;

      default:
        value = element.value;
        break;
    }

    return {
      type,
      value
    };
  };

  const buildArrayStructure = elements => {
    return _lodash.default.map(elements, element => {
      return analizeElement(element);
    });
  };

  const builObjectStructure = properties => {
    return _lodash.default.map(properties, property => {
      const element = analizeElement(property.type === 'ObjectTypeSpreadProperty' ? property.argument : property.value);
      return _objectSpread(_objectSpread({}, element), {}, {
        name: (0, _utilities.getParameterName)(property, context)
      });
    });
  };

  const checkForDuplicates = node => {
    const haystack = []; // filter out complex object types, like ObjectTypeSpreadProperty

    const identifierNodes = _lodash.default.filter(node.properties, {
      type: 'ObjectTypeProperty'
    });

    _lodash.default.forEach(identifierNodes, identifierNode => {
      const needle = {
        name: (0, _utilities.getParameterName)(identifierNode, context)
      };

      if (identifierNode.value.type === 'FunctionTypeAnnotation') {
        needle.args = _lodash.default.map(identifierNode.value.params, param => {
          return analizeElement(param.typeAnnotation);
        });
      }

      const match = _lodash.default.some(haystack, existingNeedle => {
        return _lodash.default.isEqual(existingNeedle, needle);
      });

      if (match) {
        report(identifierNode);
      } else {
        haystack.push(needle);
      }
    });
  };

  return {
    ObjectTypeAnnotation: checkForDuplicates
  };
};

var _default = {
  create,
  schema
};
exports.default = _default;
module.exports = exports.default;