'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapSync = exports.selectSeries = exports.selectLimit = exports.select = exports.foldr = exports.foldl = exports.inject = exports.forEachOfLimit = exports.forEachOfSeries = exports.forEachOf = exports.forEachLimit = exports.forEachSeries = exports.forEach = exports.findSeries = exports.findLimit = exports.find = exports.anySeries = exports.anyLimit = exports.any = exports.allSeries = exports.allLimit = exports.all = exports.whilst = exports.waterfall = exports.until = exports.unmemoize = exports.tryEach = exports.transform = exports.timesSeries = exports.timesLimit = exports.times = exports.timeout = exports.sortBy = exports.someSeries = exports.someLimit = exports.some = exports.setImmediate = exports.series = exports.seq = exports.retryable = exports.retry = exports.rejectSeries = exports.rejectLimit = exports.reject = exports.reflectAll = exports.reflect = exports.reduceRight = exports.reduce = exports.race = exports.queue = exports.priorityQueue = exports.parallelLimit = exports.parallel = exports.nextTick = exports.memoize = exports.mapValuesSeries = exports.mapValuesLimit = exports.mapValues = exports.mapSeries = exports.mapLimit = exports.map = exports.log = exports.groupBySeries = exports.groupByLimit = exports.groupBy = exports.forever = exports.filterSeries = exports.filterLimit = exports.filter = exports.everySeries = exports.everyLimit = exports.every = exports.ensureAsync = exports.eachSeries = exports.eachOfSeries = exports.eachOfLimit = exports.eachOf = exports.eachLimit = exports.each = exports.during = exports.doWhilst = exports.doUntil = exports.doDuring = exports.dir = exports.detectSeries = exports.detectLimit = exports.detect = exports.constant = exports.concatSeries = exports.concatLimit = exports.concat = exports.compose = exports.cargo = exports.autoInject = exports.auto = exports.asyncify = exports.applyEachSeries = exports.applyEach = exports.apply = undefined;

var _apply = require('./apply');

var _apply2 = _interopRequireDefault(_apply);

var _applyEach = require('./applyEach');

var _applyEach2 = _interopRequireDefault(_applyEach);

var _applyEachSeries = require('./applyEachSeries');

var _applyEachSeries2 = _interopRequireDefault(_applyEachSeries);

var _asyncify = require('./asyncify');

var _asyncify2 = _interopRequireDefault(_asyncify);

var _auto = require('./auto');

var _auto2 = _interopRequireDefault(_auto);

var _autoInject = require('./autoInject');

var _autoInject2 = _interopRequireDefault(_autoInject);

var _cargo = require('./cargo');

var _cargo2 = _interopRequireDefault(_cargo);

var _compose = require('./compose');

var _compose2 = _interopRequireDefault(_compose);

var _concat = require('./concat');

var _concat2 = _interopRequireDefault(_concat);

var _concatLimit = require('./concatLimit');

var _concatLimit2 = _interopRequireDefault(_concatLimit);

var _concatSeries = require('./concatSeries');

var _concatSeries2 = _interopRequireDefault(_concatSeries);

var _constant = require('./constant');

var _constant2 = _interopRequireDefault(_constant);

var _detect = require('./detect');

var _detect2 = _interopRequireDefault(_detect);

var _detectLimit = require('./detectLimit');

var _detectLimit2 = _interopRequireDefault(_detectLimit);

var _detectSeries = require('./detectSeries');

var _detectSeries2 = _interopRequireDefault(_detectSeries);

var _dir = require('./dir');

var _dir2 = _interopRequireDefault(_dir);

var _doDuring = require('./doDuring');

var _doDuring2 = _interopRequireDefault(_doDuring);

var _doUntil = require('./doUntil');

var _doUntil2 = _interopRequireDefault(_doUntil);

var _doWhilst = require('./doWhilst');

var _doWhilst2 = _interopRequireDefault(_doWhilst);

var _during = require('./during');

var _during2 = _interopRequireDefault(_during);

var _each = require('./each');

var _each2 = _interopRequireDefault(_each);

var _eachLimit = require('./eachLimit');

