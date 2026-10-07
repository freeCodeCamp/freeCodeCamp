Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const debugBuild = require('../debug-build.js');
const integration = require('../integration.js');
const debugLogger = require('../utils/debug-logger.js');
const eventUtils = require('../utils/eventUtils.js');
const misc = require('../utils/misc.js');
const string = require('../utils/string.js');

const DEFAULT_IGNORE_ERRORS = [
  /^Script error\.?$/,
  /^Javascript error: Script error\.? on line 0$/,
  /^ResizeObserver loop completed with undelivered notifications.$/,
  // The browser logs this when a ResizeObserver handler takes a bit longer. Usually this is not an actual issue though. It indicates slowness.
  /^Cannot redefine property: googletag$/,
  // This is thrown when google tag manager is used in combination with an ad blocker
  /^Can't find variable: gmo$/,
  // Error from Google Search App https://issuetracker.google.com/issues/396043331
  /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/,
  // Random error that happens but not actionable or noticeable to end-users.
  /can't redefine non-configurable property "solana"/,
  // Probably a browser extension or custom browser (Brave) throwing this error
  /vv\(\)\.getRestrictions is not a function/,
  // Error thrown by GTM, seemingly not affecting end-users
  /Can't find variable: _AutofillCallbackHandler/,
  // Unactionable error in instagram webview https://developers.facebook.com/community/threads/320013549791141/
  /Object Not Found Matching Id:\d+, MethodName:simulateEvent/,
  // unactionable error from CEFSharp, a .NET library that embeds chromium in .NET apps
  /^Java exception was raised during method invocation$/
  // error from Facebook Mobile browser (https://github.com/getsentry/sentry-javascript/issues/15065)
];
const INTEGRATION_NAME = "EventFilters";
const eventFiltersIntegration = integration.defineIntegration((options = {}) => {
  let mergedOptions;
  return {
    name: INTEGRATION_NAME,
    setup(client) {
      const clientOptions = client.getOptions();
      mergedOptions = _mergeOptions(options, clientOptions);
    },
    processEvent(event, _hint, client) {
      if (!mergedOptions) {
        const clientOptions = client.getOptions();
        mergedOptions = _mergeOptions(options, clientOptions);
      }
      return _shouldDropEvent(event, mergedOptions) ? null : event;
    }
  };
});
const inboundFiltersIntegration = integration.defineIntegration(((options = {}) => {
  return {
    ...eventFiltersIntegration(options),
    name: "InboundFilters"
  };
}));
function _mergeOptions(internalOptions = {}, clientOptions = {}) {
  return {
    allowUrls: [...internalOptions.allowUrls || [], ...clientOptions.allowUrls || []],
    denyUrls: [...internalOptions.denyUrls || [], ...clientOptions.denyUrls || []],
    ignoreErrors: [
      ...internalOptions.ignoreErrors || [],
      ...clientOptions.ignoreErrors || [],
      ...internalOptions.disableErrorDefaults ? [] : DEFAULT_IGNORE_ERRORS
    ],
    ignoreTransactions: [...internalOptions.ignoreTransactions || [], ...clientOptions.ignoreTransactions || []]
  };
}
function _shouldDropEvent(event, options) {
  if (!event.type) {
    if (_isIgnoredError(event, options.ignoreErrors)) {
      debugBuild.DEBUG_BUILD && debugLogger.debug.warn(
        `Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${misc.getEventDescription(event)}`
      );
      return true;
    }
    if (_isUselessError(event)) {
      debugBuild.DEBUG_BUILD && debugLogger.debug.warn(
        `Event dropped due to not having an error message, error type or stacktrace.
Event: ${misc.getEventDescription(
          event
        )}`
      );
      return true;
    }
    if (_isDeniedUrl(event, options.denyUrls)) {
      debugBuild.DEBUG_BUILD && debugLogger.debug.warn(
        `Event dropped due to being matched by \`denyUrls\` option.
Event: ${misc.getEventDescription(
          event
        )}.
Url: ${_getEventFilterUrl(event)}`
      );
      return true;
    }
    if (!_isAllowedUrl(event, options.allowUrls)) {
      debugBuild.DEBUG_BUILD && debugLogger.debug.warn(
        `Event dropped due to not being matched by \`allowUrls\` option.
Event: ${misc.getEventDescription(
          event
        )}.
Url: ${_getEventFilterUrl(event)}`
      );
      return true;
    }
  } else if (event.type === "transaction") {
    if (_isIgnoredTransaction(event, options.ignoreTransactions)) {
      debugBuild.DEBUG_BUILD && debugLogger.debug.warn(
        `Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${misc.getEventDescription(event)}`
      );
      return true;
    }
  }
  return false;
}
function _isIgnoredError(event, ignoreErrors) {
  if (!ignoreErrors?.length) {
    return false;
  }
  return eventUtils.getPossibleEventMessages(event).some((message) => string.stringMatchesSomePattern(message, ignoreErrors));
}
function _isIgnoredTransaction(event, ignoreTransactions) {
  if (!ignoreTransactions?.length) {
    return false;
  }
  const name = event.transaction;
  return name ? string.stringMatchesSomePattern(name, ignoreTransactions) : false;
}
function _isDeniedUrl(event, denyUrls) {
  if (!denyUrls?.length) {
    return false;
  }
  const url = _getEventFilterUrl(event);
  return !url ? false : string.stringMatchesSomePattern(url, denyUrls);
}
function _isAllowedUrl(event, allowUrls) {
  if (!allowUrls?.length) {
    return true;
  }
  const url = _getEventFilterUrl(event);
  return !url ? true : string.stringMatchesSomePattern(url, allowUrls);
}
function _getLastValidUrl(frames = []) {
  for (let i = frames.length - 1; i >= 0; i--) {
    const frame = frames[i];
    if (frame && frame.filename !== "<anonymous>" && frame.filename !== "[native code]") {
      return frame.filename || null;
    }
  }
  return null;
}
function _getEventFilterUrl(event) {
  try {
    const rootException = [...event.exception?.values ?? []].reverse().find((value) => value.mechanism?.parent_id === void 0 && value.stacktrace?.frames?.length);
    const frames = rootException?.stacktrace?.frames;
    return frames ? _getLastValidUrl(frames) : null;
  } catch {
    debugBuild.DEBUG_BUILD && debugLogger.debug.error(`Cannot extract url for event ${misc.getEventDescription(event)}`);
    return null;
  }
}
function _isUselessError(event) {
  if (!event.exception?.values?.length) {
    return false;
  }
  return (
    // No top-level message
    !event.message && // There are no exception values that have a stacktrace, a non-generic-Error type or value
    !event.exception.values.some((value) => value.stacktrace || value.type && value.type !== "Error" || value.value)
  );
}

exports.eventFiltersIntegration = eventFiltersIntegration;
exports.inboundFiltersIntegration = inboundFiltersIntegration;
//# sourceMappingURL=eventFilters.js.map
