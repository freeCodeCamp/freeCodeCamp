'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.GraphQLString =
  exports.GraphQLInt =
  exports.GraphQLID =
  exports.GraphQLFloat =
  exports.GraphQLBoolean =
  exports.GRAPHQL_MIN_INT =
  exports.GRAPHQL_MAX_INT =
    void 0;
exports.isSpecifiedScalarType = isSpecifiedScalarType;
exports.specifiedScalarTypes = void 0;

var _inspect = require('../jsutils/inspect.js');

var _isObjectLike = require('../jsutils/isObjectLike.js');

var _GraphQLError = require('../error/GraphQLError.js');

var _kinds = require('../language/kinds.js');

var _printer = require('../language/printer.js');

var _definition = require('./definition.js');

/**
 * Maximum possible Int value as per GraphQL Spec (32-bit signed integer).
 * n.b. This differs from JavaScript's numbers that are IEEE 754 doubles safe up-to 2^53 - 1
 * */
const GRAPHQL_MAX_INT = 2147483647;
/**
 * Minimum possible Int value as per GraphQL Spec (32-bit signed integer).
 * n.b. This differs from JavaScript's numbers that are IEEE 754 doubles safe starting at -(2^53 - 1)
 * */

exports.GRAPHQL_MAX_INT = GRAPHQL_MAX_INT;
const GRAPHQL_MIN_INT = -2147483648;
exports.GRAPHQL_MIN_INT = GRAPHQL_MIN_INT;
const GraphQLInt = new _definition.GraphQLScalarType({
  name: 'Int',
  description:
    'The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.',

  serialize(outputValue) {
    const coercedValue = serializeObject(outputValue);

    if (typeof coercedValue === 'boolean') {
      return coercedValue ? 1 : 0;
    }

    let num = coercedValue;

    if (typeof coercedValue === 'string' && coercedValue !== '') {
      num = Number(coercedValue);
    }

    if (typeof num !== 'number' || !Number.isInteger(num)) {
      throw new _GraphQLError.GraphQLError(
        `Int cannot represent non-integer value: ${(0, _inspect.inspect)(
          coercedValue,
        )}`,
      );
    }

    if (num > GRAPHQL_MAX_INT || num < GRAPHQL_MIN_INT) {
      throw new _GraphQLError.GraphQLError(
        'Int cannot represent non 32-bit signed integer value: ' +
          (0, _inspect.inspect)(coercedValue),
      );
    }

    return num;
  },

  parseValue(inputValue) {
    if (typeof inputValue !== 'number' || !Number.isInteger(inputValue)) {
      throw new _GraphQLError.GraphQLError(
        `Int cannot represent non-integer value: ${(0, _inspect.inspect)(
          inputValue,
        )}`,
      );
    }

    if (inputValue > GRAPHQL_MAX_INT || inputValue < GRAPHQL_MIN_INT) {
      throw new _GraphQLError.GraphQLError(
        `Int cannot represent non 32-bit signed integer value: ${inputValue}`,
      );
    }

    return inputValue;
  },

  parseLiteral(valueNode) {
    if (valueNode.kind !== _kinds.Kind.INT) {
      throw new _GraphQLError.GraphQLError(
        `Int cannot represent non-integer value: ${(0, _printer.print)(
          valueNode,
        )}`,
        {
          nodes: valueNode,
        },
      );
    }

    const num = parseInt(valueNode.value, 10);

    if (num > GRAPHQL_MAX_INT || num < GRAPHQL_MIN_INT) {
      throw new _GraphQLError.GraphQLError(
        `Int cannot represent non 32-bit signed integer value: ${valueNode.value}`,
        {
          nodes: valueNode,
        },
      );
    }

    return num;
  },
});
exports.GraphQLInt = GraphQLInt;
const GraphQLFloat = new _definition.GraphQLScalarType({
  name: 'Float',
  description:
    'The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).',

  serialize(outputValue) {
    const coercedValue = serializeObject(outputValue);

    if (typeof coercedValue === 'boolean') {
      return coercedValue ? 1 : 0;
    }

    let num = coercedValue;

    if (typeof coercedValue === 'string' && coercedValue !== '') {
      num = Number(coercedValue);
    }

    if (typeof num !== 'number' || !Number.isFinite(num)) {
      throw new _GraphQLError.GraphQLError(
        `Float cannot represent non numeric value: ${(0, _inspect.inspect)(
          coercedValue,
        )}`,
      );
    }

    return num;
  },

  parseValue(inputValue) {
    if (typeof inputValue !== 'number' || !Number.isFinite(inputValue)) {
      throw new _GraphQLError.GraphQLError(
        `Float cannot represent non numeric value: ${(0, _inspect.inspect)(
          inputValue,
        )}`,
      );
    }

    return inputValue;
  },

  parseLiteral(valueNode) {
    if (
      valueNode.kind !== _kinds.Kind.FLOAT &&
      valueNode.kind !== _kinds.Kind.INT
    ) {
      throw new _GraphQLError.GraphQLError(
        `Float cannot represent non numeric value: ${(0, _printer.print)(
          valueNode,
        )}`,
        valueNode,
      );
    }

    return parseFloat(valueNode.value);
  },
});
exports.GraphQLFloat = GraphQLFloat;
const GraphQLString = new _definition.GraphQLScalarType({
  name: 'String',
  description:
    'The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.',

  serialize(outputValue) {
    const coercedValue = serializeObject(outputValue); // Serialize string, boolean and number values to a string, but do not
    // attempt to coerce object, function, symbol, or other types as strings.

    if (typeof coercedValue === 'string') {
      return coercedValue;
    }

    if (typeof coercedValue === 'boolean') {
      return coercedValue ? 'true' : 'false';
    }

    if (typeof coercedValue === 'number' && Number.isFinite(coercedValue)) {
      return coercedValue.toString();
    }

    throw new _GraphQLError.GraphQLError(
      `String cannot represent value: ${(0, _inspect.inspect)(outputValue)}`,
    );
  },

  parseValue(inputValue) {
    if (typeof inputValue !== 'string') {
      throw new _GraphQLError.GraphQLError(
        `String cannot represent a non string value: ${(0, _inspect.inspect)(
          inputValue,
        )}`,
      );
    }

    return inputValue;
  },

  parseLiteral(valueNode) {
    if (valueNode.kind !== _kinds.Kind.STRING) {
      throw new _GraphQLError.GraphQLError(
        `String cannot represent a non string value: ${(0, _printer.print)(
          valueNode,
        )}`,
        {
          nodes: valueNode,
        },
      );
    }

    return valueNode.value;
  },
});
exports.GraphQLString = GraphQLString;
const GraphQLBoolean = new _definition.GraphQLScalarType({
  name: 'Boolean',
  description: 'The `Boolean` scalar type represents `true` or `false`.',

  serialize(outputValue) {
    const coercedValue = serializeObject(outputValue);

    if (typeof coercedValue === 'boolean') {
      return coercedValue;
    }

    if (Number.isFinite(coercedValue)) {
      return coercedValue !== 0;
    }

    throw new _GraphQLError.GraphQLError(
      `Boolean cannot represent a non boolean value: ${(0, _inspect.inspect)(
        coercedValue,
      )}`,
    );
  },

  parseValue(inputValue) {
    if (typeof inputValue !== 'boolean') {
      throw new _GraphQLError.GraphQLError(
        `Boolean cannot represent a non boolean value: ${(0, _inspect.inspect)(
          inputValue,
        )}`,
      );
    }

    return inputValue;
  },

  parseLiteral(valueNode) {
    if (valueNode.kind !== _kinds.Kind.BOOLEAN) {
      throw new _GraphQLError.GraphQLError(
        `Boolean cannot represent a non boolean value: ${(0, _printer.print)(
          valueNode,
        )}`,
        {
          nodes: valueNode,
        },
      );
    }

    return valueNode.value;
  },
});
exports.GraphQLBoolean = GraphQLBoolean;
const GraphQLID = new _definition.GraphQLScalarType({
  name: 'ID',
  description:
    'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',

  serialize(outputValue) {
    const coercedValue = serializeObject(outputValue);

    if (typeof coercedValue === 'string') {
      return coercedValue;
    }

    if (Number.isInteger(coercedValue)) {
      return String(coercedValue);
    }

    throw new _GraphQLError.GraphQLError(
      `ID cannot represent value: ${(0, _inspect.inspect)(outputValue)}`,
    );
  },

  parseValue(inputValue) {
    if (typeof inputValue === 'string') {
      return inputValue;
    }

    if (typeof inputValue === 'number' && Number.isInteger(inputValue)) {
      return inputValue.toString();
    }

    throw new _GraphQLError.GraphQLError(
      `ID cannot represent value: ${(0, _inspect.inspect)(inputValue)}`,
    );
  },

  parseLiteral(valueNode) {
    if (
      valueNode.kind !== _kinds.Kind.STRING &&
      valueNode.kind !== _kinds.Kind.INT
    ) {
      throw new _GraphQLError.GraphQLError(
        'ID cannot represent a non-string and non-integer value: ' +
          (0, _printer.print)(valueNode),
        {
          nodes: valueNode,
        },
      );
    }

    return valueNode.value;
  },
});
exports.GraphQLID = GraphQLID;
const specifiedScalarTypes = Object.freeze([
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLID,
]);
exports.specifiedScalarTypes = specifiedScalarTypes;

function isSpecifiedScalarType(type) {
  return specifiedScalarTypes.some(({ name }) => type.name === name);
} // Support serializing objects with custom valueOf() or toJSON() functions -
// a common way to represent a complex value which can be represented as
// a string (ex: MongoDB id objects).

function serializeObject(outputValue) {
  if ((0, _isObjectLike.isObjectLike)(outputValue)) {
    if (typeof outputValue.valueOf === 'function') {
      const valueOfResult = outputValue.valueOf();

      if (!(0, _isObjectLike.isObjectLike)(valueOfResult)) {
        return valueOfResult;
      }
    }

    if (typeof outputValue.toJSON === 'function') {
      return outputValue.toJSON();
    }
  }

  return outputValue;
}