var _eachLimit2 = _interopRequireDefault(_eachLimit);

var _eachOf = require('./eachOf');

var _eachOf2 = _interopRequireDefault(_eachOf);

var _eachOfLimit = require('./eachOfLimit');

var _eachOfLimit2 = _interopRequireDefault(_eachOfLimit);

var _eachOfSeries = require('./eachOfSeries');

var _eachOfSeries2 = _interopRequireDefault(_eachOfSeries);

var _eachSeries = require('./eachSeries');

var _eachSeries2 = _interopRequireDefault(_eachSeries);

var _ensureAsync = require('./ensureAsync');

var _ensureAsync2 = _interopRequireDefault(_ensureAsync);

var _every = require('./every');

var _every2 = _interopRequireDefault(_every);

var _everyLimit = require('./everyLimit');

var _everyLimit2 = _interopRequireDefault(_everyLimit);

var _everySeries = require('./everySeries');

var _everySeries2 = _interopRequireDefault(_everySeries);

var _filter = require('./filter');

var _filter2 = _interopRequireDefault(_filter);

var _filterLimit = require('./filterLimit');

var _filterLimit2 = _interopRequireDefault(_filterLimit);

var _filterSeries = require('./filterSeries');

var _filterSeries2 = _interopRequireDefault(_filterSeries);

var _forever = require('./forever');

var _forever2 = _interopRequireDefault(_forever);

var _groupBy = require('./groupBy');

var _groupBy2 = _interopRequireDefault(_groupBy);

var _groupByLimit = require('./groupByLimit');

var _groupByLimit2 = _interopRequireDefault(_groupByLimit);

var _groupBySeries = require('./groupBySeries');

var _groupBySeries2 = _interopRequireDefault(_groupBySeries);

var _log = require('./log');

var _log2 = _interopRequireDefault(_log);

var _map = require('./map');

var _map2 = _interopRequireDefault(_map);

var _mapLimit = require('./mapLimit');

var _mapLimit2 = _interopRequireDefault(_mapLimit);

var _mapSeries = require('./mapSeries');

var _mapSeries2 = _interopRequireDefault(_mapSeries);

var _mapValues = require('./mapValues');

var _mapValues2 = _interopRequireDefault(_mapValues);

var _mapValuesLimit = require('./mapValuesLimit');

var _mapValuesLimit2 = _interopRequireDefault(_mapValuesLimit);

var _mapValuesSeries = require('./mapValuesSeries');

var _mapValuesSeries2 = _interopRequireDefault(_mapValuesSeries);

var _memoize = require('./memoize');

var _memoize2 = _interopRequireDefault(_memoize);

var _nextTick = require('./nextTick');

var _nextTick2 = _interopRequireDefault(_nextTick);

var _parallel = require('./parallel');

var _parallel2 = _interopRequireDefault(_parallel);

var _parallelLimit = require('./parallelLimit');

var _parallelLimit2 = _interopRequireDefault(_parallelLimit);

var _priorityQueue = require('./priorityQueue');

var _priorityQueue2 = _interopRequireDefault(_priorityQueue);

var _queue = require('./queue');

var _queue2 = _interopRequireDefault(_queue);

var _race = require('./race');

var _race2 = _interopRequireDefault(_race);

var _reduce = require('./reduce');

var _reduce2 = _interopRequireDefault(_reduce);

var _reduceRight = require('./reduceRight');

var _reduceRight2 = _interopRequireDefault(_reduceRight);

var _reflect = require('./reflect');

var _reflect2 = _interopRequireDefault(_reflect);

var _reflectAll = require('./reflectAll');

var _reflectAll2 = _interopRequireDefault(_reflectAll);

var _reject = require('./reject');

var _reject2 = _interopRequireDefault(_reject);

var _rejectLimit = require('./rejectLimit');

var _rejectLimit2 = _interopRequireDefault(_rejectLimit);

var _rejectSeries = require('./rejectSeries');

var _rejectSeries2 = _interopRequireDefault(_rejectSeries);

var _retry = require('./retry');

var _retry2 = _interopRequireDefault(_retry);

var _retryable = require('./retryable');

var _retryable2 = _interopRequireDefault(_retryable);

