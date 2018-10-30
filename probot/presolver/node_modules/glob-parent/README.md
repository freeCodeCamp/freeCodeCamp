glob-parent [![Build Status](https://travis-ci.org/es128/glob-parent.svg)](https://travis-ci.org/es128/glob-parent) [![Coverage Status](https://img.shields.io/coveralls/es128/glob-parent.svg)](https://coveralls.io/r/es128/glob-parent?branch=master)
======
Javascript module to extract the non-magic parent path from a glob string.

[![NPM](https://nodei.co/npm/glob-parent.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/glob-parent/)
[![NPM](https://nodei.co/npm-dl/glob-parent.png?height=3&months=9)](https://nodei.co/npm-dl/glob-parent/)

Usage
-----
```sh
npm install glob-parent --save
```

```js
var globParent = require('glob-parent');

globParent('path/to/*.js'); // 'path/to'
globParent('/root/path/to/*.js'); // '/root/path/to'
globParent('/*.js'); // '/'
globParent('*.js'); // '.'
globParent('**/*.js'); // '.'
globParent('path/{to,from}'); // 'path'
globParent('path/!(to|from)'); // 'path'
globParent('path/?(to|from)'); // 'path'
globParent('path/+(to|from)'); // 'path'
globParent('path/*(to|from)'); // 'path'
globParent('path/@(to|from)'); // 'path'
globParent('path/**/*'); // 'path'

// if provided a non-glob path, returns the nearest dir
globParent('path/foo/bar.js'); // 'path/foo'
globParent('path/foo/'); // 'path/foo'
globParent('path/foo'); // 'path' (see issue #3 for details)

```

Change Log
----------
[See release notes page on GitHub](https://github.com/es128/glob-parent/releases)

License
-------
[ISC](https://raw.github.com/es128/glob-parent/master/LICENSE)
