import { DEBUG_BUILD } from '../debug-build.js';
import { debug } from '../utils/debug-logger.js';
import { forEachEnvelopeItem, envelopeItemTypeToDataCategory, createEnvelope, serializeEnvelope, envelopeContainsItemType } from '../utils/envelope.js';
import { makePromiseBuffer, SENTRY_BUFFER_FULL_ERROR } from '../utils/promisebuffer.js';
import { isRateLimited, updateRateLimits } from '../utils/ratelimit.js';

const DEFAULT_TRANSPORT_BUFFER_SIZE = 64;
function createTransport(options, makeRequest, buffer = makePromiseBuffer(
  options.bufferSize || DEFAULT_TRANSPORT_BUFFER_SIZE
)) {
  let rateLimits = {};
  const flush = (timeout) => buffer.drain(timeout);
  function send(envelope) {
    const filteredEnvelopeItems = [];
    forEachEnvelopeItem(envelope, (item, type) => {
      const dataCategory = envelopeItemTypeToDataCategory(type);
      if (isRateLimited(rateLimits, dataCategory)) {
        options.recordDroppedEvent("ratelimit_backoff", dataCategory);
      } else {
        filteredEnvelopeItems.push(item);
      }
    });
    if (filteredEnvelopeItems.length === 0) {
      return Promise.resolve({});
    }
    const filteredEnvelope = createEnvelope(envelope[0], filteredEnvelopeItems);
    const recordEnvelopeLoss = (reason) => {
      if (envelopeContainsItemType(filteredEnvelope, ["client_report"])) {
        DEBUG_BUILD && debug.warn(`Dropping client report. Will not send outcomes (reason: ${reason}).`);
        return;
      }
      forEachEnvelopeItem(filteredEnvelope, (item, type) => {
        options.recordDroppedEvent(reason, envelopeItemTypeToDataCategory(type));
      });
    };
    const requestTask = () => makeRequest({ body: serializeEnvelope(filteredEnvelope) }).then(
      (response) => {
        if (response.statusCode === 413) {
          DEBUG_BUILD && debug.error(
            "Sentry responded with status code 413. Envelope was discarded due to exceeding size limits."
          );
          recordEnvelopeLoss("send_error");
          return response;
        }
        if (DEBUG_BUILD && response.statusCode !== void 0 && (response.statusCode < 200 || response.statusCode >= 300)) {
          debug.warn(`Sentry responded with status code ${response.statusCode} to sent event.`);
        }
        rateLimits = updateRateLimits(rateLimits, response);
        return response;
      },
      (error) => {
        recordEnvelopeLoss("network_error");
        DEBUG_BUILD && debug.error("Encountered error running transport request:", error);
        throw error;
      }
    );
    return buffer.add(requestTask).then(
      (result) => result,
      (error) => {
        if (error === SENTRY_BUFFER_FULL_ERROR) {
          DEBUG_BUILD && debug.error("Skipped sending event because buffer is full.");
          recordEnvelopeLoss("queue_overflow");
          return Promise.resolve({});
        } else {
          throw error;
        }
      }
    );
  }
  return {
    send,
    flush
  };
}

export { DEFAULT_TRANSPORT_BUFFER_SIZE, createTransport };
//# sourceMappingURL=base.js.map
