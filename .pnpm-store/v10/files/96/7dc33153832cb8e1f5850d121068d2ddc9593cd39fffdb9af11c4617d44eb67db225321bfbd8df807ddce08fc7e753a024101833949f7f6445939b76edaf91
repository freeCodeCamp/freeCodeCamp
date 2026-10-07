'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _animateScroll = require('../mixins/animate-scroll');

var _animateScroll2 = _interopRequireDefault(_animateScroll);

var _smooth = require('../mixins/smooth');

var _smooth2 = _interopRequireDefault(_smooth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('AnimationTypeUnitTests', function () {

  it('chooses correct easing function with no smooth options', function () {
    var animation = _animateScroll2.default.getAnimationType({});
    (0, _expect2.default)(animation).toEqual(_smooth2.default.defaultEasing);
  });

  it('chooses correct easing function for smooth: true', function () {
    var animation = _animateScroll2.default.getAnimationType({ smooth: true });
    (0, _expect2.default)(animation).toEqual(_smooth2.default.defaultEasing);
  });

  it('chooses correct easing function for smooth: false', function () {
    var animation = _animateScroll2.default.getAnimationType({ smooth: false });
    (0, _expect2.default)(animation).toEqual(_smooth2.default.defaultEasing);
  });

  it('chooses correct easing function for smooth: easeInOutQuint', function () {
    var animation = _animateScroll2.default.getAnimationType({ smooth: 'easeInOutQuint' });
    (0, _expect2.default)(animation).toEqual(_smooth2.default.easeInOutQuint);
  });

  it('chooses correct easing function incorrect smooth input', function () {
    var animation = _animateScroll2.default.getAnimationType({ smooth: 'InOutQuint' });
    (0, _expect2.default)(animation).toEqual(_smooth2.default.defaultEasing);
  });

  it('chooses correct easing function incorrect smooth input2', function () {
    var animation = _animateScroll2.default.getAnimationType({ smooth: 4 });
    (0, _expect2.default)(animation).toEqual(_smooth2.default.defaultEasing);
  });

  it('chooses correct easing function incorrect smooth input3', function () {
    var animation = _animateScroll2.default.getAnimationType({ smooth: '' });
    (0, _expect2.default)(animation).toEqual(_smooth2.default.defaultEasing);
  });

  it('chooses correct easing function incorrect smooth input4', function () {
    var animation = _animateScroll2.default.getAnimationType({ smooth: null });
    (0, _expect2.default)(animation).toEqual(_smooth2.default.defaultEasing);
  });

  it('chooses correct easing function incorrect smooth input5', function () {
    var animation = _animateScroll2.default.getAnimationType({ smooth: undefined });
    (0, _expect2.default)(animation).toEqual(_smooth2.default.defaultEasing);
  });

  it('chooses correct easing function incorrect smooth input6', function () {
    var animation = _animateScroll2.default.getAnimationType({ smooth: { smooth: true } });
    (0, _expect2.default)(animation).toEqual(_smooth2.default.defaultEasing);
  });
});