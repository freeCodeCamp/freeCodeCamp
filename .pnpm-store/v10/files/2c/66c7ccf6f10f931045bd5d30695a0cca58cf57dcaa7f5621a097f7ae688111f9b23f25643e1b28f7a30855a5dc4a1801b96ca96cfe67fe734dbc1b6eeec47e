# Change Log
All notable changes to this module will be documented in this file.
This project adheres to [Semantic Versioning](https://semver.org/).
This change log adheres to standards from [Keep a CHANGELOG](https://keepachangelog.com).

## Unreleased

## v2.12.1 - 2025-06-19

### Fixed
- `unambiguous`: detect modules exported from minified code ([#3124], thanks [@michaelfaith])

### Changed
- [refactor] `parse`: avoid using a regex here (thanks [@ljharb])

## v2.12.0 - 2024-09-26

### Added
- `hash`: add support for hashing functions ([#3072], thanks [@michaelfaith])

## v2.11.1 - 2024-09-23

### Fixed
- `parse`: remove unneeded extra backticks ([#3057], thanks [@G-Rath])
- `parse`: espree parser isn't working with flat config ([#3061], thanks [@michaelfaith])
- `parse`: add `ecmaVersion` and `sourceType` to `parserOptions` ([#3061], thanks [@michaelfaith])

## v2.11.0 - 2024-09-05

### New
- `declaredScope`: take a `node` for modern eslint versions (thanks [@michaelfaith])

## v2.10.0 - 2024-09-05

### New
- add context compatibility helpers ([#3049], thanks [@michaelfaith])

## v2.9.0 - 2024-09-02

### New
- add support for Flat Config ([#3018], thanks [@michaelfaith])

## v2.8.2 - 2024-08-25

### Fixed
- `parse`: also delete `parserOptions.projectService` ([#3039], thanks [@Mysak0CZ])

### Changed
- [types] use shared config (thanks [@ljharb])
- [meta] add `exports`, `main`
- [meta] add `repository.directory` field
- [refactor] avoid hoisting

## v2.8.1 - 2024-02-26

### Fixed
- `parse`: also delete `parserOptions.EXPERIMENTAL_useProjectService` ([#2963], thanks [@JoshuaKGoldberg])

### Changed
- add types (thanks [@ljharb])

## v2.8.0 - 2023-04-14

### New
- `parse`: support flat config ([#2714], thanks [@DMartens])

### Fixed
- Improve performance of `fullResolve` for large projects ([#2755], thanks [@leipert])

## v2.7.4 - 2022-08-11

### Fixed
- [Fix] Ignore hashbang and BOM while parsing ([#2431], thanks [@silverwind])

### Changed
- [patch] mark eslint as an optional peer dep ([#2523], thanks [@wmertens])

## v2.7.3 - 2022-01-26

### Fixed
- `parse`: restore compatibility by making the return value `ast` again ([#2350], thanks [@ljharb])

## v2.7.2 - 2022-01-01

### Fixed
- [patch] Fix `@babel/eslint-parser` 8 compatibility ([#2343], thanks [@nicolo-ribaudo])

### Changed
- [Refactor] inline `pkgDir` implementation; remove `pkg-dir`

## v2.7.1 - 2021-10-13

### Fixed
- fixed SyntaxError in node <= 6: Unexpected token ) in parse.js ([#2261], thanks [@VitusFW])

## v2.7.0 - 2021-10-11

### Added
- `fileExistsWithCaseSync`: add `strict` argument ([#1262], thanks [@sergei-startsev])
- add `visit`, to support dynamic imports ([#1660], [#2212], thanks [@maxkomarychev], [@aladdin-add], [@Hypnosphi])
- create internal replacement for `pkg-up` and `read-pkg-up` ([#2047], [@mgwalker])

## v2.6.2 - 2021-08-08

### Fixed
- Use `context.getPhysicalFilename()` when available (ESLint 7.28+) ([#2160], thanks [@pmcelhaney])

## v2.6.1 - 2021-05-13

### Fixed
- `no-unresolved`: check `import()` ([#2026], thanks [@aladdin-add])
- Add fix for Windows Subsystem for Linux ([#1786], thanks [@manuth])

### Changed
- [deps] update `debug`
- [Refactor] use `Array.isArray` instead of `instanceof Array`

## v2.6.0 - 2020-03-28

### Added
- Print more helpful info if parsing fails ([#1671], thanks [@kaiyoma])

## v2.5.2 - 2020-01-12

### Fixed
- Makes the loader resolution more tolerant ([#1606], thanks [@arcanis])
- Use `createRequire` instead of `createRequireFromPath` if available ([#1602], thanks [@iamnapo])

## v2.5.1 - 2020-01-11

### Fixed
- Uses createRequireFromPath to resolve loaders ([#1591], thanks [@arcanis])
- report the error stack on a resolution error ([#599], thanks [@sompylasar])

## v2.5.0 - 2019-12-07

### Added
- support `parseForESLint` from custom parser ([#1435], thanks [@JounQin])

### Changed
 - Avoid superfluous calls and code ([#1551], thanks [@brettz9])

## v2.4.1 - 2019-07-19

### Fixed
 - Improve parse perf when using `@typescript-eslint/parser` ([#1409], thanks [@bradzacher])
 - Improve support for TypeScript declare structures ([#1356], thanks [@christophercurrie])

## v2.4.0 - 2019-04-13

### Added
 - no-useless-path-segments: Add noUselessIndex option ([#1290], thanks [@timkraut])

### Fixed
 - Fix overwriting of dynamic import() CallExpression ([`no-cycle`], [`no-relative-parent-import`], [`no-unresolved`], [`no-useless-path-segments`]) ([#1218], [#1166], [#1035], thanks [@vikr01])


## v2.3.0 - 2019-01-22
### Fixed
- use `process.hrtime()` for cache dates ([#1160], thanks [@hulkish])

## v2.2.0 - 2018-03-29
### Changed
- `parse`: attach node locations by default.
- `moduleVisitor`: visitor now gets the full `import` statement node as a second
  argument, so rules may report against the full statement / `require` call instead
  of only the string literal node.

## v2.1.1 - 2017-06-22

Re-releasing v2.1.0 after vetting (again) and unable to reproduce issue.


## v2.1.0 - 2017-06-02 [YANKED]

Yanked due to critical issue with cache key resulting from #839.

### Added
- `parse` now additionally passes `filePath` to `parser` in `parserOptions` like `eslint` core does

## v2.0.0 - 2016-11-07
### Changed
- `unambiguous` no longer exposes fast test regex

### Fixed
- `unambiguous.test()` regex is now properly in multiline mode

[#3124]: https://github.com/import-js/eslint-plugin-import/pull/3124
[#3072]: https://github.com/import-js/eslint-plugin-import/pull/3072
[#3061]: https://github.com/import-js/eslint-plugin-import/pull/3061
[#3057]: https://github.com/import-js/eslint-plugin-import/pull/3057
[#3049]: https://github.com/import-js/eslint-plugin-import/pull/3049
[#3039]: https://github.com/import-js/eslint-plugin-import/pull/3039
[#3018]: https://github.com/import-js/eslint-plugin-import/pull/3018
[#2963]: https://github.com/import-js/eslint-plugin-import/pull/2963
[#2755]: https://github.com/import-js/eslint-plugin-import/pull/2755
[#2714]: https://github.com/import-js/eslint-plugin-import/pull/2714
[#2523]: https://github.com/import-js/eslint-plugin-import/pull/2523
[#2431]: https://github.com/import-js/eslint-plugin-import/pull/2431
[#2350]: https://github.com/import-js/eslint-plugin-import/issues/2350
[#2343]: https://github.com/import-js/eslint-plugin-import/pull/2343
[#2261]: https://github.com/import-js/eslint-plugin-import/pull/2261
[#2212]: https://github.com/import-js/eslint-plugin-import/pull/2212
[#2160]: https://github.com/import-js/eslint-plugin-import/pull/2160
[#2047]: https://github.com/import-js/eslint-plugin-import/pull/2047
[#2026]: https://github.com/import-js/eslint-plugin-import/pull/2026
[#1786]: https://github.com/import-js/eslint-plugin-import/pull/1786
[#1671]: https://github.com/import-js/eslint-plugin-import/pull/1671
[#1660]: https://github.com/import-js/eslint-plugin-import/pull/1660
[#1606]: https://github.com/import-js/eslint-plugin-import/pull/1606
[#1602]: https://github.com/import-js/eslint-plugin-import/pull/1602
[#1591]: https://github.com/import-js/eslint-plugin-import/pull/1591
[#1551]: https://github.com/import-js/eslint-plugin-import/pull/1551
[#1435]: https://github.com/import-js/eslint-plugin-import/pull/1435
[#1409]: https://github.com/import-js/eslint-plugin-import/pull/1409
[#1356]: https://github.com/import-js/eslint-plugin-import/pull/1356
[#1290]: https://github.com/import-js/eslint-plugin-import/pull/1290
[#1262]: https://github.com/import-js/eslint-plugin-import/pull/1262
[#1218]: https://github.com/import-js/eslint-plugin-import/pull/1218
[#1166]: https://github.com/import-js/eslint-plugin-import/issues/1166
[#1160]: https://github.com/import-js/eslint-plugin-import/pull/1160
[#1035]: https://github.com/import-js/eslint-plugin-import/issues/1035
[#599]: https://github.com/import-js/eslint-plugin-import/pull/599

[@aladdin-add]: https://github.com/aladdin-add
[@arcanis]: https://github.com/arcanis
[@bradzacher]: https://github.com/bradzacher
[@brettz9]: https://github.com/brettz9
[@christophercurrie]: https://github.com/christophercurrie
[@DMartens]: https://github.com/DMartens
[@G-Rath]: https://github.com/G-Rath
[@hulkish]: https://github.com/hulkish
[@Hypnosphi]: https://github.com/Hypnosphi
[@iamnapo]: https://github.com/iamnapo
[@JoshuaKGoldberg]: https://github.com/JoshuaKGoldberg
[@JounQin]: https://github.com/JounQin
[@kaiyoma]: https://github.com/kaiyoma
[@leipert]: https://github.com/leipert
[@ljharb]: https://github.com/ljharb
[@manuth]: https://github.com/manuth
[@maxkomarychev]: https://github.com/maxkomarychev
[@mgwalker]: https://github.com/mgwalker
[@michaelfaith]: https://github.com/michaelfaith
[@Mysak0CZ]: https://github.com/Mysak0CZ
[@nicolo-ribaudo]: https://github.com/nicolo-ribaudo
[@pmcelhaney]: https://github.com/pmcelhaney
[@sergei-startsev]: https://github.com/sergei-startsev
[@silverwind]: https://github.com/silverwind
[@sompylasar]: https://github.com/sompylasar
[@timkraut]: https://github.com/timkraut
[@vikr01]: https://github.com/vikr01
[@VitusFW]: https://github.com/VitusFW
[@wmertens]: https://github.com/wmertens
