{
  "name": "readable-stream",
  "version": "2.3.8",
  "description": "Streams3, a user-land copy of the stream library from Node.js",
  "main": "readable.js",
  "dependencies": {
    "core-util-is": "~1.0.0",
    "inherits": "~2.0.3",
    "isarray": "~1.0.0",
    "process-nextick-args": "~2.0.0",
    "safe-buffer": "~5.1.1",
    "string_decoder": "~1.1.1",
    "util-deprecate": "~1.0.1"
  },
  "devDependencies": {
    "assert": "^1.4.0",
    "babel-polyfill": "^6.9.1",
    "buffer": "^4.9.0",
    "lolex": "^2.3.2",
    "nyc": "^6.4.0",
    "tap": "^0.7.0",
    "tape": "^4.8.0"
  },
  "scripts": {
    "test": "tap test/parallel/*.js test/ours/*.js && node test/verify-dependencies.js",
    "ci": "tap test/parallel/*.js test/ours/*.js --tap | tee test.tap && node test/verify-dependencies.js",
    "cover": "nyc npm test",
    "report": "nyc report --reporter=lcov"
  },
  "repository": {
    "type": "git",
    "url": "git://github.com/nodejs/readable-stream"
  },
  "keywords": [
    "readable",
    "stream",
    "pipe"
  ],
  "browser": {
    "util": false,
    "./readable.js": "./readable-browser.js",
    "./writable.js": "./writable-browser.js",
    "./duplex.js": "./duplex-browser.js",
    "./lib/internal/streams/stream.js": "./lib/internal/streams/stream-browser.js"
  },
  "nyc": {
    "include": [
      "lib/**.js"
    ]
  },
  "license": "MIT"
}
