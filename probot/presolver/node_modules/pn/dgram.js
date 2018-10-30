var dgram = require("dgram");
var promisify = require("./_promisify.js");
var bind = function(c, f) { return f && f.bind(c); };
Object.defineProperties(module.exports, {
  Socket: { enumerable: true, value: dgram.Socket },
  //_createSocketHandle: // skipping
  createSocket: { enumerable: true, value: bind(dgram, dgram.createSocket) },
});