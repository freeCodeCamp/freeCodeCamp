Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const dsn = require('../../utils/dsn.js');
const envelope = require('../../utils/envelope.js');
const isBrowser = require('../../utils/isBrowser.js');

function createStreamedSpanEnvelope(serializedSpans, dsc, client) {
  const options = client.getOptions();
  const dsn$1 = client.getDsn();
  const tunnel = options.tunnel;
  const sdk = envelope.getSdkMetadataForEnvelopeHeader(options._metadata);
  const headers = {
    sent_at: (/* @__PURE__ */ new Date()).toISOString(),
    ...dscHasRequiredProps(dsc) && { trace: dsc },
    ...sdk && { sdk },
    ...!!tunnel && dsn$1 && { dsn: dsn.dsnToString(dsn$1) }
  };
  const inferSetting = client.getDataCollectionOptions().userInfo ? "auto" : "never";
  const spanContainer = [
    { type: "span", item_count: serializedSpans.length, content_type: "application/vnd.sentry.items.span.v2+json" },
    {
      version: 2,
      ...isBrowser.isBrowser() && {
        ingest_settings: { infer_ip: inferSetting, infer_user_agent: inferSetting }
      },
      items: serializedSpans
    }
  ];
  return envelope.createEnvelope(headers, [spanContainer]);
}
function dscHasRequiredProps(dsc) {
  return !!dsc.trace_id && !!dsc.public_key;
}

exports.createStreamedSpanEnvelope = createStreamedSpanEnvelope;
//# sourceMappingURL=envelope.js.map
