"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const net_1 = __importDefault(require("net"));
const tls_1 = __importDefault(require("tls"));
const url_1 = __importDefault(require("url"));
const debug_1 = __importDefault(require("debug"));
const once_1 = __importDefault(require("@tootallnate/once"));
const agent_base_1 = require("agent-base");
const debug = debug_1.default('http-proxy-agent');
function isHTTPS(protocol) {
    return typeof protocol === 'string' ? /^https:?$/i.test(protocol) : false;
}
/**
 * The `HttpProxyAgent` implements an HTTP Agent subclass that connects
 * to the specified "HTTP proxy server" in order to proxy HTTP requests.
 *
 * @api public
 */
class HttpProxyAgent extends agent_base_1.Agent {
    constructor(_opts) {
        let opts;
        if (typeof _opts === 'string') {
            opts = url_1.default.parse(_opts);
        }
        else {
            opts = _opts;
        }
        if (!opts) {
            throw new Error('an HTTP(S) proxy server `host` and `port` must be specified!');
        }
        debug('Creating new HttpProxyAgent instance: %o', opts);
        super(opts);
        const proxy = Object.assign({}, opts);
        // If `true`, then connect to the proxy server over TLS.
        // Defaults to `false`.
        this.secureProxy = opts.secureProxy || isHTTPS(proxy.protocol);
        // Prefer `hostname` over `host`, and set the `port` if needed.
        proxy.host = proxy.hostname || proxy.host;
        if (typeof proxy.port === 'string') {
            proxy.port = parseInt(proxy.port, 10);
        }
        if (!proxy.port && proxy.host) {
            proxy.port = this.secureProxy ? 443 : 80;
        }
        if (proxy.host && proxy.path) {
            // If both a `host` and `path` are specified then it's most likely
            // the result of a `url.parse()` call... we need to remove the
            // `path` portion so that `net.connect()` doesn't attempt to open
            // that as a Unix socket file.
            delete proxy.path;
            delete proxy.pathname;
        }
        this.proxy = proxy;
    }
    /**
     * Called when the node-core HTTP client library is creating a
     * new HTTP request.
     *
     * @api protected
     */
    callback(req, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            const { proxy, secureProxy } = this;
            const parsed = url_1.default.parse(req.path);
            if (!parsed.protocol) {
                parsed.protocol = 'http:';
            }
            if (!parsed.hostname) {
                parsed.hostname = opts.hostname || opts.host || null;
            }
            if (parsed.port == null && typeof opts.port) {
                parsed.port = String(opts.port);
            }
            if (parsed.port === '80') {
                // if port is 80, then we can remove the port so that the
                // ":80" portion is not on the produced URL
                delete parsed.port;
            }
            // Change the `http.ClientRequest` instance's "path" field
            // to the absolute path of the URL that will be requested.
            req.path = url_1.default.format(parsed);
            // Inject the `Proxy-Authorization` header if necessary.
            if (proxy.auth) {
                req.setHeader('Proxy-Authorization', `Basic ${Buffer.from(proxy.auth).toString('base64')}`);
            }
            // Create a socket connection to the proxy server.
            let socket;
            if (secureProxy) {
                debug('Creating `tls.Socket`: %o', proxy);
                socket = tls_1.default.connect(proxy);
            }
            else {
                debug('Creating `net.Socket`: %o', proxy);
                socket = net_1.default.connect(proxy);
            }
            // At this point, the http ClientRequest's internal `_header` field
            // might have already been set. If this is the case then we'll need
            // to re-generate the string since we just changed the `req.path`.
            if (req._header) {
                let first;
                let endOfHeaders;
                debug('Regenerating stored HTTP header string for request');
                req._header = null;
                req._implicitHeader();
                if (req.output && req.output.length > 0) {
                    // Node < 12
                    debug('Patching connection write() output buffer with updated header');
                    first = req.output[0];
                    endOfHeaders = first.indexOf('\r\n\r\n') + 4;
                    req.output[0] = req._header + first.substring(endOfHeaders);
                    debug('Output buffer: %o', req.output);
                }
                else if (req.outputData && req.outputData.length > 0) {
                    // Node >= 12
                    debug('Patching connection write() output buffer with updated header');
                    first = req.outputData[0].data;
                    endOfHeaders = first.indexOf('\r\n\r\n') + 4;
                    req.outputData[0].data =
                        req._header + first.substring(endOfHeaders);
                    debug('Output buffer: %o', req.outputData[0].data);
                }
            }
            // Wait for the socket's `connect` event, so that this `callback()`
            // function throws instead of the `http` request machinery. This is
            // important for i.e. `PacProxyAgent` which determines a failed proxy
            // connection via the `callback()` function throwing.
            yield once_1.default(socket, 'connect');
            return socket;
        });
    }
}
exports.default = HttpProxyAgent;
//# sourceMappingURL=agent.js.map