{
  "name": "abort-controller",
  "version": "3.0.0",
  "description": "An implementation of WHATWG AbortController interface.",
  "main": "dist/abort-controller",
  "files": [
    "dist",
    "polyfill.*",
    "browser.*"
  ],
  "engines": {
    "node": ">=6.5"
  },
  "dependencies": {
    "event-target-shim": "^5.0.0"
  },
  "browser": "./browser.js",
  "devDependencies": {
    "@babel/core": "^7.2.2",
    "@babel/plugin-transform-modules-commonjs": "^7.2.0",
    "@babel/preset-env": "^7.3.0",
    "@babel/register": "^7.0.0",
    "@mysticatea/eslint-plugin": "^8.0.1",
    "@mysticatea/spy": "^0.1.2",
    "@types/mocha": "^5.2.5",
    "@types/node": "^10.12.18",
    "assert": "^1.4.1",
    "codecov": "^3.1.0",
    "dts-bundle-generator": "^2.0.0",
    "eslint": "^5.12.1",
    "karma": "^3.1.4",
    "karma-chrome-launcher": "^2.2.0",
    "karma-coverage": "^1.1.2",
    "karma-firefox-launcher": "^1.1.0",
    "karma-growl-reporter": "^1.0.0",
    "karma-ie-launcher": "^1.0.0",
    "karma-mocha": "^1.3.0",
    "karma-rollup-preprocessor": "^7.0.0-rc.2",
    "mocha": "^5.2.0",
    "npm-run-all": "^4.1.5",
    "nyc": "^13.1.0",
    "opener": "^1.5.1",
    "rimraf": "^2.6.3",
    "rollup": "^1.1.2",
    "rollup-plugin-babel": "^4.3.2",
    "rollup-plugin-babel-minify": "^7.0.0",
    "rollup-plugin-commonjs": "^9.2.0",
    "rollup-plugin-node-resolve": "^4.0.0",
    "rollup-plugin-sourcemaps": "^0.4.2",
    "rollup-plugin-typescript": "^1.0.0",
    "rollup-watch": "^4.3.1",
    "ts-node": "^8.0.1",
    "type-tester": "^1.0.0",
    "typescript": "^3.2.4"
  },
  "scripts": {
    "preversion": "npm test",
    "version": "npm run -s build && git add dist/*",
    "postversion": "git push && git push --tags",
    "clean": "rimraf .nyc_output coverage",
    "coverage": "opener coverage/lcov-report/index.html",
    "lint": "eslint . --ext .ts",
    "build": "run-s -s build:*",
    "build:rollup": "rollup -c",
    "build:dts": "dts-bundle-generator -o dist/abort-controller.d.ts src/abort-controller.ts && ts-node scripts/fix-dts",
    "test": "run-s -s lint test:*",
    "test:mocha": "nyc mocha test/*.ts",
    "test:karma": "karma start --single-run",
    "watch": "run-p -s watch:*",
    "watch:mocha": "mocha test/*.ts --require ts-node/register --watch-extensions ts --watch --growl",
    "watch:karma": "karma start --watch",
    "codecov": "codecov"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/mysticatea/abort-controller.git"
  },
  "keywords": [
    "w3c",
    "whatwg",
    "event",
    "events",
    "abort",
    "cancel",
    "abortcontroller",
    "abortsignal",
    "controller",
    "signal",
    "shim"
  ],
  "author": "Toru Nagashima (https://github.com/mysticatea)",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/mysticatea/abort-controller/issues"
  },
  "homepage": "https://github.com/mysticatea/abort-controller#readme"
}
