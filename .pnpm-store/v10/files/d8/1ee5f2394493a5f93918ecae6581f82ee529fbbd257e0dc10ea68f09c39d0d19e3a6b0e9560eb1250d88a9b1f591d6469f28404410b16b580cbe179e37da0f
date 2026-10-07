{
  "name": "encodeurl",
  "description": "Encode a URL to a percent-encoded form, excluding already-encoded sequences",
  "version": "1.0.2",
  "contributors": [
    "Douglas Christopher Wilson <doug@somethingdoug.com>"
  ],
  "license": "MIT",
  "keywords": [
    "encode",
    "encodeurl",
    "url"
  ],
  "repository": "pillarjs/encodeurl",
  "devDependencies": {
    "eslint": "3.19.0",
    "eslint-config-standard": "10.2.1",
    "eslint-plugin-import": "2.8.0",
    "eslint-plugin-node": "5.2.1",
    "eslint-plugin-promise": "3.6.0",
    "eslint-plugin-standard": "3.0.1",
    "istanbul": "0.4.5",
    "mocha": "2.5.3"
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
    "lint": "eslint .",
    "test": "mocha --reporter spec --bail --check-leaks test/",
    "test-cov": "istanbul cover node_modules/mocha/bin/_mocha -- --reporter dot --check-leaks test/",
    "test-travis": "istanbul cover node_modules/mocha/bin/_mocha --report lcovonly -- --reporter spec --check-leaks test/"
  }
}
