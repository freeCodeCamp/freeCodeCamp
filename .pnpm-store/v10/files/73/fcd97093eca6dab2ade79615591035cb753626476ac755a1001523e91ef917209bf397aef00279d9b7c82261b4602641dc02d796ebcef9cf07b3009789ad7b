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

var getIdentifierForArgumentValue = require('../core/getIdentifierForArgumentValue');

var murmurHash = require('../util/murmurHash');

var _require = require('../core/CompilerError'),
    createUserError = _require.createUserError;

/**
 * This transform finds usages of @defer and @stream, validates them, and
 * converts the using node to specialized IR nodes (Defer/Stream).
 */
function deferStreamTransform(context) {
  return IRTransformer.transform(context, {
    // TODO: type IRTransformer to allow changing result type
    FragmentSpread: visitFragmentSpread,
    // TODO: type IRTransformer to allow changing result type
    InlineFragment: visitInlineFragment,
    // TODO: type IRTransformer to allow changing result type
    LinkedField: visitLinkedField,
    ScalarField: visitScalarField
  }, function (sourceNode) {
    var labels = new Map();
    return {
      documentName: sourceNode.name,
      recordLabel: function recordLabel(label, directive) {
        var prevDirective = labels.get(label);

        if (prevDirective) {
          var _prevLabelArg$loc;

          var labelArg = directive.args.find(function (_ref) {
            var name = _ref.name;
            return name === 'label';
          });
          var prevLabelArg = prevDirective.args.find(function (_ref2) {
            var name = _ref2.name;
            return name === 'label';
          });
          var previousLocation = (_prevLabelArg$loc = prevLabelArg === null || prevLabelArg === void 0 ? void 0 : prevLabelArg.loc) !== null && _prevLabelArg$loc !== void 0 ? _prevLabelArg$loc : prevDirective.loc;

          if (labelArg) {
            throw createUserError("Invalid use of @".concat(directive.name, ", the provided label is ") + "not unique. Specify a unique 'label' as a literal string.", [labelArg === null || labelArg === void 0 ? void 0 : labelArg.loc, previousLocation]);
          } else {
            throw createUserError("Invalid use of @".concat(directive.name, ", could not generate a ") + "default label that is unique. Specify a unique 'label' " + 'as a literal string.', [directive.loc, previousLocation]);
          }
        }

        labels.set(label, directive);
      }
    };
  });
}

function visitLinkedField(field, state) {
  var _getLiteralStringArgu, _ifArg$value, _useCustomizedBatch$v;

  var context = this.getContext();
  var schema = context.getSchema();
  var transformedField = this.traverse(field, state);
  var streamDirective = transformedField.directives.find(function (directive) {
    return directive.name === 'stream';
  });

  if (streamDirective == null) {
    return transformedField;
  }

  var type = schema.getNullableType(field.type);

  if (!schema.isList(type)) {
    throw createUserError("Invalid use of @stream on non-plural field '".concat(field.name, "'"), [streamDirective.loc]);
  }

  transformedField = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, transformedField), {}, {
    directives: transformedField.directives.filter(function (directive) {
      return directive.name !== 'stream';
    })
  });
  var ifArg = streamDirective.args.find(function (arg) {
    return arg.name === 'if';
  });

  if (isLiteralFalse(ifArg)) {
    return transformedField;
  }

  var initialCount = streamDirective.args.find(function (arg) {
    return arg.name === 'initial_count';
  });

  if (initialCount == null) {
    throw createUserError("Invalid use of @stream, the 'initial_count' argument is required.", [streamDirective.loc]);
  }

  var useCustomizedBatch = streamDirective.args.find(function (arg) {
    return arg.name === 'use_customized_batch';
  });
  var label = (_getLiteralStringArgu = getLiteralStringArgument(streamDirective, 'label')) !== null && _getLiteralStringArgu !== void 0 ? _getLiteralStringArgu : field.alias;
  var transformedLabel = transformLabel(state.documentName, 'stream', label);
  state.recordLabel(transformedLabel, streamDirective);
  return {
    "if": (_ifArg$value = ifArg === null || ifArg === void 0 ? void 0 : ifArg.value) !== null && _ifArg$value !== void 0 ? _ifArg$value : null,
    initialCount: initialCount.value,
    useCustomizedBatch: (_useCustomizedBatch$v = useCustomizedBatch === null || useCustomizedBatch === void 0 ? void 0 : useCustomizedBatch.value) !== null && _useCustomizedBatch$v !== void 0 ? _useCustomizedBatch$v : null,
    kind: 'Stream',
    label: transformedLabel,
    loc: {
      kind: 'Derived',
      source: streamDirective.loc
    },
    metadata: null,
    selections: [transformedField]
  };
}

