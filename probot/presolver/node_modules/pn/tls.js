var tls = require("tls");
var promisify = require("./_promisify.js");
var bind = function(c, f) { return f && f.bind(c); };
Object.defineProperties(module.exports, {
  CLIENT_RENEG_LIMIT: { enumerable: true, value: tls.CLIENT_RENEG_LIMIT },
  CLIENT_RENEG_WINDOW: { enumerable: true, value: tls.CLIENT_RENEG_WINDOW },
  DEFAULT_CIPHERS: { enumerable: true, value: tls.DEFAULT_CIPHERS },
  DEFAULT_ECDH_CURVE: { enumerable: true, value: tls.DEFAULT_ECDH_CURVE },
  SLAB_BUFFER_SIZE: { enumerable: true, value: tls.SLAB_BUFFER_SIZE },
  SecureContext: { enumerable: true, value: tls.SecureContext },
  Server: { enumerable: true, value: tls.Server },
  TLSSocket: { enumerable: true, value: tls.TLSSocket },
  checkServerIdentity: { enumerable: true, value: bind(tls, tls.checkServerIdentity) },
  connect: { enumerable: true, value: promisify(tls, tls.connect, 1, {"returnsObject":true}) },
  convertALPNProtocols: { enumerable: true, value: bind(tls, tls.convertALPNProtocols) },
  convertNPNProtocols: { enumerable: true, value: bind(tls, tls.convertNPNProtocols) },
  createSecureContext: { enumerable: true, value: bind(tls, tls.createSecureContext) },
  createSecurePair: { enumerable: true, value: bind(tls, tls.createSecurePair) },
  createServer: { enumerable: true, value: promisify(tls, tls.createServer, 1, {"returnsObject":true}) },
  getCiphers: { enumerable: true, value: bind(tls, tls.getCiphers) },
  parseCertString: { enumerable: true, value: bind(tls, tls.parseCertString) },
});