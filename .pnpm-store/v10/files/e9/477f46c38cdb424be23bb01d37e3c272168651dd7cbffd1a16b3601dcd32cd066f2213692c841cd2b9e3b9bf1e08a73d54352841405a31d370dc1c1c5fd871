var test = require("tap").test,
    is_web_uri = require('../').is_web_uri;

test("testing is_web_uri", function (t) {

    // valid
    t.ok(is_web_uri('https://www.richardsonnen.com/'), 'https://www.richardsonnen.com/');
    t.ok(is_web_uri('https://www.richardsonnen.com'), 'https://www.richardsonnen.com');
    t.ok(is_web_uri('https://www.richardsonnen.com/foo/bar/test.html'), 'https://www.richardsonnen.com/foo/bar/test.html');
    t.ok(is_web_uri('https://www.richardsonnen.com/?foo=bar'), 'https://www.richardsonnen.com/?foo=bar');
    t.ok(is_web_uri('https://www.richardsonnen.com:8080/test.html'), 'https://www.richardsonnen.com:8080/test.html');
    t.ok(is_web_uri('http://www.richardsonnen.com/'), 'http://www.richardsonnen.com/');
    t.ok(is_web_uri('http://www.richardsonnen.com'), 'http://www.richardsonnen.com');
    t.ok(is_web_uri('http://www.richardsonnen.com/foo/bar/test.html'), 'http://www.richardsonnen.com/foo/bar/test.html');
    t.ok(is_web_uri('http://www.richardsonnen.com/?foo=bar'), 'http://www.richardsonnen.com/?foo=bar');
    t.ok(is_web_uri('http://www.richardsonnen.com:8080/test.html'), 'http://www.richardsonnen.com:8080/test.html');
    t.ok(is_web_uri('http://example.w3.org/path%20with%20spaces.html'), 'http://example.w3.org/path%20with%20spaces.html');
    t.ok(is_web_uri('http://192.168.0.1/'), 'http://192.168.0.1/');

    // invalid
    t.ok(!is_web_uri(''), "bad: ''");
    t.ok(!is_web_uri('ftp://ftp.richardsonnen.com'), "bad: 'ftp://ftp.richardsonnen.com'");
    t.ok(!is_web_uri('https:www.richardsonnen.com'), "bad: 'http:www.richardsonnen.com'");
    t.ok(!is_web_uri('http:www.richardsonnen.com'), "bad: 'http:www.richardsonnen.com'");


    t.end();
});
