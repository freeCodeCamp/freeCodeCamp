# ignore-walk

[![Build
Status](https://travis-ci.org/isaacs/ignore-walk.svg?branch=master)](https://travis-ci.org/isaacs/ignore-walk)

Nested/recursive `.gitignore`/`.npmignore` parsing and filtering.

Walk a directory creating a list of entries, parsing any `.ignore`
files met along the way to exclude files.

## USAGE

```javascript
const walk = require('ignore-walk')

// All options are optional, defaults provided.

// this function returns a promise, but you can also pass a cb
// if you like that approach better.
walk({
  path: '...', // root dir to start in. defaults to process.cwd()
  ignoreFiles: [ '.gitignore' ], // list of filenames. defaults to ['.ignore']
  includeEmpty: true|false, // true to include empty dirs, default false
  follow: true|false // true to follow symlink dirs, default false
}, callback)

// to walk synchronously, do it this way:
const result = walk.sync({ path: '/wow/such/filepath' })
```

If you want to get at the underlying classes, they're at `walk.Walker`
and `walk.WalkerSync`.

## OPTIONS

* `path` The path to start in.  Defaults to `process.cwd()`

* `ignoreFiles` Filenames to treat as ignore files.  The default is
  `['.ignore']`.  (This is where you'd put `.gitignore` or
  `.npmignore` or whatever.)  If multiple ignore files are in a
  directory, then rules from each are applied in the order that the
  files are listed.

* `includeEmpty` Set to `true` to include empty directories, assuming
  they are not excluded by any of the ignore rules.  If not set, then
  this follows the standard `git` behavior of not including
  directories that are empty.

    Note: this will cause an empty directory to be included if it
    would contain an included entry, even if it would have otherwise
    been excluded itself.

    For example, given the rules `*` (ignore everything) and `!/a/b/c`
    (re-include the entry at `/a/b/c`), the directory `/a/b` will be
    included if it is empty.

* `follow`  Set to `true` to treat symbolically linked directories as
  directories, recursing into them.  There is no handling for nested
  symlinks, so `ELOOP` errors can occur in some cases when using this
  option.  Defaults to `false`.
