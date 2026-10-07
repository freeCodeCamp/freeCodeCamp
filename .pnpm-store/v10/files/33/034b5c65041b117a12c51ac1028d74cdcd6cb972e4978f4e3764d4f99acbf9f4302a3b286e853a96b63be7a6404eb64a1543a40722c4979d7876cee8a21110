9.1.0 / 2021-01-19
------------------

- Add promise support for `fs.rm()` ([#841](https://github.com/jprichardson/node-fs-extra/issues/841), [#860](https://github.com/jprichardson/node-fs-extra/pull/860))
- Upgrade universalify for performance improvments ([#825](https://github.com/jprichardson/node-fs-extra/pull/825))

9.0.1 / 2020-06-03
------------------

- Fix issue with `ensureFile()` when used with Jest on Windows ([#804](https://github.com/jprichardson/node-fs-extra/issues/804), [#805](https://github.com/jprichardson/node-fs-extra/pull/805))
- Remove unneeded `process.umask()` call ([#791](https://github.com/jprichardson/node-fs-extra/pull/791))
- Docs improvements ([#753](https://github.com/jprichardson/node-fs-extra/pull/753), [#795](https://github.com/jprichardson/node-fs-extra/pull/795), [#797](https://github.com/jprichardson/node-fs-extra/pull/797))

9.0.0 / 2020-03-19
------------------

### Breaking changes

- Requires Node.js version 10 or greater ([#725](https://github.com/jprichardson/node-fs-extra/issues/725), [#751](https://github.com/jprichardson/node-fs-extra/pull/751))
- Switched `ensureDir*` to use a fork of https://github.com/sindresorhus/make-dir to make use of native recursive `fs.mkdir` where possible ([#619](https://github.com/jprichardson/node-fs-extra/issues/619), [#756](https://github.com/jprichardson/node-fs-extra/pull/756))
- Properly preserve `atime` for `copy*` with `preserveTimestamps` option ([#633](https://github.com/jprichardson/node-fs-extra/pull/633))

**The following changes, allthough technically breaking, will not affect the vast majority of users:**

- `outputJson` now outputs objects as they were when the function was called, even if they are mutated later ([#702](https://github.com/jprichardson/node-fs-extra/issues/702), [#768](https://github.com/jprichardson/node-fs-extra/pull/768))
- Cannot pass `null` as an options parameter to `*Json*` methods ([#745](https://github.com/jprichardson/node-fs-extra/issues/745), [#768](https://github.com/jprichardson/node-fs-extra/pull/768))

### Improvements

- Add promise shims for `fs.writev` & `fs.opendir` ([#747](https://github.com/jprichardson/node-fs-extra/pull/747))
- Better errors for `ensureFile` ([#696](https://github.com/jprichardson/node-fs-extra/issues/696), [#744](https://github.com/jprichardson/node-fs-extra/pull/744))
- Better file comparison for older Node versions ([#694](https://github.com/jprichardson/node-fs-extra/pull/694))

### Miscellaneous changes
- Peformance optimizations ([#762](https://github.com/jprichardson/node-fs-extra/issues/762), [#764](https://github.com/jprichardson/node-fs-extra/pull/764))
- Add missing documentation for aliases ([#758](https://github.com/jprichardson/node-fs-extra/issues/758), [#766](https://github.com/jprichardson/node-fs-extra/pull/766))
- Update `universalify` dependency ([#767](https://github.com/jprichardson/node-fs-extra/pull/767))

8.1.0 / 2019-06-28
------------------

- Add support for promisified `fs.realpath.native` in Node v9.2+ ([#650](https://github.com/jprichardson/node-fs-extra/issues/650), [#682](https://github.com/jprichardson/node-fs-extra/pull/682))
- Update `graceful-fs` dependency ([#700](https://github.com/jprichardson/node-fs-extra/pull/700))
- Use `graceful-fs` everywhere ([#700](https://github.com/jprichardson/node-fs-extra/pull/700))

8.0.1 / 2019-05-13
------------------

- Fix bug `Maximum call stack size exceeded` error in `util/stat` ([#679](https://github.com/jprichardson/node-fs-extra/pull/679))

8.0.0 / 2019-05-11
------------------

**NOTE:** Node.js v6 support is deprecated, and will be dropped in the next major release.

- Use `renameSync()` under the hood in `moveSync()`
- Fix bug with bind-mounted directories in `copy*()` ([#613](https://github.com/jprichardson/node-fs-extra/issues/613), [#618](https://github.com/jprichardson/node-fs-extra/pull/618))
- Fix bug in `move()` with case-insensitive file systems
- Use `fs.stat()`'s `bigint` option in `copy*()` & `move*()` where possible ([#657](https://github.com/jprichardson/node-fs-extra/issues/657))

7.0.1 / 2018-11-07
------------------

- Fix `removeSync()` on Windows, in some cases, it would error out with `ENOTEMPTY` ([#646](https://github.com/jprichardson/node-fs-extra/pull/646))
- Document `mode` option for `ensureDir*()` ([#587](https://github.com/jprichardson/node-fs-extra/pull/587))
- Don't include documentation files in npm package tarball ([#642](https://github.com/jprichardson/node-fs-extra/issues/642), [#643](https://github.com/jprichardson/node-fs-extra/pull/643))

7.0.0 / 2018-07-16
------------------

- **BREAKING:** Refine `copy*()` handling of symlinks to properly detect symlinks that point to the same file. ([#582](https://github.com/jprichardson/node-fs-extra/pull/582))
- Fix bug with copying write-protected directories ([#600](https://github.com/jprichardson/node-fs-extra/pull/600))
- Universalify `fs.lchmod()` ([#596](https://github.com/jprichardson/node-fs-extra/pull/596))
- Add `engines` field to `package.json` ([#580](https://github.com/jprichardson/node-fs-extra/pull/580))

6.0.1 / 2018-05-09
------------------

- Fix `fs.promises` `ExperimentalWarning` on Node v10.1.0 ([#578](https://github.com/jprichardson/node-fs-extra/pull/578))

6.0.0 / 2018-05-01
------------------

- Drop support for Node.js versions 4, 5, & 7 ([#564](https://github.com/jprichardson/node-fs-extra/pull/564))
- Rewrite `move` to use `fs.rename` where possible ([#549](https://github.com/jprichardson/node-fs-extra/pull/549))
- Don't convert relative paths to absolute paths for `filter` ([#554](https://github.com/jprichardson/node-fs-extra/pull/554))
- `copy*`'s behavior when `preserveTimestamps` is `false` has been OS-dependent since 5.0.0, but that's now explicitly noted in the docs ([#563](https://github.com/jprichardson/node-fs-extra/pull/563))
- Fix subdirectory detection for `copy*` & `move*` ([#541](https://github.com/jprichardson/node-fs-extra/pull/541))
- Handle case-insensitive paths correctly in `copy*` ([#568](https://github.com/jprichardson/node-fs-extra/pull/568))

5.0.0 / 2017-12-11
------------------

Significant refactor of `copy()` & `copySync()`, including breaking changes. No changes to other functions in this release.

Huge thanks to **[@manidlou](https://github.com/manidlou)** for doing most of the work on this release.

- The `filter` option can no longer be a RegExp (must be a function). This was deprecated since fs-extra v1.0.0. [#512](https://github.com/jprichardson/node-fs-extra/pull/512)
- `copy()`'s `filter` option can now be a function that returns a Promise. [#518](https://github.com/jprichardson/node-fs-extra/pull/518)
- `copy()` & `copySync()` now use `fs.copyFile()`/`fs.copyFileSync()` in environments that support it (currently Node 8.5.0+). Older Node versions still get the old implementation. [#505](https://github.com/jprichardson/node-fs-extra/pull/505)
- Don't allow copying a directory into itself. [#83](https://github.com/jprichardson/node-fs-extra/issues/83)
- Handle copying between identical files. [#198](https://github.com/jprichardson/node-fs-extra/issues/198)
- Error out when copying an empty folder to a path that already exists. [#464](https://github.com/jprichardson/node-fs-extra/issues/464)
- Don't create `dest`'s parent if the `filter` function aborts the `copy()` operation. [#517](https://github.com/jprichardson/node-fs-extra/pull/517)
- Fix `writeStream` not being closed if there was an error in `copy()`. [#516](https://github.com/jprichardson/node-fs-extra/pull/516)

4.0.3 / 2017-12-05
------------------

- Fix wrong `chmod` values in `fs.remove()` [#501](https://github.com/jprichardson/node-fs-extra/pull/501)
- Fix `TypeError` on systems that don't have some `fs` operations like `lchown` [#520](https://github.com/jprichardson/node-fs-extra/pull/520)

4.0.2 / 2017-09-12
------------------

- Added `EOL` option to `writeJson*` & `outputJson*` (via upgrade to jsonfile v4)
- Added promise support to [`fs.copyFile()`](https://nodejs.org/api/fs.html#fs_fs_copyfile_src_dest_flags_callback) in Node 8.5+
- Added `.js` extension to `main` field in `package.json` for better tooling compatibility. [#485](https://github.com/jprichardson/node-fs-extra/pull/485)

4.0.1 / 2017-07-31
------------------

### Fixed

- Previously, `ensureFile()` & `ensureFileSync()` would do nothing if the path was a directory. Now, they error out for consistency with `ensureDir()`. [#465](https://github.com/jprichardson/node-fs-extra/issues/465), [#466](https://github.com/jprichardson/node-fs-extra/pull/466), [#470](https://github.com/jprichardson/node-fs-extra/issues/470)

4.0.0 / 2017-07-14
------------------

### Changed

- **BREAKING:** The promisified versions of `fs.read()` & `fs.write()` now return objects. See [the docs](docs/fs-read-write.md) for details. [#436](https://github.com/jprichardson/node-fs-extra/issues/436), [#449](https://github.com/jprichardson/node-fs-extra/pull/449)
- `fs.move()` now errors out when destination is a subdirectory of source. [#458](https://github.com/jprichardson/node-fs-extra/pull/458)
- Applied upstream fixes from `rimraf` to `fs.remove()` & `fs.removeSync()`. [#459](https://github.com/jprichardson/node-fs-extra/pull/459)

### Fixed

- Got `fs.outputJSONSync()` working again; it was broken due to refactoring. [#428](https://github.com/jprichardson/node-fs-extra/pull/428)

Also clarified the docs in a few places.

3.0.1 / 2017-05-04
------------------

- Fix bug in `move()` & `moveSync()` when source and destination are the same, and source does not exist. [#415](https://github.com/jprichardson/node-fs-extra/pull/415)

3.0.0 / 2017-04-27
------------------

### Added

- **BREAKING:** Added Promise support. All asynchronous native fs methods and fs-extra methods now return a promise if the callback is not passed. [#403](https://github.com/jprichardson/node-fs-extra/pull/403)
- `pathExists()`, a replacement for the deprecated `fs.exists`. `pathExists` has a normal error-first callback signature. Also added `pathExistsSync`, an alias to `fs.existsSync`, for completeness. [#406](https://github.com/jprichardson/node-fs-extra/pull/406)

### Removed

- **BREAKING:** Removed support for setting the default spaces for `writeJson()`, `writeJsonSync()`, `outputJson()`, & `outputJsonSync()`. This was undocumented. [#402](https://github.com/jprichardson/node-fs-extra/pull/402)

### Changed

- Upgraded jsonfile dependency to v3.0.0:
  - **BREAKING:** Changed behavior of `throws` option for `readJsonSync()`; now does not throw filesystem errors when `throws` is `false`.
- **BREAKING:** `writeJson()`, `writeJsonSync()`, `outputJson()`, & `outputJsonSync()` now output minified JSON by default for consistency with `JSON.stringify()`; set the `spaces` option to `2` to override this new behavior. [#402](https://github.com/jprichardson/node-fs-extra/pull/402)
- Use `Buffer.allocUnsafe()` instead of `new Buffer()` in environments that support it. [#394](https://github.com/jprichardson/node-fs-extra/pull/394)

### Fixed

- `removeSync()` silently failed on Windows in some cases. Now throws an `EBUSY` error. [#408](https://github.com/jprichardson/node-fs-extra/pull/408)

2.1.2 / 2017-03-16
------------------

### Fixed

- Weird windows bug that resulted in `ensureDir()`'s callback being called twice in some cases. This bug may have also affected `remove()`. See [#392](https://github.com/jprichardson/node-fs-extra/issues/392), [#393](https://github.com/jprichardson/node-fs-extra/pull/393)

2.1.1 / 2017-03-15
------------------

### Fixed

- Reverted [`5597bd`](https://github.com/jprichardson/node-fs-extra/commit/5597bd5b67f7d060f5f5bf26e9635be48330f5d7), this broke compatibility with Node.js versions v4+ but less than `v4.5.0`.
- Remove `Buffer.alloc()` usage in `moveSync()`.

2.1.0 / 2017-03-15
------------------

Thanks to [Mani Maghsoudlou (@manidlou)](https://github.com/manidlou) & [Jan Peer Stöcklmair (@JPeer264)](https://github.com/JPeer264) for their extraordinary help with this release!

### Added
- `moveSync()` See [#309], [#381](https://github.com/jprichardson/node-fs-extra/pull/381). ([@manidlou](https://github.com/manidlou))
- `copy()` and `copySync()`'s `filter` option now gets the destination path passed as the second parameter. [#366](https://github.com/jprichardson/node-fs-extra/pull/366) ([@manidlou](https://github.com/manidlou))

### Changed
- Use `Buffer.alloc()` instead of deprecated `new Buffer()` in `copySync()`. [#380](https://github.com/jprichardson/node-fs-extra/pull/380) ([@manidlou](https://github.com/manidlou))
- Refactored entire codebase to use ES6 features supported by Node.js v4+ [#355](https://github.com/jprichardson/node-fs-extra/issues/355). [(@JPeer264)](https://github.com/JPeer264)
- Refactored docs. ([@manidlou](https://github.com/manidlou))

### Fixed

- `move()` shouldn't error out when source and dest are the same. [#377](https://github.com/jprichardson/node-fs-extra/issues/377), [#378](https://github.com/jprichardson/node-fs-extra/pull/378) ([@jdalton](https://github.com/jdalton))

2.0.0 / 2017-01-16
------------------

### Removed
- **BREAKING:** Removed support for Node `v0.12`. The Node foundation stopped officially supporting it
on Jan 1st, 2017.
- **BREAKING:** Remove `walk()` and `walkSync()`. `walkSync()` was only part of `fs-extra` for a little
over two months. Use [klaw](https://github.com/jprichardson/node-klaw) instead of `walk()`, in fact, `walk()` was just
an alias to klaw. For `walkSync()` use [klaw-sync](https://github.com/mawni/node-klaw-sync). See: [#338], [#339]

### Changed
- **BREAKING:** Renamed `clobber` to `overwrite`. This affects `copy()`, `copySync()`, and `move()`. [#330], [#333]
- Moved docs, to `docs/`. [#340]

### Fixed
- Apply filters to directories in `copySync()` like in `copy()`. [#324]
- A specific condition when disk is under heavy use, `copy()` can fail. [#326]


1.0.0 / 2016-11-01
------------------

After five years of development, we finally have reach the 1.0.0 milestone! Big thanks goes
to [Ryan Zim](https://github.com/RyanZim) for leading the charge on this release!

### Added
- `walkSync()`

### Changed
- **BREAKING**: dropped Node v0.10 support.
- disabled `rimaf` globbing, wasn't used. [#280]
- deprecate `copy()/copySync()` option `filter` if it's a `RegExp`. `filter` should now be a function.
- inline `rimraf`. This is temporary and was done because `rimraf` depended upon the beefy `glob` which `fs-extra` does not use. [#300]

### Fixed
- bug fix proper closing of file handle on `utimesMillis()` [#271]
- proper escaping of files with dollar signs [#291]
- `copySync()` failed if user didn't own file. [#199], [#301]


0.30.0 / 2016-04-28
-------------------
- Brought back Node v0.10 support. I didn't realize there was still demand. Official support will end **2016-10-01**.

0.29.0 / 2016-04-27
-------------------
- **BREAKING**: removed support for Node v0.10. If you still want to use Node v0.10, everything should work except for `ensureLink()/ensureSymlink()`. Node v0.12 is still supported but will be dropped in the near future as well.

0.28.0 / 2016-04-17
-------------------
- **BREAKING**: removed `createOutputStream()`. Use https://www.npmjs.com/package/create-output-stream. See: [#192][#192]
- `mkdirs()/mkdirsSync()` check for invalid win32 path chars. See: [#209][#209], [#237][#237]
- `mkdirs()/mkdirsSync()` if drive not mounted, error. See: [#93][#93]

0.27.0 / 2016-04-15
-------------------
- add `dereference` option to `copySync()`. [#235][#235]

0.26.7 / 2016-03-16
-------------------
- fixed `copy()` if source and dest are the same. [#230][#230]

0.26.6 / 2016-03-15
-------------------
- fixed if `emptyDir()` does not have a callback: [#229][#229]

0.26.5 / 2016-01-27
-------------------
- `copy()` with two arguments (w/o callback) was broken. See: [#215][#215]

0.26.4 / 2016-01-05
-------------------
- `copySync()` made `preserveTimestamps` default consistent with `copy()` which is `false`. See: [#208][#208]

0.26.3 / 2015-12-17
-------------------
- fixed `copy()` hangup in copying blockDevice / characterDevice / `/dev/null`. See: [#193][#193]

0.26.2 / 2015-11-02
-------------------
- fixed `outputJson{Sync}()` spacing adherence to `fs.spaces`

0.26.1 / 2015-11-02
-------------------
- fixed `copySync()` when `clogger=true` and the destination is read only. See: [#190][#190]

0.26.0 / 2015-10-25
-------------------
- extracted the `walk()` function into its own module [`klaw`](https://github.com/jprichardson/node-klaw).

0.25.0 / 2015-10-24
-------------------
- now has a file walker `walk()`

0.24.0 / 2015-08-28
-------------------
- removed alias `delete()` and `deleteSync()`. See: [#171][#171]

0.23.1 / 2015-08-07
-------------------
- Better handling of errors for `move()` when moving across devices. [#170][#170]
- `ensureSymlink()` and `ensureLink()` should not throw errors if link exists. [#169][#169]

0.23.0 / 2015-08-06
-------------------
- added `ensureLink{Sync}()` and `ensureSymlink{Sync}()`. See: [#165][#165]

0.22.1 / 2015-07-09
-------------------
- Prevent calling `hasMillisResSync()` on module load. See: [#149][#149].
Fixes regression that was introduced in `0.21.0`.

0.22.0 / 2015-07-09
-------------------
- preserve permissions / ownership in `copy()`. See: [#54][#54]

0.21.0 / 2015-07-04
-------------------
- add option to preserve timestamps in `copy()` and `copySync()`. See: [#141][#141]
- updated `graceful-fs@3.x` to `4.x`. This brings in features from `amazing-graceful-fs` (much cleaner code / less hacks)

0.20.1 / 2015-06-23
-------------------
- fixed regression caused by latest jsonfile update: See: https://github.com/jprichardson/node-jsonfile/issues/26

0.20.0 / 2015-06-19
-------------------
- removed `jsonfile` aliases with `File` in the name, they weren't documented and probably weren't in use e.g.
this package had both `fs.readJsonFile` and `fs.readJson` that were aliases to each other, now use `fs.readJson`.
- preliminary walker created. Intentionally not documented. If you use it, it will almost certainly change and break your code.
- started moving tests inline
- upgraded to `jsonfile@2.1.0`, can now pass JSON revivers/replacers to `readJson()`, `writeJson()`, `outputJson()`

0.19.0 / 2015-06-08
-------------------
- `fs.copy()` had support for Node v0.8, dropped support

0.18.4 / 2015-05-22
-------------------
- fixed license field according to this: [#136][#136] and https://github.com/npm/npm/releases/tag/v2.10.0

0.18.3 / 2015-05-08
-------------------
- bugfix: handle `EEXIST` when clobbering on some Linux systems. [#134][#134]

0.18.2 / 2015-04-17
-------------------
- bugfix: allow `F_OK` ([#120][#120])

0.18.1 / 2015-04-15
-------------------
- improved windows support for `move()` a bit. https://github.com/jprichardson/node-fs-extra/commit/92838980f25dc2ee4ec46b43ee14d3c4a1d30c1b
- fixed a lot of tests for Windows (appveyor)

0.18.0 / 2015-03-31
-------------------
- added `emptyDir()` and `emptyDirSync()`

0.17.0 / 2015-03-28
-------------------
- `copySync` added `clobber` option (before always would clobber, now if `clobber` is `false` it throws an error if the destination exists).
**Only works with files at the moment.**
- `createOutputStream()` added. See: [#118][#118]

0.16.5 / 2015-03-08
-------------------
- fixed `fs.move` when `clobber` is `true` and destination is a directory, it should clobber. [#114][#114]

0.16.4 / 2015-03-01
-------------------
- `fs.mkdirs` fix infinite loop on Windows. See: See https://github.com/substack/node-mkdirp/pull/74 and https://github.com/substack/node-mkdirp/issues/66

0.16.3 / 2015-01-28
-------------------
- reverted https://github.com/jprichardson/node-fs-extra/commit/1ee77c8a805eba5b99382a2591ff99667847c9c9


0.16.2 / 2015-01-28
-------------------
- fixed `fs.copy` for Node v0.8 (support is temporary and will be removed in the near future)

0.16.1 / 2015-01-28
-------------------
- if `setImmediate` is not available, fall back to `process.nextTick`

0.16.0 / 2015-01-28
-------------------
- bugfix `fs.move()` into itself. Closes [#104]
- bugfix `fs.move()` moving directory across device. Closes [#108]
- added coveralls support
- bugfix: nasty multiple callback `fs.copy()` bug. Closes [#98]
- misc fs.copy code cleanups

0.15.0 / 2015-01-21
-------------------
- dropped `ncp`, imported code in
- because of previous, now supports `io.js`
- `graceful-fs` is now a dependency

0.14.0 / 2015-01-05
-------------------
- changed `copy`/`copySync` from `fs.copy(src, dest, [filters], callback)` to `fs.copy(src, dest, [options], callback)` [#100][#100]
- removed mockfs tests for mkdirp (this may be temporary, but was getting in the way of other tests)

0.13.0 / 2014-12-10
-------------------
- removed `touch` and `touchSync` methods (they didn't handle permissions like UNIX touch)
- updated `"ncp": "^0.6.0"` to `"ncp": "^1.0.1"`
- imported `mkdirp` => `minimist` and `mkdirp` are no longer dependences, should now appease people who wanted `mkdirp` to be `--use_strict` safe. See [#59]([#59][#59])

0.12.0 / 2014-09-22
-------------------
- copy symlinks in `copySync()` [#85][#85]

0.11.1 / 2014-09-02
-------------------
- bugfix `copySync()` preserve file permissions [#80][#80]

0.11.0 / 2014-08-11
-------------------
- upgraded `"ncp": "^0.5.1"` to `"ncp": "^0.6.0"`
- upgrade `jsonfile": "^1.2.0"` to `jsonfile": "^2.0.0"` => on write, json files now have `\n` at end. Also adds `options.throws` to `readJsonSync()`
see https://github.com/jprichardson/node-jsonfile#readfilesyncfilename-options for more details.

0.10.0 / 2014-06-29
------------------
* bugfix: upgaded `"jsonfile": "~1.1.0"` to `"jsonfile": "^1.2.0"`, bumped minor because of `jsonfile` dep change
from `~` to `^`. [#67]

0.9.1 / 2014-05-22
------------------
* removed Node.js `0.8.x` support, `0.9.0` was published moments ago and should have been done there

0.9.0 / 2014-05-22
------------------
* upgraded `ncp` from `~0.4.2` to `^0.5.1`, [#58]
* upgraded `rimraf` from `~2.2.6` to `^2.2.8`
* upgraded `mkdirp` from `0.3.x` to `^0.5.0`
* added methods `ensureFile()`, `ensureFileSync()`
* added methods `ensureDir()`, `ensureDirSync()` [#31]
* added `move()` method. From: https://github.com/andrewrk/node-mv


0.8.1 / 2013-10-24
------------------
* copy failed to return an error to the callback if a file doesn't exist (ulikoehler [#38], [#39])

0.8.0 / 2013-10-14
------------------
* `filter` implemented on `copy()` and `copySync()`. (Srirangan / [#36])

0.7.1 / 2013-10-12
------------------
* `copySync()` implemented (Srirangan / [#33])
* updated to the latest `jsonfile` version `1.1.0` which gives `options` params for the JSON methods. Closes [#32]

0.7.0 / 2013-10-07
------------------
* update readme conventions
* `copy()` now works if destination directory does not exist. Closes [#29]

0.6.4 / 2013-09-05
------------------
* changed `homepage` field in package.json to remove NPM warning

0.6.3 / 2013-06-28
------------------
* changed JSON spacing default from `4` to `2` to follow Node conventions
* updated `jsonfile` dep
* updated `rimraf` dep

0.6.2 / 2013-06-28
------------------
* added .npmignore, [#25]

0.6.1 / 2013-05-14
------------------
* modified for `strict` mode, closes [#24]
* added `outputJson()/outputJsonSync()`, closes [#23]

0.6.0 / 2013-03-18
------------------
* removed node 0.6 support
* added node 0.10 support
* upgraded to latest `ncp` and `rimraf`.
* optional `graceful-fs` support. Closes [#17]


0.5.0 / 2013-02-03
------------------
* Removed `readTextFile`.
* Renamed `readJSONFile` to `readJSON` and `readJson`, same with write.
* Restructured documentation a bit. Added roadmap.

0.4.0 / 2013-01-28
------------------
* Set default spaces in `jsonfile` from 4 to 2.
* Updated `testutil` deps for tests.
* Renamed `touch()` to `createFile()`
* Added `outputFile()` and `outputFileSync()`
* Changed creation of testing diretories so the /tmp dir is not littered.
* Added `readTextFile()` and `readTextFileSync()`.

0.3.2 / 2012-11-01
------------------
* Added `touch()` and `touchSync()` methods.

0.3.1 / 2012-10-11
------------------
* Fixed some stray globals.

0.3.0 / 2012-10-09
------------------
* Removed all CoffeeScript from tests.
* Renamed `mkdir` to `mkdirs`/`mkdirp`.

0.2.1 / 2012-09-11
------------------
* Updated `rimraf` dep.

0.2.0 / 2012-09-10
------------------
* Rewrote module into JavaScript. (Must still rewrite tests into JavaScript)
* Added all methods of [jsonfile](https://github.com/jprichardson/node-jsonfile)
* Added Travis-CI.

0.1.3 / 2012-08-13
------------------
* Added method `readJSONFile`.

0.1.2 / 2012-06-15
------------------
* Bug fix: `deleteSync()` didn't exist.
* Verified Node v0.8 compatibility.

0.1.1 / 2012-06-15
------------------
* Fixed bug in `remove()`/`delete()` that wouldn't execute the function if a callback wasn't passed.

0.1.0 / 2012-05-31
------------------
* Renamed `copyFile()` to `copy()`. `copy()` can now copy directories (recursively) too.
* Renamed `rmrf()` to `remove()`.
* `remove()` aliased with `delete()`.
* Added `mkdirp` capabilities. Named: `mkdir()`. Hides Node.js native `mkdir()`.
* Instead of exporting the native `fs` module with new functions, I now copy over the native methods to a new object and export that instead.

0.0.4 / 2012-03-14
------------------
* Removed CoffeeScript dependency

0.0.3 / 2012-01-11
------------------
* Added methods rmrf and rmrfSync
* Moved tests from Jasmine to Mocha


[#344]: https://github.com/jprichardson/node-fs-extra/issues/344    "Licence Year"
[#343]: https://github.com/jprichardson/node-fs-extra/pull/343      "Add klaw-sync link to readme"
[#342]: https://github.com/jprichardson/node-fs-extra/pull/342      "allow preserveTimestamps when use move"
[#341]: https://github.com/jprichardson/node-fs-extra/issues/341    "mkdirp(path.dirname(dest) in move() logic needs cleaning up [question]"
[#340]: https://github.com/jprichardson/node-fs-extra/pull/340      "Move docs to seperate docs folder [documentation]"
[#339]: https://github.com/jprichardson/node-fs-extra/pull/339      "Remove walk() & walkSync() [feature-walk]"
[#338]: https://github.com/jprichardson/node-fs-extra/issues/338    "Remove walk() and walkSync() [feature-walk]"
[#337]: https://github.com/jprichardson/node-fs-extra/issues/337    "copy doesn't return a yieldable value"
[#336]: https://github.com/jprichardson/node-fs-extra/pull/336      "Docs enhanced walk sync [documentation, feature-walk]"
[#335]: https://github.com/jprichardson/node-fs-extra/pull/335      "Refactor move() tests [feature-move]"
[#334]: https://github.com/jprichardson/node-fs-extra/pull/334      "Cleanup lib/move/index.js [feature-move]"
[#333]: https://github.com/jprichardson/node-fs-extra/pull/333      "Rename clobber to overwrite [feature-copy, feature-move]"
[#332]: https://github.com/jprichardson/node-fs-extra/pull/332      "BREAKING: Drop Node v0.12 & io.js support"
[#331]: https://github.com/jprichardson/node-fs-extra/issues/331    "Add support for chmodr [enhancement, future]"
[#330]: https://github.com/jprichardson/node-fs-extra/pull/330      "BREAKING: Do not error when copy destination exists & clobber: false [feature-copy]"
[#329]: https://github.com/jprichardson/node-fs-extra/issues/329    "Does .walk() scale to large directories? [question]"
[#328]: https://github.com/jprichardson/node-fs-extra/issues/328    "Copying files corrupts [feature-copy, needs-confirmed]"
[#327]: https://github.com/jprichardson/node-fs-extra/pull/327      "Use writeStream 'finish' event instead of 'close' [bug, feature-copy]"
[#326]: https://github.com/jprichardson/node-fs-extra/issues/326    "fs.copy fails with chmod error when disk under heavy use [bug, feature-copy]"
[#325]: https://github.com/jprichardson/node-fs-extra/issues/325    "ensureDir is difficult to promisify [enhancement]"
[#324]: https://github.com/jprichardson/node-fs-extra/pull/324      "copySync() should apply filter to directories like copy() [bug, feature-copy]"
[#323]: https://github.com/jprichardson/node-fs-extra/issues/323    "Support for `dest` being a directory when using `copy*()`?"
[#322]: https://github.com/jprichardson/node-fs-extra/pull/322      "Add fs-promise as fs-extra-promise alternative"
[#321]: https://github.com/jprichardson/node-fs-extra/issues/321    "fs.copy() with clobber set to false return EEXIST error [feature-copy]"
[#320]: https://github.com/jprichardson/node-fs-extra/issues/320    "fs.copySync: Error: EPERM: operation not permitted, unlink "
[#319]: https://github.com/jprichardson/node-fs-extra/issues/319    "Create directory if not exists"
[#318]: https://github.com/jprichardson/node-fs-extra/issues/318    "Support glob patterns [enhancement, future]"
[#317]: https://github.com/jprichardson/node-fs-extra/pull/317      "Adding copy sync test for src file without write perms"
[#316]: https://github.com/jprichardson/node-fs-extra/pull/316      "Remove move()'s broken limit option [feature-move]"
[#315]: https://github.com/jprichardson/node-fs-extra/pull/315      "Fix move clobber tests to work around graceful-fs bug."
[#314]: https://github.com/jprichardson/node-fs-extra/issues/314    "move() limit option [documentation, enhancement, feature-move]"
[#313]: https://github.com/jprichardson/node-fs-extra/pull/313      "Test that remove() ignores glob characters."
[#312]: https://github.com/jprichardson/node-fs-extra/pull/312      "Enhance walkSync() to return items with path and stats [feature-walk]"
[#311]: https://github.com/jprichardson/node-fs-extra/issues/311    "move() not work when dest name not provided [feature-move]"
[#310]: https://github.com/jprichardson/node-fs-extra/issues/310    "Edit walkSync to return items like what walk emits [documentation, enhancement, feature-walk]"
[#309]: https://github.com/jprichardson/node-fs-extra/issues/309    "moveSync support [enhancement, feature-move]"
[#308]: https://github.com/jprichardson/node-fs-extra/pull/308      "Fix incorrect anchor link"
[#307]: https://github.com/jprichardson/node-fs-extra/pull/307      "Fix coverage"
[#306]: https://github.com/jprichardson/node-fs-extra/pull/306      "Update devDeps, fix lint error"
[#305]: https://github.com/jprichardson/node-fs-extra/pull/305      "Re-add Coveralls"
[#304]: https://github.com/jprichardson/node-fs-extra/pull/304      "Remove path-is-absolute [enhancement]"
[#303]: https://github.com/jprichardson/node-fs-extra/pull/303      "Document copySync filter inconsistency [documentation, feature-copy]"
[#302]: https://github.com/jprichardson/node-fs-extra/pull/302      "fix(console): depreciated -> deprecated"
[#301]: https://github.com/jprichardson/node-fs-extra/pull/301      "Remove chmod call from copySync [feature-copy]"
[#300]: https://github.com/jprichardson/node-fs-extra/pull/300      "Inline Rimraf [enhancement, feature-move, feature-remove]"
[#299]: https://github.com/jprichardson/node-fs-extra/pull/299      "Warn when filter is a RegExp [feature-copy]"
[#298]: https://github.com/jprichardson/node-fs-extra/issues/298    "API Docs [documentation]"
[#297]: https://github.com/jprichardson/node-fs-extra/pull/297      "Warn about using preserveTimestamps on 32-bit node"
[#296]: https://github.com/jprichardson/node-fs-extra/pull/296      "Improve EEXIST error message for copySync [enhancement]"
[#295]: https://github.com/jprichardson/node-fs-extra/pull/295      "Depreciate using regular expressions for copy's filter option [documentation]"
[#294]: https://github.com/jprichardson/node-fs-extra/pull/294      "BREAKING: Refactor lib/copy/ncp.js [feature-copy]"
[#293]: https://github.com/jprichardson/node-fs-extra/pull/293      "Update CI configs"
[#292]: https://github.com/jprichardson/node-fs-extra/issues/292    "Rewrite lib/copy/ncp.js [enhancement, feature-copy]"
[#291]: https://github.com/jprichardson/node-fs-extra/pull/291      "Escape '$' in replacement string for async file copying"
[#290]: https://github.com/jprichardson/node-fs-extra/issues/290    "Exclude files pattern while copying using copy.config.js [question]"
[#289]: https://github.com/jprichardson/node-fs-extra/pull/289      "(Closes #271) lib/util/utimes: properly close file descriptors in the event of an error"
[#288]: https://github.com/jprichardson/node-fs-extra/pull/288      "(Closes #271) lib/util/utimes: properly close file descriptors in the event of an error"
[#287]: https://github.com/jprichardson/node-fs-extra/issues/287    "emptyDir() callback arguments are inconsistent [enhancement, feature-remove]"
[#286]: https://github.com/jprichardson/node-fs-extra/pull/286      "Added walkSync function"
[#285]: https://github.com/jprichardson/node-fs-extra/issues/285    "CITGM test failing on s390"
[#284]: https://github.com/jprichardson/node-fs-extra/issues/284    "outputFile method is missing a check to determine if existing item is a folder or not"
[#283]: https://github.com/jprichardson/node-fs-extra/pull/283      "Apply filter also on directories and symlinks for copySync()"
[#282]: https://github.com/jprichardson/node-fs-extra/pull/282      "Apply filter also on directories and symlinks for copySync()"
[#281]: https://github.com/jprichardson/node-fs-extra/issues/281    "remove function executes 'successfully' but doesn't do anything?"
[#280]: https://github.com/jprichardson/node-fs-extra/pull/280      "Disable rimraf globbing"
[#279]: https://github.com/jprichardson/node-fs-extra/issues/279    "Some code is vendored instead of included [awaiting-reply]"
[#278]: https://github.com/jprichardson/node-fs-extra/issues/278    "copy() does not preserve file/directory ownership"
[#277]: https://github.com/jprichardson/node-fs-extra/pull/277      "Mention defaults for clobber and dereference options"
[#276]: https://github.com/jprichardson/node-fs-extra/issues/276    "Cannot connect to Shared Folder [awaiting-reply]"
[#275]: https://github.com/jprichardson/node-fs-extra/issues/275    "EMFILE, too many open files on Mac OS with JSON API"
[#274]: https://github.com/jprichardson/node-fs-extra/issues/274    "Use with memory-fs? [enhancement, future]"
[#273]: https://github.com/jprichardson/node-fs-extra/pull/273      "tests: rename `remote.test.js` to `remove.test.js`"
[#272]: https://github.com/jprichardson/node-fs-extra/issues/272    "Copy clobber flag never err even when true [bug, feature-copy]"
[#271]: https://github.com/jprichardson/node-fs-extra/issues/271    "Unclosed file handle on futimes error"
[#270]: https://github.com/jprichardson/node-fs-extra/issues/270    "copy not working as desired on Windows [feature-copy, platform-windows]"
[#269]: https://github.com/jprichardson/node-fs-extra/issues/269    "Copying with preserveTimeStamps: true is inaccurate using 32bit node [feature-copy]"
[#268]: https://github.com/jprichardson/node-fs-extra/pull/268      "port fix for mkdirp issue #111"
[#267]: https://github.com/jprichardson/node-fs-extra/issues/267    "WARN deprecated wrench@1.5.9: wrench.js is deprecated!"
[#266]: https://github.com/jprichardson/node-fs-extra/issues/266    "fs-extra"
[#265]: https://github.com/jprichardson/node-fs-extra/issues/265    "Link the `fs.stat fs.exists` etc. methods for replace the `fs` module forever?"
[#264]: https://github.com/jprichardson/node-fs-extra/issues/264    "Renaming a file using move fails when a file inside is open (at least on windows) [wont-fix]"
[#263]: https://github.com/jprichardson/node-fs-extra/issues/263    "ENOSYS: function not implemented, link [needs-confirmed]"
[#262]: https://github.com/jprichardson/node-fs-extra/issues/262    "Add .exists() and .existsSync()"
[#261]: https://github.com/jprichardson/node-fs-extra/issues/261    "Cannot read property 'prototype' of undefined"
[#260]: https://github.com/jprichardson/node-fs-extra/pull/260      "use more specific path for method require"
[#259]: https://github.com/jprichardson/node-fs-extra/issues/259    "Feature Request: isEmpty"
[#258]: https://github.com/jprichardson/node-fs-extra/issues/258    "copy files does not preserve file timestamp"
[#257]: https://github.com/jprichardson/node-fs-extra/issues/257    "Copying a file on windows fails"
[#256]: https://github.com/jprichardson/node-fs-extra/pull/256      "Updated Readme "
[#255]: https://github.com/jprichardson/node-fs-extra/issues/255    "Update rimraf required version"
[#254]: https://github.com/jprichardson/node-fs-extra/issues/254    "request for readTree, readTreeSync, walkSync method"
[#253]: https://github.com/jprichardson/node-fs-extra/issues/253    "outputFile does not touch mtime when file exists"
[#252]: https://github.com/jprichardson/node-fs-extra/pull/252      "Fixing problem when copying file with no write permission"
[#251]: https://github.com/jprichardson/node-fs-extra/issues/251    "Just wanted to say thank you"
[#250]: https://github.com/jprichardson/node-fs-extra/issues/250    "`fs.remove()` not removing files (works with `rm -rf`)"
[#249]: https://github.com/jprichardson/node-fs-extra/issues/249    "Just a Question ... Remove Servers"
[#248]: https://github.com/jprichardson/node-fs-extra/issues/248    "Allow option to not preserve permissions for copy"
[#247]: https://github.com/jprichardson/node-fs-extra/issues/247    "Add TypeScript typing directly in the fs-extra package"
[#246]: https://github.com/jprichardson/node-fs-extra/issues/246    "fse.remove() && fse.removeSync() don't throw error on ENOENT file"
[#245]: https://github.com/jprichardson/node-fs-extra/issues/245    "filter for empty dir [enhancement]"
[#244]: https://github.com/jprichardson/node-fs-extra/issues/244    "copySync doesn't apply the filter to directories"
[#243]: https://github.com/jprichardson/node-fs-extra/issues/243    "Can I request fs.walk() to be synchronous?"
[#242]: https://github.com/jprichardson/node-fs-extra/issues/242    "Accidentally truncates file names ending with $$ [bug, feature-copy]"
[#241]: https://github.com/jprichardson/node-fs-extra/pull/241      "Remove link to createOutputStream"
[#240]: https://github.com/jprichardson/node-fs-extra/issues/240    "walkSync request"
[#239]: https://github.com/jprichardson/node-fs-extra/issues/239    "Depreciate regular expressions for copy's filter [documentation, feature-copy]"
[#238]: https://github.com/jprichardson/node-fs-extra/issues/238    "Can't write to files while in a worker thread."
[#237]: https://github.com/jprichardson/node-fs-extra/issues/237    ".ensureDir(..) fails silently when passed an invalid path..."
[#236]: https://github.com/jprichardson/node-fs-extra/issues/236    "[Removed] Filed under wrong repo"
[#235]: https://github.com/jprichardson/node-fs-extra/pull/235      "Adds symlink dereference option to `fse.copySync` (#191)"
[#234]: https://github.com/jprichardson/node-fs-extra/issues/234    "ensureDirSync fails silent when EACCES: permission denied on travis-ci"
[#233]: https://github.com/jprichardson/node-fs-extra/issues/233    "please make sure the first argument in callback is error object [feature-copy]"
[#232]: https://github.com/jprichardson/node-fs-extra/issues/232    "Copy a folder content  to its child folder.  "
[#231]: https://github.com/jprichardson/node-fs-extra/issues/231    "Adding read/write/output functions for YAML"
[#230]: https://github.com/jprichardson/node-fs-extra/pull/230      "throw error if src and dest are the same to avoid zeroing out + test"
[#229]: https://github.com/jprichardson/node-fs-extra/pull/229      "fix 'TypeError: callback is not a function' in emptyDir"
[#228]: https://github.com/jprichardson/node-fs-extra/pull/228      "Throw error when target is empty so file is not accidentally zeroed out"
[#227]: https://github.com/jprichardson/node-fs-extra/issues/227    "Uncatchable errors when there are invalid arguments [feature-move]"
[#226]: https://github.com/jprichardson/node-fs-extra/issues/226    "Moving to the current directory"
[#225]: https://github.com/jprichardson/node-fs-extra/issues/225    "EBUSY: resource busy or locked, unlink"
[#224]: https://github.com/jprichardson/node-fs-extra/issues/224    "fse.copy ENOENT error"
[#223]: https://github.com/jprichardson/node-fs-extra/issues/223    "Suspicious behavior of fs.existsSync"
[#222]: https://github.com/jprichardson/node-fs-extra/pull/222      "A clearer description of emtpyDir function"
[#221]: https://github.com/jprichardson/node-fs-extra/pull/221      "Update README.md"
[#220]: https://github.com/jprichardson/node-fs-extra/pull/220      "Non-breaking feature: add option 'passStats' to copy methods."
[#219]: https://github.com/jprichardson/node-fs-extra/pull/219      "Add closing parenthesis in copySync example"
[#218]: https://github.com/jprichardson/node-fs-extra/pull/218      "fix #187 #70 options.filter bug"
[#217]: https://github.com/jprichardson/node-fs-extra/pull/217      "fix #187 #70 options.filter bug"
[#216]: https://github.com/jprichardson/node-fs-extra/pull/216      "fix #187 #70 options.filter bug"
[#215]: https://github.com/jprichardson/node-fs-extra/pull/215      "fse.copy throws error when only src and dest provided [bug, documentation, feature-copy]"
[#214]: https://github.com/jprichardson/node-fs-extra/pull/214      "Fixing copySync anchor tag"
[#213]: https://github.com/jprichardson/node-fs-extra/issues/213    "Merge extfs with this repo"
[#212]: https://github.com/jprichardson/node-fs-extra/pull/212      "Update year to 2016 in README.md and LICENSE"
[#211]: https://github.com/jprichardson/node-fs-extra/issues/211    "Not copying all files"
[#210]: https://github.com/jprichardson/node-fs-extra/issues/210    "copy/copySync behave differently when copying a symbolic file [bug, documentation, feature-copy]"
[#209]: https://github.com/jprichardson/node-fs-extra/issues/209    "In Windows invalid directory name causes infinite loop in ensureDir(). [bug]"
[#208]: https://github.com/jprichardson/node-fs-extra/pull/208      "fix options.preserveTimestamps to false in copy-sync by default [feature-copy]"
[#207]: https://github.com/jprichardson/node-fs-extra/issues/207    "Add `compare` suite of functions"
[#206]: https://github.com/jprichardson/node-fs-extra/issues/206    "outputFileSync"
[#205]: https://github.com/jprichardson/node-fs-extra/issues/205    "fix documents about copy/copySync [documentation, feature-copy]"
[#204]: https://github.com/jprichardson/node-fs-extra/pull/204      "allow copy of block and character device files"
[#203]: https://github.com/jprichardson/node-fs-extra/issues/203    "copy method's argument options couldn't be undefined [bug, feature-copy]"
[#202]: https://github.com/jprichardson/node-fs-extra/issues/202    "why there is not a walkSync method?"
[#201]: https://github.com/jprichardson/node-fs-extra/issues/201    "clobber for directories [feature-copy, future]"
[#200]: https://github.com/jprichardson/node-fs-extra/issues/200    "'copySync' doesn't work in sync"
[#199]: https://github.com/jprichardson/node-fs-extra/issues/199    "fs.copySync fails if user does not own file [bug, feature-copy]"
[#198]: https://github.com/jprichardson/node-fs-extra/issues/198    "handle copying between identical files [feature-copy]"
[#197]: https://github.com/jprichardson/node-fs-extra/issues/197    "Missing documentation for `outputFile` `options` 3rd parameter [documentation]"
[#196]: https://github.com/jprichardson/node-fs-extra/issues/196    "copy filter: async function and/or function called with `fs.stat` result [future]"
[#195]: https://github.com/jprichardson/node-fs-extra/issues/195    "How to override with outputFile?"
[#194]: https://github.com/jprichardson/node-fs-extra/pull/194      "allow ensureFile(Sync) to provide data to be written to created file"
[#193]: https://github.com/jprichardson/node-fs-extra/issues/193    "`fs.copy` fails silently if source file is /dev/null [bug, feature-copy]"
[#192]: https://github.com/jprichardson/node-fs-extra/issues/192    "Remove fs.createOutputStream()"
[#191]: https://github.com/jprichardson/node-fs-extra/issues/191    "How to copy symlinks to target as normal folders [feature-copy]"
[#190]: https://github.com/jprichardson/node-fs-extra/pull/190      "copySync to overwrite destination file if readonly and clobber true"
[#189]: https://github.com/jprichardson/node-fs-extra/pull/189      "move.test fix to support CRLF on Windows"
[#188]: https://github.com/jprichardson/node-fs-extra/issues/188    "move.test failing on windows platform"
[#187]: https://github.com/jprichardson/node-fs-extra/issues/187    "Not filter each file, stops on first false [feature-copy]"
[#186]: https://github.com/jprichardson/node-fs-extra/issues/186    "Do you need a .size() function in this module? [future]"
[#185]: https://github.com/jprichardson/node-fs-extra/issues/185    "Doesn't work on NodeJS v4.x"
[#184]: https://github.com/jprichardson/node-fs-extra/issues/184    "CLI equivalent for fs-extra"
[#183]: https://github.com/jprichardson/node-fs-extra/issues/183    "with clobber true, copy and copySync behave differently if destination file is read only [bug, feature-copy]"
[#182]: https://github.com/jprichardson/node-fs-extra/issues/182    "ensureDir(dir, callback) second callback parameter not specified"
[#181]: https://github.com/jprichardson/node-fs-extra/issues/181    "Add ability to remove file securely [enhancement, wont-fix]"
[#180]: https://github.com/jprichardson/node-fs-extra/issues/180    "Filter option doesn't work the same way in copy and copySync [bug, feature-copy]"
[#179]: https://github.com/jprichardson/node-fs-extra/issues/179    "Include opendir"
[#178]: https://github.com/jprichardson/node-fs-extra/issues/178    "ENOTEMPTY is thrown on removeSync "
[#177]: https://github.com/jprichardson/node-fs-extra/issues/177    "fix `remove()` wildcards (introduced by rimraf) [feature-remove]"
[#176]: https://github.com/jprichardson/node-fs-extra/issues/176    "createOutputStream doesn't emit 'end' event"
[#175]: https://github.com/jprichardson/node-fs-extra/issues/175    "[Feature Request].moveSync support [feature-move, future]"
[#174]: https://github.com/jprichardson/node-fs-extra/pull/174      "Fix copy formatting and document options.filter"
[#173]: https://github.com/jprichardson/node-fs-extra/issues/173    "Feature Request: writeJson should mkdirs"
[#172]: https://github.com/jprichardson/node-fs-extra/issues/172    "rename `clobber` flags to `overwrite`"
[#171]: https://github.com/jprichardson/node-fs-extra/issues/171    "remove unnecessary aliases"
[#170]: https://github.com/jprichardson/node-fs-extra/pull/170      "More robust handling of errors moving across virtual drives"
[#169]: https://github.com/jprichardson/node-fs-extra/pull/169      "suppress ensureLink & ensureSymlink dest exists error"
[#168]: https://github.com/jprichardson/node-fs-extra/pull/168      "suppress ensurelink dest exists error"
[#167]: https://github.com/jprichardson/node-fs-extra/pull/167      "Adds basic (string, buffer) support for ensureFile content [future]"
[#166]: https://github.com/jprichardson/node-fs-extra/pull/166      "Adds basic (string, buffer) support for ensureFile content"
[#165]: https://github.com/jprichardson/node-fs-extra/pull/165      "ensure for link & symlink"
[#164]: https://github.com/jprichardson/node-fs-extra/issues/164    "Feature Request: ensureFile to take optional argument for file content"
[#163]: https://github.com/jprichardson/node-fs-extra/issues/163    "ouputJson not formatted out of the box [bug]"
[#162]: https://github.com/jprichardson/node-fs-extra/pull/162      "ensure symlink & link"
[#161]: https://github.com/jprichardson/node-fs-extra/pull/161      "ensure symlink & link"
[#160]: https://github.com/jprichardson/node-fs-extra/pull/160      "ensure symlink & link"
[#159]: https://github.com/jprichardson/node-fs-extra/pull/159      "ensure symlink & link"
[#158]: https://github.com/jprichardson/node-fs-extra/issues/158    "Feature Request: ensureLink and ensureSymlink methods"
[#157]: https://github.com/jprichardson/node-fs-extra/issues/157    "writeJson isn't formatted"
[#156]: https://github.com/jprichardson/node-fs-extra/issues/156    "Promise.promisifyAll doesn't work for some methods"
[#155]: https://github.com/jprichardson/node-fs-extra/issues/155    "Readme"
[#154]: https://github.com/jprichardson/node-fs-extra/issues/154    "/tmp/millis-test-sync"
[#153]: https://github.com/jprichardson/node-fs-extra/pull/153      "Make preserveTimes also work on read-only files. Closes #152"
[#152]: https://github.com/jprichardson/node-fs-extra/issues/152    "fs.copy fails for read-only files with preserveTimestamp=true [feature-copy]"
[#151]: https://github.com/jprichardson/node-fs-extra/issues/151    "TOC does not work correctly on npm [documentation]"
[#150]: https://github.com/jprichardson/node-fs-extra/issues/150    "Remove test file fixtures, create with code."
[#149]: https://github.com/jprichardson/node-fs-extra/issues/149    "/tmp/millis-test-sync"
[#148]: https://github.com/jprichardson/node-fs-extra/issues/148    "split out `Sync` methods in documentation"
[#147]: https://github.com/jprichardson/node-fs-extra/issues/147    "Adding rmdirIfEmpty"
[#146]: https://github.com/jprichardson/node-fs-extra/pull/146      "ensure test.js works"
[#145]: https://github.com/jprichardson/node-fs-extra/issues/145    "Add `fs.exists` and `fs.existsSync` if it doesn't exist."
[#144]: https://github.com/jprichardson/node-fs-extra/issues/144    "tests failing"
[#143]: https://github.com/jprichardson/node-fs-extra/issues/143    "update graceful-fs"
[#142]: https://github.com/jprichardson/node-fs-extra/issues/142    "PrependFile Feature"
[#141]: https://github.com/jprichardson/node-fs-extra/pull/141      "Add option to preserve timestamps"
[#140]: https://github.com/jprichardson/node-fs-extra/issues/140    "Json file reading fails with 'utf8'"
[#139]: https://github.com/jprichardson/node-fs-extra/pull/139      "Preserve file timestamp on copy. Closes #138"
[#138]: https://github.com/jprichardson/node-fs-extra/issues/138    "Preserve timestamps on copying files"
[#137]: https://github.com/jprichardson/node-fs-extra/issues/137    "outputFile/outputJson: Unexpected end of input"
[#136]: https://github.com/jprichardson/node-fs-extra/pull/136      "Update license attribute"
[#135]: https://github.com/jprichardson/node-fs-extra/issues/135    "emptyDir throws Error if no callback is provided"
[#134]: https://github.com/jprichardson/node-fs-extra/pull/134      "Handle EEXIST error when clobbering dir"
[#133]: https://github.com/jprichardson/node-fs-extra/pull/133      "Travis runs with `sudo: false`"
[#132]: https://github.com/jprichardson/node-fs-extra/pull/132      "isDirectory method"
[#131]: https://github.com/jprichardson/node-fs-extra/issues/131    "copySync is not working iojs 1.8.4 on linux [feature-copy]"
[#130]: https://github.com/jprichardson/node-fs-extra/pull/130      "Please review additional features."
[#129]: https://github.com/jprichardson/node-fs-extra/pull/129      "can you review this feature?"
[#128]: https://github.com/jprichardson/node-fs-extra/issues/128    "fsExtra.move(filepath, newPath) broken;"
[#127]: https://github.com/jprichardson/node-fs-extra/issues/127    "consider using fs.access to remove deprecated warnings for fs.exists"
[#126]: https://github.com/jprichardson/node-fs-extra/issues/126    " TypeError: Object #<Object> has no method 'access'"
[#125]: https://github.com/jprichardson/node-fs-extra/issues/125    "Question: What do the *Sync function do different from non-sync"
[#124]: https://github.com/jprichardson/node-fs-extra/issues/124    "move with clobber option 'ENOTEMPTY'"
[#123]: https://github.com/jprichardson/node-fs-extra/issues/123    "Only copy the content of a directory"
[#122]: https://github.com/jprichardson/node-fs-extra/pull/122      "Update section links in README to match current section ids."
[#121]: https://github.com/jprichardson/node-fs-extra/issues/121    "emptyDir is undefined"
[#120]: https://github.com/jprichardson/node-fs-extra/issues/120    "usage bug caused by shallow cloning methods of 'graceful-fs'"
[#119]: https://github.com/jprichardson/node-fs-extra/issues/119    "mkdirs and ensureDir never invoke callback and consume CPU indefinitely if provided a path with invalid characters on Windows"
[#118]: https://github.com/jprichardson/node-fs-extra/pull/118      "createOutputStream"
[#117]: https://github.com/jprichardson/node-fs-extra/pull/117      "Fixed issue with slash separated paths on windows"
[#116]: https://github.com/jprichardson/node-fs-extra/issues/116    "copySync can only copy directories not files [documentation, feature-copy]"
[#115]: https://github.com/jprichardson/node-fs-extra/issues/115    ".Copy & .CopySync [feature-copy]"
[#114]: https://github.com/jprichardson/node-fs-extra/issues/114    "Fails to move (rename) directory to non-empty directory even with clobber: true"
[#113]: https://github.com/jprichardson/node-fs-extra/issues/113    "fs.copy seems to callback early if the destination file already exists"
[#112]: https://github.com/jprichardson/node-fs-extra/pull/112      "Copying a file into an existing directory"
[#111]: https://github.com/jprichardson/node-fs-extra/pull/111      "Moving a file into an existing directory "
[#110]: https://github.com/jprichardson/node-fs-extra/pull/110      "Moving a file into an existing directory"
[#109]: https://github.com/jprichardson/node-fs-extra/issues/109    "fs.move across windows drives fails"
[#108]: https://github.com/jprichardson/node-fs-extra/issues/108    "fse.move directories across multiple devices doesn't work"
[#107]: https://github.com/jprichardson/node-fs-extra/pull/107      "Check if dest path is an existing dir and copy or move source in it"
[#106]: https://github.com/jprichardson/node-fs-extra/issues/106    "fse.copySync crashes while copying across devices D: [feature-copy]"
[#105]: https://github.com/jprichardson/node-fs-extra/issues/105    "fs.copy hangs on iojs"
[#104]: https://github.com/jprichardson/node-fs-extra/issues/104    "fse.move deletes folders [bug]"
[#103]: https://github.com/jprichardson/node-fs-extra/issues/103    "Error: EMFILE with copy"
[#102]: https://github.com/jprichardson/node-fs-extra/issues/102    "touch / touchSync was removed ?"
[#101]: https://github.com/jprichardson/node-fs-extra/issues/101    "fs-extra promisified"
[#100]: https://github.com/jprichardson/node-fs-extra/pull/100      "copy: options object or filter to pass to ncp"
[#99]: https://github.com/jprichardson/node-fs-extra/issues/99      "ensureDir() modes [future]"
[#98]: https://github.com/jprichardson/node-fs-extra/issues/98      "fs.copy() incorrect async behavior [bug]"
[#97]: https://github.com/jprichardson/node-fs-extra/pull/97        "use path.join; fix copySync bug"
[#96]: https://github.com/jprichardson/node-fs-extra/issues/96      "destFolderExists in copySync is always undefined."
[#95]: https://github.com/jprichardson/node-fs-extra/pull/95        "Using graceful-ncp instead of ncp"
[#94]: https://github.com/jprichardson/node-fs-extra/issues/94      "Error: EEXIST, file already exists '../mkdirp/bin/cmd.js' on fs.copySync() [enhancement, feature-copy]"
[#93]: https://github.com/jprichardson/node-fs-extra/issues/93      "Confusing error if drive not mounted [enhancement]"
[#92]: https://github.com/jprichardson/node-fs-extra/issues/92      "Problems with Bluebird"
[#91]: https://github.com/jprichardson/node-fs-extra/issues/91      "fs.copySync('/test', '/haha') is different with 'cp -r /test /haha' [enhancement]"
[#90]: https://github.com/jprichardson/node-fs-extra/issues/90      "Folder creation and file copy is Happening in 64 bit machine but not in 32 bit machine"
[#89]: https://github.com/jprichardson/node-fs-extra/issues/89      "Error: EEXIST using fs-extra's fs.copy to copy a directory on Windows"
[#88]: https://github.com/jprichardson/node-fs-extra/issues/88      "Stacking those libraries"
[#87]: https://github.com/jprichardson/node-fs-extra/issues/87      "createWriteStream + outputFile = ?"
[#86]: https://github.com/jprichardson/node-fs-extra/issues/86      "no moveSync?"
[#85]: https://github.com/jprichardson/node-fs-extra/pull/85        "Copy symlinks in copySync"
[#84]: https://github.com/jprichardson/node-fs-extra/issues/84      "Push latest version to npm ?"
[#83]: https://github.com/jprichardson/node-fs-extra/issues/83      "Prevent copying a directory into itself [feature-copy]"
[#82]: https://github.com/jprichardson/node-fs-extra/pull/82        "README updates for move"
[#81]: https://github.com/jprichardson/node-fs-extra/issues/81      "fd leak after fs.move"
[#80]: https://github.com/jprichardson/node-fs-extra/pull/80        "Preserve file mode in copySync"
[#79]: https://github.com/jprichardson/node-fs-extra/issues/79      "fs.copy only .html file empty"
[#78]: https://github.com/jprichardson/node-fs-extra/pull/78        "copySync was not applying filters to directories"
[#77]: https://github.com/jprichardson/node-fs-extra/issues/77      "Create README reference to bluebird"
[#76]: https://github.com/jprichardson/node-fs-extra/issues/76      "Create README reference to typescript"
[#75]: https://github.com/jprichardson/node-fs-extra/issues/75      "add glob as a dep? [question]"
[#74]: https://github.com/jprichardson/node-fs-extra/pull/74        "including new emptydir module"
[#73]: https://github.com/jprichardson/node-fs-extra/pull/73        "add dependency status in readme"
[#72]: https://github.com/jprichardson/node-fs-extra/pull/72        "Use svg instead of png to get better image quality"
[#71]: https://github.com/jprichardson/node-fs-extra/issues/71      "fse.copy not working on Windows 7 x64 OS, but, copySync does work"
[#70]: https://github.com/jprichardson/node-fs-extra/issues/70      "Not filter each file, stops on first false [bug]"
[#69]: https://github.com/jprichardson/node-fs-extra/issues/69      "How to check if folder exist and read the folder name"
[#68]: https://github.com/jprichardson/node-fs-extra/issues/68      "consider flag to readJsonSync (throw false) [enhancement]"
[#67]: https://github.com/jprichardson/node-fs-extra/issues/67      "docs for readJson incorrectly states that is accepts options"
[#66]: https://github.com/jprichardson/node-fs-extra/issues/66      "ENAMETOOLONG"
[#65]: https://github.com/jprichardson/node-fs-extra/issues/65      "exclude filter in fs.copy"
[#64]: https://github.com/jprichardson/node-fs-extra/issues/64      "Announce: mfs - monitor your fs-extra calls"
[#63]: https://github.com/jprichardson/node-fs-extra/issues/63      "Walk"
[#62]: https://github.com/jprichardson/node-fs-extra/issues/62      "npm install fs-extra doesn't work"
[#61]: https://github.com/jprichardson/node-fs-extra/issues/61      "No longer supports node 0.8 due to use of `^` in package.json dependencies"
[#60]: https://github.com/jprichardson/node-fs-extra/issues/60      "chmod & chown for mkdirs"
[#59]: https://github.com/jprichardson/node-fs-extra/issues/59      "Consider including mkdirp and making fs-extra '--use_strict' safe [question]"
[#58]: https://github.com/jprichardson/node-fs-extra/issues/58      "Stack trace not included in fs.copy error"
[#57]: https://github.com/jprichardson/node-fs-extra/issues/57      "Possible to include wildcards in delete?"
[#56]: https://github.com/jprichardson/node-fs-extra/issues/56      "Crash when have no access to write to destination file in copy "
[#55]: https://github.com/jprichardson/node-fs-extra/issues/55      "Is it possible to have any console output similar to Grunt copy module?"
[#54]: https://github.com/jprichardson/node-fs-extra/issues/54      "`copy` does not preserve file ownership and permissons"
[#53]: https://github.com/jprichardson/node-fs-extra/issues/53      "outputFile() - ability to write data in appending mode"
[#52]: https://github.com/jprichardson/node-fs-extra/pull/52        "This fixes (what I think) is a bug in copySync"
[#51]: https://github.com/jprichardson/node-fs-extra/pull/51        "Add a Bitdeli Badge to README"
[#50]: https://github.com/jprichardson/node-fs-extra/issues/50      "Replace mechanism in createFile"
[#49]: https://github.com/jprichardson/node-fs-extra/pull/49        "update rimraf to v2.2.6"
[#48]: https://github.com/jprichardson/node-fs-extra/issues/48      "fs.copy issue [bug]"
[#47]: https://github.com/jprichardson/node-fs-extra/issues/47      "Bug in copy - callback called on readStream 'close' - Fixed in ncp 0.5.0"
[#46]: https://github.com/jprichardson/node-fs-extra/pull/46        "update copyright year"
[#45]: https://github.com/jprichardson/node-fs-extra/pull/45        "Added note about fse.outputFile() being the one that overwrites"
[#44]: https://github.com/jprichardson/node-fs-extra/pull/44        "Proposal: Stream support"
[#43]: https://github.com/jprichardson/node-fs-extra/issues/43      "Better error reporting "
[#42]: https://github.com/jprichardson/node-fs-extra/issues/42      "Performance issue?"
[#41]: https://github.com/jprichardson/node-fs-extra/pull/41        "There does seem to be a synchronous version now"
[#40]: https://github.com/jprichardson/node-fs-extra/issues/40      "fs.copy throw unexplained error ENOENT, utime "
[#39]: https://github.com/jprichardson/node-fs-extra/pull/39        "Added regression test for copy() return callback on error"
[#38]: https://github.com/jprichardson/node-fs-extra/pull/38        "Return err in copy() fstat cb, because stat could be undefined or null"
[#37]: https://github.com/jprichardson/node-fs-extra/issues/37      "Maybe include a line reader? [enhancement, question]"
[#36]: https://github.com/jprichardson/node-fs-extra/pull/36        "`filter` parameter `fs.copy` and `fs.copySync`"
[#35]: https://github.com/jprichardson/node-fs-extra/pull/35        "`filter` parameter `fs.copy` and `fs.copySync` "
[#34]: https://github.com/jprichardson/node-fs-extra/issues/34      "update docs to include options for JSON methods [enhancement]"
[#33]: https://github.com/jprichardson/node-fs-extra/pull/33        "fs_extra.copySync"
[#32]: https://github.com/jprichardson/node-fs-extra/issues/32      "update to latest jsonfile [enhancement]"
[#31]: https://github.com/jprichardson/node-fs-extra/issues/31      "Add ensure methods [enhancement]"
[#30]: https://github.com/jprichardson/node-fs-extra/issues/30      "update package.json optional dep `graceful-fs`"
[#29]: https://github.com/jprichardson/node-fs-extra/issues/29      "Copy failing if dest directory doesn't exist. Is this intended?"
[#28]: https://github.com/jprichardson/node-fs-extra/issues/28      "homepage field must be a string url. Deleted."
[#27]: https://github.com/jprichardson/node-fs-extra/issues/27      "Update Readme"
[#26]: https://github.com/jprichardson/node-fs-extra/issues/26      "Add readdir recursive method. [enhancement]"
[#25]: https://github.com/jprichardson/node-fs-extra/pull/25        "adding an `.npmignore` file"
[#24]: https://github.com/jprichardson/node-fs-extra/issues/24      "[bug] cannot run in strict mode [bug]"
[#23]: https://github.com/jprichardson/node-fs-extra/issues/23      "`writeJSON()` should create parent directories"
[#22]: https://github.com/jprichardson/node-fs-extra/pull/22        "Add a limit option to mkdirs()"
[#21]: https://github.com/jprichardson/node-fs-extra/issues/21      "touch() in 0.10.0"
[#20]: https://github.com/jprichardson/node-fs-extra/issues/20      "fs.remove yields callback before directory is really deleted"
[#19]: https://github.com/jprichardson/node-fs-extra/issues/19      "fs.copy err is empty array"
[#18]: https://github.com/jprichardson/node-fs-extra/pull/18        "Exposed copyFile Function"
[#17]: https://github.com/jprichardson/node-fs-extra/issues/17      "Use `require('graceful-fs')` if found instead of `require('fs')`"
[#16]: https://github.com/jprichardson/node-fs-extra/pull/16        "Update README.md"
[#15]: https://github.com/jprichardson/node-fs-extra/issues/15      "Implement cp -r but sync aka copySync. [enhancement]"
[#14]: https://github.com/jprichardson/node-fs-extra/issues/14      "fs.mkdirSync is broken in 0.3.1"
[#13]: https://github.com/jprichardson/node-fs-extra/issues/13      "Thoughts on including a directory tree / file watcher? [enhancement, question]"
[#12]: https://github.com/jprichardson/node-fs-extra/issues/12      "copyFile & copyFileSync are global"
[#11]: https://github.com/jprichardson/node-fs-extra/issues/11      "Thoughts on including a file walker? [enhancement, question]"
[#10]: https://github.com/jprichardson/node-fs-extra/issues/10      "move / moveFile API [enhancement]"
[#9]: https://github.com/jprichardson/node-fs-extra/issues/9        "don't import normal fs stuff into fs-extra"
[#8]: https://github.com/jprichardson/node-fs-extra/pull/8          "Update rimraf to latest version"
[#6]: https://github.com/jprichardson/node-fs-extra/issues/6        "Remove CoffeeScript development dependency"
[#5]: https://github.com/jprichardson/node-fs-extra/issues/5        "comments on naming"
[#4]: https://github.com/jprichardson/node-fs-extra/issues/4        "version bump to 0.2"
[#3]: https://github.com/jprichardson/node-fs-extra/pull/3          "Hi! I fixed some code for you!"
[#2]: https://github.com/jprichardson/node-fs-extra/issues/2        "Merge with fs.extra and mkdirp"
[#1]: https://github.com/jprichardson/node-fs-extra/issues/1        "file-extra npm !exist"
