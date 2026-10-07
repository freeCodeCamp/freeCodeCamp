{
  "name": "cookie",
  "description": "HTTP server cookie parsing and serialization",
  "version": "0.7.2",
  "author": "Roman Shtylman <shtylman@gmail.com>",
  "contributors": [
    "Douglas Christopher Wilson <doug@somethingdoug.com>"
  ],
  "license": "MIT",
  "keywords": [
    "cookie",
    "cookies"
  ],
  "repository": "jshttp/cookie",
  "devDependencies": {
    "beautify-benchmark": "0.2.4",
    "benchmark": "2.1.4",
    "eslint": "8.53.0",
    "eslint-plugin-markdown": "3.0.1",
    "mocha": "10.2.0",
    "nyc": "15.1.0",
    "safe-buffer": "5.2.1",
    "top-sites": "1.1.194"
  },
  "files": [
    "HISTORY.md",
    "LICENSE",
    "README.md",
    "SECURITY.md",
    "index.js"
  ],
  "main": "index.js",
  "engines": {
    "node": ">= 0.6"
  },
  "scripts": {
    "bench": "node benchmark/index.js",
    "lint": "eslint .",
    "test": "mocha --reporter spec --bail --check-leaks test/",
    "test-ci": "nyc --reporter=lcov --reporter=text npm test",
    "test-cov": "nyc --reporter=html --reporter=text npm test",
    "update-bench": "node scripts/update-benchmark.js"
  }
}
