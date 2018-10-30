3.12.0 / 2018-06-02
-------------------

- Support arrow functions without a block statement, #421.


3.11.0 / 2018-03-05
-------------------

- Fix dump in bin/octal/hex formats for negative integers, #399.
- Add arrow functions suport for `!!js/function`.


3.10.0 / 2017-09-10
-------------------

- Fix `condenseFlow` output (quote keys for sure, instead of spaces), #371, #370.
- Dump astrals as codepoints instead of surrogate pair, #368.


3.9.1 / 2017-07-08
------------------

- Ensure stack is present for custom errors in node 7.+, #351.


3.9.0 / 2017-07-08
------------------

- Add `condenseFlow` option (to create pretty URL query params), #346.
- Support array return from safeLoadAll/loadAll, #350.


3.8.4 / 2017-05-08
------------------

- Dumper: prevent space after dash for arrays that wrap, #343.


3.8.3 / 2017-04-05
------------------

- Should not allow numbers to begin and end with underscore, #335.


3.8.2 / 2017-03-02
------------------

- Fix `!!float 123` (integers) parse, #333.
- Don't allow leading zeros in floats (except 0, 0.xxx).
- Allow positive exponent without sign in floats.


3.8.1 / 2017-02-07
------------------

- Maintenance: update browserified build.


3.8.0 / 2017-02-07
------------------

