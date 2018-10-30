var http2 = {};
try { http2 = require("http2"); } catch (e) { }
var promisify = require("./_promisify.js");
var bind = function(c, f) { return f && f.bind(c); };
Object.defineProperties(module.exports, {
  Http2ServerRequest: { enumerable: true, value: http2.Http2ServerRequest },
  Http2ServerResponse: { enumerable: true, value: http2.Http2ServerResponse },
  connect: { enumerable: true, value: bind(http2, http2.connect) },
  constants: { enumerable: true, get: function() { return http2.constants; }, set: function(v) { http2.constants = v; } },
  createSecureServer: { enumerable: true, value: bind(http2, http2.createSecureServer) },
  createServer: { enumerable: true, value: bind(http2, http2.createServer) },
  getDefaultSettings: { enumerable: true, value: bind(http2, http2.getDefaultSettings) },
  getPackedSettings: { enumerable: true, value: bind(http2, http2.getPackedSettings) },
  getUnpackedSettings: { enumerable: true, value: bind(http2, http2.getUnpackedSettings) },
});