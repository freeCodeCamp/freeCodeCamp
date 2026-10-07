Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const api = require('../api.js');
const debugLogger = require('./debug-logger.js');
const dsn = require('./dsn.js');
const envelope = require('./envelope.js');

async function handleTunnelRequest(options) {
  const { request, allowedDsns } = options;
  if (allowedDsns.length === 0) {
    return new Response("Tunnel not configured", { status: 500 });
  }
  const body = new Uint8Array(await request.arrayBuffer());
  let envelopeHeader;
  try {
    [envelopeHeader] = envelope.parseEnvelope(body);
  } catch {
    return new Response("Invalid envelope", { status: 400 });
  }
  if (!envelopeHeader) {
    return new Response("Invalid envelope: missing header", { status: 400 });
  }
  const dsn$1 = envelopeHeader.dsn;
  if (!dsn$1) {
    return new Response("Invalid envelope: missing DSN", { status: 400 });
  }
  const isAllowed = allowedDsns.some((allowed) => allowed === dsn$1);
  if (!isAllowed) {
    debugLogger.debug.warn(`Sentry tunnel: rejected request with unauthorized DSN (${dsn$1})`);
    return new Response("DSN not allowed", { status: 403 });
  }
  const dsnComponents = dsn.makeDsn(dsn$1);
  if (!dsnComponents) {
    debugLogger.debug.warn(`Could not extract DSN Components from: ${dsn$1}`);
    return new Response("Invalid DSN", { status: 403 });
  }
  const sentryIngestUrl = api.getEnvelopeEndpointWithUrlEncodedAuth(dsnComponents);
  try {
    return await fetch(sentryIngestUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-sentry-envelope"
      },
      body
    });
  } catch (error) {
    debugLogger.debug.error("Sentry tunnel: failed to forward envelope", error);
    return new Response("Failed to forward envelope to Sentry", { status: 500 });
  }
}

exports.handleTunnelRequest = handleTunnelRequest;
//# sourceMappingURL=tunnel.js.map
