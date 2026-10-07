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

var IRTransformer = require('../core/IRTransformer');

var getLiteralArgumentValues = require('../core/getLiteralArgumentValues');

var getNormalizationOperationName = require('../core/getNormalizationOperationName');

var _require = require('../core/CompilerError'),
    createCompilerError = _require.createCompilerError,
    createUserError = _require.createUserError;

var _require2 = require('relay-runtime'),
    getModuleComponentKey = _require2.getModuleComponentKey,
    getModuleOperationKey = _require2.getModuleOperationKey;

var SUPPORTED_ARGUMENT_NAME = 'supported';
var JS_FIELD_TYPE = 'JSDependency';
var JS_FIELD_MODULE_ARG = 'module';
var JS_FIELD_ID_ARG = 'id';
var JS_FIELD_NAME = 'js';
var SCHEMA_EXTENSION = "\n  directive @match(key: String) on FIELD\n\n  directive @module(\n    name: String!\n  ) on FRAGMENT_SPREAD\n";

/**
 * This transform rewrites LinkedField nodes with @match and rewrites them
 * into `LinkedField` nodes with a `supported` argument.
 */
function matchTransform(context) {
  return IRTransformer.transform(context, {
    // TODO: type IRTransformer to allow changing result type
    FragmentSpread: visitFragmentSpread,
    LinkedField: visitLinkedField,
    InlineFragment: visitInlineFragment,
    ScalarField: visitScalarField
  }, function (node) {
    return {
      documentName: node.name,
      matchesForPath: new Map(),
      moduleKey: null,
      parentType: node.type,
      path: []
    };
  });
}

function visitInlineFragment(node, state) {
  // $FlowFixMe[incompatible-use]
  return this.traverse(node, (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, state), {}, {
    parentType: node.typeCondition
  }));
}

function visitScalarField(field) {
  // $FlowFixMe[incompatible-use]
  var context = this.getContext();
  var schema = context.getSchema();

  if (field.name === JS_FIELD_NAME) {
    var jsModuleType = schema.getTypeFromString(JS_FIELD_TYPE);

    if (jsModuleType == null || !schema.isServerType(jsModuleType)) {
      throw new createUserError("'".concat(JS_FIELD_NAME, "' should be defined on the server schema."), [field.loc]);
    }

    if (schema.isScalar(jsModuleType) && schema.areEqualTypes(schema.getRawType(field.type), jsModuleType)) {
      throw new createUserError("Direct use of the '".concat(JS_FIELD_NAME, "' field is not allowed, use ") + '@match/@module instead.', [field.loc]);
    }
  }

  return field;
}

