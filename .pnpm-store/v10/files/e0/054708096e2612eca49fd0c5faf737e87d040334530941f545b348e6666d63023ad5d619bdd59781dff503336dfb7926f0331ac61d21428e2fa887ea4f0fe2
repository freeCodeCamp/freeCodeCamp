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

var _createForOfIteratorHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/createForOfIteratorHelper"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var Profiler = require('./GraphQLCompilerProfiler');

var orList = require('../util/orList');

var partitionArray = require('../util/partitionArray');

var _require = require('../util/DefaultHandleKey'),
    DEFAULT_HANDLE_KEY = _require.DEFAULT_HANDLE_KEY;

var _require2 = require('./CompilerError'),
    createCompilerError = _require2.createCompilerError,
    createUserError = _require2.createUserError,
    eachWithCombinedError = _require2.eachWithCombinedError;

var _require3 = require('./SchemaUtils'),
    isExecutableDefinitionAST = _require3.isExecutableDefinitionAST;

var _require4 = require('./getFieldDefinition'),
    getFieldDefinitionLegacy = _require4.getFieldDefinitionLegacy;

var _require5 = require('graphql'),
    parseGraphQL = _require5.parse,
    parseType = _require5.parseType,
    print = _require5.print,
    Source = _require5.Source;

var ARGUMENT_DEFINITIONS = 'argumentDefinitions';
var ARGUMENTS = 'arguments';
var DEPRECATED_UNCHECKED_ARGUMENTS = 'uncheckedArguments_DEPRECATED';
var DIRECTIVE_WHITELIST = new Set([ARGUMENT_DEFINITIONS, DEPRECATED_UNCHECKED_ARGUMENTS, ARGUMENTS]);
/**
 * @internal
 *
 * This directive is not intended for use by developers directly. To set a field
 * handle in product code use a compiler plugin.
 */

var CLIENT_FIELD = '__clientField';
var CLIENT_FIELD_HANDLE = 'handle';
var CLIENT_FIELD_KEY = 'key';
var CLIENT_FIELD_FILTERS = 'filters';
var INCLUDE = 'include';
var SKIP = 'skip';
var IF = 'if';
/**
 * Transforms GraphQL text into Relay Compiler's internal, strongly-typed
 * intermediate representation (IR).
 */

function parse(schema, text, filename) {
  var ast = parseGraphQL(new Source(text, filename));
  var parser = new RelayParser(schema.extend(ast), ast.definitions);
  return parser.transform();
}
/**
 * Transforms untyped GraphQL parse trees (ASTs) into Relay Compiler's
 * internal, strongly-typed intermediate representation (IR).
 */


function transform(schema, definitions) {
  return Profiler.run('RelayParser.transform', function () {
    var parser = new RelayParser(schema, definitions);
    return parser.transform();
  });
}
/**
 * @private
 */


