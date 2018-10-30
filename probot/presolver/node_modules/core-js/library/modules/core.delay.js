var global = require('./_global');
var core = require('./_core');
var $export = require('./_export');
var partial = require('./_partial');
// https://esdiscuss.org/topic/promise-returning-delay-function
$export($export.G + $export.F, {
  delay: function delay(time) {
    return new (core.Promise || global.Promise)(function (resolve) {
      setTimeout(partial.call(resolve, true), time);
    });
  }
});
