Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const net = require('node:net');
const tls = require('node:tls');
const core = require('@sentry/core');
const base = require('./base.js');
const parseProxyResponse = require('./parse-proxy-response.js');

function debugLog(...args) {
  core.debug.log("[https-proxy-agent]", ...args);
}
class HttpsProxyAgent extends base.Agent {
  constructor(proxy, opts) {
    super(opts);
    this.options = {};
    this.proxy = typeof proxy === "string" ? new URL(proxy) : proxy;
    this.proxyHeaders = opts?.headers ?? {};
    debugLog("Creating new HttpsProxyAgent instance: %o", this.proxy.href);
    const host = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, "");
    const port = this.proxy.port ? parseInt(this.proxy.port, 10) : this.proxy.protocol === "https:" ? 443 : 80;
    this.connectOpts = {
      // Attempt to negotiate http/1.1 for proxy servers that support http/2
      ALPNProtocols: ["http/1.1"],
      ...opts ? omit(opts, "headers") : null,
      host,
      port
    };
  }
  /**
   * Called when the node-core HTTP client library is creating a
   * new HTTP request.
   */
  async connect(req, opts) {
    const { proxy } = this;
    if (!opts.host) {
      throw new TypeError('No "host" provided');
    }
    let socket;
    if (proxy.protocol === "https:") {
      debugLog("Creating `tls.Socket`: %o", this.connectOpts);
      const servername = this.connectOpts.servername || this.connectOpts.host;
      socket = tls.connect({
        ...this.connectOpts,
        servername: servername && net.isIP(servername) ? void 0 : servername
      });
    } else {
      debugLog("Creating `net.Socket`: %o", this.connectOpts);
      socket = net.connect(this.connectOpts);
    }
    const headers = typeof this.proxyHeaders === "function" ? this.proxyHeaders() : { ...this.proxyHeaders };
    const host = net.isIPv6(opts.host) ? `[${opts.host}]` : opts.host;
    let payload = `CONNECT ${host}:${opts.port} HTTP/1.1\r
`;
    if (proxy.username || proxy.password) {
      const auth = `${decodeURIComponent(proxy.username)}:${decodeURIComponent(proxy.password)}`;
      headers["Proxy-Authorization"] = `Basic ${Buffer.from(auth).toString("base64")}`;
    }
    headers.Host = `${host}:${opts.port}`;
    if (!headers["Proxy-Connection"]) {
      headers["Proxy-Connection"] = this.keepAlive ? "Keep-Alive" : "close";
    }
    for (const name of Object.keys(headers)) {
      payload += `${name}: ${headers[name]}\r
`;
    }
    const proxyResponsePromise = parseProxyResponse.parseProxyResponse(socket);
    socket.write(`${payload}\r
`);
    const { connect, buffered } = await proxyResponsePromise;
    req.emit("proxyConnect", connect);
    this.emit("proxyConnect", connect, req);
    if (connect.statusCode === 200) {
      req.once("socket", resume);
      if (opts.secureEndpoint) {
        debugLog("Upgrading socket connection to TLS");
        const servername = opts.servername || opts.host;
        return tls.connect({
          ...omit(opts, "host", "path", "port"),
          socket,
          servername: net.isIP(servername) ? void 0 : servername
        });
      }
      return socket;
    }
    socket.destroy();
    const fakeSocket = new net.Socket({ writable: false });
    fakeSocket.readable = true;
    req.once("socket", (s) => {
      debugLog("Replaying proxy buffer for failed request");
      s.push(buffered);
      s.push(null);
    });
    return fakeSocket;
  }
}
HttpsProxyAgent.protocols = ["http", "https"];
function resume(socket) {
  socket.resume();
}
function omit(obj, ...keys) {
  const ret = {};
  let key;
  for (key in obj) {
    if (!keys.includes(key)) {
      ret[key] = obj[key];
    }
  }
  return ret;
}

exports.HttpsProxyAgent = HttpsProxyAgent;
//# sourceMappingURL=index.js.map
