{
  "name": "statuses",
  "description": "HTTP status utility",
  "version": "2.0.1",
  "contributors": [
    "Douglas Christopher Wilson <doug@somethingdoug.com>",
    "Jonathan Ong <me@jongleberry.com> (http://jongleberry.com)"
  ],
  "repository": "jshttp/statuses",
  "license": "MIT",
  "keywords": [
    "http",
    "status",
    "code"
  ],
  "files": [
    "HISTORY.md",
    "index.js",
    "codes.json",
    "LICENSE"
  ],
  "devDependencies": {
    "csv-parse": "4.14.2",
    "eslint": "7.17.0",
    "eslint-config-standard": "14.1.1",
    "eslint-plugin-import": "2.22.1",
    "eslint-plugin-markdown": "1.0.2",
    "eslint-plugin-node": "11.1.0",
    "eslint-plugin-promise": "4.2.1",
    "eslint-plugin-standard": "4.1.0",
    "mocha": "8.2.1",
    "nyc": "15.1.0",
    "raw-body": "2.4.1",
    "stream-to-array": "2.3.0"
  },
  "engines": {
    "node": ">= 0.8"
  },
  "scripts": {
    "build": "node scripts/build.js",
    "fetch": "node scripts/fetch-apache.js && node scripts/fetch-iana.js && node scripts/fetch-nginx.js && node scripts/fetch-node.js",
    "lint": "eslint --plugin markdown --ext js,md .",
    "test": "mocha --reporter spec --check-leaks --bail test/",
    "test-ci": "nyc --reporter=lcov --reporter=text npm test",
    "test-cov": "nyc --reporter=html --reporter=text npm test",
    "update": "npm run fetch && npm run build",
    "version": "node scripts/version-history.js && git add HISTORY.md"
  }
}
