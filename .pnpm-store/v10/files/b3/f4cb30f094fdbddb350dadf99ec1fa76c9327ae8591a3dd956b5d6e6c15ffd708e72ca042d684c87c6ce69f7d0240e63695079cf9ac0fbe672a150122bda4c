Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const api = require('../api.js');
const dsn = require('../utils/dsn.js');
const envelope = require('../utils/envelope.js');

const MULTIPLEXED_TRANSPORT_EXTRA_KEY = "MULTIPLEXED_TRANSPORT_EXTRA_KEY";
function eventFromEnvelope(env, types) {
  let event;
  envelope.forEachEnvelopeItem(env, (item, type) => {
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
function overrideDsn(envelope$1, dsn) {
  return envelope.createEnvelope(
    dsn ? {
      ...envelope$1[0],
      dsn
    } : envelope$1[0],
    envelope$1[1]
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
    function getTransport(dsn$1, release) {
      const key = release ? `${dsn$1}:${release}` : dsn$1;
      let transport = otherTransports.get(key);
      if (!transport) {
        const validatedDsn = dsn.dsnFromString(dsn$1);
        if (!validatedDsn) {
          return void 0;
        }
        const url = api.getEnvelopeEndpointWithUrlEncodedAuth(validatedDsn, options.tunnel);
        transport = release ? makeOverrideReleaseTransport(createTransport, release)({ ...options, url }) : createTransport({ ...options, url });
        otherTransports.set(key, transport);
      }
      return [dsn$1, transport];
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

exports.MULTIPLEXED_TRANSPORT_EXTRA_KEY = MULTIPLEXED_TRANSPORT_EXTRA_KEY;
exports.eventFromEnvelope = eventFromEnvelope;
exports.makeMultiplexedTransport = makeMultiplexedTransport;
//# sourceMappingURL=multiplexed.js.map
