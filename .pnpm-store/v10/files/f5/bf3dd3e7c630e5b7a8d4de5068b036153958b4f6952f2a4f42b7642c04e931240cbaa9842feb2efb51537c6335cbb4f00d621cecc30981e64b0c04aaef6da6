{
  "name": "fresh",
  "description": "HTTP response freshness testing",
  "version": "0.5.2",
  "author": "TJ Holowaychuk <tj@vision-media.ca> (http://tjholowaychuk.com)",
  "contributors": [
    "Douglas Christopher Wilson <doug@somethingdoug.com>",
    "Jonathan Ong <me@jongleberry.com> (http://jongleberry.com)"
  ],
  "license": "MIT",
  "keywords": [
    "fresh",
    "http",
    "conditional",
    "cache"
  ],
  "repository": "jshttp/fresh",
  "devDependencies": {
    "beautify-benchmark": "0.2.4",
    "benchmark": "2.1.4",
    "eslint": "3.19.0",
    "eslint-config-standard": "10.2.1",
    "eslint-plugin-import": "2.7.0",
    "eslint-plugin-markdown": "1.0.0-beta.6",
    "eslint-plugin-node": "5.1.1",
    "eslint-plugin-promise": "3.5.0",
    "eslint-plugin-standard": "3.0.1",
    "istanbul": "0.4.5",
    "mocha": "1.21.5"
  },
  "files": [
    "HISTORY.md",
    "LICENSE",
    "index.js"
  ],
  "engines": {
    "node": ">= 0.6"
  },
  "scripts": {
    "bench": "node benchmark/index.js",
    "lint": "eslint --plugin markdown --ext js,md .",
    "test": "mocha --reporter spec --bail --check-leaks test/",
    "test-cov": "istanbul cover node_modules/mocha/bin/_mocha -- --reporter dot --check-leaks test/",
    "test-travis": "istanbul cover node_modules/mocha/bin/_mocha --report lcovonly -- --reporter spec --check-leaks test/"
  }
}
