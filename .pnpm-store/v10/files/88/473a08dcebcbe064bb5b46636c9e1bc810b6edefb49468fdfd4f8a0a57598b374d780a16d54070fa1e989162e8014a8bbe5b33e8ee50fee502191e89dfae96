"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = require("react-dom");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _expect = require("expect");

var _expect2 = _interopRequireDefault(_expect);

var _animateScroll = require("../mixins/animate-scroll.js");

var _animateScroll2 = _interopRequireDefault(_animateScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* React */


describe("Scroll cancelation", function () {
  var node = document.createElement("div");
  document.body.innerHtml = "";

  document.body.appendChild(node);

  beforeEach(function () {
    (0, _reactDom.unmountComponentAtNode)(node);
    window.scrollTo(0, 0);
  });

  describe("when scrolling is triggered by keydown handlers vertically", function () {
    it("can scroll on keydown multiple times in a row", function (done) {
      var duration = 100;
      var distance = 100;

      var TestComponent = function (_React$Component) {
        _inherits(TestComponent, _React$Component);

        function TestComponent() {
          var _ref;

          var _temp, _this, _ret;

          _classCallCheck(this, TestComponent);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TestComponent.__proto__ || Object.getPrototypeOf(TestComponent)).call.apply(_ref, [this].concat(args))), _this), _this.handleKeyDown = function (e) {
            _animateScroll2.default.scrollMore(distance, { smooth: true, duration: duration });
            e.stopPropagation();
          }, _temp), _possibleConstructorReturn(_this, _ret);
        }

        _createClass(TestComponent, [{
          key: "render",
          value: function render() {
            return _react2.default.createElement(
              "div",
              null,
              _react2.default.createElement("input", { onKeyDown: this.handleKeyDown }),
              _react2.default.createElement("div", {
                style: {
                  height: "3000px",
                  width: "100%",
                  background: "repeating-linear-gradient(to bottom, white, black 100px)"
                }
              })
            );
          }
        }]);

        return TestComponent;
      }(_react2.default.Component);

      (0, _reactDom.render)(_react2.default.createElement(TestComponent, null), node);

      dispatchDOMKeydownEvent(13, node.querySelector("input"));
      wait(duration * 2, function () {
        (0, _expect2.default)(window.scrollY || window.pageYOffset).toBeGreaterThanOrEqualTo(distance);

        dispatchDOMKeydownEvent(13, node.querySelector("input"));
        wait(duration * 2, function () {
          (0, _expect2.default)(window.scrollY || window.pageYOffset).toBeGreaterThanOrEqualTo(distance * 2);

          dispatchDOMKeydownEvent(13, node.querySelector("input"));
          wait(duration * 2, function () {
            (0, _expect2.default)(window.scrollY || window.pageYOffset).toBeGreaterThanOrEqualTo(distance * 3);
            done();
          });
        });
      });
    });
  });

  describe("when scrolling is triggered by keydown handlers horizontally", function () {
    it("can scroll on keydown multiple times in a row", function (done) {
      var duration = 100;
      var distance = 100;

      var TestComponent = function (_React$Component2) {
        _inherits(TestComponent, _React$Component2);

        function TestComponent() {
          var _ref2;

          var _temp2, _this2, _ret2;

          _classCallCheck(this, TestComponent);

          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = TestComponent.__proto__ || Object.getPrototypeOf(TestComponent)).call.apply(_ref2, [this].concat(args))), _this2), _this2.handleKeyDown = function (e) {
            _animateScroll2.default.scrollMore(distance, {
              smooth: true,
              duration: duration,
              horizontal: true
            });
            e.stopPropagation();
          }, _temp2), _possibleConstructorReturn(_this2, _ret2);
        }

        _createClass(TestComponent, [{
          key: "render",
          value: function render() {
            return _react2.default.createElement(
              "div",
              null,
              _react2.default.createElement("input", { onKeyDown: this.handleKeyDown }),
              _react2.default.createElement("div", {
                style: {
                  width: "3000px",
                  height: "100%",
                  background: "repeating-linear-gradient(to right, white, black 100px)"
                }
              })
            );
          }
        }]);

        return TestComponent;
      }(_react2.default.Component);

      (0, _reactDom.render)(_react2.default.createElement(TestComponent, null), node);

      dispatchDOMKeydownEvent(13, node.querySelector("input"));
      wait(duration * 2, function () {
        (0, _expect2.default)(window.scrollX || window.pageXOffset).toBeGreaterThanOrEqualTo(distance);

        dispatchDOMKeydownEvent(13, node.querySelector("input"));
        wait(duration * 2, function () {
          (0, _expect2.default)(window.scrollX || window.pageXOffset).toBeGreaterThanOrEqualTo(distance * 2);

          dispatchDOMKeydownEvent(13, node.querySelector("input"));
          wait(duration * 2, function () {
            (0, _expect2.default)(window.scrollX || window.pageXOffset).toBeGreaterThanOrEqualTo(distance * 3);
            done();
          });
        });
      });
    });
  });
});

var wait = function wait(ms, cb) {
  setTimeout(cb, ms);
};

var dispatchDOMKeydownEvent = function dispatchDOMKeydownEvent(keyCode, element) {
  var event = document.createEvent("KeyboardEvent");
  var initMethod = typeof event.initKeyboardEvent !== "undefined" ? "initKeyboardEvent" : "initKeyEvent";
  event[initMethod]("keydown", true, true, window, 0, 0, 0, 0, 0, keyCode);
  element.dispatchEvent(event);
};