'use strict';
var $ = require('../internals/export');
var functionApply = require('../internals/function-apply');
var aCallable = require('../internals/a-callable');
var anObject = require('../internals/an-object');
var fails = require('../internals/fails');

// MS Edge argumentsList argument is optional
var OPTIONAL_ARGUMENTS_LIST = !fails(function () {
  // eslint-disable-next-line es/no-reflect -- required for testing
  Reflect.apply(function () { /* empty */ });
});

// `Reflect.apply` method
// https://tc39.es/ecma262/#sec-reflect.apply
$({ target: 'Reflect', stat: true, forced: OPTIONAL_ARGUMENTS_LIST }, {
  apply: function apply(target, thisArgument, argumentsList) {
    return functionApply(aCallable(target), thisArgument, anObject(argumentsList));
  }
});
