var globToRegexp = require("./index.js");
var assert = require("assert");

function assertMatch(glob, str, opts) {
  //console.log(glob, globToRegexp(glob, opts));
  assert.ok(globToRegexp(glob, opts).test(str));
}

function assertNotMatch(glob, str, opts) {
  //console.log(glob, globToRegexp(glob, opts));
  assert.equal(false, globToRegexp(glob, opts).test(str));
}

function test(globstar) {
  // Match everything
  assertMatch("*", "foo");
  assertMatch("*", "foo", { flags: 'g' });

  // Match the end
  assertMatch("f*", "foo");
  assertMatch("f*", "foo", { flags: 'g' });

  // Match the start
  assertMatch("*o", "foo");
  assertMatch("*o", "foo", { flags: 'g' });

  // Match the middle
  assertMatch("f*uck", "firetruck");
  assertMatch("f*uck", "firetruck", { flags: 'g' });

  // Don't match without Regexp 'g'
  assertNotMatch("uc", "firetruck");
  // Match anywhere with RegExp 'g'
  assertMatch("uc", "firetruck", { flags: 'g' });

  // Match zero characters
  assertMatch("f*uck", "fuck");
  assertMatch("f*uck", "fuck", { flags: 'g' });

  // More complex matches
  assertMatch("*.min.js", "http://example.com/jquery.min.js", {globstar: false});
  assertMatch("*.min.*", "http://example.com/jquery.min.js", {globstar: false});
  assertMatch("*/js/*.js", "http://example.com/js/jquery.min.js", {globstar: false});

  // More complex matches with RegExp 'g' flag (complex regression)
  assertMatch("*.min.*", "http://example.com/jquery.min.js", { flags: 'g' });
  assertMatch("*.min.js", "http://example.com/jquery.min.js", { flags: 'g' });
  assertMatch("*/js/*.js", "http://example.com/js/jquery.min.js", { flags: 'g' });

  // Test string  "\\\\/$^+?.()=!|{},[].*"  represents  <glob>\\/$^+?.()=!|{},[].*</glob>
  // The equivalent regex is:  /^\\\/\$\^\+\?\.\(\)\=\!\|\{\}\,\[\]\..*$/
  // Both glob and regex match:  \/$^+?.()=!|{},[].*
  var testStr = "\\\\/$^+?.()=!|{},[].*";
  var targetStr = "\\/$^+?.()=!|{},[].*";
  assertMatch(testStr, targetStr);
  assertMatch(testStr, targetStr, { flags: 'g' });

  // Equivalent matches without/with using RegExp 'g'
  assertNotMatch(".min.", "http://example.com/jquery.min.js");
  assertMatch("*.min.*", "http://example.com/jquery.min.js");
  assertMatch(".min.", "http://example.com/jquery.min.js", { flags: 'g' });

  assertNotMatch("http:", "http://example.com/jquery.min.js");
  assertMatch("http:*", "http://example.com/jquery.min.js");
  assertMatch("http:", "http://example.com/jquery.min.js", { flags: 'g' });

  assertNotMatch("min.js", "http://example.com/jquery.min.js");
  assertMatch("*.min.js", "http://example.com/jquery.min.js");
  assertMatch("min.js", "http://example.com/jquery.min.js", { flags: 'g' });

  // Match anywhere (globally) using RegExp 'g'
  assertMatch("min", "http://example.com/jquery.min.js", { flags: 'g' });
  assertMatch("/js/", "http://example.com/js/jquery.min.js", { flags: 'g' });

  assertNotMatch("/js*jq*.js", "http://example.com/js/jquery.min.js");
  assertMatch("/js*jq*.js", "http://example.com/js/jquery.min.js", { flags: 'g' });

  // Extended mode

  // ?: Match one character, no more and no less
  assertMatch("f?o", "foo", { extended: true });
  assertNotMatch("f?o", "fooo", { extended: true });
  assertNotMatch("f?oo", "foo", { extended: true });

  // ?: Match one character with RegExp 'g'
  assertMatch("f?o", "foo", { extended: true,  globstar: globstar, flags: 'g' });
  assertMatch("f?o", "fooo", { extended: true,  globstar: globstar, flags: 'g' });
  assertMatch("f?o?", "fooo", { extended: true,  globstar: globstar, flags: 'g' });
  assertNotMatch("?fo", "fooo", { extended: true,  globstar: globstar, flags: 'g' });
  assertNotMatch("f?oo", "foo", { extended: true,  globstar: globstar, flags: 'g' });
  assertNotMatch("foo?", "foo", { extended: true,  globstar: globstar, flags: 'g' });

  // []: Match a character range
  assertMatch("fo[oz]", "foo", { extended: true });
  assertMatch("fo[oz]", "foz", { extended: true });
  assertNotMatch("fo[oz]", "fog", { extended: true });

  // []: Match a character range and RegExp 'g' (regresion)
  assertMatch("fo[oz]", "foo", { extended: true,  globstar: globstar, flags: 'g' });
  assertMatch("fo[oz]", "foz", { extended: true,  globstar: globstar, flags: 'g' });
  assertNotMatch("fo[oz]", "fog", { extended: true,  globstar: globstar, flags: 'g' });

  // {}: Match a choice of different substrings
  assertMatch("foo{bar,baaz}", "foobaaz", { extended: true });
  assertMatch("foo{bar,baaz}", "foobar", { extended: true });
  assertNotMatch("foo{bar,baaz}", "foobuzz", { extended: true });
  assertMatch("foo{bar,b*z}", "foobuzz", { extended: true });

  // {}: Match a choice of different substrings and RegExp 'g' (regression)
  assertMatch("foo{bar,baaz}", "foobaaz", { extended: true,  globstar: globstar, flags: 'g' });
  assertMatch("foo{bar,baaz}", "foobar", { extended: true,  globstar: globstar, flags: 'g' });
  assertNotMatch("foo{bar,baaz}", "foobuzz", { extended: true,  globstar: globstar, flags: 'g' });
  assertMatch("foo{bar,b*z}", "foobuzz", { extended: true,  globstar: globstar, flags: 'g' });

  // More complex extended matches
  assertMatch("http://?o[oz].b*z.com/{*.js,*.html}",
              "http://foo.baaz.com/jquery.min.js",
              { extended: true });
  assertMatch("http://?o[oz].b*z.com/{*.js,*.html}",
              "http://moz.buzz.com/index.html",
              { extended: true });
  assertNotMatch("http://?o[oz].b*z.com/{*.js,*.html}",
                 "http://moz.buzz.com/index.htm",
                 { extended: true });
  assertNotMatch("http://?o[oz].b*z.com/{*.js,*.html}",
                 "http://moz.bar.com/index.html",
                 { extended: true });
  assertNotMatch("http://?o[oz].b*z.com/{*.js,*.html}",
                 "http://flozz.buzz.com/index.html",
                 { extended: true });

  // More complex extended matches and RegExp 'g' (regresion)
  assertMatch("http://?o[oz].b*z.com/{*.js,*.html}",
              "http://foo.baaz.com/jquery.min.js",
              { extended: true,  globstar: globstar, flags: 'g' });
  assertMatch("http://?o[oz].b*z.com/{*.js,*.html}",
              "http://moz.buzz.com/index.html",
              { extended: true,  globstar: globstar, flags: 'g' });
  assertNotMatch("http://?o[oz].b*z.com/{*.js,*.html}",
                 "http://moz.buzz.com/index.htm",
                 { extended: true,  globstar: globstar, flags: 'g' });
  assertNotMatch("http://?o[oz].b*z.com/{*.js,*.html}",
                 "http://moz.bar.com/index.html",
                 { extended: true,  globstar: globstar, flags: 'g' });
  assertNotMatch("http://?o[oz].b*z.com/{*.js,*.html}",
                 "http://flozz.buzz.com/index.html",
                 { extended: true,  globstar: globstar, flags: 'g' });

  // globstar
  assertMatch("http://foo.com/**/{*.js,*.html}",
              "http://foo.com/bar/jquery.min.js",
              { extended: true,  globstar: globstar, flags: 'g' });
  assertMatch("http://foo.com/**/{*.js,*.html}",
              "http://foo.com/bar/baz/jquery.min.js",
              { extended: true,  globstar: globstar, flags: 'g' });
  assertMatch("http://foo.com/**",
              "http://foo.com/bar/baz/jquery.min.js",
              { extended: true,  globstar: globstar, flags: 'g' });

  // Remaining special chars should still match themselves
  // Test string  "\\\\/$^+.()=!|,.*"  represents  <glob>\\/$^+.()=!|,.*</glob>
  // The equivalent regex is:  /^\\\/\$\^\+\.\(\)\=\!\|\,\..*$/
  // Both glob and regex match:  \/$^+.()=!|,.*
  var testExtStr = "\\\\/$^+.()=!|,.*";
  var targetExtStr = "\\/$^+.()=!|,.*";
  assertMatch(testExtStr, targetExtStr, { extended: true });
  assertMatch(testExtStr, targetExtStr, { extended: true,  globstar: globstar, flags: 'g' });
}

