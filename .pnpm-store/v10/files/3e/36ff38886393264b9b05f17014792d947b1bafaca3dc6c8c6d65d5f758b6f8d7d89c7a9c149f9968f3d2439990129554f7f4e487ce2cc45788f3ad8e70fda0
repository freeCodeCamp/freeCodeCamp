{
  "name": "on-headers",
  "description": "Execute a listener when a response is about to write headers",
  "version": "1.0.2",
  "author": "Douglas Christopher Wilson <doug@somethingdoug.com>",
  "license": "MIT",
  "keywords": [
    "event",
    "headers",
    "http",
    "onheaders"
  ],
  "repository": "jshttp/on-headers",
  "devDependencies": {
    "eslint": "5.14.1",
    "eslint-config-standard": "12.0.0",
    "eslint-plugin-import": "2.16.0",
    "eslint-plugin-markdown": "1.0.0",
    "eslint-plugin-node": "8.0.1",
    "eslint-plugin-promise": "4.0.1",
    "eslint-plugin-standard": "4.0.0",
    "istanbul": "0.4.5",
    "mocha": "6.0.1",
    "supertest": "3.4.2"
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
    "lint": "eslint --plugin markdown --ext js,md .",
    "test": "mocha --reporter spec --bail --check-leaks test/",
    "test-cov": "istanbul cover node_modules/mocha/bin/_mocha -- --reporter dot --check-leaks test/",
    "test-travis": "istanbul cover node_modules/mocha/bin/_mocha --report lcovonly -- --reporter spec --check-leaks test/",
    "version": "node scripts/version-history.js && git add HISTORY.md"
  }
}
