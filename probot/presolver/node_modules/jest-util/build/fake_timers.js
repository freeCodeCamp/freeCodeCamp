'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jestMessageUtil;

function _load_jestMessageUtil() {
  return _jestMessageUtil = require('jest-message-util');
}

var _set_global;

function _load_set_global() {
  return _set_global = _interopRequireDefault(require('./set_global'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * We don't know the type of arguments for a callback ahead of time which is why
 * we are disabling the flowtype/no-weak-types rule here.
 */

/* eslint-disable flowtype/no-weak-types */

/* eslint-enable flowtype/no-weak-types */

const MS_IN_A_YEAR = 31536000000; /**
                                   * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                   *
                                   * This source code is licensed under the MIT license found in the
                                   * LICENSE file in the root directory of this source tree.
                                   *
                                   * 
                                   */

class FakeTimers {

  constructor(_ref) {
    let global = _ref.global,
        moduleMocker = _ref.moduleMocker,
        timerConfig = _ref.timerConfig,
        config = _ref.config,
        maxLoops = _ref.maxLoops;

    this._global = global;
    this._timerConfig = timerConfig;
    this._config = config;
    this._maxLoops = maxLoops || 100000;
    this._uuidCounter = 1;
    this._moduleMocker = moduleMocker;

    // Store original timer APIs for future reference
    this._timerAPIs = {
      clearImmediate: global.clearImmediate,
      clearInterval: global.clearInterval,
      clearTimeout: global.clearTimeout,
      nextTick: global.process && global.process.nextTick,
      setImmediate: global.setImmediate,
      setInterval: global.setInterval,
      setTimeout: global.setTimeout
    };

    this.reset();
    this._createMocks();

    // These globally-accessible function are now deprecated!
    // They will go away very soon, so do not use them!
    // Instead, use the versions available on the `jest` object
    global.mockRunTicksRepeatedly = this.runAllTicks.bind(this);
    global.mockRunTimersOnce = this.runOnlyPendingTimers.bind(this);
    global.mockAdvanceTimersByTime = this.advanceTimersByTime.bind(this);
    global.mockRunTimersRepeatedly = this.runAllTimers.bind(this);
    global.mockClearTimers = this.clearAllTimers.bind(this);
    global.mockGetTimersCount = () => Object.keys(this._timers).length;
  }

  clearAllTimers() {
    this._immediates.forEach(immediate => this._fakeClearImmediate(immediate.uuid));
    for (const uuid in this._timers) {
      delete this._timers[uuid];
    }
  }

  dispose() {
    this._disposed = true;
    this.clearAllTimers();
  }

  reset() {
    this._cancelledTicks = {};
    this._cancelledImmediates = {};
    this._now = 0;
    this._ticks = [];
    this._immediates = [];
    this._timers = {};
  }

  runAllTicks() {
    this._checkFakeTimers();
    // Only run a generous number of ticks and then bail.
    // This is just to help avoid recursive loops
    let i;
    for (i = 0; i < this._maxLoops; i++) {
      const tick = this._ticks.shift();

      if (tick === undefined) {
        break;
      }

      if (!this._cancelledTicks.hasOwnProperty(tick.uuid)) {
        // Callback may throw, so update the map prior calling.
        this._cancelledTicks[tick.uuid] = true;
        tick.callback();
      }
    }

    if (i === this._maxLoops) {
      throw new Error('Ran ' + this._maxLoops + ' ticks, and there are still more! ' + "Assuming we've hit an infinite recursion and bailing out...");
    }
  }

  runAllImmediates() {
    this._checkFakeTimers();
    // Only run a generous number of immediates and then bail.
    let i;
    for (i = 0; i < this._maxLoops; i++) {
      const immediate = this._immediates.shift();
      if (immediate === undefined) {
        break;
      }
      this._runImmediate(immediate);
    }

    if (i === this._maxLoops) {
      throw new Error('Ran ' + this._maxLoops + ' immediates, and there are still more! Assuming ' + "we've hit an infinite recursion and bailing out...");
    }
  }

  _runImmediate(immediate) {
    if (!this._cancelledImmediates.hasOwnProperty(immediate.uuid)) {
      // Callback may throw, so update the map prior calling.
      this._cancelledImmediates[immediate.uuid] = true;
      immediate.callback();
    }
  }

  runAllTimers() {
    this._checkFakeTimers();
    this.runAllTicks();
    this.runAllImmediates();

    // Only run a generous number of timers and then bail.
    // This is just to help avoid recursive loops
    let i;
    for (i = 0; i < this._maxLoops; i++) {
      const nextTimerHandle = this._getNextTimerHandle();

      // If there are no more timer handles, stop!
      if (nextTimerHandle === null) {
        break;
      }

      this._runTimerHandle(nextTimerHandle);

      // Some of the immediate calls could be enqueued
      // during the previous handling of the timers, we should
      // run them as well.
      if (this._immediates.length) {
        this.runAllImmediates();
      }

      if (this._ticks.length) {
        this.runAllTicks();
      }
    }

    if (i === this._maxLoops) {
      throw new Error('Ran ' + this._maxLoops + ' timers, and there are still more! ' + "Assuming we've hit an infinite recursion and bailing out...");
    }
  }

  runOnlyPendingTimers() {
    const timers = Object.assign({}, this._timers);
    this._checkFakeTimers();
    this._immediates.forEach(this._runImmediate, this);
    Object.keys(timers).sort((left, right) => timers[left].expiry - timers[right].expiry).forEach(this._runTimerHandle, this);
  }

  advanceTimersByTime(msToRun) {
    this._checkFakeTimers();
    // Only run a generous number of timers and then bail.
    // This is just to help avoid recursive loops
    let i;
    for (i = 0; i < this._maxLoops; i++) {
      const timerHandle = this._getNextTimerHandle();

      // If there are no more timer handles, stop!
      if (timerHandle === null) {
        break;
      }

      const nextTimerExpiry = this._timers[timerHandle].expiry;
      if (this._now + msToRun < nextTimerExpiry) {
        // There are no timers between now and the target we're running to, so
        // adjust our time cursor and quit
        this._now += msToRun;
        break;
      } else {
        msToRun -= nextTimerExpiry - this._now;
        this._now = nextTimerExpiry;
        this._runTimerHandle(timerHandle);
      }
    }

    if (i === this._maxLoops) {
      throw new Error('Ran ' + this._maxLoops + ' timers, and there are still more! ' + "Assuming we've hit an infinite recursion and bailing out...");
    }
  }

  runWithRealTimers(cb) {
    const prevClearImmediate = this._global.clearImmediate;
    const prevClearInterval = this._global.clearInterval;
    const prevClearTimeout = this._global.clearTimeout;
    const prevNextTick = this._global.process.nextTick;
    const prevSetImmediate = this._global.setImmediate;
    const prevSetInterval = this._global.setInterval;
    const prevSetTimeout = this._global.setTimeout;

    this.useRealTimers();

    let cbErr = null;
    let errThrown = false;
    try {
      cb();
    } catch (e) {
      errThrown = true;
      cbErr = e;
    }

    this._global.clearImmediate = prevClearImmediate;
    this._global.clearInterval = prevClearInterval;
    this._global.clearTimeout = prevClearTimeout;
    this._global.process.nextTick = prevNextTick;
    this._global.setImmediate = prevSetImmediate;
    this._global.setInterval = prevSetInterval;
    this._global.setTimeout = prevSetTimeout;

    if (errThrown) {
      throw cbErr;
    }
  }

  useRealTimers() {
    const global = this._global;
    (0, (_set_global || _load_set_global()).default)(global, 'clearImmediate', this._timerAPIs.clearImmediate);
    (0, (_set_global || _load_set_global()).default)(global, 'clearInterval', this._timerAPIs.clearInterval);
    (0, (_set_global || _load_set_global()).default)(global, 'clearTimeout', this._timerAPIs.clearTimeout);
    (0, (_set_global || _load_set_global()).default)(global, 'setImmediate', this._timerAPIs.setImmediate);
    (0, (_set_global || _load_set_global()).default)(global, 'setInterval', this._timerAPIs.setInterval);
    (0, (_set_global || _load_set_global()).default)(global, 'setTimeout', this._timerAPIs.setTimeout);

    global.process.nextTick = this._timerAPIs.nextTick;
  }

  useFakeTimers() {
    this._createMocks();

    const global = this._global;
    (0, (_set_global || _load_set_global()).default)(global, 'clearImmediate', this._fakeTimerAPIs.clearImmediate);
    (0, (_set_global || _load_set_global()).default)(global, 'clearInterval', this._fakeTimerAPIs.clearInterval);
    (0, (_set_global || _load_set_global()).default)(global, 'clearTimeout', this._fakeTimerAPIs.clearTimeout);
    (0, (_set_global || _load_set_global()).default)(global, 'setImmediate', this._fakeTimerAPIs.setImmediate);
    (0, (_set_global || _load_set_global()).default)(global, 'setInterval', this._fakeTimerAPIs.setInterval);
    (0, (_set_global || _load_set_global()).default)(global, 'setTimeout', this._fakeTimerAPIs.setTimeout);

    global.process.nextTick = this._fakeTimerAPIs.nextTick;
  }

  _checkFakeTimers() {
    if (this._global.setTimeout !== this._fakeTimerAPIs.setTimeout) {
      this._global.console.warn(`A function to advance timers was called but the timers API is not ` + `mocked with fake timers. Call \`jest.useFakeTimers()\` in this ` + `test or enable fake timers globally by setting ` + `\`"timers": "fake"\` in ` + `the configuration file. This warning is likely a result of a ` + `default configuration change in Jest 15.\n\n` + `Release Blog Post: https://facebook.github.io/jest/blog/2016/09/01/jest-15.html\n` + `Stack Trace:\n` + (0, (_jestMessageUtil || _load_jestMessageUtil()).formatStackTrace)(new Error().stack, this._config, {
        noStackTrace: false
      }));
    }
  }

  _createMocks() {
    const fn = impl => this._moduleMocker.fn().mockImplementation(impl);

    this._fakeTimerAPIs = {
      clearImmediate: fn(this._fakeClearImmediate.bind(this)),
      clearInterval: fn(this._fakeClearTimer.bind(this)),
      clearTimeout: fn(this._fakeClearTimer.bind(this)),
      nextTick: fn(this._fakeNextTick.bind(this)),
      setImmediate: fn(this._fakeSetImmediate.bind(this)),
      setInterval: fn(this._fakeSetInterval.bind(this)),
      setTimeout: fn(this._fakeSetTimeout.bind(this))
    };
  }

  _fakeClearTimer(timerRef) {
    const uuid = this._timerConfig.refToId(timerRef);

    if (uuid && this._timers.hasOwnProperty(uuid)) {
      delete this._timers[String(uuid)];
    }
  }

  _fakeClearImmediate(uuid) {
    this._cancelledImmediates[uuid] = true;
  }

  _fakeNextTick(callback) {
    if (this._disposed) {
      return;
    }

    const args = [];
    for (let ii = 1, ll = arguments.length; ii < ll; ii++) {
      args.push(arguments[ii]);
    }

    const uuid = String(this._uuidCounter++);

    this._ticks.push({
      callback: () => callback.apply(null, args),
      uuid
    });

    const cancelledTicks = this._cancelledTicks;
    this._timerAPIs.nextTick(() => {
      if (this._blocked) {
        return;
      }
      if (!cancelledTicks.hasOwnProperty(uuid)) {
        // Callback may throw, so update the map prior calling.
        cancelledTicks[uuid] = true;
        callback.apply(null, args);
      }
    });
  }

  _fakeSetImmediate(callback) {
    if (this._disposed) {
      return null;
    }

    const args = [];
    for (let ii = 1, ll = arguments.length; ii < ll; ii++) {
      args.push(arguments[ii]);
    }

    const uuid = this._uuidCounter++;

    this._immediates.push({
      callback: () => callback.apply(null, args),
      uuid: String(uuid)
    });

    const cancelledImmediates = this._cancelledImmediates;
    this._timerAPIs.setImmediate(() => {
      if (!cancelledImmediates.hasOwnProperty(uuid)) {
        // Callback may throw, so update the map prior calling.
        cancelledImmediates[String(uuid)] = true;
        callback.apply(null, args);
      }
    });

    return uuid;
  }

  _fakeSetInterval(callback, intervalDelay) {
    if (this._disposed) {
      return null;
    }

    if (intervalDelay == null) {
      intervalDelay = 0;
    }

    const args = [];
    for (let ii = 2, ll = arguments.length; ii < ll; ii++) {
      args.push(arguments[ii]);
    }

    const uuid = this._uuidCounter++;

    this._timers[String(uuid)] = {
      callback: () => callback.apply(null, args),
      expiry: this._now + intervalDelay,
      interval: intervalDelay,
      type: 'interval'
    };

    return this._timerConfig.idToRef(uuid);
  }

  _fakeSetTimeout(callback, delay) {
    if (this._disposed) {
      return null;
    }

    if (delay == null) {
      delay = 0;
    }

    const args = [];
    for (let ii = 2, ll = arguments.length; ii < ll; ii++) {
      args.push(arguments[ii]);
    }

    const uuid = this._uuidCounter++;

    this._timers[String(uuid)] = {
      callback: () => callback.apply(null, args),
      expiry: this._now + delay,
      interval: null,
      type: 'timeout'
    };

    return this._timerConfig.idToRef(uuid);
  }

  _getNextTimerHandle() {
    let nextTimerHandle = null;
    let uuid;
    let soonestTime = MS_IN_A_YEAR;
    let timer;
    for (uuid in this._timers) {
      timer = this._timers[uuid];
      if (timer.expiry < soonestTime) {
        soonestTime = timer.expiry;
        nextTimerHandle = uuid;
      }
    }

    return nextTimerHandle;
  }

  _runTimerHandle(timerHandle) {
    const timer = this._timers[timerHandle];

    if (!timer) {
      return;
    }

    switch (timer.type) {
      case 'timeout':
        const callback = timer.callback;
        delete this._timers[timerHandle];
        callback();
        break;

      case 'interval':
        timer.expiry = this._now + timer.interval;
        timer.callback();
        break;

      default:
        throw new Error('Unexpected timer type: ' + timer.type);
    }
  }
}
exports.default = FakeTimers;