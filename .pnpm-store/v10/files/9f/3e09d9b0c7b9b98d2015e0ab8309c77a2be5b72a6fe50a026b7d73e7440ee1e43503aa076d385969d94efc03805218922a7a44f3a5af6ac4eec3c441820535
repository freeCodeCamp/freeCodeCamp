import { defineIntegration, getClient, withActiveSpan, consoleSandbox, captureException, isMatchingPattern } from '@sentry/core';
import { logAndExitProcess } from '../utils/errorhandling.js';

const INTEGRATION_NAME = "OnUnhandledRejection";
const DEFAULT_IGNORES = [
  {
    name: "AI_NoOutputGeneratedError"
    // When stream aborts in Vercel AI SDK V5, Vercel flush() fails with an error
  },
  {
    name: "AbortError"
    // When stream aborts in Vercel AI SDK V6
  }
];
const _onUnhandledRejectionIntegration = ((options = {}) => {
  const opts = {
    mode: options.mode ?? "warn",
    ignore: [...DEFAULT_IGNORES, ...options.ignore ?? []]
  };
  return {
    name: INTEGRATION_NAME,
    setup(client) {
      global.process.on("unhandledRejection", makeUnhandledPromiseHandler(client, opts));
    }
  };
});
const onUnhandledRejectionIntegration = defineIntegration(_onUnhandledRejectionIntegration);
function extractErrorInfo(reason) {
  if (typeof reason !== "object" || reason === null) {
    return { name: "", message: String(reason ?? "") };
  }
  const errorLike = reason;
  const name = typeof errorLike.name === "string" ? errorLike.name : "";
  const message = typeof errorLike.message === "string" ? errorLike.message : String(reason);
  return { name, message };
}
function isMatchingReason(matcher, errorInfo) {
  const nameMatches = matcher.name === void 0 || isMatchingPattern(errorInfo.name, matcher.name, true);
  const messageMatches = matcher.message === void 0 || isMatchingPattern(errorInfo.message, matcher.message);
  return nameMatches && messageMatches;
}
function matchesIgnore(list, reason) {
  const errorInfo = extractErrorInfo(reason);
  return list.some((matcher) => isMatchingReason(matcher, errorInfo));
}
function makeUnhandledPromiseHandler(client, options) {
  return function sendUnhandledPromise(reason, _promise) {
    if (getClient() !== client) {
      return;
    }
    if (matchesIgnore(options.ignore ?? [], reason)) {
      return;
    }
    const level = options.mode === "strict" ? "fatal" : "error";
    const activeSpanForError = reason && typeof reason === "object" ? reason._sentry_active_span : void 0;
    const activeSpanWrapper = activeSpanForError ? (fn) => withActiveSpan(activeSpanForError, fn) : (fn) => fn();
    activeSpanWrapper(() => {
      captureException(reason, {
        originalException: reason,
        captureContext: {
          extra: { unhandledPromiseRejection: true },
          level
        },
        mechanism: {
          handled: false,
          type: "auto.node.onunhandledrejection"
        }
      });
    });
    handleRejection(reason, options.mode);
  };
}
function handleRejection(reason, mode) {
  const rejectionWarning = "This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason:";
  if (mode === "warn") {
    consoleSandbox(() => {
      console.warn(rejectionWarning);
      console.error(reason && typeof reason === "object" && "stack" in reason ? reason.stack : reason);
    });
  } else if (mode === "strict") {
    consoleSandbox(() => {
      console.warn(rejectionWarning);
    });
    logAndExitProcess(reason);
  }
}

export { makeUnhandledPromiseHandler, onUnhandledRejectionIntegration };
//# sourceMappingURL=onunhandledrejection.js.map
