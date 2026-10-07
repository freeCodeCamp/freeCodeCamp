# Glob To Regular Expression

[![Build Status](https://travis-ci.org/fitzgen/glob-to-regexp.png?branch=master)](https://travis-ci.org/fitzgen/glob-to-regexp)

Turn a \*-wildcard style glob (`"*.min.js"`) into a regular expression
(`/^.*\.min\.js$/`)!

To match bash-like globs, eg. `?` for any single-character match, `[a-z]` for
character ranges, and `{*.html, *.js}` for multiple alternatives, call with
`{ extended: true }`.

To obey [globstars `**`](https://github.com/isaacs/node-glob#glob-primer) rules set option `{globstar: true}`.
NOTE: This changes the behavior of `*` when `globstar` is `true` as shown below:
When `{globstar: true}`: `/foo/**` will match any string that starts with `/foo/`
like `/foo/index.htm`, `/foo/bar/baz.txt`, etc.  Also, `/foo/**/*.txt` will match
any string that starts with `/foo/` and ends with `.txt` like `/foo/bar.txt`,
`/foo/bar/baz.txt`, etc.
Whereas `/foo/*` (single `*`, not a globstar) will match strings that start with
`/foo/` like `/foo/index.htm`, `/foo/baz.txt` but will not match strings that
contain a `/` to the right like `/foo/bar/baz.txt`, `/foo/bar/baz/qux.dat`, etc.

Set flags on the resulting `RegExp` object by adding the `flags` property to the option object, eg `{ flags: "i" }` for ignoring case.

## Install

    npm install glob-to-regexp

## Usage
```js
var globToRegExp = require('glob-to-regexp');
var re = globToRegExp("p*uck");
re.test("pot luck"); // true
re.test("pluck"); // true
re.test("puck"); // true

re = globToRegExp("*.min.js");
re.test("http://example.com/jquery.min.js"); // true
re.test("http://example.com/jquery.min.js.map"); // false

re = globToRegExp("*/www/*.js");
re.test("http://example.com/www/app.js"); // true
re.test("http://example.com/www/lib/factory-proxy-model-observer.js"); // true

// Extended globs
re = globToRegExp("*/www/{*.js,*.html}", { extended: true });
re.test("http://example.com/www/app.js"); // true
re.test("http://example.com/www/index.html"); // true
```

## License

Copyright (c) 2013, Nick Fitzgerald

All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice, this
  list of conditions and the following disclaimer in the documentation and/or
  other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
