/**
 * ISC License
 *
 * Copyright (c) 2018, Aleck Greenham
 *
 * Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('prop-types'), require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'prop-types', 'react'], factory) :
  (global = global || self, factory(global.ReactHotkeys = {}, global.PropTypes, global.React));
}(this, function (exports, PropTypes, React) { 'use strict';

  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
  var React__default = 'default' in React ? React['default'] : React;

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function dictionaryFrom(array) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return array.reduce(function (memo, element) {
      memo[element] = value || {
        value: element
      };
      return memo;
    }, {});
  }

  /**
   * Default configuration values
   * @private
   */

  var _defaultConfiguration = {
    /**
     * The level of logging of its own behaviour React HotKeys should perform.
     * @type {LogLevel}
     */
    logLevel: 'warn',

    /**
     * Default key event key maps are bound to, if left unspecified
     * @type {KeyEventName}
     */
    defaultKeyEvent: 'keydown',

    /**
     * The default component type to wrap HotKey components' children in, to provide
     * the required focus and keyboard event listening for HotKeys to function
     */
    defaultComponent: 'div',

    /**
     * The default tabIndex value passed to the wrapping component used to contain
     * HotKey components' children. -1 skips focusing the element when tabbing through
     * the DOM, but allows focusing programmatically.
     */
    defaultTabIndex: '-1',

    /**
     * The HTML tags that React HotKeys should ignore key events from. This only works
     * if you are using the default ignoreEventsCondition function.
     * @type {String[]}
     */
    ignoreTags: ['input', 'select', 'textarea'],

    /**
     * Whether to allow hard sequences, or the binding of handlers to actions that have
     * names that are valid key sequences, which implicitly define actions that are
     * triggered by that key sequence
     */
    enableHardSequences: false,

    /**
     * Whether to ignore changes to keyMap and handlers props by default (this reduces
     * a significant amount of unnecessarily resetting internal state)
     *
     * @type {boolean}
     */
    ignoreKeymapAndHandlerChangesByDefault: true,

    /**
     * The function used to determine whether a key event should be ignored by React
     * Hotkeys. By default, keyboard events originating elements with a tag name in
     * ignoreTags, or a isContentEditable property of true, are ignored.
     *
     * @type {Function<KeyboardEvent>}
     */
    ignoreEventsCondition: function ignoreEventsCondition(event) {
      var target = event.target;

      if (target && target.tagName) {
        var tagName = target.tagName.toLowerCase();
        return Configuration.option('_ignoreTagsDict')[tagName] || target.isContentEditable;
      } else {
        return false;
      }
    },

    /**
     * Whether to ignore repeated keyboard events when a key is being held down
     * @type {boolean}
     */
    ignoreRepeatedEventsWhenKeyHeldDown: true,

    /**
     * Whether React HotKeys should simulate keypress events for the keys that do not
     * natively emit them.
     * @type {boolean}
     */
    simulateMissingKeyPressEvents: true,

    /**
     * Whether to call stopPropagation() on events after they are handled (preventing
     * the event from bubbling up any further, both within React Hotkeys and any other
     * event listeners bound in React).
     *
     * This does not affect the behaviour of React Hotkeys, but rather what happens to
     * the event once React Hotkeys is done with it (whether it's allowed to propagate
     * any further through the Render tree).
     * @type {boolean}
     */
    stopEventPropagationAfterHandling: true,

    /**
     * Whether to call stopPropagation() on events after they are ignored (preventing
     * the event from bubbling up any further, both within React Hotkeys and any other
     * event listeners bound in React).
     *
     * This does not affect the behaviour of React Hotkeys, but rather what happens to
     * the event once React Hotkeys is done with it (whether it's allowed to propagate
     * any further through the Render tree).
     * @type {boolean}
     */
    stopEventPropagationAfterIgnoring: true,

    /**
     * Whether to allow combination submatches - e.g. if there is an action bound to
     * cmd, pressing shift+cmd will *not* trigger that action when
     * allowCombinationSubmatches is false.
     *
     * @note This option is ignored for combinations involving command (Meta) and
     *      submatches are <i>always</i> allowed because Meta hides keyup events
     *      of other keys, so until Command is released, it's impossible to know
     *      if one of the keys that has also been pressed has been released.
     *      @see https://github.com/greena13/react-hotkeys/pull/207
     * @type {boolean}
     */
    allowCombinationSubmatches: false,

    /**
     * A mapping of custom key codes to key names that you can then use in your
     * key sequences
     * @type {Object.<Number, KeyName>}
     */
    customKeyCodes: {}
  };

  var _configuration = _objectSpread({}, _defaultConfiguration);
  /**
   * Turn our array of tags to ignore into a dictionary, for faster lookup
   */


  _configuration._ignoreTagsDict = dictionaryFrom(_configuration.ignoreTags, true);
  /**
   * Handles getting and setting global configuration values, that affect how
   * React Hotkeys behaves
   * @class
   */

  var Configuration =
  /*#__PURE__*/
  function () {
    function Configuration() {
      _classCallCheck(this, Configuration);
    }

    _createClass(Configuration, null, [{
      key: "init",

      /**
       * Merges the specified configuration options with the current values.
       * @see _configuration
       */
      value: function init(configuration) {
        var _this = this;

        var ignoreTags = configuration.ignoreTags,
            customKeyCodes = configuration.customKeyCodes;

        if (ignoreTags) {
          configuration._ignoreTagsDict = dictionaryFrom(configuration.ignoreTags);
        }

        if (customKeyCodes) {
          configuration._customKeyNamesDict = dictionaryFrom(Object.values(configuration.customKeyCodes));
        }

        Object.keys(configuration).forEach(function (key) {
          _this.set(key, configuration[key]);
        });
      }
      /**
       * Sets a single configuration value by name
       * @param {string} key - Name of the configuration value to set
       * @param {*} value - New value to set
       */

    }, {
      key: "set",
      value: function set(key, value) {
        _configuration[key] = value;
      }
    }, {
      key: "reset",
      value: function reset(key) {
        _configuration[key] = _defaultConfiguration[key];
      }
      /**
       * Gets a single configuration value by name
       * @param {string} key - Name of the configuration value
       * @returns {*} Configuration value
       */

    }, {
      key: "option",
      value: function option(key) {
        return _configuration[key];
      }
    }]);

    return Configuration;
  }();

  /**
   * Encapsulates all logging behaviour and provides the ability to specify the level
   * of logging desired.
   * @class
   */
  var Logger =
  /*#__PURE__*/
  function () {
    _createClass(Logger, [{
      key: "noop",

      /**
       * Icons prefixed to the start of logging statements that cycled through each
       * time a focus tree changes, making it easier to quickly spot events related
       * to the same focus tree.
       */

      /**
       * Icons prefixed to the start of logging statements that cycled through each
       * time a component ID changes, making it easier to quickly spot events related
       * to the same component.
       */

      /**
       * Icons prefixed to the start of logging statements that cycled through each
       * time an event ID changes, making it easier to quickly trace the path of KeyEvent
       * objects as they propagate through multiple components.
       */

      /**
       * The level of logging to perform
       * @typedef {'none'|'error'|'warn'|'info'|'debug'|'verbose'} LogLevel
       */

      /**
       * Levels of log severity - the higher the log level, the greater the amount (and
       * lesser the importance) of information logged to the console about React HotKey's
       * behaviour
       * @enum {number} LogLevel
       */
      value: function noop() {}
      /**
       * By default, calls to all log severities are a no-operation. It's only when the
       * user specifies a log level, are they replaced with logging statements
       * @type {Logger.noop}
       */

    }]);

    function Logger() {
      var _this = this;

      var logLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'warn';

      _classCallCheck(this, Logger);

      _defineProperty(this, "verbose", this.noop);

      _defineProperty(this, "debug", this.noop);

      _defineProperty(this, "info", this.noop);

      _defineProperty(this, "warn", this.noop);

      _defineProperty(this, "error", this.noop);

      this.logLevel = this.constructor.levels[logLevel];

      if (this.logLevel >= this.constructor.levels.error) {
        this.error = console.error;
      } else {
        return;
      }

      if (this.logLevel >= this.constructor.levels.warn) {
        this.warn = console.warn;
      } else {
        return;
      }

      ['info', 'debug', 'verbose'].some(function (logLevel) {
        if (_this.logLevel >= _this.constructor.levels[logLevel]) {
          _this[logLevel] = console.log;
          return false;
        }

        return true;
      });
    }

    return Logger;
  }();

  _defineProperty(Logger, "logIcons", ['📕', '📗', '📘', '📙']);

  _defineProperty(Logger, "componentIcons", ['🔺', '⭐️', '🔷', '🔶', '⬛️']);

  _defineProperty(Logger, "eventIcons", ['❤️', '💚', '💙', '💛', '💜', '🧡']);

  _defineProperty(Logger, "levels", {
    none: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
    verbose: 5
  });

  /**
   * @typedef {number} KeyEventType index (0-2) of which position in an event record
   * a particular event is located
   */

  /**
   * Enum for types of key events
   * @readonly
   * @enum {KeyEventType}
   */
  var KeyEventType = {
    keydown: 0,
    keypress: 1,
    keyup: 2
  };

  var ModifierFlagsDictionary = {
    Shift: ['shiftKey'],
    Meta: ['metaKey'],
    Control: ['ctrlKey'],
    Alt: ['altKey']
  };

  /**
   * Dictionary of symbols that correspond to keys when pressed with the shift key
   * also held down. Used for combinations involving the shift key and one or more
   * others. (e.g. shift+1)
   */
  var ShiftedKeysDictionary = {
    '`': ['~'],
    '1': ['!'],
    '2': ['@',
    /** UK Keyboard: **/
    '"'],
    '3': ['#',
    /** UK Keyboard: **/
    '£'],
    '4': ['$'],
    '5': ['%'],
    '6': ['^'],
    '7': ['&'],
    '8': ['*'],
    '9': ['('],
    '0': [')'],
    '-': ['_'],
    '=': ['plus'],
    ';': [':'],
    "'": ['"',
    /** UK Keyboard: **/
    '@'],
    ',': ['<'],
    '.': ['>'],
    '/': ['?'],
    '\\': ['|'],
    '[': ['{'],
    ']': ['}'],

    /**
     * UK Keyboard:
     */
    '#': ['~']
  };

  /**
   * Returns the corresponding symbol or character for a particular key, when it is
   * pressed with the shift key also held down
   * @param {NormalizedKeyName} keyName Name of the key
   * @returns {ReactKeyName[]} Symbol or character for the key, when it is pressed with the
   *          shift key
   */

  function resolveShiftedAlias(keyName) {
    return ShiftedKeysDictionary[keyName] || [keyName.length === 1 ? keyName.toUpperCase() : keyName];
  }

  function hasKey(object, key) {
    return object.hasOwnProperty(key);
  }

  function invertArrayDictionary(dictionary) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return Object.keys(dictionary).reduce(function (memo, key) {
      var arrayValue = dictionary[key];
      arrayValue.forEach(function (shiftedKey) {
        if (!hasKey(memo, shiftedKey)) {
          memo[shiftedKey] = [];
        }

        memo[shiftedKey].push(key);
      });

      if (options.includeOriginal) {
        if (!hasKey(memo, key)) {
          memo[key] = [];
        }

        memo[key] = [].concat(_toConsumableArray(memo[key]), _toConsumableArray(arrayValue));
      }

      return memo;
    }, {});
  }

  var UnshiftedKeysDictionary = invertArrayDictionary(ShiftedKeysDictionary);

  /**
   * Returns the name of the key that must be pressed with the shift key, to yield the
   * specified symbol
   * @param {NormalizedKeyName} keyName Name of the key
   * @returns {ReactKeyName[]} Name of the key that must be pressed with the shift key, to
   *          yield the specified symbol
   */

  function resolveUnshiftedAlias(keyName) {
    return UnshiftedKeysDictionary[keyName] || [keyName.length === 1 ? keyName.toLowerCase() : keyName];
  }

  /**
   * A dictionary of key aliases to make it easier to specify key maps that work
   * across different keyboard layouts and operating systems - this builds on top
   * of what React already does.
   */
  var KeyOSAndLayoutAliasesDictionary = {};
  var KeyOSAndLayoutAliasesDictionary$1 = invertArrayDictionary(KeyOSAndLayoutAliasesDictionary, {
    includeOriginal: true
  });

  function isString(object) {
    return typeof object === 'string';
  }

  function stripSuperfluousWhitespace(target) {
    if (isString(target)) {
      return target.trim().replace(/\s+/g, ' ');
    }

    return target;
  }

  /**
   * A mapping between Mousetrap syntax and React syntax to support the use of both
   */
  var MousetrapToReactKeyNamesDictionary = {
    /**
     * Generic
     */
    'tab': 'Tab',
    'capslock': 'CapsLock',
    'shift': 'Shift',
    'meta': 'Meta',
    'alt': 'Alt',
    'ctrl': 'Control',
    'space': ' ',
    'spacebar': ' ',
    'escape': 'Escape',
    'esc': 'Escape',
    'left': 'ArrowLeft',
    'right': 'ArrowRight',
    'up': 'ArrowUp',
    'down': 'ArrowDown',

    /**
     * Mac
     */
    'return': 'Enter',
    'del': 'Delete',
    'command': 'Meta',
    'option': 'Alt',

    /**
     * Windows
     */
    'enter': 'Enter',
    'backspace': 'Backspace',
    'ins': 'Insert',
    'pageup': 'PageUp',
    'pagedown': 'PageDown',
    'end': 'End',
    'home': 'Home',
    'contextmenu': 'ContextMenu',
    'numlock': 'Clear'
  };

  /**
   * A mapping between key names and official names
   */
  var KeyShorthandDictionary = {
    'cmd': 'Meta'
  };

  /**
   * @typedef {string} KeyName Name of the keyboard key
   */

  /**
   * @typedef {string} ReactKeyName Name used by React to refer to key
   */

  /**
   * Returns the name for the specified key used by React. Supports translating key aliases
   * used by mousetrap to their counterparts in React
   * @param {KeyName} keyName Name of the key to resolve to the React equivalent
   * @returns {ReactKeyName} Name used by React to refer to the key
   */

  function standardizeKeyName(keyName) {
    var _keyName = keyName.toLowerCase();

    return MousetrapToReactKeyNamesDictionary[_keyName] || KeyShorthandDictionary[_keyName] || (keyName.match(/^f\d+$/) ? keyName.toUpperCase() : keyName);
  }

  /**
   * Translation from legacy `keyCode` to HTML5 `key`
   * Only special keys supported, all others depend on keyboard layout or browser
   * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
   */
  var translateToKey = {
    '8': 'Backspace',
    '9': 'Tab',
    '12': 'Clear',
    '13': 'Enter',
    '16': 'Shift',
    '17': 'Control',
    '18': 'Alt',
    '19': 'Pause',
    '20': 'CapsLock',
    '27': 'Escape',
    '32': ' ',
    '33': 'PageUp',
    '34': 'PageDown',
    '35': 'End',
    '36': 'Home',
    '37': 'ArrowLeft',
    '38': 'ArrowUp',
    '39': 'ArrowRight',
    '40': 'ArrowDown',
    '45': 'Insert',
    '46': 'Delete',
    '112': 'F1',
    '113': 'F2',
    '114': 'F3',
    '115': 'F4',
    '116': 'F5',
    '117': 'F6',
    '118': 'F7',
    '119': 'F8',
    '120': 'F9',
    '121': 'F10',
    '122': 'F11',
    '123': 'F12',
    '144': 'NumLock',
    '145': 'ScrollLock',
    '224': 'Meta'
  };

  /**
   * Dictionary of keys whose name is not a single symbol or character
   */
  var NonPrintableKeysDictionary = dictionaryFrom(Object.values(translateToKey), true);

  /**
   * Whether the specified key is a valid key name that is not a single character or
   * symbol
   * @param {ReactKeyName} keyName Name of the key
   * @returns {boolean} Whether the key is a valid special key
   */

  function isNonPrintableKeyName(keyName) {
    return !!NonPrintableKeysDictionary[keyName];
  }

  /**
   * Whether the specified key name is among those defined as custom key codes
   * @param {ReactKeyName} keyName Name of the key
   * @returns {boolean} true if keyName matches a custom key name
   */

  function isCustomKeyName(keyName) {
    return Configuration.option('_customKeyNamesDict')[keyName];
  }

  function isValidKey(keyName) {
    return isNonPrintableKeyName(keyName) || String.fromCharCode(keyName.charCodeAt(0)) === keyName || isCustomKeyName(keyName);
  }

  var InvalidKeyNameError =
  /*#__PURE__*/
  function (_Error) {
    _inherits(InvalidKeyNameError, _Error);

    function InvalidKeyNameError() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, InvalidKeyNameError);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InvalidKeyNameError)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "name", 'InvalidKeyNameError');

      return _this;
    }

    return InvalidKeyNameError;
  }(_wrapNativeSuper(Error));

  /**
   * Returns a normalized KeyCombinationString (with the key names in the combination
   * sorted in alphabetical order)
   * @param {KeyName[]} keys List of key names to sort and reconstitute as a
   *        KeyCombinationString
   * @returns {NormalizedKeyCombinationString} Normalized KeyCombinationString
   */

  function normalizedCombinationId(keys) {
    return keys.sort().join('+');
  }
  /**
   * Parses KeySequenceStrings and returns KeySequenceOptions
   *
   * Used primarily to parse strings describing hot key sequences and combinations
   * so that they may be matched with key events when they occur.
   * @class
   */


  var KeySequenceParser =
  /*#__PURE__*/
  function () {
    function KeySequenceParser() {
      _classCallCheck(this, KeySequenceParser);
    }

    _createClass(KeySequenceParser, null, [{
      key: "parse",

      /**
       * @typedef {Object} BasicKeyCombination Object containing the basic information that
       *          describes a key combination
       * @property {KeyCombinationString} id - String description of keys involved in the key
       *          combination
       * @property {number} size - Number of keys involved in the combination
       * @property {Object.<KeyName, Boolean>} keyDictionary - Dictionary of key names involved
       *           in the key combination
       * @property {KeyEventType} keyEventType - Record index for key event that
       *          the matcher should match on
       */

      /**
       * @typedef {string} KeySequenceString String describing a sequence of one or more key
       * combinations with whitespace separating key combinations in the sequence and '+'
       * separating keys within a key combination.
       */

      /**
       * @typedef {KeySequenceString} NormalizedKeySequenceId key sequence id with all of the
       * combination id's normalized
       */

      /**
       * @typedef {Object} BasicKeySequence Object containing the basic information that
       *          describes a key sequence
       * @property {NormalizedKeySequenceId} prefix - Normalized key sequence id
       * @property {number} size - Number of combinations involved in the sequence
       */

      /**
       * @typedef {Object} KeySequenceObject Object containing description of a key sequence
       *          to compared against key events
       * @property {KeySequenceString} id Id describing key sequence used for matching against
       *            key events
       * @property {ComponentId} componentId Id associated with the HotKeys component
       *          that registered the key sequence
       * @property {BasicKeyCombination[]} sequence A list of key combinations involved in
       *            the sequence
       * @property {number} size Number of key combinations in the key sequence
       * @property {KeyEventType} keyEventType Index that matches key event type
       * @property {ActionName} actionName Name of the action that should be triggered if a
       *           keyboard event matching the sequence and event type occur
       */

      /**
       * @typedef {Object} KeySequenceOptions Object containing the results of parsing a
       *          KeySequenceString
       * @property {BasicKeyCombination} combination Properties of the final combination in
       *        the sequence
       * @property {BasicKeySequence} sequence Properties of the sequence of keys leading
       *        up to the final combination
       */

      /**
       * Parses a KeySequenceString and returns a KeySequenceOptions object containing
       * information about the sequence in a format that is easier to query
       * @param {KeySequenceString} sequenceString String describing a key sequence to
       *        parse
       * @param {Object} options Configuration object describing how the KeySequenceString
       *        should be parsed.
       * @param {KeyEventType} options.keyEventType Event record index indicating
       *        what key event the sequence should match
       * @param {boolean} options.ensureValidKeys Whether to throw an exception if an invalid
       *        key name is found in the key combination string.
       * @returns {KeySequenceOptions} Object containing information about the key
       *        sequence described by the KeySequenceString
       */
      value: function parse(sequenceString) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var trimmedSequenceString = stripSuperfluousWhitespace(sequenceString);
        var keyCombinationsArray = trimmedSequenceString.split(' ');

        try {
          var nonTerminalCombinations = keyCombinationsArray.slice(0, keyCombinationsArray.length - 1);
          var terminalCombination = keyCombinationsArray[keyCombinationsArray.length - 1];
          var prefix = nonTerminalCombinations.map(function (keyCombination) {
            var keysInComboDict = parseCombination(keyCombination, options);
            return normalizedCombinationId(Object.keys(keysInComboDict));
          }).join(' ');
          var keysInComboDict = parseCombination(terminalCombination, options);
          var normalizedComboString = normalizedCombinationId(Object.keys(keysInComboDict));
          var combination = {
            id: normalizedComboString,
            keyDictionary: keysInComboDict,
            keyEventType: options.keyEventType,
            size: Object.keys(keysInComboDict).length
          };
          return {
            sequence: {
              prefix: prefix,
              size: nonTerminalCombinations.length + 1
            },
            combination: combination
          };
        } catch (InvalidKeyNameError$$1) {
          return {
            sequence: null,
            combination: null
          };
        }
      }
    }]);

    return KeySequenceParser;
  }();
  /**
   * @typedef {string} KeyCombinationString String describing a combination of one or more
   * keys separated by '+'
   */

  /**
   * @typedef {KeyCombinationString} NormalizedKeyCombinationString key combination id where
   * the keys have been normalized (sorted in alphabetical order)
   */

  /**
   * @typedef {Object.<ReactKeyName, Boolean>} KeyDictionary Registry of the names
   * of keys in a particular combination, for easy/quick checking if a particular
   * key is in the key combination
   */

  /**
   * Parses a key combination string and returns the corresponding KeyDictionary
   * @param {KeyCombinationString} string Describes key combination
   * @param {Object} options Options hash of how the string should be parsed
   * @param {boolean} options.ensureValidKeys Whether to throw an exception if an invalid
   *        key name is found in the key combination string.
   * @returns {KeyDictionary} Dictionary of keys in the parsed combination
   */


  function parseCombination(string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return string.replace(/^\+|(\s|[^+]\+)\+/, '$1plus').split('+').reduce(function (keyDictionary, keyName) {
      var finalKeyName = standardizeKeyName(keyName);

      if (options.ensureValidKeys) {
        if (!isValidKey(finalKeyName)) {
          throw new InvalidKeyNameError();
        }
      }

      keyDictionary[finalKeyName] = true;
      return keyDictionary;
    }, {});
  }

  /**
   * A dictionary of symbols for each key, when pressed with the alt key also held.
   * Used for combinations that involve the alt key and one or more others. (e.g.
   * shift+a)
   */
  var AltedKeysDictionary = {
    '`': ['`'],
    '1': ['¡'],
    '2': ['™'],
    '3': ['£'],
    '4': ['¢'],
    '5': ['∞'],
    '6': ['§'],
    '7': ['¶'],
    '8': ['•'],
    '9': ['ª'],
    '0': ['º'],
    '-': ['–'],
    '=': ['≠'],
    'a': ['å'],
    'b': ['∫'],
    'c': ['ç'],
    'd': ['∂'],
    'e': ['´'],
    'f': ['ƒ'],
    'g': ['©'],
    'h': ['˙'],
    'i': ['ˆ'],
    'j': ['∆'],
    'k': ['˚'],
    'l': ['¬'],
    'm': ['µ'],
    'n': ['˜'],
    'o': ['ø'],
    'p': ['π'],
    'q': ['œ'],
    'r': ['®'],
    's': ['ß'],
    't': ['†'],
    'u': ['¨'],
    'v': ['√'],
    'w': ['∑'],
    'x': ['≈'],
    'y': ['¥'],
    'z': ['Ω'],
    '[': ['“'],
    ']': ['‘'],
    "\\": ['«'],
    "'": ['æ'],
    ';': ['…'],
    ',': ['≤'],
    '.': ['≥'],
    '/': ['÷']
  };

  var UnaltedKeysDictionary = invertArrayDictionary(AltedKeysDictionary);

  /**
   * Returns the name of the key that must be pressed with the alt key, to yield the
   * specified symbol
   * @param {ReactKeyName} keyName Name of the key
   * @returns {ReactKeyName[]} Name of the key that must be pressed with the alt key, to
   *          yield the specified symbol
   */

  function resolveUnaltedAlias(keyName) {
    return UnaltedKeysDictionary[keyName] || [keyName];
  }

  /**
   * Returns the corresponding symbol or character for a particular key, when it is
   * pressed with the alt key also held down
   * @param {NormalizedKeyName} keyName Name of the key
   * @returns {ReactKeyName[]} Symbol or character for the key, when it is pressed with the
   *          alt key
   */

  function resolveAltedAlias(keyName) {
    return AltedKeysDictionary[keyName] || [keyName];
  }

  /**
   * A dictionary of symbols for each key, when pressed with the alt and shift key also
   * held. Used for combinations that involve the shift and alt key and one or more
   * others (e.g. shift+alt+a)
   */
  var AltShiftedKeysDictionary = {
    '`': ['`'],
    '1': ['⁄'],
    '2': ['€'],
    '3': ['‹'],
    '4': ['›'],
    '5': ['ﬁ'],
    '6': ['ﬂ'],
    '7': ['‡'],
    '8': ['°'],
    '9': ['·'],
    '0': ['‚'],
    '-': ['—'],
    '=': ['±'],
    'a': ['Å'],
    'b': ['ı'],
    'c': ['Ç'],
    'd': ['Î'],
    'e': ['´'],
    'f': ['Ï'],
    'g': ['˝'],
    'h': ['Ó'],
    'i': ['ˆ'],
    'j': ['Ô'],
    'k': [''],
    'l': ['Ò'],
    'm': ['Â'],
    'n': ['˜'],
    'o': ['Ø'],
    'p': ['π'],
    'q': ['Œ'],
    'r': ['‰'],
    's': ['Í'],
    't': ['Î'],
    'u': ['¨'],
    'v': ['◊'],
    'w': ['„'],
    'x': ['˛'],
    'y': ['Á'],
    'z': ['¸'],
    '[': ['”'],
    ']': ['’'],
    "\\": ['»'],
    "'": ['Æ'],
    ';': ['Ú'],
    ',': ['¯'],
    '.': ['˘']
  };

  var UnaltShiftedKeysDictionary = invertArrayDictionary(AltShiftedKeysDictionary);

  /**
   * Returns the name of the key that must be pressed with the shift and alt keys,
   * to yield the specified symbol
   * @param {ReactKeyName} keyName Name of the key
   * @returns {ReactKeyName[]} Name of the key that must be pressed with the alt key, to
   *          yield the specified symbol
   */

  function resolveUnaltShiftedAlias(keyName) {
    return UnaltShiftedKeysDictionary[keyName] || resolveUnshiftedAlias(keyName);
  }

  /**
   * Returns the corresponding symbol or character for a particular key, when it is
   * pressed with the alt and shift keys also held down
   * @param {NormalizedKeyName} keyName Name of the key
   * @returns {ReactKeyName[]} Symbol or character for the key, when it is pressed with the
   *          alt and shit keys
   */

  function resolveAltShiftedAlias(keyName) {
    return AltShiftedKeysDictionary[keyName] || [keyName];
  }

  /**
   * Serializes instances of KeyCombination to KeyCombinationString.
   *
   * Used primarily to serialize string representations of key events as they happen.
   * @class
   */

  var KeyCombinationSerializer =
  /*#__PURE__*/
  function () {
    function KeyCombinationSerializer() {
      _classCallCheck(this, KeyCombinationSerializer);
    }

    _createClass(KeyCombinationSerializer, null, [{
      key: "serialize",

      /**
       * Returns a string representation of a single KeyCombination
       * @param {KeyCombination} keyCombination KeyCombination to serialize
       * @returns {string[]} Serialization of KeyCombination
       */
      value: function serialize(keyCombination) {
        var combinationIncludesShift = keyCombination['Shift'];
        var combinationIncludesAlt = keyCombination['Alt'];
        var keyCombinationIdDict = {};
        /**
         * List of key names in alphabetical order
         * @type {string[]}
         */

        var sortedKeys = Object.keys(keyCombination).sort();
        sortedKeys.forEach(function (keyName) {
          var keyAliases = [];

          if (combinationIncludesShift) {
            if (combinationIncludesAlt) {
              var unaltShiftedKeyNames = resolveUnaltShiftedAlias(keyName);
              var altShiftedKeyNames = resolveAltShiftedAlias(keyName);
              keyAliases = [].concat(_toConsumableArray(keyAliases), [keyName], _toConsumableArray(unaltShiftedKeyNames), _toConsumableArray(altShiftedKeyNames));
            } else {
              var unshiftedKeyNames = resolveUnshiftedAlias(keyName);
              var shiftedKeyNames = resolveShiftedAlias(keyName);
              keyAliases = [].concat(_toConsumableArray(keyAliases), [keyName], _toConsumableArray(unshiftedKeyNames), _toConsumableArray(shiftedKeyNames));
            }
          } else if (combinationIncludesAlt) {
            var unaltedKeyNames = resolveUnaltedAlias(keyName);
            var altedKeyNames = resolveAltedAlias(keyName);
            keyAliases = [].concat(_toConsumableArray(keyAliases), [keyName], _toConsumableArray(unaltedKeyNames), _toConsumableArray(altedKeyNames));
          } else {
            keyAliases.push(keyName);
            var keyAlias = KeyOSAndLayoutAliasesDictionary$1[keyName];

            if (keyAlias) {
              keyAliases = [].concat(_toConsumableArray(keyAliases), _toConsumableArray(keyAlias));
            }
          }

          var keyCombinationIds = Object.keys(keyCombinationIdDict);

          if (keyCombinationIds.length > 0) {
            keyCombinationIds.forEach(function (keyCombinationId) {
              keyAliases.forEach(function (keyAlias) {
                keyCombinationIdDict[keyCombinationId + "+".concat(keyAlias)] = _objectSpread({}, keyCombinationIdDict[keyCombinationId], _defineProperty({}, keyAlias, true));
              });
              delete keyCombinationIdDict[keyCombinationId];
            });
          } else {
            keyAliases.forEach(function (keyAlias) {
              keyCombinationIdDict[keyAlias] = _defineProperty({}, keyAlias, true);
            });
          }
        });
        return Object.values(keyCombinationIdDict).map(function (keysInCombo) {
          return Object.keys(keysInCombo).sort().join('+');
        });
      }
      /**
       * Whether the specified key sequence is valid (is of the correct format and contains
       * combinations consisting entirely of valid keys)
       * @param {KeySequenceString} keySequence Key sequence to validate
       * @returns {boolean} Whether the key sequence is valid
       */

    }, {
      key: "isValidKeySerialization",
      value: function isValidKeySerialization(keySequence) {
        if (keySequence.length > 0) {
          return !!KeySequenceParser.parse(keySequence, {
            ensureValidKeys: true
          }).combination;
        } else {
          return false;
        }
      }
    }]);

    return KeyCombinationSerializer;
  }();

  /**
   * Enum for index values for KeyEvents
   * @readonly
   * @enum {number}
   */
  var KeyEventSequenceIndex = {
    previous: 0,
    current: 1
  };

  /**
   * Returns a list of accepted aliases for the specified key
   * @param {NormalizedKeyName} keyName Name of the key
   * @returns {ReactKeyName[]} List of key aliases
   */

  function resolveKeyAlias(keyName) {
    return KeyOSAndLayoutAliasesDictionary$1[keyName] || [keyName];
  }

  function applicableAliasFunctions(keyDictionary) {
    if (keyDictionary['Shift']) {
      if (keyDictionary['Alt']) {
        return [resolveAltShiftedAlias, resolveUnaltShiftedAlias];
      } else {
        return [resolveShiftedAlias, resolveUnshiftedAlias];
      }
    } else {
      if (keyDictionary['Alt']) {
        return [resolveAltedAlias, resolveUnaltedAlias];
      } else {
        var nop = function nop(keyName) {
          return [keyName];
        };

        return [nop, nop];
      }
    }
  }

  function isUndefined(object) {
    return typeof object === 'undefined';
  }

  /**
   * @typedef {number} KeyEventState
   */

  /**
   * Enum for different states a key event can be recorded in
   * @readonly
   * @enum {KeyEventState}
   */
  var KeyEventState = {
    unseen: 0,
    seen: 1,
    simulated: 2
  };

  /**
   * Creates and modifies KeyEvents
   * @class
   */

  var KeyEventStateArrayManager =
  /*#__PURE__*/
  function () {
    function KeyEventStateArrayManager() {
      _classCallCheck(this, KeyEventStateArrayManager);
    }

    _createClass(KeyEventStateArrayManager, null, [{
      key: "newRecord",

      /**
       * Makes a new KeyEvent with one of the bits set to true
       * @param {KeyEventType=} keyEventType Index of bit to set to true
       * @param {KeyEventState} keyEventState The state to set the key event to
       * @returns {KeyEvent} New key event record with bit set to true
       */
      value: function newRecord(keyEventType, keyEventState) {
        var record = [KeyEventState.unseen, KeyEventState.unseen, KeyEventState.unseen];

        if (!isUndefined(keyEventType)) {
          for (var i = 0; i <= keyEventType; i++) {
            record[i] = keyEventState;
          }
        }

        return record;
      }
      /**
       * Sets a bit in the map to true
       * @param {KeyEvent} record Map to set a bit to true
       * @param {KeyEventType} index Index of bit to set
       * @param {KeyEventState} keyEventState The state to set the key event to
       */

    }, {
      key: "setBit",
      value: function setBit(record, index, keyEventState) {
        record[index] = keyEventState;
        return record;
      }
      /**
       * Returns a new record with the same values as the one passed to it
       * @param {KeyEvent} original Record to copy
       * @returns {KeyEvent} Record with the same values as the original
       */

    }, {
      key: "clone",
      value: function clone(original) {
        var record = this.newRecord();

        for (var i = 0; i < original.length; i++) {
          record[i] = original[i];
        }

        return record;
      }
    }]);

    return KeyEventStateArrayManager;
  }();

  function isObject(target) {
    return !Array.isArray(target) && _typeof(target) === 'object' && target !== null;
  }

  function isEmpty(target) {
    if (isObject(target)) {
      return Object.keys(target).length === 0;
    } else {
      return !target ? true : target.length === 0;
    }
  }

  function size(collection) {
    return isObject(collection) ? Object.keys(collection).length : collection.length;
  }

  /**
   * Record of one or more keys pressed together, in a combination
   * @class
   */

  var KeyCombination =
  /*#__PURE__*/
  function () {
    /**
     * Creates a new KeyCombination instance
     * @param {Object.<ReactKeyName, Array.<KeyEventState[]>>} keys Dictionary
     *        of keys
     * @returns {KeyCombination}
     */
    function KeyCombination() {
      var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, KeyCombination);

      this._keys = keys;
      this._includesKeyUp = false;

      this._update();
    }
    /********************************************************************************
     * Getters
     *********************************************************************************/

    /**
     * List of ids (serialized representations) for the keys involved in the combination
     * @returns {KeySequence[]} List of combination ids
     */


    _createClass(KeyCombination, [{
      key: "getIds",
      value: function getIds() {
        return this._ids;
      }
      /**
       * Dictionary mapping keys to their acceptable aliases. This includes "shifted" or
       * "alted" key characters.
       * @returns {Object.<ReactKeyName, ReactKeyName[]>}
       */

    }, {
      key: "getKeyAliases",
      value: function getKeyAliases() {
        return this._keyAliases;
      }
      /**
       * A normalized version of the key, achieved by comparing it to the list of known
       * aliases for the keys in the combination
       * @param {ReactKeyName} keyName Name of the key to normalize
       * @returns {ReactKeyName} Normalized key name
       */

    }, {
      key: "getNormalizedKeyName",
      value: function getNormalizedKeyName(keyName) {
        var keyState = this._keys[keyName];

        if (keyState) {
          return keyName;
        } else {
          var keyAlias = this._keyAliases[keyName];

          if (keyAlias) {
            return keyAlias;
          } else {
            return keyName;
          }
        }
      }
      /********************************************************************************
       * Query attributes of entire combination
       *********************************************************************************/

      /**
       * Number of keys involved in the combination
       * @returns {number} Number of keys
       */

    }, {
      key: "getNumberOfKeys",
      value: function getNumberOfKeys() {
        return size(this._keys);
      }
      /**
       * Whether there are any keys in the combination
       * @returns {boolean} true if there is 1 or more keys involved in the combination,
       *          else false.
       */

    }, {
      key: "any",
      value: function any() {
        return Object.keys(this._getKeyStates()).length > 0;
      }
      /**
       * Whether any of the keys in the combination have been released
       * @returns {boolean} true if at least 1 key has been released in the combination
       */

    }, {
      key: "isEnding",
      value: function isEnding() {
        return this._includesKeyUp;
      }
      /**
       * Whether there are any keys in the current combination still being pressed
       * @returns {boolean} True if all keys in the current combination are released
       */

    }, {
      key: "hasEnded",
      value: function hasEnded() {
        return isEmpty(this.keysStillPressedDict());
      }
      /********************************************************************************
       * Adding & modifying key states
       *********************************************************************************/

      /**
       * Add a new key to the combination (starting with a state of keydown)
       * @param {ReactKeyName} keyName Name of key
       * @param {KeyEventState} keyEventState State key is in
       * @returns {void}
       */

    }, {
      key: "addKey",
      value: function addKey(keyName, keyEventState) {
        this._setKeyState(keyName, [KeyEventStateArrayManager.newRecord(), KeyEventStateArrayManager.newRecord(KeyEventType.keydown, keyEventState)]);
      }
      /**
       * Adds a key event to the current key combination (as opposed to starting a new
       * keyboard combination).
       * @param {ReactKeyName} keyName - Name of the key to add to the current combination
       * @param {KeyEventType} recordIndex - Index in record to set to true
       * @param {KeyEventState} keyEventState The state to set the key event to
       */

    }, {
      key: "setKeyState",
      value: function setKeyState(keyName, recordIndex, keyEventState) {
        var existingRecord = this._getKeyState(keyName);

        if (this.isKeyIncluded(keyName)) {
          var previous = KeyEventStateArrayManager.clone(existingRecord[1]);
          var current = KeyEventStateArrayManager.clone(previous);
          KeyEventStateArrayManager.setBit(current, recordIndex, keyEventState);

          this._setKeyState(keyName, [previous, current]);
        } else {
          this.addKey(keyName, keyEventState);
        }

        if (recordIndex === KeyEventType.keyup) {
          this._includesKeyUp = true;
        }
      }
      /********************************************************************************
       * Iteration and subsets
       *********************************************************************************/

      /**
       * @callback forEachHandler
       * @param {ReactKeyName} keyName Name of a key in the combination
       * @returns {void}
       */

      /**
       * Iterates over every key in the combination, calling an function with each
       * key name
       * @param {forEachHandler} handler Function to call with the name of each key
       *        in the combination
       * @returns {void}
       */

    }, {
      key: "forEachKey",
      value: function forEachKey(handler) {
        return Object.keys(this._keys).forEach(handler);
      }
      /**
       * @callback evaluator
       * @param {ReactKeyName} keyName Name of a key in the combination
       * @returns {boolean}
       */

      /**
       * Whether at least one of the keys causes a evaluator function to return true
       * @callback {evaluator} evaluator Function to evaluate each key
       * @returns {boolean} Whether at least one key satisfies the evaluator
       */

    }, {
      key: "some",
      value: function some(evaluator) {
        return Object.keys(this._keys).some(evaluator);
      }
      /**
       * Dictionary of keys included in the combination record
       * @returns {Object.<ReactKeyName, boolean>}
       */

    }, {
      key: "getKeyDictionary",
      value: function getKeyDictionary() {
        return dictionaryFrom(Object.keys(this._getKeyStates()), true);
      }
      /**
       * Returns a new KeyCombination without the keys that have been
       * released (had the keyup event recorded). Essentially, the keys that are
       * currently still pressed down at the time a key event is being handled.
       * @returns {KeyCombination} New KeyCombination with all of the
       *        keys with keyup events omitted
       */

    }, {
      key: "keysStillPressedDict",
      value: function keysStillPressedDict() {
        var _this = this;

        return Object.keys(this._keys).reduce(function (memo, keyName) {
          if (_this.isKeyStillPressed(keyName)) {
            memo[keyName] = _this._getKeyState(keyName);
          }

          return memo;
        }, {});
      }
      /********************************************************************************
       * Query individual keys
       *********************************************************************************/

      /**
       * Whether key is in the combination
       * @param {ReactKeyName} keyName Name of key
       * @returns {boolean} true if the key is in the combination
       */

    }, {
      key: "isKeyIncluded",
      value: function isKeyIncluded(keyName) {
        return !!this._getKeyState(keyName);
      }
      /**
       * Whether key is in the combination and has yet to be released
       * @param {ReactKeyName} keyName Name of key
       * @returns {boolean} true if the key is in the combination and yet to be released
       */

    }, {
      key: "isKeyStillPressed",
      value: function isKeyStillPressed(keyName) {
        return this.isEventTriggered(keyName, KeyEventType.keypress) && !this.isKeyReleased(keyName);
      }
      /**
       * Whether key is in the combination and been released
       * @param {ReactKeyName} keyName Name of key
       * @returns {boolean} true if the key is in the combination and has been released
       */

    }, {
      key: "isKeyReleased",
      value: function isKeyReleased(keyName) {
        return this.isEventTriggered(keyName, KeyEventType.keyup);
      }
      /**
       * Whether an event has been recorded for a key yet
       * @param {ReactKeyName} keyName Name of the key
       * @param {KeyEventType} keyEventType Index of the event type
       * @returns {boolean} true if the event has been recorded for the key
       */

    }, {
      key: "isEventTriggered",
      value: function isEventTriggered(keyName, keyEventType) {
        return this._getKeyStateType(keyName, KeyEventSequenceIndex.current, keyEventType);
      }
      /**
       * Whether an event has been previously recorded for a key (the second most recent
       * event to occur for the key)
       * @param {ReactKeyName} keyName Name of the key
       * @param {KeyEventType} keyEventType Index of the event type
       * @returns {boolean} true if the event has been previously recorded for the key
       */

    }, {
      key: "wasEventPreviouslyTriggered",
      value: function wasEventPreviouslyTriggered(keyName, keyEventType) {
        return this._getKeyStateType(keyName, KeyEventSequenceIndex.previous, keyEventType);
      }
      /**
       * Whether a keypress event is currently being simulated
       * @param {ReactKeyName} keyName Name of the key
       * @returns {boolean} true if the keypress event is currently being simulated for the
       *        key
       */

    }, {
      key: "isKeyPressSimulated",
      value: function isKeyPressSimulated(keyName) {
        return this._isKeyEventSimulated(keyName, KeyEventType.keypress);
      }
      /**
       * Whether a keyup event is currently being simulated
       * @param {ReactKeyName} keyName Name of the key
       * @returns {boolean} true if the keyup event is currently being simulated for the
       *        key
       */

    }, {
      key: "isKeyUpSimulated",
      value: function isKeyUpSimulated(keyName) {
        return this._isKeyEventSimulated(keyName, KeyEventType.keyup);
      }
      /********************************************************************************
       * Presentation
       *********************************************************************************/

      /**
       * Return a serialized description of the keys in the combination
       * @returns {KeySequence}
       */

    }, {
      key: "describe",
      value: function describe() {
        return this.getIds()[0];
      }
      /**
       * A plain JavaScript representation of the key combination record, useful for
       * serialization or debugging
       * @returns {Object} Serialized representation of the combination record
       */

    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          keys: this._getKeyStates(),
          ids: this.getIds(),
          keyAliases: this.getKeyAliases()
        };
      }
      /********************************************************************************
       * Private methods
       *********************************************************************************/

    }, {
      key: "_getKeyStateType",
      value: function _getKeyStateType(keyName, keyStage, keyEventType) {
        var keyState = this._getKeyState(keyName);

        return keyState && keyState[keyStage][keyEventType];
      }
    }, {
      key: "_update",
      value: function _update() {
        this._ids = KeyCombinationSerializer.serialize(this._keys);
        this._keyAliases = buildKeyAliases(this._keys);
      }
    }, {
      key: "_isKeyEventSimulated",
      value: function _isKeyEventSimulated(keyName, keyEventType) {
        return this.isEventTriggered(keyName, keyEventType) === KeyEventState.simulated;
      }
    }, {
      key: "_getKeyStates",
      value: function _getKeyStates() {
        return this._keys;
      }
    }, {
      key: "_getKeyState",
      value: function _getKeyState(keyName) {
        var keyState = this._keys[keyName];

        if (keyState) {
          return keyState;
        } else {
          var keyAlias = this._keyAliases[keyName];

          if (keyAlias) {
            return this._keys[keyAlias];
          }
        }
      }
    }, {
      key: "_setKeyState",
      value: function _setKeyState(keyName, keyState) {
        var keyAlias = this.getNormalizedKeyName(keyName);
        this._keys[keyAlias] = keyState;

        this._update();
      }
    }]);

    return KeyCombination;
  }();

  function buildKeyAliases(keyDictionary) {
    return Object.keys(keyDictionary).reduce(function (memo, keyName) {
      resolveKeyAlias(keyName).forEach(function (normalizedKey) {
        applicableAliasFunctions(keyDictionary).forEach(function (aliasFunction) {
          aliasFunction(normalizedKey).forEach(function (keyAlias) {
            if (keyAlias !== keyName || keyName !== normalizedKey) {
              memo[keyAlias] = keyName;
            }
          });
        });
      });
      return memo;
    }, {});
  }

  /**
   * List of key combinations seen by hot key components
   * @class
   */

  var KeyHistory =
  /*#__PURE__*/
  function () {
    /**
     * Creates a new KeyHistory instance
     * @param {Number} maxLength Maximum length of the list.
     * @param {KeyCombination} startingPoint Initial state of first combination
     * @returns {KeyHistory}
     */
    function KeyHistory(_ref) {
      var maxLength = _ref.maxLength;
      var startingPoint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      _classCallCheck(this, KeyHistory);

      this._records = [];
      this._maxLength = maxLength;

      if (startingPoint) {
        this._push(startingPoint);
      } else {
        this._push(new KeyCombination());
      }
    }
    /**
     * A subset of the most recently press key combinations
     * @param {Number} numberOfCombinations The number of most recent key combinations
     * @returns {KeyCombination[]} List of key combinations
     */


    _createClass(KeyHistory, [{
      key: "getMostRecentCombinations",
      value: function getMostRecentCombinations(numberOfCombinations) {
        return this._records.slice(-numberOfCombinations, -1);
      }
      /**
       * Whether any keys have been stored in the key history
       * @returns {boolean} true if there is at least one key combination, else false
       */

    }, {
      key: "any",
      value: function any() {
        return this._records.some(function (keyCombination) {
          return keyCombination.any();
        });
      }
      /**
       * The number of key combinations in the history (limited by the max length)
       * @returns {number} Number of key combinations
       */

    }, {
      key: "getLength",
      value: function getLength() {
        return this._records.length;
      }
      /**
       * Most recent or current key combination
       * @returns {KeyCombination} Key combination record
       */

    }, {
      key: "getCurrentCombination",
      value: function getCurrentCombination() {
        return this._records[this.getLength() - 1];
      }
      /**
       * Adds a key event to the current key combination (as opposed to starting a new
       * keyboard combination).
       * @param {ReactKeyName} keyName - Name of the key to add to the current combination
       * @param {KeyEventType} recordIndex - Index in record to set to true
       * @param {KeyEventState} keyEventState The state to set the key event to
       */

    }, {
      key: "addKeyToCurrentCombination",
      value: function addKeyToCurrentCombination(keyName, recordIndex, keyEventState) {
        this._ensureInitialKeyCombination();

        this.getCurrentCombination().setKeyState(keyName, recordIndex, keyEventState);
      }
      /**
       * Sets a new maximum length for the key combination history. Once the number of
       * key combinations exceeds this length, the oldest is dropped.
       * @param {Number} length New maximum length of the key history
       */

    }, {
      key: "setMaxLength",
      value: function setMaxLength(length) {
        this._maxLength = length;

        this._trimHistory();
      }
      /**
       * Adds a new KeyCombination to the event history.
       * @param {ReactKeyName} keyName - Name of the keyboard key to add to the new
       *        KeyCombination
       * @param {KeyEventState} keyEventState The state to set the key event to
       */

    }, {
      key: "startNewKeyCombination",
      value: function startNewKeyCombination(keyName, keyEventState) {
        this._ensureInitialKeyCombination();

        var newCombinationRecord = new KeyCombination(this.getCurrentCombination().keysStillPressedDict());
        newCombinationRecord.addKey(keyName, keyEventState);

        this._push(newCombinationRecord);
      }
      /**
       * A plain JavaScript representation of the key combination history, useful for
       * serialization or debugging
       * @returns {Object[]} Serialized representation of the registry
       */

    }, {
      key: "toJSON",
      value: function toJSON() {
        return this._records.map(function (keyCombination) {
          return keyCombination.toJSON();
        });
      }
      /********************************************************************************
       * Private methods
       ********************************************************************************/

    }, {
      key: "_ensureInitialKeyCombination",
      value: function _ensureInitialKeyCombination() {
        if (this.getLength() === 0) {
          this._push(new KeyCombination());
        }
      }
    }, {
      key: "_push",
      value: function _push(record) {
        this._trimHistory();

        this._records.push(record);
      }
    }, {
      key: "_trimHistory",
      value: function _trimHistory() {
        while (this.getLength() > this._maxLength) {
          /**
           * We know the longest key sequence registered for the currently focused
           * components, so we don't need to keep a record of history longer than
           * that
           */
          this._shift();
        }
      }
    }, {
      key: "_shift",
      value: function _shift() {
        this._records.shift();
      }
    }]);

    return KeyHistory;
  }();

  /**
   * Generic registry for storing and retrieving items
   * @class @abstract
   */
  var Registry =
  /*#__PURE__*/
  function () {
    /**
     * Create a new Registry instance
     * @returns {Registry}
     */
    function Registry() {
      _classCallCheck(this, Registry);

      this._registry = {};
    }
    /**
     * Returns the registry item stored with against an id
     * @param {*} id The key item was registered with
     * @returns {*} Item stored in registry
     */


    _createClass(Registry, [{
      key: "get",
      value: function get(id) {
        return this._registry[id];
      }
      /**
       * Add an item to the registry
       * @param {*} id Key to store the item against
       * @param {*} item Item to store in the registry
       */

    }, {
      key: "set",
      value: function set(id, item) {
        this._registry[id] = item;
      }
      /**
       * Remove an item from the registry
       * @param {*} id Key of the item to remove from the registry
       */

    }, {
      key: "remove",
      value: function remove(id) {
        delete this._registry[id];
      }
      /**
       * A plain JavaScript representation of the registry, useful for serialization or
       * debugging
       * @returns {Object.<*,*>} Serialized representation of the registry
       */

    }, {
      key: "toJSON",
      value: function toJSON() {
        return this._registry;
      }
    }]);

    return Registry;
  }();

  function arrayFrom(target) {
    if (Array.isArray(target)) {
      return target;
    } else if (!target) {
      return [];
    } else {
      return [target];
    }
  }

  function without(target) {
    var attributesToOmit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var omitDict = dictionaryFrom(arrayFrom(attributesToOmit));

    if (Array.isArray(target)) {
      return target.reduce(function (memo, element) {
        if (!(omitDict[element] && (options.stringifyFirst || omitDict[element].value === element))) {
          memo.push(element);
        }

        return memo;
      }, []);
    } else if (isObject(target)) {
      return Object.keys(target).reduce(function (memo, key) {
        if (!omitDict[key]) {
          memo[key] = target[key];
        }

        return memo;
      }, {});
    } else {
      return target;
    }
  }

  /**
   * @typedef {Object} ComponentRegistryEntry
   * @property {ComponentId[]} childIds List of ids of the children of a component
   * @property {ComponentId|null} parentIds Id of the parent component
   */

  /**
   * Registry of hot keys components, mapping children to their parents and vice versa
   * @class
   */

  var ComponentTree =
  /*#__PURE__*/
  function (_Registry) {
    _inherits(ComponentTree, _Registry);

    function ComponentTree() {
      _classCallCheck(this, ComponentTree);

      return _possibleConstructorReturn(this, _getPrototypeOf(ComponentTree).apply(this, arguments));
    }

    _createClass(ComponentTree, [{
      key: "add",

      /**
       * Register a component
       * @param {ComponentId} componentId Id of the component to register
       * @param {KeyMap} keyMap - Map of actions to key expressions
       * @returns {void}
       */
      value: function add(componentId, keyMap) {
        _get(_getPrototypeOf(ComponentTree.prototype), "set", this).call(this, componentId, {
          childIds: [],
          parentId: null,
          keyMap: keyMap
        });
      }
      /**
       * Updates an existing component's key map
       * @param {ComponentId} componentId Id of the component to register
       * @param {KeyMap} keyMap - Map of actions to key expressions
       * @returns {void}
       */

    }, {
      key: "update",
      value: function update(componentId, keyMap) {
        var component = _get(_getPrototypeOf(ComponentTree.prototype), "get", this).call(this, componentId);

        _get(_getPrototypeOf(ComponentTree.prototype), "set", this).call(this, componentId, _objectSpread({}, component, {
          keyMap: keyMap
        }));
      }
      /**
       * Set the parent ID of a component
       * @param {ComponentId} componentId Id of the component
       * @param {ComponentId} parentId Id of the parent
       * @returns {void}
       */

    }, {
      key: "setParent",
      value: function setParent(componentId, parentId) {
        this.get(componentId).parentId = parentId;

        this._addChildId(parentId, componentId);
      }
      /**
       * Deregister a component
       * @param {ComponentId} componentId Id of the component to remove
       * @returns {void}
       */

    }, {
      key: "remove",
      value: function remove(componentId) {
        var parentId = this._getParentId(componentId);

        this._removeChildId(parentId, componentId);

        _get(_getPrototypeOf(ComponentTree.prototype), "remove", this).call(this, componentId);
      }
      /********************************************************************************
       * Private methods
       ********************************************************************************/

    }, {
      key: "_getParentId",
      value: function _getParentId(componentId) {
        var component = this.get(componentId);
        return component && component.parentId;
      }
    }, {
      key: "_addChildId",
      value: function _addChildId(parentId, componentId) {
        this.get(parentId).childIds.push(componentId);
      }
    }, {
      key: "_removeChildId",
      value: function _removeChildId(parentId, childId) {
        var parent = this.get(parentId);

        if (parent) {
          parent.childIds = without(parent.childIds, childId);
        }
      }
    }]);

    return ComponentTree;
  }(Registry);

  function removeAtIndex(array, index) {
    return [].concat(_toConsumableArray(array.slice(0, index)), _toConsumableArray(array.slice(index + 1)));
  }

  /**
   * Iterates over ComponentOptionList instances
   * @class
   */
  var ComponentOptionsListIterator =
  /*#__PURE__*/
  function () {
    /**
     * Creates a new instance of ComponentOptionsListIterator
     * @param {ComponentOptionsList} list The list to iterate over
     */
    function ComponentOptionsListIterator(list) {
      _classCallCheck(this, ComponentOptionsListIterator);

      this._list = list;
      this._position = -1;
    }
    /**
     * The position the iterator is currently at
     * @returns {number} The current position
     */


    _createClass(ComponentOptionsListIterator, [{
      key: "getPosition",
      value: function getPosition() {
        return this._position;
      }
      /**
       * The component options the iterator is currently pointed at
       * @returns {ComponentOptions} The current component options
       */

    }, {
      key: "getComponent",
      value: function getComponent() {
        return this._list.getAtPosition(this.getPosition());
      }
      /**
       * Move to the next component options in the list, if not already at the end of the
       * list.
       * @returns {ComponentOptionsList|null} The next component options the iterator is now
       *        pointed at. If the iterator is already at the last component options, null
       *        is returned.
       */

    }, {
      key: "next",
      value: function next() {
        if (this.getPosition() + 1 < this._list.getLength()) {
          this._position++;
          return this.getComponent();
        } else {
          return null;
        }
      }
    }]);

    return ComponentOptionsListIterator;
  }();

  /**
   * @typedef {Object} ComponentOptions a hotkeys component's options in a normalized
   *          format
   * @property {ActionDictionary} actions The dictionary of actions defined by the
   *           component
   */

  /**
   * A mapping between ActionName and ActionConfiguration
   * @typedef {Object.<ActionName,ActionConfiguration>} ActionDictionary
   */

  /**
   * Standardized format for defining an action
   * @typedef {Object} ActionConfiguration
   * @property {NormalizedKeySequenceId} prefix - String describing the sequence of key
   *          combinations, before the final key combination (an empty string for
   *          sequences that are a single key combination)
   * @property {ActionName} actionName - Name of the action
   * @property {number} sequenceLength - Number of combinations involved in the
   *           sequence
   * @property {KeyCombinationString} id - Serialized description of the key combinations
   *            that make up the sequence
   * @property {Object.<KeyName, Boolean>} keyDictionary - Dictionary of key names involved
   *           in the last key combination of the sequence
   * @property {KeyEventType} keyEventType - Record index for key event that
   *          the matcher should match on
   * @property {number} size - Number of keys involved in the final key combination
   */

  /**
   * List of component options that define the application's currently enabled key
   * maps and handlers, starting from the inner-most (most deeply nested) component,
   * that is closest to the DOM element currently in focus, and ending with the options
   * of the root hotkeys component.
   * @class
   */

  var ComponentOptionsList =
  /*#__PURE__*/
  function () {
    function ComponentOptionsList() {
      _classCallCheck(this, ComponentOptionsList);

      /**
       * List of ComponentOptions for the actions registered by each hot keys component.
       * @type {ComponentOptions[]}
       */
      this._list = [];
      /**
       * Dictionary mapping the ids of the components defining actions, and their
       * position in the list.
       * @type {Object.<ComponentId, Number>}
       */

      this._idToIndex = {};
      /**
       * Counter for the length of the longest sequence currently enabled.
       * @type {number}
       */

      this._longestSequence = 1;
      /**
       * The id of the component with the longest key sequence
       * @type {ComponentId}
       */

      this._longestSequenceComponentId = null;
      /**
       * Record of whether at least one keymap is bound to each event type (keydown,
       * keypress or keyup)
       * @type {KeyEvent}
       */

      this._keyMapEventRecord = KeyEventStateArrayManager.newRecord();
    }
    /**
     * Return a new iterator that can be used to enumerate the list
     * @returns {ComponentOptionsListIterator}
     */


    _createClass(ComponentOptionsList, [{
      key: "getNewIterator",
      value: function getNewIterator() {
        return new ComponentOptionsListIterator(this);
      }
      /**
       * Adds a new hot key component's options, to be parsed and standardised before being
       * added to the list
       * @param {ComponentId} componentId - Id of the component the options belong to
       * @param {KeyMap} actionNameToKeyMap - Map of actions to key maps
       * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handlers
       * @param {Object} options - Hash of options that configure how the key map is built.
       * @param {string} options.defaultKeyEvent - The default key event to use for any
       *        action that does not explicitly define one.
       * @returns {number} The position the component options have in the list
       */

    }, {
      key: "add",
      value: function add(componentId, actionNameToKeyMap, actionNameToHandlersMap, options) {
        if (this.containsId(componentId)) {
          return this.update(componentId, actionNameToKeyMap, actionNameToHandlersMap, options);
        }

        var componentOptions = this._build(componentId, actionNameToKeyMap, actionNameToHandlersMap, options);

        this._list.push(componentOptions);

        var newIndex = this._getLastIndex();

        return this._idToIndex[componentId] = newIndex;
      }
      /**
       * Whether the list contains options for a component with the specified id
       * @param {ComponentId} id Id of the component
       * @returns {boolean} True if the list contains options for the component with the
       *        specified id
       */

    }, {
      key: "containsId",
      value: function containsId(id) {
        return !!this.get(id);
      }
      /**
       * Retrieves options for a component from the list
       * @param {ComponentId} id Id of the component to retrieve the options for
       * @returns {ComponentOptions} Options for the component with the specified id
       */

    }, {
      key: "get",
      value: function get(id) {
        return this.getAtPosition(this.getIndexById(id));
      }
      /**
       * Returns the position of the options belonging to the component with the specified
       * id.
       * @param {ComponentId} id Id of the component to retrieve the options for
       * @returns {number} The position of the component options in the list.
       */

    }, {
      key: "getIndexById",
      value: function getIndexById(id) {
        return this._idToIndex[id];
      }
      /**
       * Replaces the options of a component already in the list with new values
       * @param {ComponentId} componentId - Id of the component to replace the options of
       * @param {KeyMap} actionNameToKeyMap - Map of actions to key maps
       * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handlers
       * @param {Object} options - Hash of options that configure how the key map is built.
       * @param {string} options.defaultKeyEvent - The default key event to use for any
       *        action that does not explicitly define one.
       * @returns {number} The position the component options have in the list
       */

    }, {
      key: "update",
      value: function update(componentId, actionNameToKeyMap, actionNameToHandlersMap, options) {
        /**
         * We record whether we're building new options for the component that currently
         * has the longest sequence, to decide whether we need to recalculate the longest
         * sequence.
         */
        var isUpdatingLongestSequenceComponent = this._isUpdatingComponentWithLongestSequence(componentId);

        var longestSequenceBefore = this.getLongestSequence();

        var componentOptions = this._build(componentId, actionNameToKeyMap, actionNameToHandlersMap, options);

        if (isUpdatingLongestSequenceComponent && componentOptions.sequenceLength !== longestSequenceBefore) {
          /**
           * Component with the longest sequence has just had new options registered
           * so we need to reset the longest sequence
           */
          if (componentOptions.sequenceLength > longestSequenceBefore) {
            /**
             * The same component has registered a longer sequence, so we just
             * need to update the sequence length to the new, larger number
             */
            this._longestSequence = componentOptions.sequenceLength;
          } else {
            /**
             * The component may no longer have the longest sequence, so we need to
             * recalculate
             */
            this._recalculateLongestSequence();
          }
        }

        this._list[this.getIndexById(componentId)] = componentOptions;
      }
      /**
       * Removes the options of a component from the list
       * @param {ComponentId} id The id of the component whose options are removed
       * @returns {void}
       */

    }, {
      key: "remove",
      value: function remove(id) {
        var isUpdatingLongestSequenceComponent = this._isUpdatingComponentWithLongestSequence(id);

        this.removeAtPosition(this.getIndexById(id));

        if (isUpdatingLongestSequenceComponent) {
          this._recalculateLongestSequence();
        }
      }
      /**
       * Whether the list has any options in it (non-empty)
       * @returns {boolean} true if the list has one or more options in it
       */

    }, {
      key: "any",
      value: function any() {
        return this.getLength() !== 0;
      }
      /**
       * Whether a component is the root component (the last one in the list)
       * @param {ComponentId} id Id of the component to query if it is the root
       * @returns {boolean} true if the component is the last in the list
       */

    }, {
      key: "isRoot",
      value: function isRoot(id) {
        return this.getIndexById(id) >= this.getLength() - 1;
      }
      /**
       * The length of the longest sequence currently defined.
       * @returns {number} The sequence length
       */

    }, {
      key: "getLongestSequence",
      value: function getLongestSequence() {
        return this._longestSequence;
      }
      /**
       * Whether the list contains at least one component with an action bound to a
       * particular keyboard event type.
       * @param {KeyEventType} keyEventType Index of the keyboard event type
       * @returns {boolean} true when the list contains a component with an action bound
       *          to the event type
       */

    }, {
      key: "anyActionsForEventType",
      value: function anyActionsForEventType(keyEventType) {
        return !!this._keyMapEventRecord[keyEventType];
      }
      /**
       * The number of components in the list
       * @returns {number} Number of components in the list
       */

    }, {
      key: "getLength",
      value: function getLength() {
        return this._list.length;
      }
      /**
       * The component options at particular position in the list
       * @param {number} position The position in the list
       * @returns {ComponentOptions} The component options at the position in the list
       */

    }, {
      key: "getAtPosition",
      value: function getAtPosition(position) {
        return this._list[position];
      }
      /**
       * Remove the component options at a position in the list
       * @param {number} position The position in the list to remove the options
       * return {void}
       */

    }, {
      key: "removeAtPosition",
      value: function removeAtPosition(position) {
        this._list = removeAtIndex(this._list, position);
        var counter = position;

        while (counter < this.getLength()) {
          this._idToIndex[this.getAtPosition(counter).componentId] = counter;
          counter++;
        }
      }
      /**
       * A plain JavaScript object representation of the component options list that can
       * be used for serialization or debugging
       * @returns {ComponentOptions[]} plain JavaScript object representation of the list
       */

    }, {
      key: "toJSON",
      value: function toJSON() {
        return this._list;
      }
      /********************************************************************************
       * Private methods
       ********************************************************************************/

    }, {
      key: "_getLastIndex",
      value: function _getLastIndex() {
        return this.getLength() - 1;
      }
      /**
       * Builds the internal representation that described the options passed to a hot keys
       * component
       * @param {ComponentId} componentId - Id of the component the options belong to
       * @param {KeyMap} actionNameToKeyMap - Map of actions to key maps
       * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handlers
       * @param {Object} options - Hash of options that configure how the key map is built.
       * @returns {ComponentOptions} Options for the specified component
       * @private
       */

    }, {
      key: "_build",
      value: function _build(componentId, actionNameToKeyMap, actionNameToHandlersMap, options) {
        var _this$_applyHardSeque = this._applyHardSequences(actionNameToKeyMap, actionNameToHandlersMap),
            hardSequenceKeyMap = _this$_applyHardSeque.keyMap,
            includingHardSequenceHandlers = _this$_applyHardSeque.handlers;

        var actions = this._buildActionDictionary(_objectSpread({}, actionNameToKeyMap, hardSequenceKeyMap), options, componentId);

        return {
          actions: actions,
          handlers: includingHardSequenceHandlers,
          componentId: componentId,
          options: options
        };
      }
    }, {
      key: "_isUpdatingComponentWithLongestSequence",
      value: function _isUpdatingComponentWithLongestSequence(componentId) {
        return componentId === this._getLongestSequenceComponentId();
      }
    }, {
      key: "_getLongestSequenceComponentId",
      value: function _getLongestSequenceComponentId() {
        return this._longestSequenceComponentId;
      }
    }, {
      key: "_recalculateLongestSequence",
      value: function _recalculateLongestSequence() {
        var iterator = this.getNewIterator();

        while (iterator.next()) {
          var _iterator$getComponen = iterator.getComponent(),
              longestSequence = _iterator$getComponen.longestSequence,
              componentId = _iterator$getComponen.componentId;

          if (longestSequence > this.getLongestSequence()) {
            this._longestSequenceComponentId = componentId;
            this._longestSequence = longestSequence;
          }
        }
      }
      /**
       * Applies hard sequences (handlers attached to actions with names that are valid
       * KeySequenceStrings) that implicitly define a corresponding action name.
       * @param {KeyMap} actionNameToKeyMap - KeyMap specified by HotKeys component
       * @param {HandlersMap} actionMap - HandlersMap specified by HotKeys component
       * @returns {{keyMap: {}, handlers: {}}} Object containing keymap and handlers map
       *        with the hard sequence actions applied
       * @private
       */

    }, {
      key: "_applyHardSequences",
      value: function _applyHardSequences(actionNameToKeyMap, actionMap) {
        if (Configuration.option('enableHardSequences')) {
          return Object.keys(actionMap).reduce(function (memo, actionNameOrHardSequence) {
            var actionNameIsInKeyMap = !!actionNameToKeyMap[actionNameOrHardSequence];

            if (!actionNameIsInKeyMap && KeyCombinationSerializer.isValidKeySerialization(actionNameOrHardSequence)) {
              memo.keyMap[actionNameOrHardSequence] = actionNameOrHardSequence;
            }

            memo.handlers[actionNameOrHardSequence] = actionMap[actionNameOrHardSequence];
            return memo;
          }, {
            keyMap: {},
            handlers: {}
          });
        } else {
          return {
            keyMap: actionNameToKeyMap,
            handlers: actionMap
          };
        }
      }
      /**
       * Returns a mapping between ActionNames and ActionConfiguration
       * @param {KeyMap} actionNameToKeyMap - Mapping of ActionNames to key sequences.
       * @param {Object} options - Hash of options that configure how the key map is built.
       * @param {string} options.defaultKeyEvent - The default key event to use for any
       *        action that does not explicitly define one.
       * @param {ComponentId} componentId Index of the component the matcher belongs to
       * @returns {ActionDictionary} Map from ActionNames to ActionConfiguration
       * @private
       */

    }, {
      key: "_buildActionDictionary",
      value: function _buildActionDictionary(actionNameToKeyMap, options, componentId) {
        var _this = this;

        return Object.keys(actionNameToKeyMap).reduce(function (memo, actionName) {
          var keyMapConfig = actionNameToKeyMap[actionName];

          var keyMapOptions = function () {
            if (isObject(keyMapConfig) && hasKey(keyMapConfig, 'sequences')) {
              return arrayFrom(keyMapConfig.sequences);
            } else {
              return arrayFrom(keyMapConfig);
            }
          }();

          keyMapOptions.forEach(function (keyMapOption) {
            var _normalizeActionOptio = normalizeActionOptions(keyMapOption, options),
                keySequence = _normalizeActionOptio.keySequence,
                keyEventType = _normalizeActionOptio.keyEventType;

            _this._addActionOptions(memo, componentId, actionName, keySequence, keyEventType);
          });
          return memo;
        }, {});
      }
    }, {
      key: "_addActionOptions",
      value: function _addActionOptions(memo, componentId, actionName, keySequence, keyEventType) {
        var _KeySequenceParser$pa = KeySequenceParser.parse(keySequence, {
          keyEventType: keyEventType
        }),
            sequence = _KeySequenceParser$pa.sequence,
            combination = _KeySequenceParser$pa.combination;

        if (sequence.size > this.getLongestSequence()) {
          this._longestSequence = sequence.size;
          this._longestSequenceComponentId = componentId;
        }
        /**
         * Record that there is at least one key sequence in the focus tree bound to
         * the keyboard event
         */


        this._keyMapEventRecord[keyEventType] = KeyEventState.seen;

        if (!memo[actionName]) {
          memo[actionName] = [];
        }

        memo[actionName].push(_objectSpread({
          prefix: sequence.prefix,
          actionName: actionName,
          sequenceLength: sequence.size
        }, combination));
      }
    }]);

    return ComponentOptionsList;
  }();

  function normalizeActionOptions(keyMapOption, options) {
    if (isObject(keyMapOption)) {
      var sequence = keyMapOption.sequence,
          action = keyMapOption.action;
      return {
        keySequence: sequence,
        keyEventType: isUndefined(action) ? KeyEventType[options.defaultKeyEvent] : KeyEventType[action]
      };
    } else {
      return {
        keySequence: keyMapOption,
        keyEventType: KeyEventType[options.defaultKeyEvent]
      };
    }
  }

  /**
   * Returns the element in an array at a particular index from the end
   * @param {Array.<T>} array Array to iterate over to find the item
   * @param {number} placesFromEnd Number of places from the end of the array to find
   *        the item to return
   * @returns {T} The item found in the array at the particular index
   * @template T
   */
  function indexFromEnd(array, placesFromEnd) {
    return array[array.length - (placesFromEnd + 1)];
  }

  /**
   * Dictionary of keys that, when pressed down with the cmd key, never trigger a keyup
   * event in the browser
   */
  var KeysWithKeyUpHiddenByCmd = {
    Enter: true,
    Backspace: true,
    ArrowRight: true,
    ArrowLeft: true,
    ArrowUp: true,
    ArrowDown: true,

    /**
     * Caps lock is a strange case where it not only fails to trigger a keyup event when,
     * pressed with cmd, but it's keyup event is triggered when caps lock is toggled off
     */
    CapsLock: true
  };

  for (var i = 1; i < 13; i++) {
    KeysWithKeyUpHiddenByCmd["F".concat(i)] = true;
  }

  /**
   * Whether the specified key, when pressed down with the cmd key, never triggers a keyup
   * event in the browser
   * @param {NormalizedKeyName} keyName Name of the key
   * @returns {boolean} Whether the key has its keyup event hidden by cmd
   */

  function keyupIsHiddenByCmd(keyName) {
    return keyName.length === 1 || hasKey(KeysWithKeyUpHiddenByCmd, keyName);
  }

  /**
   * Object containing all information necessary to match a handler to a history of
   * key combinations
   * @typedef {Object} MatchingActionConfig
   * @property {NormalizedKeySequenceId} prefix - String describing the sequence of key
   *          combinations, before the final key combination (an empty string for
   *          sequences that are a single key combination)
   * @property {number} sequenceLength - Number of combinations involved in the
   *           sequence
   * @property {KeyCombinationString} id - Serialized description of the key combinations
   *            that make up the sequence
   * @property {Object.<KeyName, Boolean>} keyDictionary - Dictionary of key names involved
   *           in the last key combination of the sequence
   * @property {KeyEventType} keyEventType - Record index for key event that
   *          the matcher should match on
   * @property {number} size - Number of keys involved in the final key combination
   * @property {EventMatchDictionary} events - Dictionary of EventMatches
   */

  /**
   * A dictionary mapping key event types to event matches
   * @typedef {Object.<KeyEventType, EventMatch>} EventMatchDictionary
   */

  /**
   * Object containing information to call a handler if an event type matches a
   * key event
   * @typedef {Object} EventMatch
   * @property {ActionName} actionName - Name of the action
   * @property {Function} handler - Handler to call if event type matches
   */

  /**
   * Matches a KeyCombination to a list of pre-registered ActionConfiguration and their
   * corresponding handler functions
   * @class
   */

  var KeyCombinationMatcher =
  /*#__PURE__*/
  function () {
    /**
     * Returns a new instance of KeyCombinationMatcher
     * @returns {KeyCombinationMatcher}
     */
    function KeyCombinationMatcher() {
      _classCallCheck(this, KeyCombinationMatcher);

      this._actionConfigs = {};
      this._order = null;
    }
    /**
     * Adds a new ActionConfiguration and handler to those that can be used to match a
     * KeyCombination
     * @param {ActionConfiguration} actionConfig
     * @param {Function} handler Function to call if match is selected
     * @returns {void}
     */


    _createClass(KeyCombinationMatcher, [{
      key: "addMatch",
      value: function addMatch(actionConfig, handler) {
        if (this._includesMatcherForCombination(actionConfig.id)) {
          var keyEventType = actionConfig.keyEventType,
              actionName = actionConfig.actionName,
              id = actionConfig.id;

          this._addHandlerToActionConfig(id, {
            keyEventType: keyEventType,
            actionName: actionName,
            handler: handler
          });
        } else {
          this._addNewActionConfig(actionConfig, handler);
        }
      }
      /**
       * Finds a MatchingActionConfig for a KeyCombination, ReactKeyName and
       * KeyEventType
       * @param {KeyCombination} keyCombination Record of key combinations
       *         to use in the match
       * @param {ReactKeyName} keyName Name of the key to use in the match
       * @param {KeyEventType} keyEventType The type of key event to use in the match
       * @returns {MatchingActionConfig|null} A MatchingActionOptions that matches the
       *          KeyCombination, ReactKeyName and KeyEventType
       */

    }, {
      key: "findMatch",
      value: function findMatch(keyCombination, keyName, keyEventType) {
        if (!this._order) {
          this._setOrder();
        }

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this._order[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var combinationId = _step.value;
            var actionOptions = this._actionConfigs[combinationId];

            if (this._matchesActionConfig(keyCombination, keyName, keyEventType, actionOptions)) {
              return actionOptions;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return null;
      }
      /********************************************************************************
       * Presentation
       ********************************************************************************/

      /**
       * A plain JavaScript representation of the KeyCombinationMatcher, useful for
       * serialization or debugging
       * @returns {Object} Serialized representation of the key combination matcher
       */

    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          actionConfigs: this._actionConfigs,
          order: this._order
        };
      }
      /********************************************************************************
       * Private methods
       ********************************************************************************/

    }, {
      key: "_matchesActionConfig",
      value: function _matchesActionConfig(keyCombination, keyName, keyEventType, actionOptions) {
        if (!canBeMatched(keyCombination, actionOptions)) {
          return false;
        }

        var combinationHasHandlerForEventType = actionOptions.events[keyEventType];

        if (!combinationHasHandlerForEventType) {
          /**
           * If the combination does not have any actions bound to the key event we are
           * currently processing, we skip checking if it matches the current keys being
           * pressed.
           */
          return false;
        }

        var keyCompletesCombination = false;
        var combinationMatchesKeysPressed = Object.keys(actionOptions.keyDictionary).every(function (candidateKeyName) {
          if (keyCombination.isEventTriggered(candidateKeyName, keyEventType)) {
            if (keyName && keyName === keyCombination.getNormalizedKeyName(candidateKeyName)) {
              keyCompletesCombination = !keyCombination.wasEventPreviouslyTriggered(candidateKeyName, keyEventType);
            }

            return true;
          } else {
            return false;
          }
        });
        return combinationMatchesKeysPressed && keyCompletesCombination;
      }
    }, {
      key: "_setOrder",
      value: function _setOrder() {
        /**
         * The first time the component that is currently handling the key event has
         * its handlers searched for a match, order the combinations based on their
         * size so that they may be applied in the correct priority order
         */
        var combinationsPartitionedBySize = Object.values(this._actionConfigs).reduce(function (memo, _ref) {
          var id = _ref.id,
              size$$1 = _ref.size;

          if (!memo[size$$1]) {
            memo[size$$1] = [];
          }

          memo[size$$1].push(id);
          return memo;
        }, {});
        this._order = Object.keys(combinationsPartitionedBySize).sort(function (a, b) {
          return b - a;
        }).reduce(function (memo, key) {
          return memo.concat(combinationsPartitionedBySize[key]);
        }, []);
      }
    }, {
      key: "_addNewActionConfig",
      value: function _addNewActionConfig(combinationSchema, handler) {
        var prefix = combinationSchema.prefix,
            sequenceLength = combinationSchema.sequenceLength,
            id = combinationSchema.id,
            keyDictionary = combinationSchema.keyDictionary,
            size$$1 = combinationSchema.size,
            keyEventType = combinationSchema.keyEventType,
            actionName = combinationSchema.actionName;

        this._setCombinationMatcher(id, {
          prefix: prefix,
          sequenceLength: sequenceLength,
          id: id,
          keyDictionary: keyDictionary,
          size: size$$1,
          events: {}
        });

        this._addHandlerToActionConfig(id, {
          keyEventType: keyEventType,
          actionName: actionName,
          handler: handler
        });
      }
    }, {
      key: "_addHandlerToActionConfig",
      value: function _addHandlerToActionConfig(id, _ref2) {
        var keyEventType = _ref2.keyEventType,
            actionName = _ref2.actionName,
            handler = _ref2.handler;

        var combination = this._getCombinationMatcher(id);

        this._setCombinationMatcher(id, _objectSpread({}, combination, {
          events: _objectSpread({}, combination.events, _defineProperty({}, keyEventType, {
            actionName: actionName,
            handler: handler
          }))
        }));
      }
    }, {
      key: "_setCombinationMatcher",
      value: function _setCombinationMatcher(id, combinationMatcher) {
        this._actionConfigs[id] = combinationMatcher;
      }
    }, {
      key: "_getCombinationMatcher",
      value: function _getCombinationMatcher(id) {
        return this._actionConfigs[id];
      }
    }, {
      key: "_includesMatcherForCombination",
      value: function _includesMatcherForCombination(id) {
        return !!this._getCombinationMatcher(id);
      }
    }]);

    return KeyCombinationMatcher;
  }();

  function canBeMatched(keyCombination, combinationMatcher) {
    var combinationKeysNo = size(combinationMatcher.keyDictionary);

    if (Configuration.option('allowCombinationSubmatches') || keyUpIsBeingHidden(keyCombination)) {
      return keyCombination.getNumberOfKeys() >= combinationKeysNo;
    } else {
      /**
       * If sub-matches are not allow, the number of keys in the key state and the
       * number of keys in the combination we are attempting to match, must be
       * exactly the same
       */
      return keyCombination.getNumberOfKeys() === combinationKeysNo;
    }
  }

  function keyUpIsBeingHidden(keyCombination) {
    if (keyCombination.isKeyStillPressed('Meta')) {
      return keyCombination.some(function (keyName) {
        return keyupIsHiddenByCmd(keyName);
      });
    }

    return false;
  }

  /**
   * Matches a KeyHistory to a list of pre-registered ActionConfiguration and
   * their corresponding handler functions
   * @class
   */

  var KeyHistoryMatcher =
  /*#__PURE__*/
  function () {
    /**
     * Returns a new instance of KeyMapMatcher
     * @returns {KeyHistoryMatcher}
     */
    function KeyHistoryMatcher() {
      _classCallCheck(this, KeyHistoryMatcher);

      this._combinationMatchers = {};
      this._eventRecord = KeyEventStateArrayManager.newRecord();
    }
    /**
     * Adds a possible match that can be used to match key combination histories
     * @param {ActionConfiguration} actionConfig The configuration object that
     *        defines the action the possible match represents
     * @param {Function} handler Function to call if the possible match is selected
     *        when matching against a key combination history
     * @returns {void}
     */


    _createClass(KeyHistoryMatcher, [{
      key: "addMatch",
      value: function addMatch(actionConfig, handler) {
        var combinationMatcher = this._getOrCreateCombinationMatcher(actionConfig.prefix);

        combinationMatcher.addMatch(actionConfig, handler);
        /**
         * Merge event records so we can quickly determine if a given component
         * has any handlers bound to particular key events
         */

        KeyEventStateArrayManager.setBit(this._eventRecord, actionConfig.keyEventType, KeyEventState.seen);
        /**
         * Record the longest sequence length so we know to only check for sequences
         * of that length or shorter for a particular component
         */

        if (!this._longestSequence || this._longestSequence < actionConfig.sequenceLength) {
          this._longestSequence = actionConfig.sequenceLength;
        }
      }
      /**
       * Attempts to find a match from the list of possible matches previously registered
       * for a given key event and key combination history
       * @param {KeyHistory} keyHistory History to attempt to
       *        find a match for
       * @param {ReactKeyName} key Name of the key to find a match for
       * @param {KeyEventType} keyEventType Type of event to find a match
       * @returns {MatchingActionConfig|null} First MatchingActionOptions that matches
       */

    }, {
      key: "findMatch",
      value: function findMatch(keyHistory, key, keyEventType) {
        var combinationMatcher = this._findCombinationMatcher(keyHistory);

        if (combinationMatcher) {
          return combinationMatcher.findMatch(keyHistory.getCurrentCombination(), keyHistory.getCurrentCombination().getNormalizedKeyName(key), keyEventType);
        }

        return null;
      }
      /**
       * Whether a possible match has been registered for a key event type
       * @param {KeyEventType} eventType Type of event
       * @returns {boolean} true if at least one possible match has been registered for
       *        the event
       */

    }, {
      key: "hasMatchesForEventType",
      value: function hasMatchesForEventType(eventType) {
        return !!this._eventRecord[eventType];
      }
      /**
       * The number of combinations involved for the ActionConfiguration with the longest
       * key sequence
       * @returns {number} Number of combinations in the longest sequence
       */

    }, {
      key: "getLongestSequence",
      value: function getLongestSequence() {
        return this._longestSequence;
      }
      /********************************************************************************
       * Presentation
       ********************************************************************************/

      /**
       * A plain JavaScript representation of the KeyMapMatcher, useful for
       * serialization or debugging
       * @returns {Object} Serialized representation of the key map matcher
       */

    }, {
      key: "toJSON",
      value: function toJSON() {
        var _this = this;

        return Object.keys(this._combinationMatchers).reduce(function (memo, prefix) {
          var combinationMatcher = _this._combinationMatchers[prefix];
          memo[prefix] = combinationMatcher.toJSON();
          return memo;
        }, {});
      }
      /********************************************************************************
       * Private methods
       ********************************************************************************/

    }, {
      key: "_getOrCreateCombinationMatcher",
      value: function _getOrCreateCombinationMatcher(prefix) {
        if (!this._combinationMatchers[prefix]) {
          this._combinationMatchers[prefix] = new KeyCombinationMatcher();
        }

        return this._combinationMatchers[prefix];
      }
    }, {
      key: "_findCombinationMatcher",
      value: function _findCombinationMatcher(keyHistory) {
        var sequenceHistory = keyHistory.getMostRecentCombinations(this.getLongestSequence());

        if (sequenceHistory.length === 0) {
          return this._combinationMatchers[''];
        }

        var sequenceIds = sequenceHistory.map(function (keyCombination) {
          return keyCombination.getIds();
        });
        var idSizes = sequenceIds.map(function (ids) {
          return ids.length;
        });
        /**
         * List of counters
         * @type {number[]}
         */

        var indexCounters = new Array(sequenceIds.length).fill(0);
        var triedAllPossiblePermutations = false;

        while (!triedAllPossiblePermutations) {
          var sequenceIdPermutation = indexCounters.map(function (sequenceIdIndex, index) {
            return sequenceIds[index][sequenceIdIndex];
          });
          var candidateId = sequenceIdPermutation.join(' ');

          if (this._combinationMatchers[candidateId]) {
            return this._combinationMatchers[candidateId];
          }

          var incrementer = 0;
          var carry = true;

          while (carry && incrementer < indexCounters.length) {
            var count = indexFromEnd(indexCounters, incrementer);
            var newIndex = (count + 1) % (indexFromEnd(idSizes, incrementer) || 1);
            indexCounters[indexCounters.length - (incrementer + 1)] = newIndex;
            carry = newIndex === 0;

            if (carry) {
              incrementer++;
            }
          }

          triedAllPossiblePermutations = incrementer === indexCounters.length;
        }
      }
    }]);

    return KeyHistoryMatcher;
  }();

  /**
   * Resolves the correct actions to trigger for a list of hotkeys components and a
   * history of key events
   * @class
   */

  var ActionResolver =
  /*#__PURE__*/
  function () {
    /**
     * Creates a new instance of ActionResolver
     * @param {ComponentOptionsList} componentList List of components
     * @returns {ActionResolver}
     */
    function ActionResolver(componentList) {
      _classCallCheck(this, ActionResolver);

      /**
       * List of mappings from key sequences to handlers that is constructed on-the-fly
       * as key events propagate up the render tree
       * @type {KeyHistoryMatcher[]}
       */
      this._keyMapMatchers = [];
      /**
       * Array of counters - one for each component - to keep track of how many handlers
       * for that component still need actions assigned to them
       * @type {Array.<Number,Object>}
       */

      this._unmatchedHandlerStatus = [];
      /**
       * A dictionary mapping action names to the position in the list of the components
       * that define handlers for them
       * @type {Object.<ActionName, Number[]>}
       */

      this._handlersDictionary = {};
      /**
       * A dictionary of sequences already encountered in the process of building the
       * list of keyMaps on the fly, as key events propagate up the component tree
       * @type {Object.<MouseTrapKeySequence, Number[]>}
       */

      this._keySequencesDictionary = {};
      var iterator = componentList.getNewIterator();

      while (iterator.next()) {
        var _iterator$getComponen = iterator.getComponent(),
            handlers = _iterator$getComponen.handlers;

        this._unmatchedHandlerStatus.push([Object.keys(handlers).length, {}]);

        this._keyMapMatchers.push(new KeyHistoryMatcher());
      }

      this._componentList = componentList;
      this._componentListIterator = componentList.getNewIterator();
    }
    /**
     * The KeyHistoryMatcher for the component in a particular position
     * @param {number} componentPosition Position of component to find the
     *        KeyHistoryMatcher for
     * @returns {KeyHistoryMatcher} Key combination matcher that corresponds
     *        to the component
     */


    _createClass(ActionResolver, [{
      key: "getKeyHistoryMatcher",
      value: function getKeyHistoryMatcher(componentPosition) {
        if (this._componentHasUnmatchedHandlers(componentPosition)) {
          /**
           * We build the mapping between actions and their closest handlers the
           * first time the key map for the component at <tt>position</tt> is accessed.
           *
           * We must search higher than the current component for actions, as they are
           * often defined in parent components of those that ultimately define their
           * handlers.
           */
          while (this._componentListIterator.next()) {
            this._addHandlersFromComponent();

            this._addActionsFromComponent();
          }
        }

        return this._getKeyHistoryMatcher(componentPosition);
      }
      /**
       * Whether a component has one or more actions bound to an event type
       * @param {number} componentPosition Position of the component
       * @param {KeyEventType} keyEventType
       * @returns {boolean} true if the component has an action bound to the event type
       */

    }, {
      key: "componentHasActionsBoundToEventType",
      value: function componentHasActionsBoundToEventType(componentPosition, keyEventType) {
        return this.getKeyHistoryMatcher(componentPosition).hasMatchesForEventType(keyEventType);
      }
      /**
       * Finds matcher for sequence and current key event for a component at a position
       * @param {number} componentPosition Position of the component
       * @param {KeyHistory} keyHistory History of key combinations to match
       *        against actions defined in component
       * @param {ReactKeyName} keyName Name of the key the current event relates to
       * @param {KeyEventType} keyEventType Type of key event
       * @returns {Object|null}
       */

    }, {
      key: "findMatchingKeySequenceInComponent",
      value: function findMatchingKeySequenceInComponent(componentPosition, keyHistory, keyName, keyEventType) {
        if (!this.componentHasActionsBoundToEventType(componentPosition, keyEventType)) {
          return null;
        }

        return this.getKeyHistoryMatcher(componentPosition).findMatch(keyHistory, keyName, keyEventType);
      }
      /********************************************************************************
       * Private methods
       *********************************************************************************/

    }, {
      key: "_getKeyHistoryMatcher",
      value: function _getKeyHistoryMatcher(index) {
        return this._keyMapMatchers[index];
      }
    }, {
      key: "_addActionsFromComponent",
      value: function _addActionsFromComponent() {
        var _this = this;

        var _this$_componentListI = this._componentListIterator.getComponent(),
            actions = _this$_componentListI.actions;
        /**
         * Iterate over the actions of a component (starting with the current component
         * and working through its ancestors), matching them to the current component's
         * handlers
         */


        Object.keys(actions).forEach(function (actionName) {
          var handlerComponentIndexArray = _this._getHandlers(actionName);

          if (handlerComponentIndexArray) {
            /**
             * Get action handler closest to the event target
             */
            var handlerComponentIndex = handlerComponentIndexArray[0];

            var handler = _this._componentList.getAtPosition(handlerComponentIndex).handlers[actionName];
            /**
             * Get key map that corresponds with the component that defines the handler
             * closest to the event target
             */


            var keyMapMatcher = _this._getKeyHistoryMatcher(handlerComponentIndex);
            /**
             * At least one child HotKeys component (or the component itself) has
             * defined a handler for the action, so now we need to associate them
             */


            var actionOptionsList = actions[actionName];
            actionOptionsList.forEach(function (actionOptions) {
              var keySequence = [actionOptions.prefix, actionOptions.id].join(' ');

              if (_this._isClosestHandlerFound(keySequence, actionOptions)) {
                /**
                 * Return if there is already a component with handlers for the current
                 * key sequence closer to the event target
                 */
                return;
              }

              keyMapMatcher.addMatch(actionOptions, handler);

              _this._addKeySequence(keySequence, [handlerComponentIndex, actionOptions.keyEventType]);
            });
            handlerComponentIndexArray.forEach(function (handlerComponentIndex) {
              var handlerComponentStatus = _this._getUnmatchedHandlerStatus(handlerComponentIndex);

              if (!handlerComponentStatus[1][actionName]) {
                handlerComponentStatus[1][actionName] = true;
                /**
                 * Decrement the number of remaining unmatched handlers for the
                 * component currently handling the propagating key event, so we know
                 * when all handlers have been matched to sequences and we can move on
                 * to matching them against the current key event
                 */

                handlerComponentStatus[0]--;
              }
            });
          }
        });
      }
    }, {
      key: "_getHandlers",
      value: function _getHandlers(actionName) {
        return this._handlersDictionary[actionName];
      }
    }, {
      key: "_addHandlersFromComponent",
      value: function _addHandlersFromComponent() {
        var _this2 = this;

        var _this$_componentListI2 = this._componentListIterator.getComponent(),
            handlers = _this$_componentListI2.handlers;
        /**
         * Add current component's handlers to the handlersDictionary so we know
         * which component has defined them
         */


        Object.keys(handlers).forEach(function (actionName) {
          _this2._addHandler(actionName);
        });
      }
    }, {
      key: "_addHandler",
      value: function _addHandler(actionName) {
        if (!this._handlersDictionary[actionName]) {
          this._handlersDictionary[actionName] = [];
        }

        this._handlersDictionary[actionName].push(this._componentListIterator.getPosition());
      }
    }, {
      key: "_addKeySequence",
      value: function _addKeySequence(keySequence, value) {
        /**
         * Record that we have already found a handler for the current action so
         * that we do not override handlers for an action closest to the event target
         * with handlers further up the tree
         */
        if (!this._keySequencesDictionary[keySequence]) {
          this._keySequencesDictionary[keySequence] = [];
        }

        this._keySequencesDictionary[keySequence].push(value);
      }
    }, {
      key: "_componentHasUnmatchedHandlers",
      value: function _componentHasUnmatchedHandlers(componentIndex) {
        return this._getUnmatchedHandlerStatus(componentIndex)[0] > 0;
      }
    }, {
      key: "_getUnmatchedHandlerStatus",
      value: function _getUnmatchedHandlerStatus(index) {
        return this._unmatchedHandlerStatus[index];
      }
    }, {
      key: "_isClosestHandlerFound",
      value: function _isClosestHandlerFound(keySequence, keyMatcher) {
        return this._keySequencesDictionary[keySequence] && this._keySequencesDictionary[keySequence].some(function (dictEntry) {
          return dictEntry[1] === keyMatcher.keyEventType;
        });
      }
    }]);

    return ActionResolver;
  }();

  /**
   * Copies a list of attributes and their values from a source object to a target object.
   * The attributes are only copied if they exist on the source object.
   * @param {Object} source Object to copy the attributes from
   * @param {Object} target Object to copy the attributes to
   * @param {String[]} attributes List of attributes to copy
   * @returns {Object} The target object, now with the copied attributes
   */

  function copyAttributes(source, target, attributes) {
    attributes.forEach(function (attributeName) {
      if (hasKey(source, attributeName)) {
        target[attributeName] = source[attributeName];
      }
    });
    return target;
  }

  /**
   * Returns the name of the event at a specified event record index
   * @param {KeyEventType} keyEventType
   * @returns {KeyEventName} Name of the key event
   */
  function describeKeyEventType(keyEventType) {
    switch (parseInt(keyEventType, 10)) {
      case 0:
        return 'keydown';

      case 1:
        return 'keypress';

      default:
        return 'keyup';
    }
  }

  /**
   * Whether the specified key name is for a key that has a native keypress event
   * @param {NormalizedKeyName} keyName Name of the key
   * @returns {boolean} Whether the key has a native keypress event
   */

  function hasKeyPressEvent(keyName) {
    return !isNonPrintableKeyName(keyName);
  }

  function stateFromEvent(event) {
    return event.simulated ? KeyEventState.simulated : KeyEventState.seen;
  }

  var SEQUENCE_ATTRIBUTES = ['sequence', 'action'];
  var KEYMAP_ATTRIBUTES = ['name', 'description', 'group'];
  /**
   * Defines common behaviour for key event strategies
   * @abstract
   * @class
   */

  var AbstractKeyEventStrategy =
  /*#__PURE__*/
  function () {
    /********************************************************************************
     * Init & Reset
     ********************************************************************************/

    /**
     * Creates a new instance of an event strategy (this class is an abstract one and
     * not intended to be instantiated directly).
     * @param {Object} options Options for how event strategy should behave
     * @param {Logger} options.logger The Logger to use to report event strategy actions
     * @param {KeyEventManager} keyEventManager KeyEventManager used for passing
     *        messages between key event strategies
     */
    function AbstractKeyEventStrategy() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var keyEventManager = arguments.length > 1 ? arguments[1] : undefined;

      _classCallCheck(this, AbstractKeyEventStrategy);

      this.logger = options.logger || new Logger('warn');
      /**
       * @typedef {number} ComponentId Unique index associated with every HotKeys component
       * as it becomes active.
       *
       * For focus-only components, this happens when the component is focused. The HotKeys
       * component closest to the DOM element in focus gets the smallest number (0) and
       * those further up the render tree get larger (incrementing) numbers. When a different
       * element is focused (triggering the creation of a new focus tree) all component indexes
       * are reset (de-allocated) and re-assigned to the new tree of HotKeys components that
       * are now in focus.
       *
       * For global components, component indexes are assigned when a HotKeys component is
       * mounted, and de-allocated when it unmounts. The component index counter is never reset
       * back to 0 and just keeps incrementing as new components are mounted.
       */

      /**
       * Counter to maintain what the next component index should be
       * @type {ComponentId}
       */

      this.componentId = -1;
      /**
       * Reference to key event manager, so that information may pass between the
       * global strategy and the focus-only strategy
       * @type {KeyEventManager}
       */

      this.keyEventManager = keyEventManager;
      this._componentTree = new ComponentTree();
      this.rootComponentId = null;

      this._reset();

      this.resetKeyHistory();
    }
    /**
     * Resets all strategy state to the values it had when it was first created
     * @protected
     */


    _createClass(AbstractKeyEventStrategy, [{
      key: "_reset",
      value: function _reset() {
        this.componentList = new ComponentOptionsList();

        this._initHandlerResolutionState();
      }
    }, {
      key: "_newKeyHistory",
      value: function _newKeyHistory() {
        return new KeyHistory({
          maxLength: this.componentList.getLongestSequence()
        });
      }
    }, {
      key: "getKeyHistory",
      value: function getKeyHistory() {
        if (this._keyHistory) {
          return this._keyHistory;
        } else {
          this._keyHistory = this._newKeyHistory();
        }

        return this._keyHistory;
      }
      /**
       * Resets the state of the values used to resolve which handler function should be
       * called when key events match a registered key map
       * @protected
       */

    }, {
      key: "_initHandlerResolutionState",
      value: function _initHandlerResolutionState() {
        this._actionResolver = null;
      }
      /**
       * Reset the state values that record the current and recent state of key events
       * @param {Object} options An options hash
       * @param {boolean} options.force Whether to force a hard reset of the key
       *        combination history.
       */

    }, {
      key: "resetKeyHistory",
      value: function resetKeyHistory() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        this.keypressEventsToSimulate = [];
        this.keyupEventsToSimulate = [];

        if (this.getKeyHistory().any() && !options.force) {
          this._keyHistory = new KeyHistory({
            maxLength: this.componentList.getLongestSequence()
          }, new KeyCombination(this.getCurrentCombination().keysStillPressedDict()));
        } else {
          this._keyHistory = this._newKeyHistory();
        }
      }
      /********************************************************************************
       * Generating key maps
       ********************************************************************************/

      /**
       * Returns a mapping of all of the application's actions and the key sequences
       * needed to trigger them.
       *
       * @returns {ApplicationKeyMap} The application's key map
       */

    }, {
      key: "getApplicationKeyMap",
      value: function getApplicationKeyMap() {
        if (this.rootComponentId === null) {
          return {};
        }

        return this._buildApplicationKeyMap([this.rootComponentId], {});
      }
    }, {
      key: "_buildApplicationKeyMap",
      value: function _buildApplicationKeyMap(componentIds, keyMapSummary) {
        var _this = this;

        componentIds.forEach(function (componentId) {
          var _this$_componentTree$ = _this._componentTree.get(componentId),
              childIds = _this$_componentTree$.childIds,
              keyMap = _this$_componentTree$.keyMap;

          if (keyMap) {
            Object.keys(keyMap).forEach(function (actionName) {
              var keyMapConfig = keyMap[actionName];
              keyMapSummary[actionName] = {};

              if (isObject(keyMapConfig)) {
                if (hasKey(keyMapConfig, 'sequences')) {
                  /**
                   * Support syntax:
                   *  {
                   *    sequences: [ {sequence: 'a+b', action: 'keyup' }],
                   *    name: 'My keymap',
                   *    description: 'Key to press for something special',
                   *    group: 'Vanity'
                   *  }
                   */
                  copyAttributes(keyMapConfig, keyMapSummary[actionName], KEYMAP_ATTRIBUTES);
                  keyMapSummary[actionName].sequences = _this._createSequenceFromConfig(keyMapConfig.sequences);
                } else {
                  /**
                   * Support syntax:
                   * {
                   *   sequence: 'a+b', action: 'keyup',
                   *   name: 'My keymap',
                   *   description: 'Key to press for something special',
                   *   group: 'Vanity'
                   * }
                   */
                  copyAttributes(keyMapConfig, keyMapSummary[actionName], KEYMAP_ATTRIBUTES);
                  keyMapSummary[actionName].sequences = [copyAttributes(keyMapConfig, {}, SEQUENCE_ATTRIBUTES)];
                }
              } else {
                keyMapSummary[actionName].sequences = _this._createSequenceFromConfig(keyMapConfig);
              }
            });
          }

          _this._buildApplicationKeyMap(childIds, keyMapSummary);
        });
        return keyMapSummary;
      }
    }, {
      key: "_createSequenceFromConfig",
      value: function _createSequenceFromConfig(keyMapConfig) {
        return arrayFrom(keyMapConfig).map(function (sequenceOrKeyMapOptions) {
          if (isObject(sequenceOrKeyMapOptions)) {
            /**
             * Support syntax:
             * [
             *   { sequence: 'a+b', action: 'keyup' },
             *   { sequence: 'c' }
             * ]
             */
            return copyAttributes(sequenceOrKeyMapOptions, {}, SEQUENCE_ATTRIBUTES);
          } else {
            /**
             * Support syntax:
             * 'a+b'
             */
            return {
              sequence: sequenceOrKeyMapOptions
            };
          }
        });
      }
      /********************************************************************************
       * Registering key maps
       ********************************************************************************/

      /**
       * Registers a new mounted component's key map so that it can be included in the
       * application's key map
       * @param {KeyMap} keyMap - Map of actions to key expressions
       * @returns {ComponentId} Unique component ID to assign to the focused HotKeys
       *          component and passed back when handling a key event
       */

    }, {
      key: "registerKeyMap",
      value: function registerKeyMap(keyMap) {
        this.componentId += 1;

        this._componentTree.add(this.componentId, keyMap);
        return this.componentId;
      }
      /**
       * Re-registers (updates) a mounted component's key map
       * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
       * @param {KeyMap} keyMap - Map of actions to key expressions
       */

    }, {
      key: "reregisterKeyMap",
      value: function reregisterKeyMap(componentId, keyMap) {
        this._componentTree.update(componentId, keyMap);
      }
      /**
       * Registers that a component has now mounted, and declares its parent hot keys
       * component id so that actions may be properly resolved
       * @param {ComponentId} componentId - Id of the component that has mounted
       * @param {ComponentId} parentId - Id of the parent hot keys component
       */

    }, {
      key: "registerComponentMount",
      value: function registerComponentMount(componentId, parentId) {
        if (!isUndefined(parentId)) {
          this._componentTree.setParent(componentId, parentId);
        } else {
          this.rootComponentId = componentId;
        }
      }
      /**
       * De-registers (removes) a mounted component's key map from the registry
       * @param {ComponentId} componentId - Id of the component that the keyMap
       *        belongs to
       */

    }, {
      key: "deregisterKeyMap",
      value: function deregisterKeyMap(componentId) {
        this._componentTree.remove(componentId);

        if (componentId === this.rootComponentId) {
          this.rootComponentId = null;
        }
      }
      /********************************************************************************
       * Registering key maps and handlers
       ********************************************************************************/

      /**
       * Registers the hotkeys defined by a HotKeys component
       * @param {ComponentId} componentId - Index of the component
       * @param {KeyMap} actionNameToKeyMap - Definition of actions and key maps defined
       *        in the HotKeys component
       * @param {HandlersMap} actionNameToHandlersMap - Map of ActionNames to handlers
       *        defined in the HotKeys component
       * @param {Object} options - Hash of options that configure how the key map is built.
       * @protected
       */

    }, {
      key: "_addComponent",
      value: function _addComponent(componentId) {
        var actionNameToKeyMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var actionNameToHandlersMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var options = arguments.length > 3 ? arguments[3] : undefined;
        this.componentList.add(componentId, actionNameToKeyMap, actionNameToHandlersMap, options);
        this.getKeyHistory().setMaxLength(this.componentList.getLongestSequence());
      }
      /********************************************************************************
       * Recording key events
       ********************************************************************************/

      /**
       * Whether there are any keys in the current combination still being pressed
       * @returns {boolean} True if all keys in the current combination are released
       * @protected
       */

    }, {
      key: "_allKeysAreReleased",
      value: function _allKeysAreReleased() {
        return this.getCurrentCombination().hasEnded();
      }
    }, {
      key: "getCurrentCombination",
      value: function getCurrentCombination() {
        return this.getKeyHistory().getCurrentCombination();
      }
    }, {
      key: "_shouldSimulate",
      value: function _shouldSimulate(eventType, keyName) {
        var keyHasNativeKeyPress = hasKeyPressEvent(keyName);
        var currentCombination = this.getCurrentCombination();

        if (eventType === KeyEventType.keypress) {
          return !keyHasNativeKeyPress || keyHasNativeKeyPress && currentCombination.isKeyStillPressed('Meta');
        } else if (eventType === KeyEventType.keyup) {
          return keyupIsHiddenByCmd(keyName) && currentCombination.isKeyReleased('Meta');
        }

        return false;
      }
    }, {
      key: "_cloneAndMergeEvent",
      value: function _cloneAndMergeEvent(event, extra) {
        var eventAttributes = Object.keys(ModifierFlagsDictionary).reduce(function (memo, eventAttribute) {
          memo[eventAttribute] = event[eventAttribute];
          return memo;
        }, {});
        return _objectSpread({}, eventAttributes, extra);
      }
      /********************************************************************************
       * Matching and calling handlers
       ********************************************************************************/

    }, {
      key: "_callClosestMatchingHandler",
      value: function _callClosestMatchingHandler(event, keyName, keyEventType, componentPosition, componentSearchIndex) {
        if (!this._actionResolver) {
          this._actionResolver = new ActionResolver(this.componentList);
        }

        while (componentSearchIndex <= componentPosition) {
          var keyHistoryMatcher = this._actionResolver.getKeyHistoryMatcher(componentSearchIndex);

          var sequenceMatch = this._actionResolver.findMatchingKeySequenceInComponent(componentSearchIndex, this.getKeyHistory(), keyName, keyEventType);

          var currentCombination = this.getCurrentCombination();

          if (sequenceMatch) {
            var eventSchema = sequenceMatch.events[keyEventType];

            if (Configuration.option('allowCombinationSubmatches')) {
              var subMatchDescription = KeyCombinationSerializer.serialize(sequenceMatch.keyDictionary);
            }

            eventSchema.handler(event);

            this._stopEventPropagationAfterHandlingIfEnabled(event, componentSearchIndex);

            return true;
          } else {
            if (this._actionResolver.componentHasActionsBoundToEventType(componentSearchIndex, keyEventType)) ;
          }

          componentSearchIndex++;
        }
      }
    }, {
      key: "_stopEventPropagationAfterHandlingIfEnabled",
      value: function _stopEventPropagationAfterHandlingIfEnabled(event, componentId) {
        if (Configuration.option('stopEventPropagationAfterHandling')) {
          this._stopEventPropagation(event, componentId);

          return true;
        }

        return false;
      }
    }, {
      key: "_stopEventPropagation",
      value: function _stopEventPropagation(event, componentId) {
        throw new Error('_stopEventPropagation must be overridden by a subclass');
      }
      /**
       * Synchronises the key combination history to match the modifier key flag attributes
       * on new key events
       * @param {KeyboardEvent} event - Event to check the modifier flags for
       * @param {string} key - Name of key that events relates to
       * @param {KeyEventType} keyEventType - The record index of the current
       *        key event type
       * @protected
       */

    }, {
      key: "_checkForModifierFlagDiscrepancies",
      value: function _checkForModifierFlagDiscrepancies(event, key, keyEventType) {
        var _this2 = this;

        /**
         * If a new key event is received with modifier key flags that contradict the
         * key combination history we are maintaining, we can surmise that some keyup events
         * for those modifier keys have been lost (possibly because the window lost focus).
         * We update the key combination to match the modifier flags
         */
        Object.keys(ModifierFlagsDictionary).forEach(function (modifierKey) {
          /**
           * When a modifier key is being released (keyup), it sets its own modifier flag
           * to false. (e.g. On the keyup event for Command, the metaKey attribute is false).
           * If this the case, we want to handle it using the main algorithm and skip the
           * reconciliation algorithm.
           */
          if (key === modifierKey && keyEventType === KeyEventType.keyup) {
            return;
          }

          var currentCombination = _this2.getCurrentCombination();

          var modifierStillPressed = currentCombination.isKeyStillPressed(modifierKey);
          ModifierFlagsDictionary[modifierKey].forEach(function (attributeName) {
            if (event[attributeName] === false && modifierStillPressed) {
              currentCombination.setKeyState(modifierKey, KeyEventType.keyup, stateFromEvent(event));
            }
          });
        });
      }
      /**
       * Returns a prefix for all log entries related to the current event strategy
       * @protected
       * @abstract
       */

    }, {
      key: "_logPrefix",
      value: function _logPrefix() {}
    }]);

    return AbstractKeyEventStrategy;
  }();

  /**
   * Manages the incrementing of a globally unique event id
   * @class
   */

  var KeyEventCounter =
  /*#__PURE__*/
  function () {
    function KeyEventCounter() {
      _classCallCheck(this, KeyEventCounter);
    }

    _createClass(KeyEventCounter, null, [{
      key: "getId",

      /**
       * Globally unique event id
       * @typedef {number} EventId
       */

      /**
       * Get the current event id
       * @returns {EventId} The current event ID
       */
      value: function getId() {
        if (isUndefined(this._id)) {
          this._id = 0;
        }

        return this._id;
      }
      /**
       * Increment the current event id
       */

    }, {
      key: "incrementId",
      value: function incrementId() {
        this._id = this.getId() + 1;
      }
    }]);

    return KeyEventCounter;
  }();

  /**
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the same directory of this source tree.
   */

  /**
   * `charCode` represents the actual "character code" and is safe to use with
   * `String.fromCharCode`. As such, only keys that correspond to printable
   * characters produce a valid `charCode`, the only exception to this is Enter.
   * The Tab-key is considered non-printable and does not have a `charCode`,
   * presumably because it does not produce a tab-character in browsers.
   *
   * @param {object} nativeEvent Native browser event.
   * @returns {number} Normalized `charCode` property.
   */
  function getEventCharCode(nativeEvent) {
    var charCode;
    var keyCode = nativeEvent.keyCode;

    if ('charCode' in nativeEvent) {
      charCode = nativeEvent.charCode; // FF does not set `charCode` for the Enter-key, check against `keyCode`.

      if (charCode === 0 && keyCode === 13) {
        charCode = 13;
      }
    } else {
      // IE8 does not implement `charCode`, but `keyCode` has the correct value.
      charCode = keyCode;
    } // IE and Edge (on Windows) and Chrome / Safari (on Windows and Linux)
    // report Enter as charCode 10 when ctrl is pressed.


    if (charCode === 10) {
      charCode = 13;
    } // Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
    // Must not discard the (non-)printable Enter-key.


    if (charCode >= 32 || charCode === 13) {
      return charCode;
    }

    return 0;
  }

  /**
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the same directory of this source tree.
   *
   * @flow
   */
  /**
   * Normalization of deprecated HTML5 `key` values
   * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
   */

  var normalizeKey = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified'
  };
  /**
   * @param {object} nativeEvent Native browser event.
   * @returns {string} Normalized `key` property.
   */

  function reactsGetEventKey(nativeEvent) {
    if (nativeEvent.key) {
      // Normalize inconsistent values reported by browsers due to
      // implementations of a working draft specification.
      // FireFox implements `key` but returns `MozPrintableKey` for all
      // printable characters (normalized to `Unidentified`), ignore it.
      var key = normalizeKey[nativeEvent.key] || nativeEvent.key;

      if (key !== 'Unidentified') {
        return key;
      }
    } // Browser does not implement `key`, polyfill as much of it as we can.


    if (nativeEvent.type === 'keypress') {
      var charCode = getEventCharCode(nativeEvent); // The enter-key is technically both printable and non-printable and can
      // thus be captured by `keypress`, no other non-printable key should.

      return charCode === 13 ? 'Enter' : String.fromCharCode(charCode);
    }

    if (nativeEvent.type === 'keydown' || nativeEvent.type === 'keyup') {
      // While user keyboard layout determines the actual meaning of each
      // `keyCode` value, almost all function keys have a universal value.
      return translateToKey[nativeEvent.keyCode] || 'Unidentified';
    }

    return '';
  }

  /**
   * Lowercased string representing a particular keyboard key
   * @typedef {string} NormalizedKeyName
   */
  /**
   * Returns key name from native or React keyboard event
   * @param {KeyboardEvent} event - Event containing the key name
   * @returns {NormalizedKeyName} Normalized name of the key
   */

  function getKeyName(event) {
    var keyName = function () {
      var customKeyCodes = Configuration.option('customKeyCodes');
      var keyCode = event.keyCode || event.charCode;

      if (hasKey(customKeyCodes, keyCode)) {
        return customKeyCodes[keyCode];
      }

      if (event.nativeEvent) {
        return event.key;
      } else {
        return reactsGetEventKey(event);
      }
    }();

    if (keyName === '+') {
      return 'plus';
    } else {
      return keyName;
    }
  }

  /**
   * Returns whether the current key name matches the command key
   * @param {ReactKeyName} keyName Key name to compare to the command key's
   * @returns {boolean} Whether the key name matches the command key's
   */
  function isCmdKey(keyName) {
    return keyName === 'Meta';
  }

  /**
   * @typedef {number} EventResponseType
   */

  /**
   * Enum for different ways to respond to a key event
   * @readonly
   * @enum {EventResponseType}
   */
  var EventResponse = {
    unseen: 0,
    ignored: 1,
    seen: 2,
    recorded: 3,
    handled: 4
  };

  /**
   * Handles the propagation of keyboard events up through the React component tree,
   * starting from the hot keys component closest to the event target
   * @class
   */

  var EventPropagator =
  /*#__PURE__*/
  function () {
    /**
     * Create a new instance of EventPropagator
     * @param {ComponentOptionsList} componentList List of options of the components
     *        the event is propagating through
     * @param {Logger} logger The logger instance to use
     * @param {function} logPrefix Function that returns the appropriate log prefix for
     *        each log entry
     * @returns {EventPropagator}
     */
    function EventPropagator(componentList, _ref) {
      var logger = _ref.logger,
          logPrefix = _ref.logPrefix;

      _classCallCheck(this, EventPropagator);

      this._componentList = componentList;
      this._previousPropagation = null;
      this.logger = logger;
      this._logPrefix = logPrefix;

      this._reset();
    }

    _createClass(EventPropagator, [{
      key: "_reset",
      value: function _reset() {
        /**
         * Position of the component that the event last propagated through
         * @type {number}
         */
        this._previousPosition = -1;
        /**
         * Position of the current component the event is propagating through
         * @type {number}
         */

        this._position = -1;
        /**
         * Flag to record whether the keyboard event matches an action whose handler
         * has already been called
         * @type {boolean}
         */

        this._actionHandled = false;
        /**
         * Flag to record whether the keyboard event should be ignored
         * @type {boolean}
         */

        this._ignoreEvent = false;
        /**
         * Flag to record whether the keyboard event current being handled should be
         * observed, even if matches the ignoreEventCondition
         * @type {boolean}
         */

        this._observeIgnoredEvents = false;
        /**
         * Flag to record whether the event is being stopped from further propagation
         * @type {boolean}
         */

        this._stopping = false;
        /**
         * The id of the component the event is current propagating through
         * @type {ComponentId}
         */

        this._componentId = null;
        /**
         * The name of the key the propagating event relates to
         * @type {ReactKeyName}
         */

        this._key = null;
        /**
         * The type of keyboard event that is propagating
         * @type {KeyEventType}
         */

        this._type = null;
      }
      /********************************************************************************
       * New event propagation
       *********************************************************************************/

      /**
       * Whether the current propagation step is the first one
       * @returns {boolean} true if this is the first propagation step
       */

    }, {
      key: "isFirstPropagationStep",
      value: function isFirstPropagationStep() {
        var previousPosition = this.getPreviousPosition();
        return previousPosition === -1 || previousPosition >= this._position;
      }
      /**
       * Whether the propagation is for a particular key
       * @param {ReactKeyName} keyName The name of the key to query
       * @returns {boolean} true if the event propagation is for the key
       */

    }, {
      key: "isForKey",
      value: function isForKey(keyName) {
        return this._key === keyName;
      }
      /**
       * The type of keyboard event that is propagating
       * @param {KeyEventType} keyEventType The type of keyboard event to query
       * @returns {boolean} true if the keyboard event propagating is that type
       */

    }, {
      key: "isForEventType",
      value: function isForEventType(keyEventType) {
        return this._type === keyEventType;
      }
      /********************************************************************************
       * Propagation steps
       *********************************************************************************/

      /**
       * Begin a new propagation step, called as a before callback. i.e. the first thing
       * after an event has propagated to a new hot keys component
       * @param {ComponentId} componentId The id of the component that has just had the
       *        event propagate up to it
       * @param {KeyboardEvent} event The actual KeyboardEvent that is propagating
       * @param {ReactKeyName} key The name of the key the event relates to
       * @param {KeyEventType} type The type of keyboard event
       * @returns {boolean} true if the event should be observed, otherwise false if it
       *        should be ignored.
       */

    }, {
      key: "startNewPropagationStep",
      value: function startNewPropagationStep(componentId, event, key, type) {
        this._position = this._componentList.getIndexById(componentId);
        this._componentId = componentId;

        if (this.isFirstPropagationStep()) {
          KeyEventCounter.incrementId();
          this._key = event.key;
          this._type = type;
        }

        if (event.repeat && Configuration.option('ignoreRepeatedEventsWhenKeyHeldDown')) {
          this.ignoreEvent(event);
          return false;
        }

        return true;
      }
      /**
       * Ends handling of a propagation step and performs cleanup. Called as a after callback.
       * @returns {void}
       */

    }, {
      key: "finishPropagationStep",
      value: function finishPropagationStep() {
        if (this.isStopped() || this._componentList.isRoot(this._componentId)) {
          this._previousPropagation = this._clone();

          this._reset();
        } else {
          this._previousPosition = this._position;
        }
      }
      /********************************************************************************
       * Previous propagation
       *********************************************************************************/

      /**
       * The previous event propagation, either for an earlier event type of the same key
       * or a different key's event propagation
       * @returns {EventPropagator} The propagator for the previous event propagation
       */

    }, {
      key: "getPreviousPropagation",
      value: function getPreviousPropagation() {
        if (!this._previousPropagation) {
          this._previousPropagation = this._clone({
            copyState: false
          });
        }

        return this._previousPropagation;
      }
      /**
       * The position of the component that last had the current propagating event
       * propagate through it
       * @returns {number}
       */

    }, {
      key: "getPreviousPosition",
      value: function getPreviousPosition() {
        return this._previousPosition;
      }
      /********************************************************************************
       * Ignoring events
       *********************************************************************************/

      /**
       * Set the observeIgnoredEvents flag, to observe (not ignore) keyboard events that
       * match the ignored events filter
       * @returns {void}
       */

    }, {
      key: "observeIgnoredEvents",
      value: function observeIgnoredEvents() {
        this._observeIgnoredEvents = true;
      }
      /**
       * Record that an event is being ignored for the rest of its propagation and, if
       * enabled, stop it from further propagation entirely.
       * @param {KeyboardEvent} event Event to ignore
       * @returns {boolean} true if the event was stopped from further propagation,
       *          otherwise false.
       */

    }, {
      key: "ignoreEvent",
      value: function ignoreEvent(event) {
        this.setIgnoreEvent(true);

        if (this.isIgnoringEvent() && Configuration.option('stopEventPropagationAfterIgnoring')) {
          this.stop(event);
          this.finishPropagationStep();
          return true;
        }

        return false;
      }
      /**
       * Set the ignore event flag, to ignore the current event for the rest of its
       * propagation
       * @param {boolean} ignore true to ignore the event, or false to not ignore it
       * @returns {void}
       */

    }, {
      key: "setIgnoreEvent",
      value: function setIgnoreEvent(ignore) {
        this._ignoreEvent = ignore;
      }
      /**
       * Whether to ignore the currently propagating event or not
       * @returns {boolean} true if the event is being ignored for the current propagation
       */

    }, {
      key: "isIgnoringEvent",
      value: function isIgnoringEvent() {
        return !this._observeIgnoredEvents && this._ignoreEvent;
      }
      /********************************************************************************
       * Stopping propagation
       *********************************************************************************/

      /**
       * Whether the event has been stopped from further propagation
       * @returns {boolean} true if the event is being stopped
       */

    }, {
      key: "isStopped",
      value: function isStopped() {
        return this._stopping;
      }
      /**
       * Stop an event from further propagation
       * @param {KeyboardEvent} event Event to call stopPropagation() on
       * @returns {boolean} true if the event was stopped and false if it was already
       *          stopped
       */

    }, {
      key: "stop",
      value: function stop(event) {
        if (!this.isStopped()) {
          this._stopping = true; // noinspection JSUnresolvedVariable

          if (!event.simulated) {
            event.stopPropagation();
          }

          return true;
        }

        return false;
      }
      /**
       * Whether the keyboard event has yet propagated to the root hot keys component
       * @returns {boolean} true if it still has hotkeys components to propagate to
       *          before being complete.
       */

    }, {
      key: "isPendingPropagation",
      value: function isPendingPropagation() {
        var previousPosition = this.getPreviousPosition();
        return previousPosition !== -1 && previousPosition + 1 < this._position;
      }
      /**
       * If the action has already been handled
       * @returns {boolean} true if the action has already been handled
       */

    }, {
      key: "isHandled",
      value: function isHandled() {
        return this._actionHandled;
      }
      /**
       * Record that the current propagating event matched and action and its handler
       * has been called.
       * @returns {void}
       */

    }, {
      key: "setHandled",
      value: function setHandled() {
        this._actionHandled = true;
      }
      /********************************************************************************
       * Private methods
       ********************************************************************************/

    }, {
      key: "_clone",
      value: function _clone() {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref2$copyState = _ref2.copyState,
            copyState = _ref2$copyState === void 0 ? true : _ref2$copyState;

        var cloned = new EventPropagator(this._componentList, {
          logger: this.logger,
          logPrefix: this._logPrefix
        });

        if (copyState) {
          Object.assign(cloned, this);
        }

        return cloned;
      }
    }]);

    return EventPropagator;
  }();

  /**
   * Defines behaviour for dealing with key maps defined in focus-only HotKey components
   * @class
   */

  var FocusOnlyKeyEventStrategy =
  /*#__PURE__*/
  function (_AbstractKeyEventStra) {
    _inherits(FocusOnlyKeyEventStrategy, _AbstractKeyEventStra);

    /********************************************************************************
     * Init & Reset
     ********************************************************************************/
    function FocusOnlyKeyEventStrategy() {
      var _this;

      var configuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var keyEventManager = arguments.length > 1 ? arguments[1] : undefined;

      _classCallCheck(this, FocusOnlyKeyEventStrategy);

      /**
       * Set state that DOES get cleared on each new focus tree
       */
      _this = _possibleConstructorReturn(this, _getPrototypeOf(FocusOnlyKeyEventStrategy).call(this, configuration, keyEventManager));
      /**
       * State that doesn't get cleared on each new focus tree
       */

      /**
       * Unique identifier given to each focus tree - when the focus in the browser
       * changes, and a different tree of elements are focused, a new id is allocated
       * @typedef {number} FocusTreeId
       */

      /**
       * Counter to keep track of what focus tree ID should be allocated next
       * @type {FocusTreeId}
       */

      _this.focusTreeId = 0;
      return _this;
    }
    /**
     * Clears the internal state, wiping any history of key events and registered handlers
     * so they have no effect on the next tree of focused HotKeys components
     * @private
     */


    _createClass(FocusOnlyKeyEventStrategy, [{
      key: "_reset",
      value: function _reset() {
        _get(_getPrototypeOf(FocusOnlyKeyEventStrategy.prototype), "_reset", this).call(this);

        this.keypressEventsToSimulate = [];
        /**
         * Increase the unique ID associated with each unique focus tree
         * @type {number}
         */

        this.focusTreeId += 1;
        this.eventPropagator = new EventPropagator(this.componentList, {
          logger: this.logger,
          logPrefix: this._logPrefix.bind(this)
        });
      }
      /********************************************************************************
       * Registering key maps and handlers
       ********************************************************************************/

      /**
       * Registers the actions and handlers of a HotKeys component that has gained focus
       * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
       * @param {KeyMap} actionNameToKeyMap - Map of actions to key expressions
       * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handler functions
       * @param {Object} options Hash of options that configure how the actions
       *        and handlers are associated and called.
       * @returns {FocusTreeId|undefined} The current focus tree's ID or undefined if the
       *        the <tt>componentId</tt> has already been registered (shouldn't normally
       *        occur).
       */

    }, {
      key: "enableHotKeys",
      value: function enableHotKeys(componentId) {
        var actionNameToKeyMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var actionNameToHandlersMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var options = arguments.length > 3 ? arguments[3] : undefined;

        if (this.resetOnNextFocus) {
          /**
           * We know components have just lost focus or keymaps have already been built,
           * meaning we are either anticipating a new set of components to be focused or
           * we are receiving notice of a component being focused when we aren't expecting it.
           * In either case, the internal state needs to be reset.
           */
          this._reset();

          this.resetOnNextFocus = false;
        }

        if (this.componentList.containsId(componentId)) {
          /**
           * The <tt>componentId</tt> has already been registered - this occurs when the
           * same component has somehow managed to be focused twice, without being blurred
           * in between.
           *
           * @see https://github.com/greena13/react-hotkeys/issues/173
           */
          return undefined;
        }

        this._addComponent(componentId, actionNameToKeyMap, actionNameToHandlersMap, options);
        return this.focusTreeId;
      }
      /**
       * Handles when a HotKeys component that is in focus updates its props and changes
       * either the keyMap or handlers prop value
       * @param {FocusTreeId} focusTreeId - The ID of the focus tree the component is part of.
       *        Used to identify (and ignore) stale updates.
       * @param {ComponentId} componentId - The component index of the component to
       *        update
       * @param {KeyMap} actionNameToKeyMap - Map of key sequences to action names
       * @param {HandlersMap} actionNameToHandlersMap - Map of action names to handler
       *        functions
       * @param {Object} options Hash of options that configure how the actions
       *        and handlers are associated and called.
       */

    }, {
      key: "updateEnabledHotKeys",
      value: function updateEnabledHotKeys(focusTreeId, componentId) {
        var actionNameToKeyMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var actionNameToHandlersMap = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        var options = arguments.length > 4 ? arguments[4] : undefined;

        if (focusTreeId !== this.focusTreeId || !this.componentList.containsId(componentId)) {
          return;
        }

        this.componentList.update(componentId, actionNameToKeyMap, actionNameToHandlersMap, options);
        this.getKeyHistory().setMaxLength(this.componentList.getLongestSequence());
        /**
         * Reset handler resolution state
         */

        this._initHandlerResolutionState();
      }
      /**
       * Handles when a component loses focus by resetting the internal state, ready to
       * receive the next tree of focused HotKeys components
       * @param {FocusTreeId} focusTreeId - Id of focus tree component thinks it's
       *        apart of
       * @param {ComponentId} componentId - Index of component that is blurring
       * @returns {boolean} Whether the component still has event propagation yet to handle
       */

    }, {
      key: "disableHotKeys",
      value: function disableHotKeys(focusTreeId, componentId) {
        if (!this.resetOnNextFocus) {
          this.resetOnNextFocus = true;
        }

        var outstandingEventPropagation = this.eventPropagator.isPendingPropagation();
        return outstandingEventPropagation;
      }
      /********************************************************************************
       * Recording key events
       ********************************************************************************/

      /**
       * @typedef {KeyboardEvent} SyntheticKeyboardEvent
       * @property {function} persist
       */

      /**
       * Records a keydown keyboard event and matches it against the list of pre-registered
       * event handlers, calling the first matching handler with the highest priority if
       * one exists.
       *
       * This method is called many times as a keyboard event bubbles up through the React
       * render tree. The event is only registered the first time it is seen and results
       * of some calculations are cached. The event is matched against the handlers registered
       * at each component level, to ensure the proper handler declaration scoping.
       * @param {SyntheticKeyboardEvent} event - Event containing the key name and state
       * @param {FocusTreeId} focusTreeId - Id of focus tree component thinks it's apart of
       * @param {ComponentId} componentId - The id of the component that is currently handling
       *        the keyboard event as it bubbles towards the document root.
       * @param {Object} options - Hash of options that configure how the event is handled.
       * @returns Whether the event was discarded because it was part of an old focus tree
       */

    }, {
      key: "handleKeydown",
      value: function handleKeydown(event, focusTreeId, componentId) {
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        var key = getKeyName(event);

        if (focusTreeId !== this.focusTreeId) {
          this.eventPropagator.ignoreEvent(event);
          return true;
        }

        var started = this.eventPropagator.startNewPropagationStep(componentId, event, key, KeyEventType.keydown);

        if (!started) {
          return;
        }

        var responseAction = this._howToHandleKeyEvent(event, focusTreeId, componentId, key, options, KeyEventType.keydown);

        if (responseAction === EventResponse.handled) {
          var keyEventState = stateFromEvent(event);
          var currentCombination = this.getCurrentCombination();

          if (currentCombination.isKeyIncluded(key) || currentCombination.isEnding()) {
            this._startAndLogNewKeyCombination(key, focusTreeId, componentId, keyEventState);
          } else {
            this._addToAndLogCurrentKeyCombination(key, KeyEventType.keydown, focusTreeId, componentId, keyEventState);
          }

          this._callHandlerIfActionNotHandled(event, key, KeyEventType.keydown, componentId, focusTreeId);
        }

        this._simulateKeyPressForNonPrintableKeys(event, key, focusTreeId, componentId, options);

        this.eventPropagator.finishPropagationStep();
        return false;
      }
    }, {
      key: "_howToHandleKeyEvent",
      value: function _howToHandleKeyEvent(event, focusTreeId, componentId, key, options, keyEventType) {
        if (this.eventPropagator.isFirstPropagationStep()) {
          if (options.ignoreEventsCondition(event) && this.eventPropagator.ignoreEvent(event)) {
            return this._eventIsToBeIgnored(event, componentId, key, keyEventType);
          }

          this._checkForModifierFlagDiscrepancies(event, key, keyEventType);
        } else if (this.eventPropagator.isIgnoringEvent()) {
          return this._eventIsToBeIgnored(event, componentId, key, keyEventType);
        }

        return EventResponse.handled;
      }
    }, {
      key: "_eventIsToBeIgnored",
      value: function _eventIsToBeIgnored(event, componentId, key, keyEventType) {
        return EventResponse.ignored;
      }
      /**
       * Records a keypress keyboard event and matches it against the list of pre-registered
       * event handlers, calling the first matching handler with the highest priority if
       * one exists.
       *
       * This method is called many times as a keyboard event bubbles up through the React
       * render tree. The event is only registered the first time it is seen and results
       * of some calculations are cached. The event is matched against the handlers registered
       * at each component level, to ensure the proper handler declaration scoping.
       * @param {KeyboardEvent} event - Event containing the key name and state
       * @param {FocusTreeId} focusTreeId Id - of focus tree component thinks it's apart of
       * @param {ComponentId} componentId - The index of the component that is currently handling
       *        the keyboard event as it bubbles towards the document root.
       * @param {Object} options - Hash of options that configure how the event
       *        is handled.
       * @returns {boolean} Whether the HotKeys component should discard its current focus
       *        tree Id, because it belongs to an old focus tree.
       */

    }, {
      key: "handleKeyPress",
      value: function handleKeyPress(event, focusTreeId, componentId, options) {
        var key = getKeyName(event);
        var currentCombination = this.getCurrentCombination();

        if (currentCombination.isKeyPressSimulated(key)) {
          this.eventPropagator.ignoreEvent(event);
          return true;
        }

        var started = this.eventPropagator.startNewPropagationStep(componentId, event, key, KeyEventType.keypress);

        if (!started) {
          return;
        }

        var shouldDiscardFocusTreeId = focusTreeId !== this.focusTreeId;
        /**
         * We first decide if the keypress event should be handled (to ensure the correct
         * order of logging statements)
         */

        var responseAction = this._howToHandleKeyEvent(event, focusTreeId, componentId, key, options, KeyEventType.keypress);

        if (this.eventPropagator.isFirstPropagationStep(componentId) && currentCombination.isKeyIncluded(key)) {
          this._addToAndLogCurrentKeyCombination(key, KeyEventType.keypress, focusTreeId, componentId, stateFromEvent(event));
        }
        /**
         * We attempt to find a handler of the event, only if it has not already
         * been handled and should not be ignored
         */


        if (responseAction === EventResponse.handled) {
          this._callHandlerIfActionNotHandled(event, key, KeyEventType.keypress, componentId, focusTreeId);
        }

        this.eventPropagator.finishPropagationStep();
        return shouldDiscardFocusTreeId;
      }
      /**
       * Records a keyup keyboard event and matches it against the list of pre-registered
       * event handlers, calling the first matching handler with the highest priority if
       * one exists.
       *
       * This method is called many times as a keyboard event bubbles up through the React
       * render tree. The event is only registered the first time it is seen and results
       * of some calculations are cached. The event is matched against the handlers registered
       * at each component level, to ensure the proper handler declaration scoping.
       * @param {KeyboardEvent} event Event containing the key name and state
       * @param {FocusTreeId} focusTreeId Id of focus tree component thinks it's apart of
       * @param {ComponentId} componentId The index of the component that is currently handling
       *        the keyboard event as it bubbles towards the document root.
       * @param {Object} options Hash of options that configure how the event
       *        is handled.
       * @returns {boolean} Whether HotKeys component should discard its current focusTreeId
       *        because it's stale (part of an old focus tree)
       */

    }, {
      key: "handleKeyUp",
      value: function handleKeyUp(event, focusTreeId, componentId, options) {
        var key = getKeyName(event);
        var currentCombination = this.getCurrentCombination();

        if (currentCombination.isKeyUpSimulated(key)) {
          this.eventPropagator.ignoreEvent(event);
          return true;
        }

        var started = this.eventPropagator.startNewPropagationStep(componentId, event, key, KeyEventType.keyup);

        if (!started) {
          return;
        }

        var shouldDiscardFocusId = focusTreeId !== this.focusTreeId;
        /**
         * We first decide if the keyup event should be handled (to ensure the correct
         * order of logging statements)
         */

        var responseAction = this._howToHandleKeyEvent(event, focusTreeId, componentId, key, options, KeyEventType.keyup);
        /**
         * We then add the keyup to our current combination - regardless of whether
         * it's to be handled or not. We need to do this to ensure that if a handler
         * function changes focus to a context that ignored events, the keyup event
         * is not lost (leaving react hotkeys thinking the key is still pressed).
         */


        if (this.eventPropagator.isFirstPropagationStep(componentId) && currentCombination.isKeyIncluded(key)) {
          this._addToAndLogCurrentKeyCombination(key, KeyEventType.keyup, focusTreeId, componentId, stateFromEvent(event));
        }
        /**
         * We attempt to find a handler of the event, only if it has not already
         * been handled and should not be ignored
         */


        if (responseAction === EventResponse.handled) {
          this._callHandlerIfActionNotHandled(event, key, KeyEventType.keyup, componentId, focusTreeId);
        }
        /**
         * We simulate any hidden keyup events hidden by the command key, regardless
         * of whether the event should be ignored or not
         */


        this._simulateKeyUpEventsHiddenByCmd(event, key, focusTreeId, componentId, options);

        this.eventPropagator.finishPropagationStep();
        return shouldDiscardFocusId;
      }
      /**
       * Closes any hanging key combinations that have not received the key event indicated
       * by recordIndex.
       * @param {KeyName} keyName The name of the key whose state should be updated if it
       *        is currently set to keydown or keypress.
       * @param {KeyEventType} recordIndex Index of key event to move the key state
       *        up to.
       */

    }, {
      key: "closeHangingKeyCombination",
      value: function closeHangingKeyCombination(keyName, recordIndex) {
        var currentCombination = this.getCurrentCombination();

        if (currentCombination.isKeyIncluded(keyName) && !currentCombination.isEventTriggered(keyName, recordIndex)) {
          /**
           * If the key is in the current combination and recorded as still being pressed
           * down (as either keydown or keypress), then we update the state
           * to keypress or keyup (depending on the value of recordIndex).
           */
          currentCombination.setKeyState(keyName, recordIndex, KeyEventState.simulated);
        }
      }
    }, {
      key: "_simulateKeyPressForNonPrintableKeys",
      value: function _simulateKeyPressForNonPrintableKeys(event, key, focusTreeId, componentId, options) {
        this._handleEventSimulation('keypressEventsToSimulate', 'simulatePendingKeyPressEvents', this._shouldSimulate(KeyEventType.keypress, key), {
          event: event,
          key: key,
          focusTreeId: focusTreeId,
          componentId: componentId,
          options: options
        });
      }
    }, {
      key: "_simulateKeyUpEventsHiddenByCmd",
      value: function _simulateKeyUpEventsHiddenByCmd(event, key, focusTreeId, componentId, options) {
        var _this2 = this;

        if (isCmdKey(key)) {
          this.getCurrentCombination().forEachKey(function (keyName) {
            if (isCmdKey(keyName)) {
              return;
            }

            _this2._handleEventSimulation('keyupEventsToSimulate', 'simulatePendingKeyUpEvents', _this2._shouldSimulate(KeyEventType.keyup, keyName), {
              event: event,
              key: keyName,
              focusTreeId: focusTreeId,
              componentId: componentId,
              options: options
            });
          });
        }
      }
    }, {
      key: "_stopEventPropagation",
      value: function _stopEventPropagation(event, componentId) {
        if (this.eventPropagator.stop(event)) ;
      }
    }, {
      key: "getEventPropagator",
      value: function getEventPropagator() {
        return this.eventPropagator;
      }
    }, {
      key: "_startAndLogNewKeyCombination",
      value: function _startAndLogNewKeyCombination(keyName, focusTreeId, componentId, keyEventState) {
        this.getKeyHistory().startNewKeyCombination(keyName, keyEventState);
      }
    }, {
      key: "_addToAndLogCurrentKeyCombination",
      value: function _addToAndLogCurrentKeyCombination(keyName, keyEventType, focusTreeId, componentId, keyEventState) {
        this.getKeyHistory().addKeyToCurrentCombination(keyName, keyEventType, keyEventState);
      }
      /********************************************************************************
       * Event simulation
       ********************************************************************************/

    }, {
      key: "_handleEventSimulation",
      value: function _handleEventSimulation(listName, handlerName, shouldSimulate, _ref) {
        var event = _ref.event,
            key = _ref.key,
            focusTreeId = _ref.focusTreeId,
            componentId = _ref.componentId,
            options = _ref.options;

        if (shouldSimulate && Configuration.option('simulateMissingKeyPressEvents')) {
          /**
           * If a key does not have a keypress event, we save the details of the keydown
           * event to simulate the keypress event, as the keydown event bubbles through
           * the last focus-only HotKeysComponent
           */
          var _event = this._cloneAndMergeEvent(event, {
            key: key,
            simulated: true
          });

          this[listName].push({
            event: _event,
            focusTreeId: focusTreeId,
            componentId: componentId,
            options: options
          });
        }

        if (this.componentList.isRoot(componentId) || this.eventPropagator.isStopped()) {
          if (!this.keyEventManager.isGlobalListenersBound()) {
            this[handlerName]();
          }
          /**
           * else, we wait for keydown event to propagate through global strategy
           * before we simulate the keypress
           */

        }
      }
    }, {
      key: "simulatePendingKeyPressEvents",
      value: function simulatePendingKeyPressEvents() {
        this._simulatePendingKeyEvents('keypressEventsToSimulate', 'handleKeyPress');
      }
    }, {
      key: "simulatePendingKeyUpEvents",
      value: function simulatePendingKeyUpEvents() {
        this._simulatePendingKeyEvents('keyupEventsToSimulate', 'handleKeyUp');
      }
    }, {
      key: "_simulatePendingKeyEvents",
      value: function _simulatePendingKeyEvents(listName, handlerName) {
        var _this3 = this;

        if (this[listName].length > 0) {
          KeyEventCounter.incrementId();
        }

        this[listName].forEach(function (_ref2) {
          var event = _ref2.event,
              focusTreeId = _ref2.focusTreeId,
              componentId = _ref2.componentId,
              options = _ref2.options;

          _this3[handlerName](event, focusTreeId, componentId, options);
        });
        this[listName] = [];
      }
      /********************************************************************************
       * Matching and calling handlers
       ********************************************************************************/

      /**
       * Calls the first handler that matches the current key event if the action has not
       * already been handled in a more deeply nested component
       * @param {KeyboardEvent} event Keyboard event object to be passed to the handler
       * @param {NormalizedKeyName} keyName Normalized key name
       * @param {KeyEventType} keyEventType The record index of the current key event type
       * @param {FocusTreeId} focusTreeId Id of focus tree component thinks it's apart of
       * @param {ComponentId} componentId Index of the component that is currently handling
       *        the keyboard event
       * @private
       */

    }, {
      key: "_callHandlerIfActionNotHandled",
      value: function _callHandlerIfActionNotHandled(event, keyName, keyEventType, componentId, focusTreeId) {
        var combinationName = this.getCurrentCombination().describe();

        if (!this.componentList.anyActionsForEventType(keyEventType)) {
          return;
        }

        if (this.eventPropagator.isHandled()) ; else {
          var previousComponentPosition = this.eventPropagator.getPreviousPosition();
          var componentPosition = this.componentList.getIndexById(componentId);

          var handlerWasCalled = this._callClosestMatchingHandler(event, keyName, keyEventType, componentPosition, previousComponentPosition === -1 ? 0 : previousComponentPosition);

          if (handlerWasCalled) {
            this.eventPropagator.setHandled();
          }
        }
      }
      /********************************************************************************
       * Logging
       ********************************************************************************/

    }, {
      key: "_logPrefix",
      value: function _logPrefix(componentId) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var logIcons = Logger.logIcons;
        var eventIcons = Logger.eventIcons;
        var componentIcons = Logger.componentIcons;
        var base = 'HotKeys (';

        if (options.focusTreeId !== false) {
          var focusTreeId = isUndefined(options.focusTreeId) ? this.focusTreeId : options.focusTreeId;
          base += "F".concat(focusTreeId).concat(logIcons[focusTreeId % logIcons.length], "-");
        }

        if (options.eventId !== false) {
          var eventId = isUndefined(options.eventId) ? KeyEventCounter.getId() : options.eventId;
          base += "E".concat(eventId).concat(eventIcons[eventId % eventIcons.length], "-");
        }

        base += "C".concat(componentId).concat(componentIcons[componentId % componentIcons.length]);
        var position = this.componentList.getIndexById(componentId);

        if (!isUndefined(position)) {
          base += "-P".concat(position).concat(componentIcons[position % componentIcons.length], ":");
        }

        return "".concat(base, ")");
      }
    }]);

    return FocusOnlyKeyEventStrategy;
  }(AbstractKeyEventStrategy);

  function contains(collection, item) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (Array.isArray(collection) || isString(collection)) {
      if (options.stringifyFirst) {
        return !isUndefined(collection.find(function (collectionItem) {
          return collectionItem.toString() === item.toString();
        }));
      } else {
        return collection.indexOf(item) !== -1;
      }
    } else if (isObject(collection)) {
      return hasKey(collection, item);
    } else {
      if (options.stringifyFirst) {
        return collection.toString() === item.toString();
      } else {
        return collection === item;
      }
    }
  }

  function capitalize(string) {
    return string.replace(/\b\w/g, function (l) {
      return l.toUpperCase();
    });
  }

  function normalizeEventName(eventName) {
    return "".concat(capitalize(eventName.slice(0, 3))).concat(capitalize(eventName.slice(3)));
  }

  /**
   * Defines behaviour for dealing with key maps defined in global HotKey components
   * @class
   */

  var GlobalKeyEventStrategy =
  /*#__PURE__*/
  function (_AbstractKeyEventStra) {
    _inherits(GlobalKeyEventStrategy, _AbstractKeyEventStra);

    /********************************************************************************
     * Init & Reset
     ********************************************************************************/
    function GlobalKeyEventStrategy() {
      var _this;

      var configuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var keyEventManager = arguments.length > 1 ? arguments[1] : undefined;

      _classCallCheck(this, GlobalKeyEventStrategy);

      /**
       * Set state that gets cleared every time a component gets mounted or unmounted
       */
      _this = _possibleConstructorReturn(this, _getPrototypeOf(GlobalKeyEventStrategy).call(this, configuration, keyEventManager));
      /**
       * Set state that doesn't get cleared each time a new new component is mounted
       * or unmounted
       * @type {number}
       */

      /**
       * Whether the global key event handlers have been bound to document yet or not
       * @type {boolean}
       */

      _this.listenersBound = false;
      _this.eventOptions = {
        ignoreEventsCondition: Configuration.option('ignoreEventsCondition')
      };
      /**
       * Dictionary of listener functions - currently only intended to house
       * keyCombinationListener
       */

      _this.listeners = {};
      return _this;
    }
    /********************************************************************************
     * Enabling key maps and handlers
     ********************************************************************************/

    /**
     * Registers the actions and handlers of a HotKeys component that has mounted
     * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
     * @param {KeyMap} actionNameToKeyMap - Map of actions to key expressions
     * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handler functions
     * @param {Object} options Hash of options that configure how the actions
     *        and handlers are associated and called.
     * @param {Object} eventOptions - Options for how the event should be handled
     */


    _createClass(GlobalKeyEventStrategy, [{
      key: "enableHotKeys",
      value: function enableHotKeys(componentId) {
        var actionNameToKeyMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var actionNameToHandlersMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var options = arguments.length > 3 ? arguments[3] : undefined;
        var eventOptions = arguments.length > 4 ? arguments[4] : undefined;
        this.eventOptions = eventOptions;

        this._addComponent(componentId, actionNameToKeyMap, actionNameToHandlersMap, options);

        this._updateDocumentHandlers();
        /**
         * Reset handler resolution state
         */


        this._initHandlerResolutionState();
      }
      /**
       * Handles when a mounted global HotKeys component updates its props and changes
       * either the keyMap or handlers prop value
       * @param {ComponentId} componentId - The component index of the component to
       *        update
       * @param {KeyMap} actionNameToKeyMap - Map of actions to key expressions
       * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handler functions
       * @param {Object} options Hash of options that configure how the actions
       *        and handlers are associated and called.
       * @param {Object} eventOptions - Options for how the event should be handled
       */

    }, {
      key: "updateEnabledHotKeys",
      value: function updateEnabledHotKeys(componentId) {
        var actionNameToKeyMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var actionNameToHandlersMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var options = arguments.length > 3 ? arguments[3] : undefined;
        var eventOptions = arguments.length > 4 ? arguments[4] : undefined;
        this.eventOptions = eventOptions;
        this.componentList.update(componentId, actionNameToKeyMap, actionNameToHandlersMap, options);
        this.getKeyHistory().setMaxLength(this.componentList.getLongestSequence());
        /**
         * Reset strategy state specific to the global strategy
         */

        this._updateDocumentHandlers();
        /**
         * Reset handler resolution state
         */


        this._initHandlerResolutionState();
      }
      /**
       * Handles when a component is unmounted
       * @param {ComponentId} componentId - Index of component that is being unmounted
       */

    }, {
      key: "disableHotKeys",
      value: function disableHotKeys(componentId) {
        /**
         * Manually update the registered key map state, usually reset using
         * _resetRegisteredKeyMapsState() method
         */
        this.componentList.remove(componentId);
        this.getKeyHistory().setMaxLength(this.componentList.getLongestSequence());

        this._updateDocumentHandlers();
        /**
         * Reset handler resolution state
         */


        this._initHandlerResolutionState();
      }
    }, {
      key: "_updateDocumentHandlers",
      value: function _updateDocumentHandlers() {
        var _this2 = this;

        var listenersShouldBeBound = this._listenersShouldBeBound();

        if (!this.listenersBound && listenersShouldBeBound) {
          Object.values(KeyEventType).forEach(function (recordIndex) {
            var eventName = describeKeyEventType(recordIndex);

            document["on".concat(eventName)] = function (keyEvent) {
              _this2.keyEventManager["handleGlobal".concat(normalizeEventName(eventName))](keyEvent);
            };
          });
          this.listenersBound = true;
        } else if (this.listenersBound && !listenersShouldBeBound) {
          Object.values(KeyEventType).forEach(function (recordIndex) {
            var eventName = describeKeyEventType(recordIndex);
            delete document["on".concat(eventName)];
          });
          this.listenersBound = false;
        }
      }
      /**
       * Whether the document listeners should be bound, to record key events. Basically a check
       * to see if there are any global key maps, or whether the user is currently rebinding to
       * a new key combination.
       * @returns {boolean} True if the document listeners should be bound
       * @private
       */

    }, {
      key: "_listenersShouldBeBound",
      value: function _listenersShouldBeBound() {
        return this.componentList.any() || this.listeners.keyCombination;
      }
      /********************************************************************************
       * Recording key events
       ********************************************************************************/

      /**
       * Records a keydown keyboard event and matches it against the list of pre-registered
       * event handlers, calling the first matching handler with the highest priority if
       * one exists.
       *
       * This method is called once when a keyboard event bubbles up to document, and checks
       * the keymaps for all of the mounted global HotKey components.
       * @param {KeyboardEvent} event - Event containing the key name and state
       */

    }, {
      key: "handleKeydown",
      value: function handleKeydown(event) {
        var _key = getKeyName(event);

        if (event.repeat && Configuration.option('ignoreRepeatedEventsWhenKeyHeldDown')) {
          return true;
        }

        this._checkForModifierFlagDiscrepancies(event, _key, KeyEventType.keydown);

        var reactAppResponse = this._howReactAppRespondedTo(event, _key, KeyEventType.keydown);

        if (reactAppResponse === EventResponse.unseen && this.eventOptions.ignoreEventsCondition(event)) {
          return;
        }

        if (reactAppResponse !== EventResponse.ignored) {
          var keyEventState = stateFromEvent(event);
          var currentCombination = this.getCurrentCombination();

          if (currentCombination.isKeyIncluded(_key) || currentCombination.isEnding()) {
            this._startAndLogNewKeyCombination(_key, keyEventState);
          } else {
            this._addToAndLogCurrentKeyCombination(_key, KeyEventType.keydown, keyEventState);
          }
        }

        if (!contains([EventResponse.ignored, EventResponse.handled], reactAppResponse)) {
          this._callHandlerIfExists(event, _key, KeyEventType.keydown);
        }

        this._simulateKeyPressForNonPrintableKeys(event, _key);
      }
    }, {
      key: "_howReactAppRespondedTo",
      value: function _howReactAppRespondedTo(event, key, keyEventType) {
        var reactAppHistoryWithEvent = this.keyEventManager.reactAppHistoryWithEvent(key, keyEventType);

        switch (reactAppHistoryWithEvent) {
          case EventResponse.handled:
            break;

          case EventResponse.ignored:
            break;

          case EventResponse.seen:
            break;

          default:
            KeyEventCounter.incrementId();

        }

        return reactAppHistoryWithEvent;
      }
      /**
       * Records a keypress keyboard event and matches it against the list of pre-registered
       * event handlers, calling the first matching handler with the highest priority if
       * one exists.
       *
       * This method is called once when a keyboard event bubbles up to document, and checks
       * the keymaps for all of the mounted global HotKey components.
       * @param {KeyboardEvent} event - Event containing the key name and state
       */

    }, {
      key: "handleKeyPress",
      value: function handleKeyPress(event) {
        var key = getKeyName(event);

        if (event.repeat && Configuration.option('ignoreRepeatedEventsWhenKeyHeldDown')) {
          return true;
        }

        var currentCombination = this.getCurrentCombination();

        if (currentCombination.isKeyPressSimulated(key)) {
          return true;
        }
        /**
         * We first decide if the keypress event should be handled (to ensure the correct
         * order of logging statements)
         */


        var reactAppResponse = this._howReactAppRespondedTo(event, key, KeyEventType.keypress);
        /**
         * Add new key event to key combination history
         */


        if (currentCombination.isKeyIncluded(key)) {
          this._addToAndLogCurrentKeyCombination(key, KeyEventType.keypress, stateFromEvent(event));
        }

        if (reactAppResponse === EventResponse.unseen) {
          /**
           * If the key event has not been seen by the React application, we ensure that
           * it's not still waiting for it. This occurs when action handlers bound to keydown
           * move the focus outside of the react app before it can record the keypress or
           * keyup
           */
          this.keyEventManager.closeHangingKeyCombination(key, KeyEventType.keypress);

          if (this.eventOptions.ignoreEventsCondition(event)) {
            return;
          }
        }

        if (!contains([EventResponse.ignored, EventResponse.handled], reactAppResponse)) {
          this._callHandlerIfExists(event, key, KeyEventType.keypress);
        }
      }
      /**
       * Records a keyup keyboard event and matches it against the list of pre-registered
       * event handlers, calling the first matching handler with the highest priority if
       * one exists.
       *
       * This method is called once when a keyboard event bubbles up to document, and checks
       * the keymaps for all of the mounted global HotKey components.
       * @param {KeyboardEvent} event - Event containing the key name and state
       */

    }, {
      key: "handleKeyUp",
      value: function handleKeyUp(event) {
        var key = getKeyName(event);
        var currentCombination = this.getCurrentCombination();

        if (currentCombination.isKeyUpSimulated(key)) {
          return true;
        }
        /**
         * We first decide if the keyup event should be handled (to ensure the correct
         * order of logging statements)
         */


        var reactAppResponse = this._howReactAppRespondedTo(event, key, KeyEventType.keyup);
        /**
         * We then add the keyup to our current combination - regardless of whether
         * it's to be handled or not. We need to do this to ensure that if a handler
         * function changes focus to a context that ignored events, the keyup event
         * is not lost (leaving react hotkeys thinking the key is still pressed).
         */


        if (currentCombination.isKeyIncluded(key)) {
          this._addToAndLogCurrentKeyCombination(key, KeyEventType.keyup, stateFromEvent(event));
        }

        if (reactAppResponse === EventResponse.unseen) {
          /**
           * If the key event has not been seen by the React application, we ensure that
           * it's not still waiting for it. This occurs when action handlers bound to keydown
           * or keypress move the focus outside of the react app before it can record the keyup
           */
          this.keyEventManager.closeHangingKeyCombination(key, KeyEventType.keyup);

          if (this.eventOptions.ignoreEventsCondition(event)) ; else {
            /**
             * We attempt to find a handler of the event, only if it has not already
             * been handled and should not be ignored
             */
            if (!contains([EventResponse.ignored, EventResponse.handled], reactAppResponse)) {
              this._callHandlerIfExists(event, key, KeyEventType.keyup);
            }
          }
        } else {
          /**
           * We attempt to find a handler of the event, only if it has not already
           * been handled and should not be ignored
           */
          if (!contains([EventResponse.ignored, EventResponse.handled], reactAppResponse)) {
            this._callHandlerIfExists(event, key, KeyEventType.keyup);
          }
        }
        /**
         * We simulate any hidden keyup events hidden by the command key, regardless
         * of whether the event should be ignored or not
         */


        this._simulateKeyUpEventsHiddenByCmd(event, key);

        if (this.listeners.keyCombination && this._allKeysAreReleased()) {
          this.listeners.keyCombination({
            keys: currentCombination.getKeyDictionary(),
            id: currentCombination.describe()
          });
        }
      }
    }, {
      key: "_simulateKeyPressForNonPrintableKeys",
      value: function _simulateKeyPressForNonPrintableKeys(event, key) {
        this.keyEventManager.simulatePendingKeyPressEvents();

        this._handleEventSimulation('handleKeyPress', this._shouldSimulate(KeyEventType.keypress, key), {
          event: event,
          key: key
        });
      }
    }, {
      key: "_simulateKeyUpEventsHiddenByCmd",
      value: function _simulateKeyUpEventsHiddenByCmd(event, key) {
        var _this3 = this;

        if (isCmdKey(key)) {
          /**
           * We simulate pending key events in the React app before we do it globally
           */
          this.keyEventManager.simulatePendingKeyUpEvents();
          this.getCurrentCombination().forEachKey(function (keyName) {
            if (isCmdKey(keyName)) {
              return;
            }

            _this3._handleEventSimulation('handleKeyUp', _this3._shouldSimulate(KeyEventType.keyup, keyName), {
              event: event,
              key: keyName
            });
          });
        }
      }
    }, {
      key: "_startAndLogNewKeyCombination",
      value: function _startAndLogNewKeyCombination(keyName, keyEventState) {
        this.getKeyHistory().startNewKeyCombination(keyName, keyEventState);
      }
    }, {
      key: "_addToAndLogCurrentKeyCombination",
      value: function _addToAndLogCurrentKeyCombination(keyName, keyEventType, keyEventState) {
        this.getKeyHistory().addKeyToCurrentCombination(keyName, keyEventType, keyEventState);
      }
      /********************************************************************************
       * Event simulation
       ********************************************************************************/

    }, {
      key: "_handleEventSimulation",
      value: function _handleEventSimulation(handlerName, shouldSimulate, _ref) {
        var event = _ref.event,
            key = _ref.key;

        if (shouldSimulate && Configuration.option('simulateMissingKeyPressEvents')) {
          /**
           * If a key does not have a keypress event, we simulate one immediately after
           * the keydown event, to keep the behaviour consistent across all keys
           */
          var _event = this._cloneAndMergeEvent(event, {
            key: key,
            simulated: true
          });

          this[handlerName](_event);
        }
      }
      /********************************************************************************
       * Matching and calling handlers
       ********************************************************************************/

    }, {
      key: "_callHandlerIfExists",
      value: function _callHandlerIfExists(event, keyName, keyEventType) {
        var combinationName = this.getCurrentCombination().describe();

        if (!this.componentList.anyActionsForEventType(keyEventType)) {
          /**
           * If there are no handlers registered for the particular key event type
           * (keydown, keypress, keyup) then skip trying to find a matching handler
           * for the current key combination
           */
          return;
        }
        /**
         * If there is at least one handler for the specified key event type (keydown,
         * keypress, keyup), then attempt to find a handler that matches the current
         * key combination
         */

        this._callClosestMatchingHandler(event, keyName, keyEventType);
      }
    }, {
      key: "_callClosestMatchingHandler",
      value: function _callClosestMatchingHandler(event, keyName, keyEventType) {
        var componentListIterator = this.componentList.getNewIterator();

        while (componentListIterator.next()) {
          var matchFound = _get(_getPrototypeOf(GlobalKeyEventStrategy.prototype), "_callClosestMatchingHandler", this).call(this, event, keyName, keyEventType, componentListIterator.getPosition(), 0);

          if (matchFound) {
            return;
          }
        }
      }
    }, {
      key: "_stopEventPropagation",
      value: function _stopEventPropagation(event, componentId) {

        if (!event.simulated) {
          event.stopPropagation();
        }
      }
      /********************************************************************************
       * Recording key combination
       ********************************************************************************/

      /**
       * Add a new key combination listener function to be called the next time a key
       * combination completes (assuming the cancel function is not called).
       * @param {keyCombinationListener} callbackFunction Function to call with the next
       *        completed key combination
       * @returns {function} Function to call to cancel listening for the next key
       *        combination
       */

    }, {
      key: "addKeyCombinationListener",
      value: function addKeyCombinationListener(callbackFunction) {
        var _this4 = this;

        var cancel = function cancel() {
          delete _this4.listeners.keyCombination;
        };

        this.listeners.keyCombination = function (keyCombination) {
          callbackFunction(keyCombination);
          cancel();
        };

        this._updateDocumentHandlers();

        return cancel;
      }
      /********************************************************************************
       * Logging
       ********************************************************************************/

    }, {
      key: "_logPrefix",
      value: function _logPrefix(componentId) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var eventIcons = Logger.eventIcons;
        var componentIcons = Logger.componentIcons;
        var base = 'HotKeys (GLOBAL';

        if (options.eventId !== false) {
          var eventId = isUndefined(options.eventId) ? KeyEventCounter.getId() : options.eventId;
          base = "".concat(base, "-E").concat(eventId).concat(eventIcons[eventId % eventIcons.length]);
        }

        if (isUndefined(componentId)) {
          return "".concat(base, "):");
        } else {
          return "".concat(base, "-C").concat(componentId).concat(componentIcons[componentId % componentIcons.length], "):");
        }
      }
    }]);

    return GlobalKeyEventStrategy;
  }(AbstractKeyEventStrategy);

  /**
   * Returns whether the specified component's focus tree ID indicates it is a focus-only
   * HotKeys component, or not
   * @param {FocusTreeId} focusTreeId The focus tree id for the component
   * @returns {boolean} Whether the HotKeys component is focus-only
   */

  function isFromFocusOnlyComponent(focusTreeId) {
    return !isUndefined(focusTreeId);
  }

  /**
   * Provides a registry for keyboard sequences and events, and the handlers that should
   * be called when they are detected. Also contains the interface for processing and
   * matching keyboard events against its list of registered actions and handlers.
   * @class
   */

  var KeyEventManager =
  /*#__PURE__*/
  function () {
    _createClass(KeyEventManager, null, [{
      key: "getInstance",

      /**
       * Creates a new KeyEventManager instance if one does not already exist or returns the
       * instance that already exists.
       * @param {Object} configuration Configuration object
       * @param {Logger} configuration.logger Logger instance
       * @returns {KeyEventManager} The key event manager instance
       */
      value: function getInstance() {
        var configuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (!this.instance) {
          this.instance = new KeyEventManager(configuration);
        }

        return this.instance;
      }
    }, {
      key: "clear",
      value: function clear() {
        delete this.instance;
      }
      /**
       * Creates a new KeyEventManager instance. It is expected that only a single instance
       * will be used with a render tree.
       */

    }]);

    function KeyEventManager() {
      var configuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, KeyEventManager);

      this.logger = configuration.logger || new Logger(Configuration.option('logLevel'));
      this._focusOnlyEventStrategy = new FocusOnlyKeyEventStrategy({
        configuration: configuration,
        logger: this.logger
      }, this);
      this._globalEventStrategy = new GlobalKeyEventStrategy({
        configuration: configuration,
        logger: this.logger
      }, this);
      this.mountedComponentsCount = 0;
    }
    /********************************************************************************
     * Generating key maps
     ********************************************************************************/


    _createClass(KeyEventManager, [{
      key: "getApplicationKeyMap",
      value: function getApplicationKeyMap() {
        return Object.assign(this._globalEventStrategy.getApplicationKeyMap(), this._focusOnlyEventStrategy.getApplicationKeyMap());
      }
      /********************************************************************************
       * Registering key maps
       ********************************************************************************/

      /**
       * Registers a new mounted component's key map so that it can be included in the
       * application's key map
       * @param {KeyMap} keyMap - Map of actions to key expressions
       * @returns {ComponentId} Unique component ID to assign to the focused HotKeys
       *          component and passed back when handling a key event
       */

    }, {
      key: "registerKeyMap",
      value: function registerKeyMap() {
        var keyMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return this._focusOnlyEventStrategy.registerKeyMap(keyMap);
      }
      /**
       * Re-registers (updates) a mounted component's key map
       * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
       * @param {KeyMap} keyMap - Map of actions to key expressions
       */

    }, {
      key: "reregisterKeyMap",
      value: function reregisterKeyMap(componentId) {
        var keyMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        this._focusOnlyEventStrategy.reregisterKeyMap(componentId, keyMap);
      }
      /**
       * De-registers (removes) a mounted component's key map from the registry
       * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
       */

    }, {
      key: "deregisterKeyMap",
      value: function deregisterKeyMap(componentId) {
        this._focusOnlyEventStrategy.deregisterKeyMap(componentId);
      }
      /**
       * Registers that a component has now mounted, and declares its parent HotKeys
       * component id so that actions may be properly resolved
       * @param {ComponentId} componentId - Id of the component that has mounted
       * @param {ComponentId} parentId - Id of the parent HotKeys component
       */

    }, {
      key: "registerComponentMount",
      value: function registerComponentMount(componentId, parentId) {
        this._incrementComponentCount();

        return this._focusOnlyEventStrategy.registerComponentMount(componentId, parentId);
      }
    }, {
      key: "registerComponentUnmount",
      value: function registerComponentUnmount() {
        this._decrementComponentCount();
      }
    }, {
      key: "_incrementComponentCount",
      value: function _incrementComponentCount() {
        var _this = this;

        var preMountedComponentCount = this.mountedComponentsCount;
        this.mountedComponentsCount += 1;

        if (preMountedComponentCount === 0 && this.mountedComponentsCount === 1) {
          window.onblur = function () {
            return _this._clearKeyHistory();
          };
        }
      }
    }, {
      key: "_decrementComponentCount",
      value: function _decrementComponentCount() {
        var preMountedComponentCount = this.mountedComponentsCount;
        this.mountedComponentsCount -= 1;

        if (preMountedComponentCount === 1 && this.mountedComponentsCount === 0) {
          delete window.onblur;
        }
      }
    }, {
      key: "_clearKeyHistory",
      value: function _clearKeyHistory() {

        this._focusOnlyEventStrategy.resetKeyHistory({
          force: true
        });

        this._globalEventStrategy.resetKeyHistory({
          force: true
        });
      }
      /**
       * Registers a new mounted component's global key map so that it can be included in the
       * application's key map
       * @param {KeyMap} keyMap - Map of actions to key expressions
       * @returns {ComponentId} Unique component ID to assign to the focused HotKeys
       *          component and passed back when handling a key event
       */

    }, {
      key: "registerGlobalKeyMap",
      value: function registerGlobalKeyMap() {
        var keyMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return this._globalEventStrategy.registerKeyMap(keyMap);
      }
    }, {
      key: "registerGlobalComponentUnmount",
      value: function registerGlobalComponentUnmount() {
        this._decrementComponentCount();
      }
      /**
       * Registers that a component has now mounted, and declares its parent GlobalHotKeys
       * component id so that actions may be properly resolved
       * @param {ComponentId} componentId - Id of the component that has mounted
       * @param {ComponentId} parentId - Id of the parent GlobalHotKeys component
       */

    }, {
      key: "registerGlobalComponentMount",
      value: function registerGlobalComponentMount(componentId, parentId) {
        this._incrementComponentCount();

        return this._globalEventStrategy.registerComponentMount(componentId, parentId);
      }
      /**
       * Re-registers (updates) a mounted component's global key map
       * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
       * @param {KeyMap} keyMap - Map of actions to key expressions
       */

    }, {
      key: "reregisterGlobalKeyMap",
      value: function reregisterGlobalKeyMap(componentId, keyMap) {
        this._globalEventStrategy.reregisterKeyMap(componentId, keyMap);
      }
      /**
       * De-registers (removes) a mounted component's global key map from the registry
       * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
       */

    }, {
      key: "deregisterGlobalKeyMap",
      value: function deregisterGlobalKeyMap(componentId) {
        this._globalEventStrategy.deregisterKeyMap(componentId);
      }
      /********************************************************************************
       * Recording key combination
       ********************************************************************************/

      /**
       * Adds a listener function that will be called the next time a key combination completes
       * @param {keyCombinationListener} callbackFunction Listener function to be called
       * @returns {function} Function to call to cancel listening to the next key combination
       */

    }, {
      key: "addKeyCombinationListener",
      value: function addKeyCombinationListener(callbackFunction) {
        return this._globalEventStrategy.addKeyCombinationListener(callbackFunction);
      }
      /********************************************************************************
       * Focus key events
       ********************************************************************************/

      /**
       * Registers the actions and handlers of a HotKeys component that has gained focus
       * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
       * @param {KeyMap} actionNameToKeyMap - Map of actions to key expressions
       * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handler functions
       * @param {Object} options Hash of options that configure how the actions
       *        and handlers are associated and called.
       * @returns {FocusTreeId} The current focus tree's ID
       */

    }, {
      key: "enableHotKeys",
      value: function enableHotKeys(componentId) {
        var actionNameToKeyMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var actionNameToHandlersMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var options = arguments.length > 3 ? arguments[3] : undefined;
        return this._focusOnlyEventStrategy.enableHotKeys(componentId, actionNameToKeyMap, actionNameToHandlersMap, options);
      }
      /**
       * Handles when a HotKeys component that is in focus updates its props and changes
       * either the keyMap or handlers prop value
       * @param {FocusTreeId} focusTreeId - The ID of the focus tree the component is part of.
       *        Used to identify (and ignore) stale updates.
       * @param {ComponentId} componentId - The component index of the component to
       *        update
       * @param {KeyMap} actionNameToKeyMap - Map of key sequences to action names
       * @param {HandlersMap} actionNameToHandlersMap - Map of action names to handler
       *        functions
       * @param {Object} options Hash of options that configure how the actions
       *        and handlers are associated and called.
       */

    }, {
      key: "updateEnabledHotKeys",
      value: function updateEnabledHotKeys(focusTreeId, componentId) {
        var actionNameToKeyMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var actionNameToHandlersMap = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        var options = arguments.length > 4 ? arguments[4] : undefined;
        return this._focusOnlyEventStrategy.updateEnabledHotKeys(focusTreeId, componentId, actionNameToKeyMap, actionNameToHandlersMap, options);
      }
      /**
       * Handles when a component loses focus by resetting the internal state, ready to
       * receive the next tree of focused HotKeys components
       * @param {FocusTreeId} focusTreeId - Id of focus tree component thinks it's
       *        apart of
       * @param {ComponentId} componentId - Index of component that is blurring
       * @returns {boolean} Whether the component still has event propagation yet to handle
       */

    }, {
      key: "disableHotKeys",
      value: function disableHotKeys(focusTreeId, componentId) {
        return this._focusOnlyEventStrategy.disableHotKeys(focusTreeId, componentId);
      }
      /**
       * Records a keydown keyboard event and matches it against the list of pre-registered
       * event handlers, calling the first matching handler with the highest priority if
       * one exists.
       *
       * This method is called many times as a keyboard event bubbles up through the React
       * render tree. The event is only registered the first time it is seen and results
       * of some calculations are cached. The event is matched against the handlers registered
       * at each component level, to ensure the proper handler declaration scoping.
       * @param {KeyboardEvent} event - Event containing the key name and state
       * @param {FocusTreeId} focusTreeId - Id of focus tree component thinks it's apart of
       * @param {ComponentId} componentId - The id of the component that is currently handling
       *        the keyboard event as it bubbles towards the document root.
       * @param {Object} options - Hash of options that configure how the event is handled.
       * @returns Whether the event was discarded because it was part of an old focus tree
       */

    }, {
      key: "handleKeydown",
      value: function handleKeydown(event, focusTreeId, componentId, options) {
        if (isFromFocusOnlyComponent(focusTreeId)) {
          return this._focusOnlyEventStrategy.handleKeydown(event, focusTreeId, componentId, options);
        }
      }
      /**
       * Records a keypress keyboard event and matches it against the list of pre-registered
       * event handlers, calling the first matching handler with the highest priority if
       * one exists.
       *
       * This method is called many times as a keyboard event bubbles up through the React
       * render tree. The event is only registered the first time it is seen and results
       * of some calculations are cached. The event is matched against the handlers registered
       * at each component level, to ensure the proper handler declaration scoping.
       * @param {KeyboardEvent} event - Event containing the key name and state
       * @param {FocusTreeId} focusTreeId Id - of focus tree component thinks it's apart of
       * @param {ComponentId} componentId - The index of the component that is currently handling
       *        the keyboard event as it bubbles towards the document root.
       * @param {Object} options - Hash of options that configure how the event
       *        is handled.
       */

    }, {
      key: "handleKeyPress",
      value: function handleKeyPress(event, focusTreeId, componentId, options) {
        if (isFromFocusOnlyComponent(focusTreeId)) {
          return this._focusOnlyEventStrategy.handleKeyPress(event, focusTreeId, componentId, options);
        }
      }
      /**
       * Records a keyup keyboard event and matches it against the list of pre-registered
       * event handlers, calling the first matching handler with the highest priority if
       * one exists.
       *
       * This method is called many times as a keyboard event bubbles up through the React
       * render tree. The event is only registered the first time it is seen and results
       * of some calculations are cached. The event is matched against the handlers registered
       * at each component level, to ensure the proper handler declaration scoping.
       * @param {KeyboardEvent} event Event containing the key name and state
       * @param {FocusTreeId} focusTreeId Id of focus tree component thinks it's apart of
       * @param {ComponentId} componentId The index of the component that is currently handling
       *        the keyboard event as it bubbles towards the document root.
       * @param {Object} options Hash of options that configure how the event
       *        is handled.
       */

    }, {
      key: "handleKeyUp",
      value: function handleKeyUp(event, focusTreeId, componentId, options) {
        if (isFromFocusOnlyComponent(focusTreeId)) {
          return this._focusOnlyEventStrategy.handleKeyUp(event, focusTreeId, componentId, options);
        }
      }
      /********************************************************************************
       * Global key events
       ********************************************************************************/

      /**
       * Registers the actions and handlers of a HotKeys component that has mounted
       * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
       * @param {KeyMap} actionNameToKeyMap - Map of actions to key expressions
       * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handler functions
       * @param {Object} options Hash of options that configure how the actions
       *        and handlers are associated and called.
       * @param {Object} eventOptions - Options for how the event should be handled
       * @returns {ComponentId} A unique component ID to assign to the focused HotKeys
       *        component and passed back when handling a key event
       */

    }, {
      key: "enableGlobalHotKeys",
      value: function enableGlobalHotKeys(componentId) {
        var actionNameToKeyMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var actionNameToHandlersMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var options = arguments.length > 3 ? arguments[3] : undefined;
        var eventOptions = arguments.length > 4 ? arguments[4] : undefined;
        return this._globalEventStrategy.enableHotKeys(componentId, actionNameToKeyMap, actionNameToHandlersMap, options, eventOptions);
      }
      /**
       * Handles when a mounted global HotKeys component updates its props and changes
       * either the keyMap or handlers prop value
       * @param {ComponentId} componentId - The component index of the component to
       *        update
       * @param {KeyMap} actionNameToKeyMap - Map of actions to key expressions
       * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handler functions
       * @param {Object} options Hash of options that configure how the actions
       *        and handlers are associated and called.
       * @param {Object} eventOptions - Options for how the event should be handled
       */

    }, {
      key: "updateEnabledGlobalHotKeys",
      value: function updateEnabledGlobalHotKeys(componentId) {
        var actionNameToKeyMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var actionNameToHandlersMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var options = arguments.length > 3 ? arguments[3] : undefined;
        var eventOptions = arguments.length > 4 ? arguments[4] : undefined;
        return this._globalEventStrategy.updateEnabledHotKeys(componentId, actionNameToKeyMap, actionNameToHandlersMap, options, eventOptions);
      }
      /**
       * Handles when a component is unmounted
       * @param {ComponentId} componentId - Index of component that is being unmounted
       */

    }, {
      key: "disableGlobalHotKeys",
      value: function disableGlobalHotKeys(componentId) {
        return this._globalEventStrategy.disableHotKeys(componentId);
      }
      /**
       * Records a keydown keyboard event and matches it against the list of pre-registered
       * event handlers, calling the first matching handler with the highest priority if
       * one exists.
       *
       * This method is called once when a keyboard event bubbles up to document, and checks
       * the keymaps for all of the mounted global HotKey components.
       * @param {KeyboardEvent} event - Event containing the key name and state
       */

    }, {
      key: "handleGlobalKeyDown",
      value: function handleGlobalKeyDown(event) {
        return this._globalEventStrategy.handleKeydown(event);
      }
      /**
       * Records a keypress keyboard event and matches it against the list of pre-registered
       * event handlers, calling the first matching handler with the highest priority if
       * one exists.
       *
       * This method is called once when a keyboard event bubbles up to document, and checks
       * the keymaps for all of the mounted global HotKey components.
       * @param {KeyboardEvent} event - Event containing the key name and state
       */

    }, {
      key: "handleGlobalKeyPress",
      value: function handleGlobalKeyPress(event) {
        return this._globalEventStrategy.handleKeyPress(event);
      }
      /**
       * Records a keyup keyboard event and matches it against the list of pre-registered
       * event handlers, calling the first matching handler with the highest priority if
       * one exists.
       *
       * This method is called once when a keyboard event bubbles up to document, and checks
       * the keymaps for all of the mounted global HotKey components.
       * @param {KeyboardEvent} event - Event containing the key name and state
       */

    }, {
      key: "handleGlobalKeyUp",
      value: function handleGlobalKeyUp(event) {
        return this._globalEventStrategy.handleKeyUp(event);
      }
      /**
       * Ignores the next keyboard event immediately, rather than waiting for it to
       * match the ignoreEventsCondition
       * @param {KeyboardEvent} event keyboard event to ignore
       * @see Configuration.ignoreEventsCondition
       */

    }, {
      key: "ignoreEvent",
      value: function ignoreEvent(event) {
        this._focusOnlyEventStrategy.getEventPropagator().ignoreEvent(event);
      }
      /**
       * Forces the observation of the next keyboard event immediately, disregarding whether
       * the event matches the ignoreKeyEventsCondition
       * @param {KeyboardEvent} event keyboard event to force the observation of
       * @see Configuration.ignoreEventsCondition
       */

    }, {
      key: "observeIgnoredEvents",
      value: function observeIgnoredEvents(event) {
        this._focusOnlyEventStrategy.getEventPropagator().observeIgnoredEvents(event);
      }
      /**
       * Closes any hanging key combinations that have not received the key event indicated
       * by recordIndex.
       * @param {KeyName} keyName The name of the key whose state should be updated if it
       *        is currently set to keydown or keypress.
       * @param {KeyEventType} recordIndex Index of key event to move the key state
       *        up to.
       */

    }, {
      key: "closeHangingKeyCombination",
      value: function closeHangingKeyCombination(keyName, recordIndex) {
        this._focusOnlyEventStrategy.closeHangingKeyCombination(keyName, recordIndex);
      }
    }, {
      key: "reactAppHistoryWithEvent",
      value: function reactAppHistoryWithEvent(key, type) {
        var previousPropagation = this._focusOnlyEventStrategy.eventPropagator.getPreviousPropagation();

        if (previousPropagation.isForKey(key) && previousPropagation.isForEventType(type)) {
          if (previousPropagation.isHandled()) {
            return EventResponse.handled;
          } else if (previousPropagation.isIgnoringEvent()) {
            return EventResponse.ignored;
          } else {
            return EventResponse.seen;
          }
        } else {
          return EventResponse.unseen;
        }
      }
    }, {
      key: "simulatePendingKeyPressEvents",
      value: function simulatePendingKeyPressEvents() {
        this._focusOnlyEventStrategy.simulatePendingKeyPressEvents();
      }
    }, {
      key: "simulatePendingKeyUpEvents",
      value: function simulatePendingKeyUpEvents() {
        this._focusOnlyEventStrategy.simulatePendingKeyUpEvents();
      }
    }, {
      key: "isGlobalListenersBound",
      value: function isGlobalListenersBound() {
        return this._globalEventStrategy.listenersBound;
      }
    }]);

    return KeyEventManager;
  }();

  /**
   * Modifies in-place and returns a React Component class such that it correctly uses
   * the React context API appropriate for the version of React being used.
   *
   * @see https://reactjs.org/docs/context.html
   *
   * @param {React.Component} Component React component to modify to use the correct
   *        context API
   * @param {Object} options Hash of options that define the shape and default values
   *        of the context to use with descendant components.
   * @param {Object} options.deprecatedAPI Hash of options that satisfy the legacy
   *        or deprecated pre React 16.* API
   * @param {Object} options.deprecatedAPI.contextTypes Context types describing the
   *        shape and type of the context that Component consumes, expressed as React
   *        prop types
   * @param {Object} options.deprecatedAPI.childContextTypes Context types describing the
   *        shape and type of the context that Component makes available to its descendants
   *        to consume, expressed as React prop types
   * @param {Object} options.newAPI Hash of options that satisfy the new context API,
   *        available from React 16.* onwards
   * @param {Object} options.newAPI.contextType Object describing the shape and default
   *        values of the context instance used provide context to descendant components
   * @returns {React.Component} Component that has now had the specified context applied
   */

  function backwardsCompatibleContext(Component, _ref) {
    var _ref$deprecatedAPI = _ref.deprecatedAPI,
        contextTypes = _ref$deprecatedAPI.contextTypes,
        childContextTypes = _ref$deprecatedAPI.childContextTypes,
        contextType = _ref.newAPI.contextType;

    /**
     * React v16.* introduces a new context API and deprecates the previous, experimental one
     */
    if (typeof React__default.createContext === 'undefined') {
      /**
       * We apply the deprecated context if the new createContext method is not defined.
       * @note this uses the new context API for React v16.*, even though it is still
       * available until React v17.*
       */

      /**
       * The contextTypes and childContextTypes are the same as each react hotkeys component
       * that uses context, both consumes its most direct ancestor's context and modifies
       * the context of its descendants in order to recursively pass down the guid of the
       * most direct ancestor
       */
      Component.contextTypes = contextTypes;
      Component.childContextTypes = childContextTypes;

      Component.prototype.getChildContext = function () {
        return this._childContext;
      };
    } else {
      var context = React__default.createContext(contextType);
      Component.contextType = context;
      Component.prototype._originalRender = Component.prototype.render;
      /**
       * We unfortunately have to wrap the original render method of the Component to
       * dynamically add the context Provider component.
       *
       * No ill-effects have been discovered during testing, but if strange occurrences
       * or edge cases start to appear - this may be a great place to start looking.
       */

      Component.prototype.render = function () {
        var result = this._originalRender();

        if (result) {
          return React__default.createElement(context.Provider, {
            value: this._childContext
          }, result);
        } else {
          return null;
        }
      };
    }

    return Component;
  }

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
        _this._id = KeyEventManager.getInstance().registerKeyMap(props.keyMap);
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
            tabIndex: Configuration.option('defaultTabIndex')
          };

          if (this._shouldBindKeyListeners()) {
            hotKeys.onKeyDown = this._handleKeyDown;
            hotKeys.onKeyPress = this._handleKeyPress;
            hotKeys.onKeyUp = this._handleKeyUp;
          }

          return React__default.createElement(Component, _extends({
            hotKeys: hotKeys
          }, props));
        }
      }, {
        key: "_shouldBindKeyListeners",
        value: function _shouldBindKeyListeners() {
          var keyMap = getKeyMap(this.props);
          return !isEmpty(keyMap) || this.props.root || Configuration.option('enableHardSequences') && this._handlersIncludeHardSequences(keyMap, getHandlers(this.props));
        }
      }, {
        key: "_handlersIncludeHardSequences",
        value: function _handlersIncludeHardSequences(keyMap, handlers) {
          return Object.keys(handlers).some(function (action) {
            return !keyMap[action] && KeyCombinationSerializer.isValidKeySerialization(action);
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
          var keyEventManager = KeyEventManager.getInstance();
          keyEventManager.reregisterKeyMap(this._id, this.props.keyMap);

          if (this._componentIsFocused() && (this.props.allowChanges || !Configuration.option('ignoreKeymapAndHandlerChangesByDefault'))) {
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
          var keyEventManager = KeyEventManager.getInstance();
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

          var focusTreeId = KeyEventManager.getInstance().enableHotKeys(this._id, getKeyMap(this.props), getHandlers(this.props), this._getComponentOptions());

          if (!isUndefined(focusTreeId)) {
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
          var keyEventManager = KeyEventManager.getInstance();
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

          var retainCurrentFocusTreeId = KeyEventManager.getInstance().disableHotKeys(this._getFocusTreeId(), this._id);

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
          var discardFocusTreeId = KeyEventManager.getInstance().handleKeydown(event, this._getFocusTreeId(), this._id, this._getEventOptions());

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
          var discardFocusTreeId = KeyEventManager.getInstance().handleKeyPress(event, this._getFocusTreeId(), this._id, this._getEventOptions());

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
          var discardFocusTreeId = KeyEventManager.getInstance().handleKeyUp(event, this._getFocusTreeId(), this._id, this._getEventOptions());

          if (discardFocusTreeId) {
            this._focusTreeIdsShift();
          }
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

      return HotKeysEnabled;
    }(React.PureComponent);

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
       * Function to call when this component gains focus in the browser
       * @type {function}
       */
      onFocus: PropTypes.func,

      /**
       * Function to call when this component loses focus in the browser
       * @type {function}
       */
      onBlur: PropTypes.func,

      /**
       * Whether the keyMap or handlers are permitted to change after the
       * component mounts. If false, changes to the keyMap and handlers
       * props will be ignored
       */
      allowChanges: PropTypes.bool,

      /**
       * Whether this is the root HotKeys node - this enables some special behaviour
       */
      root: PropTypes.bool
    });

    return backwardsCompatibleContext(HotKeysEnabled, {
      deprecatedAPI: {
        contextTypes: {
          hotKeysParentId: PropTypes.number
        },
        childContextTypes: {
          hotKeysParentId: PropTypes.number
        }
      },
      newAPI: {
        contextType: {
          hotKeysParentId: undefined
        }
      }
    });
  }

  /**
   * @see HotKeysEnabled
   */

  var HotKeysWrapper =
  /*#__PURE__*/
  function (_Component) {
    _inherits(HotKeysWrapper, _Component);

    function HotKeysWrapper() {
      _classCallCheck(this, HotKeysWrapper);

      return _possibleConstructorReturn(this, _getPrototypeOf(HotKeysWrapper).apply(this, arguments));
    }

    _createClass(HotKeysWrapper, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            hotKeys = _this$props.hotKeys,
            innerRef = _this$props.innerRef,
            component = _this$props.component,
            remainingProps = _objectWithoutProperties(_this$props, ["hotKeys", "innerRef", "component"]);

        var DefaultComponent = component || Configuration.option('defaultComponent');
        return React__default.createElement(DefaultComponent, _objectSpread({}, hotKeys, {
          ref: innerRef
        }, remainingProps));
      }
    }]);

    return HotKeysWrapper;
  }(React.Component);

  var HotKeys = withHotKeys(HotKeysWrapper);
  HotKeys.propTypes = {
    /**
     * A ref to add to the underlying DOM-mountable node
     */
    innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
  };

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
  }(React.Component);

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

  var GlobalHotKeys$1 = backwardsCompatibleContext(GlobalHotKeys, {
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
          return React__default.createElement(Component, _extends({
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

          if (isEmpty(this._onlyDict)) {
            if (isEmpty(this._exceptDict)) {
              return true;
            } else {
              return !hasKey(this._exceptDict, key);
            }
          } else {
            if (isEmpty(this._exceptDict)) {
              return hasKey(this._onlyDict, key);
            } else {
              return hasKey(this._onlyDict, key) && !hasKey(this._exceptDict, key);
            }
          }
        }
      }, {
        key: "_handleKeyEvent",
        value: function _handleKeyEvent(event) {
          if (this._shouldIgnoreEvent(event)) {
            KeyEventManager.getInstance()[eventManagerMethod](event);
          }
        }
      }]);

      return HotKeysIgnoreOverride;
    }(React.PureComponent), _defineProperty(_class, "propTypes", {
      /**
       * The whitelist of keys that keyevents should be ignored. i.e. if you place
       * a key in this list, all events related to it will be ignored by react hotkeys
       */
      only: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),

      /**
       * The blacklist of keys that keyevents should be not ignored. i.e. if you place
       * a key in this list, all events related to it will be still be observed by react
       * hotkeys
       */
      except: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
    }), _defineProperty(_class, "defaultProps", hotKeysIgnoreOptions), _temp;
  }

  function keyDictionary(list) {
    return arrayFrom(list).reduce(function (memo, keyName) {
      var finalKeyName = standardizeKeyName(keyName);

      if (!isValidKey(finalKeyName)) {
        throw new InvalidKeyNameError(keyName);
      }

      [resolveAltShiftedAlias, resolveUnaltShiftedAlias, resolveShiftedAlias, resolveUnshiftedAlias, resolveAltedAlias, resolveUnaltedAlias].forEach(function (func) {
        memo[func(finalKeyName)] = true;
      });
      return memo;
    }, {});
  }

  /**
   * A component that causes React Hotkeys to ignore all matching key events
   * triggered by its children. By default, this is all key events, but you can use
   * the only prop to provide a whitelist, or the except prop to pass a blacklist (and
   * cause HotKeys components to still observe these events).
   *
   * @see HotKeysIgnoreOverride
   */

  var IgnoreKeys =
  /*#__PURE__*/
  function (_Component) {
    _inherits(IgnoreKeys, _Component);

    function IgnoreKeys() {
      _classCallCheck(this, IgnoreKeys);

      return _possibleConstructorReturn(this, _getPrototypeOf(IgnoreKeys).apply(this, arguments));
    }

    _createClass(IgnoreKeys, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            hotKeys = _this$props.hotKeys,
            remainingProps = _objectWithoutProperties(_this$props, ["hotKeys"]);

        var DefaultComponent = remainingProps.component || Configuration.option('defaultComponent');
        return React__default.createElement(DefaultComponent, _objectSpread({}, hotKeys, remainingProps));
      }
    }]);

    return IgnoreKeys;
  }(React.Component);

  var IgnoreKeys$1 = withHotKeysIgnoreOverride(IgnoreKeys, {}, 'ignoreEvent');

  /**
   * A component that forces React Hotkeys to observe all matching key events
   * triggered by its children, even if they are matched by Configuration.ignoreEventsCondition.
   * By default, this is all key events, but you can use the only prop to provide a
   * whitelist, or the except prop to pass a blacklist.
   *
   * @see HotKeysIgnoreOverride
   */

  var ObserveKeys =
  /*#__PURE__*/
  function (_Component) {
    _inherits(ObserveKeys, _Component);

    function ObserveKeys() {
      _classCallCheck(this, ObserveKeys);

      return _possibleConstructorReturn(this, _getPrototypeOf(ObserveKeys).apply(this, arguments));
    }

    _createClass(ObserveKeys, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            hotKeys = _this$props.hotKeys,
            remainingProps = _objectWithoutProperties(_this$props, ["hotKeys"]);

        var DefaultComponent = remainingProps.component || Configuration.option('defaultComponent');
        return React__default.createElement(DefaultComponent, _objectSpread({}, hotKeys, remainingProps));
      }
    }]);

    return ObserveKeys;
  }(React.Component);

  var ObserveKeys$1 = withHotKeysIgnoreOverride(ObserveKeys, {}, 'observeIgnoredEvents');

  /**
   * Wraps a React component in a HotKeysIgnored component, which passes down the
   * callbacks and options necessary for React Hotkeys to work as a single prop value,
   * hotkeys. These must be unwrapped and applied to a DOM-mountable element within
   * the wrapped component (e.g. div, span, input, etc) in order for the key events
   * to be recorded.
   */

  function withIgnoreKeys(Component) {
    var hotKeysIgnoreOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      only: [],
      except: []
    };
    return withHotKeysIgnoreOverride(Component, hotKeysIgnoreOptions, 'ignoreEvent');
  }

  /**
   * Wraps a React component in a ObserveKeys component, which passes down the
   * callbacks and options necessary for React Hotkeys to work as a single prop value,
   * hotkeys. These must be unwrapped and applied to a DOM-mountable element within
   * the wrapped component (e.g. div, span, input, etc) in order for the key events
   * to be recorded.
   */

  function withObserveKeys(Component) {
    var hotKeysIgnoreOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      only: [],
      except: []
    };
    return withHotKeysIgnoreOverride(Component, hotKeysIgnoreOptions, 'observeIgnoredEvents');
  }

  /**
   * Configure the behaviour of HotKeys
   * @param {Object} configuration Configuration object
   * @see Configuration.init
   */

  function configure() {
    var configuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    Configuration.init(configuration);
  }

  /**
   * @typedef {Object.<ActionName, KeyEventDescription[]>} ApplicationKeyMap
   */

  /**
   * Generates and returns the application's key map, including not only those
   * that are live in the current focus, but all the key maps from all the
   * HotKeys and GlobalHotKeys components that are currently mounted
   * @returns {ApplicationKeyMap} The application's key map
   */

  function getApplicationKeyMap() {
    return KeyEventManager.getInstance().getApplicationKeyMap();
  }

  /**
   * @callback keyCombinationListener
   */

  /**
   * Adds a listener function that will be called the next time a key combination completes
   * @param {keyCombinationListener} callbackFunction Listener function to be called
   * @returns {function} Function to call to cancel listening to the next key combination
   */

  function recordKeyCombination(callbackFunction) {
    var eventManager = KeyEventManager.getInstance();
    return eventManager.addKeyCombinationListener(callbackFunction);
  }

  exports.HotKeys = HotKeys;
  exports.GlobalHotKeys = GlobalHotKeys$1;
  exports.IgnoreKeys = IgnoreKeys$1;
  exports.ObserveKeys = ObserveKeys$1;
  exports.withHotKeys = withHotKeys;
  exports.withIgnoreKeys = withIgnoreKeys;
  exports.withObserveKeys = withObserveKeys;
  exports.configure = configure;
  exports.getApplicationKeyMap = getApplicationKeyMap;
  exports.recordKeyCombination = recordKeyCombination;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
