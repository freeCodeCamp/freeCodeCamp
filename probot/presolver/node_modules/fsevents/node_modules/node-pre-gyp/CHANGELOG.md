# node-pre-gyp changelog

## 0.10.0

- Allow for a single-level module path when packing @allenluce (https://github.com/mapbox/node-pre-gyp/pull/371)
- Log warnings instead of errors when falling back @xzyfer (https://github.com/mapbox/node-pre-gyp/pull/366)
- Add Node.js v10 support to tests (https://github.com/mapbox/node-pre-gyp/pull/372)
- Remove retire.js from CI (https://github.com/mapbox/node-pre-gyp/pull/372)
- Remove support for Node.js v4 due to [EOL on April 30th, 2018](https://github.com/nodejs/Release/blob/7dd52354049cae99eed0e9fe01345b0722a86fde/schedule.json#L14)
- Update appveyor tests to install default NPM version instead of NPM v2.x for all Windows builds (https://github.com/mapbox/node-pre-gyp/pull/375)

## 0.9.1

- Fixed regression (in v0.9.0) with support for http redirects @allenluce (https://github.com/mapbox/node-pre-gyp/pull/361)

## 0.9.0

- Switched from using `request` to `needle` to reduce size of module deps (https://github.com/mapbox/node-pre-gyp/pull/350)

## 0.8.0

- N-API support (@inspiredware)

## 0.7.1

- Upgraded to tar v4.x

## 0.7.0

 - Updated request and hawk (#347)
 - Dropped node v0.10.x support

## 0.6.40

 - Improved error reporting if an install fails

## 0.6.39

 - Support for node v9
 - Support for versioning on `{libc}` to allow binaries to work on non-glic linux systems like alpine linux


## 0.6.38

 - Maintaining compatibility (for v0.6.x series) with node v0.10.x

## 0.6.37

 - Solved one part of #276: now now deduce the node ABI from the major version for node >= 2 even when not stored in the abi_crosswalk.json
 - Fixed docs to avoid mentioning the deprecated and dangerous `prepublish` in package.json (#291)
 - Add new node versions to crosswalk
 - Ported tests to use tape instead of mocha
 - Got appveyor tests passing by downgrading npm and node-gyp

## 0.6.36

 - Removed the running of `testbinary` during install. Because this was regressed for so long, it is too dangerous to re-enable by default. Developers needing validation can call `node-pre-gyp testbinary` directory.
 - Fixed regression in v0.6.35 for electron installs (now skipping binary validation which is not yet supported for electron)

## 0.6.35

 - No longer recommending `npm ls` in `prepublish` (#291)
 - Fixed testbinary command (#283) @szdavid92

## 0.6.34

 - Added new node versions to crosswalk, including v8
 - Upgraded deps to latest versions, started using `^` instead of `~` for all deps.

## 0.6.33

 - Improved support for yarn

## 0.6.32

 - Honor npm configuration for CA bundles (@heikkipora)
 - Add node-pre-gyp and npm versions to user agent (@addaleax)
 - Updated various deps
 - Add known node version for v7.x

## 0.6.31

 - Updated various deps

## 0.6.30

 - Update to npmlog@4.x and semver@5.3.x
 - Add known node version for v6.5.0

## 0.6.29

 - Add known node versions for v0.10.45, v0.12.14, v4.4.4, v5.11.1, and v6.1.0

## 0.6.28

 - Now more verbose when remote binaries are not available. This is needed since npm is increasingly more quiet by default
   and users need to know why builds are falling back to source compiles that might then error out.

## 0.6.27

 - Add known node version for node v6
 - Stopped bundling dependencies
 - Documented method for module authors to avoid bundling node-pre-gyp
   - See https://github.com/mapbox/node-pre-gyp/tree/master#configuring for details

## 0.6.26

 - Skip validation for nw runtime (https://github.com/mapbox/node-pre-gyp/pull/181) via @fleg

## 0.6.25

 - Improved support for auto-detection of electron runtime in `node-pre-gyp.find()`
   - Pull request from @enlight - https://github.com/mapbox/node-pre-gyp/pull/187
 - Add known node version for 4.4.1 and 5.9.1

## 0.6.24

 - Add known node version for 5.8.0, 5.9.0, and 4.4.0.

## 0.6.23

 - Add known node version for 0.10.43, 0.12.11, 4.3.2, and 5.7.1.

## 0.6.22

 - Add known node version for 4.3.1, and 5.7.0.

## 0.6.21

 - Add known node version for 0.10.42, 0.12.10, 4.3.0, and 5.6.0.

## 0.6.20

 - Add known node version for 4.2.5, 4.2.6, 5.4.0, 5.4.1,and 5.5.0.

## 0.6.19

 - Add known node version for 4.2.4

## 0.6.18

 - Add new known node versions for 0.10.x, 0.12.x, 4.x, and 5.x

## 0.6.17

 - Re-tagged to fix packaging problem of `Error: Cannot find module 'isarray'`

## 0.6.16

 - Added known version in crosswalk for 5.1.0.

## 0.6.15

 - Upgraded tar-pack (https://github.com/mapbox/node-pre-gyp/issues/182)
 - Support custom binary hosting mirror (https://github.com/mapbox/node-pre-gyp/pull/170)
 - Added known version in crosswalk for 4.2.2.

## 0.6.14

 - Added node 5.x version

## 0.6.13

 - Added more known node 4.x versions

## 0.6.12

 - Added support for [Electron](http://electron.atom.io/). Just pass the `--runtime=electron` flag when building/installing. Thanks @zcbenz

## 0.6.11

 - Added known node and io.js versions including more 3.x and 4.x versions

## 0.6.10

 - Added known node and io.js versions including 3.x and 4.x versions
 - Upgraded `tar` dep

## 0.6.9

 - Upgraded `rc` dep
 - Updated known io.js version: v2.4.0

## 0.6.8

 - Upgraded `semver` and `rimraf` deps
 - Updated known node and io.js versions

## 0.6.7

 - Fixed `node_abi` versions for io.js 1.1.x -> 1.8.x (should be 43, but was stored as 42) (refs https://github.com/iojs/build/issues/94)

## 0.6.6

 - Updated with known io.js 2.0.0 version

## 0.6.5

 - Now respecting `npm_config_node_gyp` (https://github.com/npm/npm/pull/4887)
 - Updated to semver@4.3.2
 - Updated known node v0.12.x versions and io.js 1.x versions.

## 0.6.4

 - Improved support for `io.js` (@fengmk2)
 - Test coverage improvements (@mikemorris)
 - Fixed support for `--dist-url` that regressed in 0.6.3

## 0.6.3

 - Added support for passing raw options to node-gyp using `--` separator. Flags passed after
   the `--` to `node-pre-gyp configure` will be passed directly to gyp while flags passed
   after the `--` will be passed directly to make/visual studio.
 - Added `node-pre-gyp configure` command to be able to call `node-gyp configure` directly
 - Fix issue with require validation not working on windows 7 (@edgarsilva)

## 0.6.2

 - Support for io.js >= v1.0.2
 - Deferred require of `request` and `tar` to help speed up command line usage of `node-pre-gyp`.

## 0.6.1

 - Fixed bundled `tar` version

## 0.6.0

 - BREAKING: node odd releases like v0.11.x now use `major.minor.patch` for `{node_abi}` instead of `NODE_MODULE_VERSION` (#124)
 - Added support for `toolset` option in versioning. By default is an empty string but `--toolset` can be passed to publish or install to select alternative binaries that target a custom toolset like C++11. For example to target Visual Studio 2014 modules like node-sqlite3 use `--toolset=v140`.
 - Added support for `--no-rollback` option to request that a failed binary test does not remove the binary module leaves it in place.
 - Added support for `--update-binary` option to request an existing binary be re-installed and the check for a valid local module be skipped.
 - Added support for passing build options from `npm` through `node-pre-gyp` to `node-gyp`: `--nodedir`, `--disturl`, `--python`, and `--msvs_version`

## 0.5.31

 - Added support for deducing node_abi for node.js runtime from previous release if the series is even
 - Added support for --target=0.10.33

## 0.5.30

 - Repackaged with latest bundled deps

## 0.5.29

 - Added support for semver `build`.
 - Fixed support for downloading from urls that include `+`.

## 0.5.28

 - Now reporting unix style paths only in reveal command

## 0.5.27

 - Fixed support for auto-detecting s3 bucket name when it contains `.` - @taavo
 - Fixed support for installing when path contains a `'` - @halfdan
 - Ported tests to mocha

## 0.5.26

 - Fix node-webkit support when `--target` option is not provided

## 0.5.25

 - Fix bundling of deps

## 0.5.24

 - Updated ABI crosswalk to incldue node v0.10.30 and v0.10.31

## 0.5.23

 - Added `reveal` command. Pass no options to get all versioning data as json. Pass a second arg to grab a single versioned property value
 - Added support for `--silent` (shortcut for `--loglevel=silent`)

## 0.5.22

 - Fixed node-webkit versioning name (NOTE: node-webkit support still experimental)

## 0.5.21

 - New package to fix `shasum check failed` error with v0.5.20

## 0.5.20

 - Now versioning node-webkit binaries based on major.minor.patch - assuming no compatible ABI across versions (#90)

## 0.5.19

 - Updated to know about more node-webkit releases

## 0.5.18

 - Updated to know about more node-webkit releases

## 0.5.17

 - Updated to know about node v0.10.29 release

## 0.5.16

 - Now supporting all aws-sdk configuration parameters (http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html) (#86)

## 0.5.15

 - Fixed installation of windows packages sub directories on unix systems (#84)

## 0.5.14

 - Finished support for cross building using `--target_platform` option (#82)
 - Now skipping binary validation on install if target arch/platform do not match the host.
 - Removed multi-arch validing for OS X since it required a FAT node.js binary

## 0.5.13

 - Fix problem in 0.5.12 whereby the wrong versions of mkdirp and semver where bundled.

## 0.5.12

 - Improved support for node-webkit (@Mithgol)

## 0.5.11

 - Updated target versions listing

## 0.5.10

 - Fixed handling of `-debug` flag passed directory to node-pre-gyp (#72)
 - Added optional second arg to `node_pre_gyp.find` to customize the default versioning options used to locate the runtime binary
 - Failed install due to `testbinary` check failure no longer leaves behind binary (#70)

## 0.5.9

 - Fixed regression in `testbinary` command causing installs to fail on windows with 0.5.7 (#60)

## 0.5.8

 - Started bundling deps

## 0.5.7

 - Fixed the `testbinary` check, which is used to determine whether to re-download or source compile, to work even in complex dependency situations (#63)
 - Exposed the internal `testbinary` command in node-pre-gyp command line tool
 - Fixed minor bug so that `fallback_to_build` option is always respected

## 0.5.6

 - Added support for versioning on the `name` value in `package.json` (#57).
 - Moved to using streams for reading tarball when publishing (#52)

## 0.5.5

 - Improved binary validation that also now works with node-webkit (@Mithgol)
 - Upgraded test apps to work with node v0.11.x
 - Improved test coverage

## 0.5.4

 - No longer depends on external install of node-gyp for compiling builds.

## 0.5.3

 - Reverted fix for debian/nodejs since it broke windows (#45)

## 0.5.2

 - Support for debian systems where the node binary is named `nodejs` (#45)
 - Added `bin/node-pre-gyp.cmd` to be able to run command on windows locally (npm creates an .npm automatically when globally installed)
 - Updated abi-crosswalk with node v0.10.26 entry.

## 0.5.1

 - Various minor bug fixes, several improving windows support for publishing.

## 0.5.0

 - Changed property names in `binary` object: now required are `module_name`, `module_path`, and `host`.
 - Now `module_path` supports versioning, which allows developers to opt-in to using a versioned install path (#18).
 - Added `remote_path` which also supports versioning.
 - Changed `remote_uri` to `host`.

## 0.4.2

 - Added support for `--target` flag to request cross-compile against a specific node/node-webkit version.
 - Added preliminary support for node-webkit
 - Fixed support for `--target_arch` option being respected in all cases.

## 0.4.1

 - Fixed exception when only stderr is available in binary test (@bendi / #31)

## 0.4.0

 - Enforce only `https:` based remote publishing access.
 - Added `node-pre-gyp info` command to display listing of published binaries
 - Added support for changing the directory node-pre-gyp should build in with the `-C/--directory` option.
 - Added support for S3 prefixes.

## 0.3.1

 - Added `unpublish` command.
 - Fixed module path construction in tests.
 - Added ability to disable falling back to build behavior via `npm install --fallback-to-build=false` which overrides setting in a depedencies package.json `install` target.

## 0.3.0

 - Support for packaging all files in `module_path` directory - see `app4` for example
 - Added `testpackage` command.
 - Changed `clean` command to only delete `.node` not entire `build` directory since node-gyp will handle that.
 - `.node` modules must be in a folder of there own since tar-pack will remove everything when it unpacks.
