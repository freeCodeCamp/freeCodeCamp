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

var IRTransformer = require('../core/IRTransformer');

var invariant = require('invariant');

var joinArgumentDefinitions = require('../util/joinArgumentDefinitions');

var _require = require('../core/CompilerError'),
    createUserError = _require.createUserError;

/**
 * A transform that inlines fragment spreads with the @relay(mask: false)
 * directive.
 */
function maskTransform(context) {
  return IRTransformer.transform(context, {
    FragmentSpread: visitFragmentSpread,
    Fragment: visitFragment
  }, function () {
    return {
      reachableArguments: []
    };
  });
}

function visitFragment(fragment, state) {
  // $FlowFixMe[incompatible-use]
  var result = this.traverse(fragment, state);

  if (state.reachableArguments.length === 0) {
    return result;
  }

  var joinedArgumentDefinitions = joinArgumentDefinitions( // $FlowFixMe[incompatible-use]
  this.getContext().getSchema(), fragment, state.reachableArguments, '@relay(unmask: true)');
  return (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, result), {}, {
    argumentDefinitions: joinedArgumentDefinitions
  });
}

function visitFragmentSpread(fragmentSpread, state) {
  if (!isUnmaskedSpread(fragmentSpread)) {
    return fragmentSpread;
  }

  !(fragmentSpread.args.length === 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'MaskTransform: Cannot unmask fragment spread `%s` with ' + 'arguments. Use the `ApplyFragmentArgumentTransform` before flattening', fragmentSpread.name) : invariant(false) : void 0; // $FlowFixMe[incompatible-use]

  var context = this.getContext();
  var fragment = context.getFragment(fragmentSpread.name);
  var result = {
    kind: 'InlineFragment',
    directives: fragmentSpread.directives,
    loc: {
      kind: 'Derived',
      source: fragmentSpread.loc
    },
    metadata: fragmentSpread.metadata,
    selections: fragment.selections,
    typeCondition: fragment.type
  };

  if (fragment.directives.length > 0) {
    throw new createUserError('Cannot use @relay(mask: false) on fragment spreads for fragments ' + 'with directives.', [fragmentSpread.loc, fragment.directives[0].loc]);
  }

  var localArgDef = fragment.argumentDefinitions.find(function (argDef) {
    return argDef.kind === 'LocalArgumentDefinition';
  });

  if (localArgDef != null) {
    throw createUserError('MaskTransform: Cannot use @relay(mask: false) on fragment spread ' + 'because the fragment definition uses @argumentDefinitions.', [fragmentSpread.loc, localArgDef.loc]);
  } // Note: defer validating arguments to the containing fragment in order
  // to list all invalid variables/arguments instead of only one.


  var _iterator = (0, _createForOfIteratorHelper2["default"])(fragment.argumentDefinitions),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var argDef = _step.value;
      state.reachableArguments.push(argDef);
    } // $FlowFixMe[incompatible-use]

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return this.traverse(result, state);
}
/**
 * @private
 */


function isUnmaskedSpread(spread) {
  return Boolean(spread.metadata && spread.metadata.mask === false);
}

module.exports = {
  transform: maskTransform
};