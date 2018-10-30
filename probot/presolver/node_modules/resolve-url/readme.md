Overview
========

[![browser support](https://ci.testling.com/lydell/resolve-url.png)](https://ci.testling.com/lydell/resolve-url)

Like Node.js’ [`path.resolve`]/[`url.resolve`] for the browser.

```js
var resolveUrl = require("resolve-url")

window.location
// https://example.com/articles/resolving-urls/edit

resolveUrl("remove")
// https://example.com/articles/resolving-urls/remove

resolveUrl("/static/scripts/app.js")
// https://example.com/static/scripts/app.js

// Imagine /static/scripts/app.js contains `//# sourceMappingURL=../source-maps/app.js.map`
resolveUrl("/static/scripts/app.js", "../source-maps/app.js.map")
// https://example.com/static/source-maps/app.js.map

resolveUrl("/static/scripts/app.js", "../source-maps/app.js.map", "../coffee/app.coffee")
// https://example.com/static/coffee/app.coffee

resolveUrl("//cdn.example.com/jquery.js")
// https://cdn.example.com/jquery.js

resolveUrl("http://foo.org/")
// http://foo.org/
```


Installation
============

- `npm install resolve-url`
- `bower install resolve-url`
- `component install lydell/resolve-url`

Works with CommonJS, AMD and browser globals, through UMD.


Usage
=====

### `resolveUrl(...urls)` ###

Pass one or more urls. Resolves the last one to an absolute url, using the
previous ones and `window.location`.

It’s like starting out on `window.location`, and then clicking links with the
urls as `href` attributes in order, from left to right.

Unlike Node.js’ [`path.resolve`], this function always goes through all of the
arguments, from left to right. `path.resolve` goes from right to left and only
in the worst case goes through them all. Should that matter.

Actually, the function is _really_ like clicking a lot of links in series: An
actual `<a>` gets its `href` attribute set for each url! This means that the
url resolution of the browser is used, which makes this module really
light-weight.

Also note that this functions deals with urls, not paths, so in that respect it
has more in common with Node.js’ [`url.resolve`]. But the arguments are more
like [`path.resolve`].

[`path.resolve`]: http://nodejs.org/api/path.html#path_path_resolve_from_to
[`url.resolve`]: http://nodejs.org/api/url.html#url_url_resolve_from_to


Tests
=====

Run `npm test`, which lints the code and then gives you a link to open in a
browser of choice (using `testling`).


License
=======

[The X11 (“MIT”) License](LICENSE).
