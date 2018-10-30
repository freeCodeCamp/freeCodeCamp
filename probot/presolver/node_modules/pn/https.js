var https = require("https");
var promisify = require("./_promisify.js");
var bind = function(c, f) { return f && f.bind(c); };
Object.defineProperties(module.exports, {
  Agent: { enumerable: true, value: https.Agent },
  Server: { enumerable: true, value: https.Server },
  createServer: { enumerable: true, value: bind(https, https.createServer) },
  get: { enumerable: true, value: promisify(https, https.get, 1, {"returnsObject":true}) },
  globalAgent: { enumerable: true, get: function() { return https.globalAgent; }, set: function(v) { https.globalAgent = v; } },
  request: { enumerable: true, value: promisify(https, https.request, 1, {"returnsObject":true}) },
});