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

var _createForOfIteratorHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/createForOfIteratorHelper"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var FlattenTransform = require('../../transforms/FlattenTransform');

var IRVisitor = require('../../core/IRVisitor');

var MaskTransform = require('../../transforms/MaskTransform');

var MatchTransform = require('../../transforms/MatchTransform');

var Profiler = require('../../core/GraphQLCompilerProfiler');

var RefetchableFragmentTransform = require('../../transforms/RefetchableFragmentTransform');

var RelayDirectiveTransform = require('../../transforms/RelayDirectiveTransform');

var RequiredFieldTransform = require('../../transforms/RequiredFieldTransform');

var generateAbstractTypeRefinementKey = require('../../util/generateAbstractTypeRefinementKey');

var partitionArray = require('../../util/partitionArray');

var _require = require('./RelayFlowBabelFactories'),
    anyTypeAlias = _require.anyTypeAlias,
    declareExportOpaqueType = _require.declareExportOpaqueType,
    exactObjectTypeAnnotation = _require.exactObjectTypeAnnotation,
    exportType = _require.exportType,
    exportTypes = _require.exportTypes,
    importTypes = _require.importTypes,
    inexactObjectTypeAnnotation = _require.inexactObjectTypeAnnotation,
    intersectionTypeAnnotation = _require.intersectionTypeAnnotation,
    lineComments = _require.lineComments,
    readOnlyArrayOfType = _require.readOnlyArrayOfType,
    readOnlyObjectTypeProperty = _require.readOnlyObjectTypeProperty,
    unionTypeAnnotation = _require.unionTypeAnnotation;

var _require2 = require('./RelayFlowTypeTransformers'),
    transformInputType = _require2.transformInputType,
    transformScalarType = _require2.transformScalarType;

var babelGenerator = require('@babel/generator')["default"];

var t = require('@babel/types');

var invariant = require('invariant');

var nullthrows = require('nullthrows');

function generate(schema, node, options) {
  var ast = IRVisitor.visit(node, createVisitor(schema, options));
  return babelGenerator(ast).code;
}

function makeProp(schema, _ref, state, unmasked, concreteType) {
  var key = _ref.key,
      schemaName = _ref.schemaName,
      value = _ref.value,
      conditional = _ref.conditional,
      nodeType = _ref.nodeType,
      nodeSelections = _ref.nodeSelections;

  if (schemaName === '__typename' && concreteType) {
    value = t.stringLiteralTypeAnnotation(concreteType);
  } else if (nodeType) {
    value = transformScalarType(schema, nodeType, state, selectionsToBabel(schema, [Array.from(nullthrows(nodeSelections).values())], state, unmasked));
  }

  var typeProperty = readOnlyObjectTypeProperty(key, value);

  if (conditional) {
    typeProperty.optional = true;
  }

  return typeProperty;
}

var isTypenameSelection = function isTypenameSelection(selection) {
  return selection.schemaName === '__typename';
};

var hasTypenameSelection = function hasTypenameSelection(selections) {
  return selections.some(isTypenameSelection);
};

var onlySelectsTypename = function onlySelectsTypename(selections) {
  return selections.every(isTypenameSelection);
};

