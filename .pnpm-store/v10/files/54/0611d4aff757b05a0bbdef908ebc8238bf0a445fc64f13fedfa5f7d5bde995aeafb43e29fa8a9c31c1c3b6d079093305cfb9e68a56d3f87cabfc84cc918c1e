"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _KeyEventManager = _interopRequireDefault(require("./lib/KeyEventManager"));

var _arrayFrom = _interopRequireDefault(require("./utils/array/arrayFrom"));

var _standardizeKeyName = _interopRequireDefault(require("./helpers/parsing-key-maps/standardizeKeyName"));

var _isValidKey = _interopRequireWildcard(require("./helpers/parsing-key-maps/isValidKey"));

var _isEmpty = _interopRequireDefault(require("./utils/collection/isEmpty"));

var _resolveAltShiftedAlias = _interopRequireDefault(require("./helpers/resolving-handlers/resolveAltShiftedAlias"));

var _resolveUnaltShiftedAlias = _interopRequireDefault(require("./helpers/resolving-handlers/resolveUnaltShiftedAlias"));

var _resolveShiftedAlias = _interopRequireDefault(require("./helpers/resolving-handlers/resolveShiftedAlias"));

var _resolveUnshiftedAlias = _interopRequireDefault(require("./helpers/resolving-handlers/resolveUnshiftedAlias"));

var _resolveAltedAlias = _interopRequireDefault(require("./helpers/resolving-handlers/resolveAltedAlias"));

var _resolveUnaltedAlias = _interopRequireDefault(require("./helpers/resolving-handlers/resolveUnaltedAlias"));

var _hasKey = _interopRequireDefault(require("./utils/object/hasKey"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Wraps a React component in a HotKeysIgnoreOverride component, which passes down the
 * callbacks and options necessary for React Hotkeys to work as a single prop value,
 * hotkeys. These must be unwrapped and applied to a DOM-mountable element within
 * the wrapped component (e.g. div, span, input, etc) in order for the key events
 * to be recorded.
 *
 * @param {React.ComponentClass} Component - Component class to wrap
 * @param {Object} hotKeysIgnoreOptions - Options that become the wrapping component's
 *                 default prop values
 * @param {string} eventManagerMethod - Name of EventManager method to use to handle a
 *        key event
 * @returns {React.ComponentClass} Wrapped component that is passed all of the React
 * hotkeys props in a single value, hotkeys.
 */
function withHotKeysIgnoreOverride(Component) {
  var _class, _temp;

  var hotKeysIgnoreOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    only: [],
    except: []
  };
  var eventManagerMethod = arguments.length > 2 ? arguments[2] : undefined;

  /**
   * A component that causes React Hotkeys to ignore the results of
   * Configuration.ignoreEventCondition and instead either force the event to be
   * ignored or observed. By default, this is all key events, but you can use
   * the only prop to provide a whitelist, or the except prop to pass a blacklist.
   * @class
   */
  return _temp = _class =
  /*#__PURE__*/
  function (_PureComponent) {
    _inherits(HotKeysIgnoreOverride, _PureComponent);

    function HotKeysIgnoreOverride(props) {
      var _this;

      _classCallCheck(this, HotKeysIgnoreOverride);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(HotKeysIgnoreOverride).call(this, props));
      _this._handleKeyEvent = _this._handleKeyEvent.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this._reloadDictionaries = _this._reloadDictionaries.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    _createClass(HotKeysIgnoreOverride, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            only = _this$props.only,
            except = _this$props.except,
            props = _objectWithoutProperties(_this$props, ["only", "except"]);

        var hotKeys = {
          onKeyDown: this._handleKeyEvent,
          onKeyPress: this._handleKeyEvent,
          onKeyUp: this._handleKeyEvent,
          onFocus: this._reloadDictionaries
        };
        return _react.default.createElement(Component, _extends({
          hotKeys: hotKeys
        }, props));
      }
    }, {
      key: "_reloadDictionaries",
      value: function _reloadDictionaries() {
        var _this$props2 = this.props,
            only = _this$props2.only,
            except = _this$props2.except;
        this._onlyDict = keyDictionary(only);
        this._exceptDict = keyDictionary(except);
      }
    }, {
      key: "_shouldIgnoreEvent",
      value: function _shouldIgnoreEvent(_ref) {
        var key = _ref.key;

        if ((0, _isEmpty.default)(this._onlyDict)) {
          if ((0, _isEmpty.default)(this._exceptDict)) {
            return true;
          } else {
            return !(0, _hasKey.default)(this._exceptDict, key);
          }
        } else {
          if ((0, _isEmpty.default)(this._exceptDict)) {
            return (0, _hasKey.default)(this._onlyDict, key);
          } else {
            return (0, _hasKey.default)(this._onlyDict, key) && !(0, _hasKey.default)(this._exceptDict, key);
          }
        }
      }
    }, {
      key: "_handleKeyEvent",
      value: function _handleKeyEvent(event) {
        if (this._shouldIgnoreEvent(event)) {
          _KeyEventManager.default.getInstance()[eventManagerMethod](event);
        }
      }
    }]);

    return HotKeysIgnoreOverride;
  }(_react.PureComponent), _defineProperty(_class, "propTypes", {
    /**
     * The whitelist of keys that keyevents should be ignored. i.e. if you place
     * a key in this list, all events related to it will be ignored by react hotkeys
     */
    only: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]),

    /**
     * The blacklist of keys that keyevents should be not ignored. i.e. if you place
     * a key in this list, all events related to it will be still be observed by react
     * hotkeys
     */
    except: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)])
  }), _defineProperty(_class, "defaultProps", hotKeysIgnoreOptions), _temp;
}

function keyDictionary(list) {
  return (0, _arrayFrom.default)(list).reduce(function (memo, keyName) {
    var finalKeyName = (0, _standardizeKeyName.default)(keyName);

    if (!(0, _isValidKey.default)(finalKeyName)) {
      throw new _isValidKey.InvalidKeyNameError(keyName);
    }

    [_resolveAltShiftedAlias.default, _resolveUnaltShiftedAlias.default, _resolveShiftedAlias.default, _resolveUnshiftedAlias.default, _resolveAltedAlias.default, _resolveUnaltedAlias.default].forEach(function (func) {
      memo[func(finalKeyName)] = true;
    });
    return memo;
  }, {});
}

var _default = withHotKeysIgnoreOverride;
exports.default = _default;