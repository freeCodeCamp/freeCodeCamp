# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](https://semver.org/).
This change log adheres to standards from [Keep a CHANGELOG](https://keepachangelog.com).

## [Unreleased]

## [2.32.0] - 2025-06-20

### Added
- add [`enforce-node-protocol-usage`] rule and `import/node-version` setting ([#3024], thanks [@GoldStrikeArch] and [@sevenc-nanashi])
- add TypeScript types ([#3097], thanks [@G-Rath])
- [`extensions`]: add `pathGroupOverrides to allow enforcement decision overrides based on specifier ([#3105], thanks [@Xunnamius])
- [`order`]: add `sortTypesGroup` option to allow intragroup sorting of type-only imports ([#3104], thanks [@Xunnamius])
- [`order`]: add `newlines-between-types` option to control intragroup sorting of type-only imports ([#3127], thanks [@Xunnamius])
- [`order`]: add `consolidateIslands` option to collapse excess spacing for aesthetically pleasing imports ([#3129], thanks [@Xunnamius])

### Fixed
- [`no-unused-modules`]: provide more meaningful error message when no .eslintrc is present ([#3116], thanks [@michaelfaith])
- configs: added missing name attribute for eslint config inspector ([#3151], thanks [@NishargShah])
- [`order`]: ensure arcane imports do not cause undefined behavior ([#3128], thanks [@Xunnamius])
- [`order`]: resolve undefined property access issue when using `named` ordering ([#3166], thanks [@Xunnamius])
- [`enforce-node-protocol-usage`]: avoid a crash with some TS code ([#3173], thanks [@ljharb])
- [`order`]: codify invariants from docs into config schema ([#3152], thanks [@Xunnamius])

### Changed
- [Docs] [`extensions`], [`order`]: improve documentation ([#3106], thanks [@Xunnamius])
- [Docs] add flat config guide for using `tseslint.config()` ([#3125], thanks [@lnuvy])
- [Docs] add missing comma ([#3122], thanks [@RyanGst])
- [readme] Update flatConfig example to include typescript config ([#3138], thanks [@intellix])
- [Refactor] [`order`]: remove unnecessary negative check ([#3167], thanks [@JounQin])
- [Docs] [`no-unused-modules`]: add missing double quote ([#3191], thanks [@albertpastrana])
- [Docs] `no-restricted-paths`: clarify wording and fix errors ([#3172], thanks [@greim])

## [2.31.0] - 2024-10-03

### Added
- support eslint v9 ([#2996], thanks [@G-Rath] [@michaelfaith])
- [`order`]: allow validating named imports ([#3043], thanks [@manuth])
- [`extensions`]: add the `checkTypeImports` option ([#2817], thanks [@phryneas])

### Fixed
- `ExportMap` / flat config: include `languageOptions` in context ([#3052], thanks [@michaelfaith])
- [`no-named-as-default`]: Allow using an identifier if the export is both a named and a default export ([#3032], thanks [@akwodkiewicz])
- [`export`]: False positive for exported overloaded functions in TS ([#3065], thanks [@liuxingbaoyu])
- `exportMap`: export map cache is tainted by unreliable parse results ([#3062], thanks [@michaelfaith])
- `exportMap`: improve cacheKey when using flat config ([#3072], thanks [@michaelfaith])
- adjust "is source type module" checks for flat config ([#2996], thanks [@G-Rath])

### Changed
- [Docs] [`no-relative-packages`]: fix typo ([#3066], thanks [@joshuaobrien])
- [Performance] [`no-cycle`]: dont scc for each linted file ([#3068], thanks [@soryy708])
- [Docs] [`no-cycle`]: add `disableScc` to docs ([#3070], thanks [@soryy708])
- [Tests] use re-exported `RuleTester` ([#3071], thanks [@G-Rath])
- [Docs] [`no-restricted-paths`]: fix grammar ([#3073], thanks [@unbeauvoyage])
- [Tests] [`no-default-export`], [`no-named-export`]:  add test case (thanks [@G-Rath])

## [2.30.0] - 2024-09-02

### Added
- [`dynamic-import-chunkname`]: add `allowEmpty` option to allow empty leading comments ([#2942], thanks [@JiangWeixian])
- [`dynamic-import-chunkname`]: Allow empty chunk name when webpackMode: 'eager' is set; add suggestions to remove name in eager mode ([#3004], thanks [@amsardesai])
- [`no-unused-modules`]: Add `ignoreUnusedTypeExports` option ([#3011], thanks [@silverwind])
- add support for Flat Config ([#3018], thanks [@michaelfaith])

### Fixed
- [`no-extraneous-dependencies`]: allow wrong path ([#3012], thanks [@chabb])
- [`no-cycle`]: use scc algorithm to optimize ([#2998], thanks [@soryy708])
- [`no-duplicates`]: Removing duplicates breaks in TypeScript ([#3033], thanks [@yesl-kim])
- [`newline-after-import`]: fix considerComments option when require ([#2952], thanks [@developer-bandi])
- [`order`]: do not compare first path segment for relative paths ([#2682]) ([#2885], thanks [@mihkeleidast])

### Changed
- [Docs] [`no-extraneous-dependencies`]: Make glob pattern description more explicit ([#2944], thanks [@mulztob])
- [`no-unused-modules`]: add console message to help debug [#2866]
- [Refactor] `ExportMap`: make procedures static instead of monkeypatching exportmap ([#2982], thanks [@soryy708])
- [Refactor] `ExportMap`: separate ExportMap instance from its builder logic ([#2985], thanks [@soryy708])
- [Docs] [`order`]: Add a quick note on how unbound imports and --fix ([#2640], thanks [@minervabot])
- [Tests] appveyor -> GHA (run tests on Windows in both pwsh and WSL + Ubuntu) ([#2987], thanks [@joeyguerra])
- [actions] migrate OSX tests to GHA ([ljharb#37], thanks [@aks-])
- [Refactor] `exportMapBuilder`: avoid hoisting ([#2989], thanks [@soryy708])
- [Refactor] `ExportMap`: extract "builder" logic to separate files ([#2991], thanks [@soryy708])
- [Docs] [`order`]: update the description of the `pathGroupsExcludedImportTypes` option ([#3036], thanks [@liby])
- [readme] Clarify how to install the plugin ([#2993], thanks [@jwbth])

## [2.29.1] - 2023-12-14

### Fixed
- [`no-extraneous-dependencies`]: ignore `export type { ... } from '...'` when `includeTypes` is `false` ([#2919], thanks [@Pandemic1617])
- [`no-unused-modules`]: support export patterns with array destructuring ([#2930], thanks [@ljharb])
- [Deps] update `tsconfig-paths` ([#2447], thanks [@domdomegg])

## [2.29.0] - 2023-10-22

### Added
- TypeScript config: add .cts and .mts extensions ([#2851], thanks [@Zamiell])
- [`newline-after-import`]: new option `exactCount` and docs update ([#1933], thanks [@anikethsaha] and [@reosarevok])
- [`newline-after-import`]: fix `exactCount` with `considerComments` false positive, when there is a leading comment ([#2884], thanks [@kinland])

## [2.28.1] - 2023-08-18

### Fixed
- [`order`]: revert breaking change to single nested group ([#2854], thanks [@yndajas])

### Changed
- [Docs] remove duplicate fixable notices in docs ([#2850], thanks [@bmish])

## [2.28.0] - 2023-07-27

### Fixed
- [`no-duplicates`]: remove duplicate identifiers in duplicate imports ([#2577], thanks [@joe-matsec])
- [`consistent-type-specifier-style`]: fix accidental removal of comma in certain cases ([#2754], thanks [@bradzacher])
- [Perf] `ExportMap`: Improve `ExportMap.for` performance on larger codebases ([#2756], thanks [@leipert])
- [`no-extraneous-dependencies`]/TypeScript: do not error when importing inline type from dev dependencies ([#2735], thanks [@andyogo])
- [`newline-after-import`]/TypeScript: do not error when re-exporting a namespaced import ([#2832], thanks [@laurens-dg])
- [`order`]: partial fix for [#2687] (thanks [@ljharb])
- [`no-duplicates`]: Detect across type and regular imports ([#2835], thanks [@benkrejci])
- [`extensions`]: handle `.` and `..` properly ([#2778], thanks [@benasher44])
- [`no-unused-modules`]: improve schema (thanks [@ljharb])
- [`no-unused-modules`]: report error on binding instead of parent export ([#2842], thanks [@Chamion])

### Changed
- [Docs] [`no-duplicates`]: fix example schema ([#2684], thanks [@simmo])
- [Docs] [`group-exports`]: fix syntax highlighting ([#2699], thanks [@devinrhode2])
- [Docs] [`extensions`]: reference node ESM behavior ([#2748], thanks [@xM8WVqaG])
- [Refactor] [`exports-last`]: use `array.prototype.findlastindex` (thanks [@ljharb])
- [Refactor] [`no-anonymous-default-export`]: use `object.fromentries` (thanks [@ljharb])
- [Refactor] [`no-unused-modules`]: use `array.prototype.flatmap` (thanks [@ljharb])

## [2.27.5] - 2023-01-16

### Fixed
- [`order]`: Fix group ranks order when alphabetizing ([#2674], thanks [@Pearce-Ropion])

## [2.27.4] - 2023-01-11

### Fixed
- `semver` should be a prod dep ([#2668])

## [2.27.3] - 2023-01-11

### Fixed
- [`no-empty-named-blocks`]: rewrite rule to only check import declarations ([#2666])

## [2.27.2] - 2023-01-11

### Fixed
- [`no-duplicates`]: do not unconditionally require `typescript` ([#2665])

## [2.27.1] - 2023-01-11

### Fixed
- `array.prototype.flatmap` should be a prod dep ([#2664], thanks [@cristobal])

## [2.27.0] - 2023-01-11

### Added
- [`newline-after-import`]: add `considerComments` option ([#2399], thanks [@pri1311])
- [`no-cycle`]: add `allowUnsafeDynamicCyclicDependency` option ([#2387], thanks [@GerkinDev])
- [`no-restricted-paths`]: support arrays for `from` and `target` options ([#2466], thanks [@AdriAt360])
- [`no-anonymous-default-export`]: add `allowNew` option ([#2505], thanks [@DamienCassou])
- [`order`]: Add `distinctGroup` option ([#2395], thanks [@hyperupcall])
- [`no-extraneous-dependencies`]: Add `includeInternal` option ([#2541], thanks [@bdwain])
- [`no-extraneous-dependencies`]: Add `includeTypes` option ([#2543], thanks [@bdwain])
- [`order`]: new `alphabetize.orderImportKind` option to sort imports with same path based on their kind (`type`, `typeof`) ([#2544], thanks [@stropho])
- [`consistent-type-specifier-style`]: add rule ([#2473], thanks [@bradzacher])
- Add [`no-empty-named-blocks`] rule ([#2568], thanks [@guilhermelimak])
- [`prefer-default-export`]: add "target" option ([#2602], thanks [@azyzz228])
- [`no-absolute-path`]: add fixer ([#2613], thanks [@adipascu])
- [`no-duplicates`]: support inline type import with `inlineTypeImport` option ([#2475], thanks [@snewcomer])

### Fixed
- [`order`]: move nested imports closer to main import entry ([#2396], thanks [@pri1311])
- [`no-restricted-paths`]: fix an error message ([#2466], thanks [@AdriAt360])
- [`no-restricted-paths`]: use `Minimatch.match` instead of `minimatch` to comply with Windows Native paths ([#2466], thanks [@AdriAt360])
- [`order`]: require with member expression could not be fixed if alphabetize.order was used ([#2490], thanks [@msvab])
- [`order`]: leave more space in rankings for consecutive path groups ([#2506], thanks [@Pearce-Ropion])
- [`no-cycle`]: add ExportNamedDeclaration statements to dependencies ([#2511], thanks [@BenoitZugmeyer])
- [`dynamic-import-chunkname`]: prevent false report on a valid webpack magic comment ([#2330], thanks [@mhmadhamster])
- [`export`]: do not error on TS export overloads ([#1590], thanks [@ljharb])
- [`no-unresolved`], [`extensions`]: ignore type only exports ([#2436], thanks [@Lukas-Kullmann])
- `ExportMap`: add missing param to function ([#2589], thanks [@Fdawgs])
- [`no-unused-modules`]: `checkPkgFieldObject` filters boolean fields from checks ([#2598], thanks [@mpint])
- [`no-cycle`]: accept Flow `typeof` imports, just like `type` ([#2608], thanks [@gnprice])
- [`no-import-module-exports`]: avoid a false positive for import variables ([#2315], thanks [@BarryThePenguin])

### Changed
- [Tests] [`named`]: Run all TypeScript test ([#2427], thanks [@ProdigySim])
- [readme] note use of typescript in readme `import/extensions` section ([#2440], thanks [@OutdatedVersion])
- [Docs] [`order`]: use correct default value ([#2392], thanks [@hyperupcall])
- [meta] replace git.io link in comments with the original URL ([#2444], thanks [@liby])
- [Docs] remove global install in readme ([#2412], thanks [@aladdin-add])
- [readme] clarify `eslint-import-resolver-typescript` usage ([#2503], thanks [@JounQin])
- [Refactor] [`no-cycle`]: Add per-run caching of traversed paths ([#2419], thanks [@nokel81])
- [Performance] `ExportMap`: add caching after parsing for an ambiguous module ([#2531], thanks [@stenin-nikita])
- [Docs] [`no-useless-path-segments`]: fix paths ([#2424], thanks [@s-h-a-d-o-w])
- [Tests] [`no-cycle`]: add passing test cases ([#2438], thanks [@georeith])
- [Refactor] [`no-extraneous-dependencies`] improve performance using cache ([#2374], thanks [@meowtec])
- [meta] `CONTRIBUTING.md`: mention inactive PRs ([#2546], thanks [@stropho])
- [readme] make json for setting groups multiline ([#2570], thanks [@bertyhell])
- [Tests] [`no-restricted-paths`]: Tests for `import type` statements ([#2459], thanks [@golergka])
- [Tests] [`no-restricted-paths`]: fix one failing `import type` test case, submitted by [@golergka], thanks [@azyzz228]
- [Docs] automate docs with eslint-doc-generator ([#2582], thanks [@bmish])
- [readme] Increase clarity around typescript configuration ([#2588], thanks [@Nfinished])
- [Docs] update `eslint-doc-generator` to v1.0.0 ([#2605], thanks [@bmish])
- [Perf] [`no-cycle`], [`no-internal-modules`], [`no-restricted-paths`]: use `anyOf` instead of `oneOf` (thanks [@ljharb], [@remcohaszing])

## [2.26.0] - 2022-04-05

### Added
- [`no-named-default`], [`no-default-export`], [`prefer-default-export`], [`no-named-export`], [`export`], [`named`], [`namespace`], [`no-unused-modules`]: support arbitrary module namespace names ([#2358], thanks [@sosukesuzuki])
- [`no-dynamic-require`]: support dynamic import with espree ([#2371], thanks [@sosukesuzuki])
- [`no-relative-packages`]: add fixer ([#2381], thanks [@forivall])

### Fixed
- [`default`]: `typescript-eslint-parser`: avoid a crash on exporting as namespace (thanks [@ljharb])
- [`export`]/TypeScript: false positive for typescript namespace merging ([#1964], thanks [@magarcia])
- [`no-duplicates`]: ignore duplicate modules in different TypeScript module declarations ([#2378], thanks [@remcohaszing])
- [`no-unused-modules`]: avoid a crash when processing re-exports ([#2388], thanks [@ljharb])

### Changed
- [Tests] [`no-nodejs-modules`]: add tests for node protocol URL ([#2367], thanks [@sosukesuzuki])
- [Tests] [`default`], [`no-anonymous-default-export`], [`no-mutable-exports`], [`no-named-as-default-member`], [`no-named-as-default`]: add tests for arbitrary module namespace names ([#2358], thanks [@sosukesuzuki])
- [Docs] [`no-unresolved`]: Fix RegExp escaping in readme ([#2332], thanks [@stephtr])
- [Refactor] [`namespace`]: try to improve performance ([#2340], thanks [@ljharb])
- [Docs] make rule doc titles consistent ([#2393], thanks [@TheJaredWilcurt])
- [Docs] [`order`]: TS code examples should use TS code blocks ([#2411], thanks [@MM25Zamanian])
- [Docs] [`no-unresolved`]: fix link ([#2417], thanks [@kylemh])

## [2.25.4] - 2022-01-02

### Fixed
- `importType`: avoid crashing on a non-string' ([#2305], thanks [@ljharb])
- [`first`]: prevent crash when parsing angular templates ([#2210], thanks [@ljharb])
- `importType`: properly resolve `@/*`-aliased imports as internal ([#2334], thanks [@ombene])
- [`named`]/`ExportMap`: handle named imports from CJS modules that use dynamic import ([#2341], thanks [@ludofischer])

### Changed
- [`no-default-import`]: report on the token "default" instead of the entire node ([#2299], thanks [@pmcelhaney])
- [Docs] [`order`]: Remove duplicate mention of default ([#2280], thanks [@johnthagen])
- [Deps] update `eslint-module-utils`

## [2.25.3] - 2021-11-09

### Fixed
- [`extensions`]: ignore unresolveable type-only imports ([#2270], [#2271], thanks [@jablko])
- `importType`: fix `isExternalModule` calculation ([#2282], thanks [@mx-bernhard])
- [`no-import-module-exports`]: avoid false positives with a shadowed `module` or `exports` ([#2297], thanks [@ljharb])

### Changed
- [Docs] [`order`]: add type to the default groups ([#2272], thanks [@charpeni])
- [readme] Add note to TypeScript docs to install appropriate resolver ([#2279], thanks [@johnthagen])
- [Refactor] `importType`: combine redundant `isScoped` and `isScopedModule` (thanks [@ljharb])
- [Docs] HTTP => HTTPS ([#2287], thanks [@Schweinepriester])

## [2.25.2] - 2021-10-12

### Fixed
- [Deps] update `eslint-module-utils` for real this time ([#2255], thanks [@ljharb])

## [2.25.1] - 2021-10-11

### Fixed
- [Deps] update `eslint-module-utils`

## [2.25.0] - 2021-10-11

### Added
- Support `eslint` v8 ([#2191], thanks [@ota-meshi])
- [`no-unresolved`]: add `caseSensitiveStrict` option ([#1262], thanks [@sergei-startsev])
- [`no-unused-modules`]: add eslint v8 support ([#2194], thanks [@coderaiser])
- [`no-restricted-paths`]: add/restore glob pattern support ([#2219], thanks [@stropho])
- [`no-unused-modules`]: support dynamic imports ([#1660], [#2212], thanks [@maxkomarychev], [@aladdin-add], [@Hypnosphi])

### Fixed
- [`no-unresolved`]: ignore type-only imports ([#2220], thanks [@jablko])
- [`order`]: fix sorting imports inside TypeScript module declarations ([#2226], thanks [@remcohaszing])
- [`default`], `ExportMap`: Resolve extended TypeScript configuration files ([#2240], thanks [@mrmckeb])

### Changed
- [Refactor] switch to an internal replacement for `pkg-up` and `read-pkg-up` ([#2047], thanks [@mgwalker])
- [patch] TypeScript config: remove `.d.ts` from [`import/parsers` setting] and [`import/extensions` setting] ([#2220], thanks [@jablko])
- [Refactor] [`no-unresolved`], [`no-extraneous-dependencies`]: moduleVisitor usage ([#2233], thanks [@jablko])

## [2.24.2] - 2021-08-24

### Fixed
- [`named`], [`namespace`]: properly handle ExportAllDeclarations ([#2199], thanks [@ljharb])

## [2.24.1] - 2021-08-19

### Fixed
- `ExportMap`: Add default export when esModuleInterop is true and anything is exported ([#2184], thanks [@Maxim-Mazurok])
- [`named`], [`namespace`]: properly set reexports on `export * as … from` ([#1998], [#2161], thanks [@ljharb])
- [`no-duplicates`]: correctly handle case of mixed default/named type imports ([#2149], thanks [@GoodForOneFare], [@nwalters512])
- [`no-duplicates`]: avoid crash with empty `import type {}` ([#2201], thanks [@ljharb])

### Changed
- [Docs] `max-dependencies`: 📖 Document `ignoreTypeImports` option ([#2196], thanks [@himynameisdave])

## [2.24.0] - 2021-08-08

### Added
- [`no-dynamic-require`]: add option `esmodule` ([#1223], thanks [@vikr01])
- [`named`]: add `commonjs` option ([#1222], thanks [@vikr01])
- [`no-namespace`]: Add `ignore` option ([#2112], thanks [@aberezkin])
- [`max-dependencies`]: add option `ignoreTypeImports` ([#1847], thanks [@rfermann])

### Fixed
- [`no-duplicates`]: ensure autofix avoids excessive newlines ([#2028], thanks [@ertrzyiks])
- [`extensions`]: avoid crashing on partially typed import/export statements ([#2118], thanks [@ljharb])
- [`no-extraneous-dependencies`]: add ESM intermediate package.json support ([#2121], thanks [@paztis])
- Use `context.getPhysicalFilename()` when available (ESLint 7.28+) ([#2160], thanks [@pmcelhaney])
- [`extensions`]/`importType`: fix isScoped treating @/abc as scoped module ([#2146], thanks [@rperello])

### Changed
- [Docs] [`extensions`]: improved cases for using `@/...` ([#2140], thanks [@wenfangdu])
- [Docs] [`extensions`]: removed incorrect cases ([#2138], thanks [@wenfangdu])
- [Tests] [`order`]: add tests for `pathGroupsExcludedImportTypes: ['type']` ([#2158], thanks [@atav32])
- [Docs] [`order`]:  improve the documentation for the `pathGroupsExcludedImportTypes` option ([#2156], thanks [@liby])
- [Tests] [`no-cycle`]: Restructure test files ([#1517], thanks [@soryy708])
- [Docs] add description how to use plugin with yarn berry ([#2179], thanks [@KostyaZgara])

## [2.23.4] - 2021-05-29

### Fixed
- [`no-import-module-exports`]: Don't crash if packages have no entrypoint ([#2099], thanks [@eps1lon])
- [`no-extraneous-dependencies`]: fix package name algorithm ([#2097], thanks [@paztis])

## [2.23.3] - 2021-05-21

### Fixed
- [`no-restricted-paths`]: fix false positive matches ([#2090], thanks [@malykhinvi])
- [`no-cycle`]: ignore imports where imported file only imports types of importing file ([#2083], thanks [@cherryblossom000])
- [`no-cycle`]: fix false negative when file imports a type after importing a value in Flow ([#2083], thanks [@cherryblossom000])
- [`order`]: restore default behavior unless `type` is in groups ([#2087], thanks [@grit96])

### Changed
- [Docs] Add [`no-relative-packages`] to list of to the list of rules ([#2075], thanks [@arvigeus])

## [2.23.2] - 2021-05-15

### Changed
- [meta] add `safe-publish-latest`; use `prepublishOnly` script for npm 7+

## [2.23.1] - 2021-05-14

### Fixed
- [`newline-after-import`]: fix crash with `export {}` syntax ([#2063], [#2056], thanks [@ljharb])
- `ExportMap`: do not crash when tsconfig lacks `.compilerOptions` ([#2067], thanks [@ljharb])
- [`order`]: fix alphabetical sorting ([#2071], thanks [@grit96])

## [2.23.0] - 2021-05-13

### Added
- [`no-commonjs`]: Also detect require calls with expressionless template literals: ``` require(`x`) ``` ([#1958], thanks [@FloEdelmann])
- [`no-internal-modules`]: Add `forbid` option ([#1846], thanks [@guillaumewuip])
- add [`no-relative-packages`] ([#1860], [#966], thanks [@tapayne88] [@panrafal])
- add [`no-import-module-exports`] rule: report import declarations with CommonJS exports ([#804], thanks [@kentcdodds] and [@ttmarek])
- [`no-unused-modules`]: Support destructuring assignment for `export`. ([#1997], thanks [@s-h-a-d-o-w])
- [`order`]: support type imports ([#2021], thanks [@grit96])
- [`order`]: Add `warnOnUnassignedImports` option to enable warnings for out of order unassigned imports ([#1990], thanks [@hayes])

### Fixed
- [`export`]/TypeScript: properly detect export specifiers as children of a TS module block ([#1889], thanks [@andreubotella])
- [`order`]: ignore non-module-level requires ([#1940], thanks [@golopot])
- [`no-webpack-loader-syntax`]/TypeScript: avoid crash on missing name ([#1947], thanks [@leonardodino])
- [`no-extraneous-dependencies`]: Add package.json cache ([#1948], thanks [@fa93hws])
- [`prefer-default-export`]: handle empty array destructuring ([#1965], thanks [@ljharb])
- [`no-unused-modules`]: make type imports mark a module as used (fixes [#1924]) ([#1974], thanks [@cherryblossom000])
- [`no-cycle`]: fix perf regression ([#1944], thanks [@Blasz])
- [`first`]: fix handling of `import = require` ([#1963], thanks [@MatthiasKunnen])
- [`no-cycle`]/[`extensions`]: fix isExternalModule usage ([#1696], thanks [@paztis])
- [`extensions`]/[`no-cycle`]/[`no-extraneous-dependencies`]: Correct module real path resolution ([#1696], thanks [@paztis])
- [`no-named-default`]: ignore Flow import type and typeof ([#1983], thanks [@christianvuerings])
- [`no-extraneous-dependencies`]: Exclude flow `typeof` imports ([#1534], thanks [@devongovett])
- [`newline-after-import`]: respect decorator annotations ([#1985], thanks [@lilling])
- [`no-restricted-paths`]: enhance performance for zones with `except` paths ([#2022], thanks [@malykhinvi])
- [`no-unresolved`]: check import() ([#2026], thanks [@aladdin-add])

### Changed
- [Generic Import Callback] Make callback for all imports once in rules ([#1237], thanks [@ljqx])
- [Docs] [`no-named-as-default`]: add semicolon ([#1897], thanks [@bicstone])
- [Docs] [`no-extraneous-dependencies`]: correct peerDependencies option default to `true` ([#1993], thanks [@dwardu])
- [Docs] [`order`]: Document options required to match ordering example ([#1992], thanks [@silviogutierrez])
- [Tests] [`no-unresolved`]: add tests for `import()` ([#2012], thanks [@davidbonnet])
- [Docs] Add import/recommended ruleset to README ([#2034], thanks [@edemaine])

## [2.22.1] - 2020-09-27

### Fixed
- [`default`]/TypeScript: avoid crash on `export =` with a MemberExpression ([#1841], thanks [@ljharb])
- [`extensions`]/importType: Fix @/abc being treated as scoped module ([#1854], thanks [@3nuc])
- allow using rest operator in named export ([#1878], thanks [@foray1010])
- [`dynamic-import-chunkname`]: allow single quotes to match Webpack support ([#1848], thanks [@straub])

### Changed
- [`export`]: add tests for a name collision with `export * from` ([#1704], thanks [@tomprats])

## [2.22.0] - 2020-06-26

### Added
- [`no-unused-modules`]: consider exported TypeScript interfaces, types and enums ([#1819], thanks [@nicolashenry])
- [`no-cycle`]: allow `maxDepth` option to be `"∞"` (thanks [@ljharb])

### Fixed
- [`order`]/TypeScript: properly support `import = object` expressions ([#1823], thanks [@manuth])
- [`no-extraneous-dependencies`]/TypeScript: do not error when importing type from dev dependencies ([#1820], thanks [@fernandopasik])
- [`default`]: avoid crash with `export =` ([#1822], thanks [@AndrewLeedham])
- [`order`]/[`newline-after-import`]: ignore TypeScript's "export import object" ([#1830], thanks [@be5invis])
- [`dynamic-import-chunkname`]/TypeScript: supports `@typescript-eslint/parser` ([#1833], thanks [@noelebrun])
- [`order`]/TypeScript: ignore ordering of object imports ([#1831], thanks [@manuth])
- [`namespace`]: do not report on shadowed import names ([#518], thanks [@ljharb])
- [`export`]: avoid warning on `export * as` non-conflicts ([#1834], thanks [@ljharb])

### Changed
- [`no-extraneous-dependencies`]: add tests for importing types ([#1824], thanks [@taye])
- [docs] [`no-default-export`]: Fix docs url ([#1836], thanks [@beatrizrezener])
- [docs] [`imports-first`]: deprecation info and link to `first` docs ([#1835], thanks [@beatrizrezener])

## [2.21.2] - 2020-06-09

### Fixed
- [`order`]: avoid a crash on TypeScript’s `export import` syntax ([#1808], thanks [@ljharb])
- [`newline-after-import`]: consider TypeScript `import =` syntax' ([#1811], thanks [@ljharb])
- [`no-internal-modules`]: avoid a crash on a named export declaration ([#1814], thanks [@ljharb])

## [2.21.1] - 2020-06-07

### Fixed
- TypeScript: [`import/named`]: avoid requiring `typescript` when not using TS ([#1805], thanks [@ljharb])

## [2.21.0] - 2020-06-07

### Added
- [`import/default`]: support default export in TSExportAssignment ([#1528], thanks [@joaovieira])
- [`no-cycle`]: add `ignoreExternal` option ([#1681], thanks [@sveyret])
- [`order`]: Add support for TypeScript's "import equals"-expressions ([#1785], thanks [@manuth])
- [`import/default`]: support default export in TSExportAssignment ([#1689], thanks [@Maxim-Mazurok])
- [`no-restricted-paths`]: add custom message support ([#1802], thanks [@malykhinvi])

### Fixed
- [`group-exports`]: Flow type export awareness ([#1702], thanks [@ernestostifano])
- [`order`]: Recognize pathGroup config for first group ([#1719], [#1724], thanks [@forivall], [@xpl])
- [`no-unused-modules`]: Fix re-export not counting as usage when used in combination with import ([#1722], thanks [@Ephem])
- [`no-duplicates`]: Handle TS import type ([#1676], thanks [@kmui2])
- [`newline-after-import`]: recognize decorators ([#1139], thanks [@atos1990])
- [`no-unused-modules`]: Revert "[flow] [`no-unused-modules`]: add flow type support" ([#1770], thanks [@Hypnosphi])
- TypeScript: Add nested namespace handling ([#1763], thanks [@julien1619])
- [`namespace`]/`ExportMap`: Fix interface declarations for TypeScript ([#1764], thanks [@julien1619])
- [`no-unused-modules`]: avoid order-dependence ([#1744], thanks [@darkartur])
- [`no-internal-modules`]: also check `export from` syntax ([#1691], thanks [@adjerbetian])
- TypeScript: [`export`]: avoid a crash with `export =` ([#1801], thanks [@ljharb])

### Changed
- [Refactor] [`no-extraneous-dependencies`]: use moduleVisitor ([#1735], thanks [@adamborowski])
- TypeScript config: Disable [`named`][] ([#1726], thanks [@astorije])
- [readme] Remove duplicate [`no-unused-modules`] from docs ([#1690], thanks [@arvigeus])
- [Docs] [`order`]: fix bad inline config ([#1788], thanks [@nickofthyme])
- [Tests] Add fix for Windows Subsystem for Linux ([#1786], thanks [@manuth])
- [Docs] [`no-unused-rules`]: Fix docs for unused exports ([#1776], thanks [@barbogast])
- [eslint] bump minimum v7 version to v7.2.0

## [2.20.2] - 2020-03-28

### Fixed
- [`order`]: fix `isExternalModule` detect on windows ([#1651], thanks [@fisker])
- [`order`]: recognize ".." as a "parent" path ([#1658], thanks [@golopot])
- [`no-duplicates`]: fix fixer on cases with default import ([#1666], thanks [@golopot])
- [`no-unused-modules`]: Handle `export { default } from` syntax ([#1631], thanks [@richardxia])
- [`first`]: Add a way to disable `absolute-first` explicitly ([#1664], thanks [@TheCrueltySage])
- [Docs] [`no-webpack-loader-syntax`]: Updates webpack URLs ([#1751], thanks [@MikeyBeLike])

## [2.20.1] - 2020-02-01

### Fixed
- [`export`]: Handle function overloading in `*.d.ts` ([#1619], thanks [@IvanGoncharov])
- [`no-absolute-path`]: fix a crash with invalid import syntax ([#1616], thanks [@ljharb])
- [`import/external-module-folders` setting] now correctly works with directories containing modules symlinked from `node_modules` ([#1605], thanks [@skozin])
- [`extensions`]: for invalid code where `name` does not exist, do not crash ([#1613], thanks [@ljharb])
- [`extensions`]: Fix scope regex ([#1611], thanks [@yordis])
- [`no-duplicates`]: allow duplicate imports if one is a namespace and the other not ([#1612], thanks [@sveyret])
- Add some missing rule meta schemas and types ([#1620], thanks [@bmish])
- [`named`]: for importing from a module which re-exports named exports from a `node_modules` module ([#1569], [#1447], thanks [@redbugz], [@kentcdodds])
- [`order`]: Fix alphabetize for mixed requires and imports ([#1626], thanks [@wschurman])

### Changed
- [`import/external-module-folders` setting] behavior is more strict now: it will only match complete path segments ([#1605], thanks [@skozin])
- [meta] fix "files" field to include/exclude the proper files ([#1635], thanks [@ljharb])
- [Tests] [`order`]: Add TS import type tests ([#1736], thanks [@kmui2])

## [2.20.0] - 2020-01-10

### Added
- [`order`]: added `caseInsensitive` as an additional option to `alphabetize` ([#1586], thanks [@dbrewer5])
- [`no-restricted-paths`]: New `except` option per `zone`, allowing exceptions to be defined for a restricted zone ([#1238], thanks [@rsolomon])
- [`order`]: add option pathGroupsExcludedImportTypes to allow ordering of external import types ([#1565], thanks [@Mairu])

### Fixed
- [`no-unused-modules`]: fix usage of [`import/extensions` setting] ([#1560], thanks [@stekycz])
- [`extensions`]: ignore non-main modules ([#1563], thanks [@saschanaz])
- TypeScript config: lookup for external modules in @types folder ([#1526], thanks [@joaovieira])
- [`no-extraneous-dependencies`]: ensure `node.source` is truthy ([#1589], thanks [@ljharb])
- [`extensions`]: Ignore query strings when checking for extensions ([#1572], thanks [@pcorpet])

### Docs
- [`extensions`]: improve `ignorePackages` docs ([#1248], thanks [@ivo-stefchev])

## [2.19.1] - 2019-12-08

### Fixed
- [`no-extraneous-dependencies`]: ensure `node.source` exists

## [2.19.0] - 2019-12-08

### Added
- [`internal-regex` setting]: regex pattern for marking packages "internal"  ([#1491], thanks [@Librazy])
- [`group-exports`]: make aggregate module exports valid ([#1472], thanks [@atikenny])
- [`no-namespace`]: Make rule fixable ([#1401], thanks [@TrevorBurnham])
- support `parseForESLint` from custom parser ([#1435], thanks [@JounQin])
- [`no-extraneous-dependencies`]: Implement support for [bundledDependencies](https://npm.github.io/using-pkgs-docs/package-json/types/bundleddependencies.html) ([#1436], thanks [@schmidsi]))
- [`no-unused-modules`]: add flow type support ([#1542], thanks [@rfermann])
- [`order`]: Adds support for pathGroups to allow ordering by defined patterns ([#795], [#1386], thanks [@Mairu])
- [`no-duplicates`]: Add `considerQueryString` option : allow duplicate imports with different query strings ([#1107], thanks [@pcorpet]).
- [`order`]: Add support for alphabetical sorting of import paths within import groups ([#1360], [#1105], [#629], thanks [@duncanbeevers], [@stropho], [@luczsoma], [@randallreedjr])
- [`no-commonjs`]: add `allowConditionalRequire` option ([#1439], thanks [@Pessimistress])

### Fixed
- [`default`]: make error message less confusing ([#1470], thanks [@golopot])
- Improve performance of `ExportMap.for` by only loading paths when necessary. ([#1519], thanks [@brendo])
- Support export of a merged TypeScript namespace declaration ([#1495], thanks [@benmunro])
- [`order`]: fix autofix to not move imports across fn calls ([#1253], thanks [@tihonove])
- [`prefer-default-export`]: fix false positive with type export ([#1506], thanks [@golopot])
- [`extensions`]: Fix `ignorePackages` to produce errors ([#1521], thanks [@saschanaz])
- [`no-unused-modules`]: fix crash due to `export *` ([#1496], thanks [@Taranys])
- [`no-cycle`]: should not warn for Flow imports ([#1494], thanks [@maxmalov])
- [`order`]: fix `@someModule` considered as `unknown` instead of `internal` ([#1493], thanks [@aamulumi])
- [`no-extraneous-dependencies`]: Check `export from` ([#1049], thanks [@marcusdarmstrong])

### Docs
- [`no-useless-path-segments`]: add docs for option `commonjs` ([#1507], thanks [@golopot])

### Changed
- [`no-unused-modules`]/`eslint-module-utils`: Avoid superfluous calls and code ([#1551], thanks [@brettz9])

## [2.18.2] - 2019-07-19

### Fixed
- Skip warning on type interfaces ([#1425], thanks [@lencioni])

## [2.18.1] - 2019-07-18

### Fixed
- Improve parse perf when using `@typescript-eslint/parser` ([#1409], thanks [@bradzacher])
- [`prefer-default-export`]: don't warn on TypeAlias & TSTypeAliasDeclaration ([#1377], thanks [@sharmilajesupaul])
- [`no-unused-modules`]: Exclude package "main"/"bin"/"browser" entry points ([#1404], thanks [@rfermann])
- [`export`]: false positive for TypeScript overloads ([#1412], thanks [@golopot])

### Refactors
- [`no-extraneous-dependencies`], `importType`: remove lodash ([#1419], thanks [@ljharb])

## [2.18.0] - 2019-06-24

### Added
- Support eslint v6 ([#1393], thanks [@sheepsteak])
- [`order`]: Adds support for correctly sorting unknown types into a single group ([#1375], thanks [@swernerx])
- [`order`]: add fixer for destructuring commonjs import ([#1372], thanks [@golopot])
- TypeScript config: add TS def extensions + defer to TS over JS ([#1366], thanks [@benmosher])

### Fixed
- [`no-unused-modules`]: handle ClassDeclaration ([#1371], thanks [@golopot])

### Docs
- [`no-cycle`]: split code examples so file separation is obvious ([#1370], thanks [@alex-page])
- [`no-named-as-default-member`]: update broken link ([#1389], thanks [@fooloomanzoo])

## [2.17.3] - 2019-05-23

### Fixed
- [`no-common-js`]: Also throw an error when assigning ([#1354], thanks [@charlessuh])
- [`no-unused-modules`]: don't crash when lint file outside src-folder ([#1347], thanks [@rfermann])
- [`no-unused-modules`]: make `import { name as otherName }` work ([#1340], [#1342], thanks [@rfermann])
- [`no-unused-modules`]: make appveyor tests passing ([#1333], thanks [@rfermann])
- [`named`]: ignore Flow `typeof` imports and `type` exports ([#1345], thanks [@loganfsmyth])
- [refactor] fix eslint 6 compat by fixing imports (thank [@ljharb])
- Improve support for TypeScript declare structures ([#1356], thanks [@christophercurrie])

### Docs
- add missing [`no-unused-modules`] in README ([#1358], thanks [@golopot])
- [`no-unused-modules`]: Indicates usage, plugin defaults to no-op, and add description to main README.md ([#1352], thanks [@johndevedu])
- Document `env` option for `eslint-import-resolver-webpack` ([#1363], thanks [@kgregory])

## [2.17.2] - 2019-04-16

### Fixed
- [`no-unused-modules`]: avoid crash when using `ignoreExports`-option ([#1331], [#1323], thanks [@rfermann])
- [`no-unused-modules`]: make sure that rule with no options will not fail ([#1330], [#1334], thanks [@kiwka])

## [2.17.1] - 2019-04-13

### Fixed
- require v2.4 of `eslint-module-utils` ([#1322])

## [2.17.0] - 2019-04-13

### Added
- [`no-useless-path-segments`]: Add `noUselessIndex` option ([#1290], thanks [@timkraut])
- [`no-duplicates`]: Add autofix ([#1312], thanks [@lydell])
- Add [`no-unused-modules`] rule ([#1142], thanks [@rfermann])
- support export type named exports from TypeScript ([#1304], thanks [@bradennapier] and [@schmod])

### Fixed
- [`order`]: Fix interpreting some external modules being interpreted as internal modules ([#793], [#794] thanks [@ephys])
- allow aliases that start with @ to be "internal" ([#1293], [#1294], thanks [@jeffshaver])
- aliased internal modules that look like core modules ([#1297], thanks [@echenley])
- [`namespace`]: add check for null ExportMap ([#1235], [#1144], thanks [@ljqx])
- [ExportMap] fix condition for checking if block comment ([#1234], [#1233], thanks [@ljqx])
- Fix overwriting of dynamic import() CallExpression ([`no-cycle`], [`no-relative-parent-imports`], [`no-unresolved`], [`no-useless-path-segments`]) ([#1218], [#1166], [#1035], thanks [@vikr01])
- [`export`]: false positives for TypeScript type + value export ([#1319], thanks [@bradzacher])
- [`export`]: Support TypeScript namespaces ([#1320], [#1300], thanks [@bradzacher])

### Docs
- Update readme for TypeScript ([#1256], [#1277], thanks [@kirill-konshin])
- make rule names consistent ([#1112], thanks [@feychenie])

### Tests
- fix broken tests on master ([#1295], thanks [@jeffshaver] and [@ljharb])
- [`no-commonjs`]: add tests that show corner cases ([#1308], thanks [@TakeScoop])

## [2.16.0] - 2019-01-29

### Added
- `typescript` config ([#1257], thanks [@kirill-konshin])

### Fixed
- Memory leak of `SourceCode` objects for all parsed dependencies, resolved. (issue [#1266], thanks [@asapach] and [@sergei-startsev] for digging in)

## [2.15.0] - 2019-01-22

### Added
- new rule: [`no-named-export`] ([#1157], thanks [@fsmaia])

### Fixed
- [`no-extraneous-dependencies`]: `packageDir` option with array value was clobbering package deps instead of merging them ([#1175]/[#1176], thanks [@aravindet] & [@pzhine])
- [`dynamic-import-chunkname`]: Add proper webpack comment parsing ([#1163], thanks [@st-sloth])
- [`named`]: fix destructuring assignment ([#1232], thanks [@ljqx])

## [2.14.0] - 2018-08-13

### Added
- [`no-useless-path-segments`]: add commonJS (CJS) support ([#1128], thanks [@1pete])
- [`namespace`]: add JSX check ([#1151], thanks [@jf248])

### Fixed
- [`no-cycle`]: ignore Flow imports ([#1126], thanks [@gajus])
- fix Flow type imports ([#1106], thanks [@syymza])
- [`no-relative-parent-imports`]: resolve paths ([#1135], thanks [@chrislloyd])
- [`order`]: fix autofixer when using typescript-eslint-parser ([#1137], thanks [@justinanastos])
- repeat fix from [#797] for [#717], in another place (thanks [@ljharb])

### Refactors
- add explicit support for RestElement alongside ExperimentalRestProperty (thanks [@ljharb])

## [2.13.0] - 2018-06-24

### Added
- Add ESLint 5 support ([#1122], thanks [@ai] and [@ljharb])
- Add [`no-relative-parent-imports`] rule: disallow relative imports from parent directories ([#1093], thanks [@chrislloyd])

### Fixed
- `namespace` rule: ensure it works in eslint 5/ecmaVersion 2018 (thanks [@ljharb])

## [2.12.0] - 2018-05-17

### Added
- Ignore type imports for [`named`] rule ([#931], thanks [@mattijsbliek])
- Add documentation for [`no-useless-path-segments`] rule ([#1068], thanks [@manovotny])
- `packageDir` option for [`no-extraneous-dependencies`] can be array-valued ([#1085], thanks [@hulkish])

## [2.11.0] - 2018-04-09

### Added
- Fixer for [`first`] ([#1046], thanks [@fengkfengk])
- `allow-require` option for [`no-commonjs`] rule ([#880], thanks [@futpib])

### Fixed
- memory/CPU regression where ASTs were held in memory ([#1058], thanks [@klimashkin]/[@lukeapage])

## [2.10.0] - 2018-03-29

### Added
- Autofixer for [`order`] rule ([#908], thanks [@tihonove])
- Add [`no-cycle`] rule: reports import cycles.

## [2.9.0] - 2018-02-21

### Added
- Add [`group-exports`] rule: style-guide rule to report use of multiple named exports ([#721], thanks [@robertrossmann])
- Add [`no-self-import`] rule: forbids a module from importing itself. ([#727], [#449], [#447], thanks [@giodamelio]).
- Add [`no-default-export`] rule ([#889], thanks [@isiahmeadows])
- Add [`no-useless-path-segments`] rule ([#912], thanks [@graingert] and [@danny-andrews])
- ... and more! check the commits for v[2.9.0]

## [2.8.0] - 2017-10-18
### Added
- [`exports-last`] rule ([#620] + [#632], thanks [@k15a])

### Changed
- Case-sensitivity checking ignores working directory and ancestors. ([#720] + [#858], thanks [@laysent])

### Fixed
- support scoped modules containing hyphens ([#744], thanks [@rosswarren])
- core-modules now resolves files inside declared modules ([#886] / [#891], thanks [@mplewis])
- TypeError for missing AST fields from TypeScript ([#842] / [#944], thanks [@alexgorbatchev])

## [2.7.0] - 2017-07-06

### Changed
- [`no-absolute-path`] picks up speed boost, optional AMD support ([#843], thanks [@jseminck])

## [2.6.1] - 2017-06-29

### Fixed
- update bundled node resolver dependency to latest version

## [2.6.0] - 2017-06-23

### Changed
- update tests / peerDeps for ESLint 4.0 compatibility ([#871], thanks [@mastilver])
- [`memo-parser`] updated to require `filePath` on parser options as it melts
  down if it's not there, now that this plugin always provides it. (see [#863])

## [2.5.0] - 2017-06-22

Re-releasing v[2.4.0] after discovering that the memory leak is isolated to the [`memo-parser`],
which is more or less experimental anyway.

### Added
- Autofixer for newline-after-import. ([#686] + [#696], thanks [@eelyafi])

## [2.4.0] - 2017-06-02 [YANKED]

Yanked due to critical issue in eslint-module-utils with cache key resulting from [#839].

### Added
- Add `filePath` into `parserOptions` passed to `parser` ([#839], thanks [@sompylasar])
- Add `allow` option to [`no-unassigned-import`] to allow for files that match the globs ([#671], [#737], thanks [@kevin940726]).

## [2.3.0] - 2017-05-18

### Added
- [`no-anonymous-default-export`] rule: report anonymous default exports ([#712], thanks [@duncanbeevers]).
- Add new value to [`order`]'s `newlines-between` option to allow newlines inside import groups ([#627], [#628], thanks [@giodamelio])
- Add `count` option to the [`newline-after-import`] rule to allow configuration of number of newlines expected ([#742], thanks [@ntdb])

### Changed
- [`no-extraneous-dependencies`]: use `read-pkg-up` to simplify finding + loading `package.json` ([#680], thanks [@wtgtybhertgeghgtwtg])
- Add support to specify the package.json [`no-extraneous-dependencies`] ([#685], thanks [@ramasilveyra])

### Fixed
- attempt to fix crash in [`no-mutable-exports`]. ([#660])
- "default is a reserved keyword" in no-maned-default tests by locking down babylon to 6.15.0 (#756, thanks @gmathieu)
- support scoped modules containing non word characters

## [2.2.0] - 2016-11-07

### Fixed
- Corrected a few gaffs in the auto-ignore logic to fix major performance issues
  with projects that did not explicitly ignore `node_modules`. ([#654])
- [`import/ignore` setting] was only being respected if the ignored module didn't start with
  an `import` or `export` JS statement
- [`prefer-default-export`]: fixed crash on export extensions ([#653])

## [2.1.0] - 2016-11-02

### Added
- Add [`no-named-default`] rule: style-guide rule to report use of unnecessarily named default imports ([#596], thanks [@ntdb])
- [`no-extraneous-dependencies`]: check globs against CWD + absolute path ([#602] + [#630], thanks [@ljharb])

### Fixed
- [`prefer-default-export`] handles flow `export type` ([#484] + [#639], thanks [@jakubsta])
- [`prefer-default-export`] handles re-exported default exports ([#609])
- Fix crash when using [`newline-after-import`] with decorators ([#592])
- Properly report [`newline-after-import`] when next line is a decorator
- Fixed documentation for the default values for the [`order`] rule ([#601])

## [2.0.1] - 2016-10-06

### Fixed
- Fixed code that relied on removed dependencies. ([#604])

## [2.0.0]! - 2016-09-30

### Added
- [`unambiguous`] rule: report modules that are not unambiguously ES modules.
- `recommended` shared config. Roughly `errors` and `warnings` mixed together,
  with some `parserOptions` in the mix. ([#402])
- `react` shared config: added `jsx: true` to `parserOptions.ecmaFeatures`.
- Added [`no-webpack-loader-syntax`] rule: forbid custom Webpack loader syntax in imports. ([#586], thanks [@fson]!)
- Add option `newlines-between: "ignore"` to [`order`] ([#519])
- Added [`no-unassigned-import`] rule ([#529])

### Breaking
- [`import/extensions` setting] defaults to `['.js']`. ([#306])
- [`import/ignore` setting] defaults to nothing, and ambiguous modules are ignored natively. This means importing from CommonJS modules will no longer be reported by [`default`], [`named`], or [`namespace`], regardless of `import/ignore`. ([#270])
- [`newline-after-import`]: Removed need for an empty line after an inline `require` call ([#570])
- [`order`]: Default value for `newlines-between` option is now `ignore` ([#519])

### Changed
- `imports-first` is renamed to [`first`]. `imports-first` alias will continue to
  exist, but may be removed in a future major release.
- Case-sensitivity: now specifically (and optionally) reported by [`no-unresolved`].
  Other rules will ignore case-mismatches on paths on case-insensitive filesystems. ([#311])

### Fixed
- [`no-internal-modules`]: support `@`-scoped packages ([#577]+[#578], thanks [@spalger])

## [1.16.0] - 2016-09-22

### Added
- Added [`no-dynamic-require`] rule: forbid `require()` calls with expressions. ([#567], [#568])
- Added [`no-internal-modules`] rule: restrict deep package imports to specific folders. ([#485], thanks [@spalger]!)
- [`extensions`]: allow override of a chosen default with options object ([#555], thanks [@ljharb]!)

### Fixed
- [`no-named-as-default`] no longer false-positives on `export default from '...'` ([#566], thanks [@preco21])
- [`default`]: allow re-export of values from ignored files as default ([#545], thanks [@skyrpex])

## [1.15.0] - 2016-09-12

### Added
- Added an `allow` option to [`no-nodejs-modules`] to allow exceptions ([#452], [#509]).
- Added [`no-absolute-path`] rule ([#530], [#538])
- [`max-dependencies`] for specifying the maximum number of dependencies (both `import` and `require`) a module can have. (see [#489], thanks [@tizmagik])
- Added glob option to config for [`no-extraneous-dependencies`], after much bikeshedding. Thanks, [@knpwrs]! ([#527])

### Fixed
- [`no-named-as-default-member`] Allow default import to have a property named "default" ([#507], [#508], thanks [@jquense] for both!)

## [1.14.0] - 2016-08-22

### Added
- [`import/parsers` setting]: parse some dependencies (i.e. TypeScript!) with a different parser than the ESLint-configured parser. ([#503])

### Fixed
- [`namespace`] exception for get property from `namespace` import, which are re-export from commonjs module ([#499] fixes [#416], thanks [@wKich])

## [1.13.0] - 2016-08-11

### Added
- `allowComputed` option for [`namespace`] rule. If set to `true`, won't report
  computed member references to namespaces. (see [#456])

### Changed
- Modified [`no-nodejs-modules`] error message to include the module's name ([#453], [#461])

### Fixed
- [`import/extensions` setting] is respected in spite of the appearance of imports
  in an imported file. (fixes [#478], thanks [@rhys-vdw])

## [1.12.0] - 2016-07-26

### Added
- [`import/external-module-folders` setting]: a possibility to configure folders for "external" modules ([#444], thanks [@zloirock])

## [1.11.1] - 2016-07-20

### Fixed
- [`newline-after-import`] exception for `switch` branches with `require`s iff parsed as `sourceType:'module'`.
  (still [#441], thanks again [@ljharb])

## [1.11.0] - 2016-07-17

### Added
- Added an `peerDependencies` option to [`no-extraneous-dependencies`] to allow/forbid peer dependencies ([#423], [#428], thanks [@jfmengels]!).

### Fixed
- [`newline-after-import`] exception for multiple `require`s in an arrow
  function expression (e.g. `() => require('a') || require('b')`). ([#441], thanks [@ljharb])

## [1.10.3] - 2016-07-08

### Fixed
- removing `Symbol` dependencies (i.e. `for-of` loops) due to Node 0.10 polyfill
  issue (see [#415]). Should not make any discernible semantic difference.

## [1.10.2] - 2016-07-04

### Fixed
- Something horrible happened during `npm prepublish` of 1.10.1.
  Several `rm -rf node_modules && npm i` and `gulp clean && npm prepublish`s later, it is rebuilt and republished as 1.10.2. Thanks [@rhettlivingston] for noticing and reporting!

## [1.10.1] - 2016-07-02 [YANKED]

### Added
- Officially support ESLint 3.x. (peerDependencies updated to `2.x - 3.x`)

## [1.10.0] - 2016-06-30

### Added
- Added new rule [`no-restricted-paths`]. ([#155]/[#371], thanks [@lo1tuma])
- [`import/core-modules` setting]: allow configuration of additional module names,
  to be treated as builtin modules (a la `path`, etc. in Node). ([#275] + [#365], thanks [@sindresorhus] for driving)
- React Native shared config (based on comment from [#283])

### Fixed
- Fixed crash with `newline-after-import` related to the use of switch cases. (fixes [#386], thanks [@ljharb] for reporting) ([#395])

## [1.9.2] - 2016-06-21

### Fixed
- Issues with ignored/CJS files in [`export`] and [`no-deprecated`] rules. ([#348], [#370])

## [1.9.1] - 2016-06-16

### Fixed
- Reordered precedence for loading resolvers. ([#373])

## [1.9.0] - 2016-06-10

### Added
- Added support TomDoc comments to [`no-deprecated`]. ([#321], thanks [@josh])
- Added support for loading custom resolvers ([#314], thanks [@le0nik])

### Fixed
- [`prefer-default-export`] handles `export function` and `export const` in same file ([#359], thanks [@scottnonnenberg])

## [1.8.1] - 2016-05-23

### Fixed
- `export * from 'foo'` now properly ignores a `default` export from `foo`, if any. ([#328]/[#332], thanks [@jkimbo])
  This impacts all static analysis of imported names. ([`default`], [`named`], [`namespace`], [`export`])
- Make [`order`]'s `newline-between` option handle multiline import statements ([#313], thanks [@singles])
- Make [`order`]'s `newline-between` option handle not assigned import statements ([#313], thanks [@singles])
- Make [`order`]'s `newline-between` option ignore `require` statements inside object literals ([#313], thanks [@singles])
- [`prefer-default-export`] properly handles deep destructuring, `export * from ...`, and files with no exports. ([#342]+[#343], thanks [@scottnonnenberg])

## [1.8.0] - 2016-05-11

### Added
- [`prefer-default-export`], new rule. ([#308], thanks [@gavriguy])

### Fixed
- Ignore namespace / ES7 re-exports in [`no-mutable-exports`]. ([#317], fixed by [#322]. thanks [@borisyankov] + [@jfmengels])
- Make [`no-extraneous-dependencies`] handle scoped packages ([#316], thanks [@jfmengels])

## [1.7.0] - 2016-05-06

### Added
- [`newline-after-import`], new rule. ([#245], thanks [@singles])
- Added an `optionalDependencies` option to [`no-extraneous-dependencies`] to allow/forbid optional dependencies ([#266], thanks [@jfmengels]).
- Added `newlines-between` option to [`order`] rule ([#298], thanks [@singles])
- add [`no-mutable-exports`] rule ([#290], thanks [@josh])
- [`import/extensions` setting]: a list of file extensions to parse as modules
  and search for `export`s. If unspecified, all extensions are considered valid (for now).
  In v2, this will likely default to `['.js', MODULE_EXT]`. ([#297], to fix [#267])

### Fixed
- [`extensions`]: fallback to source path for extension enforcement if imported
  module is not resolved. Also, never report for builtins (i.e. `path`). ([#296])

## [1.6.1] - 2016-04-28

### Fixed
- [`no-named-as-default-member`]: don't crash on rest props. ([#281], thanks [@SimenB])
- support for Node 6: don't pass `null` to `path` functions.
  Thanks to [@strawbrary] for bringing this up ([#272]) and adding OSX support to the Travis
  config ([#288]).

## [1.6.0] - 2016-04-25

### Added
- add [`no-named-as-default-member`] to `warnings` canned config
- add [`no-extraneous-dependencies`] rule ([#241], thanks [@jfmengels])
- add [`extensions`] rule ([#250], thanks [@lo1tuma])
- add [`no-nodejs-modules`] rule ([#261], thanks [@jfmengels])
- add [`order`] rule ([#247], thanks [@jfmengels])
- consider `resolve.fallback` config option in the webpack resolver ([#254])

### Changed
- [`imports-first`] now allows directives (i.e. `'use strict'`) strictly before
  any imports ([#256], thanks [@lemonmade])

### Fixed
- [`named`] now properly ignores the source module if a name is re-exported from
  an ignored file (i.e. `node_modules`). Also improved the reported error. (thanks to [@jimbolla] for reporting)
- [`no-named-as-default-member`] had a crash on destructuring in loops (thanks for heads up from [@lemonmade])

## [1.5.0] - 2016-04-18

### Added
- report resolver errors at the top of the linted file
- add [`no-namespace`] rule ([#239], thanks [@singles])
- add [`no-named-as-default-member`] rule ([#243], thanks [@dmnd])

### Changed
- Rearranged rule groups in README in preparation for more style guide rules

### Removed
- support for Node 0.10, via `es6-*` ponyfills. Using native Map/Set/Symbol.

## [1.4.0] - 2016-03-25

### Added
- Resolver plugin interface v2: more explicit response format that more clearly covers the found-but-core-module case, where there is no path.
  Still backwards-compatible with the original version of the resolver spec.
- [Resolver documentation](./resolvers/README.md)

### Changed
- using `package.json/files` instead of `.npmignore` for package file inclusion ([#228], thanks [@mathieudutour])
- using `es6-*` ponyfills instead of `babel-runtime`

## [1.3.0] - 2016-03-20

Major perf improvements. Between parsing only once and ignoring gigantic, non-module `node_modules`,
there is very little added time.

My test project takes 17s to lint completely, down from 55s, when using the
memoizing parser, and takes only 27s with naked `babel-eslint` (thus, reparsing local modules).

### Added
- This change log ([#216])
- Experimental memoizing [parser](./memo-parser/README.md)

### Fixed
- Huge reduction in execution time by _only_ ignoring [`import/ignore` setting] if
  something that looks like an `export` is detected in the module content.

## [1.2.0] - 2016-03-19

Thanks [@lencioni] for identifying a huge amount of rework in resolve and kicking
off a bunch of memoization.

I'm seeing 62% improvement over my normal test codebase when executing only
[`no-unresolved`] in isolation, and ~35% total reduction in lint time.

### Changed
- added caching to core/resolve via [#214], configured via [`import/cache` setting]

## [1.1.0] - 2016-03-15

### Added
- Added an [`ignore`](./docs/rules/no-unresolved.md#ignore) option to [`no-unresolved`] for those pesky files that no resolver can find. (still prefer enhancing the Webpack and Node resolvers to using it, though). See [#89] for details.

## [1.0.4] - 2016-03-11

### Changed
- respect hoisting for deep namespaces ([`namespace`]/[`no-deprecated`]) ([#211])

### Fixed
- don't crash on self references ([#210])
- correct cache behavior in `eslint_d` for deep namespaces ([#200])

## [1.0.3] - 2016-02-26

### Changed
- no-deprecated follows deep namespaces ([#191])

### Fixed
- [`namespace`] no longer flags modules with only a default export as having no names. (ns.default is valid ES6)

## [1.0.2] - 2016-02-26

### Fixed
- don't parse imports with no specifiers ([#192])

## [1.0.1] - 2016-02-25

### Fixed
- export `stage-0` shared config
- documented [`no-deprecated`]
- deep namespaces are traversed regardless of how they get imported ([#189])

## [1.0.0] - 2016-02-24

### Added
- [`no-deprecated`]: WIP rule to let you know at lint time if you're using deprecated functions, constants, classes, or modules.

### Changed
- [`namespace`]: support deep namespaces ([#119] via [#157])

## [1.0.0-beta.0] - 2016-02-13

### Changed
- support for (only) ESLint 2.x
- no longer needs/refers to `import/parser` or `import/parse-options`. Instead, ESLint provides the configured parser + options to the rules, and they use that to parse dependencies.

### Removed

- `babylon` as default import parser (see Breaking)

## [0.13.0] - 2016-02-08

### Added
- [`no-commonjs`] rule
- [`no-amd`] rule

### Removed
- Removed vestigial `no-require` rule. [`no-commonjs`] is more complete.

## [0.12.2] - 2016-02-06 [YANKED]

Unpublished from npm and re-released as 0.13.0. See [#170].

## [0.12.1] - 2015-12-17

### Changed
- Broke docs for rules out into individual files.

## [0.12.0] - 2015-12-14

### Changed
- Ignore [`import/ignore` setting] if exports are actually found in the parsed module. Does this to support use of `jsnext:main` in `node_modules` without the pain of managing an allow list or a nuanced deny list.

## [0.11.0] - 2015-11-27

### Added
- Resolver plugins. Now the linter can read Webpack config, properly follow aliases and ignore externals, dismisses inline loaders, etc. etc.!

## Earlier releases (0.10.1 and younger)
See [GitHub release notes](https://github.com/import-js/eslint-plugin-import/releases?after=v0.11.0)
for info on changes for earlier releases.


[`import/cache` setting]: ./README.md#importcache
[`import/ignore` setting]: ./README.md#importignore
[`import/extensions` setting]: ./README.md#importextensions
[`import/parsers` setting]: ./README.md#importparsers
[`import/core-modules` setting]: ./README.md#importcore-modules
[`import/external-module-folders` setting]: ./README.md#importexternal-module-folders
[`internal-regex` setting]: ./README.md#importinternal-regex
[`import/node-version` setting]: ./README.md#importnode-version

[`consistent-type-specifier-style`]: ./docs/rules/consistent-type-specifier-style.md
[`default`]: ./docs/rules/default.md
[`dynamic-import-chunkname`]: ./docs/rules/dynamic-import-chunkname.md
[`enforce-node-protocol-usage`]: ./docs/rules/enforce-node-protocol-usage.md
[`export`]: ./docs/rules/export.md
[`exports-last`]: ./docs/rules/exports-last.md
[`extensions`]: ./docs/rules/extensions.md
[`first`]: ./docs/rules/first.md
[`group-exports`]: ./docs/rules/group-exports.md
[`imports-first`]: ./docs/rules/first.md
[`max-dependencies`]: ./docs/rules/max-dependencies.md
[`named`]: ./docs/rules/named.md
[`namespace`]: ./docs/rules/namespace.md
[`newline-after-import`]: ./docs/rules/newline-after-import.md
[`no-absolute-path`]: ./docs/rules/no-absolute-path.md
[`no-amd`]: ./docs/rules/no-amd.md
[`no-anonymous-default-export`]: ./docs/rules/no-anonymous-default-export.md
[`no-commonjs`]: ./docs/rules/no-commonjs.md
[`no-cycle`]: ./docs/rules/no-cycle.md
[`no-default-export`]: ./docs/rules/no-default-export.md
[`no-deprecated`]: ./docs/rules/no-deprecated.md
[`no-duplicates`]: ./docs/rules/no-duplicates.md
[`no-dynamic-require`]: ./docs/rules/no-dynamic-require.md
[`no-empty-named-blocks`]: ./docs/rules/no-empty-named-blocks.md
[`no-extraneous-dependencies`]: ./docs/rules/no-extraneous-dependencies.md
[`no-import-module-exports`]: ./docs/rules/no-import-module-exports.md
[`no-internal-modules`]: ./docs/rules/no-internal-modules.md
[`no-mutable-exports`]: ./docs/rules/no-mutable-exports.md
[`no-named-as-default-member`]: ./docs/rules/no-named-as-default-member.md
[`no-named-as-default`]: ./docs/rules/no-named-as-default.md
[`no-named-default`]: ./docs/rules/no-named-default.md
[`no-named-export`]: ./docs/rules/no-named-export.md
[`no-namespace`]: ./docs/rules/no-namespace.md
[`no-nodejs-modules`]: ./docs/rules/no-nodejs-modules.md
[`no-relative-packages`]: ./docs/rules/no-relative-packages.md
[`no-relative-parent-imports`]: ./docs/rules/no-relative-parent-imports.md
[`no-restricted-paths`]: ./docs/rules/no-restricted-paths.md
[`no-self-import`]: ./docs/rules/no-self-import.md
[`no-unassigned-import`]: ./docs/rules/no-unassigned-import.md
[`no-unresolved`]: ./docs/rules/no-unresolved.md
[`no-unused-modules`]: ./docs/rules/no-unused-modules.md
[`no-useless-path-segments`]: ./docs/rules/no-useless-path-segments.md
[`no-webpack-loader-syntax`]: ./docs/rules/no-webpack-loader-syntax.md
[`order`]: ./docs/rules/order.md
[`prefer-default-export`]: ./docs/rules/prefer-default-export.md
[`unambiguous`]: ./docs/rules/unambiguous.md

[`memo-parser`]: ./memo-parser/README.md

[#3191]: https://github.com/import-js/eslint-plugin-import/pull/3191
[#3173]: https://github.com/import-js/eslint-plugin-import/pull/3173
[#3172]: https://github.com/import-js/eslint-plugin-import/pull/3172
[#3167]: https://github.com/import-js/eslint-plugin-import/pull/3167
[#3166]: https://github.com/import-js/eslint-plugin-import/pull/3166
[#3152]: https://github.com/import-js/eslint-plugin-import/pull/3152
[#3151]: https://github.com/import-js/eslint-plugin-import/pull/3151
[#3138]: https://github.com/import-js/eslint-plugin-import/pull/3138
[#3129]: https://github.com/import-js/eslint-plugin-import/pull/3129
[#3128]: https://github.com/import-js/eslint-plugin-import/pull/3128
[#3127]: https://github.com/import-js/eslint-plugin-import/pull/3127
[#3125]: https://github.com/import-js/eslint-plugin-import/pull/3125
[#3122]: https://github.com/import-js/eslint-plugin-import/pull/3122
[#3116]: https://github.com/import-js/eslint-plugin-import/pull/3116
[#3106]: https://github.com/import-js/eslint-plugin-import/pull/3106
[#3105]: https://github.com/import-js/eslint-plugin-import/pull/3105
[#3104]: https://github.com/import-js/eslint-plugin-import/pull/3104
[#3097]: https://github.com/import-js/eslint-plugin-import/pull/3097
[#3073]: https://github.com/import-js/eslint-plugin-import/pull/3073
[#3072]: https://github.com/import-js/eslint-plugin-import/pull/3072
[#3071]: https://github.com/import-js/eslint-plugin-import/pull/3071
[#3070]: https://github.com/import-js/eslint-plugin-import/pull/3070
[#3068]: https://github.com/import-js/eslint-plugin-import/pull/3068
[#3066]: https://github.com/import-js/eslint-plugin-import/pull/3066
[#3065]: https://github.com/import-js/eslint-plugin-import/pull/3065
[#3062]: https://github.com/import-js/eslint-plugin-import/pull/3062
[#3052]: https://github.com/import-js/eslint-plugin-import/pull/3052
[#3043]: https://github.com/import-js/eslint-plugin-import/pull/3043
[#3036]: https://github.com/import-js/eslint-plugin-import/pull/3036
[#3033]: https://github.com/import-js/eslint-plugin-import/pull/3033
[#3032]: https://github.com/import-js/eslint-plugin-import/pull/3032
[#3024]: https://github.com/import-js/eslint-plugin-import/pull/3024
[#3018]: https://github.com/import-js/eslint-plugin-import/pull/3018
[#3012]: https://github.com/import-js/eslint-plugin-import/pull/3012
[#3011]: https://github.com/import-js/eslint-plugin-import/pull/3011
[#3004]: https://github.com/import-js/eslint-plugin-import/pull/3004
[#2998]: https://github.com/import-js/eslint-plugin-import/pull/2998
[#2996]: https://github.com/import-js/eslint-plugin-import/pull/2996
[#2993]: https://github.com/import-js/eslint-plugin-import/pull/2993
[#2991]: https://github.com/import-js/eslint-plugin-import/pull/2991
[#2989]: https://github.com/import-js/eslint-plugin-import/pull/2989
[#2987]: https://github.com/import-js/eslint-plugin-import/pull/2987
[#2985]: https://github.com/import-js/eslint-plugin-import/pull/2985
[#2982]: https://github.com/import-js/eslint-plugin-import/pull/2982
[#2952]: https://github.com/import-js/eslint-plugin-import/pull/2952
[#2944]: https://github.com/import-js/eslint-plugin-import/pull/2944
[#2942]: https://github.com/import-js/eslint-plugin-import/pull/2942
[#2919]: https://github.com/import-js/eslint-plugin-import/pull/2919
[#2885]: https://github.com/import-js/eslint-plugin-import/pull/2885
[#2884]: https://github.com/import-js/eslint-plugin-import/pull/2884
[#2866]: https://github.com/import-js/eslint-plugin-import/pull/2866
[#2854]: https://github.com/import-js/eslint-plugin-import/pull/2854
[#2851]: https://github.com/import-js/eslint-plugin-import/pull/2851
[#2850]: https://github.com/import-js/eslint-plugin-import/pull/2850
[#2842]: https://github.com/import-js/eslint-plugin-import/pull/2842
[#2835]: https://github.com/import-js/eslint-plugin-import/pull/2835
[#2832]: https://github.com/import-js/eslint-plugin-import/pull/2832
[#2817]: https://github.com/import-js/eslint-plugin-import/pull/2817
[#2778]: https://github.com/import-js/eslint-plugin-import/pull/2778
[#2756]: https://github.com/import-js/eslint-plugin-import/pull/2756
[#2754]: https://github.com/import-js/eslint-plugin-import/pull/2754
[#2748]: https://github.com/import-js/eslint-plugin-import/pull/2748
[#2735]: https://github.com/import-js/eslint-plugin-import/pull/2735
[#2699]: https://github.com/import-js/eslint-plugin-import/pull/2699
[#2664]: https://github.com/import-js/eslint-plugin-import/pull/2664
[#2640]: https://github.com/import-js/eslint-plugin-import/pull/2640
[#2613]: https://github.com/import-js/eslint-plugin-import/pull/2613
[#2608]: https://github.com/import-js/eslint-plugin-import/pull/2608
[#2605]: https://github.com/import-js/eslint-plugin-import/pull/2605
[#2602]: https://github.com/import-js/eslint-plugin-import/pull/2602
[#2598]: https://github.com/import-js/eslint-plugin-import/pull/2598
[#2589]: https://github.com/import-js/eslint-plugin-import/pull/2589
[#2588]: https://github.com/import-js/eslint-plugin-import/pull/2588
[#2582]: https://github.com/import-js/eslint-plugin-import/pull/2582
[#2570]: https://github.com/import-js/eslint-plugin-import/pull/2570
[#2568]: https://github.com/import-js/eslint-plugin-import/pull/2568
[#2546]: https://github.com/import-js/eslint-plugin-import/pull/2546
[#2541]: https://github.com/import-js/eslint-plugin-import/pull/2541
[#2531]: https://github.com/import-js/eslint-plugin-import/pull/2531
[#2511]: https://github.com/import-js/eslint-plugin-import/pull/2511
[#2506]: https://github.com/import-js/eslint-plugin-import/pull/2506
[#2503]: https://github.com/import-js/eslint-plugin-import/pull/2503
[#2490]: https://github.com/import-js/eslint-plugin-import/pull/2490
[#2475]: https://github.com/import-js/eslint-plugin-import/pull/2475
[#2473]: https://github.com/import-js/eslint-plugin-import/pull/2473
[#2466]: https://github.com/import-js/eslint-plugin-import/pull/2466
[#2459]: https://github.com/import-js/eslint-plugin-import/pull/2459
[#2440]: https://github.com/import-js/eslint-plugin-import/pull/2440
[#2438]: https://github.com/import-js/eslint-plugin-import/pull/2438
[#2436]: https://github.com/import-js/eslint-plugin-import/pull/2436
[#2427]: https://github.com/import-js/eslint-plugin-import/pull/2427
[#2424]: https://github.com/import-js/eslint-plugin-import/pull/2424
[#2419]: https://github.com/import-js/eslint-plugin-import/pull/2419
[#2417]: https://github.com/import-js/eslint-plugin-import/pull/2417
[#2411]: https://github.com/import-js/eslint-plugin-import/pull/2411
[#2399]: https://github.com/import-js/eslint-plugin-import/pull/2399
[#2396]: https://github.com/import-js/eslint-plugin-import/pull/2396
[#2395]: https://github.com/import-js/eslint-plugin-import/pull/2395
[#2393]: https://github.com/import-js/eslint-plugin-import/pull/2393
[#2388]: https://github.com/import-js/eslint-plugin-import/pull/2388
[#2387]: https://github.com/import-js/eslint-plugin-import/pull/2387
[#2381]: https://github.com/import-js/eslint-plugin-import/pull/2381
[#2378]: https://github.com/import-js/eslint-plugin-import/pull/2378
[#2374]: https://github.com/import-js/eslint-plugin-import/pull/2374
[#2371]: https://github.com/import-js/eslint-plugin-import/pull/2371
[#2367]: https://github.com/import-js/eslint-plugin-import/pull/2367
[#2358]: https://github.com/import-js/eslint-plugin-import/pull/2358
[#2341]: https://github.com/import-js/eslint-plugin-import/pull/2341
[#2332]: https://github.com/import-js/eslint-plugin-import/pull/2332
[#2334]: https://github.com/import-js/eslint-plugin-import/pull/2334
[#2330]: https://github.com/import-js/eslint-plugin-import/pull/2330
[#2315]: https://github.com/import-js/eslint-plugin-import/pull/2315
[#2305]: https://github.com/import-js/eslint-plugin-import/pull/2305
[#2299]: https://github.com/import-js/eslint-plugin-import/pull/2299
[#2297]: https://github.com/import-js/eslint-plugin-import/pull/2297
[#2287]: https://github.com/import-js/eslint-plugin-import/pull/2287
[#2282]: https://github.com/import-js/eslint-plugin-import/pull/2282
[#2280]: https://github.com/import-js/eslint-plugin-import/pull/2280
[#2279]: https://github.com/import-js/eslint-plugin-import/pull/2279
[#2272]: https://github.com/import-js/eslint-plugin-import/pull/2272
[#2271]: https://github.com/import-js/eslint-plugin-import/pull/2271
[#2270]: https://github.com/import-js/eslint-plugin-import/pull/2270
[#2240]: https://github.com/import-js/eslint-plugin-import/pull/2240
[#2233]: https://github.com/import-js/eslint-plugin-import/pull/2233
[#2226]: https://github.com/import-js/eslint-plugin-import/pull/2226
[#2220]: https://github.com/import-js/eslint-plugin-import/pull/2220
[#2219]: https://github.com/import-js/eslint-plugin-import/pull/2219
[#2212]: https://github.com/import-js/eslint-plugin-import/pull/2212
[#2196]: https://github.com/import-js/eslint-plugin-import/pull/2196
[#2194]: https://github.com/import-js/eslint-plugin-import/pull/2194
[#2191]: https://github.com/import-js/eslint-plugin-import/pull/2191
[#2184]: https://github.com/import-js/eslint-plugin-import/pull/2184
[#2179]: https://github.com/import-js/eslint-plugin-import/pull/2179
[#2160]: https://github.com/import-js/eslint-plugin-import/pull/2160
[#2158]: https://github.com/import-js/eslint-plugin-import/pull/2158
[#2156]: https://github.com/import-js/eslint-plugin-import/pull/2156
[#2149]: https://github.com/import-js/eslint-plugin-import/pull/2149
[#2146]: https://github.com/import-js/eslint-plugin-import/pull/2146
[#2140]: https://github.com/import-js/eslint-plugin-import/pull/2140
[#2138]: https://github.com/import-js/eslint-plugin-import/pull/2138
[#2121]: https://github.com/import-js/eslint-plugin-import/pull/2121
[#2112]: https://github.com/import-js/eslint-plugin-import/pull/2112
[#2099]: https://github.com/import-js/eslint-plugin-import/pull/2099
[#2097]: https://github.com/import-js/eslint-plugin-import/pull/2097
[#2090]: https://github.com/import-js/eslint-plugin-import/pull/2090
[#2087]: https://github.com/import-js/eslint-plugin-import/pull/2087
[#2083]: https://github.com/import-js/eslint-plugin-import/pull/2083
[#2075]: https://github.com/import-js/eslint-plugin-import/pull/2075
[#2071]: https://github.com/import-js/eslint-plugin-import/pull/2071
[#2047]: https://github.com/import-js/eslint-plugin-import/pull/2047
[#2034]: https://github.com/import-js/eslint-plugin-import/pull/2034
[#2028]: https://github.com/import-js/eslint-plugin-import/pull/2028
[#2026]: https://github.com/import-js/eslint-plugin-import/pull/2026
[#2022]: https://github.com/import-js/eslint-plugin-import/pull/2022
[#2021]: https://github.com/import-js/eslint-plugin-import/pull/2021
[#2012]: https://github.com/import-js/eslint-plugin-import/pull/2012
[#1997]: https://github.com/import-js/eslint-plugin-import/pull/1997
[#1993]: https://github.com/import-js/eslint-plugin-import/pull/1993
[#1990]: https://github.com/import-js/eslint-plugin-import/pull/1990
[#1985]: https://github.com/import-js/eslint-plugin-import/pull/1985
[#1983]: https://github.com/import-js/eslint-plugin-import/pull/1983
[#1974]: https://github.com/import-js/eslint-plugin-import/pull/1974
[#1958]: https://github.com/import-js/eslint-plugin-import/pull/1958
[#1948]: https://github.com/import-js/eslint-plugin-import/pull/1948
[#1947]: https://github.com/import-js/eslint-plugin-import/pull/1947
[#1944]: https://github.com/import-js/eslint-plugin-import/pull/1944
[#1940]: https://github.com/import-js/eslint-plugin-import/pull/1940
[#1897]: https://github.com/import-js/eslint-plugin-import/pull/1897
[#1889]: https://github.com/import-js/eslint-plugin-import/pull/1889
[#1878]: https://github.com/import-js/eslint-plugin-import/pull/1878
[#1860]: https://github.com/import-js/eslint-plugin-import/pull/1860
[#1848]: https://github.com/import-js/eslint-plugin-import/pull/1848
[#1847]: https://github.com/import-js/eslint-plugin-import/pull/1847
[#1846]: https://github.com/import-js/eslint-plugin-import/pull/1846
[#1836]: https://github.com/import-js/eslint-plugin-import/pull/1836
[#1835]: https://github.com/import-js/eslint-plugin-import/pull/1835
[#1833]: https://github.com/import-js/eslint-plugin-import/pull/1833
[#1831]: https://github.com/import-js/eslint-plugin-import/pull/1831
[#1830]: https://github.com/import-js/eslint-plugin-import/pull/1830
[#1824]: https://github.com/import-js/eslint-plugin-import/pull/1824
[#1823]: https://github.com/import-js/eslint-plugin-import/pull/1823
[#1822]: https://github.com/import-js/eslint-plugin-import/pull/1822
[#1820]: https://github.com/import-js/eslint-plugin-import/pull/1820
[#1819]: https://github.com/import-js/eslint-plugin-import/pull/1819
[#1802]: https://github.com/import-js/eslint-plugin-import/pull/1802
[#1788]: https://github.com/import-js/eslint-plugin-import/pull/1788
[#1786]: https://github.com/import-js/eslint-plugin-import/pull/1786
[#1785]: https://github.com/import-js/eslint-plugin-import/pull/1785
[#1776]: https://github.com/import-js/eslint-plugin-import/pull/1776
[#1770]: https://github.com/import-js/eslint-plugin-import/pull/1770
[#1764]: https://github.com/import-js/eslint-plugin-import/pull/1764
[#1763]: https://github.com/import-js/eslint-plugin-import/pull/1763
[#1751]: https://github.com/import-js/eslint-plugin-import/pull/1751
[#1744]: https://github.com/import-js/eslint-plugin-import/pull/1744
[#1736]: https://github.com/import-js/eslint-plugin-import/pull/1736
[#1735]: https://github.com/import-js/eslint-plugin-import/pull/1735
[#1726]: https://github.com/import-js/eslint-plugin-import/pull/1726
[#1724]: https://github.com/import-js/eslint-plugin-import/pull/1724
[#1719]: https://github.com/import-js/eslint-plugin-import/pull/1719
[#1696]: https://github.com/import-js/eslint-plugin-import/pull/1696
[#1691]: https://github.com/import-js/eslint-plugin-import/pull/1691
[#1690]: https://github.com/import-js/eslint-plugin-import/pull/1690
[#1689]: https://github.com/import-js/eslint-plugin-import/pull/1689
[#1681]: https://github.com/import-js/eslint-plugin-import/pull/1681
[#1676]: https://github.com/import-js/eslint-plugin-import/pull/1676
[#1666]: https://github.com/import-js/eslint-plugin-import/pull/1666
[#1664]: https://github.com/import-js/eslint-plugin-import/pull/1664
[#1660]: https://github.com/import-js/eslint-plugin-import/pull/1660
[#1658]: https://github.com/import-js/eslint-plugin-import/pull/1658
[#1651]: https://github.com/import-js/eslint-plugin-import/pull/1651
[#1626]: https://github.com/import-js/eslint-plugin-import/pull/1626
[#1620]: https://github.com/import-js/eslint-plugin-import/pull/1620
[#1619]: https://github.com/import-js/eslint-plugin-import/pull/1619
[#1612]: https://github.com/import-js/eslint-plugin-import/pull/1612
[#1611]: https://github.com/import-js/eslint-plugin-import/pull/1611
[#1605]: https://github.com/import-js/eslint-plugin-import/pull/1605
[#1586]: https://github.com/import-js/eslint-plugin-import/pull/1586
[#1572]: https://github.com/import-js/eslint-plugin-import/pull/1572
[#1569]: https://github.com/import-js/eslint-plugin-import/pull/1569
[#1563]: https://github.com/import-js/eslint-plugin-import/pull/1563
[#1560]: https://github.com/import-js/eslint-plugin-import/pull/1560
[#1551]: https://github.com/import-js/eslint-plugin-import/pull/1551
[#1542]: https://github.com/import-js/eslint-plugin-import/pull/1542
[#1534]: https://github.com/import-js/eslint-plugin-import/pull/1534
[#1528]: https://github.com/import-js/eslint-plugin-import/pull/1528
[#1526]: https://github.com/import-js/eslint-plugin-import/pull/1526
[#1521]: https://github.com/import-js/eslint-plugin-import/pull/1521
[#1519]: https://github.com/import-js/eslint-plugin-import/pull/1519
[#1517]: https://github.com/import-js/eslint-plugin-import/pull/1517
[#1507]: https://github.com/import-js/eslint-plugin-import/pull/1507
[#1506]: https://github.com/import-js/eslint-plugin-import/pull/1506
[#1496]: https://github.com/import-js/eslint-plugin-import/pull/1496
[#1495]: https://github.com/import-js/eslint-plugin-import/pull/1495
[#1494]: https://github.com/import-js/eslint-plugin-import/pull/1494
[#1493]: https://github.com/import-js/eslint-plugin-import/pull/1493
[#1491]: https://github.com/import-js/eslint-plugin-import/pull/1491
[#1472]: https://github.com/import-js/eslint-plugin-import/pull/1472
[#1470]: https://github.com/import-js/eslint-plugin-import/pull/1470
[#1447]: https://github.com/import-js/eslint-plugin-import/pull/1447
[#1439]: https://github.com/import-js/eslint-plugin-import/pull/1439
[#1436]: https://github.com/import-js/eslint-plugin-import/pull/1436
[#1435]: https://github.com/import-js/eslint-plugin-import/pull/1435
[#1425]: https://github.com/import-js/eslint-plugin-import/pull/1425
[#1419]: https://github.com/import-js/eslint-plugin-import/pull/1419
[#1412]: https://github.com/import-js/eslint-plugin-import/pull/1412
[#1409]: https://github.com/import-js/eslint-plugin-import/pull/1409
[#1404]: https://github.com/import-js/eslint-plugin-import/pull/1404
[#1401]: https://github.com/import-js/eslint-plugin-import/pull/1401
[#1393]: https://github.com/import-js/eslint-plugin-import/pull/1393
[#1389]: https://github.com/import-js/eslint-plugin-import/pull/1389
[#1386]: https://github.com/import-js/eslint-plugin-import/pull/1386
[#1377]: https://github.com/import-js/eslint-plugin-import/pull/1377
[#1375]: https://github.com/import-js/eslint-plugin-import/pull/1375
[#1372]: https://github.com/import-js/eslint-plugin-import/pull/1372
[#1371]: https://github.com/import-js/eslint-plugin-import/pull/1371
[#1370]: https://github.com/import-js/eslint-plugin-import/pull/1370
[#1363]: https://github.com/import-js/eslint-plugin-import/pull/1363
[#1360]: https://github.com/import-js/eslint-plugin-import/pull/1360
[#1358]: https://github.com/import-js/eslint-plugin-import/pull/1358
[#1356]: https://github.com/import-js/eslint-plugin-import/pull/1356
[#1354]: https://github.com/import-js/eslint-plugin-import/pull/1354
[#1352]: https://github.com/import-js/eslint-plugin-import/pull/1352
[#1347]: https://github.com/import-js/eslint-plugin-import/pull/1347
[#1345]: https://github.com/import-js/eslint-plugin-import/pull/1345
[#1342]: https://github.com/import-js/eslint-plugin-import/pull/1342
[#1340]: https://github.com/import-js/eslint-plugin-import/pull/1340
[#1333]: https://github.com/import-js/eslint-plugin-import/pull/1333
[#1331]: https://github.com/import-js/eslint-plugin-import/pull/1331
[#1330]: https://github.com/import-js/eslint-plugin-import/pull/1330
[#1320]: https://github.com/import-js/eslint-plugin-import/pull/1320
[#1319]: https://github.com/import-js/eslint-plugin-import/pull/1319
[#1312]: https://github.com/import-js/eslint-plugin-import/pull/1312
[#1308]: https://github.com/import-js/eslint-plugin-import/pull/1308
[#1304]: https://github.com/import-js/eslint-plugin-import/pull/1304
[#1297]: https://github.com/import-js/eslint-plugin-import/pull/1297
[#1295]: https://github.com/import-js/eslint-plugin-import/pull/1295
[#1294]: https://github.com/import-js/eslint-plugin-import/pull/1294
[#1290]: https://github.com/import-js/eslint-plugin-import/pull/1290
[#1277]: https://github.com/import-js/eslint-plugin-import/pull/1277
[#1262]: https://github.com/import-js/eslint-plugin-import/pull/1262
[#1257]: https://github.com/import-js/eslint-plugin-import/pull/1257
[#1253]: https://github.com/import-js/eslint-plugin-import/pull/1253
[#1248]: https://github.com/import-js/eslint-plugin-import/pull/1248
[#1238]: https://github.com/import-js/eslint-plugin-import/pull/1238
[#1237]: https://github.com/import-js/eslint-plugin-import/pull/1237
[#1235]: https://github.com/import-js/eslint-plugin-import/pull/1235
[#1234]: https://github.com/import-js/eslint-plugin-import/pull/1234
[#1232]: https://github.com/import-js/eslint-plugin-import/pull/1232
[#1223]: https://github.com/import-js/eslint-plugin-import/pull/1223
[#1222]: https://github.com/import-js/eslint-plugin-import/pull/1222
[#1218]: https://github.com/import-js/eslint-plugin-import/pull/1218
[#1176]: https://github.com/import-js/eslint-plugin-import/pull/1176
[#1163]: https://github.com/import-js/eslint-plugin-import/pull/1163
[#1157]: https://github.com/import-js/eslint-plugin-import/pull/1157
[#1151]: https://github.com/import-js/eslint-plugin-import/pull/1151
[#1142]: https://github.com/import-js/eslint-plugin-import/pull/1142
[#1139]: https://github.com/import-js/eslint-plugin-import/pull/1139
[#1137]: https://github.com/import-js/eslint-plugin-import/pull/1137
[#1135]: https://github.com/import-js/eslint-plugin-import/pull/1135
[#1128]: https://github.com/import-js/eslint-plugin-import/pull/1128
[#1126]: https://github.com/import-js/eslint-plugin-import/pull/1126
[#1122]: https://github.com/import-js/eslint-plugin-import/pull/1122
[#1112]: https://github.com/import-js/eslint-plugin-import/pull/1112
[#1107]: https://github.com/import-js/eslint-plugin-import/pull/1107
[#1106]: https://github.com/import-js/eslint-plugin-import/pull/1106
[#1105]: https://github.com/import-js/eslint-plugin-import/pull/1105
[#1093]: https://github.com/import-js/eslint-plugin-import/pull/1093
[#1085]: https://github.com/import-js/eslint-plugin-import/pull/1085
[#1068]: https://github.com/import-js/eslint-plugin-import/pull/1068
[#1049]: https://github.com/import-js/eslint-plugin-import/pull/1049
[#1046]: https://github.com/import-js/eslint-plugin-import/pull/1046
[#966]: https://github.com/import-js/eslint-plugin-import/pull/966
[#944]: https://github.com/import-js/eslint-plugin-import/pull/944
[#912]: https://github.com/import-js/eslint-plugin-import/pull/912
[#908]: https://github.com/import-js/eslint-plugin-import/pull/908
[#891]: https://github.com/import-js/eslint-plugin-import/pull/891
[#889]: https://github.com/import-js/eslint-plugin-import/pull/889
[#880]: https://github.com/import-js/eslint-plugin-import/pull/880
[#871]: https://github.com/import-js/eslint-plugin-import/pull/871
[#858]: https://github.com/import-js/eslint-plugin-import/pull/858
[#843]: https://github.com/import-js/eslint-plugin-import/pull/843
[#804]: https://github.com/import-js/eslint-plugin-import/pull/804
[#797]: https://github.com/import-js/eslint-plugin-import/pull/797
[#794]: https://github.com/import-js/eslint-plugin-import/pull/794
[#744]: https://github.com/import-js/eslint-plugin-import/pull/744
[#742]: https://github.com/import-js/eslint-plugin-import/pull/742
[#737]: https://github.com/import-js/eslint-plugin-import/pull/737
[#727]: https://github.com/import-js/eslint-plugin-import/pull/727
[#721]: https://github.com/import-js/eslint-plugin-import/pull/721
[#712]: https://github.com/import-js/eslint-plugin-import/pull/712
[#696]: https://github.com/import-js/eslint-plugin-import/pull/696
[#685]: https://github.com/import-js/eslint-plugin-import/pull/685
[#680]: https://github.com/import-js/eslint-plugin-import/pull/680
[#654]: https://github.com/import-js/eslint-plugin-import/pull/654
[#639]: https://github.com/import-js/eslint-plugin-import/pull/639
[#632]: https://github.com/import-js/eslint-plugin-import/pull/632
[#630]: https://github.com/import-js/eslint-plugin-import/pull/630
[#629]: https://github.com/import-js/eslint-plugin-import/pull/629
[#628]: https://github.com/import-js/eslint-plugin-import/pull/628
[#596]: https://github.com/import-js/eslint-plugin-import/pull/596
[#586]: https://github.com/import-js/eslint-plugin-import/pull/586
[#578]: https://github.com/import-js/eslint-plugin-import/pull/578
[#568]: https://github.com/import-js/eslint-plugin-import/pull/568
[#555]: https://github.com/import-js/eslint-plugin-import/pull/555
[#538]: https://github.com/import-js/eslint-plugin-import/pull/538
[#527]: https://github.com/import-js/eslint-plugin-import/pull/527
[#518]: https://github.com/import-js/eslint-plugin-import/pull/518
[#509]: https://github.com/import-js/eslint-plugin-import/pull/509
[#508]: https://github.com/import-js/eslint-plugin-import/pull/508
[#503]: https://github.com/import-js/eslint-plugin-import/pull/503
[#499]: https://github.com/import-js/eslint-plugin-import/pull/499
[#489]: https://github.com/import-js/eslint-plugin-import/pull/489
[#485]: https://github.com/import-js/eslint-plugin-import/pull/485
[#461]: https://github.com/import-js/eslint-plugin-import/pull/461
[#449]: https://github.com/import-js/eslint-plugin-import/pull/449
[#444]: https://github.com/import-js/eslint-plugin-import/pull/444
[#428]: https://github.com/import-js/eslint-plugin-import/pull/428
[#395]: https://github.com/import-js/eslint-plugin-import/pull/395
[#371]: https://github.com/import-js/eslint-plugin-import/pull/371
[#365]: https://github.com/import-js/eslint-plugin-import/pull/365
[#359]: https://github.com/import-js/eslint-plugin-import/pull/359
[#343]: https://github.com/import-js/eslint-plugin-import/pull/343
[#332]: https://github.com/import-js/eslint-plugin-import/pull/332
[#322]: https://github.com/import-js/eslint-plugin-import/pull/322
[#321]: https://github.com/import-js/eslint-plugin-import/pull/321
[#316]: https://github.com/import-js/eslint-plugin-import/pull/316
[#314]: https://github.com/import-js/eslint-plugin-import/pull/314
[#308]: https://github.com/import-js/eslint-plugin-import/pull/308
[#298]: https://github.com/import-js/eslint-plugin-import/pull/298
[#297]: https://github.com/import-js/eslint-plugin-import/pull/297
[#296]: https://github.com/import-js/eslint-plugin-import/pull/296
[#290]: https://github.com/import-js/eslint-plugin-import/pull/290
[#288]: https://github.com/import-js/eslint-plugin-import/pull/288
[#261]: https://github.com/import-js/eslint-plugin-import/pull/261
[#256]: https://github.com/import-js/eslint-plugin-import/pull/256
[#254]: https://github.com/import-js/eslint-plugin-import/pull/254
[#250]: https://github.com/import-js/eslint-plugin-import/pull/250
[#247]: https://github.com/import-js/eslint-plugin-import/pull/247
[#245]: https://github.com/import-js/eslint-plugin-import/pull/245
[#243]: https://github.com/import-js/eslint-plugin-import/pull/243
[#241]: https://github.com/import-js/eslint-plugin-import/pull/241
[#239]: https://github.com/import-js/eslint-plugin-import/pull/239
[#228]: https://github.com/import-js/eslint-plugin-import/pull/228
[#211]: https://github.com/import-js/eslint-plugin-import/pull/211
[#157]: https://github.com/import-js/eslint-plugin-import/pull/157

[ljharb#37]: https://github.com/ljharb/eslint-plugin-import/pull/37

[#2930]: https://github.com/import-js/eslint-plugin-import/issues/2930
[#2687]: https://github.com/import-js/eslint-plugin-import/issues/2687
[#2684]: https://github.com/import-js/eslint-plugin-import/issues/2684
[#2682]: https://github.com/import-js/eslint-plugin-import/issues/2682
[#2674]: https://github.com/import-js/eslint-plugin-import/issues/2674
[#2668]: https://github.com/import-js/eslint-plugin-import/issues/2668
[#2666]: https://github.com/import-js/eslint-plugin-import/issues/2666
[#2665]: https://github.com/import-js/eslint-plugin-import/issues/2665
[#2577]: https://github.com/import-js/eslint-plugin-import/issues/2577
[#2447]: https://github.com/import-js/eslint-plugin-import/issues/2447
[#2444]: https://github.com/import-js/eslint-plugin-import/issues/2444
[#2412]: https://github.com/import-js/eslint-plugin-import/issues/2412
[#2392]: https://github.com/import-js/eslint-plugin-import/issues/2392
[#2340]: https://github.com/import-js/eslint-plugin-import/issues/2340
[#2255]: https://github.com/import-js/eslint-plugin-import/issues/2255
[#2210]: https://github.com/import-js/eslint-plugin-import/issues/2210
[#2201]: https://github.com/import-js/eslint-plugin-import/issues/2201
[#2199]: https://github.com/import-js/eslint-plugin-import/issues/2199
[#2161]: https://github.com/import-js/eslint-plugin-import/issues/2161
[#2118]: https://github.com/import-js/eslint-plugin-import/issues/2118
[#2067]: https://github.com/import-js/eslint-plugin-import/issues/2067
[#2063]: https://github.com/import-js/eslint-plugin-import/issues/2063
[#2056]: https://github.com/import-js/eslint-plugin-import/issues/2056
[#1998]: https://github.com/import-js/eslint-plugin-import/issues/1998
[#1965]: https://github.com/import-js/eslint-plugin-import/issues/1965
[#1924]: https://github.com/import-js/eslint-plugin-import/issues/1924
[#1854]: https://github.com/import-js/eslint-plugin-import/issues/1854
[#1841]: https://github.com/import-js/eslint-plugin-import/issues/1841
[#1834]: https://github.com/import-js/eslint-plugin-import/issues/1834
[#1814]: https://github.com/import-js/eslint-plugin-import/issues/1814
[#1811]: https://github.com/import-js/eslint-plugin-import/issues/1811
[#1808]: https://github.com/import-js/eslint-plugin-import/issues/1808
[#1805]: https://github.com/import-js/eslint-plugin-import/issues/1805
[#1801]: https://github.com/import-js/eslint-plugin-import/issues/1801
[#1722]: https://github.com/import-js/eslint-plugin-import/issues/1722
[#1704]: https://github.com/import-js/eslint-plugin-import/issues/1704
[#1702]: https://github.com/import-js/eslint-plugin-import/issues/1702
[#1635]: https://github.com/import-js/eslint-plugin-import/issues/1635
[#1631]: https://github.com/import-js/eslint-plugin-import/issues/1631
[#1616]: https://github.com/import-js/eslint-plugin-import/issues/1616
[#1613]: https://github.com/import-js/eslint-plugin-import/issues/1613
[#1590]: https://github.com/import-js/eslint-plugin-import/issues/1590
[#1589]: https://github.com/import-js/eslint-plugin-import/issues/1589
[#1565]: https://github.com/import-js/eslint-plugin-import/issues/1565
[#1366]: https://github.com/import-js/eslint-plugin-import/issues/1366
[#1334]: https://github.com/import-js/eslint-plugin-import/issues/1334
[#1323]: https://github.com/import-js/eslint-plugin-import/issues/1323
[#1322]: https://github.com/import-js/eslint-plugin-import/issues/1322
[#1300]: https://github.com/import-js/eslint-plugin-import/issues/1300
[#1293]: https://github.com/import-js/eslint-plugin-import/issues/1293
[#1266]: https://github.com/import-js/eslint-plugin-import/issues/1266
[#1256]: https://github.com/import-js/eslint-plugin-import/issues/1256
[#1233]: https://github.com/import-js/eslint-plugin-import/issues/1233
[#1175]: https://github.com/import-js/eslint-plugin-import/issues/1175
[#1166]: https://github.com/import-js/eslint-plugin-import/issues/1166
[#1144]: https://github.com/import-js/eslint-plugin-import/issues/1144
[#1058]: https://github.com/import-js/eslint-plugin-import/issues/1058
[#1035]: https://github.com/import-js/eslint-plugin-import/issues/1035
[#931]: https://github.com/import-js/eslint-plugin-import/issues/931
[#886]: https://github.com/import-js/eslint-plugin-import/issues/886
[#863]: https://github.com/import-js/eslint-plugin-import/issues/863
[#842]: https://github.com/import-js/eslint-plugin-import/issues/842
[#839]: https://github.com/import-js/eslint-plugin-import/issues/839
[#795]: https://github.com/import-js/eslint-plugin-import/issues/795
[#793]: https://github.com/import-js/eslint-plugin-import/issues/793
[#720]: https://github.com/import-js/eslint-plugin-import/issues/720
[#717]: https://github.com/import-js/eslint-plugin-import/issues/717
[#686]: https://github.com/import-js/eslint-plugin-import/issues/686
[#671]: https://github.com/import-js/eslint-plugin-import/issues/671
[#660]: https://github.com/import-js/eslint-plugin-import/issues/660
[#653]: https://github.com/import-js/eslint-plugin-import/issues/653
[#627]: https://github.com/import-js/eslint-plugin-import/issues/627
[#620]: https://github.com/import-js/eslint-plugin-import/issues/620
[#609]: https://github.com/import-js/eslint-plugin-import/issues/609
[#604]: https://github.com/import-js/eslint-plugin-import/issues/604
[#602]: https://github.com/import-js/eslint-plugin-import/issues/602
[#601]: https://github.com/import-js/eslint-plugin-import/issues/601
[#592]: https://github.com/import-js/eslint-plugin-import/issues/592
[#577]: https://github.com/import-js/eslint-plugin-import/issues/577
[#570]: https://github.com/import-js/eslint-plugin-import/issues/570
[#567]: https://github.com/import-js/eslint-plugin-import/issues/567
[#566]: https://github.com/import-js/eslint-plugin-import/issues/566
[#545]: https://github.com/import-js/eslint-plugin-import/issues/545
[#530]: https://github.com/import-js/eslint-plugin-import/issues/530
[#529]: https://github.com/import-js/eslint-plugin-import/issues/529
[#519]: https://github.com/import-js/eslint-plugin-import/issues/519
[#507]: https://github.com/import-js/eslint-plugin-import/issues/507
[#484]: https://github.com/import-js/eslint-plugin-import/issues/484
[#478]: https://github.com/import-js/eslint-plugin-import/issues/478
[#456]: https://github.com/import-js/eslint-plugin-import/issues/456
[#453]: https://github.com/import-js/eslint-plugin-import/issues/453
[#452]: https://github.com/import-js/eslint-plugin-import/issues/452
[#447]: https://github.com/import-js/eslint-plugin-import/issues/447
[#441]: https://github.com/import-js/eslint-plugin-import/issues/441
[#423]: https://github.com/import-js/eslint-plugin-import/issues/423
[#416]: https://github.com/import-js/eslint-plugin-import/issues/416
[#415]: https://github.com/import-js/eslint-plugin-import/issues/415
[#402]: https://github.com/import-js/eslint-plugin-import/issues/402
[#386]: https://github.com/import-js/eslint-plugin-import/issues/386
[#373]: https://github.com/import-js/eslint-plugin-import/issues/373
[#370]: https://github.com/import-js/eslint-plugin-import/issues/370
[#348]: https://github.com/import-js/eslint-plugin-import/issues/348
[#342]: https://github.com/import-js/eslint-plugin-import/issues/342
[#328]: https://github.com/import-js/eslint-plugin-import/issues/328
[#317]: https://github.com/import-js/eslint-plugin-import/issues/317
[#313]: https://github.com/import-js/eslint-plugin-import/issues/313
[#311]: https://github.com/import-js/eslint-plugin-import/issues/311
[#306]: https://github.com/import-js/eslint-plugin-import/issues/306
[#283]: https://github.com/import-js/eslint-plugin-import/issues/283
[#281]: https://github.com/import-js/eslint-plugin-import/issues/281
[#275]: https://github.com/import-js/eslint-plugin-import/issues/275
[#272]: https://github.com/import-js/eslint-plugin-import/issues/272
[#270]: https://github.com/import-js/eslint-plugin-import/issues/270
[#267]: https://github.com/import-js/eslint-plugin-import/issues/267
[#266]: https://github.com/import-js/eslint-plugin-import/issues/266
[#216]: https://github.com/import-js/eslint-plugin-import/issues/216
[#214]: https://github.com/import-js/eslint-plugin-import/issues/214
[#210]: https://github.com/import-js/eslint-plugin-import/issues/210
[#200]: https://github.com/import-js/eslint-plugin-import/issues/200
[#192]: https://github.com/import-js/eslint-plugin-import/issues/192
[#191]: https://github.com/import-js/eslint-plugin-import/issues/191
[#189]: https://github.com/import-js/eslint-plugin-import/issues/189
[#170]: https://github.com/import-js/eslint-plugin-import/issues/170
[#155]: https://github.com/import-js/eslint-plugin-import/issues/155
[#119]: https://github.com/import-js/eslint-plugin-import/issues/119
[#89]: https://github.com/import-js/eslint-plugin-import/issues/89

[Unreleased]: https://github.com/import-js/eslint-plugin-import/compare/v2.32.0...HEAD
[2.32.0]: https://github.com/import-js/eslint-plugin-import/compare/v2.31.0...v2.32.0
[2.31.0]: https://github.com/import-js/eslint-plugin-import/compare/v2.30.0...v2.31.0
[2.30.0]: https://github.com/import-js/eslint-plugin-import/compare/v2.29.1...v2.30.0
[2.29.1]: https://github.com/import-js/eslint-plugin-import/compare/v2.29.0...v2.29.1
[2.29.0]: https://github.com/import-js/eslint-plugin-import/compare/v2.28.1...v2.29.0
[2.28.1]: https://github.com/import-js/eslint-plugin-import/compare/v2.28.0...v2.28.1
[2.28.0]: https://github.com/import-js/eslint-plugin-import/compare/v2.27.5...v2.28.0
[2.27.5]: https://github.com/import-js/eslint-plugin-import/compare/v2.27.4...v2.27.5
[2.27.4]: https://github.com/import-js/eslint-plugin-import/compare/v2.27.3...v2.27.4
[2.27.3]: https://github.com/import-js/eslint-plugin-import/compare/v2.27.2...v2.27.3
[2.27.2]: https://github.com/import-js/eslint-plugin-import/compare/v2.27.1...v2.27.2
[2.27.1]: https://github.com/import-js/eslint-plugin-import/compare/v2.27.0...v2.27.1
[2.27.0]: https://github.com/import-js/eslint-plugin-import/compare/v2.26.0...v2.27.0
[2.26.0]: https://github.com/import-js/eslint-plugin-import/compare/v2.25.4...v2.26.0
[2.25.4]: https://github.com/import-js/eslint-plugin-import/compare/v2.25.3...v2.25.4
[2.25.3]: https://github.com/import-js/eslint-plugin-import/compare/v2.25.2...v2.25.3
[2.25.2]: https://github.com/import-js/eslint-plugin-import/compare/v2.25.1...v2.25.2
[2.25.1]: https://github.com/import-js/eslint-plugin-import/compare/v2.25.0...v2.25.1
[2.25.0]: https://github.com/import-js/eslint-plugin-import/compare/v2.24.2...v2.25.0
[2.24.2]: https://github.com/import-js/eslint-plugin-import/compare/v2.24.1...v2.24.2
[2.24.1]: https://github.com/import-js/eslint-plugin-import/compare/v2.24.0...v2.24.1
[2.24.0]: https://github.com/import-js/eslint-plugin-import/compare/v2.23.4...v2.24.0
[2.23.4]: https://github.com/import-js/eslint-plugin-import/compare/v2.23.3...v2.23.4
[2.23.3]: https://github.com/import-js/eslint-plugin-import/compare/v2.23.2...v2.23.3
[2.23.2]: https://github.com/import-js/eslint-plugin-import/compare/v2.23.1...v2.23.2
[2.23.1]: https://github.com/import-js/eslint-plugin-import/compare/v2.23.0...v2.23.1
[2.23.0]: https://github.com/import-js/eslint-plugin-import/compare/v2.22.1...v2.23.0
[2.22.1]: https://github.com/import-js/eslint-plugin-import/compare/v2.22.0...v2.22.1
[2.22.0]: https://github.com/import-js/eslint-plugin-import/compare/v2.21.1...v2.22.0
[2.21.2]: https://github.com/import-js/eslint-plugin-import/compare/v2.21.1...v2.21.2
[2.21.1]: https://github.com/import-js/eslint-plugin-import/compare/v2.21.0...v2.21.1
[2.21.0]: https://github.com/import-js/eslint-plugin-import/compare/v2.20.1...v2.21.0
[2.20.1]: https://github.com/import-js/eslint-plugin-import/compare/v2.20.0...v2.20.1
[2.20.0]: https://github.com/import-js/eslint-plugin-import/compare/v2.19.1...v2.20.0
[2.19.1]: https://github.com/import-js/eslint-plugin-import/compare/v2.19.0...v2.19.1
[2.19.0]: https://github.com/import-js/eslint-plugin-import/compare/v2.18.2...v2.19.0
[2.18.2]: https://github.com/import-js/eslint-plugin-import/compare/v2.18.1...v2.18.2
[2.18.1]: https://github.com/import-js/eslint-plugin-import/compare/v2.18.0...v2.18.1
[2.18.0]: https://github.com/import-js/eslint-plugin-import/compare/v2.17.3...v2.18.0
[2.17.3]: https://github.com/import-js/eslint-plugin-import/compare/v2.17.2...v2.17.3
[2.17.2]: https://github.com/import-js/eslint-plugin-import/compare/v2.17.1...v2.17.2
[2.17.1]: https://github.com/import-js/eslint-plugin-import/compare/v2.17.0...v2.17.1
[2.17.0]: https://github.com/import-js/eslint-plugin-import/compare/v2.16.0...v2.17.0
[2.16.0]: https://github.com/import-js/eslint-plugin-import/compare/v2.15.0...v2.16.0
[2.15.0]: https://github.com/import-js/eslint-plugin-import/compare/v2.14.0...v2.15.0
[2.14.0]: https://github.com/import-js/eslint-plugin-import/compare/v2.13.0...v2.14.0
[2.13.0]: https://github.com/import-js/eslint-plugin-import/compare/v2.12.0...v2.13.0
[2.12.0]: https://github.com/import-js/eslint-plugin-import/compare/v2.11.0...v2.12.0
[2.11.0]: https://github.com/import-js/eslint-plugin-import/compare/v2.10.0...v2.11.0
[2.10.0]: https://github.com/import-js/eslint-plugin-import/compare/v2.9.0...v2.10.0
[2.9.0]: https://github.com/import-js/eslint-plugin-import/compare/v2.8.0...v2.9.0
[2.8.0]: https://github.com/import-js/eslint-plugin-import/compare/v2.7.0...v2.8.0
[2.7.0]: https://github.com/import-js/eslint-plugin-import/compare/v2.6.1...v2.7.0
[2.6.1]: https://github.com/import-js/eslint-plugin-import/compare/v2.6.0...v2.6.1
[2.6.0]: https://github.com/import-js/eslint-plugin-import/compare/v2.5.0...v2.6.0
[2.5.0]: https://github.com/import-js/eslint-plugin-import/compare/v2.4.0...v2.5.0
[2.4.0]: https://github.com/import-js/eslint-plugin-import/compare/v2.3.0...v2.4.0
[2.3.0]: https://github.com/import-js/eslint-plugin-import/compare/v2.2.0...v2.3.0
[2.2.0]: https://github.com/import-js/eslint-plugin-import/compare/v2.1.0...v2.2.0
[2.1.0]: https://github.com/import-js/eslint-plugin-import/compare/v2.0.1...v2.1.0
[2.0.1]: https://github.com/import-js/eslint-plugin-import/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/import-js/eslint-plugin-import/compare/v1.16.0...v2.0.0
[1.16.0]: https://github.com/import-js/eslint-plugin-import/compare/v1.15.0...v1.16.0
[1.15.0]: https://github.com/import-js/eslint-plugin-import/compare/v1.14.0...v1.15.0
[1.14.0]: https://github.com/import-js/eslint-plugin-import/compare/v1.13.0...v1.14.0
[1.13.0]: https://github.com/import-js/eslint-plugin-import/compare/v1.12.0...v1.13.0
[1.12.0]: https://github.com/import-js/eslint-plugin-import/compare/v1.11.1...v1.12.0
[1.11.1]: https://github.com/import-js/eslint-plugin-import/compare/v1.11.0...v1.11.1
[1.11.0]: https://github.com/import-js/eslint-plugin-import/compare/v1.10.3...v1.11.0
[1.10.3]: https://github.com/import-js/eslint-plugin-import/compare/v1.10.2...v1.10.3
[1.10.2]: https://github.com/import-js/eslint-plugin-import/compare/v1.10.1...v1.10.2
[1.10.1]: https://github.com/import-js/eslint-plugin-import/compare/v1.10.0...v1.10.1
[1.10.0]: https://github.com/import-js/eslint-plugin-import/compare/v1.9.2...v1.10.0
[1.9.2]: https://github.com/import-js/eslint-plugin-import/compare/v1.9.1...v1.9.2
[1.9.1]: https://github.com/import-js/eslint-plugin-import/compare/v1.9.0...v1.9.1
[1.9.0]: https://github.com/import-js/eslint-plugin-import/compare/v1.8.1...v1.9.0
[1.8.1]: https://github.com/import-js/eslint-plugin-import/compare/v1.8.0...v1.8.1
[1.8.0]: https://github.com/import-js/eslint-plugin-import/compare/v1.7.0...v1.8.0
[1.7.0]: https://github.com/import-js/eslint-plugin-import/compare/v1.6.1...v1.7.0
[1.6.1]: https://github.com/import-js/eslint-plugin-import/compare/v1.6.0...v1.6.1
[1.6.0]: https://github.com/import-js/eslint-plugin-import/compare/v1.5.0...1.6.0
[1.5.0]: https://github.com/import-js/eslint-plugin-import/compare/v1.4.0...v1.5.0
[1.4.0]: https://github.com/import-js/eslint-plugin-import/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/import-js/eslint-plugin-import/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/import-js/eslint-plugin-import/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/import-js/eslint-plugin-import/compare/v1.0.4...v1.1.0
[1.0.4]: https://github.com/import-js/eslint-plugin-import/compare/v1.0.3...v1.0.4
[1.0.3]: https://github.com/import-js/eslint-plugin-import/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/import-js/eslint-plugin-import/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/import-js/eslint-plugin-import/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/import-js/eslint-plugin-import/compare/v1.0.0-beta.0...v1.0.0
[1.0.0-beta.0]: https://github.com/import-js/eslint-plugin-import/compare/v0.13.0...v1.0.0-beta.0
[0.13.0]: https://github.com/import-js/eslint-plugin-import/compare/v0.12.1...v0.13.0
[0.12.2]: https://github.com/import-js/eslint-plugin-import/compare/v0.12.1...v0.12.2
[0.12.1]: https://github.com/import-js/eslint-plugin-import/compare/v0.12.0...v0.12.1
[0.12.0]: https://github.com/import-js/eslint-plugin-import/compare/v0.11.0...v0.12.0
[0.11.0]: https://github.com/import-js/eslint-plugin-import/compare/v0.10.1...v0.11.0

[@1pete]: https://github.com/1pete
[@3nuc]: https://github.com/3nuc
[@aamulumi]: https://github.com/aamulumi
[@aberezkin]: https://github.com/aberezkin
[@adamborowski]: https://github.com/adamborowski
[@adjerbetian]: https://github.com/adjerbetian
[@AdriAt360]: https://github.com/AdriAt360
[@ai]: https://github.com/ai
[@aks-]: https://github.com/aks-
[@akwodkiewicz]: https://github.com/akwodkiewicz
[@aladdin-add]: https://github.com/aladdin-add
[@albertpastrana]: https://github.com/albertpastrana
[@alex-page]: https://github.com/alex-page
[@alexgorbatchev]: https://github.com/alexgorbatchev
[@amsardesai]: https://github.com/amsardesai
[@andreubotella]: https://github.com/andreubotella
[@AndrewLeedham]: https://github.com/AndrewLeedham
[@andyogo]: https://github.com/andyogo
[@aravindet]: https://github.com/aravindet
[@arvigeus]: https://github.com/arvigeus
[@asapach]: https://github.com/asapach
[@astorije]: https://github.com/astorije
[@atav32]: https://github.com/atav32
[@atikenny]: https://github.com/atikenny
[@atos1990]: https://github.com/atos1990
[@azyzz228]: https://github.com/azyzz228
[@barbogast]: https://github.com/barbogast
[@BarryThePenguin]: https://github.com/BarryThePenguin
[@be5invis]: https://github.com/be5invis
[@beatrizrezener]: https://github.com/beatrizrezener
[@benasher44]: https://github.com/benasher44
[@benkrejci]: https://github.com/benkrejci
[@benmosher]: https://github.com/benmosher
[@benmunro]: https://github.com/benmunro
[@BenoitZugmeyer]: https://github.com/BenoitZugmeyer
[@bertyhell]: https://github.com/bertyhell
[@bicstone]: https://github.com/bicstone
[@Blasz]: https://github.com/Blasz
[@bmish]: https://github.com/bmish
[@borisyankov]: https://github.com/borisyankov
[@bradennapier]: https://github.com/bradennapier
[@bradzacher]: https://github.com/bradzacher
[@brendo]: https://github.com/brendo
[@brettz9]: https://github.com/brettz9
[@chabb]: https://github.com/chabb
[@Chamion]: https://github.com/Chamion
[@charlessuh]: https://github.com/charlessuh
[@charpeni]: https://github.com/charpeni
[@cherryblossom000]: https://github.com/cherryblossom000
[@chrislloyd]: https://github.com/chrislloyd
[@christianvuerings]: https://github.com/christianvuerings
[@christophercurrie]: https://github.com/christophercurrie
[@cristobal]: https://github.com/cristobal
[@DamienCassou]: https://github.com/DamienCassou
[@danny-andrews]: https://github.com/dany-andrews
[@darkartur]: https://github.com/darkartur
[@davidbonnet]: https://github.com/davidbonnet
[@dbrewer5]: https://github.com/dbrewer5
[@developer-bandi]: https://github.com/developer-bandi
[@devinrhode2]: https://github.com/devinrhode2
[@devongovett]: https://github.com/devongovett
[@dmnd]: https://github.com/dmnd
[@domdomegg]: https://github.com/domdomegg
[@duncanbeevers]: https://github.com/duncanbeevers
[@dwardu]: https://github.com/dwardu
[@echenley]: https://github.com/echenley
[@edemaine]: https://github.com/edemaine
[@eelyafi]: https://github.com/eelyafi
[@Ephem]: https://github.com/Ephem
[@ephys]: https://github.com/ephys
[@eps1lon]: https://github.com/eps1lon
[@ernestostifano]: https://github.com/ernestostifano
[@ertrzyiks]: https://github.com/ertrzyiks
[@fa93hws]: https://github.com/fa93hws
[@Fdawgs]: https://github.com/Fdawgs
[@fengkfengk]: https://github.com/fengkfengk
[@fernandopasik]: https://github.com/fernandopasik
[@feychenie]: https://github.com/feychenie
[@fisker]: https://github.com/fisker
[@FloEdelmann]: https://github.com/FloEdelmann
[@fooloomanzoo]: https://github.com/fooloomanzoo
[@foray1010]: https://github.com/foray1010
[@forivall]: https://github.com/forivall
[@fsmaia]: https://github.com/fsmaia
[@fson]: https://github.com/fson
[@futpib]: https://github.com/futpib
[@G-Rath]: https://github.com/G-Rath
[@gajus]: https://github.com/gajus
[@gausie]: https://github.com/gausie
[@gavriguy]: https://github.com/gavriguy
[@georeith]: https://github.com/georeith
[@giodamelio]: https://github.com/giodamelio
[@gnprice]: https://github.com/gnprice
[@GoldStrikeArch]: https://github.com/GoldStrikeArch
[@golergka]: https://github.com/golergka
[@golopot]: https://github.com/golopot
[@GoodForOneFare]: https://github.com/GoodForOneFare
[@graingert]: https://github.com/graingert
[@greim]: https://github.com/greim
[@grit96]: https://github.com/grit96
[@guilhermelimak]: https://github.com/guilhermelimak
[@guillaumewuip]: https://github.com/guillaumewuip
[@hayes]: https://github.com/hayes
[@himynameisdave]: https://github.com/himynameisdave
[@hulkish]: https://github.com/hulkish
[@hyperupcall]: https://github.com/hyperupcall
[@Hypnosphi]: https://github.com/Hypnosphi
[@intellix]: https://github.com/intellix
[@isiahmeadows]: https://github.com/isiahmeadows
[@IvanGoncharov]: https://github.com/IvanGoncharov
[@ivo-stefchev]: https://github.com/ivo-stefchev
[@jablko]: https://github.com/jablko
[@jakubsta]: https://github.com/jakubsta
[@jeffshaver]: https://github.com/jeffshaver
[@jf248]: https://github.com/jf248
[@jfmengels]: https://github.com/jfmengels
[@JiangWeixian]: https://github.com/JiangWeixian
[@jimbolla]: https://github.com/jimbolla
[@jkimbo]: https://github.com/jkimbo
[@joaovieira]: https://github.com/joaovieira
[@joe-matsec]: https://github.com/joe-matsec
[@joeyguerra]: https://github.com/joeyguerra
[@johndevedu]: https://github.com/johndevedu
[@johnthagen]: https://github.com/johnthagen
[@jonboiser]: https://github.com/jonboiser
[@josh]: https://github.com/josh
[@joshuaobrien]: https://github.com/joshuaobrien
[@JounQin]: https://github.com/JounQin
[@jquense]: https://github.com/jquense
[@jseminck]: https://github.com/jseminck
[@julien1619]: https://github.com/julien1619
[@justinanastos]: https://github.com/justinanastos
[@jwbth]: https://github.com/jwbth
[@k15a]: https://github.com/k15a
[@kentcdodds]: https://github.com/kentcdodds
[@kevin940726]: https://github.com/kevin940726
[@kgregory]: https://github.com/kgregory
[@kinland]: https://github.com/kinland
[@kirill-konshin]: https://github.com/kirill-konshin
[@kiwka]: https://github.com/kiwka
[@klimashkin]: https://github.com/klimashkin
[@kmui2]: https://github.com/kmui2
[@knpwrs]: https://github.com/knpwrs
[@KostyaZgara]: https://github.com/KostyaZgara
[@kylemh]: https://github.com/kylemh
[@laurens-dg]: https://github.com/laurens-dg
[@laysent]: https://github.com/laysent
[@le0nik]: https://github.com/le0nik
[@leipert]: https://github.com/leipert
[@lemonmade]: https://github.com/lemonmade
[@lencioni]: https://github.com/lencioni
[@leonardodino]: https://github.com/leonardodino
[@Librazy]: https://github.com/Librazy
[@liby]: https://github.com/liby
[@lilling]: https://github.com/lilling
[@liuxingbaoyu]: https://github.com/liuxingbaoyu
[@ljharb]: https://github.com/ljharb
[@ljqx]: https://github.com/ljqx
[@lnuvy]: https://github.com/lnuvy
[@lo1tuma]: https://github.com/lo1tuma
[@loganfsmyth]: https://github.com/loganfsmyth
[@luczsoma]: https://github.com/luczsoma
[@ludofischer]: https://github.com/ludofischer
[@Lukas-Kullmann]: https://github.com/Lukas-Kullmann
[@lukeapage]: https://github.com/lukeapage
[@lydell]: https://github.com/lydell
[@magarcia]: https://github.com/magarcia
[@Mairu]: https://github.com/Mairu
[@malykhinvi]: https://github.com/malykhinvi
[@manovotny]: https://github.com/manovotny
[@manuth]: https://github.com/manuth
[@marcusdarmstrong]: https://github.com/marcusdarmstrong
[@mastilver]: https://github.com/mastilver
[@mathieudutour]: https://github.com/mathieudutour
[@MatthiasKunnen]: https://github.com/MatthiasKunnen
[@mattijsbliek]: https://github.com/mattijsbliek
[@Maxim-Mazurok]: https://github.com/Maxim-Mazurok
[@maxkomarychev]: https://github.com/maxkomarychev
[@maxmalov]: https://github.com/maxmalov
[@meowtec]: https://github.com/meowtec
[@mgwalker]: https://github.com/mgwalker
[@mhmadhamster]: https://github.com/MhMadHamster
[@michaelfaith]: https://github.com/michaelfaith
[@mihkeleidast]: https://github.com/mihkeleidast
[@MikeyBeLike]: https://github.com/MikeyBeLike
[@minervabot]: https://github.com/minervabot
[@mpint]: https://github.com/mpint
[@mplewis]: https://github.com/mplewis
[@mrmckeb]: https://github.com/mrmckeb
[@msvab]: https://github.com/msvab
[@mulztob]: https://github.com/mulztob
[@mx-bernhard]: https://github.com/mx-bernhard
[@Nfinished]: https://github.com/Nfinished
[@nickofthyme]: https://github.com/nickofthyme
[@nicolashenry]: https://github.com/nicolashenry
[@NishargShah]: https://github.com/NishargShah
[@noelebrun]: https://github.com/noelebrun
[@ntdb]: https://github.com/ntdb
[@nwalters512]: https://github.com/nwalters512
[@ombene]: https://github.com/ombene
[@ota-meshi]: https://github.com/ota-meshi
[@OutdatedVersion]: https://github.com/OutdatedVersion
[@Pandemic1617]: https://github.com/Pandemic1617
[@panrafal]: https://github.com/panrafal
[@paztis]: https://github.com/paztis
[@pcorpet]: https://github.com/pcorpet
[@Pearce-Ropion]: https://github.com/Pearce-Ropion
[@Pessimistress]: https://github.com/Pessimistress
[@phryneas]: https://github.com/phryneas
[@pmcelhaney]: https://github.com/pmcelhaney
[@preco21]: https://github.com/preco21
[@pri1311]: https://github.com/pri1311
[@ProdigySim]: https://github.com/ProdigySim
[@pzhine]: https://github.com/pzhine
[@ramasilveyra]: https://github.com/ramasilveyra
[@randallreedjr]: https://github.com/randallreedjr
[@redbugz]: https://github.com/redbugz
[@remcohaszing]: https://github.com/remcohaszing
[@rfermann]: https://github.com/rfermann
[@rhettlivingston]: https://github.com/rhettlivingston
[@rhys-vdw]: https://github.com/rhys-vdw
[@richardxia]: https://github.com/richardxia
[@robertrossmann]: https://github.com/robertrossmann
[@rosswarren]: https://github.com/rosswarren
[@rperello]: https://github.com/rperello
[@rsolomon]: https://github.com/rsolomon
[@RyanGst]: https://github.com/
[@s-h-a-d-o-w]: https://github.com/s-h-a-d-o-w
[@saschanaz]: https://github.com/saschanaz
[@schmidsi]: https://github.com/schmidsi
[@schmod]: https://github.com/schmod
[@Schweinepriester]: https://github.com/Schweinepriester
[@scottnonnenberg]: https://github.com/scottnonnenberg
[@sergei-startsev]: https://github.com/sergei-startsev
[@sevenc-nanashi]: https://github.com/sevenc-nanashi
[@sharmilajesupaul]: https://github.com/sharmilajesupaul
[@sheepsteak]: https://github.com/sheepsteak
[@silverwind]: https://github.com/silverwind
[@silviogutierrez]: https://github.com/silviogutierrez
[@SimenB]: https://github.com/SimenB
[@simmo]: https://github.com/simmo
[@sindresorhus]: https://github.com/sindresorhus
[@singles]: https://github.com/singles
[@skozin]: https://github.com/skozin
[@skyrpex]: https://github.com/skyrpex
[@snewcomer]: https://github.com/snewcomer
[@sompylasar]: https://github.com/sompylasar
[@soryy708]: https://github.com/soryy708
[@sosukesuzuki]: https://github.com/sosukesuzuki
[@spalger]: https://github.com/spalger
[@st-sloth]: https://github.com/st-sloth
[@stekycz]: https://github.com/stekycz
[@stenin-nikita]: https://github.com/stenin-nikita
[@stephtr]: https://github.com/stephtr
[@straub]: https://github.com/straub
[@strawbrary]: https://github.com/strawbrary
[@stropho]: https://github.com/stropho
[@sveyret]: https://github.com/sveyret
[@swernerx]: https://github.com/swernerx
[@syymza]: https://github.com/syymza
[@TakeScoop]: https://github.com/TakeScoop
[@tapayne88]: https://github.com/tapayne88
[@Taranys]: https://github.com/Taranys
[@taye]: https://github.com/taye
[@TheCrueltySage]: https://github.com/TheCrueltySage
[@TheJaredWilcurt]: https://github.com/TheJaredWilcurt
[@tihonove]: https://github.com/tihonove
[@timkraut]: https://github.com/timkraut
[@tizmagik]: https://github.com/tizmagik
[@tomprats]: https://github.com/tomprats
[@TrevorBurnham]: https://github.com/TrevorBurnham
[@ttmarek]: https://github.com/ttmarek
[@unbeauvoyage]: https://github.com/unbeauvoyage
[@vikr01]: https://github.com/vikr01
[@wenfangdu]: https://github.com/wenfangdu
[@wKich]: https://github.com/wKich
[@wschurman]: https://github.com/wschurman
[@wtgtybhertgeghgtwtg]: https://github.com/wtgtybhertgeghgtwtg
[@xM8WVqaG]: https://github.com/xM8WVqaG
[@xpl]: https://github.com/xpl
[@Xunnamius]: https://github.com/Xunnamius
[@yesl-kim]: https://github.com/yesl-kim
[@yndajas]: https://github.com/yndajas
[@yordis]: https://github.com/yordis
[@Zamiell]: https://github.com/Zamiell
[@zloirock]: https://github.com/zloirock