// regression
// globstar false
test(false)
// globstar true
test(true);

// globstar specific tests
assertMatch("/foo/*", "/foo/bar.txt", {globstar: true });
assertMatch("/foo/**", "/foo/baz.txt", {globstar: true });
assertMatch("/foo/**", "/foo/bar/baz.txt", {globstar: true });
assertMatch("/foo/*/*.txt", "/foo/bar/baz.txt", {globstar: true });
assertMatch("/foo/**/*.txt", "/foo/bar/baz.txt", {globstar: true });
assertMatch("/foo/**/*.txt", "/foo/bar/baz/qux.txt", {globstar: true });
assertMatch("/foo/**/bar.txt", "/foo/bar.txt", {globstar: true });
assertMatch("/foo/**/**/bar.txt", "/foo/bar.txt", {globstar: true });
assertMatch("/foo/**/*/baz.txt", "/foo/bar/baz.txt", {globstar: true });
assertMatch("/foo/**/*.txt", "/foo/bar.txt", {globstar: true });
assertMatch("/foo/**/**/*.txt", "/foo/bar.txt", {globstar: true });
assertMatch("/foo/**/*/*.txt", "/foo/bar/baz.txt", {globstar: true });
assertMatch("**/*.txt", "/foo/bar/baz/qux.txt", {globstar: true });
assertMatch("**/foo.txt", "foo.txt", {globstar: true });
assertMatch("**/*.txt", "foo.txt", {globstar: true });

