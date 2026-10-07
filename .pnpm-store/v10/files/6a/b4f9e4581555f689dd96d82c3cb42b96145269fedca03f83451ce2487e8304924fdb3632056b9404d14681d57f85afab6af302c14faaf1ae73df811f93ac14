"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _testUtils = require("react-dom/test-utils");

var _expect = require("expect");

var _expect2 = _interopRequireDefault(_expect);

var _Button = require("../components/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Element = require("../components/Element");

var _Element2 = _interopRequireDefault(_Element);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Button", function () {
  var node = null;

  beforeEach(function () {
    node = document.createElement("div");
    document.body.appendChild(node);
  });

  afterEach(function () {
    (0, _reactDom.unmountComponentAtNode)(node);
    node.remove();
    node = null;
  });

  it("renders Button with correct text", function (done) {
    var buttonText = 'Click me';
    var component = _react2.default.createElement(
      _Button2.default,
      { to: "test1", spy: true, smooth: true, duration: 500 },
      buttonText
    );

    (0, _reactDom.render)(component, node, function () {
      (0, _expect2.default)(node.textContent).toEqual('Click me');
      done();
    });
  });

  it("renders Button with children component", function (done) {
    var component = _react2.default.createElement(
      _Button2.default,
      { to: "test1", spy: true, smooth: true, duration: 500 },
      _react2.default.createElement(
        "div",
        null,
        "Children"
      )
    );

    (0, _reactDom.render)(component, node, function () {
      var divElem = node.querySelector("div");
      (0, _expect2.default)(divElem.textContent).toEqual('Children');
      done();
    });
  });

  it("scrolls to matching Element and adds 'active' class to Button if spy is true", function (done) {
    var component = _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "ul",
        null,
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            _Button2.default,
            { to: "test3", spy: true },
            "Test 3"
          )
        )
      ),
      _react2.default.createElement(
        _Element2.default,
        { name: "test1", className: "element", style: { width: "100vw", height: "100vh" } },
        "test1"
      ),
      _react2.default.createElement(
        _Element2.default,
        { name: "test2", className: "element", style: { width: "100vw", height: "100vh" } },
        "test2"
      ),
      _react2.default.createElement(
        _Element2.default,
        { name: "test3", className: "element", style: { width: "100vw", height: "100vh" } },
        "test3"
      )
    );

    (0, _reactDom.render)(component, node, function () {
      var buttonElem = node.querySelector("button");

      _testUtils.Simulate.click(buttonElem);

      setTimeout(function () {
        (0, _expect2.default)(buttonElem.classList.contains("active")).toBe(true);
        done();
      }, 500);
    });
  });
});