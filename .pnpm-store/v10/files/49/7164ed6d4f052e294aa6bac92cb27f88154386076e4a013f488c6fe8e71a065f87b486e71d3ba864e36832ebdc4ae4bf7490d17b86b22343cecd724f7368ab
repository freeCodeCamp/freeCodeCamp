/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */
'use strict';

var IRTransformer = require('../core/IRTransformer');

var COMPILE_TIME_DIRECTIVES = new Set(['required']);
/**
 * A transform that removes any directives that are only interpreted by the Relay compiler.
 */

function filterDirectivesTransform(context) {
  return IRTransformer.transform(context, {
    Directive: function Directive(directive) {
      return COMPILE_TIME_DIRECTIVES.has(directive.name) ? null : directive;
    }
  });
}

module.exports = {
  transform: filterDirectivesTransform
};