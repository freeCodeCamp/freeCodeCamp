/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */
// flowlint ambiguous-object-type:error
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var CodeMarker = require('../util/CodeMarker');

var argumentContainsVariables = require('../util/argumentContainsVariables');

var generateAbstractTypeRefinementKey = require('../util/generateAbstractTypeRefinementKey');

var _require = require('../core/CompilerError'),
    createCompilerError = _require.createCompilerError,
    createUserError = _require.createUserError;

var _require2 = require('relay-runtime'),
    getStorageKey = _require2.getStorageKey,
    stableCopy = _require2.stableCopy;

/**
 * @public
 *
 * Converts an IR node into a plain JS object representation that can be
 * used at runtime.
 */
function generate(schema, node) {
  if (node == null) {
    return node;
  }

  var metadata = null;

  if (node.metadata != null) {
    var _node$metadata4 = node.metadata,
        mask = _node$metadata4.mask,
        plural = _node$metadata4.plural,
        connection = _node$metadata4.connection,
        refetch = _node$metadata4.refetch;

    if (Array.isArray(connection)) {
      var _metadata;

      metadata = (_metadata = metadata) !== null && _metadata !== void 0 ? _metadata : {};
      metadata.connection = connection;
    }

    if (typeof mask === 'boolean') {
      var _metadata2;

      metadata = (_metadata2 = metadata) !== null && _metadata2 !== void 0 ? _metadata2 : {};
      metadata.mask = mask;
    }

    if (plural === true) {
      var _metadata3;

      metadata = (_metadata3 = metadata) !== null && _metadata3 !== void 0 ? _metadata3 : {};
      metadata.plural = true;
    }

    if (refetch != null && typeof refetch === 'object') {
      var _metadata4;

      metadata = (_metadata4 = metadata) !== null && _metadata4 !== void 0 ? _metadata4 : {};
      metadata.refetch = {
        connection: refetch.connection,
        fragmentPathInResult: refetch.fragmentPathInResult,
        operation: CodeMarker.moduleDependency( // $FlowFixMe[unclear-addition]
        refetch.operation + '.graphql')
      };

      if (typeof refetch.identifierField === 'string') {
        metadata.refetch = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, metadata.refetch), {}, {
          identifierField: refetch.identifierField
        });
      }
    }
  }

  var rawType = schema.getRawType(node.type);
  return {
    argumentDefinitions: generateArgumentDefinitions(schema, node.argumentDefinitions),
    kind: 'Fragment',
    // $FlowFixMe[incompatible-return]
    metadata: metadata,
    name: node.name,
    selections: generateSelections(schema, node.selections),
    type: schema.getTypeString(rawType),
    abstractKey: schema.isAbstractType(rawType) ? generateAbstractTypeRefinementKey(schema, rawType) : null
  };
}

function generateSelections(schema, selections) {
  return selections.map(function (selection) {
    var _selection$metadata;

    switch (selection.kind) {
      case 'ClientExtension':
        return generateClientExtension(schema, selection);

      case 'FragmentSpread':
        return generateFragmentSpread(schema, selection);

      case 'Condition':
        return generateCondition(schema, selection);

      case 'ScalarField':
        // NOTE: The type discriminator is used only for the
        // normalization ast.
        var isTypeDiscriminator = ((_selection$metadata = selection.metadata) === null || _selection$metadata === void 0 ? void 0 : _selection$metadata.abstractKey) != null;

        if (isTypeDiscriminator) {
          return null;
        }

        return generateScalarField(schema, selection);

      case 'ModuleImport':
        return generateModuleImport(schema, selection);

      case 'InlineDataFragmentSpread':
        return generateInlineDataFragmentSpread(schema, selection);

      case 'InlineFragment':
        return generateInlineFragment(schema, selection);

      case 'LinkedField':
        return generateLinkedField(schema, selection);

      case 'Defer':
        return generateDefer(schema, selection);

      case 'Stream':
        return generateStream(schema, selection);

      default:
        selection;
        throw new Error();
    }
  }).filter(Boolean);
}

