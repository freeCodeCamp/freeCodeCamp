#Introduction

Fast implementation of an url parser for node.js.

#Quick start

    npm install fast-url-parser

```js
var url = require("fast-url-parser");
```

#API

This module has exactly the same API and semantics as the `require("url");`- module that comes with node.

See [Node.JS URL API documentation](http://nodejs.org/docs/latest/api/url.html).

In addition, you may inject a custom query string implementation by setting the `url.queryString` property. The module export object must expose the methods `.parse` and `.stringify`. By default the core `"querystring"` module is used.

You may disable automatic escaping of some characters when parsing an URL by passing `true` as a forth argument so that: `url.format(url.parse(yourUrl, false, false, true)) == yourUrl`

Example:

```js
var url = require("fast-url-parser");
// the querystringparser module supports nested properties
url.queryString = require("querystringparser");
var parsed = Url.parse('/path?user[name][first]=tj&user[name][last]=holowaychuk', true);
console.log(parsed.query);
//{ user: { name: { first: 'tj', last: 'holowaychuk' } } }
```

If in your application you may want all modules use this parser automatically, you can do so by inserting this line at the beginning of your application:

```js
require("fast-url-parser").replace();
```

Anything that now calls `require("url")` will instead get an instance of this module instead of the url parser that comes with node core.

#Performance

    Petka Antonov@PETKAANTONOV-PC ~/urlparser (master)
    $ node ./benchmark/urlparser.js
    misc/url.js parse(): 402045.67
    misc/url.js format(): 253946.82
    misc/url.js resolve("../foo/bar?baz=boom"): 56701.419
    misc/url.js resolve("foo/bar"): 80059.500
    misc/url.js resolve("http://nodejs.org"): 118566.13
    misc/url.js resolve("./foo/bar?baz"): 62778.648

    Petka Antonov@PETKAANTONOV-PC ~/urlparser (master)
    $ node ./benchmark/nodecore.js
    misc/url.js parse(): 16459
    misc/url.js format(): 15978
    misc/url.js resolve("../foo/bar?baz=boom"): 6837.7
    misc/url.js resolve("foo/bar"): 7038.6
    misc/url.js resolve("http://nodejs.org"): 6491.1
    misc/url.js resolve("./foo/bar?baz"): 6968.4

#License

MIT License:

    Copyright (c) 2014 Petka Antonov

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
