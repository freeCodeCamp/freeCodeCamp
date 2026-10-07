var test = require("tap").test,
    is_https_uri = require('../').is_https_uri;

test("testing is_https_uri", function (t) {

    // valid
    t.ok(is_https_uri('https://www.richardsonnen.com/'), 'https://www.richardsonnen.com/');
    t.ok(is_https_uri('https://www.richardsonnen.com'), 'https://www.richardsonnen.com');
    t.ok(is_https_uri('https://www.richardsonnen.com/foo/bar/test.html'), 'https://www.richardsonnen.com/foo/bar/test.html');
    t.ok(is_https_uri('https://www.richardsonnen.com/?foo=bar'), 'https://www.richardsonnen.com/?foo=bar');
    t.ok(is_https_uri('https://www.richardsonnen.com:8080/test.html'), 'https://www.richardsonnen.com:8080/test.html');
    t.ok(is_https_uri('https://example.w3.org/path%20with%20spaces.html'), 'http://example.w3.org/path%20with%20spaces.html');
    t.ok(is_https_uri('https://192.168.0.1/'), 'http://192.168.0.1/');

    // invalid
    t.notOk(is_https_uri(''), "bad: ''");
    t.notOk(is_https_uri('http://www.richardsonnen.com/'), 'http://www.richardsonnen.com/');
    t.notOk(is_https_uri('ftp://ftp.richardsonnen.com'), "bad: 'ftp://ftp.richardsonnen.com'");
    t.notOk(is_https_uri('https:www.richardsonnen.com'), "bad: 'https:www.richardsonnen.com'");

    t.end();
});
