{
  "name": "mongodb-connection-string-url",
  "version": "3.0.2",
  "description": "MongoDB connection strings, based on the WhatWG URL API",
  "keywords": [
    "password",
    "prompt",
    "tty"
  ],
  "homepage": "https://github.com/mongodb-js/mongodb-connection-string-url",
  "repository": {
    "type": "git",
    "url": "https://github.com/mongodb-js/mongodb-connection-string-url.git"
  },
  "bugs": {
    "url": "https://github.com/mongodb-js/mongodb-connection-string-url/issues"
  },
  "main": "lib/index.js",
  "exports": {
    "require": "./lib/index.js",
    "import": "./.esm-wrapper.mjs"
  },
  "files": [
    "LICENSE",
    "lib",
    "package.json",
    "README.md",
    ".esm-wrapper.mjs"
  ],
  "scripts": {
    "lint": "eslint \"{src,test}/**/*.ts\"",
    "test": "npm run lint && npm run build && nyc mocha --colors -r ts-node/register test/*.ts",
    "build": "npm run compile-ts && gen-esm-wrapper . ./.esm-wrapper.mjs",
    "prepack": "npm run build",
    "compile-ts": "tsc -p tsconfig.json"
  },
  "license": "Apache-2.0",
  "devDependencies": {
    "@types/chai": "^5.0.1",
    "@types/mocha": "^8.0.3",
    "@types/node": "^22.9.0",
    "@typescript-eslint/eslint-plugin": "^4.2.0",
    "@typescript-eslint/parser": "^4.2.0",
    "chai": "^4.2.0",
    "eslint": "^7.9.0",
    "eslint-config-semistandard": "^15.0.1",
    "eslint-config-standard": "^14.1.1",
    "eslint-plugin-import": "^2.22.0",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-promise": "^7.1.0",
    "eslint-plugin-standard": "^5.0.0",
    "gen-esm-wrapper": "^1.1.3",
    "mocha": "^11.0.1",
    "nyc": "^15.1.0",
    "ts-node": "^10.9.1",
    "typescript": "^4.7.4"
  },
  "dependencies": {
    "@types/whatwg-url": "^11.0.2",
    "whatwg-url": "^14.1.0 || ^13.0.0"
  }
}