function selectionsToBabel(schema, selections, state, unmasked, fragmentTypeName) {
  var baseFields = new Map();
  var byConcreteType = {};
  flattenArray(selections).forEach(function (selection) {
    var concreteType = selection.concreteType;

    if (concreteType) {
      var _byConcreteType$concr;

      byConcreteType[concreteType] = (_byConcreteType$concr = byConcreteType[concreteType]) !== null && _byConcreteType$concr !== void 0 ? _byConcreteType$concr : [];
      byConcreteType[concreteType].push(selection);
    } else {
      var previousSel = baseFields.get(selection.key);
      baseFields.set(selection.key, previousSel ? mergeSelection(selection, previousSel) : selection);
    }
  });
  var types = [];

  if (Object.keys(byConcreteType).length > 0 && onlySelectsTypename(Array.from(baseFields.values())) && (hasTypenameSelection(Array.from(baseFields.values())) || Object.keys(byConcreteType).every(function (type) {
    return hasTypenameSelection(byConcreteType[type]);
  }))) {
    (function () {
      var typenameAliases = new Set();

      var _loop = function _loop(concreteType) {
        types.push(groupRefs([].concat((0, _toConsumableArray2["default"])(Array.from(baseFields.values())), (0, _toConsumableArray2["default"])(byConcreteType[concreteType]))).map(function (selection) {
          if (selection.schemaName === '__typename') {
            typenameAliases.add(selection.key);
          }

          return makeProp(schema, selection, state, unmasked, concreteType);
        }));
      };

      for (var concreteType in byConcreteType) {
        _loop(concreteType);
      } // It might be some other type then the listed concrete types. Ideally, we
      // would set the type to diff(string, set of listed concrete types), but
      // this doesn't exist in Flow at the time.


      types.push(Array.from(typenameAliases).map(function (typenameAlias) {
        var otherProp = readOnlyObjectTypeProperty(typenameAlias, t.stringLiteralTypeAnnotation('%other'));
        otherProp.leadingComments = lineComments("This will never be '%other', but we need some", 'value in case none of the concrete values match.');
        return otherProp;
      }));
    })();
  } else {
    var selectionMap = selectionsToMap(Array.from(baseFields.values()));

    for (var concreteType in byConcreteType) {
      selectionMap = mergeSelections(selectionMap, selectionsToMap(byConcreteType[concreteType].map(function (sel) {
        return (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, sel), {}, {
          conditional: true
        });
      })));
    }

    var selectionMapValues = groupRefs(Array.from(selectionMap.values())).map(function (sel) {
      return isTypenameSelection(sel) && sel.concreteType ? makeProp(schema, (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, sel), {}, {
        conditional: false
      }), state, unmasked, sel.concreteType) : makeProp(schema, sel, state, unmasked);
    });
    types.push(selectionMapValues);
  }

  return unionTypeAnnotation(types.map(function (props) {
    if (fragmentTypeName) {
      props.push(readOnlyObjectTypeProperty('$refType', t.genericTypeAnnotation(t.identifier(fragmentTypeName))));
    }

    return unmasked ? inexactObjectTypeAnnotation(props) : exactObjectTypeAnnotation(props);
  }));
}

function mergeSelection(a, b) {
  var shouldSetConditional = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!a) {
    if (shouldSetConditional) {
      return (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, b), {}, {
        conditional: true
      });
    }

    return b;
  }

  return (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, a), {}, {
    nodeSelections: a.nodeSelections ? mergeSelections(a.nodeSelections, nullthrows(b.nodeSelections), shouldSetConditional) : null,
    conditional: a.conditional && b.conditional
  });
}

