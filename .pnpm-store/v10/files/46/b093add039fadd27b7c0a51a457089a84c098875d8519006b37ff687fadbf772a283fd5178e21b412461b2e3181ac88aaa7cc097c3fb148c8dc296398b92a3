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

var IRTransformer = require('../core/IRTransformer');

/**
 * A transform that removes any directives that were not present in the
 * server schema.
 */
function filterDirectivesTransform(context) {
  var schemaDirectives = new Set(context.getSchema().getDirectives().filter(function (directive) {
    return !directive.isClient;
  }).map(function (schemaDirective) {
    return schemaDirective.name;
  }));

  var visitDirective = function visitDirective(directive) {
    if (schemaDirectives.has(directive.name)) {
      return directive;
    }

    return null;
  };

  return IRTransformer.transform(context, {
    Directive: visitDirective
  });
}

module.exports = {
  transform: filterDirectivesTransform
};