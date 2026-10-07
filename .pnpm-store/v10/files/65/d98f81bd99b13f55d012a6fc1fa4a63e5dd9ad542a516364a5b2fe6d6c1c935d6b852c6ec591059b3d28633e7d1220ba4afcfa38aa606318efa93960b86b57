{
  "name": "event-target-shim",
  "version": "5.0.1",
  "description": "An implementation of WHATWG EventTarget interface.",
  "main": "dist/event-target-shim",
  "types": "index.d.ts",
  "files": [
    "dist",
    "index.d.ts"
  ],
  "engines": {
    "node": ">=6"
  },
  "scripts": {
    "preversion": "npm test",
    "version": "npm run build && git add dist/*",
    "postversion": "git push && git push --tags",
    "clean": "rimraf .nyc_output coverage",
    "coverage": "nyc report --reporter lcov && opener coverage/lcov-report/index.html",
    "lint": "eslint src test scripts --ext .js,.mjs",
    "build": "rollup -c scripts/rollup.config.js",
    "pretest": "npm run lint",
    "test": "run-s test:*",
    "test:mocha": "nyc --require ./scripts/babel-register mocha test/*.mjs",
    "test:karma": "karma start scripts/karma.conf.js --single-run",
    "watch": "run-p watch:*",
    "watch:mocha": "mocha test/*.mjs --require ./scripts/babel-register --watch --watch-extensions js,mjs --growl",
    "watch:karma": "karma start scripts/karma.conf.js --watch",
    "codecov": "codecov"
  },
  "devDependencies": {
    "@babel/core": "^7.2.2",
    "@babel/plugin-transform-modules-commonjs": "^7.2.0",
    "@babel/preset-env": "^7.2.3",
    "@babel/register": "^7.0.0",
    "@mysticatea/eslint-plugin": "^8.0.1",
    "@mysticatea/spy": "^0.1.2",
    "assert": "^1.4.1",
    "codecov": "^3.1.0",
    "eslint": "^5.12.1",
    "karma": "^3.1.4",
    "karma-chrome-launcher": "^2.2.0",
    "karma-coverage": "^1.1.2",
    "karma-firefox-launcher": "^1.0.0",
    "karma-growl-reporter": "^1.0.0",
    "karma-ie-launcher": "^1.0.0",
    "karma-mocha": "^1.3.0",
    "karma-rollup-preprocessor": "^7.0.0-rc.2",
    "mocha": "^5.2.0",
    "npm-run-all": "^4.1.5",
    "nyc": "^13.1.0",
    "opener": "^1.5.1",
    "rimraf": "^2.6.3",
    "rollup": "^1.1.1",
    "rollup-plugin-babel": "^4.3.2",
    "rollup-plugin-babel-minify": "^7.0.0",
    "rollup-plugin-commonjs": "^9.2.0",
    "rollup-plugin-json": "^3.1.0",
    "rollup-plugin-node-resolve": "^4.0.0",
    "rollup-watch": "^4.3.1",
    "type-tester": "^1.0.0",
    "typescript": "^3.2.4"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/mysticatea/event-target-shim.git"
  },
  "keywords": [
    "w3c",
    "whatwg",
    "eventtarget",
    "event",
    "events",
    "shim"
  ],
  "author": "Toru Nagashima",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/mysticatea/event-target-shim/issues"
  },
  "homepage": "https://github.com/mysticatea/event-target-shim"
}