var RelayParser = /*#__PURE__*/function () {
  function RelayParser(schema, definitions) {
    var _this = this;

    this._definitions = new Map(); // leaving this configurable to make it easy to experiment w changing later

    this._getFieldDefinition = getFieldDefinitionLegacy;
    this._schema = schema;
    var duplicated = new Set();
    definitions.forEach(function (def) {
      if (isExecutableDefinitionAST(def)) {
        var name = getName(def);

        if (_this._definitions.has(name)) {
          duplicated.add(name);
          return;
        }

        _this._definitions.set(name, def);
      }
    });

    if (duplicated.size) {
      throw createUserError('RelayParser: Encountered duplicate definitions for one or more ' + 'documents: each document must have a unique name. Duplicated documents:\n' + Array.from(duplicated, function (name) {
        return "- ".concat(name);
      }).join('\n'));
    }
  }

  var _proto = RelayParser.prototype;

  _proto.transform = function transform() {
    var _this2 = this;

    var nodes = [];
    var entries = new Map(); // Construct a mapping of name to definition ast + variable definitions.
    // This allows the subsequent AST -> IR tranformation to reference the
    // defined arguments of referenced fragments.

    eachWithCombinedError(this._definitions, function (_ref) {
      var name = _ref[0],
          definition = _ref[1];

      var variableDefinitions = _this2._buildArgumentDefinitions(definition);

      entries.set(name, {
        definition: definition,
        variableDefinitions: variableDefinitions
      });
    }); // Convert the ASTs to IR.

    eachWithCombinedError(entries.values(), function (_ref2) {
      var definition = _ref2.definition,
          variableDefinitions = _ref2.variableDefinitions;
      var node = parseDefinition(_this2._schema, _this2._getFieldDefinition, entries, definition, variableDefinitions);
      nodes.push(node);
    });
    return nodes;
  }
  /**
   * Constructs a mapping of variable names to definitions for the given
   * operation/fragment definition.
   */
  ;

  _proto._buildArgumentDefinitions = function _buildArgumentDefinitions(definition) {
    switch (definition.kind) {
      case 'OperationDefinition':
        return this._buildOperationArgumentDefinitions(definition);

      case 'FragmentDefinition':
        return this._buildFragmentArgumentDefinitions(definition);

      default:
        definition;
        throw createCompilerError("Unexpected ast kind '".concat(definition.kind, "'."), [definition]);
    }
  }
  /**
   * Constructs a mapping of variable names to definitions using the
   * variables defined in `@argumentDefinitions`.
   */
  ;

  _proto._buildFragmentArgumentDefinitions = function _buildFragmentArgumentDefinitions(fragment) {
    var _this3 = this;

    var variableDirectives = (fragment.directives || []).filter(function (directive) {
      return getName(directive) === ARGUMENT_DEFINITIONS;
    });

    if (!variableDirectives.length) {
      return new Map();
    }

    if (variableDirectives.length !== 1) {
      throw createUserError("Directive @".concat(ARGUMENT_DEFINITIONS, " may be defined at most once per ") + 'fragment.', null, variableDirectives);
    }

    var variableDirective = variableDirectives[0]; // work, below accesses all report arguments could still be null/undefined.

    var args = variableDirective.arguments;

    if (variableDirective == null || !Array.isArray(args)) {
      return new Map();
    }

    if (!args.length) {
      throw createUserError("Directive @".concat(ARGUMENT_DEFINITIONS, " requires arguments: remove the ") + 'directive to skip defining local variables for this fragment.', null, [variableDirective]);
    }

    var variables = new Map();
    args.forEach(function (arg) {
      var _defaultValue$value;

      var argName = getName(arg);
      var previousVariable = variables.get(argName);

      if (previousVariable != null) {
        throw createUserError("Duplicate definition for variable '$".concat(argName, "'."), null, [previousVariable.ast, arg]);
      }

      if (arg.value.kind !== 'ObjectValue') {
        throw createUserError("Expected definition for variable '$".concat(argName, "' to be an object ") + "with the shape: '{type: string, defaultValue?: mixed}.", null, [arg.value]);
      }

      var defaultValueNode;
      var typeString;
      arg.value.fields.forEach(function (field) {
        var name = getName(field);

        if (name === 'type') {
          typeString = transformLiteralValue(field.value, field);
        } else if (name === 'defaultValue') {
          defaultValueNode = field.value;
        } else {
          throw createUserError("Expected definition for variable '$".concat(argName, "' to be an object ") + "with the shape: '{type: string, defaultValue?: mixed}.", null, [arg.value]);
        }
      });

      if (typeof typeString !== 'string') {
        throw createUserError("Expected definition for variable '$".concat(argName, "' to be an object ") + "with the shape: '{type: string, defaultValue?: mixed}.", null, [arg.value]);
      }

      var typeFromAST = _this3._schema.getTypeFromAST(parseType(typeString));

      if (typeFromAST == null) {
        throw createUserError( // $FlowFixMe[incompatible-type]
        "Unknown type \"".concat(typeString, "\" referenced in the argument definitions."), null, [arg]);
      }

      var type = _this3._schema.asInputType(typeFromAST);

      if (type == null) {
        throw createUserError( // $FlowFixMe[incompatible-type]
        "Expected type \"".concat(typeString, "\" to be an input type in the \"").concat(arg.name.value, "\" argument definitions."), null, [arg.value]);
      }

      var defaultValue = defaultValueNode != null ? transformValue(_this3._schema, defaultValueNode, type, function (variableAst) {
        throw createUserError("Expected 'defaultValue' to be a literal, got a variable.", null, [variableAst]);
      }) : null;

      if (defaultValue != null && defaultValue.kind !== 'Literal') {
        throw createUserError("Expected 'defaultValue' to be a literal, got a variable.", [defaultValue.loc]);
      }

      variables.set(argName, {
        ast: arg,
        defaultValue: (_defaultValue$value = defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.value) !== null && _defaultValue$value !== void 0 ? _defaultValue$value : null,
        defined: true,
        name: argName,
        type: type
      });
    });
    return variables;
  }
  /**
   * Constructs a mapping of variable names to definitions using the
   * standard GraphQL syntax for variable definitions.
   */
  ;

  _proto._buildOperationArgumentDefinitions = function _buildOperationArgumentDefinitions(operation) {
    var schema = this._schema;
    var variableDefinitions = new Map();
    (operation.variableDefinitions || []).forEach(function (def) {
      var name = getName(def.variable);
      var typeFromAST = schema.getTypeFromAST(def.type);

      if (typeFromAST == null) {
        throw createUserError("Unknown type: '".concat(getTypeName(def.type), "'."), null, [def.type]);
      }

      var type = schema.asInputType(typeFromAST);

      if (type == null) {
        throw createUserError("Expected type \"".concat(getTypeName(def.type), "\" to be an input type."), null, [def.type]);
      }

      var defaultValue = def.defaultValue ? transformLiteralValue(def.defaultValue, def) : null;
      var previousDefinition = variableDefinitions.get(name);

      if (previousDefinition != null) {
        throw createUserError("Duplicate definition for variable '$".concat(name, "'."), null, [previousDefinition.ast, def]);
      }

      variableDefinitions.set(name, {
        ast: def,
        defaultValue: defaultValue,
        defined: true,
        name: name,
        type: type
      });
    });
    return variableDefinitions;
  };

  return RelayParser;
}();
/**
 * @private
 */


function parseDefinition(schema, getFieldDefinition, entries, definition, variableDefinitions) {
  var parser = new GraphQLDefinitionParser(schema, getFieldDefinition, entries, definition, variableDefinitions);
  return parser.transform();
}
/**
 * @private
 */


