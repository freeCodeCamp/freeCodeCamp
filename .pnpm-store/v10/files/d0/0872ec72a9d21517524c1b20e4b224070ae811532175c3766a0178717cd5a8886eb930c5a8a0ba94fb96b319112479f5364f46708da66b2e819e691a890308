{
  "name": "readable-stream",
  "version": "3.6.2",
  "description": "Streams3, a user-land copy of the stream library from Node.js",
  "main": "readable.js",
  "engines": {
    "node": ">= 6"
  },
  "dependencies": {
    "inherits": "^2.0.3",
    "string_decoder": "^1.1.1",
    "util-deprecate": "^1.0.1"
  },
  "devDependencies": {
    "@babel/cli": "^7.2.0",
    "@babel/core": "^7.2.0",
    "@babel/polyfill": "^7.0.0",
    "@babel/preset-env": "^7.2.0",
    "airtap": "0.0.9",
    "assert": "^1.4.0",
    "bl": "^2.0.0",
    "deep-strict-equal": "^0.2.0",
    "events.once": "^2.0.2",
    "glob": "^7.1.2",
    "gunzip-maybe": "^1.4.1",
    "hyperquest": "^2.1.3",
    "lolex": "^2.6.0",
    "nyc": "^11.0.0",
    "pump": "^3.0.0",
    "rimraf": "^2.6.2",
    "tap": "^12.0.0",
    "tape": "^4.9.0",
    "tar-fs": "^1.16.2",
    "util-promisify": "^2.1.0"
  },
  "scripts": {
    "test": "tap -J --no-esm test/parallel/*.js test/ours/*.js",
    "ci": "TAP=1 tap --no-esm test/parallel/*.js test/ours/*.js | tee test.tap",
    "test-browsers": "airtap --sauce-connect --loopback airtap.local -- test/browser.js",
    "test-browser-local": "airtap --open --local -- test/browser.js",
    "cover": "nyc npm test",
    "report": "nyc report --reporter=lcov",
    "update-browser-errors": "babel -o errors-browser.js errors.js"
  },
  "repository": {
    "type": "git",
    "url": "git://github.com/nodejs/readable-stream"
  },
  "keywords": [
    "readable",
    "stream",
    "pipe"
  ],
  "browser": {
    "util": false,
    "worker_threads": false,
    "./errors": "./errors-browser.js",
    "./readable.js": "./readable-browser.js",
    "./lib/internal/streams/from.js": "./lib/internal/streams/from-browser.js",
    "./lib/internal/streams/stream.js": "./lib/internal/streams/stream-browser.js"
  },
  "nyc": {
    "include": [
      "lib/**.js"
    ]
  },
  "license": "MIT"
}