function visitLinkedField(node, state) {
  // $FlowFixMe[incompatible-use]
  var context = this.getContext();
  var schema = context.getSchema();
  var matchDirective = node.directives.find(function (directive) {
    return directive.name === 'match';
  });
  var moduleKey = null;

  if (matchDirective != null) {
    var _getLiteralArgumentVa = getLiteralArgumentValues(matchDirective.args);

    moduleKey = _getLiteralArgumentVa.key;

    if (moduleKey != null && (typeof moduleKey !== 'string' || !moduleKey.startsWith(state.documentName))) {
      var _matchDirective$args$;

      throw createUserError("Expected the 'key' argument of @match to be a literal string starting " + "with the document name, e.g. '".concat(state.documentName, "_<localName>'."), [((_matchDirective$args$ = matchDirective.args.find(function (arg) {
        return arg.name === 'key';
      })) !== null && _matchDirective$args$ !== void 0 ? _matchDirective$args$ : matchDirective).loc]);
    }
  }

  state.path.push(node); // $FlowFixMe[incompatible-use]

  var transformedNode = this.traverse(node, (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, state), {}, {
    moduleKey: moduleKey,
    parentType: node.type
  }));
  state.path.pop();

  if (matchDirective == null) {
    return transformedNode;
  }

  var parentType = state.parentType;
  var rawType = schema.getRawType(parentType);

  if (!(schema.isInterface(rawType) || schema.isObject(rawType))) {
    throw createUserError("@match used on incompatible field '".concat(transformedNode.name, "'.") + '@match may only be used with fields whose parent type is an ' + "interface or object, got invalid type '".concat(schema.getTypeString(parentType), "'."), [node.loc]);
  }

  var currentField = schema.getFieldConfig(schema.expectField(schema.assertCompositeType(rawType), transformedNode.name));
  var supportedArgumentDefinition = currentField.args.find(function (_ref) {
    var name = _ref.name;
    return name === SUPPORTED_ARGUMENT_NAME;
  });

  if (supportedArgumentDefinition == null) {
    if (moduleKey == null) {
      throw createUserError('@match on a field without the `supported` argument is a no-op, please remove the `@match`.', [node.loc]);
    }

    return transformedNode;
  }

  var supportedArgType = schema.getNullableType(supportedArgumentDefinition.type);
  var supportedArgOfType = supportedArgType != null && schema.isList(supportedArgType) ? schema.getListItemType(supportedArgType) : null;

  if (supportedArgType == null || supportedArgOfType == null || !schema.isString(schema.getNullableType(supportedArgOfType))) {
    throw createUserError("@match used on incompatible field '".concat(transformedNode.name, "'. ") + '@match may only be used with fields that accept a ' + "'supported: [String!]!' argument.", [node.loc]);
  }

  var rawFieldType = schema.getRawType(transformedNode.type);

  if (!schema.isAbstractType(rawFieldType)) {
    throw createUserError("@match used on incompatible field '".concat(transformedNode.name, "'.") + '@match may only be used with fields that return a union or interface.', [node.loc]);
  }

  var seenTypes = new Map();
  var selections = [];
  transformedNode.selections.forEach(function (matchSelection) {
    if (matchSelection.kind === 'ScalarField' && matchSelection.name === '__typename') {
      selections.push(matchSelection);
      return;
    }

    var moduleImport = matchSelection.kind === 'InlineFragment' ? matchSelection.selections[0] : null;

    if (matchSelection.kind !== 'InlineFragment' || moduleImport == null || moduleImport.kind !== 'ModuleImport') {
      throw createUserError('Invalid @match selection: all selections should be ' + 'fragment spreads with @module.', [matchSelection.loc]);
    }

    var matchedType = matchSelection.typeCondition;
    seenTypes.set(matchedType, matchSelection);
    selections.push(matchSelection);
  });

  if (seenTypes.size === 0) {
    throw createUserError('Invalid @match selection: expected at least one @module selection. ' + "Remove @match or add a '...Fragment @module()' selection.", [matchDirective.loc]);
  }

  var supportedArg = transformedNode.args.find(function (arg) {
    return arg.name === SUPPORTED_ARGUMENT_NAME;
  });

  if (supportedArg != null) {
    throw createUserError("Invalid @match selection: the '".concat(SUPPORTED_ARGUMENT_NAME, "' argument ") + 'is automatically added and cannot be supplied explicitly.', [supportedArg.loc]);
  }

  return {
    kind: 'LinkedField',
    alias: transformedNode.alias,
    args: [].concat((0, _toConsumableArray2["default"])(transformedNode.args), [{
      kind: 'Argument',
      name: SUPPORTED_ARGUMENT_NAME,
      type: supportedArgumentDefinition.type,
      value: {
        kind: 'Literal',
        loc: node.loc,
        value: Array.from(seenTypes.keys()).map(function (type) {
          return schema.getTypeString(type);
        })
      },
      loc: node.loc
    }]),
    connection: false,
    directives: [],
    handles: null,
    loc: node.loc,
    metadata: null,
    name: transformedNode.name,
    type: transformedNode.type,
    selections: selections
  };
} // Transform @module


