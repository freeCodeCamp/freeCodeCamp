Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const http = require('node:http');
const core = require('@sentry/core');

const INTEGRATION_NAME = "Spotlight";
const _spotlightIntegration = ((options = {}) => {
  const _options = {
    sidecarUrl: options.sidecarUrl || "http://localhost:8969/stream"
  };
  return {
    name: INTEGRATION_NAME,
    setup(client) {
      try {
        if (process.env.NODE_ENV && process.env.NODE_ENV !== "development") {
          core.debug.warn("[Spotlight] It seems you're not in dev mode. Do you really want to have Spotlight enabled?");
        }
      } catch {
      }
      connectToSpotlight(client, _options);
    }
  };
});
const spotlightIntegration = core.defineIntegration(_spotlightIntegration);
function connectToSpotlight(client, options) {
  const spotlightUrl = parseSidecarUrl(options.sidecarUrl);
  if (!spotlightUrl) {
    return;
  }
  let failedRequests = 0;
  client.on("beforeEnvelope", (envelope) => {
    if (failedRequests > 3) {
      core.debug.warn("[Spotlight] Disabled Sentry -> Spotlight integration due to too many failed requests");
      return;
    }
    const serializedEnvelope = core.serializeEnvelope(envelope);
    core.suppressTracing(() => {
      const req = http.request(
        {
          method: "POST",
          path: spotlightUrl.pathname,
          hostname: spotlightUrl.hostname,
          port: spotlightUrl.port,
          headers: {
            "Content-Type": "application/x-sentry-envelope"
          }
        },
        (res) => {
          if (res.statusCode && res.statusCode >= 200 && res.statusCode < 400) {
            failedRequests = 0;
          }
          res.on("data", () => {
          });
          res.on("end", () => {
          });
          res.setEncoding("utf8");
        }
      );
      req.on("error", () => {
        failedRequests++;
        core.debug.warn("[Spotlight] Failed to send envelope to Spotlight Sidecar");
      });
      req.write(serializedEnvelope);
      req.end();
    });
  });
}
function parseSidecarUrl(url) {
  try {
    return new URL(`${url}`);
  } catch {
    core.debug.warn(`[Spotlight] Invalid sidecar URL: ${url}`);
    return void 0;
  }
}

exports.INTEGRATION_NAME = INTEGRATION_NAME;
exports.spotlightIntegration = spotlightIntegration;
//# sourceMappingURL=spotlight.js.map
