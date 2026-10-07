{
  "name": "buffer",
  "description": "Node.js Buffer API, for the browser",
  "version": "5.7.1",
  "author": {
    "name": "Feross Aboukhadijeh",
    "email": "feross@feross.org",
    "url": "https://feross.org"
  },
  "bugs": {
    "url": "https://github.com/feross/buffer/issues"
  },
  "contributors": [
    "Romain Beauxis <toots@rastageeks.org>",
    "James Halliday <mail@substack.net>"
  ],
  "dependencies": {
    "base64-js": "^1.3.1",
    "ieee754": "^1.1.13"
  },
  "devDependencies": {
    "airtap": "^3.0.0",
    "benchmark": "^2.1.4",
    "browserify": "^17.0.0",
    "concat-stream": "^2.0.0",
    "hyperquest": "^2.1.3",
    "is-buffer": "^2.0.4",
    "is-nan": "^1.3.0",
    "split": "^1.0.1",
    "standard": "*",
    "tape": "^5.0.1",
    "through2": "^4.0.2",
    "uglify-js": "^3.11.3"
  },
  "homepage": "https://github.com/feross/buffer",
  "jspm": {
    "map": {
      "./index.js": {
        "node": "@node/buffer"
      }
    }
  },
  "keywords": [
    "arraybuffer",
    "browser",
    "browserify",
    "buffer",
    "compatible",
    "dataview",
    "uint8array"
  ],
  "license": "MIT",
  "main": "index.js",
  "types": "index.d.ts",
  "repository": {
    "type": "git",
    "url": "git://github.com/feross/buffer.git"
  },
  "scripts": {
    "perf": "browserify --debug perf/bracket-notation.js > perf/bundle.js && open perf/index.html",
    "perf-node": "node perf/bracket-notation.js && node perf/concat.js && node perf/copy-big.js && node perf/copy.js && node perf/new-big.js && node perf/new.js && node perf/readDoubleBE.js && node perf/readFloatBE.js && node perf/readUInt32LE.js && node perf/slice.js && node perf/writeFloatBE.js",
    "size": "browserify -r ./ | uglifyjs -c -m | gzip | wc -c",
    "test": "standard && node ./bin/test.js",
    "test-browser-es5": "airtap -- test/*.js",
    "test-browser-es5-local": "airtap --local -- test/*.js",
    "test-browser-es6": "airtap -- test/*.js test/node/*.js",
    "test-browser-es6-local": "airtap --local -- test/*.js test/node/*.js",
    "test-node": "tape test/*.js test/node/*.js",
    "update-authors": "./bin/update-authors.sh"
  },
  "standard": {
    "ignore": [
      "test/node/**/*.js",
      "test/common.js",
      "test/_polyfill.js",
      "perf/**/*.js"
    ],
    "globals": [
      "SharedArrayBuffer"
    ]
  },
  "funding": [
    {
      "type": "github",
      "url": "https://github.com/sponsors/feross"
    },
    {
      "type": "patreon",
      "url": "https://www.patreon.com/feross"
    },
    {
      "type": "consulting",
      "url": "https://feross.org/support"
    }
  ]
}
