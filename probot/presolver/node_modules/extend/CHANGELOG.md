3.0.2 / 2018-07-19
==================
  * [Fix] Prevent merging `__proto__` property (#48)
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `tape`
  * [Tests] up to `node` `v10.7`, `v9.11`, `v8.11`, `v7.10`, `v6.14`, `v4.9`; use `nvm install-latest-npm`

3.0.1 / 2017-04-27
==================
  * [Fix] deep extending should work with a non-object (#46)
  * [Dev Deps] update `tape`, `eslint`, `@ljharb/eslint-config`
  * [Tests] up to `node` `v7.9`, `v6.10`, `v4.8`; improve matrix
  * [Docs] Switch from vb.teelaun.ch to versionbadg.es for the npm version badge SVG.
  * [Docs] Add example to readme (#34)

3.0.0 / 2015-07-01
==================
  * [Possible breaking change] Use global "strict" directive (#32)
  * [Tests] `int` is an ES3 reserved word
  * [Tests] Test up to `io.js` `v2.3`
  * [Tests] Add `npm run eslint`
  * [Dev Deps] Update `covert`, `jscs`

2.0.1 / 2015-04-25
==================
  * Use an inline `isArray` check, for ES3 browsers. (#27)
  * Some old browsers fail when an identifier is `toString`
  * Test latest `node` and `io.js` versions on `travis-ci`; speed up builds
  * Add license info to package.json (#25)
  * Update `tape`, `jscs`
  * Adding a CHANGELOG

2.0.0 / 2014-10-01
==================
  * Increase code coverage to 100%; run code coverage as part of tests
  * Add `npm run lint`; Run linter as part of tests
  * Remove nodeType and setInterval checks in isPlainObject
  * Updating `tape`, `jscs`, `covert`
  * General style and README cleanup

1.3.0 / 2014-06-20
==================
  * Add component.json for browser support (#18)
  * Use SVG for badges in README (#16)
  * Updating `tape`, `covert`
  * Updating travis-ci to work with multiple node versions
  * Fix `deep === false` bug (returning target as {}) (#14)
  * Fixing constructor checks in isPlainObject
  * Adding additional test coverage
  * Adding `npm run coverage`
  * Add LICENSE (#13)
  * Adding a warning about `false`, per #11
  * General style and whitespace cleanup

1.2.1 / 2013-09-14
==================
  * Fixing hasOwnProperty bugs that would only have shown up in specific browsers. Fixes #8
  * Updating `tape`

1.2.0 / 2013-09-02
==================
  * Updating the README: add badges
  * Adding a missing variable reference.
  * Using `tape` instead of `buster` for tests; add more tests (#7)
  * Adding node 0.10 to Travis CI (#6)
  * Enabling "npm test" and cleaning up package.json (#5)
  * Add Travis CI.

1.1.3 / 2012-12-06
==================
  * Added unit tests.
  * Ensure extend function is named. (Looks nicer in a stack trace.)
  * README cleanup.

1.1.1 / 2012-11-07
==================
  * README cleanup.
  * Added installation instructions.
  * Added a missing semicolon

1.0.0 / 2012-04-08
==================
  * Initial commit