function mergeSelections(a, b) {
  var shouldSetConditional = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var merged = new Map();

  var _iterator = (0, _createForOfIteratorHelper2["default"])(a.entries()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _step.value,
          key = _step$value[0],
          value = _step$value[1];
      merged.set(key, value);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var _iterator2 = (0, _createForOfIteratorHelper2["default"])(b.entries()),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _step2$value = _step2.value,
          _key = _step2$value[0],
          _value = _step2$value[1];
      merged.set(_key, mergeSelection(a.get(_key), _value, shouldSetConditional));
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return merged;
}

function isPlural(node) {
  return Boolean(node.metadata && node.metadata.plural);
}

function createVisitor(schema, options) {
  var state = {
    customScalars: options.customScalars,
    enumsHasteModule: options.enumsHasteModule,
    generatedFragments: new Set(),
    generatedInputObjectTypes: {},
    optionalInputFields: options.optionalInputFields,
    usedEnums: {},
    usedFragments: new Set(),
    useHaste: options.useHaste,
    useSingleArtifactDirectory: options.useSingleArtifactDirectory,
    noFutureProofEnums: options.noFutureProofEnums,
    matchFields: new Map(),
    runtimeImports: new Set()
  };
  return {
    leave: {
      Root: function Root(node) {
        var _node$metadata;

        var inputVariablesType = generateInputVariablesType(schema, node, state);
        var inputObjectTypes = generateInputObjectTypes(state);
        var responseTypeDefinition = selectionsToBabel(schema,
        /* $FlowFixMe: selections have already been transformed */
        node.selections, state, false);

        if (((_node$metadata = node.metadata) === null || _node$metadata === void 0 ? void 0 : _node$metadata.childrenCanBubbleNull) === true) {
          responseTypeDefinition = t.nullableTypeAnnotation(responseTypeDefinition);
        }

        var responseType = exportType("".concat(node.name, "Response"), responseTypeDefinition);
        var operationTypes = [t.objectTypeProperty(t.identifier('variables'), t.genericTypeAnnotation(t.identifier("".concat(node.name, "Variables")))), t.objectTypeProperty(t.identifier('response'), t.genericTypeAnnotation(t.identifier("".concat(node.name, "Response"))))]; // Generate raw response type

        var rawResponseType;
        var normalizationIR = options.normalizationIR;

        if (normalizationIR && node.directives.some(function (d) {
          return d.name === DIRECTIVE_NAME;
        })) {
          rawResponseType = IRVisitor.visit(normalizationIR, createRawResponseTypeVisitor(schema, state));
        }

        var refetchableFragmentName = getRefetchableQueryParentFragmentName(state, node.metadata);

        if (refetchableFragmentName != null) {
          state.runtimeImports.add('FragmentReference');
        }

        var babelNodes = [];

        if (state.runtimeImports.size) {
          babelNodes.push(importTypes(Array.from(state.runtimeImports).sort(), 'relay-runtime'));
        }

        babelNodes.push.apply(babelNodes, (0, _toConsumableArray2["default"])(refetchableFragmentName ? generateFragmentRefsForRefetchable(refetchableFragmentName) : getFragmentImports(state)).concat((0, _toConsumableArray2["default"])(getEnumDefinitions(schema, state)), (0, _toConsumableArray2["default"])(inputObjectTypes), [inputVariablesType, responseType]));

        if (rawResponseType) {
          var _iterator3 = (0, _createForOfIteratorHelper2["default"])(state.matchFields),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _step3$value = _step3.value,
                  key = _step3$value[0],
                  ast = _step3$value[1];
              babelNodes.push(exportType(key, ast));
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          operationTypes.push(t.objectTypeProperty(t.identifier('rawResponse'), t.genericTypeAnnotation(t.identifier("".concat(node.name, "RawResponse")))));
          babelNodes.push(rawResponseType);
        }

        babelNodes.push(exportType(node.name, exactObjectTypeAnnotation(operationTypes))); // $FlowFixMe[incompatible-call]

        return t.program(babelNodes);
      },
      Fragment: function Fragment(node) {
        var _node$metadata2;

        var selections = flattenArray( // $FlowFixMe[incompatible-cast] : selections have already been transformed
        node.selections);
        var numConecreteSelections = selections.filter(function (s) {
          return s.concreteType;
        }).length;
        selections = selections.map(function (selection) {
          if (numConecreteSelections <= 1 && isTypenameSelection(selection) && !schema.isAbstractType(node.type)) {
            return [(0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, selection), {}, {
              concreteType: schema.getTypeString(node.type)
            })];
          }

          return [selection];
        });
        state.generatedFragments.add(node.name);
        var fragmentTypes = getFragmentTypes(node.name, getRefetchableQueryPath(state, node.directives));
        var refTypeName = getRefTypeName(node.name);
        var refTypeDataProperty = readOnlyObjectTypeProperty('$data', t.genericTypeAnnotation(t.identifier("".concat(node.name, "$data"))));
        refTypeDataProperty.optional = true;
        var refTypeFragmentRefProperty = readOnlyObjectTypeProperty('$fragmentRefs', t.genericTypeAnnotation(t.identifier(getOldFragmentTypeName(node.name))));
        var isPluralFragment = isPlural(node);
        var refType = inexactObjectTypeAnnotation([refTypeDataProperty, refTypeFragmentRefProperty]);
        var dataTypeName = getDataTypeName(node.name);
        var dataType = t.genericTypeAnnotation(t.identifier(node.name));
        var unmasked = node.metadata != null && node.metadata.mask === false;
        var baseType = selectionsToBabel(schema, selections, state, unmasked, unmasked ? undefined : getOldFragmentTypeName(node.name));
        var type = isPluralFragment ? readOnlyArrayOfType(baseType) : baseType;

        if (((_node$metadata2 = node.metadata) === null || _node$metadata2 === void 0 ? void 0 : _node$metadata2.childrenCanBubbleNull) === true) {
          type = t.nullableTypeAnnotation(type);
        }

        state.runtimeImports.add('FragmentReference');
        return t.program([].concat((0, _toConsumableArray2["default"])(getFragmentImports(state)), (0, _toConsumableArray2["default"])(getEnumDefinitions(schema, state)), [importTypes(Array.from(state.runtimeImports).sort(), 'relay-runtime')], (0, _toConsumableArray2["default"])(fragmentTypes), [exportType(node.name, type), exportType(dataTypeName, dataType), exportType(refTypeName, isPluralFragment ? readOnlyArrayOfType(refType) : refType)]));
      },
      InlineFragment: function InlineFragment(node) {
        return flattenArray( // $FlowFixMe[incompatible-cast] : selections have already been transformed
        node.selections).map(function (typeSelection) {
          return schema.isAbstractType(node.typeCondition) ? (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, typeSelection), {}, {
            conditional: true
          }) : (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, typeSelection), {}, {
            concreteType: schema.getTypeString(node.typeCondition)
          });
        });
      },
      Condition: function Condition(node) {
        return flattenArray( // $FlowFixMe[incompatible-cast] : selections have already been transformed
        node.selections).map(function (selection) {
          return (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, selection), {}, {
            conditional: true
          });
        });
      },
      ScalarField: function ScalarField(node) {
        return visitScalarField(schema, node, state);
      },
      LinkedField: function LinkedField(node) {
        return visitLinkedField(schema, node);
      },
      ModuleImport: function ModuleImport(node) {
        return [{
          key: '__fragmentPropName',
          conditional: true,
          value: transformScalarType(schema, schema.expectStringType(), state)
        }, {
          key: '__module_component',
          conditional: true,
          value: transformScalarType(schema, schema.expectStringType(), state)
        }, {
          key: '__fragments_' + node.name,
          ref: node.name
        }];
      },
      FragmentSpread: function FragmentSpread(node) {
        state.usedFragments.add(node.name);
        return [{
          key: '__fragments_' + node.name,
          ref: node.name
        }];
      }
    }
  };
}

