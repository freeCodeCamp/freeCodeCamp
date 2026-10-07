# html-escaper [![Build Status](https://travis-ci.org/WebReflection/html-escaper.svg?branch=master)](https://travis-ci.org/WebReflection/html-escaper) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/html-escaper/badge.svg?branch=master)](https://coveralls.io/github/WebReflection/html-escaper?branch=master)
A simple module to escape/unescape common problematic entities.


### How
This package is available in npm so `npm install html-escaper` is all you need to do, using eventually the global flag too.

Once the module is present
```js
var html = require('html-escaper');

// two basic methods
html.escape('string');
html.unescape('escaped string');
```


### Why
there is basically one rule only: do not **ever** replace one char after another if you are transforming a string into another.

```js
// WARNING: THIS IS WRONG
// if you are that kind of dev that does this
function escape(s) {
  return s.replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/'/g, "&#39;")
          .replace(/"/g, "&quot;");
}

// you might be the same dev that does this too
function unescape(s) {
  return s.replace(/&amp;/g, "&")
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .replace(/&#39;/g, "'")
          .replace(/&quot;/g, '"');
}

// guess what we have here ?
unescape('&amp;lt;');

// now guess this XSS too ...
unescape('&amp;lt;script&amp;gt;alert("yo")&amp;lt;/script&amp;gt;');


```

The last example will produce `<script>alert("yo")</script>` instead of the expected `&lt;script&gt;alert("yo")&lt;/script&gt;`.

Nothing like this could possibly happen if we grab all chars at once and either ways.
It's just a fortunate case that after swapping `&` with `&amp;` no other replace will be affected, but it's not portable and universally a bad practice.

Grab all chars at once, no excuses!



**more details**
As somebody might think it's an `unescape` issue only, it's not. Being an anti-pattern with side effects works both ways.

As example, changing the order of the replacement in escaping would produce the unexpected:
```js
function escape(s) {
  return s.replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/'/g, "&#39;")
          .replace(/"/g, "&quot;")
          .replace(/&/g, "&amp;");
}

escape('<'); // &amp;lt; instead of &lt;
```
If we do not want to code with the fear that the order wasn't perfect or that our order in either escaping or unescaping is different from the order another method or function used, if we understand the issue and we agree it's potentially a disaster prone approach, if we add the fact in this case creating 4 RegExp objects each time and invoking 4 times `.replace` trough the `String.prototype` is also potentially slower than creating one function only holding one object, or holding the function too, we should agree there is not absolutely any valid reason to keep proposing a char-by-char implementation.

We have proofs this approach can fail already so ... why should we risk? Just avoid and grab all chars at once or simply use this tiny utility.

### Backtick
Internt explorer < 9 has [some backtick issue](https://html5sec.org/#102)

For compatibility sake with common server-side HTML entities encoders and decoders, and in order to have the most reliable I/O, this little utility will NOT fix this IE < 9 problem.

It is also important to note that if we create valid HTML and we set attributes at runtime through this utility, backticks in strings cannot possibly affect attribute behaviors.

```js
var img = new Image();
img.src = html.escape(
  'x` `<script>alert(1)</script>"` `'
);
// it won't cause problems even in IE < 9
```

**However**, if you use `innerHTML` and you target IE < 9 then [this **might** be a problem](https://github.com/nette/nette/issues/1496).

Accordingly, if you need more chars and/or backticks to be escaped and unescaped, feel free to use alternatives like [lodash](https://github.com/lodash/lodash) or [he](https://www.npmjs.com/package/he)

Here a bit more of [my POV](https://github.com/WebReflection/html-escaper/commit/52d554fc6e8583b6ffdd357967cf71962fc07cf6#commitcomment-10625122) and why I haven't implemented same thing alternatives did. Good news: those are alternatives ;-)