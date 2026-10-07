Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const http = require('node:http');
require('node:https');

var _a;
const INTERNAL = /* @__PURE__ */ Symbol("AgentBaseInternalState");
class Agent extends (_a = http.Agent, _a) {
  constructor(opts) {
    super(opts);
    this[INTERNAL] = {};
  }
  /**
   * Determine whether this is an `http` or `https` request.
   */
  isSecureEndpoint(options) {
    if (options) {
      if (typeof options.secureEndpoint === "boolean") {
        return options.secureEndpoint;
      }
      if (typeof options.protocol === "string") {
        return options.protocol === "https:";
      }
    }
    const { stack } = new Error();
    if (typeof stack !== "string") return false;
    return stack.split("\n").some((l) => l.indexOf("(https.js:") !== -1 || l.indexOf("node:https:") !== -1);
  }
  createSocket(req, options, cb) {
    const connectOpts = {
      ...options,
      secureEndpoint: this.isSecureEndpoint(options)
    };
    Promise.resolve().then(() => this.connect(req, connectOpts)).then((socket) => {
      if (socket instanceof http.Agent) {
        return socket.addRequest(req, connectOpts);
      }
      this[INTERNAL].currentSocket = socket;
      super.createSocket(req, options, cb);
    }, cb);
  }
  createConnection() {
    const socket = this[INTERNAL].currentSocket;
    this[INTERNAL].currentSocket = void 0;
    if (!socket) {
      throw new Error("No socket was returned in the `connect()` function");
    }
    return socket;
  }
  get defaultPort() {
    return this[INTERNAL].defaultPort ?? (this.protocol === "https:" ? 443 : 80);
  }
  set defaultPort(v) {
    if (this[INTERNAL]) {
      this[INTERNAL].defaultPort = v;
    }
  }
  get protocol() {
    return this[INTERNAL].protocol ?? (this.isSecureEndpoint() ? "https:" : "http:");
  }
  set protocol(v) {
    if (this[INTERNAL]) {
      this[INTERNAL].protocol = v;
    }
  }
}

exports.Agent = Agent;
//# sourceMappingURL=base.js.map
