'use strict';

var once = require('once');

/**
 * Run a function asynchronously or synchronously
 * @param   {Function} func  Function to run
 * @param   {Function} cb    Callback function passed the `func` returned value
 * @...rest {Mixed}    rest  Arguments to pass to `func`
 * @return  {Null}
 */

module.exports = function (func, cb) {
  var async = false;
  var answer = func.apply({
    async: function () {
      async = true;
      return once(cb);
    }
  }, Array.prototype.slice.call(arguments, 2) );

  if (!async) {
    cb(answer);
  }
};
