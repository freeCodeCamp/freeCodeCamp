Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const api = require('@opentelemetry/api');
const instrumentation = require('@opentelemetry/instrumentation');
const semanticConventions = require('@opentelemetry/semantic-conventions');
const semconv = require('./semconv.js');
const semconvObsolete = require('./semconv-obsolete.js');

const MESSAGE_STORED_SPAN = /* @__PURE__ */ Symbol("opentelemetry.amqplib.message.stored-span");
const CHANNEL_SPANS_NOT_ENDED = /* @__PURE__ */ Symbol("opentelemetry.amqplib.channel.spans-not-ended");
const CHANNEL_CONSUME_TIMEOUT_TIMER = /* @__PURE__ */ Symbol(
  "opentelemetry.amqplib.channel.consumer-timeout-timer"
);
const CONNECTION_ATTRIBUTES = /* @__PURE__ */ Symbol("opentelemetry.amqplib.connection.attributes");
const IS_CONFIRM_CHANNEL_CONTEXT_KEY = api.createContextKey("opentelemetry.amqplib.channel.is-confirm-channel");
const normalizeExchange = (exchangeName) => exchangeName !== "" ? exchangeName : "<default>";
const censorPassword = (url) => {
  return url.replace(/:[^:@/]*@/, ":***@");
};
const getPort = (portFromUrl, resolvedProtocol) => {
  return portFromUrl || (resolvedProtocol === "AMQP" ? 5672 : 5671);
};
const getProtocol = (protocolFromUrl) => {
  const resolvedProtocol = protocolFromUrl || "amqp";
  const noEndingColon = resolvedProtocol.endsWith(":") ? resolvedProtocol.substring(0, resolvedProtocol.length - 1) : resolvedProtocol;
  return noEndingColon.toUpperCase();
};
const getHostname = (hostnameFromUrl) => {
  return hostnameFromUrl || "localhost";
};
const extractConnectionAttributeOrLog = (url, attributeKey, attributeValue, nameForLog) => {
  if (attributeValue) {
    return { [attributeKey]: attributeValue };
  } else {
    api.diag.error(`amqplib instrumentation: could not extract connection attribute ${nameForLog} from user supplied url`, {
      url
    });
    return {};
  }
};
const getConnectionAttributesFromServer = (conn) => {
  const product = conn.serverProperties.product?.toLowerCase?.();
  if (product) {
    return {
      [semconv.ATTR_MESSAGING_SYSTEM]: product
    };
  } else {
    return {};
  }
};
const getConnectionAttributesFromUrl = (url, netSemconvStability) => {
  const attributes = {
    [semconvObsolete.ATTR_MESSAGING_PROTOCOL_VERSION]: "0.9.1"
    // this is the only protocol supported by the instrumented library
  };
  url = url || "amqp://localhost";
  if (typeof url === "object") {
    const connectOptions = url;
    const protocol = getProtocol(connectOptions?.protocol);
    Object.assign(attributes, {
      ...extractConnectionAttributeOrLog(url, semconvObsolete.ATTR_MESSAGING_PROTOCOL, protocol, "protocol")
    });
    const hostname = getHostname(connectOptions?.hostname);
    if (netSemconvStability & instrumentation.SemconvStability.OLD) {
      Object.assign(attributes, {
        ...extractConnectionAttributeOrLog(url, semconv.ATTR_NET_PEER_NAME, hostname, "hostname")
      });
    }
    if (netSemconvStability & instrumentation.SemconvStability.STABLE) {
      Object.assign(attributes, {
        ...extractConnectionAttributeOrLog(url, semanticConventions.ATTR_SERVER_ADDRESS, hostname, "hostname")
      });
    }
    const port = getPort(connectOptions.port, protocol);
    if (netSemconvStability & instrumentation.SemconvStability.OLD) {
      Object.assign(attributes, extractConnectionAttributeOrLog(url, semconv.ATTR_NET_PEER_PORT, port, "port"));
    }
    if (netSemconvStability & instrumentation.SemconvStability.STABLE) {
      Object.assign(attributes, extractConnectionAttributeOrLog(url, semanticConventions.ATTR_SERVER_PORT, port, "port"));
    }
  } else {
    const censoredUrl = censorPassword(url);
    attributes[semconvObsolete.ATTR_MESSAGING_URL] = censoredUrl;
    try {
      const urlParts = new URL(censoredUrl);
      const protocol = getProtocol(urlParts.protocol);
      Object.assign(attributes, {
        ...extractConnectionAttributeOrLog(censoredUrl, semconvObsolete.ATTR_MESSAGING_PROTOCOL, protocol, "protocol")
      });
      const hostname = getHostname(urlParts.hostname);
      if (netSemconvStability & instrumentation.SemconvStability.OLD) {
        Object.assign(attributes, {
          ...extractConnectionAttributeOrLog(censoredUrl, semconv.ATTR_NET_PEER_NAME, hostname, "hostname")
        });
      }
      if (netSemconvStability & instrumentation.SemconvStability.STABLE) {
        Object.assign(attributes, {
          ...extractConnectionAttributeOrLog(censoredUrl, semanticConventions.ATTR_SERVER_ADDRESS, hostname, "hostname")
        });
      }
      const port = getPort(urlParts.port ? parseInt(urlParts.port) : void 0, protocol);
      if (netSemconvStability & instrumentation.SemconvStability.OLD) {
        Object.assign(attributes, extractConnectionAttributeOrLog(censoredUrl, semconv.ATTR_NET_PEER_PORT, port, "port"));
      }
      if (netSemconvStability & instrumentation.SemconvStability.STABLE) {
        Object.assign(attributes, extractConnectionAttributeOrLog(censoredUrl, semanticConventions.ATTR_SERVER_PORT, port, "port"));
      }
    } catch (err) {
      api.diag.error("amqplib instrumentation: error while extracting connection details from connection url", {
        censoredUrl,
        err
      });
    }
  }
  return attributes;
};
const markConfirmChannelTracing = (context) => {
  return context.setValue(IS_CONFIRM_CHANNEL_CONTEXT_KEY, true);
};
const unmarkConfirmChannelTracing = (context) => {
  return context.deleteValue(IS_CONFIRM_CHANNEL_CONTEXT_KEY);
};
const isConfirmChannelTracing = (context) => {
  return context.getValue(IS_CONFIRM_CHANNEL_CONTEXT_KEY) === true;
};

exports.CHANNEL_CONSUME_TIMEOUT_TIMER = CHANNEL_CONSUME_TIMEOUT_TIMER;
exports.CHANNEL_SPANS_NOT_ENDED = CHANNEL_SPANS_NOT_ENDED;
exports.CONNECTION_ATTRIBUTES = CONNECTION_ATTRIBUTES;
exports.MESSAGE_STORED_SPAN = MESSAGE_STORED_SPAN;
exports.getConnectionAttributesFromServer = getConnectionAttributesFromServer;
exports.getConnectionAttributesFromUrl = getConnectionAttributesFromUrl;
exports.isConfirmChannelTracing = isConfirmChannelTracing;
exports.markConfirmChannelTracing = markConfirmChannelTracing;
exports.normalizeExchange = normalizeExchange;
exports.unmarkConfirmChannelTracing = unmarkConfirmChannelTracing;
//# sourceMappingURL=utils.js.map
