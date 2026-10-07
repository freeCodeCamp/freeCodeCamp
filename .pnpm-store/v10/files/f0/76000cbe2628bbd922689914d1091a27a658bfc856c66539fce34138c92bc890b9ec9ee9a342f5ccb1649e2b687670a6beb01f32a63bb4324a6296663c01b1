# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [16.2.0](https://www.github.com/yargs/yargs/compare/v16.1.1...v16.2.0) (2020-12-05)


### Features

* command() now accepts an array of modules ([f415388](https://www.github.com/yargs/yargs/commit/f415388cc454d02786c65c50dd6c7a0cf9d8b842))


### Bug Fixes

* add package.json to module exports ([#1818](https://www.github.com/yargs/yargs/issues/1818)) ([d783a49](https://www.github.com/yargs/yargs/commit/d783a49a7f21c9bbd4eec2990268f3244c4d5662)), closes [#1817](https://www.github.com/yargs/yargs/issues/1817)

### [16.1.1](https://www.github.com/yargs/yargs/compare/v16.1.0...v16.1.1) (2020-11-15)


### Bug Fixes

* expose helpers for legacy versions of Node.js ([#1801](https://www.github.com/yargs/yargs/issues/1801)) ([107deaa](https://www.github.com/yargs/yargs/commit/107deaa4f68b7bc3f2386041e1f4fe0272b29c0a))
* **deno:** get yargs working on deno@1.5.x ([#1799](https://www.github.com/yargs/yargs/issues/1799)) ([cb01c98](https://www.github.com/yargs/yargs/commit/cb01c98c44e30f55c2dc9434caef524ae433d9a4))

## [16.1.0](https://www.github.com/yargs/yargs/compare/v16.0.3...v16.1.0) (2020-10-15)


### Features

* expose hideBin helper for CJS ([#1768](https://www.github.com/yargs/yargs/issues/1768)) ([63e1173](https://www.github.com/yargs/yargs/commit/63e1173bb47dc651c151973a16ef659082a9ae66))


### Bug Fixes

* **deno:** update types for deno ^1.4.0 ([#1772](https://www.github.com/yargs/yargs/issues/1772)) ([0801752](https://www.github.com/yargs/yargs/commit/080175207d281be63edf90adfe4f0568700b0bf5))
* **exports:** node 13.0-13.6 require a string fallback ([#1776](https://www.github.com/yargs/yargs/issues/1776)) ([b45c43a](https://www.github.com/yargs/yargs/commit/b45c43a5f64b565c3794f9792150eaeec4e00b69))
* **modules:** module path was incorrect ([#1759](https://www.github.com/yargs/yargs/issues/1759)) ([95a4a0a](https://www.github.com/yargs/yargs/commit/95a4a0ac573cfe158e6e4bc8c8682ebd1644a198))
* **positional:** positional strings no longer drop decimals ([#1761](https://www.github.com/yargs/yargs/issues/1761)) ([e1a300f](https://www.github.com/yargs/yargs/commit/e1a300f1293ad821c900284616337f080b207980))
* make positionals in -- count towards validation ([#1752](https://www.github.com/yargs/yargs/issues/1752)) ([eb2b29d](https://www.github.com/yargs/yargs/commit/eb2b29d34f1a41e0fd6c4e841960e5bfc329dc3c))

### [16.0.3](https://www.github.com/yargs/yargs/compare/v16.0.2...v16.0.3) (2020-09-10)


### Bug Fixes

* move yargs.cjs to yargs to fix Node 10 imports ([#1747](https://www.github.com/yargs/yargs/issues/1747)) ([5bfb85b](https://www.github.com/yargs/yargs/commit/5bfb85b33b85db8a44b5f7a700a8e4dbaf022df0))

### [16.0.2](https://www.github.com/yargs/yargs/compare/v16.0.1...v16.0.2) (2020-09-09)


### Bug Fixes

* **typescript:** yargs-parser was breaking @types/yargs ([#1745](https://www.github.com/yargs/yargs/issues/1745)) ([2253284](https://www.github.com/yargs/yargs/commit/2253284b233cceabd8db677b81c5bf1755eef230))

### [16.0.1](https://www.github.com/yargs/yargs/compare/v16.0.0...v16.0.1) (2020-09-09)


### Bug Fixes

* code was not passed to process.exit ([#1742](https://www.github.com/yargs/yargs/issues/1742)) ([d1a9930](https://www.github.com/yargs/yargs/commit/d1a993035a2f76c138460052cf19425f9684b637))

## [16.0.0](https://www.github.com/yargs/yargs/compare/v15.4.2...v16.0.0) (2020-09-09)


### ⚠ BREAKING CHANGES

* tweaks to ESM/Deno API surface: now exports yargs function by default; getProcessArgvWithoutBin becomes hideBin; types now exported for Deno.
* find-up replaced with escalade; export map added (limits importable files in Node >= 12); yarser-parser@19.x.x (new decamelize/camelcase implementation).
* **usage:** single character aliases are now shown first in help output
* rebase helper is no longer provided on yargs instance.
* drop support for EOL Node 8 (#1686)

### Features

* adds strictOptions() ([#1738](https://www.github.com/yargs/yargs/issues/1738)) ([b215fba](https://www.github.com/yargs/yargs/commit/b215fba0ed6e124e5aad6cf22c8d5875661c63a3))
* **helpers:** rebase, Parser, applyExtends now blessed helpers ([#1733](https://www.github.com/yargs/yargs/issues/1733)) ([c7debe8](https://www.github.com/yargs/yargs/commit/c7debe8eb1e5bc6ea20b5ed68026c56e5ebec9e1))
* adds support for ESM and Deno ([#1708](https://www.github.com/yargs/yargs/issues/1708)) ([ac6d5d1](https://www.github.com/yargs/yargs/commit/ac6d5d105a75711fe703f6a39dad5181b383d6c6))
* drop support for EOL Node 8 ([#1686](https://www.github.com/yargs/yargs/issues/1686)) ([863937f](https://www.github.com/yargs/yargs/commit/863937f23c3102f804cdea78ee3097e28c7c289f))
* i18n for ESM and Deno ([#1735](https://www.github.com/yargs/yargs/issues/1735)) ([c71783a](https://www.github.com/yargs/yargs/commit/c71783a5a898a0c0e92ac501c939a3ec411ac0c1))
* tweaks to API surface based on user feedback ([#1726](https://www.github.com/yargs/yargs/issues/1726)) ([4151fee](https://www.github.com/yargs/yargs/commit/4151fee4c33a97d26bc40de7e623e5b0eb87e9bb))
* **usage:** single char aliases first in help ([#1574](https://www.github.com/yargs/yargs/issues/1574)) ([a552990](https://www.github.com/yargs/yargs/commit/a552990c120646c2d85a5c9b628e1ce92a68e797))


### Bug Fixes

* **yargs:** add missing command(module) signature ([#1707](https://www.github.com/yargs/yargs/issues/1707)) ([0f81024](https://www.github.com/yargs/yargs/commit/0f810245494ccf13a35b7786d021b30fc95ecad5)), closes [#1704](https://www.github.com/yargs/yargs/issues/1704)

[Older CHANGELOG Entries](https://github.com/yargs/yargs/blob/master/docs/CHANGELOG-historical.md)