assertNotMatch("/foo/*", "/foo/bar/baz.txt", {globstar: true });
assertNotMatch("/foo/*.txt", "/foo/bar/baz.txt", {globstar: true });
assertNotMatch("/foo/*/*.txt", "/foo/bar/baz/qux.txt", {globstar: true });
assertNotMatch("/foo/*/bar.txt", "/foo/bar.txt", {globstar: true });
assertNotMatch("/foo/*/*/baz.txt", "/foo/bar/baz.txt", {globstar: true });
assertNotMatch("/foo/**.txt", "/foo/bar/baz/qux.txt", {globstar: true });
assertNotMatch("/foo/bar**/*.txt", "/foo/bar/baz/qux.txt", {globstar: true });
assertNotMatch("/foo/bar**", "/foo/bar/baz.txt", {globstar: true });
assertNotMatch("**/.txt", "/foo/bar/baz/qux.txt", {globstar: true });
assertNotMatch("*/*.txt", "/foo/bar/baz/qux.txt", {globstar: true });
assertNotMatch("*/*.txt", "foo.txt", {globstar: true });

assertNotMatch("http://foo.com/*",
               "http://foo.com/bar/baz/jquery.min.js",
               { extended: true,  globstar: true });
assertNotMatch("http://foo.com/*",
               "http://foo.com/bar/baz/jquery.min.js",
               { globstar: true });

assertMatch("http://foo.com/*",
            "http://foo.com/bar/baz/jquery.min.js",
            { globstar: false });
assertMatch("http://foo.com/**",
            "http://foo.com/bar/baz/jquery.min.js",
            { globstar: true });

assertMatch("http://foo.com/*/*/jquery.min.js",
            "http://foo.com/bar/baz/jquery.min.js",
            { globstar: true });
assertMatch("http://foo.com/**/jquery.min.js",
            "http://foo.com/bar/baz/jquery.min.js",
            { globstar: true });
assertMatch("http://foo.com/*/*/jquery.min.js",
            "http://foo.com/bar/baz/jquery.min.js",
            { globstar: false });
assertMatch("http://foo.com/*/jquery.min.js",
            "http://foo.com/bar/baz/jquery.min.js",
            { globstar: false });
assertNotMatch("http://foo.com/*/jquery.min.js",
               "http://foo.com/bar/baz/jquery.min.js",
               { globstar: true });

console.log("Ok!");
