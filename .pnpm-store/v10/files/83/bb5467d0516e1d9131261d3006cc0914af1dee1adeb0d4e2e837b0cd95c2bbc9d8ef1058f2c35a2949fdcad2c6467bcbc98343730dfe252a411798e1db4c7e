function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

import React, { PureComponent } from 'react';
import HotKeys from './HotKeys';
/**
 * deprecatedWithHotKeys is an HOC that provides the wrappedComponent with the ability to implement keyboard actions
 * without the user wrapping every component with a <HotKeys> component individually
 *
 * See examples/master/HOCWrappedNode.js for an example implementation
 * Follow the steps below to use the HOC:
 *
 * @example <caption>Example usage of deprecatedWithHotKeys.</caption>
 * // Returns the HOC-wrapped component.
 * // 1. Declared a key map that with the actionName as key and keyboardKeys as values
 * const ACTION_KEY_MAP = {
 *     'logConsole' : 'down',
 * };
 *
 * class BasicBox extends React.Component {
 *
 * // 2. declare 'hotKeyHandlers' within the Component's class definition
 *   hotKeyHandlers: {
 *     'logConsole': this.logConsole.bind(this),
 *   }
 *
 *   logConsole() {
 *     console.log('a hotkey is pressed');
 *   }
 *
 *   render() {
 *     return (
 *         <div tabIndex="0">
 *             Press the down arrow
 *         </div>
 *     );
 *   }
 * }
 *
 * // 3. Wrap the Component with deprecatedWithHotKeys
 * export default withHotKeys(ACTION_KEY_MAP)(BasicBox);
 * @returns {function} Returns the HOC-wrapped component.
 *
 * @param {Object} keyMap an action-to-keyboard-key mapping
 * @param {Object} componentProps parameters to pass in as props to the HotKeys component
 * @summary An HOC that provides the wrappedComponent with the ability to implement
 *        keyboard actions
 *
 * @deprecated
 */

var deprecatedWithHotKeys = function deprecatedWithHotKeys(keyMap, componentProps) {
  return function (Component) {
    return (
      /*#__PURE__*/
      function (_PureComponent) {
        _inherits(HotKeysWrapper, _PureComponent);

        function HotKeysWrapper(props) {
          var _this;

          _classCallCheck(this, HotKeysWrapper);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(HotKeysWrapper).call(this, props));
          _this._setRef = _this._setRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
          _this.state = {
            handlers: {}
          };
          return _this;
        }

        _createClass(HotKeysWrapper, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            this.setState({
              handlers: this._ref.hotKeyHandlers
            });
          }
        }, {
          key: "_setRef",
          value: function _setRef(node) {
            this._ref = node;
          }
        }, {
          key: "render",
          value: function render() {
            var handlers = this.state.handlers;

            var props = _objectSpread({
              keyMap: keyMap,
              handlers: handlers
            }, componentProps);
            /**
             * Setting component as document-fragment to avoid unexpected stylistic
             * changes to the wrapped component
             */


            return React.createElement(HotKeys, props, React.createElement(Component, _extends({
              ref: this._setRef
            }, this.props)));
          }
        }]);

        return HotKeysWrapper;
      }(PureComponent)
    );
  };
};

export default deprecatedWithHotKeys;