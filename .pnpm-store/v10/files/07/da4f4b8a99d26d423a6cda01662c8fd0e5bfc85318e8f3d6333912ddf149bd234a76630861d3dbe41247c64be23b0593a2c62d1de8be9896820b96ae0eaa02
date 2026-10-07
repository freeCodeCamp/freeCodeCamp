"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDataProps = exports.Browser = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
/////////////////////////////////////////////////////////
// Browser Utils
//
/////////////////////////////////////////////////////////
var Browser = /*#__PURE__*/function () {
  function Browser() {
    (0, _classCallCheck2.default)(this, Browser);
  }
  (0, _createClass2.default)(Browser, null, [{
    key: "isBrowser",
    value:
    // Check if not running on server
    function isBrowser() {
      return typeof window !== 'undefined';
    }

    // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
  }, {
    key: "isOpera",
    value: function isOpera() {
      return Browser.isBrowser() && Browser.getUserAgent().match(/Opera Mini/i);
    }
  }, {
    key: "isFirefox",
    value:
    // Firefox 1.0+
    function isFirefox() {
      return Browser.isBrowser() && typeof InstallTrigger !== 'undefined';
    }

    // Safari 3.0+
  }, {
    key: "isSafari",
    value: function isSafari() {
      if (!Browser.isBrowser()) {
        return false;
      }
      return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    }

    // Internet Explorer 6-11
  }, {
    key: "isIE",
    value: function isIE() {
      /*@cc_on!@*/
      return Browser.isBrowser() && !!document.documentMode;
    }

    // Edge 20+
  }, {
    key: "isEdge",
    value: function isEdge() {
      return Browser.isBrowser() && !Browser.isIE() && !!window.StyleMedia;
    }

    // Chrome 1+
  }, {
    key: "isChrome",
    value: function isChrome() {
      return Browser.isBrowser() && !!window.chrome && !!window.chrome.webstore;
    }

    // Blink engine detection
  }, {
    key: "isBlink",
    value: function isBlink() {
      return Browser.isBrowser() && (Browser.isChrome() || Browser.isOpera()) && !!window.CSS;
    }
  }, {
    key: "getUserAgent",
    value: function getUserAgent() {
      return typeof navigator === 'undefined' ? '' : navigator.userAgent;
    }
  }, {
    key: "isAndroid",
    value: function isAndroid() {
      return Browser.isBrowser() && Browser.getUserAgent().match(/Android/i);
    }
  }, {
    key: "isBlackBerry",
    value: function isBlackBerry() {
      return Browser.isBrowser() && Browser.getUserAgent().match(/BlackBerry/i);
    }
  }, {
    key: "isIOS",
    value: function isIOS() {
      return Browser.isBrowser() && Browser.getUserAgent().match(/iPhone|iPad|iPod/i);
    }
  }, {
    key: "isWindows",
    value: function isWindows() {
      return Browser.isBrowser() && Browser.isWindowsDesktop() || Browser.isWindowsMobile();
    }
  }, {
    key: "isWindowsMobile",
    value: function isWindowsMobile() {
      return Browser.isBrowser() && Browser.getUserAgent().match(/IEMobile/i);
    }
  }, {
    key: "isWindowsDesktop",
    value: function isWindowsDesktop() {
      return Browser.isBrowser() && Browser.getUserAgent().match(/WPDesktop/i);
    }
  }, {
    key: "isMobile",
    value: function isMobile() {
      return Browser.isBrowser() && (Browser.isWindowsMobile() || Browser.isBlackBerry() || Browser.isAndroid() || Browser.isIOS());
    }
  }]);
  return Browser;
}(); /////////////////////////////////////////////////////////
// Returns only the props that start with "data-"
//
/////////////////////////////////////////////////////////
exports.Browser = Browser;
var getDataProps = function getDataProps(props) {
  return Object.keys(props).reduce(function (prev, key) {
    if (key.substr(0, 5) === 'data-') {
      return (0, _objectSpread3.default)({}, prev, (0, _defineProperty2.default)({}, key, props[key]));
    }
    return prev;
  }, {});
};
exports.getDataProps = getDataProps;