'use strict';
var DESCRIPTORS = require('../internals/descriptors');
var MISSED_STICKY = require('../internals/regexp-sticky-helpers').MISSED_STICKY;
var classof = require('../internals/classof-raw');
var defineBuiltInAccessor = require('../internals/define-built-in-accessor');
var getInternalState = require('../internals/internal-state').get;

var RegExpPrototype = RegExp.prototype;
var $TypeError = TypeError;

// `RegExp.prototype.sticky` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.sticky
if (DESCRIPTORS && MISSED_STICKY) {
  defineBuiltInAccessor(RegExpPrototype, 'sticky', {
    configurable: true,
    get: function sticky() {
      if (this === RegExpPrototype) return;
      // We can't use InternalStateModule.getterFor because
      // we don't add metadata for regexps created by a literal.
      if (classof(this) === 'RegExp') {
        return !!getInternalState(this).sticky;
      }
      throw new $TypeError('Incompatible receiver, RegExp required');
    }
  });
}