var GraphQLDefinitionParser = /*#__PURE__*/function () {
  function GraphQLDefinitionParser(schema, getFieldDefinition, entries, definition, variableDefinitions) {
    this._definition = definition;
    this._entries = entries;
    this._getFieldDefinition = getFieldDefinition;
    this._schema = schema;
    this._variableDefinitions = variableDefinitions;
    this._unknownVariables = new Map();
  }

  var _proto2 = GraphQLDefinitionParser.prototype;

  _proto2.transform = function transform() {
    var definition = this._definition;

    switch (definition.kind) {
      case 'OperationDefinition':
        return this._transformOperation(definition);

      case 'FragmentDefinition':
        return this._transformFragment(definition);

      default:
        definition;
        throw createCompilerError("Unsupported definition type ".concat(definition.kind), [definition]);
    }
  };

  _proto2._recordAndVerifyVariableReference = function _recordAndVerifyVariableReference(variable, name, usedAsType) {
    // Special case for variables used in @arguments where we currently
    // aren't guaranteed to be able to resolve the type.
    if (usedAsType == null) {
      if (!this._variableDefinitions.has(name) && !this._unknownVariables.has(name)) {
        this._unknownVariables.set(name, {
          ast: variable,
          type: null
        });
      }

      return;
    }

    var variableDefinition = this._variableDefinitions.get(name);

    if (variableDefinition != null) {
      // If the variable is defined, all usages must be compatible
      var effectiveType = variableDefinition.type;

      if (variableDefinition.defaultValue != null) {
        // If a default value is defined then it is guaranteed to be used
        // at runtime such that the effective type of the variable is non-null
        effectiveType = this._schema.getNonNullType(this._schema.getNullableType(effectiveType));
      }

      if (!this._schema.isTypeSubTypeOf(effectiveType, usedAsType)) {
        throw createUserError("Variable '$".concat(name, "' was defined as type '").concat(String(variableDefinition.type), "' but used in a location expecting the type '").concat(String(usedAsType), "'"), null, [variableDefinition.ast, variable]);
      }
    } else {
      var previous = this._unknownVariables.get(name);

      if (!previous || !previous.type) {
        // No previous usage, current type is strongest
        this._unknownVariables.set(name, {
          ast: variable,
          type: usedAsType
        });
      } else {
        var previousVariable = previous.ast,
            previousType = previous.type;

        if (!(this._schema.isTypeSubTypeOf(usedAsType, previousType) || this._schema.isTypeSubTypeOf(previousType, usedAsType))) {
          throw createUserError("Variable '$".concat(name, "' was used in locations expecting the conflicting types '").concat(String(previousType), "' and '").concat(String(usedAsType), "'."), null, [previousVariable, variable]);
        } // If the new used type has stronger requirements, use that type as reference,
        // otherwise keep referencing the previous type


        if (this._schema.isTypeSubTypeOf(usedAsType, previousType)) {
          this._unknownVariables.set(name, {
            ast: variable,
            type: usedAsType
          });
        }
      }
    }
  };

  _proto2._getDirectiveLocations = function _getDirectiveLocations() {
    if (!this._directiveLocations) {
      var directiveDefs = this._schema.getDirectives();

      this._directiveLocations = new Map();

      var _iterator = (0, _createForOfIteratorHelper2["default"])(directiveDefs),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var def = _step.value;

          this._directiveLocations.set(def.name, def.locations);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    return this._directiveLocations;
  };

  _proto2._validateDirectivesLocation = function _validateDirectivesLocation(directives, allowedLocaction) {
    if (!directives || !directives.length) {
      return;
    }

    var directiveLocs = this._getDirectiveLocations();

    var mismatches = directives.filter(function (directive) {
      var name = getName(directive);

      if (DIRECTIVE_WHITELIST.has(name)) {
        return false;
      }

      var locs = directiveLocs.get(name);

      if (locs == null) {
        throw createUserError("Unknown directive '".concat(name, "'."), null, [directive]);
      }

      return !locs.some(function (loc) {
        return loc === allowedLocaction;
      });
    });

    if (mismatches.length) {
      var invalidDirectives = mismatches.map(function (directive) {
        return '@' + getName(directive);
      }).join(', ');
      throw createUserError("Invalid directives ".concat(invalidDirectives, " found on ").concat(allowedLocaction, "."), null, mismatches);
    }
  };

  _proto2._transformFragment = function _transformFragment(fragment) {
    var directives = this._transformDirectives((fragment.directives || []).filter(function (directive) {
      return getName(directive) !== ARGUMENT_DEFINITIONS;
    }), 'FRAGMENT_DEFINITION');

    var typeFromAST = this._schema.getTypeFromAST(fragment.typeCondition);

    if (typeFromAST == null) {
      throw createUserError("Fragment \"".concat(fragment.name.value, "\" cannot condition on unknown ") + "type \"".concat(String(fragment.typeCondition.name.value), "\"."), null, [fragment.typeCondition]);
    }

    var type = this._schema.asCompositeType(typeFromAST);

    if (type == null) {
      throw createUserError("Fragment \"".concat(fragment.name.value, "\" cannot condition on non composite ") + "type \"".concat(String(type), "\"."), null, [fragment.typeCondition]);
    }

    var selections = this._transformSelections(fragment.selectionSet, type, fragment.typeCondition);

    var argumentDefinitions = (0, _toConsumableArray2["default"])(buildArgumentDefinitions(this._variableDefinitions));

    var _iterator2 = (0, _createForOfIteratorHelper2["default"])(this._unknownVariables),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _step2$value = _step2.value,
            name = _step2$value[0],
            variableReference = _step2$value[1];
        argumentDefinitions.push({
          kind: 'RootArgumentDefinition',
          loc: buildLocation(variableReference.ast.loc),
          name: name,
          type: variableReference.type
        });
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return {
      kind: 'Fragment',
      directives: directives,
      loc: buildLocation(fragment.loc),
      metadata: null,
      name: getName(fragment),
      selections: selections,
      type: type,
      // $FlowFixMe[incompatible-return] - could be null
      argumentDefinitions: argumentDefinitions
    };
  };

  _proto2._getLocationFromOperation = function _getLocationFromOperation(definition) {
    switch (definition.operation) {
      case 'query':
        return 'QUERY';

      case 'mutation':
        return 'MUTATION';

      case 'subscription':
        return 'SUBSCRIPTION';

      default:
        definition.operation;
        throw createCompilerError("Unknown operation type '".concat(definition.operation, "'."), null, [definition]);
    }
  };

  _proto2._transformOperation = function _transformOperation(definition) {
    var name = getName(definition);

    var directives = this._transformDirectives(definition.directives || [], this._getLocationFromOperation(definition));

    var type;
    var operation;
    var schema = this._schema;

    switch (definition.operation) {
      case 'query':
        operation = 'query';
        type = schema.expectQueryType();
        break;

      case 'mutation':
        operation = 'mutation';
        type = schema.expectMutationType();
        break;

      case 'subscription':
        operation = 'subscription';
        type = schema.expectSubscriptionType();
        break;

      default:
        definition.operation;
        throw createCompilerError("Unknown operation type '".concat(definition.operation, "'."), null, [definition]);
    }

    if (!definition.selectionSet) {
      throw createUserError('Expected operation to have selections.', null, [definition]);
    }

    var selections = this._transformSelections(definition.selectionSet, type);

    var argumentDefinitions = buildArgumentDefinitions(this._variableDefinitions);

    if (this._unknownVariables.size !== 0) {
      throw createUserError("Query '".concat(name, "' references undefined variables."), null, Array.from(this._unknownVariables.values(), function (variableReference) {
        return variableReference.ast;
      }));
    }

    return {
      kind: 'Root',
      operation: operation,
      loc: buildLocation(definition.loc),
      metadata: null,
      name: name,
      argumentDefinitions: argumentDefinitions,
      directives: directives,
      selections: selections,
      // $FlowFixMe[incompatible-return]
      type: type
    };
  };

  _proto2._transformSelections = function _transformSelections(selectionSet, parentType, parentTypeAST) {
    var _this4 = this;

    return selectionSet.selections.map(function (selection) {
      var node;

      if (selection.kind === 'Field') {
        node = _this4._transformField(selection, parentType);
      } else if (selection.kind === 'FragmentSpread') {
        node = _this4._transformFragmentSpread(selection, parentType, parentTypeAST);
      } else if (selection.kind === 'InlineFragment') {
        node = _this4._transformInlineFragment(selection, parentType, parentTypeAST);
      } else {
        selection.kind;
        throw createCompilerError("Unknown ast kind '".concat(selection.kind, "'."), [selection]);
      }

      var _this4$_splitConditio = _this4._splitConditions(node.directives),
          conditions = _this4$_splitConditio[0],
          directives = _this4$_splitConditio[1];

      var conditionalNodes = applyConditions(conditions, // $FlowFixMe[incompatible-call]
      [(0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, node), {}, {
        directives: directives
      })]);

      if (conditionalNodes.length !== 1) {
        throw createCompilerError('Expected exactly one condition node.', null, selection.directives);
      }

      return conditionalNodes[0];
    });
  };

  _proto2._transformInlineFragment = function _transformInlineFragment(fragment, parentType, parentTypeAST) {
    var schema = this._schema;
    var typeCondition = fragment.typeCondition != null ? schema.getTypeFromAST(fragment.typeCondition) : parentType;

    if (typeCondition == null) {
      var _fragment$typeConditi;

      throw createUserError('Inline fragments can only be on object, interface or union types' + ", got unknown type '".concat(getTypeName(fragment.typeCondition), "'."), null, [(_fragment$typeConditi = fragment.typeCondition) !== null && _fragment$typeConditi !== void 0 ? _fragment$typeConditi : fragment]);
    }

    var typeConditionName = schema.getTypeString(typeCondition);
    typeCondition = schema.asCompositeType(typeCondition);

    if (typeCondition == null) {
      var _fragment$typeConditi2;

      throw createUserError('Inline fragments can only be on object, interface or union types' + ", got '".concat(typeConditionName, "'."), null, [(_fragment$typeConditi2 = fragment.typeCondition) !== null && _fragment$typeConditi2 !== void 0 ? _fragment$typeConditi2 : fragment]);
    }

    var rawParentType = this._schema.assertCompositeType(this._schema.getRawType(parentType));

    checkFragmentSpreadTypeCompatibility(this._schema, typeCondition, rawParentType, null, fragment.typeCondition, parentTypeAST);

    var directives = this._transformDirectives(fragment.directives || [], 'INLINE_FRAGMENT');

    var selections = this._transformSelections(fragment.selectionSet, typeCondition, fragment.typeCondition);

    return {
      kind: 'InlineFragment',
      directives: directives,
      loc: buildLocation(fragment.loc),
      metadata: null,
      selections: selections,
      typeCondition: typeCondition
    };
  };

  _proto2._transformFragmentSpread = function _transformFragmentSpread(fragmentSpread, parentType, parentTypeAST) {
    var _this5 = this;

    var fragmentName = getName(fragmentSpread);

    var _partitionArray = partitionArray(fragmentSpread.directives || [], function (directive) {
      var name = getName(directive);
      return name === ARGUMENTS || name === DEPRECATED_UNCHECKED_ARGUMENTS;
    }),
        argumentDirectives = _partitionArray[0],
        otherDirectives = _partitionArray[1];

    if (argumentDirectives.length > 1) {
      throw createUserError("Directive @".concat(ARGUMENTS, " may be used at most once per a fragment spread."), null, argumentDirectives);
    }

    var fragmentDefinition = this._entries.get(fragmentName);

    if (fragmentDefinition == null) {
      throw createUserError("Unknown fragment '".concat(fragmentName, "'."), null, [fragmentSpread.name]);
    }

    var fragmentTypeNode = getFragmentType(fragmentDefinition.definition);

    var fragmentType = this._schema.assertCompositeType(this._schema.expectTypeFromAST(fragmentTypeNode));

    var rawParentType = this._schema.assertCompositeType(this._schema.getRawType(parentType));

    checkFragmentSpreadTypeCompatibility(this._schema, fragmentType, rawParentType, fragmentSpread.name.value, fragmentSpread, parentTypeAST);
    var fragmentArgumentDefinitions = fragmentDefinition.variableDefinitions;
    var argumentsDirective = argumentDirectives[0];
    var args;

    if (argumentsDirective != null) {
      var isDeprecatedUncheckedArguments = getName(argumentsDirective) === DEPRECATED_UNCHECKED_ARGUMENTS;
      var hasInvalidArgument = false;
      args = (argumentsDirective.arguments || []).map(function (arg) {
        var _argumentDefinition$t;

        var argName = getName(arg);
        var argValue = arg.value;
        var argumentDefinition = fragmentArgumentDefinitions.get(argName);
        var argumentType = (_argumentDefinition$t = argumentDefinition === null || argumentDefinition === void 0 ? void 0 : argumentDefinition.type) !== null && _argumentDefinition$t !== void 0 ? _argumentDefinition$t : null;

        if (argValue.kind === 'Variable') {
          if (argumentDefinition == null && !isDeprecatedUncheckedArguments) {
            throw createUserError("Variable @".concat(ARGUMENTS, " values are only supported when the ") + "argument is defined with @".concat(ARGUMENT_DEFINITIONS, ". Check ") + "the definition of fragment '".concat(fragmentName, "'."), null, [arg.value, fragmentDefinition.definition]);
          }

          hasInvalidArgument = hasInvalidArgument || argumentDefinition == null; // TODO: check the type of the variable and use the type

          return {
            kind: 'Argument',
            loc: buildLocation(arg.loc),
            name: argName,
            value: _this5._transformVariable(argValue, null),
            type: null
          };
        } else {
          if (argumentType == null) {
            throw createUserError("Literal @".concat(ARGUMENTS, " values are only supported when the ") + "argument is defined with @".concat(ARGUMENT_DEFINITIONS, ". Check ") + "the definition of fragment '".concat(fragmentName, "'."), null, [arg.value, fragmentDefinition.definition]);
          }

          var value = _this5._transformValue(argValue, argumentType);

          return {
            kind: 'Argument',
            loc: buildLocation(arg.loc),
            name: argName,
            value: value,
            type: argumentType
          };
        }
      });

      if (isDeprecatedUncheckedArguments && !hasInvalidArgument) {
        throw createUserError("Invalid use of @".concat(DEPRECATED_UNCHECKED_ARGUMENTS, ": all arguments ") + "are defined, use @".concat(ARGUMENTS, " instead."), null, [argumentsDirective]);
      }
    }

    var directives = this._transformDirectives(otherDirectives, 'FRAGMENT_SPREAD');

    return {
      kind: 'FragmentSpread',
      args: args || [],
      metadata: null,
      loc: buildLocation(fragmentSpread.loc),
      name: fragmentName,
      directives: directives
    };
  };

  _proto2._transformField = function _transformField(field, parentType) {
    var _field$alias$value, _field$alias;

    var schema = this._schema;
    var name = getName(field);

    var fieldDef = this._getFieldDefinition(schema, parentType, name, field);

    if (fieldDef == null) {
      throw createUserError("Unknown field '".concat(name, "' on type '").concat(schema.getTypeString(parentType), "'."), null, [field]);
    }

    var alias = (_field$alias$value = (_field$alias = field.alias) === null || _field$alias === void 0 ? void 0 : _field$alias.value) !== null && _field$alias$value !== void 0 ? _field$alias$value : name;

    var args = this._transformArguments(field.arguments || [], schema.getFieldArgs(fieldDef), fieldDef);

    var _partitionArray2 = partitionArray(field.directives || [], function (directive) {
      return getName(directive) !== CLIENT_FIELD;
    }),
        otherDirectives = _partitionArray2[0],
        clientFieldDirectives = _partitionArray2[1];

    var directives = this._transformDirectives(otherDirectives, 'FIELD');

    var type = schema.getFieldType(fieldDef);

    var handles = this._transformHandle(name, args, clientFieldDirectives);

    if (schema.isLeafType(schema.getRawType(type))) {
      if (field.selectionSet && field.selectionSet.selections && field.selectionSet.selections.length) {
        throw createUserError("Expected no selections for scalar field '".concat(name, "'."), null, [field]);
      }

      return {
        kind: 'ScalarField',
        alias: alias,
        args: args,
        directives: directives,
        handles: handles,
        loc: buildLocation(field.loc),
        metadata: null,
        name: name,
        type: schema.assertScalarFieldType(type)
      };
    } else {
      var selections = field.selectionSet ? this._transformSelections(field.selectionSet, type) : null;

      if (selections == null || selections.length === 0) {
        throw createUserError("Expected at least one selection for non-scalar field '".concat(name, "' on type '").concat(schema.getTypeString(type), "'."), null, [field]);
      }

      return {
        kind: 'LinkedField',
        alias: alias,
        args: args,
        connection: false,
        directives: directives,
        handles: handles,
        loc: buildLocation(field.loc),
        metadata: null,
        name: name,
        selections: selections,
        type: schema.assertLinkedFieldType(type)
      };
    }
  };

  _proto2._transformHandle = function _transformHandle(fieldName, fieldArgs, clientFieldDirectives) {
    var handles = null;
    clientFieldDirectives.forEach(function (clientFieldDirective) {
      var handleArgument = (clientFieldDirective.arguments || []).find(function (arg) {
        return getName(arg) === CLIENT_FIELD_HANDLE;
      });

      if (handleArgument) {
        var name = null;
        var key = DEFAULT_HANDLE_KEY;
        var filters = null;
        var maybeHandle = transformLiteralValue(handleArgument.value, handleArgument);

        if (typeof maybeHandle !== 'string') {
          throw createUserError("Expected a string literal argument for the @".concat(CLIENT_FIELD, " directive."), null, [handleArgument.value]);
        }

        name = maybeHandle;
        var keyArgument = (clientFieldDirective.arguments || []).find(function (arg) {
          return getName(arg) === CLIENT_FIELD_KEY;
        });

        if (keyArgument) {
          var maybeKey = transformLiteralValue(keyArgument.value, keyArgument);

          if (typeof maybeKey !== 'string') {
            throw createUserError("Expected a string literal argument for the @".concat(CLIENT_FIELD, " directive."), null, [keyArgument.value]);
          }

          key = maybeKey;
        }

        var filtersArgument = (clientFieldDirective.arguments || []).find(function (arg) {
          return getName(arg) === CLIENT_FIELD_FILTERS;
        });

        if (filtersArgument) {
          var maybeFilters = transformLiteralValue(filtersArgument.value, filtersArgument);

          if (!(Array.isArray(maybeFilters) && maybeFilters.every(function (filter) {
            return typeof filter === 'string' && fieldArgs.some(function (fieldArg) {
              return fieldArg.name === filter;
            });
          }))) {
            throw createUserError("Expected an array of argument names on field '".concat(fieldName, "'."), null, [filtersArgument.value]);
          } // $FlowFixMe[incompatible-cast]


          filters = maybeFilters;
        }

        var dynamicKeyArgument = (clientFieldDirective.arguments || []).find(function (arg) {
          return getName(arg) === 'dynamicKey_UNSTABLE';
        });

        if (dynamicKeyArgument != null) {
          throw createUserError('Dynamic keys are only supported with @connection.', null, [dynamicKeyArgument.value]);
        }

        handles = handles || [];
        handles.push({
          name: name,
          key: key,
          filters: filters,
          dynamicKey: null
        });
      }
    });
    return handles;
  };

  _proto2._transformDirectives = function _transformDirectives(directives, location) {
    var _this6 = this;

    this._validateDirectivesLocation(directives, location);

    return directives.map(function (directive) {
      var name = getName(directive);

      var directiveDef = _this6._schema.getDirective(name);

      if (directiveDef == null) {
        throw createUserError("Unknown directive '".concat(name, "'."), null, [directive]);
      }

      var args = _this6._transformArguments(directive.arguments || [], directiveDef.args.map(function (item) {
        return {
          name: item.name,
          type: item.type,
          defaultValue: item.defaultValue
        };
      }), null, name);

      return {
        kind: 'Directive',
        loc: buildLocation(directive.loc),
        name: name,
        args: args
      };
    });
  };

  _proto2._transformArguments = function _transformArguments(args, argumentDefinitions, field, directiveName) {
    var _this7 = this;

    return args.map(function (arg) {
      var argName = getName(arg);
      var argDef = argumentDefinitions.find(function (def) {
        return def.name === argName;
      });

      if (argDef == null) {
        var message = "Unknown argument '".concat(argName, "'") + (field ? " on field '".concat(_this7._schema.getFieldName(field), "'") + " of type '".concat(_this7._schema.getTypeString(_this7._schema.getFieldParentType(field)), "'.") : directiveName != null ? " on directive '@".concat(directiveName, "'.") : '.');
        throw createUserError(message, null, [arg]);
      }

      var value = _this7._transformValue(arg.value, argDef.type);

      return {
        kind: 'Argument',
        loc: buildLocation(arg.loc),
        name: argName,
        value: value,
        type: argDef.type
      };
    });
  };

  _proto2._splitConditions = function _splitConditions(mixedDirectives) {
    var _partitionArray3 = partitionArray(mixedDirectives, function (directive) {
      return directive.name === INCLUDE || directive.name === SKIP;
    }),
        conditionDirectives = _partitionArray3[0],
        otherDirectives = _partitionArray3[1];

    var conditions = conditionDirectives.map(function (directive) {
      var passingValue = directive.name === INCLUDE;
      var arg = directive.args[0];

      if (arg == null || arg.name !== IF) {
        throw createUserError("Expected an 'if' argument to @".concat(directive.name, "."), [directive.loc]);
      }

      if (!(arg.value.kind === 'Variable' || arg.value.kind === 'Literal')) {
        throw createUserError("Expected the 'if' argument to @".concat(directive.name, " to be a variable or literal."), [directive.loc]);
      }

      return {
        kind: 'Condition',
        condition: arg.value,
        loc: directive.loc,
        passingValue: passingValue,
        selections: []
      };
    });
    var sortedConditions = conditions.sort(function (a, b) {
      if (a.condition.kind === 'Variable' && b.condition.kind === 'Variable') {
        return a.condition.variableName < b.condition.variableName ? -1 : a.condition.variableName > b.condition.variableName ? 1 : 0;
      } else {
        // sort literals earlier, variables later
        return a.condition.kind === 'Variable' ? 1 : b.condition.kind === 'Variable' ? -1 : 0;
      }
    });
    return [sortedConditions, otherDirectives];
  };

  _proto2._transformVariable = function _transformVariable(ast, usedAsType) {
    var variableName = getName(ast);

    this._recordAndVerifyVariableReference(ast, variableName, usedAsType);

    return {
      kind: 'Variable',
      loc: buildLocation(ast.loc),
      variableName: variableName,
      type: usedAsType
    };
  };

  _proto2._transformValue = function _transformValue(ast, type) {
    var _this8 = this;

    return transformValue(this._schema, ast, type, function (variableAst, variableType) {
      return _this8._transformVariable(variableAst, variableType);
    });
  };

  return GraphQLDefinitionParser;
}();
/**
 * Transforms and validates argument values according to the expected
 * type.
 */


