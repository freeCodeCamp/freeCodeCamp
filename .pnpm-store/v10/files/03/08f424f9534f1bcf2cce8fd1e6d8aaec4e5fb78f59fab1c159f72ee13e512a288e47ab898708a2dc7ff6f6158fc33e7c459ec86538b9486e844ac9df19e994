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

var IRTransformer = require('../core/IRTransformer');

var RelayCompilerScope = require('../core/RelayCompilerScope');

var getIdentifierForArgumentValue = require('../core/getIdentifierForArgumentValue');

var murmurHash = require('../util/murmurHash');

var _require = require('../core/CompilerError'),
    createCompilerError = _require.createCompilerError,
    createNonRecoverableUserError = _require.createNonRecoverableUserError;

var getFragmentScope = RelayCompilerScope.getFragmentScope,
    getRootScope = RelayCompilerScope.getRootScope;

/**
 * A transform that converts a set of documents containing fragments/fragment
 * spreads *with* arguments to one where all arguments have been inlined. This
 * is effectively static currying of functions. Nodes are changed as follows:
 * - Fragment spreads with arguments are replaced with references to an inlined
 *   version of the referenced fragment.
 * - Fragments with argument definitions are cloned once per unique set of
 *   arguments, with the name changed to original name + hash and all nested
 *   variable references changed to the value of that variable given its
 *   arguments.
 * - Field & directive argument variables are replaced with the value of those
 *   variables in context.
 * - All nodes are cloned with updated children.
 *
 * The transform also handles statically passing/failing Condition nodes:
 * - Literal Conditions with a passing value are elided and their selections
 *   inlined in their parent.
 * - Literal Conditions with a failing value are removed.
 * - Nodes that would become empty as a result of the above are removed.
 *
 * Note that unreferenced fragments are not added to the output.
 */
function applyFragmentArgumentTransform(context) {
  var fragments = new Map();
  var nextContext = IRTransformer.transform(context, {
    Root: function Root(node) {
      var scope = getRootScope(node.argumentDefinitions);
      return transformNode(context, fragments, scope, node, [node]);
    },
    SplitOperation: function SplitOperation(node) {
      return transformNode(context, fragments, {}, node, [node]);
    },
    // Fragments are included below where referenced.
    // Unreferenced fragments are not included.
    Fragment: function Fragment() {
      return null;
    }
  });

  var _iterator = (0, _createForOfIteratorHelper2["default"])(fragments.values()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var pendingFragment = _step.value;

      if (pendingFragment.kind === 'resolved' && pendingFragment.value) {
        nextContext = nextContext.add(pendingFragment.value);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return nextContext;
}

function transformNode(context, fragments, scope, node, errorContext) {
  var selections = transformSelections(context, fragments, scope, node.selections, errorContext);

  if (!selections) {
    return null;
  }

  if (node.hasOwnProperty('directives')) {
    var directives = transformDirectives(scope, node.directives, errorContext);
    return (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, node), {}, {
      directives: directives,
      selections: selections
    });
  }

  return (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, node), {}, {
    selections: selections
  });
}

function transformDeferStreamNode(context, fragments, scope, node, errorContext) {
  var nextNode = transformNode(context, fragments, scope, node, errorContext);

  if (!nextNode) {
    return null;
  }

  nextNode;

  if (nextNode["if"]) {
    var ifVal = transformValue(scope, nextNode["if"], errorContext);

    if (ifVal.kind === 'Literal' && ifVal.value === false && node.selections && node.selections.length === 1) {
      // Skip Defer/Stream wrapper with literal if: false
      return node.selections[0];
    } // $FlowFixMe[cannot-write] nextNode is uniquely owned


    nextNode["if"] = ifVal;
  }

  if (nextNode.useCustomizedBatch) {
    // $FlowFixMe[cannot-write] nextNode is uniquely owned
    nextNode.useCustomizedBatch = transformValue(scope, nextNode.useCustomizedBatch, errorContext);
  }

  if (nextNode.initialCount) {
    // $FlowFixMe[cannot-write] nextNode is uniquely owned
    nextNode.initialCount = transformValue(scope, nextNode.initialCount, errorContext);
  }

  return nextNode;
}

