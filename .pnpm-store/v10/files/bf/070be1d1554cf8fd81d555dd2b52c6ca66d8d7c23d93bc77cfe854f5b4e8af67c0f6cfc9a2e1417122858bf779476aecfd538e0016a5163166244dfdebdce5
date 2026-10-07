'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.extendSchema = extendSchema;
exports.extendSchemaImpl = extendSchemaImpl;

var _devAssert = require('../jsutils/devAssert.js');

var _inspect = require('../jsutils/inspect.js');

var _invariant = require('../jsutils/invariant.js');

var _keyMap = require('../jsutils/keyMap.js');

var _mapValue = require('../jsutils/mapValue.js');

var _kinds = require('../language/kinds.js');

var _predicates = require('../language/predicates.js');

var _definition = require('../type/definition.js');

var _directives = require('../type/directives.js');

var _introspection = require('../type/introspection.js');

var _scalars = require('../type/scalars.js');

var _schema = require('../type/schema.js');

var _validate = require('../validation/validate.js');

var _values = require('../execution/values.js');

var _valueFromAST = require('./valueFromAST.js');

/**
 * Produces a new schema given an existing schema and a document which may
 * contain GraphQL type extensions and definitions. The original schema will
 * remain unaltered.
 *
 * Because a schema represents a graph of references, a schema cannot be
 * extended without effectively making an entire copy. We do not know until it's
 * too late if subgraphs remain unchanged.
 *
 * This algorithm copies the provided schema, applying extensions while
 * producing the copy. The original schema remains unaltered.
 */
function extendSchema(schema, documentAST, options) {
  (0, _schema.assertSchema)(schema);
  (documentAST != null && documentAST.kind === _kinds.Kind.DOCUMENT) ||
    (0, _devAssert.devAssert)(false, 'Must provide valid Document AST.');

  if (
    (options === null || options === void 0 ? void 0 : options.assumeValid) !==
      true &&
    (options === null || options === void 0
      ? void 0
      : options.assumeValidSDL) !== true
  ) {
    (0, _validate.assertValidSDLExtension)(documentAST, schema);
  }

  const schemaConfig = schema.toConfig();
  const extendedConfig = extendSchemaImpl(schemaConfig, documentAST, options);
  return schemaConfig === extendedConfig
    ? schema
    : new _schema.GraphQLSchema(extendedConfig);
}
/**
 * @internal
 */

