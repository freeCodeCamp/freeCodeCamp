import { getEnvelopeEndpointWithUrlEncodedAuth } from '../api.js';
import { debug } from './debug-logger.js';
import { makeDsn } from './dsn.js';
import { parseEnvelope } from './envelope.js';

async function handleTunnelRequest(options) {
  const { request, allowedDsns } = options;
  if (allowedDsns.length === 0) {
    return new Response("Tunnel not configured", { status: 500 });
  }
  const body = new Uint8Array(await request.arrayBuffer());
  let envelopeHeader;
  try {
    [envelopeHeader] = parseEnvelope(body);
  } catch {
    return new Response("Invalid envelope", { status: 400 });
  }
  if (!envelopeHeader) {
    return new Response("Invalid envelope: missing header", { status: 400 });
  }
  const dsn = envelopeHeader.dsn;
  if (!dsn) {
    return new Response("Invalid envelope: missing DSN", { status: 400 });
  }
  const isAllowed = allowedDsns.some((allowed) => allowed === dsn);
  if (!isAllowed) {
    debug.warn(`Sentry tunnel: rejected request with unauthorized DSN (${dsn})`);
    return new Response("DSN not allowed", { status: 403 });
  }
  const dsnComponents = makeDsn(dsn);
  if (!dsnComponents) {
    debug.warn(`Could not extract DSN Components from: ${dsn}`);
    return new Response("Invalid DSN", { status: 403 });
  }
  const sentryIngestUrl = getEnvelopeEndpointWithUrlEncodedAuth(dsnComponents);
  try {
    return await fetch(sentryIngestUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-sentry-envelope"
      },
      body
    });
  } catch (error) {
    debug.error("Sentry tunnel: failed to forward envelope", error);
    return new Response("Failed to forward envelope to Sentry", { status: 500 });
  }
}

export { handleTunnelRequest };
//# sourceMappingURL=tunnel.js.map