function generateArgumentDefinitions(schema, nodes) {
  return nodes.map(function (node) {
    switch (node.kind) {
      case 'LocalArgumentDefinition':
        return {
          defaultValue: stableCopy(node.defaultValue),
          kind: 'LocalArgument',
          name: node.name
        };

      case 'RootArgumentDefinition':
        return {
          kind: 'RootArgument',
          name: node.name
        };

      default:
        throw new Error();
    }
  }).sort(function (nodeA, nodeB) {
    if (nodeA.name > nodeB.name) {
      return 1;
    }

    if (nodeA.name < nodeB.name) {
      return -1;
    }

    return 0;
  });
}

function generateClientExtension(schema, node) {
  return {
    kind: 'ClientExtension',
    selections: generateSelections(schema, node.selections)
  };
}

function generateDefer(schema, node) {
  return {
    kind: 'Defer',
    selections: generateSelections(schema, node.selections)
  };
}

function generateStream(schema, node) {
  return {
    kind: 'Stream',
    selections: generateSelections(schema, node.selections)
  };
}

function generateCondition(schema, node) {
  if (node.condition.kind !== 'Variable') {
    throw createCompilerError("ReaderCodeGenerator: Expected 'Condition' with static value to be " + 'pruned or inlined', [node.condition.loc]);
  }

  return {
    condition: node.condition.variableName,
    kind: 'Condition',
    passingValue: node.passingValue,
    selections: generateSelections(schema, node.selections)
  };
}

function generateFragmentSpread(schema, node) {
  return {
    args: generateArgs(node.args),
    kind: 'FragmentSpread',
    name: node.name
  };
}

function generateInlineFragment(schema, node) {
  var rawType = schema.getRawType(node.typeCondition);
  return {
    kind: 'InlineFragment',
    selections: generateSelections(schema, node.selections),
    type: schema.getTypeString(rawType),
    abstractKey: schema.isAbstractType(rawType) ? generateAbstractTypeRefinementKey(schema, rawType) : null
  };
}

function generateInlineDataFragmentSpread(schema, node) {
  return {
    kind: 'InlineDataFragmentSpread',
    name: node.name,
    selections: generateSelections(schema, node.selections)
  };
}

function generateLinkedField(schema, node) {
  var _node$metadata;

  // Note: it is important that the arguments of this field be sorted to
  // ensure stable generation of storage keys for equivalent arguments
  // which may have originally appeared in different orders across an app.
  // TODO(T37646905) enable this invariant after splitting the
  // RelayCodeGenerator-test and running the FieldHandleTransform on
  // Reader ASTs.
  //
  //   invariant(
  //     node.handles == null,
  //     'ReaderCodeGenerator: unexpected handles',
  //   );
  var rawType = schema.getRawType(node.type);
  var field = {
    alias: node.alias === node.name ? null : node.alias,
    args: generateArgs(node.args),
    concreteType: !schema.isAbstractType(rawType) ? schema.getTypeString(rawType) : null,
    kind: 'LinkedField',
    name: node.name,
    plural: isPlural(schema, node.type),
    selections: generateSelections(schema, node.selections),
    storageKey: null
  }; // Precompute storageKey if possible

  var storageKey = getStaticStorageKey(field, node.metadata);

  if (storageKey) {
    field = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, field), {}, {
      storageKey: storageKey
    });
  }

  var requiredMetadata = (_node$metadata = node.metadata) === null || _node$metadata === void 0 ? void 0 : _node$metadata.required;

  if (requiredMetadata != null) {
    return createRequiredField(field, requiredMetadata);
  }

  return field;
}

function createRequiredField(field, requiredMetadata) {
  return {
    kind: 'RequiredField',
    field: field,
    action: requiredMetadata.action,
    path: requiredMetadata.path
  };
}

function generateModuleImport(schema, node) {
  var fragmentName = node.name;
  var regExpMatch = fragmentName.match(/^([a-zA-Z][a-zA-Z0-9]*)(?:_([a-zA-Z][_a-zA-Z0-9]*))?$/);

  if (!regExpMatch) {
    throw createCompilerError('ReaderCodeGenerator: @match fragments should be named ' + "'FragmentName_propName', got '".concat(fragmentName, "'."), [node.loc]);
  }

  var fragmentPropName = regExpMatch[2];

  if (typeof fragmentPropName !== 'string') {
    throw createCompilerError('ReaderCodeGenerator: @module fragments should be named ' + "'FragmentName_propName', got '".concat(fragmentName, "'."), [node.loc]);
  }

  return {
    documentName: node.key,
    fragmentName: fragmentName,
    fragmentPropName: fragmentPropName,
    kind: 'ModuleImport'
  };
}