function visitNodeWithSelectionsOnly(node) {
  return flattenArray( // $FlowFixMe[incompatible-cast] : selections have already been transformed
  node.selections);
}

function visitScalarField(schema, node, state) {
  var _node$metadata3;

  var requiredMetadata = (_node$metadata3 = node.metadata) === null || _node$metadata3 === void 0 ? void 0 : _node$metadata3.required;
  var nodeType = requiredMetadata != null ? schema.getNonNullType(node.type) : node.type;
  return [{
    key: node.alias,
    schemaName: node.name,
    value: transformScalarType(schema, nodeType, state)
  }];
}

function getLinkedFieldNodeType(schema, node) {
  var _node$metadata4, _node$metadata5;

  var requiredMetadata = (_node$metadata4 = node.metadata) === null || _node$metadata4 === void 0 ? void 0 : _node$metadata4.required;

  if (requiredMetadata != null) {
    return schema.getNonNullType(node.type);
  }

  if (((_node$metadata5 = node.metadata) === null || _node$metadata5 === void 0 ? void 0 : _node$metadata5.childrenCanBubbleNull) === true) {
    if (schema.isList(node.type)) {
      // In a plural field, nulls bubble up to the item, resulting in a list of nullable items.
      return schema.mapListItemType(node.type, function (inner) {
        return schema.getNullableType(inner);
      });
    } else if (schema.isNonNull(node.type)) {
      var nullable = schema.getNullableType(node.type);

      if (schema.isList(nullable)) {
        return schema.getNonNullType(schema.mapListItemType(nullable, function (inner) {
          return schema.getNullableType(inner);
        }));
      }

      return nullable;
    }

    return node.type;
  }

  return node.type;
}

function visitLinkedField(schema, node) {
  return [{
    key: node.alias,
    schemaName: node.name,
    nodeType: getLinkedFieldNodeType(schema, node),
    nodeSelections: selectionsToMap(flattenArray( // $FlowFixMe[incompatible-cast] : selections have already been transformed
    node.selections),
    /*
     * append concreteType to key so overlapping fields with different
     * concreteTypes don't get overwritten by each other
     */
    true)
  }];
}

