/**
 * DNS cache implementation
 */

'use strict';

const dns = require('dns');

const cache = new Map();
dns._lookup = dns.lookup;
dns.lookup = (domain, family, done) => {
  if (!done) {
    done = family;
    family = null;
  }

  if (cache.has(domain)) {
    const ip = cache.get(domain);
    const ipv = ip.indexOf('.') !== -1 ? 4 : 6;

    return process.nextTick(() => done(null, ip, ipv));
  }

  dns._lookup(domain, family, (err, ip, ipv) => {
    if (err) {
      return done(err);
    }
    cache.set(domain, ip);
    done(null, ip, ipv);
  });
};
