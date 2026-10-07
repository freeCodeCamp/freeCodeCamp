'use strict';
var call = require('../internals/function-call');
var anObject = require('../internals/an-object');
var getBuiltIn = require('../internals/get-built-in');
var getMethod = require('../internals/get-method');

module.exports = function (iterator, method, argument, reject) {
  try {
    var returnMethod = getMethod(iterator, 'return');
    if (returnMethod) {
      return getBuiltIn('Promise').resolve(call(returnMethod, iterator)).then(function (result) {
        try {
          if (method !== reject) anObject(result);
        } catch (error3) {
          reject(error3);
          return;
        }
        method(argument);
      }, function (error) {
        method === reject ? method(argument) : reject(error);
      });
    }
  } catch (error2) {
    // the original error (`argument`) takes priority over `return()` errors
    return method === reject ? reject(argument) : reject(error2);
  } method(argument);
};