function makeRawResponseProp(schema, _ref2, state, concreteType) {
  var key = _ref2.key,
      schemaName = _ref2.schemaName,
      value = _ref2.value,
      conditional = _ref2.conditional,
      nodeType = _ref2.nodeType,
      nodeSelections = _ref2.nodeSelections,
      kind = _ref2.kind;

  if (kind === 'ModuleImport') {
    return t.objectTypeSpreadProperty(t.genericTypeAnnotation(t.identifier(key)));
  }

  if (schemaName === '__typename' && concreteType) {
    value = t.stringLiteralTypeAnnotation(concreteType);
  } else if (nodeType) {
    value = transformScalarType(schema, nodeType, state, selectionsToRawResponseBabel(schema, [Array.from(nullthrows(nodeSelections).values())], state, schema.isAbstractType(nodeType) || schema.isWrapper(nodeType) ? null : schema.getTypeString(nodeType)));
  }

  var typeProperty = readOnlyObjectTypeProperty(key, value);

  if (conditional) {
    typeProperty.optional = true;
  }

  return typeProperty;
} // Trasform the codegen IR selections into Babel flow types


function selectionsToRawResponseBabel(schema, selections, state, nodeTypeName) {
  var baseFields = [];
  var byConcreteType = {};
  flattenArray(selections).forEach(function (selection) {
    var concreteType = selection.concreteType;

    if (concreteType) {
      var _byConcreteType$concr2;

      byConcreteType[concreteType] = (_byConcreteType$concr2 = byConcreteType[concreteType]) !== null && _byConcreteType$concr2 !== void 0 ? _byConcreteType$concr2 : [];
      byConcreteType[concreteType].push(selection);
    } else {
      baseFields.push(selection);
    }
  });
  var types = [];

  if (Object.keys(byConcreteType).length) {
    var baseFieldsMap = selectionsToMap(baseFields);

    var _loop2 = function _loop2(concreteType) {
      var mergedSeletions = Array.from(mergeSelections(baseFieldsMap, selectionsToMap(byConcreteType[concreteType]), false).values());
      types.push(exactObjectTypeAnnotation(mergedSeletions.map(function (selection) {
        return makeRawResponseProp(schema, selection, state, concreteType);
      })));
      appendLocal3DPayload(types, mergedSeletions, schema, state, concreteType);
    };

    for (var concreteType in byConcreteType) {
      _loop2(concreteType);
    }
  }

  if (baseFields.length > 0) {
    types.push(exactObjectTypeAnnotation(baseFields.map(function (selection) {
      return makeRawResponseProp(schema, selection, state, nodeTypeName);
    })));
    appendLocal3DPayload(types, baseFields, schema, state, nodeTypeName);
  }

  return unionTypeAnnotation(types);
}

function appendLocal3DPayload(types, selections, schema, state, currentType) {
  var moduleImport = selections.find(function (sel) {
    return sel.kind === 'ModuleImport';
  });

  if (moduleImport) {
    // Generate an extra opaque type for client 3D fields
    state.runtimeImports.add('Local3DPayload');
    types.push(t.genericTypeAnnotation(t.identifier('Local3DPayload'), t.typeParameterInstantiation([t.stringLiteralTypeAnnotation(nullthrows(moduleImport.documentName)), exactObjectTypeAnnotation(selections.filter(function (sel) {
      return sel.schemaName !== 'js';
    }).map(function (selection) {
      return makeRawResponseProp(schema, selection, state, currentType);
    }))])));
  }
} // Visitor for generating raw response type


function createRawResponseTypeVisitor(schema, state) {
  return {
    leave: {
      Root: function Root(node) {
        return exportType("".concat(node.name, "RawResponse"), selectionsToRawResponseBabel(schema, // $FlowFixMe[incompatible-cast] : selections have already been transformed
        node.selections, state, null));
      },
      InlineFragment: function InlineFragment(node) {
        var typeCondition = node.typeCondition;
        return flattenArray( // $FlowFixMe[incompatible-cast] : selections have already been transformed
        node.selections).map(function (typeSelection) {
          return schema.isAbstractType(typeCondition) ? typeSelection : (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, typeSelection), {}, {
            concreteType: schema.getTypeString(typeCondition)
          });
        });
      },
      ScalarField: function ScalarField(node) {
        return visitScalarField(schema, node, state);
      },
      ClientExtension: function ClientExtension(node) {
        return flattenArray( // $FlowFixMe[incompatible-cast] : selections have already been transformed
        node.selections).map(function (sel) {
          return (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, sel), {}, {
            conditional: true
          });
        });
      },
      LinkedField: function LinkedField(node) {
        return visitLinkedField(schema, node);
      },
      Condition: visitNodeWithSelectionsOnly,
      Defer: visitNodeWithSelectionsOnly,
      Stream: visitNodeWithSelectionsOnly,
      ModuleImport: function ModuleImport(node) {
        return visitRawResposneModuleImport(schema, node, state);
      },
      FragmentSpread: function FragmentSpread(node) {
        !false ? process.env.NODE_ENV !== "production" ? invariant(false, 'A fragment spread is found when traversing the AST, ' + 'make sure you are passing the codegen IR') : invariant(false) : void 0;
      }
    }
  };
} // Dedupe the generated type of module selections to reduce file size


