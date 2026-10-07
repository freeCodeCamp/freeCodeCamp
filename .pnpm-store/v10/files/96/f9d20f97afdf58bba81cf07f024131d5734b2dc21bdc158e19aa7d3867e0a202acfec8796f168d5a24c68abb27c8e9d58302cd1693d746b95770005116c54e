# Glob

Match files using the patterns the shell uses, like stars and stuff.

[![Build Status](https://travis-ci.org/isaacs/node-glob.svg?branch=master)](https://travis-ci.org/isaacs/node-glob/) [![Build Status](https://ci.appveyor.com/api/projects/status/kd7f3yftf7unxlsx?svg=true)](https://ci.appveyor.com/project/isaacs/node-glob) [![Coverage Status](https://coveralls.io/repos/isaacs/node-glob/badge.svg?branch=master&service=github)](https://coveralls.io/github/isaacs/node-glob?branch=master)

This is a glob implementation in JavaScript.  It uses the `minimatch`
library to do its matching.

![a fun cartoon logo made of glob characters](logo/glob.png)

## Usage

Install with npm

```
npm i glob
```

```javascript
var glob = require("glob")

// options is optional
glob("**/*.js", options, function (er, files) {
  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.js"]
  // er is an error object or null.
})
```

## Glob Primer

"Globs" are the patterns you type when you do stuff like `ls *.js` on
the command line, or put `build/*` in a `.gitignore` file.

Before parsing the path part patterns, braced sections are expanded
into a set.  Braced sections start with `{` and end with `}`, with any
number of comma-delimited sections within.  Braced sections may contain
slash characters, so `a{/b/c,bcd}` would expand into `a/b/c` and `abcd`.

The following characters have special magic meaning when used in a
path portion:

* `*` Matches 0 or more characters in a single path portion
* `?` Matches 1 character
* `[...]` Matches a range of characters, similar to a RegExp range.
  If the first character of the range is `!` or `^` then it matches
  any character not in the range.
* `!(pattern|pattern|pattern)` Matches anything that does not match
  any of the patterns provided.
* `?(pattern|pattern|pattern)` Matches zero or one occurrence of the
  patterns provided.
* `+(pattern|pattern|pattern)` Matches one or more occurrences of the
  patterns provided.
* `*(a|b|c)` Matches zero or more occurrences of the patterns provided
* `@(pattern|pat*|pat?erN)` Matches exactly one of the patterns
  provided
* `**` If a "globstar" is alone in a path portion, then it matches
  zero or more directories and subdirectories searching for matches.
  It does not crawl symlinked directories.

### Dots

If a file or directory path portion has a `.` as the first character,
then it will not match any glob pattern unless that pattern's
corresponding path part also has a `.` as its first character.

For example, the pattern `a/.*/c` would match the file at `a/.b/c`.
However the pattern `a/*/c` would not, because `*` does not start with
a dot character.

You can make glob treat dots as normal characters by setting
`dot:true` in the options.

### Basename Matching

If you set `matchBase:true` in the options, and the pattern has no
slashes in it, then it will seek for any file anywhere in the tree
with a matching basename.  For example, `*.js` would match
`test/simple/basic.js`.

### Empty Sets

If no matching files are found, then an empty array is returned.  This
differs from the shell, where the pattern itself is returned.  For
example:

    $ echo a*s*d*f
    a*s*d*f

To get the bash-style behavior, set the `nonull:true` in the options.

### See Also:

* `man sh`
* `man bash` (Search for "Pattern Matching")
* `man 3 fnmatch`
* `man 5 gitignore`
* [minimatch documentation](https://github.com/isaacs/minimatch)

## glob.hasMagic(pattern, [options])

Returns `true` if there are any special characters in the pattern, and
`false` otherwise.

Note that the options affect the results.  If `noext:true` is set in
the options object, then `+(a|b)` will not be considered a magic
pattern.  If the pattern has a brace expansion, like `a/{b/c,x/y}`
then that is considered magical, unless `nobrace:true` is set in the
options.

## glob(pattern, [options], cb)

* `pattern` `{String}` Pattern to be matched
* `options` `{Object}`
* `cb` `{Function}`
  * `err` `{Error | null}`
  * `matches` `{Array<String>}` filenames found matching the pattern

Perform an asynchronous glob search.

## glob.sync(pattern, [options])

* `pattern` `{String}` Pattern to be matched
* `options` `{Object}`
* return: `{Array<String>}` filenames found matching the pattern

Perform a synchronous glob search.

## Class: glob.Glob

Create a Glob object by instantiating the `glob.Glob` class.

```javascript
var Glob = require("glob").Glob
var mg = new Glob(pattern, options, cb)
```

It's an EventEmitter, and starts walking the filesystem to find matches
immediately.

### new glob.Glob(pattern, [options], [cb])

* `pattern` `{String}` pattern to search for
* `options` `{Object}`
* `cb` `{Function}` Called when an error occurs, or matches are found
  * `err` `{Error | null}`
  * `matches` `{Array<String>}` filenames found matching the pattern

Note that if the `sync` flag is set in the options, then matches will
be immediately available on the `g.found` member.

### Properties

* `minimatch` The minimatch object that the glob uses.
* `options` The options object passed in.
* `aborted` Boolean which is set to true when calling `abort()`.  There
  is no way at this time to continue a glob search after aborting, but
  you can re-use the statCache to avoid having to duplicate syscalls.
* `cache` Convenience object.  Each field has the following possible
  values:
  * `false` - Path does not exist
  * `true` - Path exists
  * `'FILE'` - Path exists, and is not a directory
  * `'DIR'` - Path exists, and is a directory
  * `[file, entries, ...]` - Path exists, is a directory, and the
    array value is the results of `fs.readdir`
* `statCache` Cache of `fs.stat` results, to prevent statting the same
  path multiple times.
* `symlinks` A record of which paths are symbolic links, which is
  relevant in resolving `**` patterns.
* `realpathCache` An optional object which is passed to `fs.realpath`
  to minimize unnecessary syscalls.  It is stored on the instantiated
  Glob object, and may be re-used.

### Events

* `end` When the matching is finished, this is emitted with all the
  matches found.  If the `nonull` option is set, and no match was found,
  then the `matches` list contains the original pattern.  The matches
  are sorted, unless the `nosort` flag is set.
* `match` Every time a match is found, this is emitted with the specific
  thing that matched. It is not deduplicated or resolved to a realpath.
* `error` Emitted when an unexpected error is encountered, or whenever
  any fs error occurs if `options.strict` is set.
* `abort` When `abort()` is called, this event is raised.

### Methods

* `pause` Temporarily stop the search
* `resume` Resume the search
* `abort` Stop the search forever

### Options

All the options that can be passed to Minimatch can also be passed to
Glob to change pattern matching behavior.  Also, some have been added,
or have glob-specific ramifications.

All options are false by default, unless otherwise noted.

All options are added to the Glob object, as well.

If you are running many `glob` operations, you can pass a Glob object
as the `options` argument to a subsequent operation to shortcut some
`stat` and `readdir` calls.  At the very least, you may pass in shared
`symlinks`, `statCache`, `realpathCache`, and `cache` options, so that
parallel glob operations will be sped up by sharing information about
the filesystem.

* `cwd` The current working directory in which to search.  Defaults
  to `process.cwd()`.  This option is always coerced to use
  forward-slashes as a path separator, because it is not tested
  as a glob pattern, so there is no need to escape anything.
* `root` The place where patterns starting with `/` will be mounted
  onto.  Defaults to `path.resolve(options.cwd, "/")` (`/` on Unix
  systems, and `C:\` or some such on Windows.)  This option is
  always coerced to use forward-slashes as a path separator,
  because it is not tested as a glob pattern, so there is no need
  to escape anything.
* `windowsPathsNoEscape` Use `\\` as a path separator _only_, and
  _never_ as an escape character.  If set, all `\\` characters
  are replaced with `/` in the pattern.  Note that this makes it
  **impossible** to match against paths containing literal glob
  pattern characters, but allows matching with patterns constructed
  using `path.join()` and `path.resolve()` on Windows platforms,
  mimicking the (buggy!) behavior of Glob v7 and before on
  Windows.  Please use with caution, and be mindful of [the caveat
  below about Windows paths](#windows).  (For legacy reasons,
  this is also set if `allowWindowsEscape` is set to the exact
  value `false`.)
* `dot` Include `.dot` files in normal matches and `globstar` matches.
  Note that an explicit dot in a portion of the pattern will always
  match dot files.
* `nomount` By default, a pattern starting with a forward-slash will be
  "mounted" onto the root setting, so that a valid filesystem path is
  returned.  Set this flag to disable that behavior.
* `mark` Add a `/` character to directory matches.  Note that this
  requires additional stat calls.
* `nosort` Don't sort the results.
* `stat` Set to true to stat *all* results.  This reduces performance
  somewhat, and is completely unnecessary, unless `readdir` is presumed
  to be an untrustworthy indicator of file existence.
* `silent` When an unusual error is encountered when attempting to
  read a directory, a warning will be printed to stderr.  Set the
  `silent` option to true to suppress these warnings.
* `strict` When an unusual error is encountered when attempting to
  read a directory, the process will just continue on in search of
  other matches.  Set the `strict` option to raise an error in these
  cases.
* `cache` See `cache` property above.  Pass in a previously generated
  cache object to save some fs calls.
* `statCache` A cache of results of filesystem information, to prevent
  unnecessary stat calls.  While it should not normally be necessary
  to set this, you may pass the statCache from one glob() call to the
  options object of another, if you know that the filesystem will not
  change between calls.  (See "Race Conditions" below.)
* `symlinks` A cache of known symbolic links.  You may pass in a
  previously generated `symlinks` object to save `lstat` calls when
  resolving `**` matches.
* `sync` DEPRECATED: use `glob.sync(pattern, opts)` instead.
* `nounique` In some cases, brace-expanded patterns can result in the
  same file showing up multiple times in the result set.  By default,
  this implementation prevents duplicates in the result set.  Set this
  flag to disable that behavior.
* `nonull` Set to never return an empty set, instead returning a set
  containing the pattern itself.  This is the default in glob(3).
* `debug` Set to enable debug logging in minimatch and glob.
* `nobrace` Do not expand `{a,b}` and `{1..3}` brace sets.
* `noglobstar` Do not match `**` against multiple filenames.  (Ie,
  treat it as a normal `*` instead.)
* `noext` Do not match `+(a|b)` "extglob" patterns.
* `nocase` Perform a case-insensitive match.  Note: on
  case-insensitive filesystems, non-magic patterns will match by
  default, since `stat` and `readdir` will not raise errors.
* `matchBase` Perform a basename-only match if the pattern does not
  contain any slash characters.  That is, `*.js` would be treated as
  equivalent to `**/*.js`, matching all js files in all directories.
* `nodir` Do not match directories, only files.  (Note: to match
  *only* directories, simply put a `/` at the end of the pattern.)
* `ignore` Add a pattern or an array of glob patterns to exclude matches.
  Note: `ignore` patterns are *always* in `dot:true` mode, regardless
  of any other settings.
* `follow` Follow symlinked directories when expanding `**` patterns.
  Note that this can result in a lot of duplicate references in the
  presence of cyclic links.
* `realpath` Set to true to call `fs.realpath` on all of the results.
  In the case of a symlink that cannot be resolved, the full absolute
  path to the matched entry is returned (though it will usually be a
  broken symlink)
* `absolute` Set to true to always receive absolute paths for matched
  files.  Unlike `realpath`, this also affects the values returned in
  the `match` event.
* `fs` File-system object with Node's `fs` API. By default, the built-in
  `fs` module will be used. Set to a volume provided by a library like
  `memfs` to avoid using the "real" file-system.

## Comparisons to other fnmatch/glob implementations

While strict compliance with the existing standards is a worthwhile
goal, some discrepancies exist between node-glob and other
implementations, and are intentional.

The double-star character `**` is supported by default, unless the
`noglobstar` flag is set.  This is supported in the manner of bsdglob
and bash 4.3, where `**` only has special significance if it is the only
thing in a path part.  That is, `a/**/b` will match `a/x/y/b`, but
`a/**b` will not.

Note that symlinked directories are not crawled as part of a `**`,
though their contents may match against subsequent portions of the
pattern.  This prevents infinite loops and duplicates and the like.

If an escaped pattern has no matches, and the `nonull` flag is set,
then glob returns the pattern as-provided, rather than
interpreting the character escapes.  For example,
`glob.match([], "\\*a\\?")` will return `"\\*a\\?"` rather than
`"*a?"`.  This is akin to setting the `nullglob` option in bash, except
that it does not resolve escaped pattern characters.

If brace expansion is not disabled, then it is performed before any
other interpretation of the glob pattern.  Thus, a pattern like
`+(a|{b),c)}`, which would not be valid in bash or zsh, is expanded
**first** into the set of `+(a|b)` and `+(a|c)`, and those patterns are
checked for validity.  Since those two are valid, matching proceeds.

### Comments and Negation

Previously, this module let you mark a pattern as a "comment" if it
started with a `#` character, or a "negated" pattern if it started
with a `!` character.

These options were deprecated in version 5, and removed in version 6.

To specify things that should not match, use the `ignore` option.

## Windows

**Please only use forward-slashes in glob expressions.**

Though windows uses either `/` or `\` as its path separator, only `/`
characters are used by this glob implementation.  You must use
forward-slashes **only** in glob expressions.  Back-slashes will always
be interpreted as escape characters, not path separators.

Results from absolute patterns such as `/foo/*` are mounted onto the
root setting using `path.join`.  On windows, this will by default result
in `/foo/*` matching `C:\foo\bar.txt`.

To automatically coerce all `\` characters to `/` in pattern
strings, **thus making it impossible to escape literal glob
characters**, you may set the `windowsPathsNoEscape` option to
`true`.

## Race Conditions

Glob searching, by its very nature, is susceptible to race conditions,
since it relies on directory walking and such.

As a result, it is possible that a file that exists when glob looks for
it may have been deleted or modified by the time it returns the result.

As part of its internal implementation, this program caches all stat
and readdir calls that it makes, in order to cut down on system
overhead.  However, this also makes it even more susceptible to races,
especially if the cache or statCache objects are reused between glob
calls.

Users are thus advised not to use a glob result as a guarantee of
filesystem state in the face of rapid changes.  For the vast majority
of operations, this is never a problem.

## Glob Logo
Glob's logo was created by [Tanya Brassie](http://tanyabrassie.com/). Logo files can be found [here](https://github.com/isaacs/node-glob/tree/master/logo).

The logo is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/).

## Contributing

Any change to behavior (including bugfixes) must come with a test.

Patches that fail tests or reduce performance will be rejected.

```
# to run tests
npm test

# to re-generate test fixtures
npm run test-regen

# to benchmark against bash/zsh
npm run bench

# to profile javascript
npm run prof
```

![](oh-my-glob.gif)