function transformValue(schema, ast, type, transformVariable) {
  if (ast.kind === 'Variable') {
    // Special case variables since there is no value to parse
    return transformVariable(ast, type);
  } else if (ast.kind === 'NullValue') {
    // Special case null literals since there is no value to parse
    if (schema.isNonNull(type)) {
      throw createUserError("Expected a value matching type '".concat(String(type), "'."), null, [ast]);
    }

    return {
      kind: 'Literal',
      loc: buildLocation(ast.loc),
      value: null
    };
  } else {
    return transformNonNullLiteral(schema, ast, type, transformVariable);
  }
}
/**
 * Transforms and validates non-null literal (non-variable) values
 * according to the expected type.
 */


function transformNonNullLiteral(schema, ast, type, transformVariable) {
  // Transform the value based on the type without a non-null wrapper.
  // Note that error messages should still use the original `type`
  // since that accurately describes to the user what the expected
  // type is (using nullableType would suggest that `null` is legal
  // even when it may not be, for example).
  var nullableType = schema.getNullableType(type);

  if (schema.isList(nullableType)) {
    if (ast.kind !== 'ListValue') {
      // Parse singular (non-list) values flowing into a list type
      // as scalars, ie without wrapping them in an array.
      if (!schema.isInputType(schema.getListItemType(nullableType))) {
        throw createUserError("Expected type ".concat(schema.getTypeString(nullableType), " to be an input type."), null, [ast]);
      }

      return transformValue(schema, ast, schema.assertInputType(schema.getListItemType(nullableType)), transformVariable);
    }

    var itemType = schema.assertInputType(schema.getListItemType(nullableType));
    var literalList = [];
    var items = [];
    var areAllItemsScalar = true;
    ast.values.forEach(function (item) {
      var itemValue = transformValue(schema, item, itemType, transformVariable);

      if (itemValue.kind === 'Literal') {
        literalList.push(itemValue.value);
      }

      items.push(itemValue);
      areAllItemsScalar = areAllItemsScalar && itemValue.kind === 'Literal';
    });

    if (areAllItemsScalar) {
      return {
        kind: 'Literal',
        loc: buildLocation(ast.loc),
        value: literalList
      };
    } else {
      return {
        kind: 'ListValue',
        loc: buildLocation(ast.loc),
        items: items
      };
    }
  } else if (schema.isInputObject(nullableType)) {
    if (ast.kind !== 'ObjectValue') {
      throw createUserError("Expected a value matching type '".concat(schema.getTypeString(type), "'."), null, [ast]);
    }

    var literalObject = {};
    var fields = [];
    var areAllFieldsScalar = true;
    var inputType = schema.assertInputObjectType(nullableType);
    var requiredFieldNames = new Set(schema.getFields(inputType).filter(function (field) {
      return schema.isNonNull(schema.getFieldType(field));
    }).map(function (field) {
      return schema.getFieldName(field);
    }));
    var seenFields = new Map();
    ast.fields.forEach(function (field) {
      var fieldName = getName(field);
      var seenField = seenFields.get(fieldName);

      if (seenField) {
        throw createUserError("Duplicated field name '".concat(fieldName, "' in the input object."), null, [field, seenField]);
      }

      var fieldID = schema.getFieldByName(inputType, fieldName);

      if (!fieldID) {
        throw createUserError("Unknown field '".concat(fieldName, "' on type '").concat(schema.getTypeString(inputType), "'."), null, [field]);
      }

      var fieldConfig = schema.getFieldConfig(fieldID);
      var fieldType = schema.assertInputType(fieldConfig.type);
      var fieldValue = transformValue(schema, field.value, fieldType, transformVariable);

      if (fieldValue.kind === 'Literal') {
        literalObject[field.name.value] = fieldValue.value;
      }

      fields.push({
        kind: 'ObjectFieldValue',
        loc: buildLocation(field.loc),
        name: fieldName,
        value: fieldValue
      });
      seenFields.set(fieldName, field);
      requiredFieldNames["delete"](fieldName);
      areAllFieldsScalar = areAllFieldsScalar && fieldValue.kind === 'Literal';
    });

    if (requiredFieldNames.size > 0) {
      var requiredFieldStr = Array.from(requiredFieldNames).map(function (item) {
        return "'".concat(item, "'");
      }).join(', ');
      throw createUserError("Missing non-optional field".concat(requiredFieldNames.size > 1 ? 's:' : '', " ").concat(requiredFieldStr, " for input type '").concat(schema.getTypeString(inputType), "'."), null, [ast]);
    }

    if (areAllFieldsScalar) {
      return {
        kind: 'Literal',
        loc: buildLocation(ast.loc),
        value: literalObject
      };
    } else {
      return {
        kind: 'ObjectValue',
        loc: buildLocation(ast.loc),
        fields: fields
      };
    }
  } else if (schema.isId(nullableType)) {
    // GraphQLID's parseLiteral() always returns the string value. However
    // the int/string distinction may be important at runtime, so this
    // transform parses int/string literals into the corresponding JS types.
    if (ast.kind === 'IntValue') {
      return {
        kind: 'Literal',
        loc: buildLocation(ast.loc),
        value: parseInt(ast.value, 10)
      };
    } else if (ast.kind === 'StringValue') {
      return {
        kind: 'Literal',
        loc: buildLocation(ast.loc),
        value: ast.value
      };
    } else {
      throw createUserError("Invalid value, expected a value matching type '".concat(schema.getTypeString(type), "'."), null, [ast]);
    }
  } else if (schema.isEnum(nullableType)) {
    var enumType = schema.assertEnumType(nullableType);
    var value = schema.parseLiteral(enumType, ast);

    if (value == null) {
      var suggestions = schema.getEnumValues(enumType); // parseLiteral() should return a non-null JavaScript value
      // if the ast value is valid for the type.

      throw createUserError("Expected a value matching type '".concat(schema.getTypeString(type), "'. Possible values: ").concat(orList(suggestions), "?'"), null, [ast]);
    }

    return {
      kind: 'Literal',
      loc: buildLocation(ast.loc),
      value: value
    };
  } else if (schema.isScalar(nullableType)) {
    var _value = schema.parseLiteral(schema.assertScalarType(nullableType), ast);

    if (_value == null) {
      // parseLiteral() should return a non-null JavaScript value
      // if the ast value is valid for the type.
      throw createUserError("Expected a value matching type '".concat(schema.getTypeString(type), "'."), null, [ast]);
    }

    return {
      kind: 'Literal',
      loc: buildLocation(ast.loc),
      value: _value
    };
  } else {
    throw createCompilerError("Unsupported type '".concat(schema.getTypeString(type), "' for input value, expected a GraphQLList, ") + 'GraphQLInputObjectType, GraphQLEnumType, or GraphQLScalarType.', null, [ast]);
  }
}
/**
 * @private
 */


