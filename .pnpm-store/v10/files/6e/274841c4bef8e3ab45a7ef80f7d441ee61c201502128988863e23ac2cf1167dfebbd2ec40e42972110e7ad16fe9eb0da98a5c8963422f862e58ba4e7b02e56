# Changelog

## [3.0.2](https://github.com/nodejs/import-in-the-middle/compare/import-in-the-middle-v3.0.1...import-in-the-middle-v3.0.2) (2026-06-08)


### Bug Fixes

* Updated proxying logic for builtins that are used as CJS ([#250](https://github.com/nodejs/import-in-the-middle/issues/250)) ([f69eb8f](https://github.com/nodejs/import-in-the-middle/commit/f69eb8f13c91b7088003e7390b4f54c5076aa50b))

## [3.0.1](https://github.com/nodejs/import-in-the-middle/compare/import-in-the-middle-v3.0.0...import-in-the-middle-v3.0.1) (2026-04-07)


### Bug Fixes

* handle file specifiers from turbopacked packages better ([#246](https://github.com/nodejs/import-in-the-middle/issues/246)) ([04539fb](https://github.com/nodejs/import-in-the-middle/commit/04539fb5ceb9e4816933bd4310c1334077af1643))

## [3.0.0](https://github.com/nodejs/import-in-the-middle/compare/import-in-the-middle-v2.0.6...import-in-the-middle-v3.0.0) (2026-01-30)


### ⚠ BREAKING CHANGES

* drop support for Node.js < v18 ([#230](https://github.com/nodejs/import-in-the-middle/issues/230))

### Miscellaneous Chores

* drop support for Node.js &lt; v18 ([#230](https://github.com/nodejs/import-in-the-middle/issues/230)) ([f463b13](https://github.com/nodejs/import-in-the-middle/commit/f463b1342ca946608432c9be39fecb86e7f7cbf0))

## [2.0.6](https://github.com/nodejs/import-in-the-middle/compare/import-in-the-middle-v2.0.5...import-in-the-middle-v2.0.6) (2026-01-27)


### Bug Fixes

* ensure the callback 'name' arg is the module name when matching the module main file, even when 'internals: true' option is used ([#241](https://github.com/nodejs/import-in-the-middle/issues/241)) ([ad9d02c](https://github.com/nodejs/import-in-the-middle/commit/ad9d02cd774df110c5e2f72e6cca414d7c315404))
* fix a couple issues with duplicate entries and specifier (submodule) matching ([#237](https://github.com/nodejs/import-in-the-middle/issues/237)) ([fdc0b3d](https://github.com/nodejs/import-in-the-middle/commit/fdc0b3d5863a1338586e25a94b831fee1bd8bd0b))
* properly hook builtin modules that require the 'node:' prefix ([#240](https://github.com/nodejs/import-in-the-middle/issues/240)) ([de84589](https://github.com/nodejs/import-in-the-middle/commit/de8458962958182eac743e99edeb944160638e2c))
* properly hook builtin modules that require the 'node:' prefix ([#240](https://github.com/nodejs/import-in-the-middle/issues/240)) ([9d916a5](https://github.com/nodejs/import-in-the-middle/commit/9d916a59b4a95b2a22568d1e8f65948598178de9))

## [2.0.5](https://github.com/nodejs/import-in-the-middle/compare/import-in-the-middle-v2.0.4...import-in-the-middle-v2.0.5) (2026-01-20)


### Bug Fixes

* handle lazy initialization and circular dependencies ([#229](https://github.com/nodejs/import-in-the-middle/issues/229)) ([d1421dc](https://github.com/nodejs/import-in-the-middle/commit/d1421dc0ae65ce6da5de5cb58f41af99f9d87371))
* entrypoint can be treated as CommonJS when loader chains add query params to file URLs ([#223](https://github.com/nodejs/import-in-the-middle/issues/223)) ([60ab14a](https://github.com/nodejs/import-in-the-middle/commit/60ab14aeed8960b5dec4bec571a81649363e256e))

## [2.0.4](https://github.com/nodejs/import-in-the-middle/compare/import-in-the-middle-v2.0.3...import-in-the-middle-v2.0.4) (2026-01-14)


### Bug Fixes

* do not instrument the top level module ([#225](https://github.com/nodejs/import-in-the-middle/issues/225)) ([b563b35](https://github.com/nodejs/import-in-the-middle/commit/b563b35c74b96554b5112905391ec3842162b7ee))

## [2.0.3](https://github.com/nodejs/import-in-the-middle/compare/import-in-the-middle-v2.0.2...import-in-the-middle-v2.0.3) (2026-01-13)


### Bug Fixes

* add missing JSDoc type information ([40c1009](https://github.com/nodejs/import-in-the-middle/commit/40c1009ef3acc45b5eec89ed1b866866933edace))
* add missing name for fast builtin lookup ([40c1009](https://github.com/nodejs/import-in-the-middle/commit/40c1009ef3acc45b5eec89ed1b866866933edace))
* do not crash on missing setters ([#223](https://github.com/nodejs/import-in-the-middle/issues/223)) ([fe44778](https://github.com/nodejs/import-in-the-middle/commit/fe4477832aa9a3422ebecf0a2460cf77be3b3581))
* handle undefined exports properly ([40c1009](https://github.com/nodejs/import-in-the-middle/commit/40c1009ef3acc45b5eec89ed1b866866933edace))
* multiple minor issues ([#221](https://github.com/nodejs/import-in-the-middle/issues/221)) ([40c1009](https://github.com/nodejs/import-in-the-middle/commit/40c1009ef3acc45b5eec89ed1b866866933edace))
* remove small memory leak ([40c1009](https://github.com/nodejs/import-in-the-middle/commit/40c1009ef3acc45b5eec89ed1b866866933edace))


### Performance Improvements

* improve perf by calculating less stack frames and fast paths ([#224](https://github.com/nodejs/import-in-the-middle/issues/224)) ([09ae8bf](https://github.com/nodejs/import-in-the-middle/commit/09ae8bfdeedf6c1c8c81c7338858004447e68233))

## [2.0.2](https://github.com/nodejs/import-in-the-middle/compare/import-in-the-middle-v2.0.1...import-in-the-middle-v2.0.2) (2026-01-11)


### Bug Fixes

* grammar issue in README.md ([#216](https://github.com/nodejs/import-in-the-middle/issues/216)) ([46e4a2a](https://github.com/nodejs/import-in-the-middle/commit/46e4a2a9ad250c06fb52c9b782370071a6d1f3cc))
* properly handle internals when specifier matches ([#220](https://github.com/nodejs/import-in-the-middle/issues/220)) ([05e4216](https://github.com/nodejs/import-in-the-middle/commit/05e4216e10d11c7eb996d4124f36e476f3a6d42f))

## [2.0.1](https://github.com/nodejs/import-in-the-middle/compare/import-in-the-middle-v2.0.0...import-in-the-middle-v2.0.1) (2025-12-18)


### Bug Fixes

* properly hook submodule package exports ([#215](https://github.com/nodejs/import-in-the-middle/issues/215)) ([a20f47a](https://github.com/nodejs/import-in-the-middle/commit/a20f47a3013105a235f2ba48bc17319f7a57636c))

## [2.0.0](https://github.com/nodejs/import-in-the-middle/compare/import-in-the-middle-v1.15.0...import-in-the-middle-v2.0.0) (2025-10-14)


### ⚠ BREAKING CHANGES

Converting all modules running in the loader thread to ESM should not be a
breaking change for most users since it primarily affects internal implementation
details. However, if you were referencing internal CJS files like `hook.js` this will no longer work.

### Features

* convert all modules running in loader thread to ESM ([#210](https://github.com/nodejs/import-in-the-middle/issues/210)) ([da7c7a6](https://github.com/nodejs/import-in-the-middle/commit/da7c7a6904a40bf394b7b2a271a2838711c5417c))

## [1.15.0](https://github.com/nodejs/import-in-the-middle/compare/import-in-the-middle-v1.14.4...import-in-the-middle-v1.15.0) (2025-10-09)


### Features

* Compatibility with specifier imports  ([#211](https://github.com/nodejs/import-in-the-middle/issues/211)) ([83d662a](https://github.com/nodejs/import-in-the-middle/commit/83d662a8e1f9a7b8632bc78f7499ccc0ab4d12c2))

## [1.14.4](https://github.com/nodejs/import-in-the-middle/compare/import-in-the-middle-v1.14.3...import-in-the-middle-v1.14.4) (2025-09-25)


### Bug Fixes

* Revert "use `createRequire` to load `hook.js` ([#205](https://github.com/nodejs/import-in-the-middle/issues/205))" ([#208](https://github.com/nodejs/import-in-the-middle/issues/208)) ([f23b7ef](https://github.com/nodejs/import-in-the-middle/commit/f23b7ef9e8d4103f21865ec7a1e5374f41d38ff5))

## [1.14.3](https://github.com/nodejs/import-in-the-middle/compare/import-in-the-middle-v1.14.2...import-in-the-middle-v1.14.3) (2025-09-24)


### Bug Fixes

* use `createRequire` to load `hook.js` ([#205](https://github.com/nodejs/import-in-the-middle/issues/205)) ([81a2ae0](https://github.com/nodejs/import-in-the-middle/commit/81a2ae0ea094df27c9baaf6e267276e0acb21af1))

## [1.14.2](https://github.com/nodejs/import-in-the-middle/compare/import-in-the-middle-v1.14.1...import-in-the-middle-v1.14.2) (2025-06-13)


### Bug Fixes

* do not replace dollar sign in shim variable name ([#200](https://github.com/nodejs/import-in-the-middle/issues/200)) ([20bf0e5](https://github.com/nodejs/import-in-the-middle/commit/20bf0e5c5f6f44f42a8618ad45d08622a63d4d45))

## [1.14.1](https://github.com/nodejs/import-in-the-middle/compare/import-in-the-middle-v1.14.0...import-in-the-middle-v1.14.1) (2025-06-12)


### Bug Fixes

* Account for invalid identifiers ([#198](https://github.com/nodejs/import-in-the-middle/issues/198)) ([2cc8207](https://github.com/nodejs/import-in-the-middle/commit/2cc82070a5ca947463b70f28647b03496a9526f0))

## [1.14.0](https://github.com/nodejs/import-in-the-middle/compare/import-in-the-middle-v1.13.2...import-in-the-middle-v1.14.0) (2025-05-24)


### Features

* Optionally hook internal paths like `require-in-the-middle` ([#194](https://github.com/nodejs/import-in-the-middle/issues/194)) ([976d032](https://github.com/nodejs/import-in-the-middle/commit/976d0320426dcbf8e6260504eccbb62d83513f5a))

## [1.13.2](https://github.com/nodejs/import-in-the-middle/compare/import-in-the-middle-v1.13.1...import-in-the-middle-v1.13.2) (2025-05-12)


### Bug Fixes

* Don't attempt to wrap TypeScript modules ([#191](https://github.com/nodejs/import-in-the-middle/issues/191)) ([6deb87e](https://github.com/nodejs/import-in-the-middle/commit/6deb87ea069ec2ee749ce2297ea47ce071d18cf9))

## [1.13.1](https://github.com/nodejs/import-in-the-middle/compare/import-in-the-middle-v1.13.0...import-in-the-middle-v1.13.1) (2025-02-28)


### Bug Fixes

* handling of circular dependencies ([#181](https://github.com/nodejs/import-in-the-middle/issues/181)) ([b58092e](https://github.com/nodejs/import-in-the-middle/commit/b58092ec9becf4a14f541da4cf5bfb190f2a9a9b))
* importing JSON files ([#182](https://github.com/nodejs/import-in-the-middle/issues/182)) ([8c52014](https://github.com/nodejs/import-in-the-middle/commit/8c52014658fcf698cc340d032b441d9e7a65be36))
* warning from use of context.importAssertions ([#179](https://github.com/nodejs/import-in-the-middle/issues/179)) ([8e56cf1](https://github.com/nodejs/import-in-the-middle/commit/8e56cf1e89752e6c8768d648c10c12fb3178e2ae))

## [1.13.0](https://github.com/nodejs/import-in-the-middle/compare/import-in-the-middle-v1.12.0...import-in-the-middle-v1.13.0) (2025-02-06)


### Features

* Support import attributes  ([#176](https://github.com/nodejs/import-in-the-middle/issues/176)) ([916af26](https://github.com/nodejs/import-in-the-middle/commit/916af2627e0e8cb6d50a3b54c1a280dc16e20925))

## [1.12.0](https://github.com/nodejs/import-in-the-middle/compare/import-in-the-middle-v1.11.3...import-in-the-middle-v1.12.0) (2024-12-13)


### Features

* Support absolute paths for `include` ([#168](https://github.com/nodejs/import-in-the-middle/issues/168)) ([d0d9bc3](https://github.com/nodejs/import-in-the-middle/commit/d0d9bc3d1e0bcef1094af58c15cf997507777067))
* Warn on multiple hook initialization ([#165](https://github.com/nodejs/import-in-the-middle/issues/165)) ([9bd539e](https://github.com/nodejs/import-in-the-middle/commit/9bd539ea6ff1684c8807bc30c8b68882cc9e057f))

## [1.11.3](https://github.com/nodejs/import-in-the-middle/compare/import-in-the-middle-v1.11.2...import-in-the-middle-v1.11.3) (2024-12-04)


### Bug Fixes

* Correct type definition for waitForAllMessagesAcknowledged ([#160](https://github.com/nodejs/import-in-the-middle/issues/160)) ([353d535](https://github.com/nodejs/import-in-the-middle/commit/353d535d1ce7ba485e137bcf3db08bbddd6b31d6))

## [1.11.2](https://github.com/nodejs/import-in-the-middle/compare/import-in-the-middle-v1.11.1...import-in-the-middle-v1.11.2) (2024-09-30)


### Bug Fixes

* do nothing if target does not exist in getters map ([#155](https://github.com/nodejs/import-in-the-middle/issues/155)) ([5f6be49](https://github.com/nodejs/import-in-the-middle/commit/5f6be494fc11caf8dcf900807c5b6b646fcd8d74))

## [1.11.1](https://github.com/nodejs/import-in-the-middle/compare/import-in-the-middle-v1.11.0...import-in-the-middle-v1.11.1) (2024-09-26)


### Bug Fixes

* Support Hooking multiple times ([#153](https://github.com/nodejs/import-in-the-middle/issues/153)) ([e0d8080](https://github.com/nodejs/import-in-the-middle/commit/e0d808041eff228f4b4519454f7eea8f0930238a))

## [1.11.0](https://github.com/nodejs/import-in-the-middle/compare/import-in-the-middle-v1.10.0...import-in-the-middle-v1.11.0) (2024-07-29)


### Features

* Optionally only wrap modules hooked in `--import` ([#146](https://github.com/nodejs/import-in-the-middle/issues/146)) ([71c8d7b](https://github.com/nodejs/import-in-the-middle/commit/71c8d7bac512df94566d12c96fc2e438b4de2e2a))


### Bug Fixes

* `node:` prefixed build-in modules with `include`/`exclude` ([#149](https://github.com/nodejs/import-in-the-middle/issues/149)) ([736a944](https://github.com/nodejs/import-in-the-middle/commit/736a9446e209bc8649801a27cb431df663551dc5))

## [1.10.0](https://github.com/nodejs/import-in-the-middle/compare/import-in-the-middle-v1.9.1...import-in-the-middle-v1.10.0) (2024-07-22)


### Features

* Allow regex for `include` and `exclude` options ([#148](https://github.com/nodejs/import-in-the-middle/issues/148)) ([697b0d2](https://github.com/nodejs/import-in-the-middle/commit/697b0d239b9a738f4952bb0f77c521c4a398ac79))


### Bug Fixes

* Use correct `format` when resolving exports from relative paths ([#145](https://github.com/nodejs/import-in-the-middle/issues/145)) ([632802f](https://github.com/nodejs/import-in-the-middle/commit/632802f4e7c797215b4e052ffdfa0fbda1780166))

## [1.9.1](https://github.com/nodejs/import-in-the-middle/compare/import-in-the-middle-v1.9.0...import-in-the-middle-v1.9.1) (2024-07-15)


### Bug Fixes

* Don't wrap native modules ([#142](https://github.com/nodejs/import-in-the-middle/issues/142)) ([f3278a3](https://github.com/nodejs/import-in-the-middle/commit/f3278a3c76af78fe369b599d5b2bf1d87edf0a7a))
* Use correct `format` when resolving exports from sub-modules ([#140](https://github.com/nodejs/import-in-the-middle/issues/140)) ([1db08ef](https://github.com/nodejs/import-in-the-middle/commit/1db08ef5f51346c20b4b3c313bf993e9cf1ca7d5))

## [1.9.0](https://github.com/nodejs/import-in-the-middle/compare/import-in-the-middle-v1.8.1...import-in-the-middle-v1.9.0) (2024-07-08)


### Features

* Allow passing of `include` or `exclude` list via `module.register()` ([#124](https://github.com/nodejs/import-in-the-middle/issues/124)) ([381f48c](https://github.com/nodejs/import-in-the-middle/commit/381f48c07ff755e88495f688c75c4912926194c7))


### Bug Fixes

* CJS `require('.')` resolution ([#108](https://github.com/nodejs/import-in-the-middle/issues/108)) ([29c77b5](https://github.com/nodejs/import-in-the-middle/commit/29c77b560aec0429154632c950923d12db36f79e))
* Include source url for parsing failures ([#109](https://github.com/nodejs/import-in-the-middle/issues/109)) ([49d69ba](https://github.com/nodejs/import-in-the-middle/commit/49d69ba9e785d4b6a1b38d7da1293cb744b6d7e3))
* Use `process.emitWarning` to log wrapping errors ([#114](https://github.com/nodejs/import-in-the-middle/issues/114)) ([a3778ac](https://github.com/nodejs/import-in-the-middle/commit/a3778acfbe2220ce5d521232b41da23b4383e1e3))
