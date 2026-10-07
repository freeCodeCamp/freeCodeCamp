import { dsnToString } from '../utils/dsn.js';
import { createEnvelope } from '../utils/envelope.js';
import { isBrowser } from '../utils/isBrowser.js';

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
      ...isBrowser() && {
        ingest_settings: { infer_ip: inferSetting, infer_user_agent: inferSetting }
      },
      items
    }
  ];
}
function createLogEnvelope(logs, metadata, tunnel, dsn, inferUserData) {
  const headers = {};
  if (metadata?.sdk) {
    headers.sdk = {
      name: metadata.sdk.name,
      version: metadata.sdk.version
    };
  }
  if (!!tunnel && !!dsn) {
    headers.dsn = dsnToString(dsn);
  }
  return createEnvelope(headers, [createLogContainerEnvelopeItem(logs, inferUserData)]);
}

export { createLogContainerEnvelopeItem, createLogEnvelope };
//# sourceMappingURL=envelope.js.map