function transformLiteralValue(ast, context) {
  switch (ast.kind) {
    case 'IntValue':
      return parseInt(ast.value, 10);

    case 'FloatValue':
      return parseFloat(ast.value);

    case 'StringValue':
      return ast.value;

    case 'BooleanValue':
      // Note: duplicated because Flow does not understand fall-through cases
      return ast.value;

    case 'EnumValue':
      // Note: duplicated because Flow does not understand fall-through cases
      return ast.value;

    case 'ListValue':
      return ast.values.map(function (item) {
        return transformLiteralValue(item, context);
      });

    case 'NullValue':
      return null;

    case 'ObjectValue':
      {
        var objectValue = {};
        ast.fields.forEach(function (field) {
          var fieldName = getName(field);
          var value = transformLiteralValue(field.value, context);
          objectValue[fieldName] = value;
        });
        return objectValue;
      }

    case 'Variable':
      throw createUserError('Unexpected variable where a literal (static) value is required.', null, [ast, context]);

    default:
      ast.kind;
      throw createCompilerError("Unknown ast kind '".concat(ast.kind, "'."), [ast]);
  }
}
/**
 * @private
 */


function buildArgumentDefinitions(variables) {
  return Array.from(variables.values(), function (_ref3) {
    var ast = _ref3.ast,
        name = _ref3.name,
        defaultValue = _ref3.defaultValue,
        type = _ref3.type;
    return {
      kind: 'LocalArgumentDefinition',
      loc: buildLocation(ast.loc),
      name: name,
      type: type,
      defaultValue: defaultValue
    };
  });
}
/**
 * @private
 */


