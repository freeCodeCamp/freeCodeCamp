{
  "name": "graceful-fs",
  "description": "A drop-in replacement for fs, making various improvements.",
  "version": "4.2.11",
  "repository": {
    "type": "git",
    "url": "https://github.com/isaacs/node-graceful-fs"
  },
  "main": "graceful-fs.js",
  "directories": {
    "test": "test"
  },
  "scripts": {
    "preversion": "npm test",
    "postversion": "npm publish",
    "postpublish": "git push origin --follow-tags",
    "test": "nyc --silent node test.js | tap -c -",
    "posttest": "nyc report"
  },
  "keywords": [
    "fs",
    "module",
    "reading",
    "retry",
    "retries",
    "queue",
    "error",
    "errors",
    "handling",
    "EMFILE",
    "EAGAIN",
    "EINVAL",
    "EPERM",
    "EACCESS"
  ],
  "license": "ISC",
  "devDependencies": {
    "import-fresh": "^2.0.0",
    "mkdirp": "^0.5.0",
    "rimraf": "^2.2.8",
    "tap": "^16.3.4"
  },
  "files": [
    "fs.js",
    "graceful-fs.js",
    "legacy-streams.js",
    "polyfills.js",
    "clone.js"
  ],
  "tap": {
    "reporter": "classic"
  }
}
