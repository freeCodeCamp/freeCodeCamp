Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const is = require('./is.js');
const misc = require('./misc.js');
const normalize = require('./normalize.js');
const object = require('./object.js');

function parseStackFrames(stackParser, error) {
  return stackParser(error.stack || "", 1);
}
function hasSentryFetchUrlHost(error) {
  return is.isError(error) && "__sentry_fetch_url_host__" in error && typeof error.__sentry_fetch_url_host__ === "string";
}
function _enhanceErrorWithSentryInfo(error) {
  if (hasSentryFetchUrlHost(error)) {
    return `${error.message} (${error.__sentry_fetch_url_host__})`;
  }
  return error.message;
}
function exceptionFromError(stackParser, error) {
  const exception = {
    type: error.name || error.constructor.name,
    value: _enhanceErrorWithSentryInfo(error)
  };
  const frames = parseStackFrames(stackParser, error);
  if (frames.length) {
    exception.stacktrace = { frames };
  }
  return exception;
}
function getErrorPropertyFromObject(obj) {
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      const value = obj[prop];
      if (value instanceof Error) {
        return value;
      }
    }
  }
  return void 0;
}
function getMessageForObject(exception) {
  if ("name" in exception && typeof exception.name === "string") {
    let message = `'${exception.name}' captured as exception`;
    if ("message" in exception && typeof exception.message === "string") {
      message += ` with message '${exception.message}'`;
    }
    return message;
  } else if ("message" in exception && typeof exception.message === "string") {
    return exception.message;
  }
  const keys = object.extractExceptionKeysForMessage(exception);
  if (is.isErrorEvent(exception)) {
    return `Event \`ErrorEvent\` captured as exception with message \`${exception.message}\``;
  }
  const className = getObjectClassName(exception);
  return `${className && className !== "Object" ? `'${className}'` : "Object"} captured as exception with keys: ${keys}`;
}
function getObjectClassName(obj) {
  try {
    const prototype = Object.getPrototypeOf(obj);
    return prototype ? prototype.constructor.name : void 0;
  } catch {
  }
}
function getException(client, mechanism, exception, hint) {
  if (is.isError(exception)) {
    return [exception, void 0];
  }
  mechanism.synthetic = true;
  if (is.isPlainObject(exception)) {
    const normalizeDepth = client?.getOptions().normalizeDepth;
    const extras = { ["__serialized__"]: normalize.normalizeToSize(exception, normalizeDepth) };
    const errorFromProp = getErrorPropertyFromObject(exception);
    if (errorFromProp) {
      return [errorFromProp, extras];
    }
    const message = getMessageForObject(exception);
    const ex2 = hint?.syntheticException || new Error(message);
    ex2.message = message;
    return [ex2, extras];
  }
  const ex = hint?.syntheticException || new Error(exception);
  ex.message = `${exception}`;
  return [ex, void 0];
}
function eventFromUnknownInput(client, stackParser, exception, hint) {
  const providedMechanism = hint?.data && hint.data.mechanism;
  const mechanism = providedMechanism || {
    handled: true,
    type: "generic"
  };
  const [ex, extras] = getException(client, mechanism, exception, hint);
  const event = {
    exception: {
      values: [exceptionFromError(stackParser, ex)]
    }
  };
  if (extras) {
    event.extra = extras;
  }
  misc.addExceptionTypeValue(event, void 0, void 0);
  misc.addExceptionMechanism(event, mechanism);
  return {
    ...event,
    event_id: hint?.event_id
  };
}
function eventFromMessage(stackParser, message, level = "info", hint, attachStacktrace) {
  const event = {
    event_id: hint?.event_id,
    level
  };
  if (attachStacktrace && hint?.syntheticException) {
    const frames = parseStackFrames(stackParser, hint.syntheticException);
    if (frames.length) {
      event.exception = {
        values: [
          {
            value: message,
            stacktrace: { frames }
          }
        ]
      };
      misc.addExceptionMechanism(event, { synthetic: true });
    }
  }
  if (is.isParameterizedString(message)) {
    const { __sentry_template_string__, __sentry_template_values__ } = message;
    event.logentry = {
      message: __sentry_template_string__,
      params: __sentry_template_values__
    };
    return event;
  }
  event.message = message;
  return event;
}

exports._enhanceErrorWithSentryInfo = _enhanceErrorWithSentryInfo;
exports.eventFromMessage = eventFromMessage;
exports.eventFromUnknownInput = eventFromUnknownInput;
exports.exceptionFromError = exceptionFromError;
exports.parseStackFrames = parseStackFrames;
//# sourceMappingURL=eventbuilder.js.map
