{
  "name": "bluebird",
  "description": "Full featured Promises/A+ implementation with exceptionally good performance",
  "version": "3.7.2",
  "keywords": [
    "promise",
    "performance",
    "promises",
    "promises-a",
    "promises-aplus",
    "async",
    "await",
    "deferred",
    "deferreds",
    "future",
    "flow control",
    "dsl",
    "fluent interface"
  ],
  "scripts": {
    "lint": "node scripts/jshint.js",
    "test": "node --expose-gc tools/test.js",
    "istanbul": "istanbul",
    "prepublish": "npm run generate-browser-core && npm run generate-browser-full",
    "generate-browser-full": "node tools/build.js --no-clean --no-debug --release --browser --minify",
    "generate-browser-core": "node tools/build.js --features=core --no-debug --release --zalgo --browser --minify && mv js/browser/bluebird.js js/browser/bluebird.core.js && mv js/browser/bluebird.min.js js/browser/bluebird.core.min.js"
  },
  "homepage": "https://github.com/petkaantonov/bluebird",
  "repository": {
    "type": "git",
    "url": "git://github.com/petkaantonov/bluebird.git"
  },
  "bugs": {
    "url": "http://github.com/petkaantonov/bluebird/issues"
  },
  "license": "MIT",
  "author": {
    "name": "Petka Antonov",
    "email": "petka_antonov@hotmail.com",
    "url": "http://github.com/petkaantonov/"
  },
  "devDependencies": {
    "acorn": "^6.0.2",
    "acorn-walk": "^6.1.0",
    "baconjs": "^0.7.43",
    "bluebird": "^2.9.2",
    "body-parser": "^1.10.2",
    "browserify": "^8.1.1",
    "cli-table": "~0.3.1",
    "co": "^4.2.0",
    "cross-spawn": "^0.2.3",
    "glob": "^4.3.2",
    "grunt-saucelabs": "~8.4.1",
    "highland": "^2.3.0",
    "istanbul": "^0.3.5",
    "jshint": "^2.6.0",
    "jshint-stylish": "~0.2.0",
    "kefir": "^2.4.1",
    "mkdirp": "~0.5.0",
    "mocha": "~2.1",
    "open": "~0.0.5",
    "optimist": "~0.6.1",
    "rimraf": "~2.2.6",
    "rx": "^2.3.25",
    "serve-static": "^1.7.1",
    "sinon": "~1.7.3",
    "uglify-js": "~2.4.16"
  },
  "readmeFilename": "README.md",
  "main": "./js/release/bluebird.js",
  "webpack": "./js/release/bluebird.js",
  "browser": "./js/browser/bluebird.js",
  "files": [
    "js/browser",
    "js/release",
    "LICENSE"
  ]
}
