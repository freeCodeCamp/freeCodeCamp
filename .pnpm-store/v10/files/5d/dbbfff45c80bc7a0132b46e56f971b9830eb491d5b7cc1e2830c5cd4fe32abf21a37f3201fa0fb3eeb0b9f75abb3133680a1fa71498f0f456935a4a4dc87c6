/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */
// flowlint ambiguous-object-type:error
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _createForOfIteratorHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/createForOfIteratorHelper"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var RelayObservable = require('../network/RelayObservable');

var invariant = require('invariant');

/**
 * An implementation of a `ReplaySubject` for Relay Observables.
 *
 * Records events provided and synchronously plays them back to new subscribers,
 * as well as forwarding new asynchronous events.
 */
var RelayReplaySubject = /*#__PURE__*/function () {
  function RelayReplaySubject() {
    var _this = this;

    (0, _defineProperty2["default"])(this, "_complete", false);
    (0, _defineProperty2["default"])(this, "_events", []);
    (0, _defineProperty2["default"])(this, "_sinks", new Set());
    (0, _defineProperty2["default"])(this, "_subscription", []);
    this._observable = RelayObservable.create(function (sink) {
      _this._sinks.add(sink);

      var events = _this._events;

      for (var i = 0; i < events.length; i++) {
        if (sink.closed) {
          // Bail if an event made the observer unsubscribe.
          break;
        }

        var event = events[i];

        switch (event.kind) {
          case 'complete':
            sink.complete();
            break;

          case 'error':
            sink.error(event.error);
            break;

          case 'next':
            sink.next(event.data);
            break;

          default:
            event.kind;
            !false ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayReplaySubject: Unknown event kind `%s`.', event.kind) : invariant(false) : void 0;
        }
      }

      return function () {
        _this._sinks["delete"](sink);
      };
    });
  }

  var _proto = RelayReplaySubject.prototype;

  _proto.complete = function complete() {
    if (this._complete === true) {
      return;
    }

    this._complete = true;

    this._events.push({
      kind: 'complete'
    });

    this._sinks.forEach(function (sink) {
      return sink.complete();
    });
  };

  _proto.error = function error(_error) {
    if (this._complete === true) {
      return;
    }

    this._complete = true;

    this._events.push({
      kind: 'error',
      error: _error
    });

    this._sinks.forEach(function (sink) {
      return sink.error(_error);
    });
  };

  _proto.next = function next(data) {
    if (this._complete === true) {
      return;
    }

    this._events.push({
      kind: 'next',
      data: data
    });

    this._sinks.forEach(function (sink) {
      return sink.next(data);
    });
  };

  _proto.subscribe = function subscribe(observer) {
    var subscription = this._observable.subscribe(observer);

    this._subscription.push(subscription);

    return subscription;
  };

  _proto.unsubscribe = function unsubscribe() {
    var _iterator = (0, _createForOfIteratorHelper2["default"])(this._subscription),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var subscription = _step.value;
        subscription.unsubscribe();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    this._subscription = [];
  };

  _proto.getObserverCount = function getObserverCount() {
    return this._sinks.size;
  };

  return RelayReplaySubject;
}();

module.exports = RelayReplaySubject;