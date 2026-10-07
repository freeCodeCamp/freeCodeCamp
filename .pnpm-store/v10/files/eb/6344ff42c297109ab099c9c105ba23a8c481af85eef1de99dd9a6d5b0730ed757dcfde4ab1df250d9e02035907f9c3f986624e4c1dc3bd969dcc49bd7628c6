'use strict';

var _reactDom = require('react-dom');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _Link = require('../components/Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Link', function () {

  var node = void 0;
  beforeEach(function () {
    node = document.createElement('div');
  });

  afterEach(function () {
    (0, _reactDom.unmountComponentAtNode)(node);
  });

  it('renders only one component', function (done) {

    var component = _react2.default.createElement(
      _Link2.default,
      { to: 'test1', spy: true, smooth: true, duration: 500 },
      'Test 1'
    );

    (0, _reactDom.render)(component, node, function () {
      (0, _expect2.default)(node.textContent).toEqual('Test 1');
      done();
    });
  });

  it('renders two components', function (done) {

    var component = _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _Link2.default,
        { to: 'test1', spy: true, smooth: true, duration: 500 },
        'A'
      ),
      ';',
      _react2.default.createElement(
        _Link2.default,
        { to: 'test1', spy: true, smooth: true, duration: 500 },
        'B'
      ),
      ';'
    );

    (0, _reactDom.render)(component, node, function () {
      (0, _expect2.default)(node.textContent).toEqual('A;B;');
      done();
    });
  });
  it('renders two components with hash replaced', function (done) {

    var component = _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _Link2.default,
        { to: 'test1', spy: true, smooth: true, hashSpy: true, saveHashHistory: false, duration: 500 },
        'A'
      ),
      ';',
      _react2.default.createElement(
        _Link2.default,
        { to: 'test1', spy: true, smooth: true, saveHashHistory: false, duration: 500 },
        'B'
      ),
      ';'
    );

    (0, _reactDom.render)(component, node, function () {
      (0, _expect2.default)(node.textContent).toEqual('A;B;');
      done();
    });
  });
});