function visitFragmentSpread(spread, _ref2) {
  var _moduleDirective$args2, _moduleDirective$args3, _moduleDirective$args4, _moduleDirective$args5, _moduleDirective$args6, _moduleDirective$args7;

  var documentName = _ref2.documentName,
      path = _ref2.path,
      matchesForPath = _ref2.matchesForPath,
      moduleKeyFromParent = _ref2.moduleKey;
  var transformedNode = this.traverse(spread);
  var moduleDirective = transformedNode.directives.find(function (directive) {
    return directive.name === 'module';
  });

  if (moduleDirective == null) {
    return transformedNode;
  }

  if (spread.args.length !== 0) {
    var _spread$args$;

    throw createUserError('@module does not support @arguments.', [(_spread$args$ = spread.args[0]) === null || _spread$args$ === void 0 ? void 0 : _spread$args$.loc].filter(Boolean));
  }

  var context = this.getContext();
  var schema = context.getSchema();
  var jsModuleType = schema.asScalarFieldType(schema.getTypeFromString(JS_FIELD_TYPE));

  if (jsModuleType == null || !schema.isServerType(jsModuleType)) {
    throw new createUserError("'".concat(JS_FIELD_NAME, "' should be defined on the server schema."), [spread.loc]);
  }

  if (!schema.isScalar(jsModuleType)) {
    throw createUserError('Using @module requires the schema to define a scalar ' + "'".concat(JS_FIELD_TYPE, "' type."));
  }

  var fragment = context.getFragment(spread.name, spread.loc);

  if (!schema.isObject(fragment.type)) {
    throw createUserError("@module used on invalid fragment spread '...".concat(spread.name, "'. @module ") + 'may only be used with fragments on a concrete (object) type, ' + "but the fragment has abstract type '".concat(schema.getTypeString(fragment.type), "'."), [spread.loc, fragment.loc]);
  }

  var field = schema.getFieldByName(fragment.type, JS_FIELD_NAME);

  if (!field) {
    throw createUserError("@module used on invalid fragment spread '...".concat(spread.name, "'. @module ") + "requires the fragment type '".concat(schema.getTypeString(fragment.type), "' to have a ") + "'".concat(JS_FIELD_NAME, "(").concat(JS_FIELD_MODULE_ARG, ": String! ") + "[".concat(JS_FIELD_ID_ARG, ": String]): ").concat(JS_FIELD_TYPE, "' field (your ") + "schema may choose to omit the 'id'  argument but if present it " + "must accept a 'String').", [moduleDirective.loc]);
  }

  var jsField = schema.getFieldConfig(field);
  var jsFieldModuleArg = jsField ? jsField.args.find(function (arg) {
    return arg.name === JS_FIELD_MODULE_ARG;
  }) : null;
  var jsFieldIdArg = jsField ? jsField.args.find(function (arg) {
    return arg.name === JS_FIELD_ID_ARG;
  }) : null;

  if (jsFieldModuleArg == null || !schema.isString(schema.getNullableType(jsFieldModuleArg.type)) || jsFieldIdArg != null && !schema.isString(jsFieldIdArg.type) || jsField.type !== jsModuleType) {
    throw createUserError("@module used on invalid fragment spread '...".concat(spread.name, "'. @module ") + "requires the fragment type '".concat(schema.getTypeString(fragment.type), "' to have a ") + "'".concat(JS_FIELD_NAME, "(").concat(JS_FIELD_MODULE_ARG, ": String! ") + "[".concat(JS_FIELD_ID_ARG, ": String]): ").concat(JS_FIELD_TYPE, "' field (your ") + "schema may choose to omit the 'id'  argument but if present it " + "must accept a 'String').", [moduleDirective.loc]);
  }

  if (spread.directives.length !== 1) {
    throw createUserError("@module used on invalid fragment spread '...".concat(spread.name, "'. @module ") + 'may not have additional directives.', [spread.loc]);
  }

  var _getLiteralArgumentVa2 = getLiteralArgumentValues(moduleDirective.args),
      moduleName = _getLiteralArgumentVa2.name;

  if (typeof moduleName !== 'string') {
    var _moduleDirective$args;

    throw createUserError("Expected the 'name' argument of @module to be a literal string", [((_moduleDirective$args = moduleDirective.args.find(function (arg) {
      return arg.name === 'name';
    })) !== null && _moduleDirective$args !== void 0 ? _moduleDirective$args : spread).loc]);
  }

  var parentField = path[path.length - 1];
  var moduleKey = moduleKeyFromParent !== null && moduleKeyFromParent !== void 0 ? moduleKeyFromParent : documentName;
  var aliasPath = path.map(function (x) {
    return x.alias;
  }).join('.');
  var moduleId = aliasPath === '' ? documentName : "".concat(documentName, ".").concat(aliasPath);
  var typeName = schema.getTypeString(fragment.type);
  var matches = matchesForPath.get(aliasPath);

  if (matches == null) {
    var _parentField$loc;

    if (matchesForPath.size !== 0) {
      var existingMatchWithKey = Array.from(matchesForPath.values()).find(function (entry) {
        return entry.key === moduleKey;
      });

      if (existingMatchWithKey != null) {
        if (parentField == null) {
          throw createCompilerError('Cannot have @module selections at multiple paths unless the selections are within fields.', [spread.loc]);
        }

        throw createUserError('Invalid @module selection: documents with multiple fields ' + "containing 3D selections must specify a unique 'key' value " + "for each field: use '".concat(parentField.alias, " @match(key: \"").concat(documentName, "_<localName>\")'."), [parentField.loc]);
      }
    }

    matches = {
      key: moduleKey,
      location: (_parentField$loc = parentField === null || parentField === void 0 ? void 0 : parentField.loc) !== null && _parentField$loc !== void 0 ? _parentField$loc : spread.loc,
      types: new Map()
    };
    matchesForPath.set(aliasPath, matches);
  }

  if (moduleKey !== matches.key) {
    var _parentField$loc2;

    // The user can't override the key locally (per @module),
    // so this is just an internal sanity check
    throw createCompilerError('Invalid @module selection: expected all selections at path ' + "'".concat(aliasPath, " to have the same 'key', got '").concat(moduleKey, "' and '").concat(matches.key, "'."), [(_parentField$loc2 = parentField === null || parentField === void 0 ? void 0 : parentField.loc) !== null && _parentField$loc2 !== void 0 ? _parentField$loc2 : spread.loc]);
  }

  var previousMatchForType = matches.types.get(typeName);

  if (previousMatchForType != null && (previousMatchForType.fragment !== spread.name || previousMatchForType.module !== moduleName)) {
    throw createUserError('Invalid @module selection: concrete type ' + "'".concat(typeName, "' was matched multiple times at path ") + "'".concat(aliasPath, "' but with a different fragment or module name."), [spread.loc, previousMatchForType.location]);
  }

  matches.types.set(typeName, {
    location: spread.loc,
    fragment: spread.name,
    module: moduleName
  });
  var normalizationName = getNormalizationOperationName(spread.name) + '.graphql';
  var componentKey = getModuleComponentKey(moduleKey);
  var componentField = {
    alias: componentKey,
    args: [{
      kind: 'Argument',
      name: JS_FIELD_MODULE_ARG,
      type: jsFieldModuleArg.type,
      value: {
        kind: 'Literal',
        loc: (_moduleDirective$args2 = (_moduleDirective$args3 = moduleDirective.args[0]) === null || _moduleDirective$args3 === void 0 ? void 0 : _moduleDirective$args3.loc) !== null && _moduleDirective$args2 !== void 0 ? _moduleDirective$args2 : moduleDirective.loc,
        value: moduleName
      },
      loc: moduleDirective.loc
    }, jsFieldIdArg != null ? {
      kind: 'Argument',
      name: JS_FIELD_ID_ARG,
      type: jsFieldIdArg.type,
      value: {
        kind: 'Literal',
        loc: (_moduleDirective$args4 = (_moduleDirective$args5 = moduleDirective.args[0]) === null || _moduleDirective$args5 === void 0 ? void 0 : _moduleDirective$args5.loc) !== null && _moduleDirective$args4 !== void 0 ? _moduleDirective$args4 : moduleDirective.loc,
        value: moduleId
      },
      loc: moduleDirective.loc
    } : null].filter(Boolean),
    directives: [],
    handles: null,
    kind: 'ScalarField',
    loc: moduleDirective.loc,
    metadata: {
      skipNormalizationNode: true
    },
    name: JS_FIELD_NAME,
    type: jsModuleType
  };
  var operationKey = getModuleOperationKey(moduleKey);
  var operationField = {
    alias: operationKey,
    args: [{
      kind: 'Argument',
      name: JS_FIELD_MODULE_ARG,
      type: jsFieldModuleArg.type,
      value: {
        kind: 'Literal',
        loc: moduleDirective.loc,
        value: normalizationName
      },
      loc: moduleDirective.loc
    }, jsFieldIdArg != null ? {
      kind: 'Argument',
      name: JS_FIELD_ID_ARG,
      type: jsFieldIdArg.type,
      value: {
        kind: 'Literal',
        loc: (_moduleDirective$args6 = (_moduleDirective$args7 = moduleDirective.args[0]) === null || _moduleDirective$args7 === void 0 ? void 0 : _moduleDirective$args7.loc) !== null && _moduleDirective$args6 !== void 0 ? _moduleDirective$args6 : moduleDirective.loc,
        value: moduleId
      },
      loc: moduleDirective.loc
    } : null].filter(Boolean),
    directives: [],
    handles: null,
    kind: 'ScalarField',
    loc: moduleDirective.loc,
    metadata: {
      skipNormalizationNode: true
    },
    name: JS_FIELD_NAME,
    type: jsModuleType
  };
  return {
    kind: 'InlineFragment',
    directives: [],
    loc: moduleDirective.loc,
    metadata: null,
    selections: [{
      kind: 'ModuleImport',
      loc: moduleDirective.loc,
      key: moduleKey,
      id: moduleId,
      module: moduleName,
      sourceDocument: documentName,
      name: spread.name,
      selections: [(0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, spread), {}, {
        directives: spread.directives.filter(function (directive) {
          return directive !== moduleDirective;
        })
      }), operationField, componentField]
    }],
    typeCondition: fragment.type
  };
}

module.exports = {
  SCHEMA_EXTENSION: SCHEMA_EXTENSION,
  transform: matchTransform
};