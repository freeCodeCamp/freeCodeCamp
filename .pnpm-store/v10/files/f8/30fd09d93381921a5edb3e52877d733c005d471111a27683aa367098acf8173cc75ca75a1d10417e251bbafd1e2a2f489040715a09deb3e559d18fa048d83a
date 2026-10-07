/* eslint max-statements:0 */
'use strict';

var assert = require('assert');
var parseUrl = require('url').parse;

var getProxyForUrl = require('./').getProxyForUrl;

// Runs the callback with process.env temporarily set to env.
function runWithEnv(env, callback) {
  var originalEnv = process.env;
  process.env = env;
  try {
    callback();
  } finally {
    process.env = originalEnv;
  }
}

// Defines a test case that checks whether getProxyForUrl(input) === expected.
function testProxyUrl(env, expected, input) {
  assert(typeof env === 'object' && env !== null);
  // Copy object to make sure that the in param does not get modified between
  // the call of this function and the use of it below.
  env = JSON.parse(JSON.stringify(env));

  var title = 'getProxyForUrl(' + JSON.stringify(input) + ')' +
     ' === ' + JSON.stringify(expected);

  // Save call stack for later use.
  var stack = {};
  Error.captureStackTrace(stack, testProxyUrl);
  // Only use the last stack frame because that shows where this function is
  // called, and that is sufficient for our purpose. No need to flood the logs
  // with an uninteresting stack trace.
  stack = stack.stack.split('\n', 2)[1];

  it(title, function() {
    var actual;
    runWithEnv(env, function() {
      actual = getProxyForUrl(input);
    });
    if (expected === actual) {
      return;  // Good!
    }
    try {
      assert.strictEqual(expected, actual); // Create a formatted error message.
      // Should not happen because previously we determined expected !== actual.
      throw new Error('assert.strictEqual passed. This is impossible!');
    } catch (e) {
      // Use the original stack trace, so we can see a helpful line number.
      e.stack = e.message + stack;
      throw e;
    }
  });
}

