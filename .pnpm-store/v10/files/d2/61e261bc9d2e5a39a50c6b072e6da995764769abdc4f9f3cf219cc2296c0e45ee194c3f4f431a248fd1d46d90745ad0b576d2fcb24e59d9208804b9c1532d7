{
  "name": "on-finished",
  "description": "Execute a callback when a request closes, finishes, or errors",
  "version": "2.4.1",
  "contributors": [
    "Douglas Christopher Wilson <doug@somethingdoug.com>",
    "Jonathan Ong <me@jongleberry.com> (http://jongleberry.com)"
  ],
  "license": "MIT",
  "repository": "jshttp/on-finished",
  "dependencies": {
    "ee-first": "1.1.1"
  },
  "devDependencies": {
    "eslint": "7.32.0",
    "eslint-config-standard": "14.1.1",
    "eslint-plugin-import": "2.25.4",
    "eslint-plugin-markdown": "2.2.1",
    "eslint-plugin-node": "11.1.0",
    "eslint-plugin-promise": "5.2.0",
    "eslint-plugin-standard": "4.1.0",
    "mocha": "9.2.1",
    "nyc": "15.1.0"
  },
  "engines": {
    "node": ">= 0.8"
  },
  "files": [
    "HISTORY.md",
    "LICENSE",
    "index.js"
  ],
  "scripts": {
    "lint": "eslint .",
    "test": "mocha --reporter spec --bail --check-leaks test/",
    "test-ci": "nyc --reporter=lcovonly --reporter=text npm test",
    "test-cov": "nyc --reporter=html --reporter=text npm test"
  }
}