function visitRawResposneModuleImport(schema, node, state) {
  var selections = node.selections,
      key = node.name;
  var moduleSelections = selections.filter( // $FlowFixMe[prop-missing] selections have already been transformed
  function (sel) {
    return sel.length && sel[0].schemaName === 'js';
  }).map(function (arr) {
    return arr[0];
  });

  if (!state.matchFields.has(key)) {
    var ast = selectionsToRawResponseBabel(schema, // $FlowFixMe[incompatible-cast] : selections have already been transformed
    node.selections.filter(function (sel) {
      return sel.length > 1 || sel[0].schemaName !== 'js';
    }), state, null);
    state.matchFields.set(key, ast);
  }

  return [].concat((0, _toConsumableArray2["default"])(moduleSelections), [{
    key: key,
    kind: 'ModuleImport',
    documentName: node.key
  }]);
}

function selectionsToMap(selections, appendType) {
  var map = new Map();
  selections.forEach(function (selection) {
    var key = appendType && selection.concreteType ? "".concat(selection.key, "::").concat(selection.concreteType) : selection.key;
    var previousSel = map.get(key);
    map.set(key, previousSel ? mergeSelection(previousSel, selection) : selection);
  });
  return map;
}

function flattenArray(arrayOfArrays) {
  var result = [];
  arrayOfArrays.forEach(function (array) {
    result.push.apply(result, (0, _toConsumableArray2["default"])(array));
  });
  return result;
}

function generateInputObjectTypes(state) {
  return Object.keys(state.generatedInputObjectTypes).map(function (typeIdentifier) {
    var inputObjectType = state.generatedInputObjectTypes[typeIdentifier];
    !(typeof inputObjectType !== 'string') ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayCompilerFlowGenerator: Expected input object type to have been' + ' defined before calling `generateInputObjectTypes`') : invariant(false) : void 0;
    return exportType(typeIdentifier, inputObjectType);
  });
}

function generateInputVariablesType(schema, node, state) {
  return exportType("".concat(node.name, "Variables"), exactObjectTypeAnnotation(node.argumentDefinitions.map(function (arg) {
    var property = t.objectTypeProperty(t.identifier(arg.name), transformInputType(schema, arg.type, state));

    if (!schema.isNonNull(arg.type)) {
      property.optional = true;
    }

    return property;
  })));
}

function groupRefs(props) {
  var result = [];
  var refs = [];
  props.forEach(function (prop) {
    if (prop.ref) {
      refs.push(prop.ref);
    } else {
      result.push(prop);
    }
  });

  if (refs.length > 0) {
    var value = intersectionTypeAnnotation(refs.map(function (ref) {
      return t.genericTypeAnnotation(t.identifier(getOldFragmentTypeName(ref)));
    }));
    result.push({
      key: '$fragmentRefs',
      conditional: false,
      value: value
    });
  }

  return result;
}

