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

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var argumentContainsVariables = require('../util/argumentContainsVariables');

var generateAbstractTypeRefinementKey = require('../util/generateAbstractTypeRefinementKey');

var partitionArray = require('../util/partitionArray');

var sortObjectByKey = require('./sortObjectByKey');

var _require = require('../core/CompilerError'),
    createCompilerError = _require.createCompilerError,
    createUserError = _require.createUserError;

var _require2 = require('relay-runtime'),
    getStorageKey = _require2.getStorageKey,
    stableCopy = _require2.stableCopy;

function generate(schema, node) {
  switch (node.kind) {
    case 'Root':
      return generateRoot(schema, node);

    case 'SplitOperation':
      return generateSplitOperation(schema, node);

    default:
      throw createCompilerError("NormalizationCodeGenerator: Unsupported AST kind '".concat(node.kind, "'."), [node.loc]);
  }
}

function generateRoot(schema, node) {
  return {
    argumentDefinitions: generateArgumentDefinitions(schema, node.argumentDefinitions),
    kind: 'Operation',
    name: node.name,
    selections: generateSelections(schema, node.selections)
  };
}

function generateSplitOperation(schema, node) {
  return {
    kind: 'SplitOperation',
    metadata: sortObjectByKey(node.metadata),
    name: node.name,
    selections: generateSelections(schema, node.selections)
  };
}

function generateSelections(schema, selections) {
  var normalizationSelections = [];
  selections.forEach(function (selection) {
    var _selection$metadata;

    switch (selection.kind) {
      case 'Condition':
        normalizationSelections.push(generateCondition(schema, selection));
        break;

      case 'ClientExtension':
        normalizationSelections.push(generateClientExtension(schema, selection));
        break;

      case 'ScalarField':
        // NOTE: Inline fragments in normalization ast have the abstractKey
        // but we skip the corresponding ScalarField for the type discriminator
        // selection, since it's guaranteed to be a duplicate of a parent __typename
        // selection.
        var abstractKey = (_selection$metadata = selection.metadata) === null || _selection$metadata === void 0 ? void 0 : _selection$metadata.abstractKey;

        if (typeof abstractKey === 'string') {
          normalizationSelections.push(generateTypeDiscriminator(abstractKey));
        } else {
          normalizationSelections.push.apply(normalizationSelections, (0, _toConsumableArray2["default"])(generateScalarField(selection)));
        }

        break;

      case 'ModuleImport':
        normalizationSelections.push(generateModuleImport(selection));
        break;

      case 'InlineFragment':
        normalizationSelections.push(generateInlineFragment(schema, selection));
        break;

      case 'LinkedField':
        normalizationSelections.push.apply(normalizationSelections, (0, _toConsumableArray2["default"])(generateLinkedField(schema, selection)));
        break;

      case 'Defer':
        normalizationSelections.push(generateDefer(schema, selection));
        break;

      case 'Stream':
        normalizationSelections.push(generateStream(schema, selection));
        break;

      case 'InlineDataFragmentSpread':
      case 'FragmentSpread':
        throw new createCompilerError("NormalizationCodeGenerator: Unexpected IR node ".concat(selection.kind, "."), [selection.loc]);

      default:
        selection;
        throw new Error();
    }
  });
  return normalizationSelections;
}

function generateArgumentDefinitions(schema, nodes) {
  return nodes.map(function (node) {
    return {
      defaultValue: stableCopy(node.defaultValue),
      kind: 'LocalArgument',
      name: node.name
    };
  });
}

function generateClientExtension(schema, node) {
  return {
    kind: 'ClientExtension',
    selections: generateSelections(schema, node.selections)
  };
}

function generateCondition(schema, node) {
  if (node.condition.kind !== 'Variable') {
    throw createCompilerError("NormalizationCodeGenerator: Expected 'Condition' with static " + 'value to be pruned or inlined', [node.condition.loc]);
  }

  return {
    condition: node.condition.variableName,
    kind: 'Condition',
    passingValue: node.passingValue,
    selections: generateSelections(schema, node.selections)
  };
}

