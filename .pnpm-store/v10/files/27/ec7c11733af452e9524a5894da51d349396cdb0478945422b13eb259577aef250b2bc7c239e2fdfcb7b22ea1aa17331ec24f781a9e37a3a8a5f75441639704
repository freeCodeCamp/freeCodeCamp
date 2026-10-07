'use strict';
var InternalStateModule = require('../internals/internal-state');
var createIteratorConstructor = require('../internals/iterator-create-constructor');
var createIterResultObject = require('../internals/create-iter-result-object');
var isNullOrUndefined = require('../internals/is-null-or-undefined');
var isObject = require('../internals/is-object');
var defineBuiltInAccessor = require('../internals/define-built-in-accessor');
var DESCRIPTORS = require('../internals/descriptors');

var INCORRECT_RANGE = 'Incorrect Iterator.range arguments';
var NUMERIC_RANGE_ITERATOR = 'NumericRangeIterator';

var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(NUMERIC_RANGE_ITERATOR);

var $RangeError = RangeError;
var $TypeError = TypeError;

var $RangeIterator = createIteratorConstructor(function NumericRangeIterator(start, end, option, type, zero, one) {
  // TODO: Drop the first `typeof` check after removing legacy methods in `core-js@4`
  if (typeof start != type || (end !== Infinity && end !== -Infinity && typeof end != type)) {
    throw new $TypeError(INCORRECT_RANGE);
  }
  if (start === Infinity || start === -Infinity) {
    throw new $RangeError(INCORRECT_RANGE);
  }
  var ifIncrease = end > start;
  var inclusiveEnd = false;
  var step;
  if (option === undefined) {
    step = undefined;
  } else if (isObject(option)) {
    step = option.step;
    inclusiveEnd = !!option.inclusive;
  } else if (typeof option == type) {
    step = option;
  } else {
    throw new $TypeError(INCORRECT_RANGE);
  }
  if (isNullOrUndefined(step)) {
    step = ifIncrease ? one : -one;
  }
  if (typeof step != type) {
    throw new $TypeError(INCORRECT_RANGE);
  }
  if (step === Infinity || step === -Infinity || (step === zero && start !== end)) {
    throw new $RangeError(INCORRECT_RANGE);
  }
  // eslint-disable-next-line no-self-compare -- NaN check
  var hitsEnd = start !== start || end !== end || step !== step || (end > start) !== (step > zero);
  setInternalState(this, {
    type: NUMERIC_RANGE_ITERATOR,
    start: start,
    end: end,
    step: step,
    inclusive: inclusiveEnd,
    hitsEnd: hitsEnd,
    currentCount: zero,
    zero: zero
  });
  if (!DESCRIPTORS) {
    this.start = start;
    this.end = end;
    this.step = step;
    this.inclusive = inclusiveEnd;
  }
}, NUMERIC_RANGE_ITERATOR, function next() {
  var state = getInternalState(this);
  if (state.hitsEnd) return createIterResultObject(undefined, true);
  var start = state.start;
  var end = state.end;
  var step = state.step;
  var currentYieldingValue = start + (step * state.currentCount++);
  if (currentYieldingValue === end) state.hitsEnd = true;
  var inclusiveEnd = state.inclusive;
  var endCondition;
  if (end > start) {
    endCondition = inclusiveEnd ? currentYieldingValue > end : currentYieldingValue >= end;
  } else {
    endCondition = inclusiveEnd ? end > currentYieldingValue : end >= currentYieldingValue;
  }
  if (endCondition) {
    state.hitsEnd = true;
    return createIterResultObject(undefined, true);
  } return createIterResultObject(currentYieldingValue, false);
});

var addGetter = function (key) {
  defineBuiltInAccessor($RangeIterator.prototype, key, {
    get: function () {
      return getInternalState(this)[key];
    },
    set: function () { /* empty */ },
    configurable: true,
    enumerable: false
  });
};

if (DESCRIPTORS) {
  addGetter('start');
  addGetter('end');
  addGetter('inclusive');
  addGetter('step');
}

module.exports = $RangeIterator;
