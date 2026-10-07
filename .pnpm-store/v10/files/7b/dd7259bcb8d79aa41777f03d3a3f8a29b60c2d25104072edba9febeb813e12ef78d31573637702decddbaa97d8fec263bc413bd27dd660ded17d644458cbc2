{
  "name": "depd",
  "description": "Deprecate all the things",
  "version": "2.0.0",
  "author": "Douglas Christopher Wilson <doug@somethingdoug.com>",
  "license": "MIT",
  "keywords": [
    "deprecate",
    "deprecated"
  ],
  "repository": "dougwilson/nodejs-depd",
  "browser": "lib/browser/index.js",
  "devDependencies": {
    "benchmark": "2.1.4",
    "beautify-benchmark": "0.2.4",
    "eslint": "5.7.0",
    "eslint-config-standard": "12.0.0",
    "eslint-plugin-import": "2.14.0",
    "eslint-plugin-markdown": "1.0.0-beta.7",
    "eslint-plugin-node": "7.0.1",
    "eslint-plugin-promise": "4.0.1",
    "eslint-plugin-standard": "4.0.0",
    "istanbul": "0.4.5",
    "mocha": "5.2.0",
    "safe-buffer": "5.1.2",
    "uid-safe": "2.1.5"
  },
  "files": [
    "lib/",
    "History.md",
    "LICENSE",
    "index.js",
    "Readme.md"
  ],
  "engines": {
    "node": ">= 0.8"
  },
  "scripts": {
    "bench": "node benchmark/index.js",
    "lint": "eslint --plugin markdown --ext js,md .",
    "test": "mocha --reporter spec --bail test/",
    "test-ci": "istanbul cover --print=none node_modules/mocha/bin/_mocha -- --reporter spec test/ && istanbul report lcovonly text-summary",
    "test-cov": "istanbul cover --print=none node_modules/mocha/bin/_mocha -- --reporter dot test/ && istanbul report lcov text-summary"
  }
}
