{
  "name": "http-errors",
  "description": "Create HTTP error objects",
  "version": "2.0.0",
  "author": "Jonathan Ong <me@jongleberry.com> (http://jongleberry.com)",
  "contributors": [
    "Alan Plum <me@pluma.io>",
    "Douglas Christopher Wilson <doug@somethingdoug.com>"
  ],
  "license": "MIT",
  "repository": "jshttp/http-errors",
  "dependencies": {
    "depd": "2.0.0",
    "inherits": "2.0.4",
    "setprototypeof": "1.2.0",
    "statuses": "2.0.1",
    "toidentifier": "1.0.1"
  },
  "devDependencies": {
    "eslint": "7.32.0",
    "eslint-config-standard": "14.1.1",
    "eslint-plugin-import": "2.25.3",
    "eslint-plugin-markdown": "2.2.1",
    "eslint-plugin-node": "11.1.0",
    "eslint-plugin-promise": "5.2.0",
    "eslint-plugin-standard": "4.1.0",
    "mocha": "9.1.3",
    "nyc": "15.1.0"
  },
  "engines": {
    "node": ">= 0.8"
  },
  "scripts": {
    "lint": "eslint . && node ./scripts/lint-readme-list.js",
    "test": "mocha --reporter spec --bail",
    "test-ci": "nyc --reporter=lcov --reporter=text npm test",
    "test-cov": "nyc --reporter=html --reporter=text npm test",
    "version": "node scripts/version-history.js && git add HISTORY.md"
  },
  "keywords": [
    "http",
    "error"
  ],
  "files": [
    "index.js",
    "HISTORY.md",
    "LICENSE",
    "README.md"
  ]
}
