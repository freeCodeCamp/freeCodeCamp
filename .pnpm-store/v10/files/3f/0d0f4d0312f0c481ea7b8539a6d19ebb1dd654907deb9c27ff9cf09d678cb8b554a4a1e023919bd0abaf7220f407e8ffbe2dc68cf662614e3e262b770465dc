{
  "name": "fs-extra",
  "version": "9.1.0",
  "description": "fs-extra contains methods that aren't included in the vanilla Node.js fs package. Such as recursive mkdir, copy, and remove.",
  "engines": {
    "node": ">=10"
  },
  "homepage": "https://github.com/jprichardson/node-fs-extra",
  "repository": {
    "type": "git",
    "url": "https://github.com/jprichardson/node-fs-extra"
  },
  "keywords": [
    "fs",
    "file",
    "file system",
    "copy",
    "directory",
    "extra",
    "mkdirp",
    "mkdir",
    "mkdirs",
    "recursive",
    "json",
    "read",
    "write",
    "extra",
    "delete",
    "remove",
    "touch",
    "create",
    "text",
    "output",
    "move",
    "promise"
  ],
  "author": "JP Richardson <jprichardson@gmail.com>",
  "license": "MIT",
  "dependencies": {
    "at-least-node": "^1.0.0",
    "graceful-fs": "^4.2.0",
    "jsonfile": "^6.0.1",
    "universalify": "^2.0.0"
  },
  "devDependencies": {
    "coveralls": "^3.0.0",
    "klaw": "^2.1.1",
    "klaw-sync": "^3.0.2",
    "minimist": "^1.1.1",
    "mocha": "^5.0.5",
    "nyc": "^15.0.0",
    "proxyquire": "^2.0.1",
    "read-dir-files": "^0.1.1",
    "standard": "^14.1.0"
  },
  "main": "./lib/index.js",
  "files": [
    "lib/",
    "!lib/**/__tests__/"
  ],
  "scripts": {
    "full-ci": "npm run lint && npm run coverage",
    "coverage": "nyc -r lcovonly npm run unit",
    "coveralls": "coveralls < coverage/lcov.info",
    "lint": "standard",
    "test-find": "find ./lib/**/__tests__ -name *.test.js | xargs mocha",
    "test": "npm run lint && npm run unit",
    "unit": "node test.js"
  }
}
