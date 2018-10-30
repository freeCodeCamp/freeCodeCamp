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

**Examples**

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

## Escaping

The following characters have special significance in glob patterns and must be escaped if you want them to be treated as regular path characters:

- `?` (question mark)
- `*` (star)
- `|` (pipe)
- `(` (opening parenthesis)
- `)` (closing parenthesis)
- `{` (opening curly brace)
- `}` (closing curly brace)
- `[` (opening bracket)
- `]` (closing bracket)

**Example**

```js
globParent('foo/[bar]/') // 'foo'
globParent('foo/\\[bar]/') // 'foo/[bar]'
```

## Limitations

#### Braces & Brackets
This library attempts a quick and imperfect method of determining which path
parts have glob magic without fully parsing/lexing the pattern. There are some
advanced use cases that can trip it up, such as nested braces where the outer
pair is escaped and the inner one contains a path separator. If you find
yourself in the unlikely circumstance of being affected by this or need to
ensure higher-fidelity glob handling in your library, it is recommended that you
pre-process your input with [expand-braces] and/or [expand-brackets].

#### Windows
Backslashes are not valid path separators for globs. If a path with backslashes
is provided anyway, for simple cases, glob-parent will replace the path
separator for you and return the non-glob parent path (now with
forward-slashes, which are still valid as Windows path separators).

This cannot be used in conjunction with escape characters.

```js
// BAD
globParent('C:\\Program Files \\(x86\\)\\*.ext') // 'C:/Program Files /(x86/)'

// GOOD
globParent('C:/Program Files\\(x86\\)/*.ext') // 'C:/Program Files (x86)'
```

If you are using escape characters for a pattern without path parts (i.e.
relative to `cwd`), prefix with `./` to avoid confusing glob-parent.

```js
// BAD
globParent('foo \\[bar]') // 'foo '
globParent('foo \\[bar]*') // 'foo '

// GOOD
globParent('./foo \\[bar]') // 'foo [bar]'
globParent('./foo \\[bar]*') // '.'
```


Change Log
----------
[See release notes page on GitHub](https://github.com/es128/glob-parent/releases)

License
-------
[ISC](https://raw.github.com/es128/glob-parent/master/LICENSE)

[expand-braces]: https://github.com/jonschlinkert/expand-braces
[expand-brackets]: https://github.com/jonschlinkert/expand-brackets
