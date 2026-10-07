{
  "name": "acorn-import-attributes",
  "version": "1.9.5",
  "description": "Support for import attributes in acorn",
  "main": "lib/index.js",
  "module": "src/index.js",
  "exports": {
    ".": {
      "import": "./lib/index.mjs",
      "require": "./lib/index.js"
    },
    "./package.json": "./package.json",
    "./": "./"
  },
  "scripts": {
    "build": "babel ./src --out-dir ./lib && node post-build.js",
    "prepublishOnly": "npm run build",
    "test": "mocha ./test/index.js",
    "test:test262": "node run_test262.js",
    "watch": "babel ./src --out-dir ./lib --watch"
  },
  "author": "Sven Sauleau <sven@sauleau.com>",
  "license": "MIT",
  "devDependencies": {
    "@babel/cli": "^7.14.8",
    "@babel/core": "^7.15.0",
    "@babel/preset-env": "^7.15.0",
    "@babel/register": "^7.15.3",
    "acorn": "^8.4.1",
    "chai": "^4.3.4",
    "mocha": "^9.1.0",
    "test262": "https://github.com/tc39/test262#47ab262658cd97ae35c9a537808cac18fa4ab567",
    "test262-parser-runner": "^0.5.0"
  },
  "peerDependencies": {
    "acorn": "^8"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/xtuc/acorn-import-attributes"
  },
  "browserslist": [
    "maintained node versions"
  ],
  "files": [
    "lib",
    "src"
  ]
}