describe('getProxyForUrl', function() {
  describe('No proxy variables', function() {
    var env = {};
    testProxyUrl(env, '', 'http://example.com');
    testProxyUrl(env, '', 'https://example.com');
    testProxyUrl(env, '', 'ftp://example.com');
  });

  describe('Invalid URLs', function() {
    var env = {};
    env.ALL_PROXY = 'http://unexpected.proxy';
    testProxyUrl(env, '', 'bogus');
    testProxyUrl(env, '', '//example.com');
    testProxyUrl(env, '', '://example.com');
    testProxyUrl(env, '', '://');
    testProxyUrl(env, '', '/path');
    testProxyUrl(env, '', '');
    testProxyUrl(env, '', 'http:');
    testProxyUrl(env, '', 'http:/');
    testProxyUrl(env, '', 'http://');
    testProxyUrl(env, '', 'prototype://');
    testProxyUrl(env, '', 'hasOwnProperty://');
    testProxyUrl(env, '', '__proto__://');
    testProxyUrl(env, '', undefined);
    testProxyUrl(env, '', null);
    testProxyUrl(env, '', {});
    testProxyUrl(env, '', {host: 'x', protocol: 1});
    testProxyUrl(env, '', {host: 1, protocol: 'x'});
  });

  describe('http_proxy and HTTP_PROXY', function() {
    var env = {};
    env.HTTP_PROXY = 'http://http-proxy';

    testProxyUrl(env, '', 'https://example');
    testProxyUrl(env, 'http://http-proxy', 'http://example');
    testProxyUrl(env, 'http://http-proxy', parseUrl('http://example'));

    // eslint-disable-next-line camelcase
    env.http_proxy = 'http://priority';
    testProxyUrl(env, 'http://priority', 'http://example');
  });

  describe('http_proxy with non-sensical value', function() {
    var env = {};
    // Crazy values should be passed as-is. It is the responsibility of the
    // one who launches the application that the value makes sense.
    // TODO: Should we be stricter and perform validation?
    env.HTTP_PROXY = 'Crazy \n!() { ::// }';
    testProxyUrl(env, 'Crazy \n!() { ::// }', 'http://wow');

    // The implementation assumes that the HTTP_PROXY environment variable is
    // somewhat reasonable, and if the scheme is missing, it is added.
    // Garbage in, garbage out some would say...
    env.HTTP_PROXY = 'crazy without colon slash slash';
    testProxyUrl(env, 'http://crazy without colon slash slash', 'http://wow');
  });

  describe('https_proxy and HTTPS_PROXY', function() {
    var env = {};
    // Assert that there is no fall back to http_proxy
    env.HTTP_PROXY = 'http://unexpected.proxy';
    testProxyUrl(env, '', 'https://example');

    env.HTTPS_PROXY = 'http://https-proxy';
    testProxyUrl(env, 'http://https-proxy', 'https://example');

    // eslint-disable-next-line camelcase
    env.https_proxy = 'http://priority';
    testProxyUrl(env, 'http://priority', 'https://example');
  });

  describe('ftp_proxy', function() {
    var env = {};
    // Something else than http_proxy / https, as a sanity check.
    env.FTP_PROXY = 'http://ftp-proxy';

    testProxyUrl(env, 'http://ftp-proxy', 'ftp://example');
    testProxyUrl(env, '', 'ftps://example');
  });

  describe('all_proxy', function() {
    var env = {};
    env.ALL_PROXY = 'http://catch-all';
    testProxyUrl(env, 'http://catch-all', 'https://example');

    // eslint-disable-next-line camelcase
    env.all_proxy = 'http://priority';
    testProxyUrl(env, 'http://priority', 'https://example');
  });

  describe('all_proxy without scheme', function() {
    var env = {};
    env.ALL_PROXY = 'noscheme';
    testProxyUrl(env, 'http://noscheme', 'http://example');
    testProxyUrl(env, 'https://noscheme', 'https://example');

    // The module does not impose restrictions on the scheme.
    testProxyUrl(env, 'bogus-scheme://noscheme', 'bogus-scheme://example');

    // But the URL should still be valid.
    testProxyUrl(env, '', 'bogus');
  });

  describe('no_proxy empty', function() {
    var env = {};
    env.HTTPS_PROXY = 'http://proxy';

    // NO_PROXY set but empty.
    env.NO_PROXY = '';
    testProxyUrl(env, 'http://proxy', 'https://example');

    // No entries in NO_PROXY (comma).
    env.NO_PROXY = ',';
    testProxyUrl(env, 'http://proxy', 'https://example');

    // No entries in NO_PROXY (whitespace).
    env.NO_PROXY = ' ';
    testProxyUrl(env, 'http://proxy', 'https://example');

    // No entries in NO_PROXY (multiple whitespace / commas).
    env.NO_PROXY = ',\t,,,\n,  ,\r';
    testProxyUrl(env, 'http://proxy', 'https://example');
  });

  describe('no_proxy=example (single host)', function() {
    var env = {};
    env.HTTP_PROXY = 'http://proxy';

    env.NO_PROXY = 'example';
    testProxyUrl(env, '', 'http://example');
    testProxyUrl(env, '', 'http://example:80');
    testProxyUrl(env, '', 'http://example:0');
    testProxyUrl(env, '', 'http://example:1337');
    testProxyUrl(env, 'http://proxy', 'http://sub.example');
    testProxyUrl(env, 'http://proxy', 'http://prefexample');
    testProxyUrl(env, 'http://proxy', 'http://example.no');
    testProxyUrl(env, 'http://proxy', 'http://a.b.example');
    testProxyUrl(env, 'http://proxy', 'http://host/example');
  });

  describe('no_proxy=sub.example (subdomain)', function() {
    var env = {};
    env.HTTP_PROXY = 'http://proxy';

    env.NO_PROXY = 'sub.example';
    testProxyUrl(env, 'http://proxy', 'http://example');
    testProxyUrl(env, 'http://proxy', 'http://example:80');
    testProxyUrl(env, 'http://proxy', 'http://example:0');
    testProxyUrl(env, 'http://proxy', 'http://example:1337');
    testProxyUrl(env, '', 'http://sub.example');
    testProxyUrl(env, 'http://proxy', 'http://no.sub.example');
    testProxyUrl(env, 'http://proxy', 'http://sub-example');
    testProxyUrl(env, 'http://proxy', 'http://example.sub');
  });

  describe('no_proxy=example:80 (host + port)', function() {
    var env = {};
    env.HTTP_PROXY = 'http://proxy';

    env.NO_PROXY = 'example:80';
    testProxyUrl(env, '', 'http://example');
    testProxyUrl(env, '', 'http://example:80');
    testProxyUrl(env, '', 'http://example:0');
    testProxyUrl(env, 'http://proxy', 'http://example:1337');
    testProxyUrl(env, 'http://proxy', 'http://sub.example');
    testProxyUrl(env, 'http://proxy', 'http://prefexample');
    testProxyUrl(env, 'http://proxy', 'http://example.no');
    testProxyUrl(env, 'http://proxy', 'http://a.b.example');
  });

  describe('no_proxy=.example (host suffix)', function() {
    var env = {};
    env.HTTP_PROXY = 'http://proxy';

    env.NO_PROXY = '.example';
    testProxyUrl(env, 'http://proxy', 'http://example');
    testProxyUrl(env, 'http://proxy', 'http://example:80');
    testProxyUrl(env, 'http://proxy', 'http://example:1337');
    testProxyUrl(env, '', 'http://sub.example');
    testProxyUrl(env, '', 'http://sub.example:80');
    testProxyUrl(env, '', 'http://sub.example:1337');
    testProxyUrl(env, 'http://proxy', 'http://prefexample');
    testProxyUrl(env, 'http://proxy', 'http://example.no');
    testProxyUrl(env, '', 'http://a.b.example');
  });

  describe('no_proxy=*', function() {
    var env = {};
    env.HTTP_PROXY = 'http://proxy';
    env.NO_PROXY = '*';
    testProxyUrl(env, '', 'http://example.com');
  });

  describe('no_proxy=*.example (host suffix with *.)', function() {
    var env = {};
    env.HTTP_PROXY = 'http://proxy';

    env.NO_PROXY = '*.example';
    testProxyUrl(env, 'http://proxy', 'http://example');
    testProxyUrl(env, 'http://proxy', 'http://example:80');
    testProxyUrl(env, 'http://proxy', 'http://example:1337');
    testProxyUrl(env, '', 'http://sub.example');
    testProxyUrl(env, '', 'http://sub.example:80');
    testProxyUrl(env, '', 'http://sub.example:1337');
    testProxyUrl(env, 'http://proxy', 'http://prefexample');
    testProxyUrl(env, 'http://proxy', 'http://example.no');
    testProxyUrl(env, '', 'http://a.b.example');
  });

  describe('no_proxy=*example (substring suffix)', function() {
    var env = {};
    env.HTTP_PROXY = 'http://proxy';

    env.NO_PROXY = '*example';
    testProxyUrl(env, '', 'http://example');
    testProxyUrl(env, '', 'http://example:80');
    testProxyUrl(env, '', 'http://example:1337');
    testProxyUrl(env, '', 'http://sub.example');
    testProxyUrl(env, '', 'http://sub.example:80');
    testProxyUrl(env, '', 'http://sub.example:1337');
    testProxyUrl(env, '', 'http://prefexample');
    testProxyUrl(env, '', 'http://a.b.example');
    testProxyUrl(env, 'http://proxy', 'http://example.no');
    testProxyUrl(env, 'http://proxy', 'http://host/example');
  });

  describe('no_proxy=.*example (arbitrary wildcards are NOT supported)',
      function() {
    var env = {};
    env.HTTP_PROXY = 'http://proxy';

    env.NO_PROXY = '.*example';
    testProxyUrl(env, 'http://proxy', 'http://example');
    testProxyUrl(env, 'http://proxy', 'http://sub.example');
    testProxyUrl(env, 'http://proxy', 'http://sub.example');
    testProxyUrl(env, 'http://proxy', 'http://prefexample');
    testProxyUrl(env, 'http://proxy', 'http://x.prefexample');
    testProxyUrl(env, 'http://proxy', 'http://a.b.example');
  });

  describe('no_proxy=[::1],[::2]:80,10.0.0.1,10.0.0.2:80 (IP addresses)',
      function() {
    var env = {};
    env.HTTP_PROXY = 'http://proxy';

    env.NO_PROXY = '[::1],[::2]:80,10.0.0.1,10.0.0.2:80';
    testProxyUrl(env, '', 'http://[::1]/');
    testProxyUrl(env, '', 'http://[::1]:80/');
    testProxyUrl(env, '', 'http://[::1]:1337/');

    testProxyUrl(env, '', 'http://[::2]/');
    testProxyUrl(env, '', 'http://[::2]:80/');
    testProxyUrl(env, 'http://proxy', 'http://[::2]:1337/');

    testProxyUrl(env, '', 'http://10.0.0.1/');
    testProxyUrl(env, '', 'http://10.0.0.1:80/');
    testProxyUrl(env, '', 'http://10.0.0.1:1337/');

    testProxyUrl(env, '', 'http://10.0.0.2/');
    testProxyUrl(env, '', 'http://10.0.0.2:80/');
    testProxyUrl(env, 'http://proxy', 'http://10.0.0.2:1337/');
  });

  describe('no_proxy=127.0.0.1/32 (CIDR is NOT supported)', function() {
    var env = {};
    env.HTTP_PROXY = 'http://proxy';

    env.NO_PROXY = '127.0.0.1/32';
    testProxyUrl(env, 'http://proxy', 'http://127.0.0.1');
    testProxyUrl(env, 'http://proxy', 'http://127.0.0.1/32');
  });

  describe('no_proxy=127.0.0.1 does NOT match localhost', function() {
    var env = {};
    env.HTTP_PROXY = 'http://proxy';

    env.NO_PROXY = '127.0.0.1';
    testProxyUrl(env, '', 'http://127.0.0.1');
    // We're not performing DNS queries, so this shouldn't match.
    testProxyUrl(env, 'http://proxy', 'http://localhost');
  });

  describe('no_proxy with protocols that have a default port', function() {
    var env = {};
    env.WS_PROXY = 'http://ws';
    env.WSS_PROXY = 'http://wss';
    env.HTTP_PROXY = 'http://http';
    env.HTTPS_PROXY = 'http://https';
    env.GOPHER_PROXY = 'http://gopher';
    env.FTP_PROXY = 'http://ftp';
    env.ALL_PROXY = 'http://all';

    env.NO_PROXY = 'xxx:21,xxx:70,xxx:80,xxx:443';

    testProxyUrl(env, '', 'http://xxx');
    testProxyUrl(env, '', 'http://xxx:80');
    testProxyUrl(env, 'http://http', 'http://xxx:1337');

    testProxyUrl(env, '', 'ws://xxx');
    testProxyUrl(env, '', 'ws://xxx:80');
    testProxyUrl(env, 'http://ws', 'ws://xxx:1337');

    testProxyUrl(env, '', 'https://xxx');
    testProxyUrl(env, '', 'https://xxx:443');
    testProxyUrl(env, 'http://https', 'https://xxx:1337');

    testProxyUrl(env, '', 'wss://xxx');
    testProxyUrl(env, '', 'wss://xxx:443');
    testProxyUrl(env, 'http://wss', 'wss://xxx:1337');

    testProxyUrl(env, '', 'gopher://xxx');
    testProxyUrl(env, '', 'gopher://xxx:70');
    testProxyUrl(env, 'http://gopher', 'gopher://xxx:1337');

    testProxyUrl(env, '', 'ftp://xxx');
    testProxyUrl(env, '', 'ftp://xxx:21');
    testProxyUrl(env, 'http://ftp', 'ftp://xxx:1337');
  });

  describe('no_proxy should not be case-sensitive', function() {
    var env = {};
    env.HTTP_PROXY = 'http://proxy';
    env.NO_PROXY = 'XXX,YYY,ZzZ';

    testProxyUrl(env, '', 'http://xxx');
    testProxyUrl(env, '', 'http://XXX');
    testProxyUrl(env, '', 'http://yyy');
    testProxyUrl(env, '', 'http://YYY');
    testProxyUrl(env, '', 'http://ZzZ');
    testProxyUrl(env, '', 'http://zZz');
  });

  describe('NPM proxy configuration', function() {
    describe('npm_config_http_proxy should work', function() {
      var env = {};
      // eslint-disable-next-line camelcase
      env.npm_config_http_proxy = 'http://http-proxy';

      testProxyUrl(env, '', 'https://example');
      testProxyUrl(env, 'http://http-proxy', 'http://example');

      // eslint-disable-next-line camelcase
      env.npm_config_http_proxy = 'http://priority';
      testProxyUrl(env, 'http://priority', 'http://example');
    });
    // eslint-disable-next-line max-len
    describe('npm_config_http_proxy should take precedence over HTTP_PROXY and npm_config_proxy', function() {
      var env = {};
      // eslint-disable-next-line camelcase
      env.npm_config_http_proxy = 'http://http-proxy';
      // eslint-disable-next-line camelcase
      env.npm_config_proxy = 'http://unexpected-proxy';
      env.HTTP_PROXY = 'http://unexpected-proxy';

      testProxyUrl(env, 'http://http-proxy', 'http://example');
    });
    describe('npm_config_https_proxy should work', function() {
      var env = {};
      // eslint-disable-next-line camelcase
      env.npm_config_http_proxy = 'http://unexpected.proxy';
      testProxyUrl(env, '', 'https://example');

      // eslint-disable-next-line camelcase
      env.npm_config_https_proxy = 'http://https-proxy';
      testProxyUrl(env, 'http://https-proxy', 'https://example');

      // eslint-disable-next-line camelcase
      env.npm_config_https_proxy = 'http://priority';
      testProxyUrl(env, 'http://priority', 'https://example');
    });
    // eslint-disable-next-line max-len
    describe('npm_config_https_proxy should take precedence over HTTPS_PROXY and npm_config_proxy', function() {
      var env = {};
      // eslint-disable-next-line camelcase
      env.npm_config_https_proxy = 'http://https-proxy';
      // eslint-disable-next-line camelcase
      env.npm_config_proxy = 'http://unexpected-proxy';
      env.HTTPS_PROXY = 'http://unexpected-proxy';

      testProxyUrl(env, 'http://https-proxy', 'https://example');
    });
    describe('npm_config_proxy should work', function() {
      var env = {};
      // eslint-disable-next-line camelcase
      env.npm_config_proxy = 'http://http-proxy';
      testProxyUrl(env, 'http://http-proxy', 'http://example');
      testProxyUrl(env, 'http://http-proxy', 'https://example');

      // eslint-disable-next-line camelcase
      env.npm_config_proxy = 'http://priority';
      testProxyUrl(env, 'http://priority', 'http://example');
      testProxyUrl(env, 'http://priority', 'https://example');
    });
    // eslint-disable-next-line max-len
    describe('HTTP_PROXY and HTTPS_PROXY should take precedence over npm_config_proxy', function() {
      var env = {};
      env.HTTP_PROXY = 'http://http-proxy';
      env.HTTPS_PROXY = 'http://https-proxy';
      // eslint-disable-next-line camelcase
      env.npm_config_proxy = 'http://unexpected-proxy';
      testProxyUrl(env, 'http://http-proxy', 'http://example');
      testProxyUrl(env, 'http://https-proxy', 'https://example');
    });
    describe('npm_config_no_proxy should work', function() {
      var env = {};
      env.HTTP_PROXY = 'http://proxy';
      // eslint-disable-next-line camelcase
      env.npm_config_no_proxy = 'example';

      testProxyUrl(env, '', 'http://example');
      testProxyUrl(env, 'http://proxy', 'http://otherwebsite');
    });
    // eslint-disable-next-line max-len
    describe('npm_config_no_proxy should take precedence over NO_PROXY', function() {
      var env = {};
      env.HTTP_PROXY = 'http://proxy';
      env.NO_PROXY = 'otherwebsite';
      // eslint-disable-next-line camelcase
      env.npm_config_no_proxy = 'example';

      testProxyUrl(env, '', 'http://example');
      testProxyUrl(env, 'http://proxy', 'http://otherwebsite');
    });
  });
});
