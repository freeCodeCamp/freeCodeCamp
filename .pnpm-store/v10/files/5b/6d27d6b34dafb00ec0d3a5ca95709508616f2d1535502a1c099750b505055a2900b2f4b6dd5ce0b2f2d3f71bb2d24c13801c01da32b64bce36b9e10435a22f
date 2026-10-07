'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('./_virtual/_tslib.js');
var State = require('./State.js');

function matchState(state, patterns, defaultValue) {
  var e_1, _a;

  var resolvedState = State.State.from(state, state instanceof State.State ? state.context : undefined);

  try {
    for (var patterns_1 = _tslib.__values(patterns), patterns_1_1 = patterns_1.next(); !patterns_1_1.done; patterns_1_1 = patterns_1.next()) {
      var _b = _tslib.__read(patterns_1_1.value, 2),
          stateValue = _b[0],
          getValue = _b[1];

      if (resolvedState.matches(stateValue)) {
        return getValue(resolvedState);
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (patterns_1_1 && !patterns_1_1.done && (_a = patterns_1.return)) _a.call(patterns_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  return defaultValue(resolvedState);
}

exports.matchState = matchState;
