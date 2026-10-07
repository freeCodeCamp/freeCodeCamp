"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
///////////////////////////////////////////////////////////
// ReflexEvents
// By Philippe Leefsma
// December 2016
//
///////////////////////////////////////////////////////////
var ReflexEvents = /*#__PURE__*/function () {
  function ReflexEvents() {
    (0, _classCallCheck2.default)(this, ReflexEvents);
    this._events = {};
  }

  /////////////////////////////////////////////////////////
  // Supports multiple events space-separated
  //
  /////////////////////////////////////////////////////////
  (0, _createClass2.default)(ReflexEvents, [{
    key: "on",
    value: function on(events, fct) {
      var _this = this;
      events.split(' ').forEach(function (event) {
        _this._events[event] = _this._events[event] || [];
        _this._events[event].push(fct);
      });
      return this;
    }

    /////////////////////////////////////////////////////////
    // Supports multiple events space-separated
    //
    /////////////////////////////////////////////////////////
  }, {
    key: "off",
    value: function off(events, fct) {
      var _this2 = this;
      if (events == undefined) {
        this._events = {};
        return;
      }
      events.split(' ').forEach(function (event) {
        if (event in _this2._events === false) return;
        if (fct) {
          _this2._events[event].splice(_this2._events[event].indexOf(fct), 1);
        } else {
          _this2._events[event] = [];
        }
      });
      return this;
    }
  }, {
    key: "emit",
    value: function emit(event /* , args... */) {
      if (this._events[event] === undefined) return;
      var tmpArray = this._events[event].slice();
      for (var i = 0; i < tmpArray.length; ++i) {
        var result = tmpArray[i].apply(this, Array.prototype.slice.call(arguments, 1));
        if (result !== undefined) {
          return result;
        }
      }
      return undefined;
    }
  }]);
  return ReflexEvents;
}();
var _default = ReflexEvents;
exports.default = _default;