# require-package-name

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Gets the base package name for a module path in a require statement. Assumes the path [is not relative](https://www.npmjs.com/package/relative-require-regex).

```js
var name = require('require-package-name')

//get the module name for a require path
name('events')                  => 'events'
name('events/')                 => 'events'
name('events/index.js')         => 'events'
name('@username/button/a.js')   => '@username/button'
name('@username//foo/a.js')     => '@username/foo'

//or, get the base name excluding any scope
name.base('@username/button/a.js')   => 'button'
name.base('@username//foo/a.js')     => 'foo'
```

## Usage

[![NPM](https://nodei.co/npm/require-package-name.png)](https://www.npmjs.com/package/require-package-name)

#### `name = packageName(str)`

Gets the name of a module for a require string like `'xtend'` from `'xtend/mutable.js'`.

#### `base = packageName.base(str)`

Gets the *base* name of a module. This is the same as above, except it excludes scoped usernames.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/require-package-name/blob/master/LICENSE.md) for details.
