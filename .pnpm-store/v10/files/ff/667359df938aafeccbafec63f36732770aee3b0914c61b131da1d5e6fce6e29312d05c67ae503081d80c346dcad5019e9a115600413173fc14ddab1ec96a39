'use strict';
var DESCRIPTORS = require('../internals/descriptors');
var defineBuiltInAccessor = require('../internals/define-built-in-accessor');
var regExpFlagsDetection = require('../internals/regexp-flags-detection');
var regExpFlagsGetterImplementation = require('../internals/regexp-flags');

// `RegExp.prototype.flags` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
if (DESCRIPTORS && !regExpFlagsDetection.correct) {
  defineBuiltInAccessor(RegExp.prototype, 'flags', {
    configurable: true,
    get: regExpFlagsGetterImplementation
  });

  regExpFlagsDetection.correct = true;
}
