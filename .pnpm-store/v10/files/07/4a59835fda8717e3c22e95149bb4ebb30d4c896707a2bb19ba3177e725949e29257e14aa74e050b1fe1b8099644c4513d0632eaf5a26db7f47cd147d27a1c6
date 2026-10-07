import { DEBUG_BUILD } from '../debug-build.js';
import { debug } from '../utils/debug-logger.js';
import { envelopeContainsItemType } from '../utils/envelope.js';
import { parseRetryAfterHeader } from '../utils/ratelimit.js';
import { safeUnref } from '../utils/timer.js';

const MIN_DELAY = 100;
const START_DELAY = 5e3;
const MAX_DELAY = 36e5;
function makeOfflineTransport(createTransport) {
  function log(...args) {
    DEBUG_BUILD && debug.log("[Offline]:", ...args);
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
      if (envelopeContainsItemType(env, ["client_report"])) {
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
      flushTimer = safeUnref(
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
    async function send(envelope, isRetry = false) {
      if (!isRetry && envelopeContainsItemType(envelope, ["replay_event", "replay_recording"])) {
        await store.push(envelope);
        flushIn(MIN_DELAY);
        return {};
      }
      try {
        if (options.shouldSend && await options.shouldSend(envelope) === false) {
          throw new Error("Envelope not sent because `shouldSend` callback returned false");
        }
        const result = await transport.send(envelope);
        let delay = MIN_DELAY;
        if (result) {
          if (result.headers?.["retry-after"]) {
            delay = parseRetryAfterHeader(result.headers["retry-after"]);
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
        if (await shouldQueue(envelope, e, retryDelay)) {
          if (isRetry) {
            await store.unshift(envelope);
          } else {
            await store.push(envelope);
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

export { MIN_DELAY, START_DELAY, makeOfflineTransport };
//# sourceMappingURL=offline.js.map