function generateDefer(schema, node) {
  if (!(node["if"] == null || node["if"].kind === 'Variable' || node["if"].kind === 'Literal' && node["if"].value === true)) {
    var _node$if$loc, _node$if;

    throw createCompilerError('NormalizationCodeGenerator: Expected @defer `if` condition to be ' + 'a variable, unspecified, or the literal `true`.', [(_node$if$loc = (_node$if = node["if"]) === null || _node$if === void 0 ? void 0 : _node$if.loc) !== null && _node$if$loc !== void 0 ? _node$if$loc : node.loc]);
  }

  return {
    "if": node["if"] != null && node["if"].kind === 'Variable' ? node["if"].variableName : null,
    kind: 'Defer',
    label: node.label,
    selections: generateSelections(schema, node.selections)
  };
}

function generateInlineFragment(schema, node) {
  var rawType = schema.getRawType(node.typeCondition);
  var isAbstractType = schema.isAbstractType(rawType);
  var abstractKey = isAbstractType ? generateAbstractTypeRefinementKey(schema, rawType) : null;
  var selections = generateSelections(schema, node.selections);

  if (isAbstractType) {
    // Maintain a few invariants:
    // - InlineFragment (and `selections` arrays generally) cannot be empty
    // - Don't emit a TypeDiscriminator under an InlineFragment unless it has
    //   a different abstractKey
    // This means we have to handle two cases:
    // - The inline fragment only contains a TypeDiscriminator with the same
    //   abstractKey: replace the Fragment w the Discriminator
    // - The inline fragment contains other selections: return all the selections
    //   minus any Discriminators w the same key
    var _partitionArray = partitionArray(selections, function (selection) {
      return selection.kind === 'TypeDiscriminator' && selection.abstractKey === abstractKey;
    }),
        discriminators = _partitionArray[0],
        otherSelections = _partitionArray[1];

    var discriminator = discriminators[0];

    if (discriminator != null && otherSelections.length === 0) {
      return discriminator;
    } else {
      selections = otherSelections;
    }
  }

  return {
    kind: 'InlineFragment',
    selections: selections,
    type: schema.getTypeString(rawType),
    abstractKey: abstractKey
  };
}

function generateLinkedField(schema, node) {
  // Note: it is important that the arguments of this field be sorted to
  // ensure stable generation of storage keys for equivalent arguments
  // which may have originally appeared in different orders across an app.
  var handles = node.handles && node.handles.map(function (handle) {
    var handleNode = {
      alias: node.alias === node.name ? null : node.alias,
      args: generateArgs(node.args),
      filters: handle.filters,
      handle: handle.name,
      key: handle.key,
      kind: 'LinkedHandle',
      name: node.name
    }; // NOTE: this intentionally adds a dynamic key in order to avoid
    // triggering updates to existing queries that do not use dynamic
    // keys.

    if (handle.dynamicKey != null) {
      var dynamicKeyArgName = '__dynamicKey';
      handleNode = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, handleNode), {}, {
        dynamicKey: {
          kind: 'Variable',
          name: dynamicKeyArgName,
          variableName: handle.dynamicKey.variableName
        }
      });
    }

    if (handle.handleArgs != null) {
      var handleArgs = generateArgs(handle.handleArgs);

      if (handleArgs != null) {
        handleNode = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, handleNode), {}, {
          handleArgs: handleArgs
        });
      }
    }

    return handleNode;
  }) || [];
  var type = schema.getRawType(node.type);
  var field = {
    alias: node.alias === node.name ? null : node.alias,
    args: generateArgs(node.args),
    concreteType: !schema.isAbstractType(type) ? schema.getTypeString(type) : null,
    kind: 'LinkedField',
    name: node.name,
    plural: isPlural(schema, node.type),
    selections: generateSelections(schema, node.selections),
    storageKey: null
  }; // Precompute storageKey if possible

  var storageKey = getStaticStorageKey(field, node.metadata);

  if (storageKey != null) {
    field = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, field), {}, {
      storageKey: storageKey
    });
  }

  return [field].concat(handles);
}

