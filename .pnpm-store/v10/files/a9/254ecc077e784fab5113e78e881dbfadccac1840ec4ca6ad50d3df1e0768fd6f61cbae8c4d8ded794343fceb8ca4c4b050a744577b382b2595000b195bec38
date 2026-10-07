Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const debugBuild = require('../debug-build.js');
const debugLogger = require('../utils/debug-logger.js');
const envelope = require('../utils/envelope.js');
const ratelimit = require('../utils/ratelimit.js');
const timer = require('../utils/timer.js');

const MIN_DELAY = 100;
const START_DELAY = 5e3;
const MAX_DELAY = 36e5;
function makeOfflineTransport(createTransport) {
  function log(...args) {
    debugBuild.DEBUG_BUILD && debugLogger.debug.log("[Offline]:", ...args);
  }
  return (options) => {
    const transport = createTransport(options);
    if (!options.createStore) {
      throw new Error("No `createStore` function was provided");
    }
    const store = options.createStore(options);
    let retryDelay = START_DELAY;
    let flushTimer;
    function shouldQueue(env, error, retryDelay2) {
      if (envelope.envelopeContainsItemType(env, ["client_report"])) {
        return false;
      }
      if (options.shouldStore) {
        return options.shouldStore(env, error, retryDelay2);
      }
      return true;
    }
    function flushIn(delay) {
      if (flushTimer) {
        clearTimeout(flushTimer);
      }
      flushTimer = timer.safeUnref(
        setTimeout(async () => {
          flushTimer = void 0;
          const found = await store.shift();
          if (found) {
            log("Attempting to send previously queued event");
            found[0].sent_at = (/* @__PURE__ */ new Date()).toISOString();
            void send(found, true).catch((e) => {
              log("Failed to retry sending", e);
            });
          }
        }, delay)
      );
    }
    function flushWithBackOff() {
      if (flushTimer) {
        return;
      }
      flushIn(retryDelay);
      retryDelay = Math.min(retryDelay * 2, MAX_DELAY);
    }
    async function send(envelope$1, isRetry = false) {
      if (!isRetry && envelope.envelopeContainsItemType(envelope$1, ["replay_event", "replay_recording"])) {
        await store.push(envelope$1);
        flushIn(MIN_DELAY);
        return {};
      }
      try {
        if (options.shouldSend && await options.shouldSend(envelope$1) === false) {
          throw new Error("Envelope not sent because `shouldSend` callback returned false");
        }
        const result = await transport.send(envelope$1);
        let delay = MIN_DELAY;
        if (result) {
          if (result.headers?.["retry-after"]) {
            delay = ratelimit.parseRetryAfterHeader(result.headers["retry-after"]);
          } else if (result.headers?.["x-sentry-rate-limits"]) {
            delay = 6e4;
          } else if ((result.statusCode || 0) >= 400) {
            return result;
          }
        }
        flushIn(delay);
        retryDelay = START_DELAY;
        return result;
      } catch (e) {
        if (await shouldQueue(envelope$1, e, retryDelay)) {
          if (isRetry) {
            await store.unshift(envelope$1);
          } else {
            await store.push(envelope$1);
          }
          flushWithBackOff();
          log("Error sending. Event queued.", e);
          return {};
        } else {
          throw e;
        }
      }
    }
    if (options.flushAtStartup) {
      flushWithBackOff();
    }
    return {
      send,
      flush: (timeout) => {
        if (timeout === void 0) {
          retryDelay = START_DELAY;
          flushIn(MIN_DELAY);
        }
        return transport.flush(timeout);
      }
    };
  };
}

exports.MIN_DELAY = MIN_DELAY;
exports.START_DELAY = START_DELAY;
exports.makeOfflineTransport = makeOfflineTransport;
//# sourceMappingURL=offline.js.map
