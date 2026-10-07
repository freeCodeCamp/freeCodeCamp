{
  "author": "Felix Geisendörfer <felix@debuggable.com> (http://debuggable.com/)",
  "name": "form-data",
  "description": "A library to create readable \"multipart/form-data\" streams. Can be used to submit forms and file uploads to other web applications.",
  "version": "4.0.2",
  "repository": {
    "type": "git",
    "url": "git://github.com/form-data/form-data.git"
  },
  "main": "./lib/form_data",
  "browser": "./lib/browser",
  "typings": "./index.d.ts",
  "scripts": {
    "pretest": "npm run lint",
    "pretests-only": "rimraf coverage test/tmp",
    "tests-only": "istanbul cover test/run.js",
    "posttests-only": "istanbul report lcov text",
    "test": "npm run tests-only",
    "posttest": "npx npm@'>=10.2' audit --production",
    "lint": "eslint --ext=js,mjs .",
    "report": "istanbul report lcov text",
    "ci-lint": "is-node-modern 8 && npm run lint || is-node-not-modern 8",
    "ci-test": "npm run tests-only && npm run browser && npm run report",
    "predebug": "rimraf coverage test/tmp",
    "debug": "verbose=1 ./test/run.js",
    "browser": "browserify -t browserify-istanbul test/run-browser.js | obake --coverage",
    "check": "istanbul check-coverage coverage/coverage*.json",
    "files": "pkgfiles --sort=name",
    "get-version": "node -e \"console.log(require('./package.json').version)\"",
    "update-readme": "sed -i.bak 's/\\/master\\.svg/\\/v'$(npm --silent run get-version)'.svg/g' README.md",
    "restore-readme": "mv README.md.bak README.md",
    "prepublish": "in-publish && npm run update-readme || not-in-publish",
    "postpublish": "npm run restore-readme"
  },
  "pre-commit": [
    "lint",
    "ci-test",
    "check"
  ],
  "engines": {
    "node": ">= 6"
  },
  "dependencies": {
    "asynckit": "^0.4.0",
    "combined-stream": "^1.0.8",
    "es-set-tostringtag": "^2.1.0",
    "mime-types": "^2.1.12"
  },
  "devDependencies": {
    "@types/combined-stream": "^1.0.6",
    "@types/mime-types": "^2.1.4",
    "@types/node": "^12.20.55",
    "browserify": "^13.3.0",
    "browserify-istanbul": "^2.0.0",
    "coveralls": "^3.1.1",
    "cross-spawn": "^6.0.6",
    "eslint": "^6.8.0",
    "fake": "^0.2.2",
    "far": "^0.0.7",
    "formidable": "^1.2.6",
    "in-publish": "^2.0.1",
    "is-node-modern": "^1.0.0",
    "istanbul": "^0.4.5",
    "obake": "^0.1.2",
    "pkgfiles": "^2.3.2",
    "pre-commit": "^1.2.2",
    "puppeteer": "^1.20.0",
    "request": "~2.87.0",
    "rimraf": "^2.7.1",
    "tape": "^5.9.0",
    "typescript": "^3.9.10"
  },
  "license": "MIT"
}
