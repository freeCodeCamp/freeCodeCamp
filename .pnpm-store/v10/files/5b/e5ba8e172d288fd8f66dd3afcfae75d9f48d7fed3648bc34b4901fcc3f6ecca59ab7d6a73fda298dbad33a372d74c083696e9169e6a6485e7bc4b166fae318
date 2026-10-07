{
  "name": "parseurl",
  "description": "parse a url with memoization",
  "version": "1.3.3",
  "contributors": [
    "Douglas Christopher Wilson <doug@somethingdoug.com>",
    "Jonathan Ong <me@jongleberry.com> (http://jongleberry.com)"
  ],
  "repository": "pillarjs/parseurl",
  "license": "MIT",
  "devDependencies": {
    "beautify-benchmark": "0.2.4",
    "benchmark": "2.1.4",
    "eslint": "5.16.0",
    "eslint-config-standard": "12.0.0",
    "eslint-plugin-import": "2.17.1",
    "eslint-plugin-node": "7.0.1",
    "eslint-plugin-promise": "4.1.1",
    "eslint-plugin-standard": "4.0.0",
    "fast-url-parser": "1.1.3",
    "istanbul": "0.4.5",
    "mocha": "6.1.3"
  },
  "files": [
    "LICENSE",
    "HISTORY.md",
    "README.md",
    "index.js"
  ],
  "engines": {
    "node": ">= 0.8"
  },
  "scripts": {
    "bench": "node benchmark/index.js",
    "lint": "eslint .",
    "test": "mocha --check-leaks --bail --reporter spec test/",
    "test-cov": "istanbul cover node_modules/mocha/bin/_mocha -- --check-leaks --reporter dot test/",
    "test-travis": "istanbul cover node_modules/mocha/bin/_mocha --report lcovonly -- --check-leaks --reporter spec test/"
  }
}
