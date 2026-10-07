# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.0.0](https://github.com/webpack-contrib/style-loader/compare/v1.3.0...v2.0.0) (2020-10-09)


### ⚠ BREAKING CHANGES

* minimum supported `Node.js` version is `10.13.0`
* the `esModule` option is `true` by default, you need to change `const locals = require('./styles.css')`/`require('./styles.css')` on `import locals from './styles.css'`/`import './styles.css''` ([#489](https://github.com/webpack-contrib/style-loader/issues/489)) ([727a24d](https://github.com/webpack-contrib/style-loader/commit/727a24d173a4d71a4100ffc2a37ab6c6684a6301))
* removed support for loaders returning `String` instead of `Array` ([#491](https://github.com/webpack-contrib/style-loader/issues/491)) ([7a0ce4c](https://github.com/webpack-contrib/style-loader/commit/7a0ce4cfd19a2be6ad8ffe274d38618a77b22199))

### ⚠ NOTICE

To avoid problems between `style-loader` and `mini-css-extract-plugin` because of changing the `esModule` option to `true` by default we strongly recommend upgrading `mini-css-extract-plugin` to `1.0.0` version.

## [1.3.0](https://github.com/webpack-contrib/style-loader/compare/v1.2.1...v1.3.0) (2020-10-03)

### Features

* added `modules.namedExport` ([#485](https://github.com/webpack-contrib/style-loader/issues/485)) ([15889db](https://github.com/webpack-contrib/style-loader/commit/15889db9a2d5d51712fc12e03b12a60c22fc33f4))


### Bug Fixes

* check if `btoa` exists for old IE versions ([#479](https://github.com/webpack-contrib/style-loader/issues/479)) ([732ef8b](https://github.com/webpack-contrib/style-loader/commit/732ef8bcb60ae72c3a84d3fa639f1eae6f26bbdc))
* esModule option issue ([#476](https://github.com/webpack-contrib/style-loader/issues/476)) ([c623f27](https://github.com/webpack-contrib/style-loader/commit/c623f2750b0358492c7bf2dde0326a1c71c46f4f))

### [1.2.1](https://github.com/webpack-contrib/style-loader/compare/v1.2.0...v1.2.1) (2020-04-28)


### Bug Fixes

* hot module replacement logic for lazy type ([#468](https://github.com/webpack-contrib/style-loader/issues/468)) ([88a5c2b](https://github.com/webpack-contrib/style-loader/commit/88a5c2bdb3405aa5cb889726f3908747106a6c01))

## [1.2.0](https://github.com/webpack-contrib/style-loader/compare/v1.1.4...v1.2.0) (2020-04-24)


### Features

* hot module replacement for css modules ([6d14e0a](https://github.com/webpack-contrib/style-loader/commit/6d14e0aa7bac1d8ba8e60b4d12f7cd33078763b7))

### [1.1.4](https://github.com/webpack-contrib/style-loader/compare/v1.1.3...v1.1.4) (2020-04-15)


# Chore

* update deps


### [1.1.3](https://github.com/webpack-contrib/style-loader/compare/v1.1.2...v1.1.3) (2020-01-17)


### Bug Fixes

* injection algorithm ([#456](https://github.com/webpack-contrib/style-loader/issues/456)) ([236b243](https://github.com/webpack-contrib/style-loader/commit/236b2436fb0003eeba5f0aa33e7caf9f35d4fc7a))

### [1.1.2](https://github.com/webpack-contrib/style-loader/compare/v1.1.1...v1.1.2) (2019-12-25)


### Bug Fixes

* algorithm for importing modules ([#449](https://github.com/webpack-contrib/style-loader/issues/449)) ([91ceaf2](https://github.com/webpack-contrib/style-loader/commit/91ceaf2b7e03f065d2a8cace1b733777848d4e86))
* checking that the list of modules is an array ([#448](https://github.com/webpack-contrib/style-loader/issues/448)) ([1138ed7](https://github.com/webpack-contrib/style-loader/commit/1138ed7e04848b570a70e493b410902cfc4a9076))

### [1.1.1](https://github.com/webpack-contrib/style-loader/compare/v1.1.0...v1.1.1) (2019-12-20)


### Bug Fixes

* add empty default export for `linkTag` value ([7ee8b04](https://github.com/webpack-contrib/style-loader/commit/7ee8b04fd519847cef93052c31efa0d0012ed54e))

## [1.1.0](https://github.com/webpack-contrib/style-loader/compare/v1.0.2...v1.1.0) (2019-12-20)


### Features

* `esModule` option ([#441](https://github.com/webpack-contrib/style-loader/issues/441)) ([3415266](https://github.com/webpack-contrib/style-loader/commit/3415266f58f2be00bec1d66ae9e658437e0d0a6c))


### Bug Fixes

* order of imported styles ([#443](https://github.com/webpack-contrib/style-loader/issues/443)) ([c7d6e3a](https://github.com/webpack-contrib/style-loader/commit/c7d6e3a3fba63a76e8f342d84e00b69af92c7ebc))

### [1.0.2](https://github.com/webpack-contrib/style-loader/compare/v1.0.1...v1.0.2) (2019-12-17)


### Bug Fixes

* support ES module syntax ([#435](https://github.com/webpack-contrib/style-loader/issues/435)) ([dcbfadb](https://github.com/webpack-contrib/style-loader/commit/dcbfadb4245e7f0ce888aafc138cbac27d053915))

### [1.0.1](https://github.com/webpack-contrib/style-loader/compare/v1.0.0...v1.0.1) (2019-11-28)


### Bug Fixes

* compatibility `linkTag` with ES module syntax ([#429](https://github.com/webpack-contrib/style-loader/issues/429)) ([2cdb9c3](https://github.com/webpack-contrib/style-loader/commit/2cdb9c3f51edebec69e8b22ff43b520a5e1c679b))

## [1.0.0](https://github.com/webpack-contrib/style-loader/compare/v0.23.1...v1.0.0) (2019-08-06)


### Bug Fixes

* es3 compatibility ([#390](https://github.com/webpack-contrib/style-loader/issues/390)) ([ae24ec2](https://github.com/webpack-contrib/style-loader/commit/ae24ec2))
* restore original hot reloading behaviour for locals ([#419](https://github.com/webpack-contrib/style-loader/issues/419)) ([f026429](https://github.com/webpack-contrib/style-loader/commit/f026429))
* better handle source maps ([#383](https://github.com/webpack-contrib/style-loader/issues/383)) ([84ec8e5](https://github.com/webpack-contrib/style-loader/commit/84ec8e5))


### Features

* new `injectType` option ([e2664e9](https://github.com/webpack-contrib/style-loader/commit/e2664e9))
* remove type `text/css` from style and link element ([#399](https://github.com/webpack-contrib/style-loader/issues/399)) ([b0187d6](https://github.com/webpack-contrib/style-loader/commit/b0187d6))


### BREAKING CHANGES

* minimum required Node.js version is `8.9.0`
* minimum required `wepback` version is `4.0.0`
* the `convertToAbsoluteUrls` option was removed, you don't need this anymore
* the `attrs` option was renamed to the `attributes` option
* the `transform` option was removed without replacement
* the `hmr` option was removed, `webpack` automatically inject HMR code when it is required (when the `HotModuleReplacementPlugin` plugin was used)
* the `sourceMap` option was removed. The loader automatically inject source maps if the previous loader emit them
* the `ref`/`unref` api methods were removed for `useable` loader, please use the `use`/`unuse` api methods
* the `style-loader/url` loader was removed in favor `injectType` option (look the documentation about the `injectType` option)
* the `style-loader/useable` loader was removed in favor `injectType` option (look the documentation about the `injectType` option)
* the `singleton` option was removed (look documentation about the `injectType` option)
* the `insertAt` option was removed in favor the `insert` option (look the documentation about the `insert` option and examples)
* the `insertInto` options was removed in favor the `insert` option (look the documentation about the `insert` option and examples)


<a name="0.23.1"></a>
## [0.23.1](https://github.com/webpack-contrib/style-loader/compare/v0.23.0...v0.23.1) (2018-10-08)


### Bug Fixes

* **addStyles:** support exports of transpiled transforms (`options.transform`) ([#333](https://github.com/webpack-contrib/style-loader/issues/333)) ([33aebed](https://github.com/webpack-contrib/style-loader/commit/33aebed))



<a name="0.23.0"></a>
# [0.23.0](https://github.com/webpack-contrib/style-loader/compare/v0.22.1...v0.23.0) (2018-08-27)


### Features

* **useable:** add `insertInto` support (`options.insertInto`) ([#341](https://github.com/webpack-contrib/style-loader/issues/341)) ([2588aca](https://github.com/webpack-contrib/style-loader/commit/2588aca))



<a name="0.22.1"></a>
## [0.22.1](https://github.com/webpack-contrib/style-loader/compare/v0.22.0...v0.22.1) (2018-08-08)


### Bug Fixes

* **addStyles:** use `var` instead of `const` (IE fix) ([#338](https://github.com/webpack-contrib/style-loader/issues/338)) ([1ca12ab](https://github.com/webpack-contrib/style-loader/commit/1ca12ab))



<a name="0.22.0"></a>
# [0.22.0](https://github.com/webpack-contrib/style-loader/compare/v0.21.0...v0.22.0) (2018-08-07)


### Bug Fixes

* insertInto and insertAt collaboration ([#325](https://github.com/webpack-contrib/style-loader/issues/325)) ([c7d8fec](https://github.com/webpack-contrib/style-loader/commit/c7d8fec))


### Features

* add support for __webpack_nonce__ ([#319](https://github.com/webpack-contrib/style-loader/issues/319)) ([fc24512](https://github.com/webpack-contrib/style-loader/commit/fc24512))



<a name="0.21.0"></a>
# [0.21.0](https://github.com/webpack-contrib/style-loader/compare/v0.20.3...v0.21.0) (2018-04-18)


### Features

* enable tag type configuration ([#316](https://github.com/webpack-contrib/style-loader/issues/316)) ([892cba5](https://github.com/webpack-contrib/style-loader/commit/892cba5))



<a name="0.20.3"></a>
## [0.20.3](https://github.com/webpack-contrib/style-loader/compare/v0.20.2...v0.20.3) (2018-03-09)


### Bug Fixes

* **package:** update `schema-utils` v0.4.3...0.4.5 (`dependencies`) ([#308](https://github.com/webpack-contrib/style-loader/issues/308)) ([9455888](https://github.com/webpack-contrib/style-loader/commit/9455888))



<a name="0.20.2"></a>
## [0.20.2](https://github.com/webpack-contrib/style-loader/compare/v0.20.1...v0.20.2) (2018-02-15)


### Bug Fixes

* **urls:** skip empty `url()` handling ([#304](https://github.com/webpack-contrib/style-loader/issues/304)) ([64f12dc](https://github.com/webpack-contrib/style-loader/commit/64f12dc))



<a name="0.20.1"></a>
## [0.20.1](https://github.com/webpack-contrib/style-loader/compare/v0.20.0...v0.20.1) (2018-01-26)


### Bug Fixes

* **index:** source code indentation ([#299](https://github.com/webpack-contrib/style-loader/issues/299)) ([b4642e7](https://github.com/webpack-contrib/style-loader/commit/b4642e7))



<a name="0.20.0"></a>
# [0.20.0](https://github.com/webpack-contrib/style-loader/compare/v0.19.1...v0.20.0) (2018-01-26)


### Bug Fixes

* **addStyles:** check if `HTMLIFrameElement` exist ([#296](https://github.com/webpack-contrib/style-loader/issues/296)) ([9b46128](https://github.com/webpack-contrib/style-loader/commit/9b46128))
* **index:** enable HMR in case `locals` (`css-modules`) are unchanged ([#298](https://github.com/webpack-contrib/style-loader/issues/298)) ([3a4cb53](https://github.com/webpack-contrib/style-loader/commit/3a4cb53))
* **options:** add `transform` option validation (`{String}`) ([23c3567](https://github.com/webpack-contrib/style-loader/commit/23c3567))
* **options:** support passing a `{Function}` (`options.insertInto`) ([e0c4b19](https://github.com/webpack-contrib/style-loader/commit/e0c4b19))


### Features

* support passing a `{Function}` (`options.insertInto`) ([#279](https://github.com/webpack-contrib/style-loader/issues/279)) ([0eb8fe7](https://github.com/webpack-contrib/style-loader/commit/0eb8fe7))



<a name="0.19.1"></a>
## [0.19.1](https://github.com/webpack/style-loader/compare/v0.19.0...v0.19.1) (2017-12-14)


### Bug Fixes

* **addStyles:** correctly check `singleton` behavior when `{Boolean}` (`options.singleton`) ([#285](https://github.com/webpack/style-loader/issues/285)) ([2bfc93e](https://github.com/webpack/style-loader/commit/2bfc93e))



<a name="0.19.0"></a>
# [0.19.0](https://github.com/webpack/style-loader/compare/v0.18.2...v0.19.0) (2017-10-03)


### Features

* add option to enable/disable HMR (`options.hmr`) ([#264](https://github.com/webpack/style-loader/issues/264)) ([378e906](https://github.com/webpack/style-loader/commit/378e906))
* add support for iframes (`options.insertInto`) ([#248](https://github.com/webpack/style-loader/issues/248)) ([25e8e89](https://github.com/webpack/style-loader/commit/25e8e89))
* support 'before' insertions (`options.insertAt`) ([#253](https://github.com/webpack/style-loader/issues/253)) ([67120f8](https://github.com/webpack/style-loader/commit/67120f8))



<a name="0.18.2"></a>
## [0.18.2](https://github.com/webpack/style-loader/compare/v0.18.1...v0.18.2) (2017-06-05)


### Bug Fixes

* **url:** use `loaderUtils.stringifyRequest` to avoid invalidating hashes due to absolute paths ([#242](https://github.com/webpack/style-loader/issues/242)) ([97508ec](https://github.com/webpack/style-loader/commit/97508ec))
* Add `null` check to `removeStyleElement` ([#245](https://github.com/webpack/style-loader/issues/245)) ([0a4845c](https://github.com/webpack/style-loader/commit/0a4845c))



<a name="0.18.1"></a>
## [0.18.1](https://github.com/webpack/style-loader/compare/v0.18.0...v0.18.1) (2017-05-23)


### Bug Fixes

* **addStyles:** revert merged loops ([#236](https://github.com/webpack/style-loader/issues/236)) ([fbd04b1](https://github.com/webpack/style-loader/commit/fbd04b1))



<a name="0.18.0"></a>
# [0.18.0](https://github.com/webpack/style-loader/compare/v0.17.0...v0.18.0) (2017-05-22)


### Bug Fixes

* stringify the options.transform request ([#230](https://github.com/webpack/style-loader/issues/230)) ([5888095](https://github.com/webpack/style-loader/commit/5888095))


### Features

* add options validation ([#224](https://github.com/webpack/style-loader/issues/224)) ([4b6b70d](https://github.com/webpack/style-loader/commit/4b6b70d))



<a name="0.17.0"></a>
# [0.17.0](https://github.com/webpack/style-loader/compare/v0.16.1...v0.17.0) (2017-05-01)


### Features

* add option.base ([#164](https://github.com/webpack/style-loader/issues/164)) ([e4ac886](https://github.com/webpack/style-loader/commit/e4ac886))
* add option.transform ([#146](https://github.com/webpack/style-loader/issues/146)) ([1c3943f](https://github.com/webpack/style-loader/commit/1c3943f))



<a name="0.16.1"></a>
## [0.16.1](https://github.com/webpack/style-loader/compare/v0.16.0...v0.16.1) (2017-03-28)


### Bug Fixes

* negative refs ([#122](https://github.com/webpack/style-loader/issues/122)) ([f6f577a](https://github.com/webpack/style-loader/commit/f6f577a))



<a name="0.16.0"></a>
# [0.16.0](https://github.com/webpack/style-loader/compare/v0.15.0...v0.16.0) (2017-03-22)


### Bug Fixes

* **addStyles:** update for test for old IE versions ([#196](https://github.com/webpack/style-loader/issues/196)) ([1f68495](https://github.com/webpack/style-loader/commit/1f68495))


### Features

* Set custom attributes for tag in url mode ([#198](https://github.com/webpack/style-loader/issues/198)) ([2c4f427](https://github.com/webpack/style-loader/commit/2c4f427))



<a name="0.15.0"></a>
# [0.15.0](https://github.com/webpack/style-loader/compare/v0.14.1...v0.15.0) (2017-03-21)


### Bug Fixes

* match parens recursively on URLs to not fix embeded calls ([#192](https://github.com/webpack/style-loader/issues/192)) ([71e0908](https://github.com/webpack/style-loader/commit/71e0908))


### Features

* add insertInto option ([#135](https://github.com/webpack/style-loader/issues/135)) ([6636868](https://github.com/webpack/style-loader/commit/6636868))



<a name="0.14.1"></a>
## [0.14.1](https://github.com/webpack/style-loader/compare/v0.14.0...v0.14.1) (2017-03-15)


### Bug Fixes

* syntax error in IE10 and below because of `const` keyword ([#190](https://github.com/webpack/style-loader/issues/190)) ([01080cf](https://github.com/webpack/style-loader/commit/01080cf))



<a name="0.14.0"></a>
# [0.14.0](https://github.com/webpack/style-loader/compare/v0.13.1...v0.14.0) (2017-03-15)


### Bug Fixes

* Adds type attr. to the generated link element ([2a2f261](https://github.com/webpack/style-loader/commit/2a2f261))
* **fixUrls:** add param to fix relative urls ([#186](https://github.com/webpack/style-loader/issues/186)) ([19959ee](https://github.com/webpack/style-loader/commit/19959ee))
* **usable:** Export locals if available([#128](https://github.com/webpack/style-loader/issues/128)) ([e280cb6](https://github.com/webpack/style-loader/commit/e280cb6))


### Features

* **tag-attribute:** Add support for custom tag attribute ([995f3de](https://github.com/webpack/style-loader/commit/995f3de))
