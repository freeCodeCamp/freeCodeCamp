const {
  targets: listOfPolyfillsByTarget, // object with targets for each module
} = require(`core-js-compat`)({
  // get all polyfills necessary for IE11, chrome > 63 or safari < 12.1
  // This will give us a comprehensive list of all polyfills of legacy polyfills and modern polyfills.
  // Core-js will give us output like:
  //   "es.symbol.match-all": {
  //     "chrome": "64",
  //     "ie": "11",
  //     "safari": "3.1"
  //   },
  //   "es.symbol.replace": {
  //     "ie": "11",
  //     "safari": "3.1"
  //   },
  // With this matrix we can remove all modern polyfills like es.symbol.match-all from the exclude list so babel-preset-env
  // can still polyfill them for our users.
  targets: `IE 11, chrome > 63, safari <= 12.1`,
  filter: /^(es)\./,
})

const listOfLegacyPolyfills = []
Object.keys(listOfPolyfillsByTarget).forEach(polyfill => {
  const targets = listOfPolyfillsByTarget[polyfill]
  // only add a list of polyfills that are necessary for IE, we don't want to exclude promise.finally...
  if (!targets.chrome) {
    listOfLegacyPolyfills.push(polyfill)
  }
})

module.exports = {
  // Is imported inside the legacy polyfill file
  LEGACY_POLYFILLS: [
    `features/array/copy-within`,
    `features/array/fill`,
    `features/array/find`,
    `features/array/find-index`,
    `features/array/flat-map`,
    `features/array/flat`,
    `features/array/from`,
    `features/array/includes`,
    `features/array/iterator`,
    `features/array/of`,
    `features/function/has-instance`,
    `features/function/name`,
    `features/map`,
    `features/set`,
    `features/weak-map`,
    `features/weak-set`,
    `features/number/constructor`,
    `features/number/epsilon`,
    `features/number/is-finite`,
    `features/number/is-integer`,
    `features/number/is-nan`,
    `features/number/is-safe-integer`,
    `features/number/max-safe-integer`,
    `features/number/min-safe-integer`,
    `features/object/entries`,
    `features/object/get-own-property-descriptors`,
    `features/object/is`,
    `features/object/keys`,
    `features/object/values`,
    `features/string/code-point-at`,
    `features/string/ends-with`,
    `features/string/from-code-point`,
    `features/string/includes`,
    `features/string/iterator`,
    `features/string/pad-start`,
    `features/string/pad-end`,
    `features/string/raw`,
    `features/string/repeat`,
    `features/string/starts-with`,
    `features/string/trim-start`,
    `features/string/trim-end`,
    `features/reflect`,
    `features/regexp`,
    `features/symbol`,
    `features/promise`,
    `features/dom-collections`,
  ],
  // Will be used by preset-env to exclude already polyfilled features from the automatic polyfilling option
  CORE_JS_POLYFILL_EXCLUDE_LIST: [
    ...listOfLegacyPolyfills,
    `es.object.assign`,

    // These are added by default as the check in babel-preset-env isn't thorough enough
    // ex if .forEach is used it adds a bunch of iterator polyfills even if it has nothing to do with that
    `es.array.iterator`,
    `es.promise`,
    `es.symbol.description`,
    `web.*`,

    // core-js@3.7.0 added extra polyfill for reduce & reduce-right because of bug - we don't care about that bug, we're already on chrome 87
    `es.array.reduce`,
    `es.array.reduce-right`,
  ],
}
