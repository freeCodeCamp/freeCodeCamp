import { dsnToString } from '../../utils/dsn.js';
import { getSdkMetadataForEnvelopeHeader, createEnvelope } from '../../utils/envelope.js';
import { isBrowser } from '../../utils/isBrowser.js';

function createStreamedSpanEnvelope(serializedSpans, dsc, client) {
  const options = client.getOptions();
  const dsn = client.getDsn();
  const tunnel = options.tunnel;
  const sdk = getSdkMetadataForEnvelopeHeader(options._metadata);
  const headers = {
    sent_at: (/* @__PURE__ */ new Date()).toISOString(),
    ...dscHasRequiredProps(dsc) && { trace: dsc },
    ...sdk && { sdk },
    ...!!tunnel && dsn && { dsn: dsnToString(dsn) }
  };
  const inferSetting = client.getDataCollectionOptions().userInfo ? "auto" : "never";
  const spanContainer = [
    { type: "span", item_count: serializedSpans.length, content_type: "application/vnd.sentry.items.span.v2+json" },
    {
      version: 2,
      ...isBrowser() && {
        ingest_settings: { infer_ip: inferSetting, infer_user_agent: inferSetting }
      },
      items: serializedSpans
    }
  ];
  return createEnvelope(headers, [spanContainer]);
}
function dscHasRequiredProps(dsc) {
  return !!dsc.trace_id && !!dsc.public_key;
}

export { createStreamedSpanEnvelope };
//# sourceMappingURL=envelope.js.map
