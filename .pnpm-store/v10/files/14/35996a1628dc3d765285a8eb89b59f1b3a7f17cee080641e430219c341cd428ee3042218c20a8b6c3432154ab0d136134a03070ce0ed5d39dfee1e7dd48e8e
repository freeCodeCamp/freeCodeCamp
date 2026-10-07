"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var {
  execSync
} = require('child_process');

var OSX_CHROME = 'google chrome';
var Actions = Object.freeze({
  NONE: 0,
  BROWSER: 1
});

var getBrowserEnv = () => {
  // Attempt to honor this environment variable.
  // It is specific to the operating system.
  // See https://github.com/sindresorhus/open#app for documentation.
  var value = process.env.BROWSER;
  var args = process.env.BROWSER_ARGS ? process.env.BROWSER_ARGS.split(' ') : [];
  var action;

  if (!value) {
    // Default.
    action = Actions.BROWSER;
  } else if (value.toLowerCase() === 'none') {
    action = Actions.NONE;
  } else {
    action = Actions.BROWSER;
  }

  return {
    action,
    value,
    args
  };
};

var normalizeURLToMatch = target => {
  // We may encounter URL parse error but want to fallback to default behavior
  try {
    // Url module is deprecated on newer version of NodeJS, only use it when URL class is not supported (like Node 8)
    var URL = // eslint-disable-next-line node/prefer-global/url
    typeof global.URL === 'undefined' ? require('url').URL : global.URL;
    var url = new URL(target);
    return url.origin;
  } catch (_unused) {
    return target;
  }
}; // Copy from
// https://github.com/facebook/create-react-app/blob/master/packages/react-dev-utils/openBrowser.js#L64
// eslint-disable-next-line unicorn/prevent-abbreviations


var startBrowserProcess = function startBrowserProcess(browser, url) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var args = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  // If we're on OS X, the user hasn't specifically
  // requested a different browser, we can try opening
  // Chrome with AppleScript. This lets us reuse an
  // existing tab when possible instead of creating a new one.
  var shouldTryOpenChromiumWithAppleScript = process.platform === 'darwin' && (typeof browser !== 'string' || browser === OSX_CHROME);

  if (shouldTryOpenChromiumWithAppleScript) {
    // Will use the first open browser found from list
    var supportedChromiumBrowsers = ['Google Chrome Canary', 'Google Chrome', 'Microsoft Edge', 'Brave Browser', 'Vivaldi', 'Chromium'];

    for (var chromiumBrowser of supportedChromiumBrowsers) {
      try {
        // Try our best to reuse existing tab
        // on OSX Chromium-based browser with AppleScript
        execSync('ps cax | grep "' + chromiumBrowser + '"');
        execSync("osascript ../openChrome.applescript \"".concat(encodeURI(url), "\" ").concat(process.env.OPEN_MATCH_HOST_ONLY === 'true' ? encodeURI(normalizeURLToMatch(url)) : encodeURI(url), " \"").concat(chromiumBrowser, "\""), {
          cwd: __dirname,
          stdio: 'ignore'
        });
        return Promise.resolve(true); // eslint-disable-next-line no-unused-vars
      } catch (error) {// Ignore errors.
        // It it breaks, it will fallback to `opn` anyway
      }
    }
  } // Another special case: on OS X, check if BROWSER has been set to "open".
  // In this case, instead of passing `open` to `opn` (which won't work),
  // just ignore it (thus ensuring the intended behavior, i.e. opening the system browser):
  // https://github.com/facebook/create-react-app/pull/1690#issuecomment-283518768


  if (process.platform === 'darwin' && browser === 'open') {
    browser = undefined;
  } // If there are arguments, they must be passed as array with the browser


  if (typeof browser === 'string' && args.length > 0) {
    browser = [browser].concat(args);
  } // Fallback to opn
  // (It will always open new tab)


  var options = _objectSpread({
    app: browser,
    url: true,
    wait: false
  }, opts);

  return require('open')(url, options);
};

module.exports = (target, options) => {
  var {
    action,
    value,
    args
  } = getBrowserEnv();

  switch (action) {
    case Actions.NONE:
      // Special case: BROWSER="none" will prevent opening completely.
      return false;

    case Actions.BROWSER:
      return startBrowserProcess(value, target, options, args);

    default:
      throw new Error('Not implemented.');
  }
};