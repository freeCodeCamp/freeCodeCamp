{
  "name": "content-type",
  "description": "Create and parse HTTP Content-Type header",
  "version": "1.0.5",
  "author": "Douglas Christopher Wilson <doug@somethingdoug.com>",
  "license": "MIT",
  "keywords": [
    "content-type",
    "http",
    "req",
    "res",
    "rfc7231"
  ],
  "repository": "jshttp/content-type",
  "devDependencies": {
    "deep-equal": "1.0.1",
    "eslint": "8.32.0",
    "eslint-config-standard": "15.0.1",
    "eslint-plugin-import": "2.27.5",
    "eslint-plugin-node": "11.1.0",
    "eslint-plugin-promise": "6.1.1",
    "eslint-plugin-standard": "4.1.0",
    "mocha": "10.2.0",
    "nyc": "15.1.0"
  },
  "files": [
    "LICENSE",
    "HISTORY.md",
    "README.md",
    "index.js"
  ],
  "engines": {
    "node": ">= 0.6"
  },
  "scripts": {
    "lint": "eslint .",
    "test": "mocha --reporter spec --check-leaks --bail test/",
    "test-ci": "nyc --reporter=lcovonly --reporter=text npm test",
    "test-cov": "nyc --reporter=html --reporter=text npm test",
    "version": "node scripts/version-history.js && git add HISTORY.md"
  }
}
