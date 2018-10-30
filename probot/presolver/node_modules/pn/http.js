var http = require("http");
var promisify = require("./_promisify.js");
var bind = function(c, f) { return f && f.bind(c); };
Object.defineProperties(module.exports, {
  Agent: { enumerable: true, value: http.Agent },
  Client: { enumerable: true, value: http.Client },
  ClientRequest: { enumerable: true, value: http.ClientRequest },
  IncomingMessage: { enumerable: true, value: http.IncomingMessage },
  METHODS: { enumerable: true, value: http.METHODS },
  OutgoingMessage: { enumerable: true, value: http.OutgoingMessage },
  STATUS_CODES: { enumerable: true, value: http.STATUS_CODES },
  Server: { enumerable: true, value: http.Server },
  ServerResponse: { enumerable: true, value: http.ServerResponse },
  //_connectionListener: // skipping
  createClient: { enumerable: true, value: bind(http, http.createClient) },
  createServer: { enumerable: true, value: bind(http, http.createServer) },
  get: { enumerable: true, value: promisify(http, http.get, 1, {"returnsObject":true}) },
  globalAgent: { enumerable: true, get: function() { return http.globalAgent; }, set: function(v) { http.globalAgent = v; } },
  request: { enumerable: true, value: promisify(http, http.request, 1, {"returnsObject":true}) },
});