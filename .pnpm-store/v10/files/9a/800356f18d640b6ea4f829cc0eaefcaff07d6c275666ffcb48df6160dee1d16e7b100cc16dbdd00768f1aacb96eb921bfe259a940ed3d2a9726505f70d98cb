"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _Configuration = _interopRequireDefault(require("./lib/config/Configuration"));

var _KeyEventManager = _interopRequireDefault(require("./lib/KeyEventManager"));

var _isEmpty = _interopRequireDefault(require("./utils/collection/isEmpty"));

var _KeyCombinationSerializer = _interopRequireDefault(require("./lib/shared/KeyCombinationSerializer"));

var _backwardsCompatibleContext = _interopRequireDefault(require("./utils/backwardsCompatibleContext"));

var _isUndefined = _interopRequireDefault(require("./utils/isUndefined"));

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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Wraps a React component in a HotKeysEnabled component, which passes down the
 * callbacks and options necessary for React Hotkeys to work as a single prop value,
 * hotkeys. These must be unwrapped and applied to a DOM-mountable element within
 * the wrapped component (e.g. div, span, input, etc) in order for the key events
 * to be recorded.
 *
 * @param {React.ComponentClass} Component - Component class to wrap
 * @param {Object} hotKeysOptions - Options that become the wrapping component's
 *                 default prop values
 * @returns {React.ComponentClass} Wrapped component that is passed all of the React hotkeys
 * props in a single value, hotkeys.
 */