function generateModuleImport(node) {
  var fragmentName = node.name;
  var regExpMatch = fragmentName.match(/^([a-zA-Z][a-zA-Z0-9]*)(?:_([a-zA-Z][_a-zA-Z0-9]*))?$/);

  if (!regExpMatch) {
    throw createCompilerError('NormalizationCodeGenerator: @module fragments should be named ' + "'FragmentName_propName', got '".concat(fragmentName, "'."), [node.loc]);
  }

  var fragmentPropName = regExpMatch[2];

  if (typeof fragmentPropName !== 'string') {
    throw createCompilerError('NormalizationCodeGenerator: @module fragments should be named ' + "'FragmentName_propName', got '".concat(fragmentName, "'."), [node.loc]);
  }

  return {
    args: null,
    documentName: node.key,
    fragmentName: fragmentName,
    fragmentPropName: fragmentPropName,
    kind: 'ModuleImport'
  };
}

function generateTypeDiscriminator(abstractKey) {
  return {
    kind: 'TypeDiscriminator',
    abstractKey: abstractKey
  };
}

function generateScalarField(node) {
  var _node$metadata, _node$metadata2;

  // flowlint-next-line sketchy-null-mixed:off
  if ((_node$metadata = node.metadata) === null || _node$metadata === void 0 ? void 0 : _node$metadata.skipNormalizationNode) {
    return [];
  } // Note: it is important that the arguments of this field be sorted to
  // ensure stable generation of storage keys for equivalent arguments
  // which may have originally appeared in different orders across an app.


  var handles = node.handles && node.handles.map(function (handle) {
    if (handle.dynamicKey != null) {
      throw createUserError('Dynamic key values are not supported on scalar fields.', [handle.dynamicKey.loc]);
    }

    var nodeHandle = {
      alias: node.alias === node.name ? null : node.alias,
      args: generateArgs(node.args),
      filters: handle.filters,
      handle: handle.name,
      key: handle.key,
      kind: 'ScalarHandle',
      name: node.name
    };

    if (handle.handleArgs != null) {
      // $FlowFixMe handleArgs exists in Handle
      nodeHandle.handleArgs = generateArgs(handle.handleArgs);
    }

    return nodeHandle;
  }) || [];
  var field = {
    alias: node.alias === node.name ? null : node.alias,
    args: generateArgs(node.args),
    kind: 'ScalarField',
    name: node.name,
    storageKey: null
  }; // Precompute storageKey if possible

  var storageKey = getStaticStorageKey(field, node.metadata);

  if (storageKey != null) {
    field = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, field), {}, {
      storageKey: storageKey
    });
  }

  if (((_node$metadata2 = node.metadata) === null || _node$metadata2 === void 0 ? void 0 : _node$metadata2.flight) === true) {
    field = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, field), {}, {
      kind: 'FlightField'
    });
  }

  return [field].concat(handles);
}

function generateStream(schema, node) {
  if (!(node["if"] == null || node["if"].kind === 'Variable' || node["if"].kind === 'Literal' && node["if"].value === true)) {
    var _node$if$loc2, _node$if2;

    throw createCompilerError('NormalizationCodeGenerator: Expected @stream `if` condition to be ' + 'a variable, unspecified, or the literal `true`.', [(_node$if$loc2 = (_node$if2 = node["if"]) === null || _node$if2 === void 0 ? void 0 : _node$if2.loc) !== null && _node$if$loc2 !== void 0 ? _node$if$loc2 : node.loc]);
  }

  return {
    "if": node["if"] != null && node["if"].kind === 'Variable' ? node["if"].variableName : null,
    kind: 'Stream',
    label: node.label,
    selections: generateSelections(schema, node.selections)
  };
}

function generateArgumentValue(name, value) {
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
            var _generateArgumentValu;

            var fieldValue = objectValues.get(fieldName);

            if (fieldValue == null) {
              throw createCompilerError('Expected to have object field value');
            }

            return (_generateArgumentValu = generateArgumentValue(fieldName, fieldValue)) !== null && _generateArgumentValu !== void 0 ? _generateArgumentValu : {
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
            return generateArgumentValue("".concat(name, ".").concat(index), item);
          }),
          kind: 'ListValue',
          name: name
        };
      }

    default:
      throw createUserError('NormalizationCodeGenerator: Complex argument values (Lists or ' + 'InputObjects with nested variables) are not supported.', [value.loc]);
  }
}

function generateArgs(args) {
  var concreteArguments = [];
  args.forEach(function (arg) {
    var concreteArgument = generateArgumentValue(arg.name, arg.value);

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