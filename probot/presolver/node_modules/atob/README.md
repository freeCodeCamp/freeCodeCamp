atob
===

| **atob**
| [btoa](https://git.coolaj86.com/coolaj86/btoa.js)
| [unibabel.js](https://git.coolaj86.com/coolaj86/unibabel.js)
| Sponsored by [ppl](https://ppl.family)

Uses `Buffer` to emulate the exact functionality of the browser's atob.

Note: Unicode may be handled incorrectly (like the browser).

It turns base64-encoded <strong>a</strong>scii data back **to** <strong>b</strong>inary.

```javascript
(function () {
  "use strict";

  var atob = require('atob');
  var b64 = "SGVsbG8sIFdvcmxkIQ==";
  var bin = atob(b64);

  console.log(bin); // "Hello, World!"
}());
```

### Need Unicode and Binary Support in the Browser?

Check out [unibabel.js](https://git.coolaj86.com/coolaj86/unibabel.js)

Changelog
=======

  * v2.1.0 address a few issues and PRs, update URLs
  * v2.0.0 provide browser version for ios web workers
  * v1.2.0 provide (empty) browser version
  * v1.1.3 add MIT license
  * v1.1.2 node only

LICENSE
=======

Code copyright 2012-2018 AJ ONeal

Dual-licensed MIT and Apache-2.0

Docs copyright 2012-2018 AJ ONeal

Docs released under [Creative Commons](https://git.coolaj86.com/coolaj86/atob.js/blob/master/LICENSE.DOCS).
