const Benchmark = require('benchmark')
const suite = new Benchmark.Suite()
const { inspect } = require('util')
const jsonStringifySafe = require('json-stringify-safe')
const fastSafeStringify = require('./')

const array = new Array(10).fill(0).map((_, i) => i)
const obj = { foo: array }
const circ = JSON.parse(JSON.stringify(obj))
circ.o = { obj: circ, array }
const circGetters = JSON.parse(JSON.stringify(obj))
Object.assign(circGetters, { get o () { return { obj: circGetters, array } } })

const deep = require('./package.json')
deep.deep = JSON.parse(JSON.stringify(deep))
deep.deep.deep = JSON.parse(JSON.stringify(deep))
deep.deep.deep.deep = JSON.parse(JSON.stringify(deep))
deep.array = array

const deepCirc = JSON.parse(JSON.stringify(deep))
deepCirc.deep.deep.deep.circ = deepCirc
deepCirc.deep.deep.circ = deepCirc
deepCirc.deep.circ = deepCirc
deepCirc.array = array

const deepCircGetters = JSON.parse(JSON.stringify(deep))
for (let i = 0; i < 10; i++) {
  deepCircGetters[i.toString()] = {
    deep: {
      deep: {
        get circ () { return deep.deep },
        deep: { get circ () { return deep.deep.deep } }
      },
      get circ () { return deep }
    },
    get array () { return array }
  }
}

const deepCircNonCongifurableGetters = JSON.parse(JSON.stringify(deep))
Object.defineProperty(deepCircNonCongifurableGetters.deep.deep.deep, 'circ', {
  get: () => deepCircNonCongifurableGetters,
  enumerable: true,
  configurable: false
})
Object.defineProperty(deepCircNonCongifurableGetters.deep.deep, 'circ', {
  get: () => deepCircNonCongifurableGetters,
  enumerable: true,
  configurable: false
})
Object.defineProperty(deepCircNonCongifurableGetters.deep, 'circ', {
  get: () => deepCircNonCongifurableGetters,
  enumerable: true,
  configurable: false
})
Object.defineProperty(deepCircNonCongifurableGetters, 'array', {
  get: () => array,
  enumerable: true,
  configurable: false
})

suite.add('util.inspect:          simple object                 ', function () {
  inspect(obj, { showHidden: false, depth: null })
})
suite.add('util.inspect:          circular                      ', function () {
  inspect(circ, { showHidden: false, depth: null })
})
suite.add('util.inspect:          circular getters              ', function () {
  inspect(circGetters, { showHidden: false, depth: null })
})
suite.add('util.inspect:          deep                          ', function () {
  inspect(deep, { showHidden: false, depth: null })
})
suite.add('util.inspect:          deep circular                 ', function () {
  inspect(deepCirc, { showHidden: false, depth: null })
})
suite.add('util.inspect:          large deep circular getters   ', function () {
  inspect(deepCircGetters, { showHidden: false, depth: null })
})
suite.add('util.inspect:          deep non-conf circular getters', function () {
  inspect(deepCircNonCongifurableGetters, { showHidden: false, depth: null })
})

suite.add('\njson-stringify-safe:   simple object                 ', function () {
  jsonStringifySafe(obj)
})
suite.add('json-stringify-safe:   circular                      ', function () {
  jsonStringifySafe(circ)
})
suite.add('json-stringify-safe:   circular getters              ', function () {
  jsonStringifySafe(circGetters)
})
suite.add('json-stringify-safe:   deep                          ', function () {
  jsonStringifySafe(deep)
})
suite.add('json-stringify-safe:   deep circular                 ', function () {
  jsonStringifySafe(deepCirc)
})
suite.add('json-stringify-safe:   large deep circular getters   ', function () {
  jsonStringifySafe(deepCircGetters)
})
suite.add('json-stringify-safe:   deep non-conf circular getters', function () {
  jsonStringifySafe(deepCircNonCongifurableGetters)
})

suite.add('\nfast-safe-stringify:   simple object                 ', function () {
  fastSafeStringify(obj)
})
suite.add('fast-safe-stringify:   circular                      ', function () {
  fastSafeStringify(circ)
})
suite.add('fast-safe-stringify:   circular getters              ', function () {
  fastSafeStringify(circGetters)
})
suite.add('fast-safe-stringify:   deep                          ', function () {
  fastSafeStringify(deep)
})
suite.add('fast-safe-stringify:   deep circular                 ', function () {
  fastSafeStringify(deepCirc)
})
suite.add('fast-safe-stringify:   large deep circular getters   ', function () {
  fastSafeStringify(deepCircGetters)
})
suite.add('fast-safe-stringify:   deep non-conf circular getters', function () {
  fastSafeStringify(deepCircNonCongifurableGetters)
})

// add listeners
suite.on('cycle', function (event) {
  console.log(String(event.target))
})

suite.on('complete', function () {
  console.log('\nFastest is ' + this.filter('fastest').map('name'))
})

suite.run({ delay: 1, minSamples: 150 })
