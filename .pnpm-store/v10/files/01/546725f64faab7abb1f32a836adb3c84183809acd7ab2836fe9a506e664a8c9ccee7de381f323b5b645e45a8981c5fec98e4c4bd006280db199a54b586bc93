Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const dsn = require('../utils/dsn.js');
const envelope = require('../utils/envelope.js');
const isBrowser = require('../utils/isBrowser.js');

function createMetricContainerEnvelopeItem(items, inferUserData) {
  const inferSetting = inferUserData ? "auto" : "never";
  return [
    {
      type: "trace_metric",
      item_count: items.length,
      content_type: "application/vnd.sentry.items.trace-metric+json"
    },
    {
      version: 2,
      ...isBrowser.isBrowser() && {
        ingest_settings: { infer_ip: inferSetting, infer_user_agent: inferSetting }
      },
      items
    }
  ];
}
function createMetricEnvelope(metrics, metadata, tunnel, dsn$1, inferUserData) {
  const headers = {};
  if (metadata?.sdk) {
    headers.sdk = {
      name: metadata.sdk.name,
      version: metadata.sdk.version
    };
  }
  if (!!tunnel && !!dsn$1) {
    headers.dsn = dsn.dsnToString(dsn$1);
  }
  return envelope.createEnvelope(headers, [createMetricContainerEnvelopeItem(metrics, inferUserData)]);
}

exports.createMetricContainerEnvelopeItem = createMetricContainerEnvelopeItem;
exports.createMetricEnvelope = createMetricEnvelope;
//# sourceMappingURL=envelope.js.map