function transformFragmentSpread(context, fragments, scope, spread, errorContext) {
  var directives = transformDirectives(scope, spread.directives, errorContext);
  var appliedFragment = transformFragment(context, fragments, scope, spread, spread.args, [].concat((0, _toConsumableArray2["default"])(errorContext), [spread]));

  if (!appliedFragment) {
    return null;
  }

  var transformed = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, spread), {}, {
    kind: 'FragmentSpread',
    args: [],
    directives: directives,
    name: appliedFragment.name
  });
  return transformed;
}

function transformField(context, fragments, scope, field, errorContext) {
  var args = transformArguments(scope, field.args, errorContext);
  var directives = transformDirectives(scope, field.directives, errorContext);

  if (field.kind === 'LinkedField') {
    var selections = transformSelections(context, fragments, scope, field.selections, errorContext);

    if (!selections) {
      return null;
    }

    return (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, field), {}, {
      args: args,
      directives: directives,
      selections: selections
    });
  } else {
    return (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, field), {}, {
      args: args,
      directives: directives
    });
  }
}

function transformCondition(context, fragments, scope, node, errorContext) {
  var condition = transformValue(scope, node.condition, errorContext);

  if (!(condition.kind === 'Literal' || condition.kind === 'Variable')) {
    // This transform does whole-program optimization, errors in
    // a single document could break invariants and/or cause
    // additional spurious errors.
    throw createNonRecoverableUserError('A non-scalar value was applied to an @include or @skip directive, ' + 'the `if` argument value must be a ' + 'variable or a literal Boolean.', [condition.loc]);
  }

  if (condition.kind === 'Literal' && condition.value !== node.passingValue) {
    // Dead code, no need to traverse further.
    return null;
  }

  var selections = transformSelections(context, fragments, scope, node.selections, errorContext);

  if (!selections) {
    return null;
  }

  if (condition.kind === 'Literal' && condition.value === node.passingValue) {
    // Always passes, return inlined selections
    return selections;
  }

  return [(0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, node), {}, {
    condition: condition,
    selections: selections
  })];
}

function transformSelections(context, fragments, scope, selections, errorContext) {
  var nextSelections = null;
  selections.forEach(function (selection) {
    var nextSelection;

    if (selection.kind === 'ClientExtension' || selection.kind === 'InlineDataFragmentSpread' || selection.kind === 'InlineFragment' || selection.kind === 'ModuleImport') {
      nextSelection = transformNode(context, fragments, scope, selection, errorContext);
    } else if (selection.kind === 'Defer' || selection.kind === 'Stream') {
      nextSelection = transformDeferStreamNode(context, fragments, scope, selection, errorContext);
    } else if (selection.kind === 'FragmentSpread') {
      nextSelection = transformFragmentSpread(context, fragments, scope, selection, errorContext);
    } else if (selection.kind === 'Condition') {
      var conditionSelections = transformCondition(context, fragments, scope, selection, errorContext);

      if (conditionSelections) {
        var _nextSelections;

        nextSelections = nextSelections || [];

        (_nextSelections = nextSelections).push.apply(_nextSelections, (0, _toConsumableArray2["default"])(conditionSelections));
      }
    } else if (selection.kind === 'LinkedField' || selection.kind === 'ScalarField') {
      nextSelection = transformField(context, fragments, scope, selection, errorContext);
    } else {
      selection;
      throw createCompilerError("ApplyFragmentArgumentTransform: Unsupported kind '".concat(selection.kind, "'."), [selection.loc]);
    }

    if (nextSelection) {
      nextSelections = nextSelections || [];
      nextSelections.push(nextSelection);
    }
  });
  return nextSelections;
}

function transformDirectives(scope, directives, errorContext) {
  return directives.map(function (directive) {
    var args = transformArguments(scope, directive.args, errorContext);
    return (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, directive), {}, {
      args: args
    });
  });
}

