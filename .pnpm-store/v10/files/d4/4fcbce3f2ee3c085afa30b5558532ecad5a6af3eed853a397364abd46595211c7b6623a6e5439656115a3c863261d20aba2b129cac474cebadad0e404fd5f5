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

var IRTransformer = require('../core/IRTransformer');

var _require = require('../core/CompilerError'),
    createUserError = _require.createUserError;

var SCHEMA_EXTENSION = "\ndirective @inline on FRAGMENT_DEFINITION\n";
/**
 * A transform that converts fragment spreads where the referenced fragment
 * is annotated with @inline to a InlineDataFragmentSpread.
 * InlineDataFragmentSpreads have the selections of the referenced fragment inlined.
 */

function inlineDataFragmentTransform(context) {
  return IRTransformer.transform(context, {
    // $FlowFixMe[prop-missing] - this visitor intentionally changes node types
    // $FlowFixMe[incompatible-call] - this visitor intentionally changes node types
    FragmentSpread: visitFragmentSpread,
    Fragment: visitFragment
  });
}

function visitFragment(fragment) {
  // $FlowFixMe[incompatible-use]
  var transformedFragment = this.traverse(fragment);
  var inlineDirective = transformedFragment.directives.find(function (directive) {
    return directive.name === 'inline';
  });

  if (inlineDirective == null) {
    return transformedFragment;
  }

  return (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, transformedFragment), {}, {
    directives: transformedFragment.directives.filter(function (directive) {
      return directive !== inlineDirective;
    }),
    metadata: (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, transformedFragment.metadata || {}), {}, {
      inlineData: true
    })
  });
}

function visitFragmentSpread(fragmentSpread) {
  // $FlowFixMe[incompatible-use]
  var transformedFragmentSpread = this.traverse(fragmentSpread); // $FlowFixMe[incompatible-use]

  var context = this.getContext();
  var fragment = context.get(transformedFragmentSpread.name);

  if (!fragment || fragment.kind !== 'Fragment' || !fragment.directives.some(function (directive) {
    return directive.name === 'inline';
  })) {
    return transformedFragmentSpread;
  }

  if (fragment.argumentDefinitions.length > 0 || transformedFragmentSpread.args.length > 0) {
    throw createUserError('Variables are not yet supported inside @inline fragments.', [fragment.argumentDefinitions[0].loc]);
  }

  if (transformedFragmentSpread.directives.length > 0) {
    throw createUserError('Directives on fragment spreads for @inline fragments are not yet ' + 'supported', [transformedFragmentSpread.loc]);
  } // $FlowFixMe[incompatible-use]


  var transformedFragment = this.visit(fragment);
  return {
    kind: 'InlineDataFragmentSpread',
    loc: transformedFragmentSpread.loc,
    metadata: transformedFragmentSpread.metadata,
    name: transformedFragmentSpread.name,
    selections: [{
      directives: [],
      kind: 'InlineFragment',
      loc: {
        kind: 'Derived',
        source: transformedFragmentSpread.loc
      },
      metadata: null,
      selections: transformedFragment.selections,
      typeCondition: transformedFragment.type
    }]
  };
}

module.exports = {
  SCHEMA_EXTENSION: SCHEMA_EXTENSION,
  transform: inlineDataFragmentTransform
};