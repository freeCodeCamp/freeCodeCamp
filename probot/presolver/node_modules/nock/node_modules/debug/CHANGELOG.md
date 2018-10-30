
3.1.0 / 2017-09-26
==================

  * Add `DEBUG_HIDE_DATE` env var (#486)
  * Remove ReDoS regexp in %o formatter (#504)
  * Remove "component" from package.json
  * Remove `component.json`
  * Ignore package-lock.json
  * Examples: fix colors printout
  * Fix: browser detection
  * Fix: spelling mistake (#496, @EdwardBetts)

3.0.1 / 2017-08-24
==================

  * Fix: Disable colors in Edge and Internet Explorer (#489)

3.0.0 / 2017-08-08
==================

  * Breaking: Remove DEBUG_FD (#406)
  * Breaking: Use `Date#toISOString()` instead to `Date#toUTCString()` when output is not a TTY (#418)
  * Breaking: Make millisecond timer namespace specific and allow 'always enabled' output (#408)
  * Addition: document `enabled` flag (#465)
  * Addition: add 256 colors mode (#481)
  * Addition: `enabled()` updates existing debug instances, add `destroy()` function (#440)
  * Update: component: update "ms" to v2.0.0
  * Update: separate the Node and Browser tests in Travis-CI
  * Update: refactor Readme, fixed documentation, added "Namespace Colors" section, redid screenshots
  * Update: separate Node.js and web browser examples for organization
  * Update: update "browserify" to v14.4.0
  * Fix: fix Readme typo (#473)

2.6.9 / 2017-09-22
==================

  * remove ReDoS regexp in %o formatter (#504)

2.6.8 / 2017-05-18
==================

  * Fix: Check for undefined on browser globals (#462, @marbemac)

2.6.7 / 2017-05-16
==================

  * Fix: Update ms to 2.0.0 to fix regular expression denial of service vulnerability (#458, @hubdotcom)
  * Fix: Inline extend function in node implementation (#452, @dougwilson)
  * Docs: Fix typo (#455, @msasad)

2.6.5 / 2017-04-27
==================
  
  * Fix: null reference check on window.documentElement.style.WebkitAppearance (#447, @thebigredgeek)
  * Misc: clean up browser reference checks (#447, @thebigredgeek)
  * Misc: add npm-debug.log to .gitignore (@thebigredgeek)


2.6.4 / 2017-04-20
==================

  * Fix: bug that would occur if process.env.DEBUG is a non-string value. (#444, @LucianBuzzo)
  * Chore: ignore bower.json in npm installations. (#437, @joaovieira)
  * Misc: update "ms" to v0.7.3 (@tootallnate)

2.6.3 / 2017-03-13
==================

  * Fix: Electron reference to `process.env.DEBUG` (#431, @paulcbetts)
  * Docs: Changelog fix (@thebigredgeek)

2.6.2 / 2017-03-10
==================

  * Fix: DEBUG_MAX_ARRAY_LENGTH (#420, @slavaGanzin)
  * Docs: Add backers and sponsors from Open Collective (#422, @piamancini)
  * Docs: Add Slackin invite badge (@tootallnate)

2.6.1 / 2017-02-10
==================

  * Fix: Module's `export default` syntax fix for IE8 `Expected identifier` error
  * Fix: Whitelist DEBUG_FD for values 1 and 2 only (#415, @pi0)
  * Fix: IE8 "Expected identifier" error (#414, @vgoma)
  * Fix: Namespaces would not disable once enabled (#409, @musikov)

2.6.0 / 2016-12-28
==================

  * Fix: added better null pointer checks for browser useColors (@thebigredgeek)
  * Improvement: removed explicit `window.debug` export (#404, @tootallnate)
  * Improvement: deprecated `DEBUG_FD` environment variable (#405, @tootallnate)

2.5.2 / 2016-12-25
==================

  * Fix: reference error on window within webworkers (#393, @KlausTrainer)
  * Docs: fixed README typo (#391, @lurch)
  * Docs: added notice about v3 api discussion (@thebigredgeek)

2.5.1 / 2016-12-20
==================

  * Fix: babel-core compatibility

2.5.0 / 2016-12-20
==================

  * Fix: wrong reference in bower file (@thebigredgeek)
  * Fix: webworker compatibility (@thebigredgeek)
  * Fix: output formatting issue (#388, @kribblo)
  * Fix: babel-loader compatibility (#383, @escwald)
  * Misc: removed built asset from repo and publications (@thebigredgeek)
  * Misc: moved source files to /src (#378, @yamikuronue)
  * Test: added karma integration and replaced babel with browserify for browser tests (#378, @yamikuronue)
  * Test: coveralls integration (#378, @yamikuronue)
  * Docs: simplified language in the opening paragraph (#373, @yamikuronue)

2.4.5 / 2016-12-17
==================

  * Fix: `navigator` undefined in Rhino (#376, @jochenberger)
  * Fix: custom log function (#379, @hsiliev)
  * Improvement: bit of cleanup + linting fixes (@thebigredgeek)
  * Improvement: rm non-maintainted `dist/` dir (#375, @freewil)
  * Docs: simplified language in the opening paragraph. (#373, @yamikuronue)

2.4.4 / 2016-12-14
==================

  * Fix: work around debug being loaded in preload scripts for electron (#368, @paulcbetts)

2.4.3 / 2016-12-14
==================

  * Fix: navigation.userAgent error for react native (#364, @escwald)

2.4.2 / 2016-12-14
==================

  * Fix: browser colors (#367, @tootallnate)
  * Misc: travis ci integration (@thebigredgeek)
  * Misc: added linting and testing boilerplate with sanity check (@thebigredgeek)

2.4.1 / 2016-12-13
==================

  * Fix: typo that broke the package (#356)

2.4.0 / 2016-12-13
==================

  * Fix: bower.json references unbuilt src entry point (#342, @justmatt)
  * Fix: revert "handle regex special characters" (@tootallnate)
  * Feature: configurable util.inspect()`options for NodeJS (#327, @tootallnate)
  * Feature: %O`(big O) pretty-prints objects (#322, @tootallnate)
  * Improvement: allow colors in workers (#335, @botverse)
  * Improvement: use same color for same namespace. (#338, @lchenay)

2.3.3 / 2016-11-09
==================

  * Fix: Catch `JSON.stringify()` errors (#195, Jovan Alleyne)
  * Fix: Returning `localStorage` saved values (#331, Levi Thomason)
  * Improvement: Don't create an empty object when no `process` (Nathan Rajlich)

2.3.2 / 2016-11-09
==================

  * Fix: be super-safe in index.js as well (@TooTallNate)
  * Fix: should check whether process exists (Tom Newby)

2.3.1 / 2016-11-09
==================

  * Fix: Added electron compatibility (#324, @paulcbetts)
  * Improvement: Added performance optimizations (@tootallnate)
  * Readme: Corrected PowerShell environment variable example (#252, @gimre)
  * Misc: Removed yarn lock file from source control (#321, @fengmk2)

2.3.0 / 2016-11-07
==================

  * Fix: Consistent placement of ms diff at end of output (#215, @gorangajic)
  * Fix: Escaping of regex special characters in namespace strings (#250, @zacronos)
  * Fix: Fixed bug causing crash on react-native (#282, @vkarpov15)
  * Feature: Enabled ES6+ compatible import via default export (#212 @bucaran)
  * Feature: Added %O formatter to reflect Chrome's console.log capability (#279, @oncletom)
  * Package: Update "ms" to 0.7.2 (#315, @DevSide)
  * Package: removed superfluous version property from bower.json (#207 @kkirsche)
  * Readme: fix USE_COLORS to DEBUG_COLORS
  * Readme: Doc fixes for format string sugar (#269, @mlucool)
  * Readme: Updated docs for DEBUG_FD and DEBUG_COLORS environment variables (#232, @mattlyons0)
  * Readme: doc fixes for PowerShell (#271 #243, @exoticknight @unreadable)
  * Readme: better docs for browser support (#224, @matthewmueller)
  * Tooling: Added yarn integration for development (#317, @thebigredgeek)
  * Misc: Renamed History.md to CHANGELOG.md (@thebigredgeek)
  * Misc: Added license file (#226 #274, @CantemoInternal @sdaitzman)
  * Misc: Updated contributors (@thebigredgeek)

2.2.0 / 2015-05-09
==================

  * package: update "ms" to v0.7.1 (#202, @dougwilson)
  * README: add logging to file example (#193, @DanielOchoa)
  * README: fixed a typo (#191, @amir-s)
  * browser: expose `storage` (#190, @stephenmathieson)
  * Makefile: add a `distclean` target (#189, @stephenmathieson)

2.1.3 / 2015-03-13
==================

  * Updated stdout/stderr example (#186)
  * Updated example/stdout.js to match debug current behaviour
  * Renamed example/stderr.js to stdout.js
  * Update Readme.md (#184)
  * replace high intensity foreground color for bold (#182, #183)

2.1.2 / 2015-03-01
==================

  * dist: recompile
  * update "ms" to v0.7.0
  * package: update "browserify" to v9.0.3
  * component: fix "ms.js" repo location
  * changed bower package name
  * updated documentation about using debug in a browser
  * fix: security error on safari (#167, #168, @yields)

2.1.1 / 2014-12-29
==================

  * browser: use `typeof` to check for `console` existence
  * browser: check for `console.log` truthiness (fix IE 8/9)
  * browser: add support for Chrome apps
  * Readme: added Windows usage remarks
  * Add `bower.json` to properly support bower install

2.1.0 / 2014-10-15
==================

  * node: implement `DEBUG_FD` env variable support
  * package: update "browserify" to v6.1.0
  * package: add "license" field to package.json (#135, @panuhorsmalahti)

2.0.0 / 2014-09-01
==================

  * package: update "browserify" to v5.11.0
  * node: use stderr rather than stdout for logging (#29, @stephenmathieson)

1.0.4 / 2014-07-15
==================

  * dist: recompile
  * example: remove `console.info()` log usage
  * example: add "Content-Type" UTF-8 header to browser example
  * browser: place %c marker after the space character
  * browser: reset the "content" color via `color: inherit`
  * browser: add colors support for Firefox >= v31
  * debug: prefer an instance `log()` function over the global one (#119)
  * Readme: update documentation about styled console logs for FF v31 (#116, @wryk)

1.0.3 / 2014-07-09
==================

  * Add support for multiple wildcards in namespaces (#122, @seegno)
  * browser: fix lint

1.0.2 / 2014-06-10
==================

  * browser: update color palette (#113, @gscottolson)
  * common: make console logging function configurable (#108, @timoxley)
  * node: fix %o colors on old node <= 0.8.x
  * Makefile: find node path using shell/which (#109, @timoxley)

1.0.1 / 2014-06-06
==================

  * browser: use `removeItem()` to clear localStorage
  * browser, node: don't set DEBUG if namespaces is undefined (#107, @leedm777)
  * package: add "contributors" section
  * node: fix comment typo
  * README: list authors

1.0.0 / 2014-06-04
==================

  * make ms diff be global, not be scope
  * debug: ignore empty strings in enable()
  * node: make DEBUG_COLORS able to disable coloring
  * *: export the `colors` array
  * npmignore: don't publish the `dist` dir
  * Makefile: refactor to use browserify
  * package: add "browserify" as a dev dependency
  * Readme: add Web Inspector Colors section
  * node: reset terminal color for the debug content
  * node: map "%o" to `util.inspect()`
  * browser: map "%j" to `JSON.stringify()`
  * debug: add custom "formatters"
  * debug: use "ms" module for humanizing the diff
  * Readme: add "bash" syntax highlighting
  * browser: add Firebug color support
  * browser: add colors for WebKit browsers
  * node: apply log to `console`
  * rewrite: abstract common logic for Node & browsers
  * add .jshintrc file

0.8.1 / 2014-04-14
==================

  * package: re-add the "component" section

0.8.0 / 2014-03-30
==================

  * add `enable()` method for nodejs. Closes #27
  * change from stderr to stdout
  * remove unnecessary index.js file

0.7.4 / 2013-11-13
==================

  * remove "browserify" key from package.json (fixes something in browserify)

0.7.3 / 2013-10-30
==================

  * fix: catch localStorage security error when cookies are blocked (Chrome)
  * add debug(err) support. Closes #46
  * add .browser prop to package.json. Closes #42

0.7.2 / 2013-02-06
==================

  * fix package.json
  * fix: Mobile Safari (private mode) is broken with debug
  * fix: Use unicode to send escape character to shell instead of octal to work with strict mode javascript

0.7.1 / 2013-02-05
==================

  * add repository URL to package.json
  * add DEBUG_COLORED to force colored output
  * add browserify support
  * fix component. Closes #24

0.7.0 / 2012-05-04
==================

  * Added .component to package.json
  * Added debug.component.js build

0.6.0 / 2012-03-16
==================

  * Added support for "-" prefix in DEBUG [Vinay Pulim]
  * Added `.enabled` flag to the node version [TooTallNate]

0.5.0 / 2012-02-02
==================

  * Added: humanize diffs. Closes #8
  * Added `debug.disable()` to the CS variant
  * Removed padding. Closes #10
  * Fixed: persist client-side variant again. Closes #9

0.4.0 / 2012-02-01
==================

  * Added browser variant support for older browsers [TooTallNate]
  * Added `debug.enable('project:*')` to browser variant [TooTallNate]
  * Added padding to diff (moved it to the right)

0.3.0 / 2012-01-26
==================

  * Added millisecond diff when isatty, otherwise UTC string

0.2.0 / 2012-01-22
==================

  * Added wildcard support

0.1.0 / 2011-12-02
==================

  * Added: remove colors unless stderr isatty [TooTallNate]

0.0.1 / 2010-01-03
==================

  * Initial release
