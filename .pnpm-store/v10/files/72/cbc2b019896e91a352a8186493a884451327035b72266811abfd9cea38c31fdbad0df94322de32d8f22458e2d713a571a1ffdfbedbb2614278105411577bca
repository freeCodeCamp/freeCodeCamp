Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const dsn = require('../utils/dsn.js');
const envelope = require('../utils/envelope.js');
const isBrowser = require('../utils/isBrowser.js');

function createLogContainerEnvelopeItem(items, inferUserData) {
  const inferSetting = inferUserData ? "auto" : "never";
  return [
    {
      type: "log",
      item_count: items.length,
      content_type: "application/vnd.sentry.items.log+json"
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
function createLogEnvelope(logs, metadata, tunnel, dsn$1, inferUserData) {
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
  return envelope.createEnvelope(headers, [createLogContainerEnvelopeItem(logs, inferUserData)]);
}

exports.createLogContainerEnvelopeItem = createLogContainerEnvelopeItem;
exports.createLogEnvelope = createLogEnvelope;
//# sourceMappingURL=envelope.js.map
