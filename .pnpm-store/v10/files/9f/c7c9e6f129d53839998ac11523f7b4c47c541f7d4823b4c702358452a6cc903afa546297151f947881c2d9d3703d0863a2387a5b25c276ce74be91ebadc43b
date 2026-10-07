{
  "name": "vary",
  "description": "Manipulate the HTTP Vary header",
  "version": "1.1.2",
  "author": "Douglas Christopher Wilson <doug@somethingdoug.com>",
  "license": "MIT",
  "keywords": [
    "http",
    "res",
    "vary"
  ],
  "repository": "jshttp/vary",
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
    "mocha": "2.5.3",
    "supertest": "1.1.0"
  },
  "files": [
    "HISTORY.md",
    "LICENSE",
    "README.md",
    "index.js"
  ],
  "engines": {
    "node": ">= 0.8"
  },
  "scripts": {
    "bench": "node benchmark/index.js",
    "lint": "eslint --plugin markdown --ext js,md .",
    "test": "mocha --reporter spec --bail --check-leaks test/",
    "test-cov": "istanbul cover node_modules/mocha/bin/_mocha -- --reporter dot --check-leaks test/",
    "test-travis": "istanbul cover node_modules/mocha/bin/_mocha --report lcovonly -- --reporter spec --check-leaks test/"
  }
}
