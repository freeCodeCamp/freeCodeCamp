var test = require("tap").test,
    is_http_uri = require('../').is_http_uri;

test("testing is_http_uri", function (t) {

    // valid
    t.ok(is_http_uri('http://www.richardsonnen.com/'), 'http://www.richardsonnen.com/');
    t.ok(is_http_uri('http://www.richardsonnen.com'), 'http://www.richardsonnen.com');
    t.ok(is_http_uri('http://www.richardsonnen.com/foo/bar/test.html'), 'http://www.richardsonnen.com/foo/bar/test.html');
    t.ok(is_http_uri('http://www.richardsonnen.com/?foo=bar'), 'http://www.richardsonnen.com/?foo=bar');
    t.ok(is_http_uri('http://www.richardsonnen.com:8080/test.html'), 'http://www.richardsonnen.com:8080/test.html');
    t.ok(is_http_uri('http://example.w3.org/path%20with%20spaces.html'), 'http://example.w3.org/path%20with%20spaces.html');
    t.ok(is_http_uri('http://192.168.0.1/'), 'http://192.168.0.1/');

    // invalid
    t.notOk(is_http_uri(''), "bad: ''");
    t.notOk(is_http_uri('ftp://ftp.richardsonnen.com'), "bad: 'ftp://ftp.richardsonnen.com'");
    t.notOk(is_http_uri('http:www.richardsonnen.com'), "bad: 'http:www.richardsonnen.com'");
    t.notOk(is_http_uri('https://www.richardsonnen.com'), "bad: 'https://www.richardsonnen.com'");

    t.end();
});
