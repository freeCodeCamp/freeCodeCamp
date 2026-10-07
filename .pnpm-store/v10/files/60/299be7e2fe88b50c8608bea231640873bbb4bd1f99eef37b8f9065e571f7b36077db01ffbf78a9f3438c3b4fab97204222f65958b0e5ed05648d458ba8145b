import { getEnvelopeEndpointWithUrlEncodedAuth } from '../api.js';
import { dsnFromString } from '../utils/dsn.js';
import { createEnvelope, forEachEnvelopeItem } from '../utils/envelope.js';

const MULTIPLEXED_TRANSPORT_EXTRA_KEY = "MULTIPLEXED_TRANSPORT_EXTRA_KEY";
function eventFromEnvelope(env, types) {
  let event;
  forEachEnvelopeItem(env, (item, type) => {
    if (types.includes(type)) {
      event = Array.isArray(item) ? item[1] : void 0;
    }
    return !!event;
  });
  return event;
}
function makeOverrideReleaseTransport(createTransport, release) {
  return (options) => {
    const transport = createTransport(options);
    return {
      ...transport,
      send: async (envelope) => {
        const event = eventFromEnvelope(envelope, ["event", "transaction", "profile", "replay_event"]);
        if (event) {
          event.release = release;
        }
        return transport.send(envelope);
      }
    };
  };
}
function overrideDsn(envelope, dsn) {
  return createEnvelope(
    dsn ? {
      ...envelope[0],
      dsn
    } : envelope[0],
    envelope[1]
  );
}
function makeMultiplexedTransport(createTransport, matcher) {
  return (options) => {
    const fallbackTransport = createTransport(options);
    const otherTransports = /* @__PURE__ */ new Map();
    const actualMatcher = matcher || ((args) => {
      const event = args.getEvent();
      if (event?.extra?.[MULTIPLEXED_TRANSPORT_EXTRA_KEY] && Array.isArray(event.extra[MULTIPLEXED_TRANSPORT_EXTRA_KEY])) {
        return event.extra[MULTIPLEXED_TRANSPORT_EXTRA_KEY];
      }
      return [];
    });
    function getTransport(dsn, release) {
      const key = release ? `${dsn}:${release}` : dsn;
      let transport = otherTransports.get(key);
      if (!transport) {
        const validatedDsn = dsnFromString(dsn);
        if (!validatedDsn) {
          return void 0;
        }
        const url = getEnvelopeEndpointWithUrlEncodedAuth(validatedDsn, options.tunnel);
        transport = release ? makeOverrideReleaseTransport(createTransport, release)({ ...options, url }) : createTransport({ ...options, url });
        otherTransports.set(key, transport);
      }
      return [dsn, transport];
    }
    async function send(envelope) {
      function getEvent(types) {
        const eventTypes = types?.length ? types : ["event"];
        return eventFromEnvelope(envelope, eventTypes);
      }
      const transports = actualMatcher({ envelope, getEvent }).map((result) => {
        if (typeof result === "string") {
          return getTransport(result, void 0);
        } else {
          return getTransport(result.dsn, result.release);
        }
      }).filter((t) => !!t);
      const transportsWithFallback = transports.length ? transports : [["", fallbackTransport]];
      const results = await Promise.all(
        transportsWithFallback.map(([dsn, transport]) => transport.send(overrideDsn(envelope, dsn)))
      );
      return results[0];
    }
    async function flush(timeout) {
      const allTransports = [...otherTransports.values(), fallbackTransport];
      const results = await Promise.all(allTransports.map((transport) => transport.flush(timeout)));
      return results.every((r) => r);
    }
    return {
      send,
      flush
    };
  };
}

export { MULTIPLEXED_TRANSPORT_EXTRA_KEY, eventFromEnvelope, makeMultiplexedTransport };
//# sourceMappingURL=multiplexed.js.map
