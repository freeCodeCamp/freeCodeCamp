import { __assign } from './_virtual/_tslib.js';
import { toEventObject } from './utils.js';

function toggle(onState, offState, eventType) {
  var _a, _b, _c;

  return _a = {}, _a[onState] = {
    on: (_b = {}, _b[eventType] = offState, _b)
  }, _a[offState] = {
    on: (_c = {}, _c[eventType] = onState, _c)
  }, _a;
}
var defaultSequencePatternOptions = {
  nextEvent: 'NEXT',
  prevEvent: 'PREV'
};
function sequence(items, options) {
  var resolvedOptions = __assign(__assign({}, defaultSequencePatternOptions), options);

  var states = {};
  var nextEventObject = resolvedOptions.nextEvent === undefined ? undefined : toEventObject(resolvedOptions.nextEvent);
  var prevEventObject = resolvedOptions.prevEvent === undefined ? undefined : toEventObject(resolvedOptions.prevEvent);
  items.forEach(function (item, i) {
    var state = {
      on: {}
    };

    if (i + 1 === items.length) {
      state.type = 'final';
    }

    if (nextEventObject && i + 1 < items.length) {
      state.on[nextEventObject.type] = items[i + 1];
    }

    if (prevEventObject && i > 0) {
      state.on[prevEventObject.type] = items[i - 1];
    }

    states[item] = state;
  });
  return {
    initial: items[0],
    states: states
  };
}

export { sequence, toggle };