function visitScalarField(field, state) {
  var streamDirective = field.directives.find(function (directive) {
    return directive.name === 'stream';
  });

  if (streamDirective != null) {
    throw createUserError("Invalid use of @stream on scalar field '".concat(field.name, "'"), [streamDirective.loc]);
  } // $FlowFixMe[incompatible-use]


  return this.traverse(field, state);
}

function visitInlineFragment(fragment, state) {
  var deferDirective = fragment.directives.find(function (directive) {
    return directive.name === 'defer';
  });

  if (deferDirective != null) {
    throw createUserError('Invalid use of @defer on an inline fragment, @defer is only supported on fragment spreads.', [fragment.loc]);
  }

  return this.traverse(fragment, state);
}

function visitFragmentSpread(spread, state) {
  var _getLiteralStringArgu2, _ifArg$value2;

  var transformedSpread = this.traverse(spread, state);
  var deferDirective = transformedSpread.directives.find(function (directive) {
    return directive.name === 'defer';
  });

  if (deferDirective == null) {
    return transformedSpread;
  }

  transformedSpread = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, transformedSpread), {}, {
    directives: transformedSpread.directives.filter(function (directive) {
      return directive.name !== 'defer';
    })
  });
  var ifArg = deferDirective.args.find(function (arg) {
    return arg.name === 'if';
  });

  if (isLiteralFalse(ifArg)) {
    return transformedSpread;
  }

  var label = (_getLiteralStringArgu2 = getLiteralStringArgument(deferDirective, 'label')) !== null && _getLiteralStringArgu2 !== void 0 ? _getLiteralStringArgu2 : getFragmentSpreadName(spread);
  var transformedLabel = transformLabel(state.documentName, 'defer', label);
  state.recordLabel(transformedLabel, deferDirective);
  return {
    "if": (_ifArg$value2 = ifArg === null || ifArg === void 0 ? void 0 : ifArg.value) !== null && _ifArg$value2 !== void 0 ? _ifArg$value2 : null,
    kind: 'Defer',
    label: transformedLabel,
    loc: {
      kind: 'Derived',
      source: deferDirective.loc
    },
    selections: [transformedSpread]
  };
}

function getLiteralStringArgument(directive, argName) {
  var arg = directive.args.find(function (_ref3) {
    var name = _ref3.name;
    return name === argName;
  });

  if (arg == null) {
    return null;
  }

  var value = arg.value.kind === 'Literal' ? arg.value.value : null;

  if (value == null || typeof value !== 'string') {
    throw createUserError("Expected the '".concat(argName, "' value to @").concat(directive.name, " to be a string literal if provided."), [arg.value.loc]);
  }

  return value;
}

function transformLabel(parentName, directive, label) {
  return "".concat(parentName, "$").concat(directive, "$").concat(label);
}

function isLiteralFalse(arg) {
  return arg != null && arg.value.kind === 'Literal' && arg.value.value === false;
}

function getFragmentSpreadName(fragmentSpread) {
  if (fragmentSpread.args.length === 0) {
    return fragmentSpread.name;
  }

  var sortedArgs = (0, _toConsumableArray2["default"])(fragmentSpread.args).sort(function (a, b) {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  }).map(function (argument) {
    return {
      name: argument.name,
      value: getIdentifierForArgumentValue(argument.value)
    };
  });
  var hash = murmurHash(JSON.stringify(sortedArgs));
  return "".concat(fragmentSpread.name, "_").concat(hash);
}

module.exports = {
  transform: deferStreamTransform
};