var _seq = require('./seq');

var _seq2 = _interopRequireDefault(_seq);

var _series = require('./series');

var _series2 = _interopRequireDefault(_series);

var _setImmediate = require('./setImmediate');

var _setImmediate2 = _interopRequireDefault(_setImmediate);

var _some = require('./some');

var _some2 = _interopRequireDefault(_some);

var _someLimit = require('./someLimit');

var _someLimit2 = _interopRequireDefault(_someLimit);

var _someSeries = require('./someSeries');

var _someSeries2 = _interopRequireDefault(_someSeries);

var _sortBy = require('./sortBy');

var _sortBy2 = _interopRequireDefault(_sortBy);

var _timeout = require('./timeout');

var _timeout2 = _interopRequireDefault(_timeout);

var _times = require('./times');

var _times2 = _interopRequireDefault(_times);

var _timesLimit = require('./timesLimit');

var _timesLimit2 = _interopRequireDefault(_timesLimit);

var _timesSeries = require('./timesSeries');

var _timesSeries2 = _interopRequireDefault(_timesSeries);

var _transform = require('./transform');

var _transform2 = _interopRequireDefault(_transform);

var _tryEach = require('./tryEach');

var _tryEach2 = _interopRequireDefault(_tryEach);

var _unmemoize = require('./unmemoize');

var _unmemoize2 = _interopRequireDefault(_unmemoize);

var _until = require('./until');

var _until2 = _interopRequireDefault(_until);

var _waterfall = require('./waterfall');

var _waterfall2 = _interopRequireDefault(_waterfall);

var _whilst = require('./whilst');

