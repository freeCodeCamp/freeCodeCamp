{
  "name": "mime-db",
  "description": "Media Type Database",
  "version": "1.52.0",
  "contributors": [
    "Douglas Christopher Wilson <doug@somethingdoug.com>",
    "Jonathan Ong <me@jongleberry.com> (http://jongleberry.com)",
    "Robert Kieffer <robert@broofa.com> (http://github.com/broofa)"
  ],
  "license": "MIT",
  "keywords": [
    "mime",
    "db",
    "type",
    "types",
    "database",
    "charset",
    "charsets"
  ],
  "repository": "jshttp/mime-db",
  "devDependencies": {
    "bluebird": "3.7.2",
    "co": "4.6.0",
    "cogent": "1.0.1",
    "csv-parse": "4.16.3",
    "eslint": "7.32.0",
    "eslint-config-standard": "15.0.1",
    "eslint-plugin-import": "2.25.4",
    "eslint-plugin-markdown": "2.2.1",
    "eslint-plugin-node": "11.1.0",
    "eslint-plugin-promise": "5.1.1",
    "eslint-plugin-standard": "4.1.0",
    "gnode": "0.1.2",
    "media-typer": "1.1.0",
    "mocha": "9.2.1",
    "nyc": "15.1.0",
    "raw-body": "2.5.0",
    "stream-to-array": "2.3.0"
  },
  "files": [
    "HISTORY.md",
    "LICENSE",
    "README.md",
    "db.json",
    "index.js"
  ],
  "engines": {
    "node": ">= 0.6"
  },
  "scripts": {
    "build": "node scripts/build",
    "fetch": "node scripts/fetch-apache && gnode scripts/fetch-iana && node scripts/fetch-nginx",
    "lint": "eslint .",
    "test": "mocha --reporter spec --bail --check-leaks test/",
    "test-ci": "nyc --reporter=lcov --reporter=text npm test",
    "test-cov": "nyc --reporter=html --reporter=text npm test",
    "update": "npm run fetch && npm run build",
    "version": "node scripts/version-history.js && git add HISTORY.md"
  }
}
