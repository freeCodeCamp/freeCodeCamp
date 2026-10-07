'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.buildClientSchema = buildClientSchema;

var _devAssert = require('../jsutils/devAssert.js');

var _inspect = require('../jsutils/inspect.js');

var _isObjectLike = require('../jsutils/isObjectLike.js');

var _keyValMap = require('../jsutils/keyValMap.js');

var _parser = require('../language/parser.js');

var _definition = require('../type/definition.js');

var _directives = require('../type/directives.js');

var _introspection = require('../type/introspection.js');

var _scalars = require('../type/scalars.js');

var _schema = require('../type/schema.js');

var _valueFromAST = require('./valueFromAST.js');

/**
 * Build a GraphQLSchema for use by client tools.
 *
 * Given the result of a client running the introspection query, creates and
 * returns a GraphQLSchema instance which can be then used with all graphql-js
 * tools, but cannot be used to execute a query, as introspection does not
 * represent the "resolver", "parse" or "serialize" functions or any other
 * server-internal mechanisms.
 *
 * This function expects a complete introspection result. Don't forget to check
 * the "errors" field of a server response before calling this function.
 */
function buildClientSchema(introspection, options) {
  ((0, _isObjectLike.isObjectLike)(introspection) &&
    (0, _isObjectLike.isObjectLike)(introspection.__schema)) ||
    (0, _devAssert.devAssert)(
      false,
      `Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${(0,
      _inspect.inspect)(introspection)}.`,
    ); // Get the schema from the introspection result.

  const schemaIntrospection = introspection.__schema; // Iterate through all types, getting the type definition for each.

  const typeMap = (0, _keyValMap.keyValMap)(
    schemaIntrospection.types,
    (typeIntrospection) => typeIntrospection.name,
    (typeIntrospection) => buildType(typeIntrospection),
  ); // Include standard types only if they are used.

  for (const stdType of [
    ..._scalars.specifiedScalarTypes,
    ..._introspection.introspectionTypes,
  ]) {
    if (typeMap[stdType.name]) {
      typeMap[stdType.name] = stdType;
    }
  } // Get the root Query, Mutation, and Subscription types.

  const queryType = schemaIntrospection.queryType
    ? getObjectType(schemaIntrospection.queryType)
    : null;
  const mutationType = schemaIntrospection.mutationType
    ? getObjectType(schemaIntrospection.mutationType)
    : null;
  const subscriptionType = schemaIntrospection.subscriptionType
    ? getObjectType(schemaIntrospection.subscriptionType)
    : null; // Get the directives supported by Introspection, assuming empty-set if
  // directives were not queried for.

  const directives = schemaIntrospection.directives
    ? schemaIntrospection.directives.map(buildDirective)
    : []; // Then produce and return a Schema with these types.

  return new _schema.GraphQLSchema({
    description: schemaIntrospection.description,
    query: queryType,
    mutation: mutationType,
    subscription: subscriptionType,
    types: Object.values(typeMap),
    directives,
    assumeValid:
      options === null || options === void 0 ? void 0 : options.assumeValid,
  }); // Given a type reference in introspection, return the GraphQLType instance.
  // preferring cached instances before building new instances.

  function getType(typeRef) {
    if (typeRef.kind === _introspection.TypeKind.LIST) {
      const itemRef = typeRef.ofType;

      if (!itemRef) {
        throw new Error('Decorated type deeper than introspection query.');
      }

      return new _definition.GraphQLList(getType(itemRef));
    }

    if (typeRef.kind === _introspection.TypeKind.NON_NULL) {
      const nullableRef = typeRef.ofType;

      if (!nullableRef) {
        throw new Error('Decorated type deeper than introspection query.');
      }

      const nullableType = getType(nullableRef);
      return new _definition.GraphQLNonNull(
        (0, _definition.assertNullableType)(nullableType),
      );
    }

    return getNamedType(typeRef);
  }

  function getNamedType(typeRef) {
    const typeName = typeRef.name;

    if (!typeName) {
      throw new Error(
        `Unknown type reference: ${(0, _inspect.inspect)(typeRef)}.`,
      );
    }

    const type = typeMap[typeName];

    if (!type) {
      throw new Error(
        `Invalid or incomplete schema, unknown type: ${typeName}. Ensure that a full introspection query is used in order to build a client schema.`,
      );
    }

    return type;
  }

  function getObjectType(typeRef) {
    return (0, _definition.assertObjectType)(getNamedType(typeRef));
  }

  function getInterfaceType(typeRef) {
    return (0, _definition.assertInterfaceType)(getNamedType(typeRef));
  } // Given a type's introspection result, construct the correct
  // GraphQLType instance.

  function buildType(type) {
    // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
    if (type != null && type.name != null && type.kind != null) {
      // FIXME: Properly type IntrospectionType, it's a breaking change so fix in v17
      // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check
      switch (type.kind) {
        case _introspection.TypeKind.SCALAR:
          return buildScalarDef(type);

        case _introspection.TypeKind.OBJECT:
          return buildObjectDef(type);

        case _introspection.TypeKind.INTERFACE:
          return buildInterfaceDef(type);

        case _introspection.TypeKind.UNION:
          return buildUnionDef(type);

        case _introspection.TypeKind.ENUM:
          return buildEnumDef(type);

        case _introspection.TypeKind.INPUT_OBJECT:
          return buildInputObjectDef(type);
      }
    }

    const typeStr = (0, _inspect.inspect)(type);
    throw new Error(
      `Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${typeStr}.`,
    );
  }

  function buildScalarDef(scalarIntrospection) {
    return new _definition.GraphQLScalarType({
      name: scalarIntrospection.name,
      description: scalarIntrospection.description,
      specifiedByURL: scalarIntrospection.specifiedByURL,
    });
  }

  function buildImplementationsList(implementingIntrospection) {
    // TODO: Temporary workaround until GraphQL ecosystem will fully support
    // 'interfaces' on interface types.
    if (
      implementingIntrospection.interfaces === null &&
      implementingIntrospection.kind === _introspection.TypeKind.INTERFACE
    ) {
      return [];
    }

    if (!implementingIntrospection.interfaces) {
      const implementingIntrospectionStr = (0, _inspect.inspect)(
        implementingIntrospection,
      );
      throw new Error(
        `Introspection result missing interfaces: ${implementingIntrospectionStr}.`,
      );
    }

    return implementingIntrospection.interfaces.map(getInterfaceType);
  }

  function buildObjectDef(objectIntrospection) {
    return new _definition.GraphQLObjectType({
      name: objectIntrospection.name,
      description: objectIntrospection.description,
      interfaces: () => buildImplementationsList(objectIntrospection),
      fields: () => buildFieldDefMap(objectIntrospection),
    });
  }

  function buildInterfaceDef(interfaceIntrospection) {
    return new _definition.GraphQLInterfaceType({
      name: interfaceIntrospection.name,
      description: interfaceIntrospection.description,
      interfaces: () => buildImplementationsList(interfaceIntrospection),
      fields: () => buildFieldDefMap(interfaceIntrospection),
    });
  }

  function buildUnionDef(unionIntrospection) {
    if (!unionIntrospection.possibleTypes) {
      const unionIntrospectionStr = (0, _inspect.inspect)(unionIntrospection);
      throw new Error(
        `Introspection result missing possibleTypes: ${unionIntrospectionStr}.`,
      );
    }

    return new _definition.GraphQLUnionType({
      name: unionIntrospection.name,
      description: unionIntrospection.description,
      types: () => unionIntrospection.possibleTypes.map(getObjectType),
    });
  }

  function buildEnumDef(enumIntrospection) {
    if (!enumIntrospection.enumValues) {
      const enumIntrospectionStr = (0, _inspect.inspect)(enumIntrospection);
      throw new Error(
        `Introspection result missing enumValues: ${enumIntrospectionStr}.`,
      );
    }

    return new _definition.GraphQLEnumType({
      name: enumIntrospection.name,
      description: enumIntrospection.description,
      values: (0, _keyValMap.keyValMap)(
        enumIntrospection.enumValues,
        (valueIntrospection) => valueIntrospection.name,
        (valueIntrospection) => ({
          description: valueIntrospection.description,
          deprecationReason: valueIntrospection.deprecationReason,
        }),
      ),
    });
  }

  function buildInputObjectDef(inputObjectIntrospection) {
    if (!inputObjectIntrospection.inputFields) {
      const inputObjectIntrospectionStr = (0, _inspect.inspect)(
        inputObjectIntrospection,
      );
      throw new Error(
        `Introspection result missing inputFields: ${inputObjectIntrospectionStr}.`,
      );
    }

    return new _definition.GraphQLInputObjectType({
      name: inputObjectIntrospection.name,
      description: inputObjectIntrospection.description,
      fields: () => buildInputValueDefMap(inputObjectIntrospection.inputFields),
      isOneOf: inputObjectIntrospection.isOneOf,
    });
  }

  function buildFieldDefMap(typeIntrospection) {
    if (!typeIntrospection.fields) {
      throw new Error(
        `Introspection result missing fields: ${(0, _inspect.inspect)(
          typeIntrospection,
        )}.`,
      );
    }

    return (0, _keyValMap.keyValMap)(
      typeIntrospection.fields,
      (fieldIntrospection) => fieldIntrospection.name,
      buildField,
    );
  }

  function buildField(fieldIntrospection) {
    const type = getType(fieldIntrospection.type);

    if (!(0, _definition.isOutputType)(type)) {
      const typeStr = (0, _inspect.inspect)(type);
      throw new Error(
        `Introspection must provide output type for fields, but received: ${typeStr}.`,
      );
    }

    if (!fieldIntrospection.args) {
      const fieldIntrospectionStr = (0, _inspect.inspect)(fieldIntrospection);
      throw new Error(
        `Introspection result missing field args: ${fieldIntrospectionStr}.`,
      );
    }

    return {
      description: fieldIntrospection.description,
      deprecationReason: fieldIntrospection.deprecationReason,
      type,
      args: buildInputValueDefMap(fieldIntrospection.args),
    };
  }

  function buildInputValueDefMap(inputValueIntrospections) {
    return (0, _keyValMap.keyValMap)(
      inputValueIntrospections,
      (inputValue) => inputValue.name,
      buildInputValue,
    );
  }

  function buildInputValue(inputValueIntrospection) {
    const type = getType(inputValueIntrospection.type);

    if (!(0, _definition.isInputType)(type)) {
      const typeStr = (0, _inspect.inspect)(type);
      throw new Error(
        `Introspection must provide input type for arguments, but received: ${typeStr}.`,
      );
    }

    const defaultValue =
      inputValueIntrospection.defaultValue != null
        ? (0, _valueFromAST.valueFromAST)(
            (0, _parser.parseValue)(inputValueIntrospection.defaultValue),
            type,
          )
        : undefined;
    return {
      description: inputValueIntrospection.description,
      type,
      defaultValue,
      deprecationReason: inputValueIntrospection.deprecationReason,
    };
  }

  function buildDirective(directiveIntrospection) {
    if (!directiveIntrospection.args) {
      const directiveIntrospectionStr = (0, _inspect.inspect)(
        directiveIntrospection,
      );
      throw new Error(
        `Introspection result missing directive args: ${directiveIntrospectionStr}.`,
      );
    }

    if (!directiveIntrospection.locations) {
      const directiveIntrospectionStr = (0, _inspect.inspect)(
        directiveIntrospection,
      );
      throw new Error(
        `Introspection result missing directive locations: ${directiveIntrospectionStr}.`,
      );
    }

    return new _directives.GraphQLDirective({
      name: directiveIntrospection.name,
      description: directiveIntrospection.description,
      isRepeatable: directiveIntrospection.isRepeatable,
      locations: directiveIntrospection.locations.slice(),
      args: buildInputValueDefMap(directiveIntrospection.args),
    });
  }
}