var _whilst2 = _interopRequireDefault(_whilst);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  apply: _apply2.default,
  applyEach: _applyEach2.default,
  applyEachSeries: _applyEachSeries2.default,
  asyncify: _asyncify2.default,
  auto: _auto2.default,
  autoInject: _autoInject2.default,
  cargo: _cargo2.default,
  compose: _compose2.default,
  concat: _concat2.default,
  concatLimit: _concatLimit2.default,
  concatSeries: _concatSeries2.default,
  constant: _constant2.default,
  detect: _detect2.default,
  detectLimit: _detectLimit2.default,
  detectSeries: _detectSeries2.default,
  dir: _dir2.default,
  doDuring: _doDuring2.default,
  doUntil: _doUntil2.default,
  doWhilst: _doWhilst2.default,
  during: _during2.default,
  each: _each2.default,
  eachLimit: _eachLimit2.default,
  eachOf: _eachOf2.default,
  eachOfLimit: _eachOfLimit2.default,
  eachOfSeries: _eachOfSeries2.default,
  eachSeries: _eachSeries2.default,
  ensureAsync: _ensureAsync2.default,
  every: _every2.default,
  everyLimit: _everyLimit2.default,
  everySeries: _everySeries2.default,
  filter: _filter2.default,
  filterLimit: _filterLimit2.default,
  filterSeries: _filterSeries2.default,
  forever: _forever2.default,
  groupBy: _groupBy2.default,
  groupByLimit: _groupByLimit2.default,
  groupBySeries: _groupBySeries2.default,
  log: _log2.default,
  map: _map2.default,
  mapLimit: _mapLimit2.default,
  mapSeries: _mapSeries2.default,
  mapValues: _mapValues2.default,
  mapValuesLimit: _mapValuesLimit2.default,
  mapValuesSeries: _mapValuesSeries2.default,
  memoize: _memoize2.default,
  nextTick: _nextTick2.default,
  parallel: _parallel2.default,
  parallelLimit: _parallelLimit2.default,
  priorityQueue: _priorityQueue2.default,
  queue: _queue2.default,
  race: _race2.default,
  reduce: _reduce2.default,
  reduceRight: _reduceRight2.default,
  reflect: _reflect2.default,
  reflectAll: _reflectAll2.default,
  reject: _reject2.default,
  rejectLimit: _rejectLimit2.default,
  rejectSeries: _rejectSeries2.default,
  retry: _retry2.default,
  retryable: _retryable2.default,
  seq: _seq2.default,
  series: _series2.default,
  setImmediate: _setImmediate2.default,
  some: _some2.default,
  someLimit: _someLimit2.default,
  someSeries: _someSeries2.default,
  sortBy: _sortBy2.default,
  timeout: _timeout2.default,
  times: _times2.default,
  timesLimit: _timesLimit2.default,
  timesSeries: _timesSeries2.default,
  transform: _transform2.default,
  tryEach: _tryEach2.default,
  unmemoize: _unmemoize2.default,
  until: _until2.default,
  waterfall: _waterfall2.default,
  whilst: _whilst2.default,

  // aliases
  all: _every2.default,
  allLimit: _everyLimit2.default,
  allSeries: _everySeries2.default,
  any: _some2.default,
  anyLimit: _someLimit2.default,
  anySeries: _someSeries2.default,
  find: _detect2.default,
  findLimit: _detectLimit2.default,
  findSeries: _detectSeries2.default,
  forEach: _each2.default,
  forEachSeries: _eachSeries2.default,
  forEachLimit: _eachLimit2.default,
  forEachOf: _eachOf2.default,
  forEachOfSeries: _eachOfSeries2.default,
  forEachOfLimit: _eachOfLimit2.default,
  inject: _reduce2.default,
  foldl: _reduce2.default,
  foldr: _reduceRight2.default,
  select: _filter2.default,
  selectLimit: _filterLimit2.default,
  selectSeries: _filterSeries2.default,
  wrapSync: _asyncify2.default
}; /**
    * An "async function" in the context of Async is an asynchronous function with
    * a variable number of parameters, with the final parameter being a callback.
    * (`function (arg1, arg2, ..., callback) {}`)
    * The final callback is of the form `callback(err, results...)`, which must be
    * called once the function is completed.  The callback should be called with a
    * Error as its first argument to signal that an error occurred.
    * Otherwise, if no error occurred, it should be called with `null` as the first
    * argument, and any additional `result` arguments that may apply, to signal
    * successful completion.
    * The callback must be called exactly once, ideally on a later tick of the
    * JavaScript event loop.
    *
    * This type of function is also referred to as a "Node-style async function",
    * or a "continuation passing-style function" (CPS). Most of the methods of this
    * library are themselves CPS/Node-style async functions, or functions that
    * return CPS/Node-style async functions.
    *
    * Wherever we accept a Node-style async function, we also directly accept an
    * [ES2017 `async` function]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function}.
    * In this case, the `async` function will not be passed a final callback
    * argument, and any thrown error will be used as the `err` argument of the
    * implicit callback, and the return value will be used as the `result` value.
    * (i.e. a `rejected` of the returned Promise becomes the `err` callback
    * argument, and a `resolved` value becomes the `result`.)
    *
    * Note, due to JavaScript limitations, we can only detect native `async`
    * functions and not transpilied implementations.
    * Your environment must have `async`/`await` support for this to work.
    * (e.g. Node > v7.6, or a recent version of a modern browser).
    * If you are using `async` functions through a transpiler (e.g. Babel), you
    * must still wrap the function with [asyncify]{@link module:Utils.asyncify},
    * because the `async function` will be compiled to an ordinary function that
    * returns a promise.
    *
    * @typedef {Function} AsyncFunction
    * @static
    */

/**
 * Async is a utility module which provides straight-forward, powerful functions
 * for working with asynchronous JavaScript. Although originally designed for
 * use with [Node.js](http://nodejs.org) and installable via
 * `npm install --save async`, it can also be used directly in the browser.
 * @module async
 * @see AsyncFunction
 */

/**
 * A collection of `async` functions for manipulating collections, such as
 * arrays and objects.
 * @module Collections
 */

/**
 * A collection of `async` functions for controlling the flow through a script.
 * @module ControlFlow
 */

/**
 * A collection of `async` utility functions.
 * @module Utils
 */

