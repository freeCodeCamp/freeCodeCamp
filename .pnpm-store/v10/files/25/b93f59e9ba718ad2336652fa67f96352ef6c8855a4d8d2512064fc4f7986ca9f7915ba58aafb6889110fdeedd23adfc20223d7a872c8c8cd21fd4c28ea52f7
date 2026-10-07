{
  "name": "flat-cache",
  "version": "3.2.0",
  "description": "A stupidly simple key/value storage using files to persist some data",
  "repository": "jaredwray/flat-cache",
  "license": "MIT",
  "author": {
    "name": "Jared Wray",
    "url": "https://jaredwray.com"
  },
  "main": "src/cache.js",
  "files": [
    "src/cache.js",
    "src/del.js",
    "src/utils.js"
  ],
  "engines": {
    "node": "^10.12.0 || >=12.0.0"
  },
  "precommit": [
    "npm run verify --silent"
  ],
  "prepush": [
    "npm run verify --silent"
  ],
  "scripts": {
    "eslint": "eslint --cache --cache-location=node_modules/.cache/ ./src/**/*.js ./test/**/*.js",
    "eslint-fix": "npm run eslint -- --fix",
    "autofix": "npm run eslint-fix",
    "check": "npm run eslint",
    "verify": "npm run eslint && npm run test:cache",
    "test:cache": "c8 mocha -R spec test/specs",
    "test:ci:cache": "c8 --reporter=lcov mocha -R spec test/specs",
    "test": "npm run verify --silent"
  },
  "keywords": [
    "json cache",
    "simple cache",
    "file cache",
    "key par",
    "key value",
    "cache"
  ],
  "devDependencies": {
    "c8": "^7.14.0",
    "chai": "^4.3.10",
    "eslint": "^7.13.0",
    "eslint-config-prettier": "^6.15.0",
    "eslint-plugin-mocha": "^8.0.0",
    "eslint-plugin-prettier": "^3.1.4",
    "glob-expand": "^0.2.1",
    "mocha": "^8.4.0",
    "prettier": "^2.1.2",
    "write": "^2.0.0"
  },
  "dependencies": {
    "flatted": "^3.2.9",
    "keyv": "^4.5.3",
    "rimraf": "^3.0.2"
  }
}
