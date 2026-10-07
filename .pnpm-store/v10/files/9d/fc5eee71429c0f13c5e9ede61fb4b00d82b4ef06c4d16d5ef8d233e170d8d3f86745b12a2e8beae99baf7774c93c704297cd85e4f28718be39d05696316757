function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import { Component } from 'react';
import Configuration from './lib/config/Configuration';
import KeyEventManager from './lib/KeyEventManager';
import backwardsCompatibleContext from './utils/backwardsCompatibleContext';

var GlobalHotKeys =
/*#__PURE__*/
function (_Component) {
  _inherits(GlobalHotKeys, _Component);

  function GlobalHotKeys(props) {
    var _this;

    _classCallCheck(this, GlobalHotKeys);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GlobalHotKeys).call(this, props));
    _this._id = KeyEventManager.getInstance().registerGlobalKeyMap(props.keyMap);
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
      globalHotKeysParentId: _this._id
    };
    return _this;
  }

  _createClass(GlobalHotKeys, [{
    key: "render",
    value: function render() {
      return this.props.children || null;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var keyEventManager = KeyEventManager.getInstance();
      keyEventManager.reregisterGlobalKeyMap(this._id, this.props.keyMap);

      if (this.props.allowChanges || !Configuration.option('ignoreKeymapAndHandlerChangesByDefault')) {
        var _this$props = this.props,
            keyMap = _this$props.keyMap,
            handlers = _this$props.handlers;
        /**
         * Component defines global hotkeys, so any changes to props may have changes
         * that should have immediate effect
         */

        keyEventManager.updateEnabledGlobalHotKeys(this._id, keyMap, handlers, this._getComponentOptions(), this._getEventOptions());
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          keyMap = _this$props2.keyMap,
          handlers = _this$props2.handlers;
      var globalHotKeysParentId = this.context.globalHotKeysParentId;
      var keyEventManager = KeyEventManager.getInstance();
      keyEventManager.registerGlobalComponentMount(this._id, globalHotKeysParentId);
      keyEventManager.enableGlobalHotKeys(this._id, keyMap, handlers, this._getComponentOptions(), this._getEventOptions());
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var keyEventManager = KeyEventManager.getInstance();
      keyEventManager.deregisterGlobalKeyMap(this._id);
      keyEventManager.disableGlobalHotKeys(this._id);
      keyEventManager.registerGlobalComponentUnmount();
    }
  }, {
    key: "_getComponentOptions",
    value: function _getComponentOptions() {
      return {
        defaultKeyEvent: Configuration.option('defaultKeyEvent')
      };
    }
  }, {
    key: "_getEventOptions",
    value: function _getEventOptions() {
      return {
        ignoreEventsCondition: Configuration.option('ignoreEventsCondition')
      };
    }
  }]);

  return GlobalHotKeys;
}(Component);

_defineProperty(GlobalHotKeys, "propTypes", {
  /**
   * A map from action names to Mousetrap or Browser key sequences
   * @type {KeyMap}
   */
  keyMap: PropTypes.object,

  /**
   * A map from action names to event handler functions
   * @typedef {Object.<ActionName, Function>} HandlersMap
   */

  /**
   * A map from action names to event handler functions
   * @type {HandlersMap}
   */
  handlers: PropTypes.object,

  /**
   * Whether the keyMap or handlers are permitted to change after the
   * component mounts. If false, changes to the keyMap and handlers
   * props will be ignored
   */
  allowChanges: PropTypes.bool
});

export default backwardsCompatibleContext(GlobalHotKeys, {
  deprecatedAPI: {
    contextTypes: {
      globalHotKeysParentId: PropTypes.number
    },
    childContextTypes: {
      globalHotKeysParentId: PropTypes.number
    }
  },
  newAPI: {
    contextType: {
      globalHotKeysParentId: undefined
    }
  }
});