- Fix reported position for `duplicated mapping key` errors.
  Now points to block start instead of block end.
  (#243, thanks to @shockey).


3.7.0 / 2016-11-12
------------------

- Fix parsing of quotes followed by newlines (#304, thanks to @dplepage).
- Support polymorphism for tags (#300, thanks to @monken).


3.6.1 / 2016-05-11
------------------

- Fix output cut on a pipe, #286.


3.6.0 / 2016-04-16
------------------

- Dumper rewrite, fix multiple bugs with trailing `\n`.
  Big thanks to @aepsilon!
- Loader: fix leading/trailing newlines in block scalars, @aepsilon.


3.5.5 / 2016-03-17
------------------

- Date parse fix: don't allow dates with on digit in month and day, #268.


3.5.4 / 2016-03-09
------------------

- `noCompatMode` for dumper, to disable quoting YAML 1.1 values.


3.5.3 / 2016-02-11
------------------

- Maintenance release.


3.5.2 / 2016-01-11
------------------

- Maintenance: missed comma in bower config.


3.5.1 / 2016-01-11
------------------

- Removed `inherit` dependency, #239.
- Better browserify workaround for esprima load.
- Demo rewrite.


3.5.0 / 2016-01-10
------------------

- Dumper. Fold strings only, #217.
- Dumper. `norefs` option, to clone linked objects, #229.
- Loader. Throw a warning for duplicate keys, #166.
- Improved browserify support (mark `esprima` & `Buffer` excluded).


3.4.6 / 2015-11-26
------------------

- Use standalone `inherit` to keep browserified files clear.


3.4.5 / 2015-11-23
------------------

- Added `lineWidth` option to dumper.


3.4.4 / 2015-11-21
------------------

- Fixed floats dump (missed dot for scientific format), #220.
- Allow non-printable characters inside quoted scalars, #192.


3.4.3 / 2015-10-10
------------------

- Maintenance release - deps bump (esprima, argparse).


3.4.2 / 2015-09-09
------------------

- Fixed serialization of duplicated entries in sequences, #205.
  Thanks to @vogelsgesang.


3.4.1 / 2015-09-05
------------------

- Fixed stacktrace handling in generated errors, for browsers (FF/IE).


3.4.0 / 2015-08-23
------------------

- Fixed multiline keys dump, #197. Thanks to @tcr.
- Don't throw on warnongs anymore. Use `onWarning` option to catch.
- Throw error on unknown tags (was warning before).
- Fixed heading line breaks in some scalars (regression).
- Reworked internals of error class.


3.3.1 / 2015-05-13
------------------

- Added `.sortKeys` dumper option, thanks to @rjmunro.
- Fixed astral characters support, #191.


3.3.0 / 2015-04-26
------------------

- Significantly improved long strings formatting in dumper, thanks to @isaacs.
- Strip BOM if exists.


3.2.7 / 2015-02-19
------------------

- Maintenance release.
- Updated dependencies.
- HISTORY.md -> CHANGELOG.md


3.2.6 / 2015-02-07
------------------

- Fixed encoding of UTF-16 surrogate pairs. (e.g. "\U0001F431" CAT FACE).
- Fixed demo dates dump (#113, thanks to @Hypercubed).


3.2.5 / 2014-12-28
------------------

- Fixed resolving of all built-in types on empty nodes.
- Fixed invalid warning on empty lines within quoted scalars and flow collections.
- Fixed bug: Tag on an empty node didn't resolve in some cases.


3.2.4 / 2014-12-19
------------------

- Fixed resolving of !!null tag on an empty node.


3.2.3 / 2014-11-08
------------------

- Implemented dumping of objects with circular and cross references.
- Partially fixed aliasing of constructed objects. (see issue #141 for details)


3.2.2 / 2014-09-07
------------------

- Fixed infinite loop on unindented block scalars.
- Rewritten base64 encode/decode in binary type, to keep code licence clear.


3.2.1 / 2014-08-24
------------------

- Nothig new. Just fix npm publish error.


3.2.0 / 2014-08-24
------------------

- Added input piping support to CLI.
- Fixed typo, that could cause hand on initial indent (#139).


3.1.0 / 2014-07-07
------------------

- 1.5x-2x speed boost.
- Removed deprecated `require('xxx.yml')` support.
- Significant code cleanup and refactoring.
- Internal API changed. If you used custom types - see updated examples.
  Others are not affected.
- Even if the input string has no trailing line break character,
  it will be parsed as if it has one.
- Added benchmark scripts.
- Moved bower files to /dist folder
- Bugfixes.


3.0.2 / 2014-02-27
------------------

- Fixed bug: "constructor" string parsed as `null`.


3.0.1 / 2013-12-22
------------------

- Fixed parsing of literal scalars. (issue #108)
- Prevented adding unnecessary spaces in object dumps. (issue #68)
- Fixed dumping of objects with very long (> 1024 in length) keys.


3.0.0 / 2013-12-16
------------------

- Refactored code. Changed API for custom types.
- Removed output colors in CLI, dump json by default.
- Removed big dependencies from browser version (esprima, buffer)
  - load `esprima` manually, if !!js/function needed
  - !!bin now returns Array in browser
- AMD support.
- Don't quote dumped strings because of `-` & `?` (if not first char).
- __Deprecated__ loading yaml files via `require()`, as not recommended
  behaviour for node.


2.1.3 / 2013-10-16
------------------

- Fix wrong loading of empty block scalars.


2.1.2 / 2013-10-07
------------------

- Fix unwanted line breaks in folded scalars.


2.1.1 / 2013-10-02
------------------

- Dumper now respects deprecated booleans syntax from YAML 1.0/1.1
- Fixed reader bug in JSON-like sequences/mappings.


2.1.0 / 2013-06-05
------------------

- Add standard YAML schemas: Failsafe (`FAILSAFE_SCHEMA`),
  JSON (`JSON_SCHEMA`) and Core (`CORE_SCHEMA`).
- Rename `DEFAULT_SCHEMA` to `DEFAULT_FULL_SCHEMA`
  and `SAFE_SCHEMA` to `DEFAULT_SAFE_SCHEMA`.
- Bug fix: export `NIL` constant from the public interface.
- Add `skipInvalid` dumper option.
- Use `safeLoad` for `require` extension.


2.0.5 / 2013-04-26
------------------

- Close security issue in !!js/function constructor.
  Big thanks to @nealpoole for security audit.


2.0.4 / 2013-04-08
------------------

- Updated .npmignore to reduce package size


2.0.3 / 2013-02-26
------------------

- Fixed dumping of empty arrays ans objects. ([] and {} instead of null)


2.0.2 / 2013-02-15
------------------

- Fixed input validation: tabs are printable characters.


2.0.1 / 2013-02-09
------------------

- Fixed error, when options not passed to function cass


2.0.0 / 2013-02-09
------------------

- Full rewrite. New architecture. Fast one-stage parsing.
- Changed custom types API.
- Added YAML dumper.


1.0.3 / 2012-11-05
------------------

- Fixed utf-8 files loading.


1.0.2 / 2012-08-02
------------------

- Pull out hand-written shims. Use ES5-Shims for old browsers support. See #44.
- Fix timstamps incorectly parsed in local time when no time part specified.


1.0.1 / 2012-07-07
------------------

- Fixes `TypeError: 'undefined' is not an object` under Safari. Thanks Phuong.
- Fix timestamps incorrectly parsed in local time. Thanks @caolan. Closes #46.


1.0.0 / 2012-07-01
------------------

- `y`, `yes`, `n`, `no`, `on`, `off` are not converted to Booleans anymore.
  Fixes #42.
- `require(filename)` now returns a single document and throws an Error if
  file contains more than one document.
- CLI was merged back from js-yaml.bin


0.3.7 / 2012-02-28
------------------

- Fix export of `addConstructor()`. Closes #39.


0.3.6 / 2012-02-22
------------------

- Removed AMD parts - too buggy to use. Need help to rewrite from scratch
- Removed YUI compressor warning (renamed `double` variable). Closes #40.


0.3.5 / 2012-01-10
------------------

- Workagound for .npmignore fuckup under windows. Thanks to airportyh.


0.3.4 / 2011-12-24
------------------

- Fixes str[] for oldIEs support.
- Adds better has change support for browserified demo.
- improves compact output of Error. Closes #33.


0.3.3 / 2011-12-20
------------------

- jsyaml executable moved to separate module.
- adds `compact` stringification of Errors.


0.3.2 / 2011-12-16
------------------

- Fixes ug with block style scalars. Closes #26.
- All sources are passing JSLint now.
- Fixes bug in Safari. Closes #28.
- Fixes bug in Opers. Closes #29.
- Improves browser support. Closes #20.
- Added jsyaml executable.
- Added !!js/function support. Closes #12.


0.3.1 / 2011-11-18
------------------

- Added AMD support for browserified version.
- Wrapped browserified js-yaml into closure.
- Fixed the resolvement of non-specific tags. Closes #17.
- Added permalinks for online demo YAML snippets. Now we have YPaste service, lol.
- Added !!js/regexp and !!js/undefined types. Partially solves #12.
- Fixed !!set mapping.
- Fixed month parse in dates. Closes #19.


0.3.0 / 2011-11-09
------------------

- Removed JS.Class dependency. Closes #3.
- Added browserified version. Closes #13.
- Added live demo of browserified version.
- Ported some of the PyYAML tests. See #14.
- Fixed timestamp bug when fraction was given.


0.2.2 / 2011-11-06
------------------

- Fixed crash on docs without ---. Closes #8.
- Fixed miltiline string parse
- Fixed tests/comments for using array as key


0.2.1 / 2011-11-02
------------------

- Fixed short file read (<4k). Closes #9.


0.2.0 / 2011-11-02
------------------

- First public release