function getFragmentImports(state) {
  var imports = [];

  if (state.usedFragments.size > 0) {
    var usedFragments = Array.from(state.usedFragments).sort();

    var _iterator4 = (0, _createForOfIteratorHelper2["default"])(usedFragments),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var usedFragment = _step4.value;
        var fragmentTypeName = getOldFragmentTypeName(usedFragment);

        if (!state.generatedFragments.has(usedFragment)) {
          if (state.useHaste) {
            // TODO(T22653277) support non-haste environments when importing
            // fragments
            imports.push(importTypes([fragmentTypeName], usedFragment + '.graphql'));
          } else if (state.useSingleArtifactDirectory) {
            imports.push(importTypes([fragmentTypeName], './' + usedFragment + '.graphql'));
          } else {
            imports.push(anyTypeAlias(fragmentTypeName));
          }
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }

  return imports;
}

function getEnumDefinitions(schema, _ref3) {
  var enumsHasteModule = _ref3.enumsHasteModule,
      usedEnums = _ref3.usedEnums,
      noFutureProofEnums = _ref3.noFutureProofEnums;
  var enumNames = Object.keys(usedEnums).sort();

  if (enumNames.length === 0) {
    return [];
  }

  if (typeof enumsHasteModule === 'string') {
    return [importTypes(enumNames, enumsHasteModule)];
  }

  if (typeof enumsHasteModule === 'function') {
    return enumNames.map(function (enumName) {
      return importTypes([enumName], enumsHasteModule(enumName));
    });
  }

  return enumNames.map(function (name) {
    var values = [].concat(schema.getEnumValues(usedEnums[name]));
    values.sort();

    if (!noFutureProofEnums) {
      values.push('%future added value');
    }

    return exportType(name, t.unionTypeAnnotation(values.map(function (value) {
      return t.stringLiteralTypeAnnotation(value);
    })));
  });
} // If it's a @refetchable fragment, we generate the $fragmentRef in generated
// query, and import it in the fragment to avoid circular dependencies


function getRefetchableQueryParentFragmentName(state, metadata) {
  if (!(metadata === null || metadata === void 0 ? void 0 : metadata.isRefetchableQuery) || !state.useHaste && !state.useSingleArtifactDirectory) {
    return null;
  }

  var derivedFrom = metadata === null || metadata === void 0 ? void 0 : metadata.derivedFrom;

  if (derivedFrom != null && typeof derivedFrom === 'string') {
    return derivedFrom;
  }

  return null;
}

function getRefetchableQueryPath(state, directives) {
  var _directives$find;

  var refetchableQuery;

  if (!state.useHaste && !state.useSingleArtifactDirectory) {
    return;
  }

  var refetchableArgs = (_directives$find = directives.find(function (d) {
    return d.name === 'refetchable';
  })) === null || _directives$find === void 0 ? void 0 : _directives$find.args;

  if (!refetchableArgs) {
    return;
  }

  var argument = refetchableArgs.find(function (arg) {
    return arg.kind === 'Argument' && arg.name === 'queryName';
  });

  if (argument && argument.value && argument.value.kind === 'Literal' && typeof argument.value.value === 'string') {
    refetchableQuery = argument.value.value;

    if (!state.useHaste) {
      refetchableQuery = './' + refetchableQuery;
    }

    refetchableQuery += '.graphql';
  }

  return refetchableQuery;
}

function generateFragmentRefsForRefetchable(name) {
  var oldFragmentTypeName = getOldFragmentTypeName(name);
  var newFragmentTypeName = getNewFragmentTypeName(name);
  return [declareExportOpaqueType(oldFragmentTypeName, 'FragmentReference'), declareExportOpaqueType(newFragmentTypeName, oldFragmentTypeName)];
}

function getFragmentTypes(name, refetchableQueryPath) {
  var oldFragmentTypeName = getOldFragmentTypeName(name);
  var newFragmentTypeName = getNewFragmentTypeName(name);

  if (refetchableQueryPath) {
    return [importTypes([oldFragmentTypeName, newFragmentTypeName], refetchableQueryPath), exportTypes([oldFragmentTypeName, newFragmentTypeName])];
  }

  return [declareExportOpaqueType(oldFragmentTypeName, 'FragmentReference'), declareExportOpaqueType(newFragmentTypeName, oldFragmentTypeName)];
}

function getOldFragmentTypeName(name) {
  return "".concat(name, "$ref");
}

function getNewFragmentTypeName(name) {
  return "".concat(name, "$fragmentType");
}

function getRefTypeName(name) {
  return "".concat(name, "$key");
}

function getDataTypeName(name) {
  return "".concat(name, "$data");
}

var FLOW_TRANSFORMS = [RelayDirectiveTransform.transform, MaskTransform.transform, MatchTransform.transform, RequiredFieldTransform.transform, FlattenTransform.transformWithOptions({}), RefetchableFragmentTransform.transform];
var DIRECTIVE_NAME = 'raw_response_type';
module.exports = {
  generate: Profiler.instrument(generate, 'RelayFlowGenerator.generate'),
  transforms: FLOW_TRANSFORMS,
  SCHEMA_EXTENSION: "directive @".concat(DIRECTIVE_NAME, " on QUERY | MUTATION | SUBSCRIPTION")
};