function transformArguments(scope, args, errorContext) {
  return args.map(function (arg) {
    var value = transformValue(scope, arg.value, errorContext);
    return value === arg.value ? arg : (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, arg), {}, {
      value: value
    });
  });
}

function transformValue(scope, value, errorContext) {
  if (value.kind === 'Variable') {
    var scopeValue = scope[value.variableName];

    if (scopeValue == null) {
      var _errorContext$;

      // This transform does whole-program optimization, errors in
      // a single document could break invariants and/or cause
      // additional spurious errors.
      throw createNonRecoverableUserError("Variable '$".concat(value.variableName, "' is not in scope."), [(_errorContext$ = errorContext[0]) === null || _errorContext$ === void 0 ? void 0 : _errorContext$.loc, value.loc].filter(Boolean));
    }

    return scopeValue;
  } else if (value.kind === 'ObjectValue') {
    return (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, value), {}, {
      fields: value.fields.map(function (field) {
        return (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, field), {}, {
          value: transformValue(scope, field.value, errorContext)
        });
      })
    });
  } else if (value.kind === 'ListValue') {
    return (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, value), {}, {
      items: value.items.map(function (item) {
        return transformValue(scope, item, errorContext);
      })
    });
  }

  return value;
}
/**
 * Apply arguments to a fragment, creating a new fragment (with the given name)
 * with all values recursively applied.
 */


function transformFragment(context, fragments, parentScope, spread, args, errorContext) {
  var schema = context.getSchema();
  var fragment = context.getFragment(spread.name, spread.loc);
  var argumentsHash = hashArguments(args, parentScope, errorContext);
  var fragmentName = argumentsHash ? "".concat(fragment.name, "_").concat(argumentsHash) : fragment.name;
  var appliedFragment = fragments.get(fragmentName);

  if (appliedFragment) {
    if (appliedFragment.kind === 'resolved') {
      return appliedFragment.value;
    } else {
      // This transform does whole-program optimization, errors in
      // a single document could break invariants and/or cause
      // additional spurious errors.
      throw createNonRecoverableUserError("Found a circular reference from fragment '".concat(fragment.name, "'."), errorContext.map(function (node) {
        return node.loc;
      }));
    }
  }

  var fragmentScope = getFragmentScope(schema, fragment.argumentDefinitions, args, parentScope, spread); // record that this fragment is pending to detect circular references

  fragments.set(fragmentName, {
    kind: 'pending'
  });
  var transformedFragment = null;
  var selections = transformSelections(context, fragments, fragmentScope, fragment.selections, errorContext);

  if (selections) {
    transformedFragment = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, fragment), {}, {
      selections: selections,
      name: fragmentName,
      argumentDefinitions: []
    });
  }

  fragments.set(fragmentName, {
    kind: 'resolved',
    value: transformedFragment
  });
  return transformedFragment;
}

function hashArguments(args, scope, errorContext) {
  if (!args.length) {
    return null;
  }

  var sortedArgs = (0, _toConsumableArray2["default"])(args).sort(function (a, b) {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });
  var printedArgs = JSON.stringify(sortedArgs.map(function (arg) {
    var value;

    if (arg.value.kind === 'Variable') {
      value = scope[arg.value.variableName];

      if (value == null) {
        var _errorContext$2;

        // This transform does whole-program optimization, errors in
        // a single document could break invariants and/or cause
        // additional spurious errors.
        throw createNonRecoverableUserError("Variable '$".concat(arg.value.variableName, "' is not in scope."), [(_errorContext$2 = errorContext[0]) === null || _errorContext$2 === void 0 ? void 0 : _errorContext$2.loc, arg.value.loc].filter(Boolean));
      }
    } else {
      value = arg.value;
    }

    return {
      name: arg.name,
      value: getIdentifierForArgumentValue(value)
    };
  }));
  return murmurHash(printedArgs);
}

module.exports = {
  transform: applyFragmentArgumentTransform
};