var domain = require("domain");
var promisify = require("./_promisify.js");
var bind = function(c, f) { return f && f.bind(c); };
Object.defineProperties(module.exports, {
  Domain: { enumerable: true, value: domain.Domain },
  //_stack: // skipping
  active: { enumerable: true, get: function() { return domain.active; }, set: function(v) { domain.active = v; } },
  create: { enumerable: true, value: bind(domain, domain.create) },
  createDomain: { enumerable: true, value: bind(domain, domain.createDomain) },
});