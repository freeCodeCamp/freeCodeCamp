import _objectSpread from "@babel/runtime/helpers/objectSpread";
/////////////////////////////////////////////////////////
// Browser Utils
//
/////////////////////////////////////////////////////////
class Browser {
  // Check if not running on server
  static isBrowser() {
    return typeof window !== 'undefined';
  }

  // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
  static isOpera() {
    return Browser.isBrowser() && (!!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0);
  }

  // Firefox 1.0+
  static isFirefox() {
    return Browser.isBrowser() && typeof InstallTrigger !== 'undefined';
  }

  // Safari 3.0+
  static isSafari() {
    if (!Browser.isBrowser()) {
      return false;
    }
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }

  // Internet Explorer 6-11
  static isIE() {
    /*@cc_on!@*/
    return Browser.isBrowser() && !!document.documentMode;
  }

  // Edge 20+
  static isEdge() {
    return Browser.isBrowser() && !Browser.isIE() && !!window.StyleMedia;
  }

  // Chrome 1+
  static isChrome() {
    return Browser.isBrowser() && !!window.chrome && !!window.chrome.webstore;
  }

  // Blink engine detection
  static isBlink() {
    return Browser.isBrowser() && (Browser.isChrome() || Browser.isOpera()) && !!window.CSS;
  }
  static getUserAgent() {
    return typeof navigator === 'undefined' ? '' : navigator.userAgent;
  }
  static isAndroid() {
    return Browser.isBrowser() && Browser.getUserAgent().match(/Android/i);
  }
  static isBlackBerry() {
    return Browser.isBrowser() && Browser.getUserAgent().match(/BlackBerry/i);
  }
  static isIOS() {
    return Browser.isBrowser() && Browser.getUserAgent().match(/iPhone|iPad|iPod/i);
  }
  static isOpera() {
    return Browser.isBrowser() && Browser.getUserAgent().match(/Opera Mini/i);
  }
  static isWindows() {
    return Browser.isBrowser() && Browser.isWindowsDesktop() || Browser.isWindowsMobile();
  }
  static isWindowsMobile() {
    return Browser.isBrowser() && Browser.getUserAgent().match(/IEMobile/i);
  }
  static isWindowsDesktop() {
    return Browser.isBrowser() && Browser.getUserAgent().match(/WPDesktop/i);
  }
  static isMobile() {
    return Browser.isBrowser() && (Browser.isWindowsMobile() || Browser.isBlackBerry() || Browser.isAndroid() || Browser.isIOS());
  }
}

/////////////////////////////////////////////////////////
// Returns only the props that start with "data-"
//
/////////////////////////////////////////////////////////
const getDataProps = props => {
  return Object.keys(props).reduce((prev, key) => {
    if (key.substr(0, 5) === 'data-') {
      return _objectSpread({}, prev, {
        [key]: props[key]
      });
    }
    return prev;
  }, {});
};
export { getDataProps, Browser };