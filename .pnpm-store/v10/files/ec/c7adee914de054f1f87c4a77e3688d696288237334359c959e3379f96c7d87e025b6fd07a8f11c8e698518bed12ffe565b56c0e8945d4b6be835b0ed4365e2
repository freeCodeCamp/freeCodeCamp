import { GraphQLScalarType } from 'graphql';
import { Kind, print } from 'graphql/language';

function identity(value) {
  return value;
}

function ensureObject(value) {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    throw new TypeError("JSONObject cannot represent non-object value: " + value);
  }

  return value;
}

function parseObject(typeName, ast, variables) {
  var value = Object.create(null);
  ast.fields.forEach(function (field) {
    // eslint-disable-next-line no-use-before-define
    value[field.name.value] = _parseLiteral(typeName, field.value, variables);
  });
  return value;
}

function _parseLiteral(typeName, ast, variables) {
  switch (ast.kind) {
    case Kind.STRING:
    case Kind.BOOLEAN:
      return ast.value;

    case Kind.INT:
    case Kind.FLOAT:
      return parseFloat(ast.value);

    case Kind.OBJECT:
      return parseObject(typeName, ast, variables);

    case Kind.LIST:
      return ast.values.map(function (n) {
        return _parseLiteral(typeName, n, variables);
      });

    case Kind.NULL:
      return null;

    case Kind.VARIABLE:
      return variables ? variables[ast.name.value] : undefined;

    default:
      throw new TypeError(typeName + " cannot represent value: " + print(ast));
  }
} // This named export is intended for users of CommonJS. Users of ES modules
//  should instead use the default export.


export var GraphQLJSON = new GraphQLScalarType({
  name: 'JSON',
  description: 'The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).',
  specifiedByUrl: 'http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf',
  serialize: identity,
  parseValue: identity,
  parseLiteral: function parseLiteral(ast, variables) {
    return _parseLiteral('JSON', ast, variables);
  }
});
export default GraphQLJSON;
export var GraphQLJSONObject = new GraphQLScalarType({
  name: 'JSONObject',
  description: 'The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).',
  specifiedByUrl: 'http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf',
  serialize: ensureObject,
  parseValue: ensureObject,
  parseLiteral: function parseLiteral(ast, variables) {
    if (ast.kind !== Kind.OBJECT) {
      throw new TypeError("JSONObject cannot represent non-object value: " + print(ast));
    }

    return parseObject('JSONObject', ast, variables);
  }
});