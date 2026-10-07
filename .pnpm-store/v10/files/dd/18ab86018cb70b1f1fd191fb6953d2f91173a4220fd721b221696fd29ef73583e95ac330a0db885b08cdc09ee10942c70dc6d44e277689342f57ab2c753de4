"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _utilities = require("./utilities");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var ReflexSplitter = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(ReflexSplitter, _React$Component);
  var _super = _createSuper(ReflexSplitter);
  function ReflexSplitter(props) {
    var _this;
    (0, _classCallCheck2.default)(this, ReflexSplitter);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "ref", _react.default.createRef());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onMouseMove", function (event) {
      if (_this.state.active) {
        var domElement = _this.ref.current;
        _this.props.events.emit('resize', {
          index: _this.props.index,
          domElement: domElement,
          event: event
        });
        if (_this.props.onResize) {
          _this.props.onResize({
            component: (0, _assertThisInitialized2.default)(_this),
            domElement: domElement
          });
        }
        event.stopPropagation();
        event.preventDefault();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onMouseDown", function (event) {
      _this.setState({
        active: true
      });
      if (_this.props.onStartResize) {
        // cancels resize from controller
        // if needed by returning true
        // to onStartResize
        if (_this.props.onStartResize({
          domElement: _this.ref.current,
          component: (0, _assertThisInitialized2.default)(_this)
        })) {
          return;
        }
      }
      _this.props.events.emit('startResize', {
        index: _this.props.index,
        event: event
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onMouseUp", function (event) {
      if (_this.state.active) {
        _this.setState({
          active: false
        });
        if (_this.props.onStopResize) {
          _this.props.onStopResize({
            domElement: _this.ref.current,
            component: (0, _assertThisInitialized2.default)(_this)
          });
        }
        _this.props.events.emit('stopResize', {
          index: _this.props.index,
          event: event
        });
      }
    });
    _this.state = {
      active: false
    };
    _this.document = props.document;
    return _this;
  }
  (0, _createClass2.default)(ReflexSplitter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.document) {
        return;
      }
      this.document.addEventListener('touchend', this.onMouseUp);
      this.document.addEventListener('mouseup', this.onMouseUp);
      this.document.addEventListener('mousemove', this.onMouseMove, {
        passive: false
      });
      this.document.addEventListener('touchmove', this.onMouseMove, {
        passive: false
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!this.document) {
        return;
      }
      this.document.removeEventListener('mouseup', this.onMouseUp);
      this.document.removeEventListener('touchend', this.onMouseUp);
      this.document.removeEventListener('mousemove', this.onMouseMove);
      this.document.removeEventListener('touchmove', this.onMouseMove);
      if (this.state.active) {
        this.props.events.emit('stopResize', {
          index: this.props.index,
          event: null
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var className = [_utilities.Browser.isMobile() ? 'reflex-thin' : ''].concat((0, _toConsumableArray2.default)(this.props.className.split(' ')), [this.state.active ? 'active' : '', 'reflex-splitter']).join(' ').trim();
      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, (0, _utilities.getDataProps)(this.props), {
        onTouchStart: this.onMouseDown,
        onMouseDown: this.onMouseDown,
        style: this.props.style,
        className: className,
        id: this.props.id,
        ref: this.ref
      }), this.props.children);
    }
  }], [{
    key: "isA",
    value:
    /////////////////////////////////////////////////////////
    // Determines if element is a splitter
    // or wraps a splitter
    //
    /////////////////////////////////////////////////////////
    function isA(element) {
      if (!element) {
        return false;
      }
      //https://github.com/leefsmp/Re-Flex/issues/49
      return element.type === /*#__PURE__*/_react.default.createElement(ReflexSplitter, null).type;
    }
  }]);
  return ReflexSplitter;
}(_react.default.Component);
exports.default = ReflexSplitter;
(0, _defineProperty2.default)(ReflexSplitter, "propTypes", {
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]),
  onStartResize: _propTypes.default.func,
  onStopResize: _propTypes.default.func,
  className: _propTypes.default.string,
  propagate: _propTypes.default.bool,
  onResize: _propTypes.default.func,
  style: _propTypes.default.object
});
(0, _defineProperty2.default)(ReflexSplitter, "defaultProps", {
  document: typeof document !== 'undefined' ? document : null,
  onStartResize: null,
  onStopResize: null,
  propagate: false,
  onResize: null,
  className: '',
  style: {}
});