/*jshint -W054 */
;(function (exports) {
  'use strict';

  function forEachAsync(arr, fn, thisArg) {
    var dones = []
      , index = -1
      ;

    function next(BREAK, result) {
      index += 1;

      if (index === arr.length || BREAK === forEachAsync.__BREAK) {
        dones.forEach(function (done) {
          done.call(thisArg, result);
        });
        return;
      }

      fn.call(thisArg, next, arr[index], index, arr);
    }

    setTimeout(next, 4);

    return {
      then: function (_done) {
        dones.push(_done);
        return this;
      }
    };
  }
  forEachAsync.__BREAK = {};

  exports.forEachAsync = forEachAsync;
}('undefined' !== typeof exports && exports || new Function('return this')()));