function generateScalarField(schema, node) {
  var _node$metadata2, _node$metadata3;

  // Note: it is important that the arguments of this field be sorted to
  // ensure stable generation of storage keys for equivalent arguments
  // which may have originally appeared in different orders across an app.
  // TODO(T37646905) enable this invariant after splitting the
  // RelayCodeGenerator-test and running the FieldHandleTransform on
  // Reader ASTs.
  //
  //   invariant(
  //     node.handles == null,
  //     'ReaderCodeGenerator: unexpected handles',
  //   );
  var field = {
    alias: node.alias === node.name ? null : node.alias,
    args: generateArgs(node.args),
    kind: 'ScalarField',
    name: node.name,
    storageKey: null
  }; // Precompute storageKey if possible

  var storageKey = getStaticStorageKey(field, node.metadata);

  if (storageKey) {
    field = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, field), {}, {
      storageKey: storageKey
    });
  }

  if (((_node$metadata2 = node.metadata) === null || _node$metadata2 === void 0 ? void 0 : _node$metadata2.flight) === true) {
    field = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, field), {}, {
      kind: 'FlightField'
    });
  }

  var requiredMetadata = (_node$metadata3 = node.metadata) === null || _node$metadata3 === void 0 ? void 0 : _node$metadata3.required;

  if (requiredMetadata != null) {
    if (field.kind === 'FlightField') {
      throw new createUserError('@required cannot be used on a ReactFlightComponent.', [node.loc]);
    }

    return createRequiredField(field, requiredMetadata);
  }

  return field;
}

function generateArgument(name, value) {
  switch (value.kind) {
    case 'Variable':
      return {
        kind: 'Variable',
        name: name,
        variableName: value.variableName
      };

    case 'Literal':
      return value.value === null ? null : {
        kind: 'Literal',
        name: name,
        value: stableCopy(value.value)
      };

    case 'ObjectValue':
      {
        var objectKeys = value.fields.map(function (field) {
          return field.name;
        }).sort();
        var objectValues = new Map(value.fields.map(function (field) {
          return [field.name, field.value];
        }));
        return {
          fields: objectKeys.map(function (fieldName) {
            var _generateArgument;

            var fieldValue = objectValues.get(fieldName);

            if (fieldValue == null) {
              throw createCompilerError('Expected to have object field value');
            }

            return (_generateArgument = generateArgument(fieldName, fieldValue)) !== null && _generateArgument !== void 0 ? _generateArgument : {
              kind: 'Literal',
              name: fieldName,
              value: null
            };
          }),
          kind: 'ObjectValue',
          name: name
        };
      }

    case 'ListValue':
      {
        return {
          items: value.items.map(function (item, index) {
            return generateArgument("".concat(name, ".").concat(index), item);
          }),
          kind: 'ListValue',
          name: name
        };
      }

    default:
      throw createUserError('ReaderCodeGenerator: Complex argument values (Lists or ' + 'InputObjects with nested variables) are not supported.', [value.loc]);
  }
}

function generateArgs(args) {
  var concreteArguments = [];
  args.forEach(function (arg) {
    var concreteArgument = generateArgument(arg.name, arg.value);

    if (concreteArgument !== null) {
      concreteArguments.push(concreteArgument);
    }
  });
  return concreteArguments.length === 0 ? null : concreteArguments.sort(nameComparator);
}

function nameComparator(a, b) {
  return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
}
/**
 * Pre-computes storage key if possible and advantageous. Storage keys are
 * generated for fields with supplied arguments that are all statically known
 * (ie. literals, no variables) at build time.
 */


function getStaticStorageKey(field, metadata) {
  var metadataStorageKey = metadata === null || metadata === void 0 ? void 0 : metadata.storageKey;

  if (typeof metadataStorageKey === 'string') {
    return metadataStorageKey;
  }

  if (!field.args || field.args.length === 0 || field.args.some(argumentContainsVariables)) {
    return null;
  }

  return getStorageKey(field, {});
}

function isPlural(schema, type) {
  return schema.isList(schema.getNullableType(type));
}

module.exports = {
  generate: generate
};