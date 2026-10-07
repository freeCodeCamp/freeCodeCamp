<p align="center">
  <a href="https://gulpjs.com">
    <img height="257" width="114" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png">
  </a>
</p>

# glob-parent

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][ci-image]][ci-url] [![Coveralls Status][coveralls-image]][coveralls-url]

Extract the non-magic parent path from a glob string.

## Usage

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

## API

### `globParent(maybeGlobString, [options])`

Takes a string and returns the part of the path before the glob begins. Be aware of Escaping rules and Limitations below.

#### options

```js
{
  // Disables the automatic conversion of slashes for Windows
  flipBackslashes: true;
}
```

## Escaping

The following characters have special significance in glob patterns and must be escaped if you want them to be treated as regular path characters:

- `?` (question mark) unless used as a path segment alone
- `*` (asterisk)
- `|` (pipe)
- `(` (opening parenthesis)
- `)` (closing parenthesis)
- `{` (opening curly brace)
- `}` (closing curly brace)
- `[` (opening bracket)
- `]` (closing bracket)

**Example**

```js
globParent('foo/[bar]/'); // 'foo'
globParent('foo/\\[bar]/'); // 'foo/[bar]'
```

## Limitations

### Braces & Brackets

This library attempts a quick and imperfect method of determining which path
parts have glob magic without fully parsing/lexing the pattern. There are some
advanced use cases that can trip it up, such as nested braces where the outer
pair is escaped and the inner one contains a path separator. If you find
yourself in the unlikely circumstance of being affected by this or need to
ensure higher-fidelity glob handling in your library, it is recommended that you
pre-process your input with [expand-braces] and/or [expand-brackets].

### Windows

Backslashes are not valid path separators for globs. If a path with backslashes
is provided anyway, for simple cases, glob-parent will replace the path
separator for you and return the non-glob parent path (now with
forward-slashes, which are still valid as Windows path separators).

This cannot be used in conjunction with escape characters.

```js
// BAD
globParent('C:\\Program Files \\(x86\\)\\*.ext'); // 'C:/Program Files /(x86/)'

// GOOD
globParent('C:/Program Files\\(x86\\)/*.ext'); // 'C:/Program Files (x86)'
```

If you are using escape characters for a pattern without path parts (i.e.
relative to `cwd`), prefix with `./` to avoid confusing glob-parent.

```js
// BAD
globParent('foo \\[bar]'); // 'foo '
globParent('foo \\[bar]*'); // 'foo '

// GOOD
globParent('./foo \\[bar]'); // 'foo [bar]'
globParent('./foo \\[bar]*'); // '.'
```

## License

ISC

<!-- prettier-ignore-start -->
[downloads-image]: https://img.shields.io/npm/dm/glob-parent.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/glob-parent
[npm-image]: https://img.shields.io/npm/v/glob-parent.svg?style=flat-square

[ci-url]: https://github.com/gulpjs/glob-parent/actions?query=workflow:dev
[ci-image]: https://img.shields.io/github/workflow/status/gulpjs/glob-parent/dev?style=flat-square

[coveralls-url]: https://coveralls.io/r/gulpjs/glob-parent
[coveralls-image]: https://img.shields.io/coveralls/gulpjs/glob-parent/master.svg?style=flat-square
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
[expand-braces]: https://github.com/jonschlinkert/expand-braces
[expand-brackets]: https://github.com/jonschlinkert/expand-brackets
<!-- prettier-ignore-end -->
