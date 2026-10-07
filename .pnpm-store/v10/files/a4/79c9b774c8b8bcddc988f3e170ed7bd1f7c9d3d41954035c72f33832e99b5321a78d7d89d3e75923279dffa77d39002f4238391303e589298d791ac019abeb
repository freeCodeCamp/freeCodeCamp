Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const http = require('node:http');
const https = require('node:https');
const node_stream = require('node:stream');
const node_zlib = require('node:zlib');
const core = require('@sentry/core');
const index = require('../proxy/index.js');

const GZIP_THRESHOLD = 1024 * 32;
function streamFromBody(body) {
  return new node_stream.Readable({
    read() {
      this.push(body);
      this.push(null);
    }
  });
}
function makeNodeTransport(options) {
  let urlSegments;
  try {
    urlSegments = new URL(options.url);
  } catch (_e) {
    core.consoleSandbox(() => {
      console.warn(
        "[@sentry/node]: Invalid dsn or tunnel option, will not send any events. The tunnel option must be a full URL when used."
      );
    });
    return core.createTransport(options, () => Promise.resolve({}));
  }
  const isHttps = urlSegments.protocol === "https:";
  const proxy = applyNoProxyOption(
    urlSegments,
    options.proxy || (isHttps ? process.env.https_proxy : void 0) || process.env.http_proxy
  );
  const nativeHttpModule = isHttps ? https : http;
  const keepAlive = options.keepAlive === void 0 ? false : options.keepAlive;
  const agent = proxy ? new index.HttpsProxyAgent(proxy) : new nativeHttpModule.Agent({ keepAlive, maxSockets: 30, timeout: 2e3 });
  const requestExecutor = createRequestExecutor(options, options.httpModule ?? nativeHttpModule, agent);
  return core.createTransport(options, requestExecutor);
}
function applyNoProxyOption(transportUrlSegments, proxy) {
  const { no_proxy } = process.env;
  const urlIsExemptFromProxy = no_proxy?.split(",").some(
    (exemption) => transportUrlSegments.host.endsWith(exemption) || transportUrlSegments.hostname.endsWith(exemption)
  );
  if (urlIsExemptFromProxy) {
    return void 0;
  } else {
    return proxy;
  }
}
function createRequestExecutor(options, httpModule, agent) {
  const { hostname, pathname, port, protocol, search } = new URL(options.url);
  return function makeRequest(request) {
    return new Promise((resolve, reject) => {
      core.suppressTracing(() => {
        let body = streamFromBody(request.body);
        const headers = { ...options.headers };
        if (request.body.length > GZIP_THRESHOLD) {
          headers["content-encoding"] = "gzip";
          body = body.pipe(node_zlib.createGzip());
        }
        const hostnameIsIPv6 = hostname.startsWith("[");
        const req = httpModule.request(
          {
            method: "POST",
            agent,
            headers,
            // Remove "[" and "]" from IPv6 hostnames
            hostname: hostnameIsIPv6 ? hostname.slice(1, -1) : hostname,
            path: `${pathname}${search}`,
            port,
            protocol,
            ca: options.caCerts
          },
          (res) => {
            res.on("data", () => {
            });
            res.on("end", () => {
            });
            res.setEncoding("utf8");
            const retryAfterHeader = res.headers["retry-after"] ?? null;
            const rateLimitsHeader = res.headers["x-sentry-rate-limits"] ?? null;
            resolve({
              statusCode: res.statusCode,
              headers: {
                "retry-after": retryAfterHeader,
                "x-sentry-rate-limits": Array.isArray(rateLimitsHeader) ? rateLimitsHeader[0] || null : rateLimitsHeader
              }
            });
          }
        );
        req.on("error", reject);
        body.pipe(req);
      });
    });
  };
}

exports.makeNodeTransport = makeNodeTransport;
//# sourceMappingURL=http.js.map
