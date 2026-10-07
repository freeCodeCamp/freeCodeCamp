'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _spinners = require('./spinners');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line import/no-extraneous-dependencies


if (!process.env.REACT_SPINKIT_NO_STYLES) {
  /* eslint-disable global-require */
  require('loaders.css');
  require('../css/base.css');
  require('../css/loaders-css.css');
  require('../css/fade-in.css');
  require('../css/chasing-dots.css');
  require('../css/circle.css');
  require('../css/cube-grid.css');
  require('../css/double-bounce.css');
  require('../css/folding-cube.css');
  require('../css/pulse.css');
  require('../css/rotating-plane.css');
  require('../css/three-bounce.css');
  require('../css/wandering-cubes.css');
  require('../css/wave.css');
  require('../css/wordpress.css');
  /* eslint-enable global-require */
}

var noFadeInWarning = "Deprecation Warning (react-spinkit): noFadeIn prop should be replaced with fadeIn='none'";

var Spinner = function (_React$Component) {
  _inherits(Spinner, _React$Component);

  function Spinner(props) {
    _classCallCheck(this, Spinner);

    if (props.noFadeIn) {
      console.warn(noFadeInWarning); // eslint-disable-line no-console
    }

    var _this = _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).call(this, props));

    _this.displayName = 'SpinKit';
    return _this;
  }

  _createClass(Spinner, [{
    key: 'render',
    value: function render() {
      var _cx;

      var spinnerInfo = _spinners.allSpinners[this.props.name] || _spinners.allSpinners['three-bounce'];
      var classes = (0, _classnames2.default)((_cx = {
        'sk-fade-in': this.props.fadeIn === 'full' && !this.props.noFadeIn,
        'sk-fade-in-half-second': this.props.fadeIn === 'half' && !this.props.noFadeIn,
        'sk-fade-in-quarter-second': this.props.fadeIn === 'quarter' && !this.props.noFadeIn,
        'sk-spinner': !this.props.overrideSpinnerClassName
      }, _defineProperty(_cx, this.props.overrideSpinnerClassName, !!this.props.overrideSpinnerClassName), _defineProperty(_cx, this.props.className, !!this.props.className), _defineProperty(_cx, spinnerInfo.className || this.props.name, true), _cx));

      var props = (0, _objectAssign2.default)({}, this.props);
      delete props.name;
      delete props.fadeIn;
      delete props.noFadeIn;
      delete props.overrideSpinnerClassName;
      delete props.className;

      if (this.props.color) {
        props.style = props.style ? _extends({}, props.style, { color: this.props.color }) : { color: this.props.color };
      }

      return _react2.default.createElement(
        'div',
        _extends({}, props, { className: classes }),
        [].concat(_toConsumableArray(Array(spinnerInfo.divCount))).map(function (_, idx) {
          return _react2.default.createElement('div', { key: idx });
        })
      );
    }
  }]);

  return Spinner;
}(_react2.default.Component);

Spinner.propTypes = {
  name: _propTypes2.default.string.isRequired,
  noFadeIn: _propTypes2.default.bool,
  fadeIn: _propTypes2.default.oneOf(['full', 'half', 'quarter', 'none']),
  overrideSpinnerClassName: _propTypes2.default.string,
  className: _propTypes2.default.string,
  color: _propTypes2.default.string
};

Spinner.defaultProps = {
  name: 'three-bounce',
  noFadeIn: false,
  fadeIn: 'full',
  overrideSpinnerClassName: ''
};

module.exports = Spinner;