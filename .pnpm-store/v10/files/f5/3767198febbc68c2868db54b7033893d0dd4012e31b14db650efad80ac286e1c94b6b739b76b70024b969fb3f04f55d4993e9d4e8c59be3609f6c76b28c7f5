"use strict";

var _reactDom = require("react-dom");

var _testUtils = require("react-dom/test-utils");

var _testUtils2 = _interopRequireDefault(_testUtils);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Element = require("../components/Element.js");

var _Element2 = _interopRequireDefault(_Element);

var _Link = require("../components/Link.js");

var _Link2 = _interopRequireDefault(_Link);

var _scrollEvents = require("../mixins/scroll-events.js");

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

var _animateScroll = require("../mixins/animate-scroll.js");

var _animateScroll2 = _interopRequireDefault(_animateScroll);

var _expect = require("expect");

var _expect2 = _interopRequireDefault(_expect);

var _utility = require("./utility");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Test */

/* Components to test */
describe("Events", function () {
  var node = void 0;
  var scrollDuration = 10;

  var component = function component(horizontal) {
    var style = function () {
      if (horizontal) {
        return {
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap"
        };
      } else {
        return undefined;
      }
    }();
    return _react2.default.createElement(
      "div",
      { style: { style: style } },
      _react2.default.createElement(
        "ul",
        null,
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            _Link2.default,
            {
              to: "test1",
              spy: true,
              smooth: true,
              duration: scrollDuration,
              horizontal: horizontal
            },
            "Test 1"
          )
        ),
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            _Link2.default,
            {
              to: "test2",
              spy: true,
              smooth: true,
              duration: scrollDuration,
              horizontal: horizontal
            },
            "Test 2"
          )
        ),
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            _Link2.default,
            {
              to: "test3",
              spy: true,
              smooth: true,
              duration: scrollDuration,
              horizontal: horizontal
            },
            "Test 3"
          )
        ),
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            _Link2.default,
            {
              to: "test4",
              spy: true,
              smooth: true,
              duration: scrollDuration,
              horizontal: horizontal
            },
            "Test 4"
          )
        ),
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            _Link2.default,
            {
              to: "test5",
              spy: true,
              smooth: true,
              duration: scrollDuration,
              horizontal: horizontal
            },
            "Test 5"
          )
        ),
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            _Link2.default,
            {
              to: "test6",
              spy: true,
              smooth: true,
              duration: scrollDuration,
              horizontal: horizontal
            },
            "Test 6"
          )
        )
      ),
      _react2.default.createElement(
        _Element2.default,
        { name: "test1", className: "element" },
        "test 1"
      ),
      _react2.default.createElement(
        _Element2.default,
        { name: "test2", className: "element" },
        "test 2"
      ),
      _react2.default.createElement(
        _Element2.default,
        { name: "test3", className: "element" },
        "test 3"
      ),
      _react2.default.createElement(
        _Element2.default,
        { name: "test4", className: "element" },
        "test 4"
      ),
      _react2.default.createElement(
        _Element2.default,
        { name: "test5", className: "element" },
        "test 5"
      ),
      _react2.default.createElement(
        "div",
        { id: "test6", className: "element" },
        "test 6"
      )
    );
  };

  beforeEach(function () {
    node = document.createElement("div");
    document.body.innerHtml = "";
    document.body.appendChild(node);
  });

  afterEach(function () {
    _scrollEvents2.default.scrollEvent.remove("begin");
    _scrollEvents2.default.scrollEvent.remove("end");
    (0, _reactDom.unmountComponentAtNode)(node);
    document.body.removeChild(node);
  });

  it("direct link calls begin and end event with vertical scroll", function (done) {
    (0, _reactDom.render)(component(false), node, function () {
      var link = node.querySelectorAll("a")[5];

      var begin = function begin(to, target) {
        (0, _expect2.default)(to).toEqual("test6");
        (0, _expect2.default)(_testUtils2.default.isDOMComponent(target)).toEqual(true);
      };

      var end = function end(to, target) {
        (0, _expect2.default)(to).toEqual("test6");
        (0, _expect2.default)(_testUtils2.default.isDOMComponent(target)).toEqual(true);
        done();
      };

      _scrollEvents2.default.scrollEvent.register("begin", begin);
      _scrollEvents2.default.scrollEvent.register("end", end);

      _testUtils2.default.Simulate.click(link);
    });
  });

  it("direct link calls begin and end event with horizontal scroll", function (done) {
    (0, _utility.renderHorizontal)(component(true), node, function () {
      var link = node.querySelectorAll("a")[5];

      var begin = function begin(to, target) {
        (0, _expect2.default)(to).toEqual("test6");
        (0, _expect2.default)(_testUtils2.default.isDOMComponent(target)).toEqual(true);
      };

      var end = function end(to, target) {
        (0, _expect2.default)(to).toEqual("test6");
        (0, _expect2.default)(_testUtils2.default.isDOMComponent(target)).toEqual(true);
        done();
      };

      _scrollEvents2.default.scrollEvent.register("begin", begin);
      _scrollEvents2.default.scrollEvent.register("end", end);

      _testUtils2.default.Simulate.click(link);
    });
  });

  it("it calls begin and end event with vertical scroll", function (done) {
    (0, _reactDom.render)(component(false), node, function () {
      var link = node.querySelectorAll("a")[2];

      var begin = function begin(to, target) {
        (0, _expect2.default)(to).toEqual("test3");
        (0, _expect2.default)(_testUtils2.default.isDOMComponent(target)).toEqual(true);
      };

      var end = function end(to, target) {
        (0, _expect2.default)(to).toEqual("test3");
        (0, _expect2.default)(_testUtils2.default.isDOMComponent(target)).toEqual(true);
      };

      _scrollEvents2.default.scrollEvent.register("begin", begin);
      _scrollEvents2.default.scrollEvent.register("end", end);

      _testUtils2.default.Simulate.click(link);

      // wait to actually scroll so it doesn't affect the next test!
      setTimeout(function () {
        done();
      }, scrollDuration * 3);
    });
  });

  it("it calls begin and end event with horizontal scroll", function (done) {
    (0, _utility.renderHorizontal)(component(true), node, function () {
      var link = node.querySelectorAll("a")[2];

      var begin = function begin(to, target) {
        (0, _expect2.default)(to).toEqual("test3");
        (0, _expect2.default)(_testUtils2.default.isDOMComponent(target)).toEqual(true);
      };

      var end = function end(to, target) {
        (0, _expect2.default)(to).toEqual("test3");
        (0, _expect2.default)(_testUtils2.default.isDOMComponent(target)).toEqual(true);
      };

      _scrollEvents2.default.scrollEvent.register("begin", begin);
      _scrollEvents2.default.scrollEvent.register("end", end);

      _testUtils2.default.Simulate.click(link);

      // wait to actually scroll so it doesn't affect the next test!
      setTimeout(function () {
        done();
      }, scrollDuration * 3);
    });
  });

  it('calls "end" event on scrollTo vertical', function (done) {
    (0, _reactDom.render)(component(false), node, function () {
      var end = function end(to, target, endPosition) {
        (0, _expect2.default)(endPosition).toEqual(100);
        done();
      };

      _scrollEvents2.default.scrollEvent.register("end", end);

      _animateScroll2.default.scrollTo(100, scrollDuration);
    });
  });

  it('calls "end" event on scrollTo horizontal', function (done) {
    (0, _utility.renderHorizontal)(component(true), node, function () {
      var end = function end(to, target, endPosition) {
        (0, _expect2.default)(endPosition).toEqual(100);
        done();
      };

      _scrollEvents2.default.scrollEvent.register("end", end);

      _animateScroll2.default.scrollTo(100, {
        duration: scrollDuration,
        horizontal: true
      });
    });
  });
}); /* React */