function buildLocation(loc) {
  if (loc == null) {
    return {
      kind: 'Unknown'
    };
  }

  return {
    kind: 'Source',
    start: loc.start,
    end: loc.end,
    source: loc.source
  };
}
/**
 * @private
 */


function applyConditions(conditions, selections) {
  var nextSelections = selections;
  conditions.forEach(function (condition) {
    nextSelections = [(0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, condition), {}, {
      selections: nextSelections
    })];
  });
  return nextSelections;
}
/**
 * @private
 */


function getName(ast) {
  var _ast$name;

  var name = (_ast$name = ast.name) === null || _ast$name === void 0 ? void 0 : _ast$name.value;

  if (typeof name !== 'string') {
    throw createCompilerError("Expected ast node to have a 'name'.", null, [ast]);
  }

  return name;
}

function getTypeName(ast) {
  return ast ? print(ast) : 'Undefined Type Name';
}
/**
 * @private
 */


function getFragmentType(ast) {
  if (ast.kind === 'FragmentDefinition') {
    return ast.typeCondition;
  }

  throw createCompilerError('Expected ast node to be a FragmentDefinition node.', null, [ast]);
}

function checkFragmentSpreadTypeCompatibility(schema, fragmentType, parentType, fragmentName, fragmentTypeAST, parentTypeAST) {
  if (!schema.doTypesOverlap(fragmentType, schema.assertCompositeType(parentType))) {
    var nodes = [];

    if (parentTypeAST) {
      nodes.push(parentTypeAST);
    }

    if (fragmentTypeAST) {
      nodes.push(fragmentTypeAST);
    }

    var possibleConcreteTypes = schema.isAbstractType(parentType) ? Array.from(schema.getPossibleTypes(schema.assertAbstractType(parentType))) : [];
    var suggestedTypesMessage = '';

    if (possibleConcreteTypes.length !== 0) {
      suggestedTypesMessage = " Possible concrete types include ".concat(possibleConcreteTypes.sort().slice(0, 3).map(function (type) {
        return "'".concat(schema.getTypeString(type), "'");
      }).join(', '), ", etc.");
    }

    throw createUserError((fragmentName != null ? "Fragment '".concat(fragmentName, "' cannot be spread here as objects of ") : 'Fragment cannot be spread here as objects of ') + "type '".concat(schema.getTypeString(parentType), "' ") + "can never be of type '".concat(schema.getTypeString(fragmentType), "'.") + suggestedTypesMessage, null, nodes);
  }
}

module.exports = {
  parse: parse,
  transform: transform
};