function withHotKeys(Component) {
  var hotKeysOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  function mergeWithOptions(key, props) {
    return _objectSpread({}, hotKeysOptions[key] || {}, props[key] || {});
  }

  function getHandlers(props) {
    return mergeWithOptions('handlers', props);
  }

  function getKeyMap(props) {
    return mergeWithOptions('keyMap', props);
  }
  /**
   * Component that listens to key events when one of its children are in focus and
   * selectively triggers actions (that may be handled by handler functions) when a
   * sequence of events matches a list of pre-defined sequences or combinations
   * @class
   */


  var HotKeysEnabled =
  /*#__PURE__*/
  function (_PureComponent) {
    _inherits(HotKeysEnabled, _PureComponent);

    function HotKeysEnabled(props) {
      var _this;

      _classCallCheck(this, HotKeysEnabled);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(HotKeysEnabled).call(this, props));
      /**
       * The focus and blur handlers need access to the current component as 'this'
       * so they need to be bound to it when the component is instantiated
       */

      _this._handleFocus = _this._handleFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this._handleBlur = _this._handleBlur.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this._handleKeyDown = _this._handleKeyDown.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this._handleKeyPress = _this._handleKeyPress.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this._handleKeyUp = _this._handleKeyUp.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this._componentIsFocused = _this._componentIsFocused.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this._id = _KeyEventManager.default.getInstance().registerKeyMap(props.keyMap);
      /**
       * We maintain a separate instance variable to contain context that will be
       * passed down to descendants of this component so we can have a consistent
       * reference to the same object, rather than instantiating a new one on each
       * render, causing unnecessary re-rendering of descendant components that
       * consume the context.
       *
       * @see https://reactjs.org/docs/context.html#caveats
       */

      _this._childContext = {
        hotKeysParentId: _this._id
      };
      return _this;
    }

    _createClass(HotKeysEnabled, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            keyMap = _this$props.keyMap,
            handlers = _this$props.handlers,
            allowChanges = _this$props.allowChanges,
            root = _this$props.root,
            props = _objectWithoutProperties(_this$props, ["keyMap", "handlers", "allowChanges", "root"]);

        var hotKeys = {
          onFocus: this._wrapFunction('onFocus', this._handleFocus),
          onBlur: this._wrapFunction('onBlur', this._handleBlur),
          tabIndex: _Configuration.default.option('defaultTabIndex')
        };

        if (this._shouldBindKeyListeners()) {
          hotKeys.onKeyDown = this._handleKeyDown;
          hotKeys.onKeyPress = this._handleKeyPress;
          hotKeys.onKeyUp = this._handleKeyUp;
        }

        return _react.default.createElement(Component, _extends({
          hotKeys: hotKeys
        }, props));
      }
    }, {
      key: "_shouldBindKeyListeners",
      value: function _shouldBindKeyListeners() {
        var keyMap = getKeyMap(this.props);
        return !(0, _isEmpty.default)(keyMap) || this.props.root || _Configuration.default.option('enableHardSequences') && this._handlersIncludeHardSequences(keyMap, getHandlers(this.props));
      }
    }, {
      key: "_handlersIncludeHardSequences",
      value: function _handlersIncludeHardSequences(keyMap, handlers) {
        return Object.keys(handlers).some(function (action) {
          return !keyMap[action] && _KeyCombinationSerializer.default.isValidKeySerialization(action);
        });
      }
    }, {
      key: "_wrapFunction",
      value: function _wrapFunction(propName, func) {
        var _this2 = this;

        if (typeof this.props[propName] === 'function') {
          return function (event) {
            _this2.props[propName](event);

            func(event);
          };
        } else {
          return func;
        }
      }
    }, {
      key: "_focusTreeIdsPush",
      value: function _focusTreeIdsPush(componentId) {
        if (!this._focusTreeIds) {
          this._focusTreeIds = [];
        }

        this._focusTreeIds.push(componentId);
      }
    }, {
      key: "_focusTreeIdsShift",
      value: function _focusTreeIdsShift() {
        if (this._focusTreeIds) {
          this._focusTreeIds.shift();
        }
      }
    }, {
      key: "_getFocusTreeId",
      value: function _getFocusTreeId() {
        if (this._focusTreeIds) {
          return this._focusTreeIds[0];
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        var keyEventManager = _KeyEventManager.default.getInstance();

        keyEventManager.reregisterKeyMap(this._id, this.props.keyMap);

        if (this._componentIsFocused() && (this.props.allowChanges || !_Configuration.default.option('ignoreKeymapAndHandlerChangesByDefault'))) {
          var _this$props2 = this.props,
              keyMap = _this$props2.keyMap,
              handlers = _this$props2.handlers;
          keyEventManager.updateEnabledHotKeys(this._getFocusTreeId(), this._id, keyMap, handlers, this._getComponentOptions());
        }
      }
    }, {
      key: "_componentIsFocused",
      value: function _componentIsFocused() {
        return this._focused === true;
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var keyEventManager = _KeyEventManager.default.getInstance();

        var hotKeysParentId = this.context.hotKeysParentId;
        keyEventManager.registerComponentMount(this._id, hotKeysParentId);
      }
      /**
       * Handles when the component gains focus by calling onFocus prop, if defined, and
       * registering itself with the KeyEventManager
       * @private
       */

    }, {
      key: "_handleFocus",
      value: function _handleFocus() {
        if (this.props.onFocus) {
          var _this$props3;

          (_this$props3 = this.props).onFocus.apply(_this$props3, arguments);
        }

        var focusTreeId = _KeyEventManager.default.getInstance().enableHotKeys(this._id, getKeyMap(this.props), getHandlers(this.props), this._getComponentOptions());

        if (!(0, _isUndefined.default)(focusTreeId)) {
          /**
           * focusTreeId should never normally be undefined, but this return state is
           * used to indicate that a component with the same componentId has already
           * registered as focused/enabled (again, a condition that should not normally
           * occur, but apparently can for as-yet unknown reasons).
           *
           * @see https://github.com/greena13/react-hotkeys/issues/173
           */
          this._focusTreeIdsPush(focusTreeId);
        }

        this._focused = true;
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var keyEventManager = _KeyEventManager.default.getInstance();

        keyEventManager.deregisterKeyMap(this._id);
        keyEventManager.registerComponentUnmount();

        this._handleBlur();
      }
      /**
       * Handles when the component loses focus by calling the onBlur prop, if defined
       * and removing itself from the KeyEventManager
       * @private
       */

    }, {
      key: "_handleBlur",
      value: function _handleBlur() {
        if (this.props.onBlur) {
          var _this$props4;

          (_this$props4 = this.props).onBlur.apply(_this$props4, arguments);
        }

        var retainCurrentFocusTreeId = _KeyEventManager.default.getInstance().disableHotKeys(this._getFocusTreeId(), this._id);

        if (!retainCurrentFocusTreeId) {
          this._focusTreeIdsShift();
        }

        this._focused = false;
      }
      /**
       * Delegates handing the keydown event to the KeyEventManager
       * @param {KeyboardEvent} event Key board event containing key name and state
       * @private
       */

    }, {
      key: "_handleKeyDown",
      value: function _handleKeyDown(event) {
        var discardFocusTreeId = _KeyEventManager.default.getInstance().handleKeydown(event, this._getFocusTreeId(), this._id, this._getEventOptions());

        if (discardFocusTreeId) {
          this._focusTreeIdsShift();
        }
      }
      /**
       * Delegates handing the keypress event to the KeyEventManager
       * @param {KeyboardEvent} event Key board event containing key name and state
       * @private
       */

    }, {
      key: "_handleKeyPress",
      value: function _handleKeyPress(event) {
        var discardFocusTreeId = _KeyEventManager.default.getInstance().handleKeyPress(event, this._getFocusTreeId(), this._id, this._getEventOptions());

        if (discardFocusTreeId) {
          this._focusTreeIdsShift();
        }
      }
      /**
       * Delegates handing the keyup event to the KeyEventManager
       * @param {KeyboardEvent} event Key board event containing key name and state
       * @private
       */

    }, {
      key: "_handleKeyUp",
      value: function _handleKeyUp(event) {
        var discardFocusTreeId = _KeyEventManager.default.getInstance().handleKeyUp(event, this._getFocusTreeId(), this._id, this._getEventOptions());

        if (discardFocusTreeId) {
          this._focusTreeIdsShift();
        }
      }
    }, {
      key: "_getComponentOptions",
      value: function _getComponentOptions() {
        return {
          defaultKeyEvent: _Configuration.default.option('defaultKeyEvent')
        };
      }
    }, {
      key: "_getEventOptions",
      value: function _getEventOptions() {
        return {
          ignoreEventsCondition: _Configuration.default.option('ignoreEventsCondition')
        };
      }
    }]);

    return HotKeysEnabled;
  }(_react.PureComponent);

  _defineProperty(HotKeysEnabled, "propTypes", {
    /**
     * A unique key to associate with KeyEventMatchers that allows associating handler
     * functions at a later stage
     * @typedef {string} ActionName
     */

    /**
     * Name of a key event
     * @typedef {'keyup'|'keydown'|'keypress'} KeyEventName
     */

    /**
     * A string or list of strings, that represent a sequence of one or more keys
     * @typedef {String | Array.<String>} MouseTrapKeySequence
     * @see {@link https://craig.is/killing/mice} for support key sequences
     */

    /**
     * Options for the mapping of a key sequence and event
     * @typedef {Object} KeyEventOptions
     * @property {MouseTrapKeySequence} sequence - The key sequence required to satisfy a
     *           KeyEventDescription
     * @property {KeyEventName} action - The keyboard state required to satisfy a
     *           KeyEventDescription
     * @property {string} name - The name of the action, to be displayed to the end user
     * @property {string} description - A description of the action, to be displayed to
     *           the end user
     * @property {string} group - A group the action belongs to, to aid in showing similar
     *           actions to the user
     */

    /**
     * A description of key sequence of one or more key combinations
     * @typedef {MouseTrapKeySequence|KeyEventOptions|Array.<MouseTrapKeySequence>} KeyEventDescription
     */

    /**
     * A mapping from ActionName to KeyEventDescription
     * @typedef {Object.<ActionName, KeyEventDescription>} KeyMap
     */

    /**
     * A map from action names to Mousetrap or Browser key sequences
     * @type {KeyMap}
     */
    keyMap: _propTypes.default.object,

    /**
     * A map from action names to event handler functions
     * @typedef {Object.<ActionName, Function>} HandlersMap
     */

    /**
     * A map from action names to event handler functions
     * @type {HandlersMap}
     */
    handlers: _propTypes.default.object,

    /**
     * Function to call when this component gains focus in the browser
     * @type {function}
     */
    onFocus: _propTypes.default.func,

    /**
     * Function to call when this component loses focus in the browser
     * @type {function}
     */
    onBlur: _propTypes.default.func,

    /**
     * Whether the keyMap or handlers are permitted to change after the
     * component mounts. If false, changes to the keyMap and handlers
     * props will be ignored
     */
    allowChanges: _propTypes.default.bool,

    /**
     * Whether this is the root HotKeys node - this enables some special behaviour
     */
    root: _propTypes.default.bool
  });

  return (0, _backwardsCompatibleContext.default)(HotKeysEnabled, {
    deprecatedAPI: {
      contextTypes: {
        hotKeysParentId: _propTypes.default.number
      },
      childContextTypes: {
        hotKeysParentId: _propTypes.default.number
      }
    },
    newAPI: {
      contextType: {
        hotKeysParentId: undefined
      }
    }
  });
}

var _default = withHotKeys;
exports.default = _default;