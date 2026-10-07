{
  "name": "body-parser",
  "description": "Node.js body parsing middleware",
  "version": "2.2.2",
  "contributors": [
    "Douglas Christopher Wilson <doug@somethingdoug.com>",
    "Jonathan Ong <me@jongleberry.com> (http://jongleberry.com)"
  ],
  "license": "MIT",
  "repository": "expressjs/body-parser",
  "funding": {
    "type": "opencollective",
    "url": "https://opencollective.com/express"
  },
  "dependencies": {
    "bytes": "^3.1.2",
    "content-type": "^1.0.5",
    "debug": "^4.4.3",
    "http-errors": "^2.0.0",
    "iconv-lite": "^0.7.0",
    "on-finished": "^2.4.1",
    "qs": "^6.14.1",
    "raw-body": "^3.0.1",
    "type-is": "^2.0.1"
  },
  "devDependencies": {
    "eslint": "^8.57.1",
    "eslint-config-standard": "^14.1.1",
    "eslint-plugin-import": "^2.31.0",
    "eslint-plugin-markdown": "^3.0.1",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-promise": "^6.6.0",
    "eslint-plugin-standard": "^4.1.0",
    "mocha": "^11.1.0",
    "nyc": "^17.1.0",
    "supertest": "^7.0.0"
  },
  "files": [
    "lib/",
    "LICENSE",
    "index.js"
  ],
  "engines": {
    "node": ">=18"
  },
  "scripts": {
    "lint": "eslint .",
    "test": "mocha --reporter spec --check-leaks test/",
    "test-ci": "nyc --reporter=lcovonly --reporter=text npm test",
    "test-cov": "nyc --reporter=html --reporter=text npm test"
  }
}
