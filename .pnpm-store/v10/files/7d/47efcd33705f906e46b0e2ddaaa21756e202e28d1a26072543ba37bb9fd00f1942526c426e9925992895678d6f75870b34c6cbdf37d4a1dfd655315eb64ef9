/**
 * ISC License
 *
 * Copyright (c) 2018, Aleck Greenham
 *
 * Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

import PropTypes from 'prop-types';
import React, { PureComponent, Component } from 'react';

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

function dictionaryFrom(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:null;return a.reduce(function(a,c){return a[c]=b||{value:c},a},{})}

var _defaultConfiguration={logLevel:"warn",defaultKeyEvent:"keydown",defaultComponent:"div",defaultTabIndex:"-1",ignoreTags:["input","select","textarea"],enableHardSequences:!1,ignoreKeymapAndHandlerChangesByDefault:!0,ignoreEventsCondition:function c(a){var b=a.target;if(b&&b.tagName){var d=b.tagName.toLowerCase();return Configuration.option("_ignoreTagsDict")[d]||b.isContentEditable}return !1},ignoreRepeatedEventsWhenKeyHeldDown:!0,simulateMissingKeyPressEvents:!0,stopEventPropagationAfterHandling:!0,stopEventPropagationAfterIgnoring:!0,allowCombinationSubmatches:!1,customKeyCodes:{}},_configuration=_objectSpread({},_defaultConfiguration);_configuration._ignoreTagsDict=dictionaryFrom(_configuration.ignoreTags,!0);var Configuration=function(){function a(){_classCallCheck(this,a);}return _createClass(a,null,[{key:"init",value:function e(a){var b=this,c=a.ignoreTags,d=a.customKeyCodes;c&&(a._ignoreTagsDict=dictionaryFrom(a.ignoreTags)),d&&(a._customKeyNamesDict=dictionaryFrom(Object.values(a.customKeyCodes))),-1!==["verbose","debug","info"].indexOf(a.logLevel)&&console.warn("React HotKeys: You have requested log level '".concat(a.logLevel,"' but for performance reasons, logging below severity level 'warning' is disabled in production. Please use the development build for complete logs.")),Object.keys(a).forEach(function(c){b.set(c,a[c]);});}},{key:"set",value:function c(a,b){_configuration[a]=b;}},{key:"reset",value:function b(a){_configuration[a]=_defaultConfiguration[a];}},{key:"option",value:function b(a){return _configuration[a]}}]),a}();

var Logger=function(){function a(){var b=this,c=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"warn";if(_classCallCheck(this,a),_defineProperty(this,"verbose",this.noop),_defineProperty(this,"debug",this.noop),_defineProperty(this,"info",this.noop),_defineProperty(this,"warn",this.noop),_defineProperty(this,"error",this.noop),this.logLevel=this.constructor.levels[c],this.logLevel>=this.constructor.levels.error)this.error=console.error;else return;if(this.logLevel>=this.constructor.levels.warn)this.warn=console.warn;else return;["info","debug","verbose"].some(function(a){return !(b.logLevel>=b.constructor.levels[a])||(b[a]=console.log,!1)});}return _createClass(a,[{key:"noop",value:function a(){}}]),a}();_defineProperty(Logger,"logIcons",["\uD83D\uDCD5","\uD83D\uDCD7","\uD83D\uDCD8","\uD83D\uDCD9"]),_defineProperty(Logger,"componentIcons",["\uD83D\uDD3A","\u2B50\uFE0F","\uD83D\uDD37","\uD83D\uDD36","\u2B1B\uFE0F"]),_defineProperty(Logger,"eventIcons",["\u2764\uFE0F","\uD83D\uDC9A","\uD83D\uDC99","\uD83D\uDC9B","\uD83D\uDC9C","\uD83E\uDDE1"]),_defineProperty(Logger,"levels",{none:0,error:1,warn:2,info:3,debug:4,verbose:5});

var KeyEventType={keydown:0,keypress:1,keyup:2};

var ModifierFlagsDictionary={Shift:["shiftKey"],Meta:["metaKey"],Control:["ctrlKey"],Alt:["altKey"]};

var ShiftedKeysDictionary={"`":["~"],1:["!"],2:["@","\""],3:["#","\xA3"],4:["$"],5:["%"],6:["^"],7:["&"],8:["*"],9:["("],0:[")"],"-":["_"],"=":["plus"],";":[":"],"'":["\"","@"],",":["<"],".":[">"],"/":["?"],"\\":["|"],"[":["{"],"]":["}"],"#":["~"]};

function resolveShiftedAlias(a){return ShiftedKeysDictionary[a]||[1===a.length?a.toUpperCase():a]}

function hasKey(a,b){return a.hasOwnProperty(b)}

function invertArrayDictionary(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(a).reduce(function(c,d){var e=a[d];return e.forEach(function(a){hasKey(c,a)||(c[a]=[]),c[a].push(d);}),b.includeOriginal&&(!hasKey(c,d)&&(c[d]=[]),c[d]=[].concat(_toConsumableArray(c[d]),_toConsumableArray(e))),c},{})}

var UnshiftedKeysDictionary=invertArrayDictionary(ShiftedKeysDictionary);

function resolveUnshiftedAlias(a){return UnshiftedKeysDictionary[a]||[1===a.length?a.toLowerCase():a]}

var KeyOSAndLayoutAliasesDictionary={};var KeyOSAndLayoutAliasesDictionary$1 = invertArrayDictionary(KeyOSAndLayoutAliasesDictionary,{includeOriginal:!0});

function isString(a){return "string"==typeof a}

function stripSuperfluousWhitespace(a){return isString(a)?a.trim().replace(/\s+/g," "):a}

var MousetrapToReactKeyNamesDictionary={tab:"Tab",capslock:"CapsLock",shift:"Shift",meta:"Meta",alt:"Alt",ctrl:"Control",space:" ",spacebar:" ",escape:"Escape",esc:"Escape",left:"ArrowLeft",right:"ArrowRight",up:"ArrowUp",down:"ArrowDown",return:"Enter",del:"Delete",command:"Meta",option:"Alt",enter:"Enter",backspace:"Backspace",ins:"Insert",pageup:"PageUp",pagedown:"PageDown",end:"End",home:"Home",contextmenu:"ContextMenu",numlock:"Clear"};

var KeyShorthandDictionary={cmd:"Meta"};

function standardizeKeyName(a){var b=a.toLowerCase();return MousetrapToReactKeyNamesDictionary[b]||KeyShorthandDictionary[b]||(a.match(/^f\d+$/)?a.toUpperCase():a)}

var translateToKey={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};

var NonPrintableKeysDictionary=dictionaryFrom(Object.values(translateToKey),!0);

function isNonPrintableKeyName(a){return !!NonPrintableKeysDictionary[a]}

function isCustomKeyName(a){return Configuration.option("_customKeyNamesDict")[a]}

function isValidKey(a){return isNonPrintableKeyName(a)||String.fromCharCode(a.charCodeAt(0))===a||isCustomKeyName(a)}var InvalidKeyNameError=function(a){function b(){var a,c;_classCallCheck(this,b);for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=_possibleConstructorReturn(this,(a=_getPrototypeOf(b)).call.apply(a,[this].concat(e))),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"name","InvalidKeyNameError"),c}return _inherits(b,a),b}(_wrapNativeSuper(Error));

function normalizedCombinationId(a){return a.sort().join("+")}var KeySequenceParser=function(){function a(){_classCallCheck(this,a);}return _createClass(a,null,[{key:"parse",value:function k(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=stripSuperfluousWhitespace(a),d=c.split(" ");try{var e=d.slice(0,d.length-1),f=d[d.length-1],g=e.map(function(a){var c=parseCombination(a,b);return normalizedCombinationId(Object.keys(c))}).join(" "),h=parseCombination(f,b),i=normalizedCombinationId(Object.keys(h)),j={id:i,keyDictionary:h,keyEventType:b.keyEventType,size:Object.keys(h).length};return {sequence:{prefix:g,size:e.length+1},combination:j}}catch(a){return {sequence:null,combination:null}}}}]),a}();function parseCombination(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};return a.replace(/^\+|(\s|[^+]\+)\+/,"$1plus").split("+").reduce(function(a,c){var d=standardizeKeyName(c);if(b.ensureValidKeys&&!isValidKey(d))throw new InvalidKeyNameError;return a[d]=!0,a},{})}

var AltedKeysDictionary={"`":["`"],1:["\xA1"],2:["\u2122"],3:["\xA3"],4:["\xA2"],5:["\u221E"],6:["\xA7"],7:["\xB6"],8:["\u2022"],9:["\xAA"],0:["\xBA"],"-":["\u2013"],"=":["\u2260"],a:["\xE5"],b:["\u222B"],c:["\xE7"],d:["\u2202"],e:["\xB4"],f:["\u0192"],g:["\xA9"],h:["\u02D9"],i:["\u02C6"],j:["\u2206"],k:["\u02DA"],l:["\xAC"],m:["\xB5"],n:["\u02DC"],o:["\xF8"],p:["\u03C0"],q:["\u0153"],r:["\xAE"],s:["\xDF"],t:["\u2020"],u:["\xA8"],v:["\u221A"],w:["\u2211"],x:["\u2248"],y:["\xA5"],z:["\u03A9"],"[":["\u201C"],"]":["\u2018"],"\\":["\xAB"],"'":["\xE6"],";":["\u2026"],",":["\u2264"],".":["\u2265"],"/":["\xF7"]};

var UnaltedKeysDictionary=invertArrayDictionary(AltedKeysDictionary);

function resolveUnaltedAlias(a){return UnaltedKeysDictionary[a]||[a]}

function resolveAltedAlias(a){return AltedKeysDictionary[a]||[a]}

var AltShiftedKeysDictionary={"`":["`"],1:["\u2044"],2:["\u20AC"],3:["\u2039"],4:["\u203A"],5:["\uFB01"],6:["\uFB02"],7:["\u2021"],8:["\xB0"],9:["\xB7"],0:["\u201A"],"-":["\u2014"],"=":["\xB1"],a:["\xC5"],b:["\u0131"],c:["\xC7"],d:["\xCE"],e:["\xB4"],f:["\xCF"],g:["\u02DD"],h:["\xD3"],i:["\u02C6"],j:["\xD4"],k:["\uF8FF"],l:["\xD2"],m:["\xC2"],n:["\u02DC"],o:["\xD8"],p:["\u03C0"],q:["\u0152"],r:["\u2030"],s:["\xCD"],t:["\xCE"],u:["\xA8"],v:["\u25CA"],w:["\u201E"],x:["\u02DB"],y:["\xC1"],z:["\xB8"],"[":["\u201D"],"]":["\u2019"],"\\":["\xBB"],"'":["\xC6"],";":["\xDA"],",":["\xAF"],".":["\u02D8"]};

var UnaltShiftedKeysDictionary=invertArrayDictionary(AltShiftedKeysDictionary);

function resolveUnaltShiftedAlias(a){return UnaltShiftedKeysDictionary[a]||resolveUnshiftedAlias(a)}

function resolveAltShiftedAlias(a){return AltShiftedKeysDictionary[a]||[a]}

var KeyCombinationSerializer=function(){function a(){_classCallCheck(this,a);}return _createClass(a,null,[{key:"serialize",value:function f(a){var b=a.Shift,c=a.Alt,d={},e=Object.keys(a).sort();return e.forEach(function(a){var e=[];if(b){if(c){var f=resolveUnaltShiftedAlias(a),g=resolveAltShiftedAlias(a);e=[].concat(_toConsumableArray(e),[a],_toConsumableArray(f),_toConsumableArray(g));}else{var h=resolveUnshiftedAlias(a),i=resolveShiftedAlias(a);e=[].concat(_toConsumableArray(e),[a],_toConsumableArray(h),_toConsumableArray(i));}}else if(c){var j=resolveUnaltedAlias(a),k=resolveAltedAlias(a);e=[].concat(_toConsumableArray(e),[a],_toConsumableArray(j),_toConsumableArray(k));}else{e.push(a);var m=KeyOSAndLayoutAliasesDictionary$1[a];m&&(e=[].concat(_toConsumableArray(e),_toConsumableArray(m)));}var l=Object.keys(d);0<l.length?l.forEach(function(a){e.forEach(function(b){d[a+"+".concat(b)]=_objectSpread({},d[a],_defineProperty({},b,!0));}),delete d[a];}):e.forEach(function(a){d[a]=_defineProperty({},a,!0);});}),Object.values(d).map(function(a){return Object.keys(a).sort().join("+")})}},{key:"isValidKeySerialization",value:function b(a){return !!(0<a.length)&&!!KeySequenceParser.parse(a,{ensureValidKeys:!0}).combination}}]),a}();

var KeyEventSequenceIndex={previous:0,current:1};

function resolveKeyAlias(a){return KeyOSAndLayoutAliasesDictionary$1[a]||[a]}

function applicableAliasFunctions(a){if(a.Shift)return a.Alt?[resolveAltShiftedAlias,resolveUnaltShiftedAlias]:[resolveShiftedAlias,resolveUnshiftedAlias];if(a.Alt)return [resolveAltedAlias,resolveUnaltedAlias];var b=function(a){return [a]};return [b,b]}

function isUndefined(a){return "undefined"==typeof a}

var KeyEventState={unseen:0,seen:1,simulated:2};

var KeyEventStateArrayManager=function(){function a(){_classCallCheck(this,a);}return _createClass(a,null,[{key:"newRecord",value:function d(a,b){var c=[KeyEventState.unseen,KeyEventState.unseen,KeyEventState.unseen];if(!isUndefined(a))for(var e=0;e<=a;e++)c[e]=b;return c}},{key:"setBit",value:function d(a,b,c){return a[b]=c,a}},{key:"clone",value:function d(a){for(var b=this.newRecord(),c=0;c<a.length;c++)b[c]=a[c];return b}}]),a}();

function isObject(a){return !Array.isArray(a)&&"object"===_typeof(a)&&null!==a}

function isEmpty(a){return isObject(a)?0===Object.keys(a).length:!a||0===a.length}

function size(a){return isObject(a)?Object.keys(a).length:a.length}

var KeyCombination=function(){function a(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};_classCallCheck(this,a),this._keys=b,this._includesKeyUp=!1,this._update();}return _createClass(a,[{key:"getIds",value:function a(){return this._ids}},{key:"getKeyAliases",value:function a(){return this._keyAliases}},{key:"getNormalizedKeyName",value:function d(a){var b=this._keys[a];if(b)return a;var c=this._keyAliases[a];return c?c:a}},{key:"getNumberOfKeys",value:function a(){return size(this._keys)}},{key:"any",value:function a(){return 0<Object.keys(this._getKeyStates()).length}},{key:"isEnding",value:function a(){return this._includesKeyUp}},{key:"hasEnded",value:function a(){return isEmpty(this.keysStillPressedDict())}},{key:"addKey",value:function c(a,b){this._setKeyState(a,[KeyEventStateArrayManager.newRecord(),KeyEventStateArrayManager.newRecord(KeyEventType.keydown,b)]);}},{key:"setKeyState",value:function g(a,b,c){var d=this._getKeyState(a);if(this.isKeyIncluded(a)){var e=KeyEventStateArrayManager.clone(d[1]),f=KeyEventStateArrayManager.clone(e);KeyEventStateArrayManager.setBit(f,b,c),this._setKeyState(a,[e,f]);}else this.addKey(a,c);b===KeyEventType.keyup&&(this._includesKeyUp=!0);}},{key:"forEachKey",value:function b(a){return Object.keys(this._keys).forEach(a)}},{key:"some",value:function b(a){return Object.keys(this._keys).some(a)}},{key:"getKeyDictionary",value:function a(){return dictionaryFrom(Object.keys(this._getKeyStates()),!0)}},{key:"keysStillPressedDict",value:function b(){var a=this;return Object.keys(this._keys).reduce(function(b,c){return a.isKeyStillPressed(c)&&(b[c]=a._getKeyState(c)),b},{})}},{key:"isKeyIncluded",value:function b(a){return !!this._getKeyState(a)}},{key:"isKeyStillPressed",value:function b(a){return this.isEventTriggered(a,KeyEventType.keypress)&&!this.isKeyReleased(a)}},{key:"isKeyReleased",value:function b(a){return this.isEventTriggered(a,KeyEventType.keyup)}},{key:"isEventTriggered",value:function c(a,b){return this._getKeyStateType(a,KeyEventSequenceIndex.current,b)}},{key:"wasEventPreviouslyTriggered",value:function c(a,b){return this._getKeyStateType(a,KeyEventSequenceIndex.previous,b)}},{key:"isKeyPressSimulated",value:function b(a){return this._isKeyEventSimulated(a,KeyEventType.keypress)}},{key:"isKeyUpSimulated",value:function b(a){return this._isKeyEventSimulated(a,KeyEventType.keyup)}},{key:"describe",value:function a(){return this.getIds()[0]}},{key:"toJSON",value:function a(){return {keys:this._getKeyStates(),ids:this.getIds(),keyAliases:this.getKeyAliases()}}},{key:"_getKeyStateType",value:function e(a,b,c){var d=this._getKeyState(a);return d&&d[b][c]}},{key:"_update",value:function a(){this._ids=KeyCombinationSerializer.serialize(this._keys),this._keyAliases=buildKeyAliases(this._keys);}},{key:"_isKeyEventSimulated",value:function c(a,b){return this.isEventTriggered(a,b)===KeyEventState.simulated}},{key:"_getKeyStates",value:function a(){return this._keys}},{key:"_getKeyState",value:function d(a){var b=this._keys[a];if(b)return b;var c=this._keyAliases[a];if(c)return this._keys[c]}},{key:"_setKeyState",value:function d(a,b){var c=this.getNormalizedKeyName(a);this._keys[c]=b,this._update();}}]),a}();function buildKeyAliases(a){return Object.keys(a).reduce(function(b,c){return resolveKeyAlias(c).forEach(function(d){applicableAliasFunctions(a).forEach(function(a){a(d).forEach(function(a){(a!==c||c!==d)&&(b[a]=c);});});}),b},{})}

var KeyHistory=function(){function a(b){var c=b.maxLength,d=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;_classCallCheck(this,a),this._records=[],this._maxLength=c,d?this._push(d):this._push(new KeyCombination);}return _createClass(a,[{key:"getMostRecentCombinations",value:function b(a){return this._records.slice(-a,-1)}},{key:"any",value:function a(){return this._records.some(function(a){return a.any()})}},{key:"getLength",value:function a(){return this._records.length}},{key:"getCurrentCombination",value:function a(){return this._records[this.getLength()-1]}},{key:"addKeyToCurrentCombination",value:function d(a,b,c){this._ensureInitialKeyCombination(),this.getCurrentCombination().setKeyState(a,b,c);}},{key:"setMaxLength",value:function b(a){this._maxLength=a,this._trimHistory();}},{key:"startNewKeyCombination",value:function d(a,b){this._ensureInitialKeyCombination();var c=new KeyCombination(this.getCurrentCombination().keysStillPressedDict());c.addKey(a,b),this._push(c);}},{key:"toJSON",value:function a(){return this._records.map(function(a){return a.toJSON()})}},{key:"_ensureInitialKeyCombination",value:function a(){0===this.getLength()&&this._push(new KeyCombination);}},{key:"_push",value:function b(a){this._trimHistory(),this._records.push(a);}},{key:"_trimHistory",value:function a(){for(;this.getLength()>this._maxLength;)this._shift();}},{key:"_shift",value:function a(){this._records.shift();}}]),a}();

var Registry=function(){function a(){_classCallCheck(this,a),this._registry={};}return _createClass(a,[{key:"get",value:function b(a){return this._registry[a]}},{key:"set",value:function c(a,b){this._registry[a]=b;}},{key:"remove",value:function b(a){delete this._registry[a];}},{key:"toJSON",value:function a(){return this._registry}}]),a}();

function arrayFrom(a){return Array.isArray(a)?a:a?[a]:[]}

function without(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},d=dictionaryFrom(arrayFrom(b));return Array.isArray(a)?a.reduce(function(a,b){return d[b]&&(c.stringifyFirst||d[b].value===b)||a.push(b),a},[]):isObject(a)?Object.keys(a).reduce(function(b,c){return d[c]||(b[c]=a[c]),b},{}):a}

var ComponentTree=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,_getPrototypeOf(b).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:"add",value:function d(a,c){_get(_getPrototypeOf(b.prototype),"set",this).call(this,a,{childIds:[],parentId:null,keyMap:c});}},{key:"update",value:function e(a,c){var d=_get(_getPrototypeOf(b.prototype),"get",this).call(this,a);_get(_getPrototypeOf(b.prototype),"set",this).call(this,a,_objectSpread({},d,{keyMap:c}));}},{key:"setParent",value:function c(a,b){this.get(a).parentId=b,this._addChildId(b,a);}},{key:"remove",value:function d(a){var c=this._getParentId(a);this._removeChildId(c,a),_get(_getPrototypeOf(b.prototype),"remove",this).call(this,a);}},{key:"_getParentId",value:function c(a){var b=this.get(a);return b&&b.parentId}},{key:"_addChildId",value:function c(a,b){this.get(a).childIds.push(b);}},{key:"_removeChildId",value:function d(a,b){var c=this.get(a);c&&(c.childIds=without(c.childIds,b));}}]),b}(Registry);

function removeAtIndex(a,b){return [].concat(_toConsumableArray(a.slice(0,b)),_toConsumableArray(a.slice(b+1)))}

var ComponentOptionsListIterator=function(){function a(b){_classCallCheck(this,a),this._list=b,this._position=-1;}return _createClass(a,[{key:"getPosition",value:function a(){return this._position}},{key:"getComponent",value:function a(){return this._list.getAtPosition(this.getPosition())}},{key:"next",value:function a(){return this.getPosition()+1<this._list.getLength()?(this._position++,this.getComponent()):null}}]),a}();

var ComponentOptionsList=function(){function a(){_classCallCheck(this,a),this._list=[],this._idToIndex={},this._longestSequence=1,this._longestSequenceComponentId=null,this._keyMapEventRecord=KeyEventStateArrayManager.newRecord();}return _createClass(a,[{key:"getNewIterator",value:function a(){return new ComponentOptionsListIterator(this)}},{key:"add",value:function g(a,b,c,d){if(this.containsId(a))return this.update(a,b,c,d);var e=this._build(a,b,c,d);this._list.push(e);var f=this._getLastIndex();return this._idToIndex[a]=f}},{key:"containsId",value:function b(a){return !!this.get(a)}},{key:"get",value:function b(a){return this.getAtPosition(this.getIndexById(a))}},{key:"getIndexById",value:function b(a){return this._idToIndex[a]}},{key:"update",value:function h(a,b,c,d){var e=this._isUpdatingComponentWithLongestSequence(a),f=this.getLongestSequence(),g=this._build(a,b,c,d);e&&g.sequenceLength!==f&&(g.sequenceLength>f?this._longestSequence=g.sequenceLength:this._recalculateLongestSequence()),this._list[this.getIndexById(a)]=g;}},{key:"remove",value:function c(a){var b=this._isUpdatingComponentWithLongestSequence(a);this.removeAtPosition(this.getIndexById(a)),b&&this._recalculateLongestSequence();}},{key:"any",value:function a(){return 0!==this.getLength()}},{key:"isRoot",value:function b(a){return this.getIndexById(a)>=this.getLength()-1}},{key:"getLongestSequence",value:function a(){return this._longestSequence}},{key:"anyActionsForEventType",value:function b(a){return !!this._keyMapEventRecord[a]}},{key:"getLength",value:function a(){return this._list.length}},{key:"getAtPosition",value:function b(a){return this._list[a]}},{key:"removeAtPosition",value:function b(a){this._list=removeAtIndex(this._list,a);for(var c=a;c<this.getLength();)this._idToIndex[this.getAtPosition(c).componentId]=c,c++;}},{key:"toJSON",value:function a(){return this._list}},{key:"_getLastIndex",value:function a(){return this.getLength()-1}},{key:"_build",value:function i(a,b,c,d){var e=this._applyHardSequences(b,c),f=e.keyMap,g=e.handlers,h=this._buildActionDictionary(_objectSpread({},b,f),d,a);return {actions:h,handlers:g,componentId:a,options:d}}},{key:"_isUpdatingComponentWithLongestSequence",value:function b(a){return a===this._getLongestSequenceComponentId()}},{key:"_getLongestSequenceComponentId",value:function a(){return this._longestSequenceComponentId}},{key:"_recalculateLongestSequence",value:function d(){for(var e=this.getNewIterator();e.next();){var a=e.getComponent(),b=a.longestSequence,c=a.componentId;b>this.getLongestSequence()&&(this._longestSequenceComponentId=c,this._longestSequence=b);}}},{key:"_applyHardSequences",value:function c(a,b){return Configuration.option("enableHardSequences")?Object.keys(b).reduce(function(c,d){var e=!!a[d];return !e&&KeyCombinationSerializer.isValidKeySerialization(d)&&(c.keyMap[d]=d),c.handlers[d]=b[d],c},{keyMap:{},handlers:{}}):{keyMap:a,handlers:b}}},{key:"_buildActionDictionary",value:function e(a,b,c){var d=this;return Object.keys(a).reduce(function(e,f){var g=a[f],h=function(){return isObject(g)&&hasKey(g,"sequences")?arrayFrom(g.sequences):arrayFrom(g)}();return h.forEach(function(a){var g=normalizeActionOptions(a,b),h=g.keySequence,i=g.keyEventType;d._addActionOptions(e,c,f,h,i);}),e},{})}},{key:"_addActionOptions",value:function i(a,b,c,d,e){var f=KeySequenceParser.parse(d,{keyEventType:e}),g=f.sequence,h=f.combination;g.size>this.getLongestSequence()&&(this._longestSequence=g.size,this._longestSequenceComponentId=b),this._keyMapEventRecord[e]=KeyEventState.seen,a[c]||(a[c]=[]),a[c].push(_objectSpread({prefix:g.prefix,actionName:c,sequenceLength:g.size},h));}}]),a}();function normalizeActionOptions(a,b){if(isObject(a)){var c=a.sequence,d=a.action;return {keySequence:c,keyEventType:isUndefined(d)?KeyEventType[b.defaultKeyEvent]:KeyEventType[d]}}return {keySequence:a,keyEventType:KeyEventType[b.defaultKeyEvent]}}

function indexFromEnd(a,b){return a[a.length-(b+1)]}

for(var KeysWithKeyUpHiddenByCmd={Enter:!0,Backspace:!0,ArrowRight:!0,ArrowLeft:!0,ArrowUp:!0,ArrowDown:!0,CapsLock:!0},i=1;13>i;i++)KeysWithKeyUpHiddenByCmd["F".concat(i)]=!0;

function keyupIsHiddenByCmd(a){return 1===a.length||hasKey(KeysWithKeyUpHiddenByCmd,a)}

var KeyCombinationMatcher=function(){function a(){_classCallCheck(this,a),this._actionConfigs={},this._order=null;}return _createClass(a,[{key:"addMatch",value:function f(a,b){if(this._includesMatcherForCombination(a.id)){var c=a.keyEventType,d=a.actionName,e=a.id;this._addHandlerToActionConfig(e,{keyEventType:c,actionName:d,handler:b});}else this._addNewActionConfig(a,b);}},{key:"findMatch",value:function k(a,b,c){this._order||this._setOrder();var d=!0,e=!1,f=void 0;try{for(var g,h=this._order[Symbol.iterator]();!(d=(g=h.next()).done);d=!0){var i=g.value,j=this._actionConfigs[i];if(this._matchesActionConfig(a,b,c,j))return j}}catch(a){e=!0,f=a;}finally{try{d||null==h.return||h.return();}finally{if(e)throw f}}return null}},{key:"toJSON",value:function a(){return {actionConfigs:this._actionConfigs,order:this._order}}},{key:"_matchesActionConfig",value:function h(a,b,c,d){if(!canBeMatched(a,d))return !1;var e=d.events[c];if(!e)return !1;var f=!1,g=Object.keys(d.keyDictionary).every(function(d){return !!a.isEventTriggered(d,c)&&(b&&b===a.getNormalizedKeyName(d)&&(f=!a.wasEventPreviouslyTriggered(d,c)),!0)});return g&&f}},{key:"_setOrder",value:function b(){var a=Object.values(this._actionConfigs).reduce(function(a,b){var c=b.id,d=b.size;return a[d]||(a[d]=[]),a[d].push(c),a},{});this._order=Object.keys(a).sort(function(c,a){return a-c}).reduce(function(b,c){return b.concat(a[c])},[]);}},{key:"_addNewActionConfig",value:function j(a,b){var c=a.prefix,d=a.sequenceLength,e=a.id,f=a.keyDictionary,g=a.size,h=a.keyEventType,i=a.actionName;this._setCombinationMatcher(e,{prefix:c,sequenceLength:d,id:e,keyDictionary:f,size:g,events:{}}),this._addHandlerToActionConfig(e,{keyEventType:h,actionName:i,handler:b});}},{key:"_addHandlerToActionConfig",value:function g(a,b){var c=b.keyEventType,d=b.actionName,e=b.handler,f=this._getCombinationMatcher(a);this._setCombinationMatcher(a,_objectSpread({},f,{events:_objectSpread({},f.events,_defineProperty({},c,{actionName:d,handler:e}))}));}},{key:"_setCombinationMatcher",value:function c(a,b){this._actionConfigs[a]=b;}},{key:"_getCombinationMatcher",value:function b(a){return this._actionConfigs[a]}},{key:"_includesMatcherForCombination",value:function b(a){return !!this._getCombinationMatcher(a)}}]),a}();function canBeMatched(a,b){var c=size(b.keyDictionary);return Configuration.option("allowCombinationSubmatches")||keyUpIsBeingHidden(a)?a.getNumberOfKeys()>=c:a.getNumberOfKeys()===c}function keyUpIsBeingHidden(a){return !!a.isKeyStillPressed("Meta")&&a.some(function(a){return keyupIsHiddenByCmd(a)})}

var KeyHistoryMatcher=function(){function a(){_classCallCheck(this,a),this._combinationMatchers={},this._eventRecord=KeyEventStateArrayManager.newRecord();}return _createClass(a,[{key:"addMatch",value:function d(a,b){var c=this._getOrCreateCombinationMatcher(a.prefix);c.addMatch(a,b),KeyEventStateArrayManager.setBit(this._eventRecord,a.keyEventType,KeyEventState.seen),(!this._longestSequence||this._longestSequence<a.sequenceLength)&&(this._longestSequence=a.sequenceLength);}},{key:"findMatch",value:function e(a,b,c){var d=this._findCombinationMatcher(a);return d?d.findMatch(a.getCurrentCombination(),a.getCurrentCombination().getNormalizedKeyName(b),c):null}},{key:"hasMatchesForEventType",value:function b(a){return !!this._eventRecord[a]}},{key:"getLongestSequence",value:function a(){return this._longestSequence}},{key:"toJSON",value:function b(){var a=this;return Object.keys(this._combinationMatchers).reduce(function(b,c){var d=a._combinationMatchers[c];return b[c]=d.toJSON(),b},{})}},{key:"_getOrCreateCombinationMatcher",value:function b(a){return this._combinationMatchers[a]||(this._combinationMatchers[a]=new KeyCombinationMatcher),this._combinationMatchers[a]}},{key:"_findCombinationMatcher",value:function m(a){var b=a.getMostRecentCombinations(this.getLongestSequence());if(0===b.length)return this._combinationMatchers[""];for(var c=b.map(function(a){return a.getIds()}),d=c.map(function(a){return a.length}),e=Array(c.length).fill(0),f=!1;!f;){var g=e.map(function(a,b){return c[b][a]}),h=g.join(" ");if(this._combinationMatchers[h])return this._combinationMatchers[h];for(var i=0,j=!0;j&&i<e.length;){var k=indexFromEnd(e,i),l=(k+1)%(indexFromEnd(d,i)||1);e[e.length-(i+1)]=l,j=0==l,j&&i++;}f=i===e.length;}}}]),a}();

var ActionResolver=function(){function a(b){_classCallCheck(this,a),this._keyMapMatchers=[],this._unmatchedHandlerStatus=[],this._handlersDictionary={},this._keySequencesDictionary={};for(var e=b.getNewIterator();e.next();){var c=e.getComponent(),d=c.handlers;this._unmatchedHandlerStatus.push([Object.keys(d).length,{}]),this._keyMapMatchers.push(new KeyHistoryMatcher);}this._componentList=b,this._componentListIterator=b.getNewIterator();}return _createClass(a,[{key:"getKeyHistoryMatcher",value:function b(a){if(this._componentHasUnmatchedHandlers(a))for(;this._componentListIterator.next();)this._addHandlersFromComponent(),this._addActionsFromComponent();return this._getKeyHistoryMatcher(a)}},{key:"componentHasActionsBoundToEventType",value:function c(a,b){return this.getKeyHistoryMatcher(a).hasMatchesForEventType(b)}},{key:"findMatchingKeySequenceInComponent",value:function e(a,b,c,d){return this.componentHasActionsBoundToEventType(a,d)?this.getKeyHistoryMatcher(a).findMatch(b,c,d):null}},{key:"_getKeyHistoryMatcher",value:function b(a){return this._keyMapMatchers[a]}},{key:"_addActionsFromComponent",value:function d(){var a=this,b=this._componentListIterator.getComponent(),c=b.actions;Object.keys(c).forEach(function(b){var d=a._getHandlers(b);if(d){var e=d[0],f=a._componentList.getAtPosition(e).handlers[b],g=a._getKeyHistoryMatcher(e),h=c[b];h.forEach(function(b){var c=[b.prefix,b.id].join(" ");a._isClosestHandlerFound(c,b)||(g.addMatch(b,f),a._addKeySequence(c,[e,b.keyEventType]));}),d.forEach(function(c){var d=a._getUnmatchedHandlerStatus(c);d[1][b]||(d[1][b]=!0,d[0]--);});}});}},{key:"_getHandlers",value:function b(a){return this._handlersDictionary[a]}},{key:"_addHandlersFromComponent",value:function d(){var a=this,b=this._componentListIterator.getComponent(),c=b.handlers;Object.keys(c).forEach(function(b){a._addHandler(b);});}},{key:"_addHandler",value:function b(a){this._handlersDictionary[a]||(this._handlersDictionary[a]=[]),this._handlersDictionary[a].push(this._componentListIterator.getPosition());}},{key:"_addKeySequence",value:function c(a,b){this._keySequencesDictionary[a]||(this._keySequencesDictionary[a]=[]),this._keySequencesDictionary[a].push(b);}},{key:"_componentHasUnmatchedHandlers",value:function b(a){return 0<this._getUnmatchedHandlerStatus(a)[0]}},{key:"_getUnmatchedHandlerStatus",value:function b(a){return this._unmatchedHandlerStatus[a]}},{key:"_isClosestHandlerFound",value:function c(a,b){return this._keySequencesDictionary[a]&&this._keySequencesDictionary[a].some(function(a){return a[1]===b.keyEventType})}}]),a}();

function copyAttributes(a,b,c){return c.forEach(function(c){hasKey(a,c)&&(b[c]=a[c]);}),b}

function describeKeyEventType(a){switch(parseInt(a,10)){case 0:return "keydown";case 1:return "keypress";default:return "keyup";}}

function hasKeyPressEvent(a){return !isNonPrintableKeyName(a)}

function stateFromEvent(a){return a.simulated?KeyEventState.simulated:KeyEventState.seen}

var SEQUENCE_ATTRIBUTES=["sequence","action"],KEYMAP_ATTRIBUTES=["name","description","group"],AbstractKeyEventStrategy=function(){function a(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},c=1<arguments.length?arguments[1]:void 0;_classCallCheck(this,a),this.logger=b.logger||new Logger("warn"),this.componentId=-1,this.keyEventManager=c,this._componentTree=new ComponentTree,this.rootComponentId=null,this._reset(),this.resetKeyHistory();}return _createClass(a,[{key:"_reset",value:function a(){this.componentList=new ComponentOptionsList,this._initHandlerResolutionState();}},{key:"_newKeyHistory",value:function a(){return new KeyHistory({maxLength:this.componentList.getLongestSequence()})}},{key:"getKeyHistory",value:function a(){return this._keyHistory?this._keyHistory:(this._keyHistory=this._newKeyHistory(),this._keyHistory)}},{key:"_initHandlerResolutionState",value:function a(){this._actionResolver=null;}},{key:"resetKeyHistory",value:function b(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.keypressEventsToSimulate=[],this.keyupEventsToSimulate=[],this._keyHistory=this.getKeyHistory().any()&&!a.force?new KeyHistory({maxLength:this.componentList.getLongestSequence()},new KeyCombination(this.getCurrentCombination().keysStillPressedDict())):this._newKeyHistory();}},{key:"getApplicationKeyMap",value:function a(){return null===this.rootComponentId?{}:this._buildApplicationKeyMap([this.rootComponentId],{})}},{key:"_buildApplicationKeyMap",value:function d(a,b){var c=this;return a.forEach(function(a){var d=c._componentTree.get(a),e=d.childIds,f=d.keyMap;f&&Object.keys(f).forEach(function(a){var d=f[a];b[a]={},isObject(d)?hasKey(d,"sequences")?(copyAttributes(d,b[a],KEYMAP_ATTRIBUTES),b[a].sequences=c._createSequenceFromConfig(d.sequences)):(copyAttributes(d,b[a],KEYMAP_ATTRIBUTES),b[a].sequences=[copyAttributes(d,{},SEQUENCE_ATTRIBUTES)]):b[a].sequences=c._createSequenceFromConfig(d);}),c._buildApplicationKeyMap(e,b);}),b}},{key:"_createSequenceFromConfig",value:function b(a){return arrayFrom(a).map(function(a){return isObject(a)?copyAttributes(a,{},SEQUENCE_ATTRIBUTES):{sequence:a}})}},{key:"registerKeyMap",value:function b(a){return this.componentId+=1,this._componentTree.add(this.componentId,a),this.componentId}},{key:"reregisterKeyMap",value:function c(a,b){this._componentTree.update(a,b);}},{key:"registerComponentMount",value:function c(a,b){isUndefined(b)?this.rootComponentId=a:this._componentTree.setParent(a,b),void 0;}},{key:"deregisterKeyMap",value:function b(a){this._componentTree.remove(a),a===this.rootComponentId&&(this.rootComponentId=null);}},{key:"_addComponent",value:function e(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},d=3<arguments.length?arguments[3]:void 0;this.componentList.add(a,b,c,d),this.getKeyHistory().setMaxLength(this.componentList.getLongestSequence());}},{key:"_allKeysAreReleased",value:function a(){return this.getCurrentCombination().hasEnded()}},{key:"getCurrentCombination",value:function a(){return this.getKeyHistory().getCurrentCombination()}},{key:"_shouldSimulate",value:function e(a,b){var c=hasKeyPressEvent(b),d=this.getCurrentCombination();return a===KeyEventType.keypress?!c||c&&d.isKeyStillPressed("Meta"):a===KeyEventType.keyup&&keyupIsHiddenByCmd(b)&&d.isKeyReleased("Meta")}},{key:"_cloneAndMergeEvent",value:function d(a,b){var c=Object.keys(ModifierFlagsDictionary).reduce(function(b,c){return b[c]=a[c],b},{});return _objectSpread({},c,b)}},{key:"_callClosestMatchingHandler",value:function h(a,b,c,d,e){for(this._actionResolver||(this._actionResolver=new ActionResolver(this.componentList));e<=d;){var i=this._actionResolver.getKeyHistoryMatcher(e);var f=this._actionResolver.findMatchingKeySequenceInComponent(e,this.getKeyHistory(),b,c),g=this.getCurrentCombination();if(f){var j=f.events[c];if(Configuration.option("allowCombinationSubmatches")){var k=KeyCombinationSerializer.serialize(f.keyDictionary);}return j.handler(a),this._stopEventPropagationAfterHandlingIfEnabled(a,e),!0}if(this._actionResolver.componentHasActionsBoundToEventType(e,c));e++;}}},{key:"_stopEventPropagationAfterHandlingIfEnabled",value:function c(a,b){return !!Configuration.option("stopEventPropagationAfterHandling")&&(this._stopEventPropagation(a,b),!0)}},{key:"_stopEventPropagation",value:function a(){throw new Error("_stopEventPropagation must be overridden by a subclass")}},{key:"_checkForModifierFlagDiscrepancies",value:function e(a,b,c){var d=this;Object.keys(ModifierFlagsDictionary).forEach(function(e){if(b!==e||c!==KeyEventType.keyup){var f=d.getCurrentCombination(),g=f.isKeyStillPressed(e);ModifierFlagsDictionary[e].forEach(function(b){!1===a[b]&&g&&f.setKeyState(e,KeyEventType.keyup,stateFromEvent(a));});}});}},{key:"_logPrefix",value:function a(){}}]),a}();

var KeyEventCounter=function(){function a(){_classCallCheck(this,a);}return _createClass(a,null,[{key:"getId",value:function a(){return isUndefined(this._id)&&(this._id=0),this._id}},{key:"incrementId",value:function a(){this._id=this.getId()+1;}}]),a}();

function getEventCharCode(a){var b,c=a.keyCode;return "charCode"in a?(b=a.charCode,0===b&&13===c&&(b=13)):b=c,10===b&&(b=13),32<=b||13===b?b:0}

var normalizeKey={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"};function reactsGetEventKey(a){if(a.key){var b=normalizeKey[a.key]||a.key;if("Unidentified"!==b)return b}if("keypress"===a.type){var c=getEventCharCode(a);return 13===c?"Enter":String.fromCharCode(c)}return "keydown"===a.type||"keyup"===a.type?translateToKey[a.keyCode]||"Unidentified":""}

function getKeyName(a){var b=function(){var b=Configuration.option("customKeyCodes"),c=a.keyCode||a.charCode;return hasKey(b,c)?b[c]:a.nativeEvent?a.key:reactsGetEventKey(a)}();return "+"===b?"plus":b}

function isCmdKey(a){return "Meta"===a}

var EventResponse={unseen:0,ignored:1,seen:2,recorded:3,handled:4};

var EventPropagator=function(){function a(b,c){var d=c.logger,e=c.logPrefix;_classCallCheck(this,a),this._componentList=b,this._previousPropagation=null,this.logger=d,this._logPrefix=e,this._reset();}return _createClass(a,[{key:"_reset",value:function a(){this._previousPosition=-1,this._position=-1,this._actionHandled=!1,this._ignoreEvent=!1,this._observeIgnoredEvents=!1,this._stopping=!1,this._componentId=null,this._key=null,this._type=null;}},{key:"isFirstPropagationStep",value:function b(){var a=this.getPreviousPosition();return -1===a||a>=this._position}},{key:"isForKey",value:function b(a){return this._key===a}},{key:"isForEventType",value:function b(a){return this._type===a}},{key:"startNewPropagationStep",value:function e(a,b,c,d){return this._position=this._componentList.getIndexById(a),this._componentId=a,this.isFirstPropagationStep()&&(KeyEventCounter.incrementId(),this._key=b.key,this._type=d),!(b.repeat&&Configuration.option("ignoreRepeatedEventsWhenKeyHeldDown"))||(this.ignoreEvent(b),!1)}},{key:"finishPropagationStep",value:function a(){this.isStopped()||this._componentList.isRoot(this._componentId)?(this._previousPropagation=this._clone(),this._reset()):this._previousPosition=this._position;}},{key:"getPreviousPropagation",value:function a(){return this._previousPropagation||(this._previousPropagation=this._clone({copyState:!1})),this._previousPropagation}},{key:"getPreviousPosition",value:function a(){return this._previousPosition}},{key:"observeIgnoredEvents",value:function a(){this._observeIgnoredEvents=!0;}},{key:"ignoreEvent",value:function b(a){return this.setIgnoreEvent(!0),!!(this.isIgnoringEvent()&&Configuration.option("stopEventPropagationAfterIgnoring"))&&(this.stop(a),this.finishPropagationStep(),!0)}},{key:"setIgnoreEvent",value:function b(a){this._ignoreEvent=a;}},{key:"isIgnoringEvent",value:function a(){return !this._observeIgnoredEvents&&this._ignoreEvent}},{key:"isStopped",value:function a(){return this._stopping}},{key:"stop",value:function b(a){return !this.isStopped()&&(this._stopping=!0,a.simulated||a.stopPropagation(),!0)}},{key:"isPendingPropagation",value:function b(){var a=this.getPreviousPosition();return -1!==a&&a+1<this._position}},{key:"isHandled",value:function a(){return this._actionHandled}},{key:"setHandled",value:function a(){this._actionHandled=!0;}},{key:"_clone",value:function e(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},c=b.copyState,d=new a(this._componentList,{logger:this.logger,logPrefix:this._logPrefix});return (void 0===c||c)&&Object.assign(d,this),d}}]),a}();

var FocusOnlyKeyEventStrategy=function(a){function b(){var a,c=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},d=1<arguments.length?arguments[1]:void 0;return _classCallCheck(this,b),a=_possibleConstructorReturn(this,_getPrototypeOf(b).call(this,c,d)),a.focusTreeId=0,a}return _inherits(b,a),_createClass(b,[{key:"_reset",value:function a(){_get(_getPrototypeOf(b.prototype),"_reset",this).call(this),this.keypressEventsToSimulate=[],this.focusTreeId+=1,this.eventPropagator=new EventPropagator(this.componentList,{logger:this.logger,logPrefix:this._logPrefix.bind(this)});}},{key:"enableHotKeys",value:function e(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},d=3<arguments.length?arguments[3]:void 0;if(this.resetOnNextFocus&&(this._reset(),this.resetOnNextFocus=!1),!this.componentList.containsId(a))return this._addComponent(a,b,c,d),this.focusTreeId}},{key:"updateEnabledHotKeys",value:function f(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},e=4<arguments.length?arguments[4]:void 0;a===this.focusTreeId&&this.componentList.containsId(b)&&(this.componentList.update(b,c,d,e),this.getKeyHistory().setMaxLength(this.componentList.getLongestSequence()),this._initHandlerResolutionState(),void 0);}},{key:"disableHotKeys",value:function d(a,b){this.resetOnNextFocus||(this.resetOnNextFocus=!0);var c=this.eventPropagator.isPendingPropagation();return c}},{key:"handleKeydown",value:function j(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},e=getKeyName(a);if(b!==this.focusTreeId)return this.eventPropagator.ignoreEvent(a),!0;var f=this.eventPropagator.startNewPropagationStep(c,a,e,KeyEventType.keydown);if(f){var g=this._howToHandleKeyEvent(a,b,c,e,d,KeyEventType.keydown);if(g===EventResponse.handled){var h=stateFromEvent(a),i=this.getCurrentCombination();i.isKeyIncluded(e)||i.isEnding()?this._startAndLogNewKeyCombination(e,b,c,h):this._addToAndLogCurrentKeyCombination(e,KeyEventType.keydown,b,c,h),this._callHandlerIfActionNotHandled(a,e,KeyEventType.keydown,c,b);}return this._simulateKeyPressForNonPrintableKeys(a,e,b,c,d),this.eventPropagator.finishPropagationStep(),!1}}},{key:"_howToHandleKeyEvent",value:function g(a,b,c,d,e,f){if(this.eventPropagator.isFirstPropagationStep()){if(e.ignoreEventsCondition(a)&&this.eventPropagator.ignoreEvent(a))return this._eventIsToBeIgnored(a,c,d,f);this._checkForModifierFlagDiscrepancies(a,d,f);}else if(this.eventPropagator.isIgnoringEvent())return this._eventIsToBeIgnored(a,c,d,f);return EventResponse.handled}},{key:"_eventIsToBeIgnored",value:function e(a,b,c,d){return EventResponse.ignored}},{key:"handleKeyPress",value:function j(a,b,c,d){var e=getKeyName(a),f=this.getCurrentCombination();if(f.isKeyPressSimulated(e))return this.eventPropagator.ignoreEvent(a),!0;var g=this.eventPropagator.startNewPropagationStep(c,a,e,KeyEventType.keypress);if(g){var h=b!==this.focusTreeId,i=this._howToHandleKeyEvent(a,b,c,e,d,KeyEventType.keypress);return this.eventPropagator.isFirstPropagationStep(c)&&f.isKeyIncluded(e)&&this._addToAndLogCurrentKeyCombination(e,KeyEventType.keypress,b,c,stateFromEvent(a)),i===EventResponse.handled&&this._callHandlerIfActionNotHandled(a,e,KeyEventType.keypress,c,b),this.eventPropagator.finishPropagationStep(),h}}},{key:"handleKeyUp",value:function j(a,b,c,d){var e=getKeyName(a),f=this.getCurrentCombination();if(f.isKeyUpSimulated(e))return this.eventPropagator.ignoreEvent(a),!0;var g=this.eventPropagator.startNewPropagationStep(c,a,e,KeyEventType.keyup);if(g){var h=b!==this.focusTreeId,i=this._howToHandleKeyEvent(a,b,c,e,d,KeyEventType.keyup);return this.eventPropagator.isFirstPropagationStep(c)&&f.isKeyIncluded(e)&&this._addToAndLogCurrentKeyCombination(e,KeyEventType.keyup,b,c,stateFromEvent(a)),i===EventResponse.handled&&this._callHandlerIfActionNotHandled(a,e,KeyEventType.keyup,c,b),this._simulateKeyUpEventsHiddenByCmd(a,e,b,c,d),this.eventPropagator.finishPropagationStep(),h}}},{key:"closeHangingKeyCombination",value:function d(a,b){var c=this.getCurrentCombination();c.isKeyIncluded(a)&&!c.isEventTriggered(a,b)&&c.setKeyState(a,b,KeyEventState.simulated);}},{key:"_simulateKeyPressForNonPrintableKeys",value:function f(a,b,c,d,e){this._handleEventSimulation("keypressEventsToSimulate","simulatePendingKeyPressEvents",this._shouldSimulate(KeyEventType.keypress,b),{event:a,key:b,focusTreeId:c,componentId:d,options:e});}},{key:"_simulateKeyUpEventsHiddenByCmd",value:function g(a,b,c,d,e){var f=this;isCmdKey(b)&&this.getCurrentCombination().forEachKey(function(b){isCmdKey(b)||f._handleEventSimulation("keyupEventsToSimulate","simulatePendingKeyUpEvents",f._shouldSimulate(KeyEventType.keyup,b),{event:a,key:b,focusTreeId:c,componentId:d,options:e});});}},{key:"_stopEventPropagation",value:function c(a,b){this.eventPropagator.stop(a)&&void 0;}},{key:"getEventPropagator",value:function a(){return this.eventPropagator}},{key:"_startAndLogNewKeyCombination",value:function e(a,b,c,d){this.getKeyHistory().startNewKeyCombination(a,d),void 0;}},{key:"_addToAndLogCurrentKeyCombination",value:function f(a,b,c,d,e){this.getKeyHistory().addKeyToCurrentCombination(a,b,e),void 0;}},{key:"_handleEventSimulation",value:function j(a,b,c,d){var e=d.event,f=d.key,g=d.focusTreeId,h=d.componentId,i=d.options;if(c&&Configuration.option("simulateMissingKeyPressEvents")){var k=this._cloneAndMergeEvent(e,{key:f,simulated:!0});this[a].push({event:k,focusTreeId:g,componentId:h,options:i});}(this.componentList.isRoot(h)||this.eventPropagator.isStopped())&&!this.keyEventManager.isGlobalListenersBound()&&this[b]();}},{key:"simulatePendingKeyPressEvents",value:function a(){this._simulatePendingKeyEvents("keypressEventsToSimulate","handleKeyPress");}},{key:"simulatePendingKeyUpEvents",value:function a(){this._simulatePendingKeyEvents("keyupEventsToSimulate","handleKeyUp");}},{key:"_simulatePendingKeyEvents",value:function d(a,b){var c=this;0<this[a].length&&KeyEventCounter.incrementId(),this[a].forEach(function(a){var d=a.event,e=a.focusTreeId,f=a.componentId,g=a.options;c[b](d,e,f,g);}),this[a]=[];}},{key:"_callHandlerIfActionNotHandled",value:function k(a,b,c,d,e){var g=this.getCurrentCombination().describe();if(!this.componentList.anyActionsForEventType(c))return void void 0;if(this.eventPropagator.isHandled());else{var h=this.eventPropagator.getPreviousPosition(),i=this.componentList.getIndexById(d),j=this._callClosestMatchingHandler(a,b,c,i,-1===h?0:h);j&&this.eventPropagator.setHandled();}}},{key:"_logPrefix",value:function h(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=Logger.logIcons,d=Logger.eventIcons,e=Logger.componentIcons,f="HotKeys (";if(!1!==b.focusTreeId){var i=isUndefined(b.focusTreeId)?this.focusTreeId:b.focusTreeId;f+="F".concat(i).concat(c[i%c.length],"-");}if(!1!==b.eventId){var j=isUndefined(b.eventId)?KeyEventCounter.getId():b.eventId;f+="E".concat(j).concat(d[j%d.length],"-");}f+="C".concat(a).concat(e[a%e.length]);var g=this.componentList.getIndexById(a);return isUndefined(g)||(f+="-P".concat(g).concat(e[g%e.length],":")),"".concat(f,")")}}]),b}(AbstractKeyEventStrategy);

function contains(a,b){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{};return Array.isArray(a)||isString(a)?c.stringifyFirst?!isUndefined(a.find(function(a){return a.toString()===b.toString()})):-1!==a.indexOf(b):isObject(a)?hasKey(a,b):c.stringifyFirst?a.toString()===b.toString():a===b}

function capitalize(a){return a.replace(/\b\w/g,function(a){return a.toUpperCase()})}

function normalizeEventName(a){return "".concat(capitalize(a.slice(0,3))).concat(capitalize(a.slice(3)))}

var GlobalKeyEventStrategy=function(a){function b(){var a,c=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},d=1<arguments.length?arguments[1]:void 0;return _classCallCheck(this,b),a=_possibleConstructorReturn(this,_getPrototypeOf(b).call(this,c,d)),a.listenersBound=!1,a.eventOptions={ignoreEventsCondition:Configuration.option("ignoreEventsCondition")},a.listeners={},a}return _inherits(b,a),_createClass(b,[{key:"enableHotKeys",value:function f(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},d=3<arguments.length?arguments[3]:void 0,e=4<arguments.length?arguments[4]:void 0;this.eventOptions=e,this._addComponent(a,b,c,d),this._updateDocumentHandlers(),this._initHandlerResolutionState(),void 0;}},{key:"updateEnabledHotKeys",value:function f(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},d=3<arguments.length?arguments[3]:void 0,e=4<arguments.length?arguments[4]:void 0;this.eventOptions=e,this.componentList.update(a,b,c,d),this.getKeyHistory().setMaxLength(this.componentList.getLongestSequence()),this._updateDocumentHandlers(),this._initHandlerResolutionState(),void 0;}},{key:"disableHotKeys",value:function b(a){this.componentList.remove(a),this.getKeyHistory().setMaxLength(this.componentList.getLongestSequence()),this._updateDocumentHandlers(),this._initHandlerResolutionState(),void 0;}},{key:"_updateDocumentHandlers",value:function c(){var a=this,b=this._listenersShouldBeBound();!this.listenersBound&&b?(Object.values(KeyEventType).forEach(function(b){var c=describeKeyEventType(b);document["on".concat(c)]=function(b){a.keyEventManager["handleGlobal".concat(normalizeEventName(c))](b);},void 0;}),this.listenersBound=!0):this.listenersBound&&!b&&(Object.values(KeyEventType).forEach(function(b){var c=describeKeyEventType(b);delete document["on".concat(c)],void 0;}),this.listenersBound=!1);}},{key:"_listenersShouldBeBound",value:function a(){return this.componentList.any()||this.listeners.keyCombination}},{key:"handleKeydown",value:function f(a){var b=getKeyName(a);if(a.repeat&&Configuration.option("ignoreRepeatedEventsWhenKeyHeldDown"))return !0;this._checkForModifierFlagDiscrepancies(a,b,KeyEventType.keydown);var c=this._howReactAppRespondedTo(a,b,KeyEventType.keydown);if(c===EventResponse.unseen&&this.eventOptions.ignoreEventsCondition(a))return void void 0;if(c!==EventResponse.ignored){var d=stateFromEvent(a),e=this.getCurrentCombination();e.isKeyIncluded(b)||e.isEnding()?this._startAndLogNewKeyCombination(b,d):this._addToAndLogCurrentKeyCombination(b,KeyEventType.keydown,d);}contains([EventResponse.ignored,EventResponse.handled],c)||this._callHandlerIfExists(a,b,KeyEventType.keydown),this._simulateKeyPressForNonPrintableKeys(a,b);}},{key:"_howReactAppRespondedTo",value:function e(a,b,c){var d=this.keyEventManager.reactAppHistoryWithEvent(b,c);return d===EventResponse.handled?void 0:d===EventResponse.ignored?void 0:d===EventResponse.seen?void 0:(KeyEventCounter.incrementId(),void 0),d}},{key:"handleKeyPress",value:function e(a){var b=getKeyName(a);if(a.repeat&&Configuration.option("ignoreRepeatedEventsWhenKeyHeldDown"))return !0;var c=this.getCurrentCombination();if(c.isKeyPressSimulated(b))return !0;var d=this._howReactAppRespondedTo(a,b,KeyEventType.keypress);return c.isKeyIncluded(b)&&this._addToAndLogCurrentKeyCombination(b,KeyEventType.keypress,stateFromEvent(a)),d===EventResponse.unseen&&(this.keyEventManager.closeHangingKeyCombination(b,KeyEventType.keypress),this.eventOptions.ignoreEventsCondition(a))?void void 0:void(!contains([EventResponse.ignored,EventResponse.handled],d)&&this._callHandlerIfExists(a,b,KeyEventType.keypress))}},{key:"handleKeyUp",value:function e(a){var b=getKeyName(a),c=this.getCurrentCombination();if(c.isKeyUpSimulated(b))return !0;var d=this._howReactAppRespondedTo(a,b,KeyEventType.keyup);c.isKeyIncluded(b)&&this._addToAndLogCurrentKeyCombination(b,KeyEventType.keyup,stateFromEvent(a)),d===EventResponse.unseen?(this.keyEventManager.closeHangingKeyCombination(b,KeyEventType.keyup),this.eventOptions.ignoreEventsCondition(a)?void 0:!contains([EventResponse.ignored,EventResponse.handled],d)&&this._callHandlerIfExists(a,b,KeyEventType.keyup)):!contains([EventResponse.ignored,EventResponse.handled],d)&&this._callHandlerIfExists(a,b,KeyEventType.keyup),this._simulateKeyUpEventsHiddenByCmd(a,b),this.listeners.keyCombination&&this._allKeysAreReleased()&&this.listeners.keyCombination({keys:c.getKeyDictionary(),id:c.describe()});}},{key:"_simulateKeyPressForNonPrintableKeys",value:function c(a,b){this.keyEventManager.simulatePendingKeyPressEvents(),this._handleEventSimulation("handleKeyPress",this._shouldSimulate(KeyEventType.keypress,b),{event:a,key:b});}},{key:"_simulateKeyUpEventsHiddenByCmd",value:function d(a,b){var c=this;isCmdKey(b)&&(this.keyEventManager.simulatePendingKeyUpEvents(),this.getCurrentCombination().forEachKey(function(b){isCmdKey(b)||c._handleEventSimulation("handleKeyUp",c._shouldSimulate(KeyEventType.keyup,b),{event:a,key:b});}));}},{key:"_startAndLogNewKeyCombination",value:function c(a,b){this.getKeyHistory().startNewKeyCombination(a,b),void 0;}},{key:"_addToAndLogCurrentKeyCombination",value:function d(a,b,c){this.getKeyHistory().addKeyToCurrentCombination(a,b,c),void 0;}},{key:"_handleEventSimulation",value:function f(a,b,c){var d=c.event,e=c.key;if(b&&Configuration.option("simulateMissingKeyPressEvents")){var g=this._cloneAndMergeEvent(d,{key:e,simulated:!0});this[a](g);}}},{key:"_callHandlerIfExists",value:function f(a,b,c){var e=this.getCurrentCombination().describe();return this.componentList.anyActionsForEventType(c)?void(this._callClosestMatchingHandler(a,b,c)):void void 0}},{key:"_callClosestMatchingHandler",value:function e(a,c,d){for(var f,g=this.componentList.getNewIterator();g.next();)if(f=_get(_getPrototypeOf(b.prototype),"_callClosestMatchingHandler",this).call(this,a,c,d,g.getPosition(),0),f)return void void 0}},{key:"_stopEventPropagation",value:function c(a,b){a.simulated||a.stopPropagation();}},{key:"addKeyCombinationListener",value:function d(a){var b=this,c=function(){delete b.listeners.keyCombination;};return this.listeners.keyCombination=function(b){a(b),c();},this._updateDocumentHandlers(),c}},{key:"_logPrefix",value:function f(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=Logger.eventIcons,d=Logger.componentIcons,e="HotKeys (GLOBAL";if(!1!==b.eventId){var g=isUndefined(b.eventId)?KeyEventCounter.getId():b.eventId;e="".concat(e,"-E").concat(g).concat(c[g%c.length]);}return isUndefined(a)?"".concat(e,"):"):"".concat(e,"-C").concat(a).concat(d[a%d.length],"):")}}]),b}(AbstractKeyEventStrategy);

function isFromFocusOnlyComponent(a){return !isUndefined(a)}

var KeyEventManager=function(){function a(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};_classCallCheck(this,a),this.logger=b.logger||new Logger(Configuration.option("logLevel")),this._focusOnlyEventStrategy=new FocusOnlyKeyEventStrategy({configuration:b,logger:this.logger},this),this._globalEventStrategy=new GlobalKeyEventStrategy({configuration:b,logger:this.logger},this),this.mountedComponentsCount=0;}return _createClass(a,null,[{key:"getInstance",value:function c(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this.instance||(this.instance=new a(b)),this.instance}},{key:"clear",value:function a(){delete this.instance;}}]),_createClass(a,[{key:"getApplicationKeyMap",value:function a(){return Object.assign(this._globalEventStrategy.getApplicationKeyMap(),this._focusOnlyEventStrategy.getApplicationKeyMap())}},{key:"registerKeyMap",value:function b(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this._focusOnlyEventStrategy.registerKeyMap(a)}},{key:"reregisterKeyMap",value:function c(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};this._focusOnlyEventStrategy.reregisterKeyMap(a,b);}},{key:"deregisterKeyMap",value:function b(a){this._focusOnlyEventStrategy.deregisterKeyMap(a);}},{key:"registerComponentMount",value:function c(a,b){return this._incrementComponentCount(),this._focusOnlyEventStrategy.registerComponentMount(a,b)}},{key:"registerComponentUnmount",value:function a(){this._decrementComponentCount();}},{key:"_incrementComponentCount",value:function c(){var a=this,b=this.mountedComponentsCount;this.mountedComponentsCount+=1,0===b&&1===this.mountedComponentsCount&&(window.onblur=function(){return a._clearKeyHistory()});}},{key:"_decrementComponentCount",value:function b(){var a=this.mountedComponentsCount;this.mountedComponentsCount-=1,1===a&&0===this.mountedComponentsCount&&delete window.onblur;}},{key:"_clearKeyHistory",value:function a(){this._focusOnlyEventStrategy.resetKeyHistory({force:!0}),this._globalEventStrategy.resetKeyHistory({force:!0});}},{key:"registerGlobalKeyMap",value:function b(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this._globalEventStrategy.registerKeyMap(a)}},{key:"registerGlobalComponentUnmount",value:function a(){this._decrementComponentCount();}},{key:"registerGlobalComponentMount",value:function c(a,b){return this._incrementComponentCount(),this._globalEventStrategy.registerComponentMount(a,b)}},{key:"reregisterGlobalKeyMap",value:function c(a,b){this._globalEventStrategy.reregisterKeyMap(a,b);}},{key:"deregisterGlobalKeyMap",value:function b(a){this._globalEventStrategy.deregisterKeyMap(a);}},{key:"addKeyCombinationListener",value:function b(a){return this._globalEventStrategy.addKeyCombinationListener(a)}},{key:"enableHotKeys",value:function e(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},d=3<arguments.length?arguments[3]:void 0;return this._focusOnlyEventStrategy.enableHotKeys(a,b,c,d)}},{key:"updateEnabledHotKeys",value:function f(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},e=4<arguments.length?arguments[4]:void 0;return this._focusOnlyEventStrategy.updateEnabledHotKeys(a,b,c,d,e)}},{key:"disableHotKeys",value:function c(a,b){return this._focusOnlyEventStrategy.disableHotKeys(a,b)}},{key:"handleKeydown",value:function e(a,b,c,d){if(isFromFocusOnlyComponent(b))return this._focusOnlyEventStrategy.handleKeydown(a,b,c,d)}},{key:"handleKeyPress",value:function e(a,b,c,d){if(isFromFocusOnlyComponent(b))return this._focusOnlyEventStrategy.handleKeyPress(a,b,c,d)}},{key:"handleKeyUp",value:function e(a,b,c,d){if(isFromFocusOnlyComponent(b))return this._focusOnlyEventStrategy.handleKeyUp(a,b,c,d)}},{key:"enableGlobalHotKeys",value:function f(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},d=3<arguments.length?arguments[3]:void 0,e=4<arguments.length?arguments[4]:void 0;return this._globalEventStrategy.enableHotKeys(a,b,c,d,e)}},{key:"updateEnabledGlobalHotKeys",value:function f(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},d=3<arguments.length?arguments[3]:void 0,e=4<arguments.length?arguments[4]:void 0;return this._globalEventStrategy.updateEnabledHotKeys(a,b,c,d,e)}},{key:"disableGlobalHotKeys",value:function b(a){return this._globalEventStrategy.disableHotKeys(a)}},{key:"handleGlobalKeyDown",value:function b(a){return this._globalEventStrategy.handleKeydown(a)}},{key:"handleGlobalKeyPress",value:function b(a){return this._globalEventStrategy.handleKeyPress(a)}},{key:"handleGlobalKeyUp",value:function b(a){return this._globalEventStrategy.handleKeyUp(a)}},{key:"ignoreEvent",value:function b(a){this._focusOnlyEventStrategy.getEventPropagator().ignoreEvent(a);}},{key:"observeIgnoredEvents",value:function b(a){this._focusOnlyEventStrategy.getEventPropagator().observeIgnoredEvents(a);}},{key:"closeHangingKeyCombination",value:function c(a,b){this._focusOnlyEventStrategy.closeHangingKeyCombination(a,b);}},{key:"reactAppHistoryWithEvent",value:function d(a,b){var c=this._focusOnlyEventStrategy.eventPropagator.getPreviousPropagation();return c.isForKey(a)&&c.isForEventType(b)?c.isHandled()?EventResponse.handled:c.isIgnoringEvent()?EventResponse.ignored:EventResponse.seen:EventResponse.unseen}},{key:"simulatePendingKeyPressEvents",value:function a(){this._focusOnlyEventStrategy.simulatePendingKeyPressEvents();}},{key:"simulatePendingKeyUpEvents",value:function a(){this._focusOnlyEventStrategy.simulatePendingKeyUpEvents();}},{key:"isGlobalListenersBound",value:function a(){return this._globalEventStrategy.listenersBound}}]),a}();

function backwardsCompatibleContext(a,b){var c=b.deprecatedAPI,d=c.contextTypes,e=c.childContextTypes,f=b.newAPI.contextType;if("undefined"==typeof React.createContext)a.contextTypes=d,a.childContextTypes=e,a.prototype.getChildContext=function(){return this._childContext};else{var g=React.createContext(f);a.contextType=g,a.prototype._originalRender=a.prototype.render,a.prototype.render=function(){var a=this._originalRender();return a?React.createElement(g.Provider,{value:this._childContext},a):null};}return a}

function withHotKeys(a){function b(a,b){return _objectSpread({},e[a]||{},b[a]||{})}function c(a){return b("handlers",a)}function d(a){return b("keyMap",a)}var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},f=function(b){function e(a){var b;return _classCallCheck(this,e),b=_possibleConstructorReturn(this,_getPrototypeOf(e).call(this,a)),b._handleFocus=b._handleFocus.bind(_assertThisInitialized(_assertThisInitialized(b))),b._handleBlur=b._handleBlur.bind(_assertThisInitialized(_assertThisInitialized(b))),b._handleKeyDown=b._handleKeyDown.bind(_assertThisInitialized(_assertThisInitialized(b))),b._handleKeyPress=b._handleKeyPress.bind(_assertThisInitialized(_assertThisInitialized(b))),b._handleKeyUp=b._handleKeyUp.bind(_assertThisInitialized(_assertThisInitialized(b))),b._componentIsFocused=b._componentIsFocused.bind(_assertThisInitialized(_assertThisInitialized(b))),b._id=KeyEventManager.getInstance().registerKeyMap(a.keyMap),b._childContext={hotKeysParentId:b._id},b}return _inherits(e,b),_createClass(e,[{key:"render",value:function i(){var b=this.props,c=b.keyMap,d=b.handlers,e=b.allowChanges,f=b.root,g=_objectWithoutProperties(b,["keyMap","handlers","allowChanges","root"]),h={onFocus:this._wrapFunction("onFocus",this._handleFocus),onBlur:this._wrapFunction("onBlur",this._handleBlur),tabIndex:Configuration.option("defaultTabIndex")};return this._shouldBindKeyListeners()&&(h.onKeyDown=this._handleKeyDown,h.onKeyPress=this._handleKeyPress,h.onKeyUp=this._handleKeyUp),React.createElement(a,_extends({hotKeys:h},g))}},{key:"_shouldBindKeyListeners",value:function b(){var a=d(this.props);return !isEmpty(a)||this.props.root||Configuration.option("enableHardSequences")&&this._handlersIncludeHardSequences(a,c(this.props))}},{key:"_handlersIncludeHardSequences",value:function c(a,b){return Object.keys(b).some(function(b){return !a[b]&&KeyCombinationSerializer.isValidKeySerialization(b)})}},{key:"_wrapFunction",value:function d(a,b){var c=this;return "function"==typeof this.props[a]?function(d){c.props[a](d),b(d);}:b}},{key:"_focusTreeIdsPush",value:function b(a){this._focusTreeIds||(this._focusTreeIds=[]),this._focusTreeIds.push(a);}},{key:"_focusTreeIdsShift",value:function a(){this._focusTreeIds&&this._focusTreeIds.shift();}},{key:"_getFocusTreeId",value:function a(){if(this._focusTreeIds)return this._focusTreeIds[0]}},{key:"componentDidUpdate",value:function e(){var a=KeyEventManager.getInstance();if(a.reregisterKeyMap(this._id,this.props.keyMap),this._componentIsFocused()&&(this.props.allowChanges||!Configuration.option("ignoreKeymapAndHandlerChangesByDefault"))){var b=this.props,c=b.keyMap,d=b.handlers;a.updateEnabledHotKeys(this._getFocusTreeId(),this._id,c,d,this._getComponentOptions());}}},{key:"_componentIsFocused",value:function a(){return !0===this._focused}},{key:"componentDidMount",value:function c(){var a=KeyEventManager.getInstance(),b=this.context.hotKeysParentId;a.registerComponentMount(this._id,b);}},{key:"_handleFocus",value:function e(){if(this.props.onFocus){var a;(a=this.props).onFocus.apply(a,arguments);}var b=KeyEventManager.getInstance().enableHotKeys(this._id,d(this.props),c(this.props),this._getComponentOptions());isUndefined(b)||this._focusTreeIdsPush(b),this._focused=!0;}},{key:"componentWillUnmount",value:function b(){var a=KeyEventManager.getInstance();a.deregisterKeyMap(this._id),a.registerComponentUnmount(),this._handleBlur();}},{key:"_handleBlur",value:function c(){if(this.props.onBlur){var a;(a=this.props).onBlur.apply(a,arguments);}var b=KeyEventManager.getInstance().disableHotKeys(this._getFocusTreeId(),this._id);b||this._focusTreeIdsShift(),this._focused=!1;}},{key:"_handleKeyDown",value:function c(a){var b=KeyEventManager.getInstance().handleKeydown(a,this._getFocusTreeId(),this._id,this._getEventOptions());b&&this._focusTreeIdsShift();}},{key:"_handleKeyPress",value:function c(a){var b=KeyEventManager.getInstance().handleKeyPress(a,this._getFocusTreeId(),this._id,this._getEventOptions());b&&this._focusTreeIdsShift();}},{key:"_handleKeyUp",value:function c(a){var b=KeyEventManager.getInstance().handleKeyUp(a,this._getFocusTreeId(),this._id,this._getEventOptions());b&&this._focusTreeIdsShift();}},{key:"_getComponentOptions",value:function a(){return {defaultKeyEvent:Configuration.option("defaultKeyEvent")}}},{key:"_getEventOptions",value:function a(){return {ignoreEventsCondition:Configuration.option("ignoreEventsCondition")}}}]),e}(PureComponent);return _defineProperty(f,"propTypes",{keyMap:PropTypes.object,handlers:PropTypes.object,onFocus:PropTypes.func,onBlur:PropTypes.func,allowChanges:PropTypes.bool,root:PropTypes.bool}),backwardsCompatibleContext(f,{deprecatedAPI:{contextTypes:{hotKeysParentId:PropTypes.number},childContextTypes:{hotKeysParentId:PropTypes.number}},newAPI:{contextType:{hotKeysParentId:void 0}}})}

var HotKeysWrapper=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,_getPrototypeOf(b).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:"render",value:function g(){var a=this.props,b=a.hotKeys,c=a.innerRef,d=a.component,e=_objectWithoutProperties(a,["hotKeys","innerRef","component"]),f=d||Configuration.option("defaultComponent");return React.createElement(f,_objectSpread({},b,{ref:c},e))}}]),b}(Component),HotKeys=withHotKeys(HotKeysWrapper);HotKeys.propTypes={innerRef:PropTypes.oneOfType([PropTypes.object,PropTypes.func])};

var GlobalHotKeys=function(a){function b(a){var c;return _classCallCheck(this,b),c=_possibleConstructorReturn(this,_getPrototypeOf(b).call(this,a)),c._id=KeyEventManager.getInstance().registerGlobalKeyMap(a.keyMap),c._childContext={globalHotKeysParentId:c._id},c}return _inherits(b,a),_createClass(b,[{key:"render",value:function a(){return this.props.children||null}},{key:"componentDidUpdate",value:function e(){var a=KeyEventManager.getInstance();if(a.reregisterGlobalKeyMap(this._id,this.props.keyMap),this.props.allowChanges||!Configuration.option("ignoreKeymapAndHandlerChangesByDefault")){var b=this.props,c=b.keyMap,d=b.handlers;a.updateEnabledGlobalHotKeys(this._id,c,d,this._getComponentOptions(),this._getEventOptions());}}},{key:"componentDidMount",value:function f(){var a=this.props,b=a.keyMap,c=a.handlers,d=this.context.globalHotKeysParentId,e=KeyEventManager.getInstance();e.registerGlobalComponentMount(this._id,d),e.enableGlobalHotKeys(this._id,b,c,this._getComponentOptions(),this._getEventOptions());}},{key:"componentWillUnmount",value:function b(){var a=KeyEventManager.getInstance();a.deregisterGlobalKeyMap(this._id),a.disableGlobalHotKeys(this._id),a.registerGlobalComponentUnmount();}},{key:"_getComponentOptions",value:function a(){return {defaultKeyEvent:Configuration.option("defaultKeyEvent")}}},{key:"_getEventOptions",value:function a(){return {ignoreEventsCondition:Configuration.option("ignoreEventsCondition")}}}]),b}(Component);_defineProperty(GlobalHotKeys,"propTypes",{keyMap:PropTypes.object,handlers:PropTypes.object,allowChanges:PropTypes.bool});var GlobalHotKeys$1 = backwardsCompatibleContext(GlobalHotKeys,{deprecatedAPI:{contextTypes:{globalHotKeysParentId:PropTypes.number},childContextTypes:{globalHotKeysParentId:PropTypes.number}},newAPI:{contextType:{globalHotKeysParentId:void 0}}});

function withHotKeysIgnoreOverride(a){var b,c,d=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{only:[],except:[]},e=2<arguments.length?arguments[2]:void 0;return c=b=function(b){function c(a){var b;return _classCallCheck(this,c),b=_possibleConstructorReturn(this,_getPrototypeOf(c).call(this,a)),b._handleKeyEvent=b._handleKeyEvent.bind(_assertThisInitialized(_assertThisInitialized(b))),b._reloadDictionaries=b._reloadDictionaries.bind(_assertThisInitialized(_assertThisInitialized(b))),b}return _inherits(c,b),_createClass(c,[{key:"render",value:function g(){var b=this.props,c=b.only,d=b.except,e=_objectWithoutProperties(b,["only","except"]),f={onKeyDown:this._handleKeyEvent,onKeyPress:this._handleKeyEvent,onKeyUp:this._handleKeyEvent,onFocus:this._reloadDictionaries};return React.createElement(a,_extends({hotKeys:f},e))}},{key:"_reloadDictionaries",value:function d(){var a=this.props,b=a.only,c=a.except;this._onlyDict=keyDictionary(b),this._exceptDict=keyDictionary(c);}},{key:"_shouldIgnoreEvent",value:function c(a){var b=a.key;return isEmpty(this._onlyDict)?!!isEmpty(this._exceptDict)||!hasKey(this._exceptDict,b):isEmpty(this._exceptDict)?hasKey(this._onlyDict,b):hasKey(this._onlyDict,b)&&!hasKey(this._exceptDict,b)}},{key:"_handleKeyEvent",value:function b(a){this._shouldIgnoreEvent(a)&&KeyEventManager.getInstance()[e](a);}}]),c}(PureComponent),_defineProperty(b,"propTypes",{only:PropTypes.oneOfType([PropTypes.string,PropTypes.arrayOf(PropTypes.string)]),except:PropTypes.oneOfType([PropTypes.string,PropTypes.arrayOf(PropTypes.string)])}),_defineProperty(b,"defaultProps",d),c}function keyDictionary(a){return arrayFrom(a).reduce(function(a,b){var c=standardizeKeyName(b);if(!isValidKey(c))throw new InvalidKeyNameError(b);return [resolveAltShiftedAlias,resolveUnaltShiftedAlias,resolveShiftedAlias,resolveUnshiftedAlias,resolveAltedAlias,resolveUnaltedAlias].forEach(function(b){a[b(c)]=!0;}),a},{})}

var IgnoreKeys=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,_getPrototypeOf(b).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:"render",value:function e(){var a=this.props,b=a.hotKeys,c=_objectWithoutProperties(a,["hotKeys"]),d=c.component||Configuration.option("defaultComponent");return React.createElement(d,_objectSpread({},b,c))}}]),b}(Component);var IgnoreKeys$1 = withHotKeysIgnoreOverride(IgnoreKeys,{},"ignoreEvent");

var ObserveKeys=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,_getPrototypeOf(b).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:"render",value:function e(){var a=this.props,b=a.hotKeys,c=_objectWithoutProperties(a,["hotKeys"]),d=c.component||Configuration.option("defaultComponent");return React.createElement(d,_objectSpread({},b,c))}}]),b}(Component);var ObserveKeys$1 = withHotKeysIgnoreOverride(ObserveKeys,{},"observeIgnoredEvents");

function withIgnoreKeys(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{only:[],except:[]};return withHotKeysIgnoreOverride(a,b,"ignoreEvent")}

function withObserveKeys(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{only:[],except:[]};return withHotKeysIgnoreOverride(a,b,"observeIgnoredEvents")}

function configure(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};Configuration.init(a);}

function getApplicationKeyMap(){return KeyEventManager.getInstance().getApplicationKeyMap()}

function recordKeyCombination(a){var b=KeyEventManager.getInstance();return b.addKeyCombinationListener(a)}

export { HotKeys, GlobalHotKeys$1 as GlobalHotKeys, IgnoreKeys$1 as IgnoreKeys, ObserveKeys$1 as ObserveKeys, withHotKeys, withIgnoreKeys, withObserveKeys, configure, getApplicationKeyMap, recordKeyCombination };
