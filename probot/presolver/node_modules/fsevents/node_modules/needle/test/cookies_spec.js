var needle  = require('../'),
    cookies = require('../lib/cookies'),
    sinon   = require('sinon'),
    http    = require('http'),
    should  = require('should'),
    assert  = require('assert');

var WEIRD_COOKIE_NAME      = 'wc',
    BASE64_COOKIE_NAME     = 'bc',
    FORBIDDEN_COOKIE_NAME  = 'fc',
    NUMBER_COOKIE_NAME     = 'nc';

var WEIRD_COOKIE_VALUE     = '!\'*+#()&-./0123456789:<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~',
    BASE64_COOKIE_VALUE    = 'Y29va2llCg==',
    FORBIDDEN_COOKIE_VALUE = ' ;"\\,',
    NUMBER_COOKIE_VALUE    = 12354342;

var TEST_HOST = 'localhost',
    NO_COOKIES_TEST_PORT   = 11112,
    ALL_COOKIES_TEST_PORT  = 11113;

describe('cookies', function() {

  var setCookieHeader, headers, server, opts;

  function decode(str) {
    return decodeURIComponent(str);
  }

  function encode(str) {
    str = str.toString().replace(/[\x00-\x1F\x7F]/g, encodeURIComponent);
    return str.replace(/[\s\"\,;\\%]/g, encodeURIComponent);
  }

  before(function() {
    setCookieHeader = [
      WEIRD_COOKIE_NAME + '=' + encode(WEIRD_COOKIE_VALUE) + ';',
      BASE64_COOKIE_NAME + '=' + encode(BASE64_COOKIE_VALUE) + ';',
      FORBIDDEN_COOKIE_NAME + '=' + encode(FORBIDDEN_COOKIE_VALUE) + ';',
      NUMBER_COOKIE_NAME + '=' + encode(NUMBER_COOKIE_VALUE) + ';'
    ];
  });

  before(function(done) {
    serverAllCookies = http.createServer(function(req, res) {
      res.setHeader('Content-Type', 'text/html');
      res.setHeader('Set-Cookie', setCookieHeader);
      res.end('200');
    }).listen(ALL_COOKIES_TEST_PORT, TEST_HOST, done);
  });

  after(function(done) {
    serverAllCookies.close(done);
  });

  describe('with default options', function() {
    it('no cookie header is set on request', function(done) {
      needle.get(
        TEST_HOST + ':' + ALL_COOKIES_TEST_PORT, function(err, response) {
          assert(!response.req._headers.cookie);
          done();
        });
    });
  });

  describe('if response does not contain cookies', function() {
    before(function(done) {
      serverNoCookies = http.createServer(function(req, res) {
        res.setHeader('Content-Type', 'text/html');
        res.end('200');
      }).listen(NO_COOKIES_TEST_PORT, TEST_HOST, done);
    });

    it('response.cookies is undefined', function(done) {
      needle.get(
        TEST_HOST + ':' + NO_COOKIES_TEST_PORT, function(error, response) {
          assert(!response.cookies);
          done();
        });
    });

    after(function(done) {
      serverNoCookies.close(done);
    });
  });

  describe('if response contains cookies', function() {

    it('puts them on resp.cookies', function(done) {
      needle.get(
        TEST_HOST + ':' + ALL_COOKIES_TEST_PORT, function(error, response) {
          response.should.have.property('cookies');
          done();
        });
    });

    it('parses them as a object', function(done) {
      needle.get(
        TEST_HOST + ':' + ALL_COOKIES_TEST_PORT, function(error, response) {
          response.cookies.should.be.an.instanceOf(Object)
            .and.have.property(WEIRD_COOKIE_NAME);
          response.cookies.should.have.property(BASE64_COOKIE_NAME);
          response.cookies.should.have.property(FORBIDDEN_COOKIE_NAME);
          response.cookies.should.have.property(NUMBER_COOKIE_NAME);
          done();
        });
    });

    it('must decode it', function(done) {
      needle.get(
        TEST_HOST + ':' + ALL_COOKIES_TEST_PORT, function(error, response) {
          response.cookies.wc.should.be.eql(WEIRD_COOKIE_VALUE);
          response.cookies.bc.should.be.eql(BASE64_COOKIE_VALUE);
          response.cookies.fc.should.be.eql(FORBIDDEN_COOKIE_VALUE);
          response.cookies.nc.should.be.eql(NUMBER_COOKIE_VALUE.toString());
          done();
        });
    });

    describe('when a cookie value is invalid', function() {

      before(function() {
        setCookieHeader = [
          'geo_city=%D1%E0%ED%EA%F2-%CF%E5%F2%E5%F0%E1%F3%F0%E3'
        ];
      })

      it('doesnt blow up', function(done) {
        needle.get(TEST_HOST + ':' + ALL_COOKIES_TEST_PORT, function(error, response) {
          should.not.exist(error)
          var whatever = 'efbfbdefbfbdefbfbdefbfbdefbfbd2defbfbdefbfbdefbfbdefbfbdefbfbdefbfbdefbfbdefbfbdefbfbd';
          new Buffer(response.cookies.geo_city).toString('hex').should.eql(whatever)
          done();
        });
      })

    })

    describe('and response is a redirect', function() {

      var redirectServer, testPort = 22222;

      var responseCookies = [
        [ // first req
          WEIRD_COOKIE_NAME + '=' + encode(WEIRD_COOKIE_VALUE) + ';',
          BASE64_COOKIE_NAME + '=' + encode(BASE64_COOKIE_VALUE) + ';',
          'FOO=123;'
        ], [ // second req
          FORBIDDEN_COOKIE_NAME + '=' + encode(FORBIDDEN_COOKIE_VALUE) + ';',
          NUMBER_COOKIE_NAME + '=' + encode(NUMBER_COOKIE_VALUE) + ';'
        ], [ // third red
          'FOO=BAR;'
        ]
      ]

      before(function() {
        redirectServer = http.createServer(function(req, res) {
          var number  = parseInt(req.url.replace('/', ''));
          var nextUrl = 'http://' + TEST_HOST + ':' + testPort + '/' + (number + 1);

          if (responseCookies[number]) { // got cookies
            res.statusCode = 302;
            res.setHeader('Set-Cookie', responseCookies[number]);
            res.setHeader('Location', nextUrl);
          } else if (number == 3) {
            res.statusCode = 302; // redirect but without cookies
            res.setHeader('Location', nextUrl);
          }

          res.end('OK');
        }).listen(22222, TEST_HOST);
      });

      after(function(done) {
        redirectServer.close(done);
      })

      describe('and follow_set_cookies is false', function() {

        var opts = {
          follow_set_cookies: false,
          follow_max: 4
        };

        it('no cookie header set on redirection request', function(done) {
          var spy = sinon.spy(cookies, 'write');

          needle.get(TEST_HOST + ':' + testPort + '/0', opts, function(err, resp) {
            spy.callCount.should.eql(0);
            done();
          });
        });
      });

      describe('and follow_set_cookies is true', function() {
        var opts = {
          follow_set_cookies: true,
          follow_max: 4
        };

        it('should have all the cookies', function(done) {
          needle.get(TEST_HOST + ':' + testPort + '/0', opts, function(err, resp) {
            resp.cookies.should.have.property(WEIRD_COOKIE_NAME);
            resp.cookies.should.have.property(BASE64_COOKIE_NAME);
            resp.cookies.should.have.property(FORBIDDEN_COOKIE_NAME);
            resp.cookies.should.have.property(NUMBER_COOKIE_NAME);
            resp.cookies.should.have.property('FOO');
            resp.cookies.FOO.should.eql('BAR'); // should overwrite previous one
            done();
          });
        });
      });
    });

    describe('with parse_cookies = false', function() {
      it('does not parse them', function(done) {
        needle.get(
          TEST_HOST + ':' + ALL_COOKIES_TEST_PORT, { parse_cookies: false }, function(error, response) {
            assert(!response.cookies);
            done();
          });
      });
    });
  });

  describe('if request contains cookie header', function() {
    var opts = {
      cookies: {}
    };

    before(function() {
      opts.cookies[WEIRD_COOKIE_NAME] = WEIRD_COOKIE_VALUE;
      opts.cookies[BASE64_COOKIE_NAME] = BASE64_COOKIE_VALUE;
      opts.cookies[FORBIDDEN_COOKIE_NAME] = FORBIDDEN_COOKIE_VALUE;
      opts.cookies[NUMBER_COOKIE_NAME] = NUMBER_COOKIE_VALUE;
    });

    it('must be a valid cookie string', function(done) {
      var COOKIE_PAIR = /^([^=\s]+)\s*=\s*("?)\s*(.*)\s*\2\s*$/;

      var full_header = [
        WEIRD_COOKIE_NAME     + '=' + WEIRD_COOKIE_VALUE,
        BASE64_COOKIE_NAME    + '=' + BASE64_COOKIE_VALUE,
        FORBIDDEN_COOKIE_NAME + '=' + encode(FORBIDDEN_COOKIE_VALUE),
        NUMBER_COOKIE_NAME    + '=' + NUMBER_COOKIE_VALUE
      ].join('; ')

      needle.get(TEST_HOST + ':' + ALL_COOKIES_TEST_PORT, opts, function(error, response) {
        var cookieString = response.req._headers.cookie;
        cookieString.should.be.type('string');

        cookieString.split(/\s*;\s*/).forEach(function(pair) {
          COOKIE_PAIR.test(pair).should.be.exactly(true);
        });

        cookieString.should.be.exactly(full_header);
        done();
      });
    });

    it('dont have to encode allowed characters', function(done) {
      var COOKIE_PAIR = /^([^=\s]+)\s*=\s*("?)\s*(.*)\s*\2\s*$/,
        KEY_INDEX = 1,
        VALUE_INEX = 3;

      needle.get(TEST_HOST + ':' + ALL_COOKIES_TEST_PORT, opts, function(error, response) {
        var cookieObj = {},
          cookieString = response.req._headers.cookie;

        cookieString.split(/\s*;\s*/).forEach(function(str) {
          var pair = COOKIE_PAIR.exec(str);
          cookieObj[pair[KEY_INDEX]] = pair[VALUE_INEX];
        });

        cookieObj[WEIRD_COOKIE_NAME].should.be.exactly(WEIRD_COOKIE_VALUE);
        cookieObj[BASE64_COOKIE_NAME].should.be.exactly(BASE64_COOKIE_VALUE);
        done();
      });
    });

    it('must encode forbidden characters', function(done) {
      var COOKIE_PAIR = /^([^=\s]+)\s*=\s*("?)\s*(.*)\s*\2\s*$/,
        KEY_INDEX = 1,
        VALUE_INEX = 3;

      needle.get(TEST_HOST + ':' + ALL_COOKIES_TEST_PORT, opts, function(error, response) {
        var cookieObj = {},
          cookieString = response.req._headers.cookie;

        cookieString.split(/\s*;\s*/).forEach(function(str) {
          var pair = COOKIE_PAIR.exec(str);
          cookieObj[pair[KEY_INDEX]] = pair[VALUE_INEX];
        });

        cookieObj[FORBIDDEN_COOKIE_NAME].should.not.be.eql(
          FORBIDDEN_COOKIE_VALUE);
        cookieObj[FORBIDDEN_COOKIE_NAME].should.be.exactly(
          encode(FORBIDDEN_COOKIE_VALUE));
        cookieObj[FORBIDDEN_COOKIE_NAME].should.be.exactly(
          encodeURIComponent(FORBIDDEN_COOKIE_VALUE));
        done();
      });
    });
  });
});