function extendSchemaImpl(schemaConfig, documentAST, options) {
  var _schemaDef, _schemaDef$descriptio, _schemaDef2, _options$assumeValid;

  // Collect the type definitions and extensions found in the document.
  const typeDefs = [];
  const typeExtensionsMap = Object.create(null); // New directives and types are separate because a directives and types can
  // have the same name. For example, a type named "skip".

  const directiveDefs = [];
  let schemaDef; // Schema extensions are collected which may add additional operation types.

  const schemaExtensions = [];

  for (const def of documentAST.definitions) {
    if (def.kind === _kinds.Kind.SCHEMA_DEFINITION) {
      schemaDef = def;
    } else if (def.kind === _kinds.Kind.SCHEMA_EXTENSION) {
      schemaExtensions.push(def);
    } else if ((0, _predicates.isTypeDefinitionNode)(def)) {
      typeDefs.push(def);
    } else if ((0, _predicates.isTypeExtensionNode)(def)) {
      const extendedTypeName = def.name.value;
      const existingTypeExtensions = typeExtensionsMap[extendedTypeName];
      typeExtensionsMap[extendedTypeName] = existingTypeExtensions
        ? existingTypeExtensions.concat([def])
        : [def];
    } else if (def.kind === _kinds.Kind.DIRECTIVE_DEFINITION) {
      directiveDefs.push(def);
    }
  } // If this document contains no new types, extensions, or directives then
  // return the same unmodified GraphQLSchema instance.

  if (
    Object.keys(typeExtensionsMap).length === 0 &&
    typeDefs.length === 0 &&
    directiveDefs.length === 0 &&
    schemaExtensions.length === 0 &&
    schemaDef == null
  ) {
    return schemaConfig;
  }

  const typeMap = Object.create(null);

  for (const existingType of schemaConfig.types) {
    typeMap[existingType.name] = extendNamedType(existingType);
  }

  for (const typeNode of typeDefs) {
    var _stdTypeMap$name;

    const name = typeNode.name.value;
    typeMap[name] =
      (_stdTypeMap$name = stdTypeMap[name]) !== null &&
      _stdTypeMap$name !== void 0
        ? _stdTypeMap$name
        : buildType(typeNode);
  }

  const operationTypes = {
    // Get the extended root operation types.
    query: schemaConfig.query && replaceNamedType(schemaConfig.query),
    mutation: schemaConfig.mutation && replaceNamedType(schemaConfig.mutation),
    subscription:
      schemaConfig.subscription && replaceNamedType(schemaConfig.subscription),
    // Then, incorporate schema definition and all schema extensions.
    ...(schemaDef && getOperationTypes([schemaDef])),
    ...getOperationTypes(schemaExtensions),
  }; // Then produce and return a Schema config with these types.

  return {
    description:
      (_schemaDef = schemaDef) === null || _schemaDef === void 0
        ? void 0
        : (_schemaDef$descriptio = _schemaDef.description) === null ||
          _schemaDef$descriptio === void 0
        ? void 0
        : _schemaDef$descriptio.value,
    ...operationTypes,
    types: Object.values(typeMap),
    directives: [
      ...schemaConfig.directives.map(replaceDirective),
      ...directiveDefs.map(buildDirective),
    ],
    extensions: Object.create(null),
    astNode:
      (_schemaDef2 = schemaDef) !== null && _schemaDef2 !== void 0
        ? _schemaDef2
        : schemaConfig.astNode,
    extensionASTNodes: schemaConfig.extensionASTNodes.concat(schemaExtensions),
    assumeValid:
      (_options$assumeValid =
        options === null || options === void 0
          ? void 0
          : options.assumeValid) !== null && _options$assumeValid !== void 0
        ? _options$assumeValid
        : false,
  }; // Below are functions used for producing this schema that have closed over
  // this scope and have access to the schema, cache, and newly defined types.

  function replaceType(type) {
    if ((0, _definition.isListType)(type)) {
      // @ts-expect-error
      return new _definition.GraphQLList(replaceType(type.ofType));
    }

    if ((0, _definition.isNonNullType)(type)) {
      // @ts-expect-error
      return new _definition.GraphQLNonNull(replaceType(type.ofType));
    } // @ts-expect-error FIXME

    return replaceNamedType(type);
  }

  function replaceNamedType(type) {
    // Note: While this could make early assertions to get the correctly
    // typed values, that would throw immediately while type system
    // validation with validateSchema() will produce more actionable results.
    return typeMap[type.name];
  }

  function replaceDirective(directive) {
    const config = directive.toConfig();
    return new _directives.GraphQLDirective({
      ...config,
      args: (0, _mapValue.mapValue)(config.args, extendArg),
    });
  }

  function extendNamedType(type) {
    if (
      (0, _introspection.isIntrospectionType)(type) ||
      (0, _scalars.isSpecifiedScalarType)(type)
    ) {
      // Builtin types are not extended.
      return type;
    }

    if ((0, _definition.isScalarType)(type)) {
      return extendScalarType(type);
    }

    if ((0, _definition.isObjectType)(type)) {
      return extendObjectType(type);
    }

    if ((0, _definition.isInterfaceType)(type)) {
      return extendInterfaceType(type);
    }

    if ((0, _definition.isUnionType)(type)) {
      return extendUnionType(type);
    }

    if ((0, _definition.isEnumType)(type)) {
      return extendEnumType(type);
    }

    if ((0, _definition.isInputObjectType)(type)) {
      return extendInputObjectType(type);
    }
    /* c8 ignore next 3 */
    // Not reachable, all possible type definition nodes have been considered.

    false ||
      (0, _invariant.invariant)(
        false,
        'Unexpected type: ' + (0, _inspect.inspect)(type),
      );
  }

  function extendInputObjectType(type) {
    var _typeExtensionsMap$co;

    const config = type.toConfig();
    const extensions =
      (_typeExtensionsMap$co = typeExtensionsMap[config.name]) !== null &&
      _typeExtensionsMap$co !== void 0
        ? _typeExtensionsMap$co
        : [];
    return new _definition.GraphQLInputObjectType({
      ...config,
      fields: () => ({
        ...(0, _mapValue.mapValue)(config.fields, (field) => ({
          ...field,
          type: replaceType(field.type),
        })),
        ...buildInputFieldMap(extensions),
      }),
      extensionASTNodes: config.extensionASTNodes.concat(extensions),
    });
  }

  function extendEnumType(type) {
    var _typeExtensionsMap$ty;

    const config = type.toConfig();
    const extensions =
      (_typeExtensionsMap$ty = typeExtensionsMap[type.name]) !== null &&
      _typeExtensionsMap$ty !== void 0
        ? _typeExtensionsMap$ty
        : [];
    return new _definition.GraphQLEnumType({
      ...config,
      values: { ...config.values, ...buildEnumValueMap(extensions) },
      extensionASTNodes: config.extensionASTNodes.concat(extensions),
    });
  }

  function extendScalarType(type) {
    var _typeExtensionsMap$co2;

    const config = type.toConfig();
    const extensions =
      (_typeExtensionsMap$co2 = typeExtensionsMap[config.name]) !== null &&
      _typeExtensionsMap$co2 !== void 0
        ? _typeExtensionsMap$co2
        : [];
    let specifiedByURL = config.specifiedByURL;

    for (const extensionNode of extensions) {
      var _getSpecifiedByURL;

      specifiedByURL =
        (_getSpecifiedByURL = getSpecifiedByURL(extensionNode)) !== null &&
        _getSpecifiedByURL !== void 0
          ? _getSpecifiedByURL
          : specifiedByURL;
    }

    return new _definition.GraphQLScalarType({
      ...config,
      specifiedByURL,
      extensionASTNodes: config.extensionASTNodes.concat(extensions),
    });
  }

  function extendObjectType(type) {
    var _typeExtensionsMap$co3;

    const config = type.toConfig();
    const extensions =
      (_typeExtensionsMap$co3 = typeExtensionsMap[config.name]) !== null &&
      _typeExtensionsMap$co3 !== void 0
        ? _typeExtensionsMap$co3
        : [];
    return new _definition.GraphQLObjectType({
      ...config,
      interfaces: () => [
        ...type.getInterfaces().map(replaceNamedType),
        ...buildInterfaces(extensions),
      ],
      fields: () => ({
        ...(0, _mapValue.mapValue)(config.fields, extendField),
        ...buildFieldMap(extensions),
      }),
      extensionASTNodes: config.extensionASTNodes.concat(extensions),
    });
  }

  function extendInterfaceType(type) {
    var _typeExtensionsMap$co4;

    const config = type.toConfig();
    const extensions =
      (_typeExtensionsMap$co4 = typeExtensionsMap[config.name]) !== null &&
      _typeExtensionsMap$co4 !== void 0
        ? _typeExtensionsMap$co4
        : [];
    return new _definition.GraphQLInterfaceType({
      ...config,
      interfaces: () => [
        ...type.getInterfaces().map(replaceNamedType),
        ...buildInterfaces(extensions),
      ],
      fields: () => ({
        ...(0, _mapValue.mapValue)(config.fields, extendField),
        ...buildFieldMap(extensions),
      }),
      extensionASTNodes: config.extensionASTNodes.concat(extensions),
    });
  }

  function extendUnionType(type) {
    var _typeExtensionsMap$co5;

    const config = type.toConfig();
    const extensions =
      (_typeExtensionsMap$co5 = typeExtensionsMap[config.name]) !== null &&
      _typeExtensionsMap$co5 !== void 0
        ? _typeExtensionsMap$co5
        : [];
    return new _definition.GraphQLUnionType({
      ...config,
      types: () => [
        ...type.getTypes().map(replaceNamedType),
        ...buildUnionTypes(extensions),
      ],
      extensionASTNodes: config.extensionASTNodes.concat(extensions),
    });
  }

  function extendField(field) {
    return {
      ...field,
      type: replaceType(field.type),
      args: field.args && (0, _mapValue.mapValue)(field.args, extendArg),
    };
  }

  function extendArg(arg) {
    return { ...arg, type: replaceType(arg.type) };
  }

  function getOperationTypes(nodes) {
    const opTypes = {};

    for (const node of nodes) {
      var _node$operationTypes;

      // FIXME: https://github.com/graphql/graphql-js/issues/2203
      const operationTypesNodes =
        /* c8 ignore next */
        (_node$operationTypes = node.operationTypes) !== null &&
        _node$operationTypes !== void 0
          ? _node$operationTypes
          : [];

      for (const operationType of operationTypesNodes) {
        // Note: While this could make early assertions to get the correctly
        // typed values below, that would throw immediately while type system
        // validation with validateSchema() will produce more actionable results.
        // @ts-expect-error
        opTypes[operationType.operation] = getNamedType(operationType.type);
      }
    }

    return opTypes;
  }

  function getNamedType(node) {
    var _stdTypeMap$name2;

    const name = node.name.value;
    const type =
      (_stdTypeMap$name2 = stdTypeMap[name]) !== null &&
      _stdTypeMap$name2 !== void 0
        ? _stdTypeMap$name2
        : typeMap[name];

    if (type === undefined) {
      throw new Error(`Unknown type: "${name}".`);
    }

    return type;
  }

  function getWrappedType(node) {
    if (node.kind === _kinds.Kind.LIST_TYPE) {
      return new _definition.GraphQLList(getWrappedType(node.type));
    }

    if (node.kind === _kinds.Kind.NON_NULL_TYPE) {
      return new _definition.GraphQLNonNull(getWrappedType(node.type));
    }

    return getNamedType(node);
  }

  function buildDirective(node) {
    var _node$description;

    return new _directives.GraphQLDirective({
      name: node.name.value,
      description:
        (_node$description = node.description) === null ||
        _node$description === void 0
          ? void 0
          : _node$description.value,
      // @ts-expect-error
      locations: node.locations.map(({ value }) => value),
      isRepeatable: node.repeatable,
      args: buildArgumentMap(node.arguments),
      astNode: node,
    });
  }

  function buildFieldMap(nodes) {
    const fieldConfigMap = Object.create(null);

    for (const node of nodes) {
      var _node$fields;

      // FIXME: https://github.com/graphql/graphql-js/issues/2203
      const nodeFields =
        /* c8 ignore next */
        (_node$fields = node.fields) !== null && _node$fields !== void 0
          ? _node$fields
          : [];

      for (const field of nodeFields) {
        var _field$description;

        fieldConfigMap[field.name.value] = {
          // Note: While this could make assertions to get the correctly typed
          // value, that would throw immediately while type system validation
          // with validateSchema() will produce more actionable results.
          type: getWrappedType(field.type),
          description:
            (_field$description = field.description) === null ||
            _field$description === void 0
              ? void 0
              : _field$description.value,
          args: buildArgumentMap(field.arguments),
          deprecationReason: getDeprecationReason(field),
          astNode: field,
        };
      }
    }

    return fieldConfigMap;
  }

  function buildArgumentMap(args) {
    // FIXME: https://github.com/graphql/graphql-js/issues/2203
    const argsNodes =
      /* c8 ignore next */
      args !== null && args !== void 0 ? args : [];
    const argConfigMap = Object.create(null);

    for (const arg of argsNodes) {
      var _arg$description;

      // Note: While this could make assertions to get the correctly typed
      // value, that would throw immediately while type system validation
      // with validateSchema() will produce more actionable results.
      const type = getWrappedType(arg.type);
      argConfigMap[arg.name.value] = {
        type,
        description:
          (_arg$description = arg.description) === null ||
          _arg$description === void 0
            ? void 0
            : _arg$description.value,
        defaultValue: (0, _valueFromAST.valueFromAST)(arg.defaultValue, type),
        deprecationReason: getDeprecationReason(arg),
        astNode: arg,
      };
    }

    return argConfigMap;
  }

  function buildInputFieldMap(nodes) {
    const inputFieldMap = Object.create(null);

    for (const node of nodes) {
      var _node$fields2;

      // FIXME: https://github.com/graphql/graphql-js/issues/2203
      const fieldsNodes =
        /* c8 ignore next */
        (_node$fields2 = node.fields) !== null && _node$fields2 !== void 0
          ? _node$fields2
          : [];

      for (const field of fieldsNodes) {
        var _field$description2;

        // Note: While this could make assertions to get the correctly typed
        // value, that would throw immediately while type system validation
        // with validateSchema() will produce more actionable results.
        const type = getWrappedType(field.type);
        inputFieldMap[field.name.value] = {
          type,
          description:
            (_field$description2 = field.description) === null ||
            _field$description2 === void 0
              ? void 0
              : _field$description2.value,
          defaultValue: (0, _valueFromAST.valueFromAST)(
            field.defaultValue,
            type,
          ),
          deprecationReason: getDeprecationReason(field),
          astNode: field,
        };
      }
    }

    return inputFieldMap;
  }

  function buildEnumValueMap(nodes) {
    const enumValueMap = Object.create(null);

    for (const node of nodes) {
      var _node$values;

      // FIXME: https://github.com/graphql/graphql-js/issues/2203
      const valuesNodes =
        /* c8 ignore next */
        (_node$values = node.values) !== null && _node$values !== void 0
          ? _node$values
          : [];

      for (const value of valuesNodes) {
        var _value$description;

        enumValueMap[value.name.value] = {
          description:
            (_value$description = value.description) === null ||
            _value$description === void 0
              ? void 0
              : _value$description.value,
          deprecationReason: getDeprecationReason(value),
          astNode: value,
        };
      }
    }

    return enumValueMap;
  }

  function buildInterfaces(nodes) {
    // Note: While this could make assertions to get the correctly typed
    // values below, that would throw immediately while type system
    // validation with validateSchema() will produce more actionable results.
    // @ts-expect-error
    return nodes.flatMap(
      // FIXME: https://github.com/graphql/graphql-js/issues/2203
      (node) => {
        var _node$interfaces$map, _node$interfaces;

        return (
          /* c8 ignore next */
          (_node$interfaces$map =
            (_node$interfaces = node.interfaces) === null ||
            _node$interfaces === void 0
              ? void 0
              : _node$interfaces.map(getNamedType)) !== null &&
            _node$interfaces$map !== void 0
            ? _node$interfaces$map
            : []
        );
      },
    );
  }

  function buildUnionTypes(nodes) {
    // Note: While this could make assertions to get the correctly typed
    // values below, that would throw immediately while type system
    // validation with validateSchema() will produce more actionable results.
    // @ts-expect-error
    return nodes.flatMap(
      // FIXME: https://github.com/graphql/graphql-js/issues/2203
      (node) => {
        var _node$types$map, _node$types;

        return (
          /* c8 ignore next */
          (_node$types$map =
            (_node$types = node.types) === null || _node$types === void 0
              ? void 0
              : _node$types.map(getNamedType)) !== null &&
            _node$types$map !== void 0
            ? _node$types$map
            : []
        );
      },
    );
  }

  function buildType(astNode) {
    var _typeExtensionsMap$na;

    const name = astNode.name.value;
    const extensionASTNodes =
      (_typeExtensionsMap$na = typeExtensionsMap[name]) !== null &&
      _typeExtensionsMap$na !== void 0
        ? _typeExtensionsMap$na
        : [];

    switch (astNode.kind) {
      case _kinds.Kind.OBJECT_TYPE_DEFINITION: {
        var _astNode$description;

        const allNodes = [astNode, ...extensionASTNodes];
        return new _definition.GraphQLObjectType({
          name,
          description:
            (_astNode$description = astNode.description) === null ||
            _astNode$description === void 0
              ? void 0
              : _astNode$description.value,
          interfaces: () => buildInterfaces(allNodes),
          fields: () => buildFieldMap(allNodes),
          astNode,
          extensionASTNodes,
        });
      }

      case _kinds.Kind.INTERFACE_TYPE_DEFINITION: {
        var _astNode$description2;

        const allNodes = [astNode, ...extensionASTNodes];
        return new _definition.GraphQLInterfaceType({
          name,
          description:
            (_astNode$description2 = astNode.description) === null ||
            _astNode$description2 === void 0
              ? void 0
              : _astNode$description2.value,
          interfaces: () => buildInterfaces(allNodes),
          fields: () => buildFieldMap(allNodes),
          astNode,
          extensionASTNodes,
        });
      }

      case _kinds.Kind.ENUM_TYPE_DEFINITION: {
        var _astNode$description3;

        const allNodes = [astNode, ...extensionASTNodes];
        return new _definition.GraphQLEnumType({
          name,
          description:
            (_astNode$description3 = astNode.description) === null ||
            _astNode$description3 === void 0
              ? void 0
              : _astNode$description3.value,
          values: buildEnumValueMap(allNodes),
          astNode,
          extensionASTNodes,
        });
      }

      case _kinds.Kind.UNION_TYPE_DEFINITION: {
        var _astNode$description4;

        const allNodes = [astNode, ...extensionASTNodes];
        return new _definition.GraphQLUnionType({
          name,
          description:
            (_astNode$description4 = astNode.description) === null ||
            _astNode$description4 === void 0
              ? void 0
              : _astNode$description4.value,
          types: () => buildUnionTypes(allNodes),
          astNode,
          extensionASTNodes,
        });
      }

      case _kinds.Kind.SCALAR_TYPE_DEFINITION: {
        var _astNode$description5;

        return new _definition.GraphQLScalarType({
          name,
          description:
            (_astNode$description5 = astNode.description) === null ||
            _astNode$description5 === void 0
              ? void 0
              : _astNode$description5.value,
          specifiedByURL: getSpecifiedByURL(astNode),
          astNode,
          extensionASTNodes,
        });
      }

      case _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION: {
        var _astNode$description6;

        const allNodes = [astNode, ...extensionASTNodes];
        return new _definition.GraphQLInputObjectType({
          name,
          description:
            (_astNode$description6 = astNode.description) === null ||
            _astNode$description6 === void 0
              ? void 0
              : _astNode$description6.value,
          fields: () => buildInputFieldMap(allNodes),
          astNode,
          extensionASTNodes,
          isOneOf: isOneOf(astNode),
        });
      }
    }
  }
}

const stdTypeMap = (0, _keyMap.keyMap)(
  [..._scalars.specifiedScalarTypes, ..._introspection.introspectionTypes],
  (type) => type.name,
);
/**
 * Given a field or enum value node, returns the string value for the
 * deprecation reason.
 */

function getDeprecationReason(node) {
  const deprecated = (0, _values.getDirectiveValues)(
    _directives.GraphQLDeprecatedDirective,
    node,
  ); // @ts-expect-error validated by `getDirectiveValues`

  return deprecated === null || deprecated === void 0
    ? void 0
    : deprecated.reason;
}
/**
 * Given a scalar node, returns the string value for the specifiedByURL.
 */

function getSpecifiedByURL(node) {
  const specifiedBy = (0, _values.getDirectiveValues)(
    _directives.GraphQLSpecifiedByDirective,
    node,
  ); // @ts-expect-error validated by `getDirectiveValues`

  return specifiedBy === null || specifiedBy === void 0
    ? void 0
    : specifiedBy.url;
}
/**
 * Given an input object node, returns if the node should be OneOf.
 */

function isOneOf(node) {
  return Boolean(
    (0, _values.getDirectiveValues)(_directives.GraphQLOneOfDirective, node),
  );
}
