Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const dsn = require('./utils/dsn.js');
const envelope = require('./utils/envelope.js');

function createCheckInEnvelope(checkIn, dynamicSamplingContext, metadata, tunnel, dsn$1) {
  const headers = {
    sent_at: (/* @__PURE__ */ new Date()).toISOString()
  };
  if (metadata?.sdk) {
    headers.sdk = {
      name: metadata.sdk.name,
      version: metadata.sdk.version
    };
  }
  if (!!tunnel && !!dsn$1) {
    headers.dsn = dsn.dsnToString(dsn$1);
  }
  if (dynamicSamplingContext) {
    headers.trace = dynamicSamplingContext;
  }
  const item = createCheckInEnvelopeItem(checkIn);
  return envelope.createEnvelope(headers, [item]);
}
function createCheckInEnvelopeItem(checkIn) {
  const checkInHeaders = {
    type: "check_in"
  };
  return [checkInHeaders, checkIn];
}

exports.createCheckInEnvelope = createCheckInEnvelope;
//# sourceMappingURL=checkin.js.map
