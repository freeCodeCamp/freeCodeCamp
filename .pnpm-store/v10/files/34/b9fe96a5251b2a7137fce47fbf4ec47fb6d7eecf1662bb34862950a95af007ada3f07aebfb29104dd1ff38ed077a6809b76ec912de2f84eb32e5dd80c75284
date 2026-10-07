{
  "name": "proxy-addr",
  "description": "Determine address of proxied request",
  "version": "2.0.7",
  "author": "Douglas Christopher Wilson <doug@somethingdoug.com>",
  "license": "MIT",
  "keywords": [
    "ip",
    "proxy",
    "x-forwarded-for"
  ],
  "repository": "jshttp/proxy-addr",
  "dependencies": {
    "forwarded": "0.2.0",
    "ipaddr.js": "1.9.1"
  },
  "devDependencies": {
    "benchmark": "2.1.4",
    "beautify-benchmark": "0.2.4",
    "deep-equal": "1.0.1",
    "eslint": "7.26.0",
    "eslint-config-standard": "14.1.1",
    "eslint-plugin-import": "2.23.4",
    "eslint-plugin-markdown": "2.2.0",
    "eslint-plugin-node": "11.1.0",
    "eslint-plugin-promise": "4.3.1",
    "eslint-plugin-standard": "4.1.0",
    "mocha": "8.4.0",
    "nyc": "15.1.0"
  },
  "files": [
    "LICENSE",
    "HISTORY.md",
    "README.md",
    "index.js"
  ],
  "engines": {
    "node": ">= 0.10"
  },
  "scripts": {
    "bench": "node benchmark/index.js",
    "lint": "eslint .",
    "test": "mocha --reporter spec --bail --check-leaks test/",
    "test-ci": "nyc --reporter=lcov --reporter=text npm test",
    "test-cov": "nyc --reporter=html --reporter=text npm test"
  }
}
