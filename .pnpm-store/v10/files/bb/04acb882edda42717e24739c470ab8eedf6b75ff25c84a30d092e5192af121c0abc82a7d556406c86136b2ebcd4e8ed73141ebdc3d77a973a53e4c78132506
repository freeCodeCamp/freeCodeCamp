'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.PossibleTypeExtensionsRule = PossibleTypeExtensionsRule;

var _didYouMean = require('../../jsutils/didYouMean.js');

var _inspect = require('../../jsutils/inspect.js');

var _invariant = require('../../jsutils/invariant.js');

var _suggestionList = require('../../jsutils/suggestionList.js');

var _GraphQLError = require('../../error/GraphQLError.js');

var _kinds = require('../../language/kinds.js');

var _predicates = require('../../language/predicates.js');

var _definition = require('../../type/definition.js');

/**
 * Possible type extension
 *
 * A type extension is only valid if the type is defined and has the same kind.
 */
function PossibleTypeExtensionsRule(context) {
  const schema = context.getSchema();
  const definedTypes = Object.create(null);

  for (const def of context.getDocument().definitions) {
    if ((0, _predicates.isTypeDefinitionNode)(def)) {
      definedTypes[def.name.value] = def;
    }
  }

  return {
    ScalarTypeExtension: checkExtension,
    ObjectTypeExtension: checkExtension,
    InterfaceTypeExtension: checkExtension,
    UnionTypeExtension: checkExtension,
    EnumTypeExtension: checkExtension,
    InputObjectTypeExtension: checkExtension,
  };

  function checkExtension(node) {
    const typeName = node.name.value;
    const defNode = definedTypes[typeName];
    const existingType =
      schema === null || schema === void 0 ? void 0 : schema.getType(typeName);
    let expectedKind;

    if (defNode) {
      expectedKind = defKindToExtKind[defNode.kind];
    } else if (existingType) {
      expectedKind = typeToExtKind(existingType);
    }

    if (expectedKind) {
      if (expectedKind !== node.kind) {
        const kindStr = extensionKindToTypeName(node.kind);
        context.reportError(
          new _GraphQLError.GraphQLError(
            `Cannot extend non-${kindStr} type "${typeName}".`,
            {
              nodes: defNode ? [defNode, node] : node,
            },
          ),
        );
      }
    } else {
      const allTypeNames = Object.keys({
        ...definedTypes,
        ...(schema === null || schema === void 0
          ? void 0
          : schema.getTypeMap()),
      });
      const suggestedTypes = (0, _suggestionList.suggestionList)(
        typeName,
        allTypeNames,
      );
      context.reportError(
        new _GraphQLError.GraphQLError(
          `Cannot extend type "${typeName}" because it is not defined.` +
            (0, _didYouMean.didYouMean)(suggestedTypes),
          {
            nodes: node.name,
          },
        ),
      );
    }
  }
}

const defKindToExtKind = {
  [_kinds.Kind.SCALAR_TYPE_DEFINITION]: _kinds.Kind.SCALAR_TYPE_EXTENSION,
  [_kinds.Kind.OBJECT_TYPE_DEFINITION]: _kinds.Kind.OBJECT_TYPE_EXTENSION,
  [_kinds.Kind.INTERFACE_TYPE_DEFINITION]: _kinds.Kind.INTERFACE_TYPE_EXTENSION,
  [_kinds.Kind.UNION_TYPE_DEFINITION]: _kinds.Kind.UNION_TYPE_EXTENSION,
  [_kinds.Kind.ENUM_TYPE_DEFINITION]: _kinds.Kind.ENUM_TYPE_EXTENSION,
  [_kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION]:
    _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION,
};

function typeToExtKind(type) {
  if ((0, _definition.isScalarType)(type)) {
    return _kinds.Kind.SCALAR_TYPE_EXTENSION;
  }

  if ((0, _definition.isObjectType)(type)) {
    return _kinds.Kind.OBJECT_TYPE_EXTENSION;
  }

  if ((0, _definition.isInterfaceType)(type)) {
    return _kinds.Kind.INTERFACE_TYPE_EXTENSION;
  }

  if ((0, _definition.isUnionType)(type)) {
    return _kinds.Kind.UNION_TYPE_EXTENSION;
  }

  if ((0, _definition.isEnumType)(type)) {
    return _kinds.Kind.ENUM_TYPE_EXTENSION;
  }

  if ((0, _definition.isInputObjectType)(type)) {
    return _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION;
  }
  /* c8 ignore next 3 */
  // Not reachable. All possible types have been considered

  false ||
    (0, _invariant.invariant)(
      false,
      'Unexpected type: ' + (0, _inspect.inspect)(type),
    );
}

function extensionKindToTypeName(kind) {
  switch (kind) {
    case _kinds.Kind.SCALAR_TYPE_EXTENSION:
      return 'scalar';

    case _kinds.Kind.OBJECT_TYPE_EXTENSION:
      return 'object';

    case _kinds.Kind.INTERFACE_TYPE_EXTENSION:
      return 'interface';

    case _kinds.Kind.UNION_TYPE_EXTENSION:
      return 'union';

    case _kinds.Kind.ENUM_TYPE_EXTENSION:
      return 'enum';

    case _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION:
      return 'input object';
    // Not reachable. All possible types have been considered

    /* c8 ignore next */

    default:
      false ||
        (0, _invariant.invariant)(
          false,
          'Unexpected kind: ' + (0, _inspect.inspect)(kind),
        );
  }
}