exports.apply = _apply2.default;
exports.applyEach = _applyEach2.default;
exports.applyEachSeries = _applyEachSeries2.default;
exports.asyncify = _asyncify2.default;
exports.auto = _auto2.default;
exports.autoInject = _autoInject2.default;
exports.cargo = _cargo2.default;
exports.compose = _compose2.default;
exports.concat = _concat2.default;
exports.concatLimit = _concatLimit2.default;
exports.concatSeries = _concatSeries2.default;
exports.constant = _constant2.default;
exports.detect = _detect2.default;
exports.detectLimit = _detectLimit2.default;
exports.detectSeries = _detectSeries2.default;
exports.dir = _dir2.default;
exports.doDuring = _doDuring2.default;
exports.doUntil = _doUntil2.default;
exports.doWhilst = _doWhilst2.default;
exports.during = _during2.default;
exports.each = _each2.default;
exports.eachLimit = _eachLimit2.default;
exports.eachOf = _eachOf2.default;
exports.eachOfLimit = _eachOfLimit2.default;
exports.eachOfSeries = _eachOfSeries2.default;
exports.eachSeries = _eachSeries2.default;
exports.ensureAsync = _ensureAsync2.default;
exports.every = _every2.default;
exports.everyLimit = _everyLimit2.default;
exports.everySeries = _everySeries2.default;
exports.filter = _filter2.default;
exports.filterLimit = _filterLimit2.default;
exports.filterSeries = _filterSeries2.default;
exports.forever = _forever2.default;
exports.groupBy = _groupBy2.default;
exports.groupByLimit = _groupByLimit2.default;
exports.groupBySeries = _groupBySeries2.default;
exports.log = _log2.default;
exports.map = _map2.default;
exports.mapLimit = _mapLimit2.default;
exports.mapSeries = _mapSeries2.default;
exports.mapValues = _mapValues2.default;
exports.mapValuesLimit = _mapValuesLimit2.default;
exports.mapValuesSeries = _mapValuesSeries2.default;
exports.memoize = _memoize2.default;
exports.nextTick = _nextTick2.default;
exports.parallel = _parallel2.default;
exports.parallelLimit = _parallelLimit2.default;
exports.priorityQueue = _priorityQueue2.default;
exports.queue = _queue2.default;
exports.race = _race2.default;
exports.reduce = _reduce2.default;
exports.reduceRight = _reduceRight2.default;
exports.reflect = _reflect2.default;
exports.reflectAll = _reflectAll2.default;
exports.reject = _reject2.default;
exports.rejectLimit = _rejectLimit2.default;
exports.rejectSeries = _rejectSeries2.default;
exports.retry = _retry2.default;
exports.retryable = _retryable2.default;
exports.seq = _seq2.default;
exports.series = _series2.default;
exports.setImmediate = _setImmediate2.default;
exports.some = _some2.default;
exports.someLimit = _someLimit2.default;
exports.someSeries = _someSeries2.default;
exports.sortBy = _sortBy2.default;
exports.timeout = _timeout2.default;
exports.times = _times2.default;
exports.timesLimit = _timesLimit2.default;
exports.timesSeries = _timesSeries2.default;
exports.transform = _transform2.default;
exports.tryEach = _tryEach2.default;
exports.unmemoize = _unmemoize2.default;
exports.until = _until2.default;
exports.waterfall = _waterfall2.default;
exports.whilst = _whilst2.default;
exports.all = _every2.default;
exports.allLimit = _everyLimit2.default;
exports.allSeries = _everySeries2.default;
exports.any = _some2.default;
exports.anyLimit = _someLimit2.default;
exports.anySeries = _someSeries2.default;
exports.find = _detect2.default;
exports.findLimit = _detectLimit2.default;
exports.findSeries = _detectSeries2.default;
exports.forEach = _each2.default;
exports.forEachSeries = _eachSeries2.default;
exports.forEachLimit = _eachLimit2.default;
exports.forEachOf = _eachOf2.default;
exports.forEachOfSeries = _eachOfSeries2.default;
exports.forEachOfLimit = _eachOfLimit2.default;
exports.inject = _reduce2.default;
exports.foldl = _reduce2.default;
exports.foldr = _reduceRight2.default;
exports.select = _filter2.default;
exports.selectLimit = _filterLimit2.default;
exports.selectSeries = _filterSeries2.default;
exports.wrapSync = _asyncify2.default;