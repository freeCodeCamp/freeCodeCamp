import { dsnToString } from './utils/dsn.js';
import { createEnvelope } from './utils/envelope.js';

function createCheckInEnvelope(checkIn, dynamicSamplingContext, metadata, tunnel, dsn) {
  const headers = {
    sent_at: (/* @__PURE__ */ new Date()).toISOString()
  };
  if (metadata?.sdk) {
    headers.sdk = {
      name: metadata.sdk.name,
      version: metadata.sdk.version
    };
  }
  if (!!tunnel && !!dsn) {
    headers.dsn = dsnToString(dsn);
  }
  if (dynamicSamplingContext) {
    headers.trace = dynamicSamplingContext;
  }
  const item = createCheckInEnvelopeItem(checkIn);
  return createEnvelope(headers, [item]);
}
function createCheckInEnvelopeItem(checkIn) {
  const checkInHeaders = {
    type: "check_in"
  };
  return [checkInHeaders, checkIn];
}

export { createCheckInEnvelope };
//# sourceMappingURL=checkin.js.map
