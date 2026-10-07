'use strict';

var _reactDom = require('react-dom');

var _testUtils = require('react-dom/test-utils');

var _testUtils2 = _interopRequireDefault(_testUtils);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Element = require('../components/Element.js');

var _Element2 = _interopRequireDefault(_Element);

var _Link = require('../components/Link.js');

var _Link2 = _interopRequireDefault(_Link);

var _scrollEvents = require('../mixins/scroll-events.js');

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _utility = require('./utility.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Test */
/* React */
var wait = function wait(ms, cb) {
  setTimeout(cb, ms);
};
/* Components to test */


describe('Page', function () {

  var node = void 0;
  var scrollDuration = 10;

  var component = function component(horizontal) {
    var style = function () {
      if (horizontal) {
        return {
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap'
        };
      } else {
        return undefined;
      }
    }();

    var lastDivStyle = function () {
      if (horizontal) {
        return {
          width: "2000px"
        };
      } else {
        return {
          height: "2000px"
        };
      }
    }();

    return _react2.default.createElement(
      'div',
      { style: style },
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _Link2.default,
            { to: 'test1', spy: true, smooth: true, duration: scrollDuration, horizontal: horizontal },
            'Test 1'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _Link2.default,
            { to: 'test2', spy: true, smooth: true, duration: scrollDuration, horizontal: horizontal },
            'Test 2'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _Link2.default,
            { to: 'test3', spy: true, smooth: true, duration: scrollDuration, horizontal: horizontal },
            'Test 3'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _Link2.default,
            { to: 'test4', spy: true, smooth: true, duration: scrollDuration, horizontal: horizontal },
            'Test 4'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _Link2.default,
            { to: 'test5', spy: true, smooth: true, duration: scrollDuration, horizontal: horizontal },
            'Test 5'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _Link2.default,
            { to: 'test6', spy: true, smooth: true, duration: scrollDuration, horizontal: horizontal },
            'Test 6'
          )
        )
      ),
      _react2.default.createElement(
        _Element2.default,
        { name: 'test1', className: 'element' },
        'test 1'
      ),
      _react2.default.createElement(
        _Element2.default,
        { name: 'test2', className: 'element' },
        'test 2'
      ),
      _react2.default.createElement(
        _Element2.default,
        { name: 'test3', className: 'element' },
        'test 3'
      ),
      _react2.default.createElement(
        _Element2.default,
        { name: 'test4', className: 'element' },
        'test 4'
      ),
      _react2.default.createElement(
        _Element2.default,
        { name: 'test5', className: 'element' },
        'test 5'
      ),
      _react2.default.createElement(
        'div',
        { id: 'test6', className: 'element', style: lastDivStyle },
        'test 6'
      )
    );
  };

  beforeEach(function () {
    node = document.createElement('div');
    document.body.appendChild(node);
  });

  afterEach(function () {
    window.scrollTo(0, 0);
    _scrollEvents2.default.scrollEvent.remove('begin');
    _scrollEvents2.default.scrollEvent.remove('end');
    (0, _reactDom.unmountComponentAtNode)(node);
    document.body.removeChild(node);
  });

  it('renders six elements of link/element', function (done) {

    (0, _reactDom.render)(component(false), node, function () {

      var allLinks = node.querySelectorAll('a');
      var allTargets = node.querySelectorAll('.element');

      (0, _expect2.default)(allLinks.length).toEqual(6);
      (0, _expect2.default)(allTargets.length).toEqual(6);

      done();
    });
  });

  it('it is at top left in start', function (done) {
    (0, _expect2.default)(window.scrollX || window.pageXOffset).toEqual(0);
    (0, _expect2.default)(window.scrollY || window.pageYOffset).toEqual(0);
    done();
  });

  it('is active when clicked vertically', function (done) {

    (0, _reactDom.render)(component(false), node, function () {

      var link = node.querySelectorAll('a')[2];

      var target = node.querySelectorAll('.element')[2];

      var expectedScrollTo = target.getBoundingClientRect().top;

      _testUtils2.default.Simulate.click(link);

      var scrollStart = window.scrollY || window.pageYOffset;

      /* Let it scroll, duration is based on param sent to Link */

      setTimeout(function () {

        var scrollStop = Math.round(scrollStart + expectedScrollTo);

        (0, _expect2.default)(window.scrollY || window.pageYOffset).toEqual(scrollStop);

        (0, _expect2.default)(link.className).toEqual('active');

        done();
      }, scrollDuration + 500);
    });
  });

  it('is active when clicked horizontally', function (done) {

    (0, _utility.renderHorizontal)(component(true), node, function () {

      var link = node.querySelectorAll('a')[2];

      var target = node.querySelectorAll('.element')[2];

      var expectedScrollTo = target.getBoundingClientRect().left;

      _testUtils2.default.Simulate.click(link);

      var scrollStart = window.scrollX || window.pageXOffset;

      /* Let it scroll, duration is based on param sent to Link */

      setTimeout(function () {

        var scrollStop = Math.round(scrollStart + expectedScrollTo);

        (0, _expect2.default)(window.scrollX || window.pageXOffset).toEqual(scrollStop);

        (0, _expect2.default)(link.className).toEqual('active');

        done();
      }, scrollDuration + 500);
    });
  });

  it('is active when clicked to last (5) element vertically', function (done) {

    (0, _reactDom.render)(component(false), node, function () {

      var link = node.querySelectorAll('a')[5];

      var target = node.querySelectorAll('.element')[5];

      var expectedScrollTo = target.getBoundingClientRect().top;

      _testUtils2.default.Simulate.click(link);

      /* Let it scroll, duration is based on param sent to Link */
      var scrollStart = window.scrollY || window.pageYOffset;

      setTimeout(function () {

        var scrollStop = Math.round(scrollStart + expectedScrollTo);

        (0, _expect2.default)(window.scrollY || window.pageYOffset).toEqual(scrollStop);

        (0, _expect2.default)(link.className).toEqual('active');

        done();
      }, scrollDuration + 500);
    });
  });

  it('is active when clicked to last (5) element horizontally', function (done) {

    (0, _utility.renderHorizontal)(component(true), node, function () {

      var link = node.querySelectorAll('a')[5];

      var target = node.querySelectorAll('.element')[5];

      var expectedScrollTo = target.getBoundingClientRect().left;

      _testUtils2.default.Simulate.click(link);

      /* Let it scroll, duration is based on param sent to Link */
      var scrollStart = window.scrollX || window.pageXOffset;

      setTimeout(function () {

        var scrollStop = Math.round(scrollStart + expectedScrollTo);

        (0, _expect2.default)(window.scrollX || window.pageXOffset).toEqual(scrollStop);

        (0, _expect2.default)(link.className).toEqual('active');

        done();
      }, scrollDuration + 500);
    });
  });

  it('should call onSetActive vertically', function (done) {

    var onSetActive = _sinon2.default.spy();
    var onSetInactive = _sinon2.default.spy();

    var component = _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _Link2.default,
            { to: 'test1', spy: true, smooth: true, duration: scrollDuration },
            'Test 1'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _Link2.default,
            { to: 'test2', spy: true, smooth: true, duration: scrollDuration },
            'Test 2'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _Link2.default,
            { to: 'test3', spy: true, smooth: true, duration: scrollDuration },
            'Test 3'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _Link2.default,
            { to: 'test4', spy: true, smooth: true, duration: scrollDuration, onSetActive: onSetActive, onSetInactive: onSetInactive },
            'Test 4'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _Link2.default,
            { to: 'test5', spy: true, smooth: true, duration: scrollDuration },
            'Test 5'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _Link2.default,
            { to: 'anchor', spy: true, smooth: true, duration: scrollDuration },
            'Test 6'
          )
        )
      ),
      _react2.default.createElement(
        _Element2.default,
        { name: 'test1', className: 'element' },
        'test 1'
      ),
      _react2.default.createElement(
        _Element2.default,
        { name: 'test2', className: 'element' },
        'test 2'
      ),
      _react2.default.createElement(
        _Element2.default,
        { name: 'test3', className: 'element' },
        'test 3'
      ),
      _react2.default.createElement(
        _Element2.default,
        { name: 'test4', className: 'element' },
        'test 4'
      ),
      _react2.default.createElement(
        _Element2.default,
        { name: 'test5', className: 'element' },
        'test 5'
      ),
      _react2.default.createElement(
        'div',
        { id: 'anchor', className: 'element', style: { height: "2000px" } },
        'test 6'
      )
    );

    (0, _reactDom.render)(component, node);

    var link = node.querySelectorAll('a')[3];

    _testUtils2.default.Simulate.click(link);

    wait(scrollDuration + 500, function () {
      (0, _expect2.default)(onSetActive.calledOnce).toEqual(true);

      link = node.querySelectorAll('a')[4];

      _testUtils2.default.Simulate.click(link);

      wait(scrollDuration + 500, function () {
        (0, _expect2.default)(onSetInactive.calledOnce).toEqual(true);
        done();
      });
    });
  });

  it('should call onSetActive horizontally', function (done) {

    var onSetActive = _sinon2.default.spy();
    var onSetInactive = _sinon2.default.spy();

    var component = _react2.default.createElement(
      'div',
      { style: {
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap'
        } },
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _Link2.default,
            { to: 'test1', spy: true, smooth: true, duration: scrollDuration, horizontal: true },
            'Test 1'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _Link2.default,
            { to: 'test2', spy: true, smooth: true, duration: scrollDuration, horizontal: true },
            'Test 2'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _Link2.default,
            { to: 'test3', spy: true, smooth: true, duration: scrollDuration, horizontal: true },
            'Test 3'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _Link2.default,
            { to: 'test4', spy: true, smooth: true, duration: scrollDuration, onSetActive: onSetActive, onSetInactive: onSetInactive, horizontal: true },
            'Test 4'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _Link2.default,
            { to: 'test5', spy: true, smooth: true, duration: scrollDuration, horizontal: true },
            'Test 5'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _Link2.default,
            { to: 'anchor', spy: true, smooth: true, duration: scrollDuration, horizontal: true },
            'Test 6'
          )
        )
      ),
      _react2.default.createElement(
        _Element2.default,
        { name: 'test1', className: 'element' },
        'test 1'
      ),
      _react2.default.createElement(
        _Element2.default,
        { name: 'test2', className: 'element' },
        'test 2'
      ),
      _react2.default.createElement(
        _Element2.default,
        { name: 'test3', className: 'element' },
        'test 3'
      ),
      _react2.default.createElement(
        _Element2.default,
        { name: 'test4', className: 'element' },
        'test 4'
      ),
      _react2.default.createElement(
        _Element2.default,
        { name: 'test5', className: 'element' },
        'test 5'
      ),
      _react2.default.createElement(
        'div',
        { id: 'anchor', className: 'element', style: { width: "2000px" } },
        'test 6'
      )
    );

    (0, _utility.renderHorizontal)(component, node);

    var link = node.querySelectorAll('a')[3];

    _testUtils2.default.Simulate.click(link);

    wait(scrollDuration + 500, function () {
      (0, _expect2.default)(onSetActive.calledOnce).toEqual(true);

      link = node.querySelectorAll('a')[4];

      _testUtils2.default.Simulate.click(link);

      wait(scrollDuration + 500, function () {
        (0, _expect2.default)(onSetInactive.calledOnce).toEqual(true);
        done();
      });
    });
  });
});