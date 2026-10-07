var test = require("tap").test,
    is_uri = require('../').is_uri;

test("testing is_uri", function (t) {

    // valid -  from RFC 3986 for the most part
    t.ok(is_uri('http://localhost/'), 'http://localhost/');
    t.ok(is_uri('http://example.w3.org/path%20with%20spaces.html'), 'http://example.w3.org/path%20with%20spaces.html');
    t.ok(is_uri('http://example.w3.org/%20'), 'http://example.w3.org/%20');
    t.ok(is_uri('ftp://ftp.is.co.za/rfc/rfc1808.txt'), 'ftp://ftp.is.co.za/rfc/rfc1808.txt');
    t.ok(is_uri('ftp://ftp.is.co.za/../../../rfc/rfc1808.txt'), 'ftp://ftp.is.co.za/../../../rfc/rfc1808.txt');
    t.ok(is_uri('http://www.ietf.org/rfc/rfc2396.txt'), 'http://www.ietf.org/rfc/rfc2396.txt');
    t.ok(is_uri('ldap://[2001:db8::7]/c=GB?objectClass?one'), 'ldap://[2001:db8::7]/c=GB?objectClass?one');
    t.ok(is_uri('mailto:John.Doe@example.com'), 'mailto:John.Doe@example.com');
    t.ok(is_uri('news:comp.infosystems.www.servers.unix'), 'news:comp.infosystems.www.servers.unix');
    t.ok(is_uri('tel:+1-816-555-1212'), 'tel:+1-816-555-1212');
    t.ok(is_uri('telnet://192.0.2.16:80/'), 'telnet://192.0.2.16:80/');
    t.ok(is_uri('urn:oasis:names:specification:docbook:dtd:xml:4.1.2'), 'urn:oasis:names:specification:docbook:dtd:xml:4.1.2');


    // invalid
    t.notOk(is_uri(''), "bad: ''");
    t.notOk(is_uri('foo'), 'bad: foo');
    t.notOk(is_uri('foo@bar'), 'bad: foo@bar');
    t.notOk(is_uri('http://<foo>'), 'bad: http://<foo>'); // illegal characters
    t.notOk(is_uri('://bob/'), 'bad: ://bob/'); // empty schema
    t.notOk(is_uri('1http://bob'), 'bad: 1http://bob/'); // bad schema
    t.notOk(is_uri('1http:////foo.html'), 'bad: 1http://bob/'); // bad path
    t.notOk(is_uri('http://example.w3.org/%illegal.html'), 'http://example.w3.org/%illegal.html');
    t.notOk(is_uri('http://example.w3.org/%a'), 'http://example.w3.org/%a'); // partial escape
    t.notOk(is_uri('http://example.w3.org/%a/foo'), 'http://example.w3.org/%a/foo'); // partial escape
    t.notOk(is_uri('http://example.w3.org/%at'), 'http://example.w3.org/%at'); // partial escape

    t.end();
});
