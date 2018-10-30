var net = require("net");
var promisify = require("./_promisify.js");
var bind = function(c, f) { return f && f.bind(c); };
Object.defineProperties(module.exports, {
  Server: { enumerable: true, value: net.Server },
  Socket: { enumerable: true, value: net.Socket },
  Stream: { enumerable: true, value: net.Stream },
  //_createServerHandle: // skipping
  //_normalizeArgs: // skipping
  //_setSimultaneousAccepts: // skipping
  connect: { enumerable: true, value: bind(net, net.connect) },
  createConnection: { enumerable: true, value: bind(net, net.createConnection) },
  createServer: { enumerable: true, value: bind(net, net.createServer) },
  isIP: { enumerable: true, value: bind(net, net.isIP) },
  isIPv4: { enumerable: true, value: bind(net, net.isIPv4) },
  isIPv6: { enumerable: true, value: bind(net, net.isIPv6) },
});