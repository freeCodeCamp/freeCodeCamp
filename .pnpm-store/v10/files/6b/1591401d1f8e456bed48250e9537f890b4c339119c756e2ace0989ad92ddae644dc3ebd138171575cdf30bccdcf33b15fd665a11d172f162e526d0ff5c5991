{
  "name": "uuid",
  "version": "9.0.1",
  "description": "RFC4122 (v1, v4, and v5) UUIDs",
  "funding": [
    "https://github.com/sponsors/broofa",
    "https://github.com/sponsors/ctavan"
  ],
  "commitlint": {
    "extends": [
      "@commitlint/config-conventional"
    ]
  },
  "keywords": [
    "uuid",
    "guid",
    "rfc4122"
  ],
  "license": "MIT",
  "bin": {
    "uuid": "./dist/bin/uuid"
  },
  "sideEffects": false,
  "main": "./dist/index.js",
  "exports": {
    ".": {
      "node": {
        "module": "./dist/esm-node/index.js",
        "require": "./dist/index.js",
        "import": "./wrapper.mjs"
      },
      "browser": {
        "import": "./dist/esm-browser/index.js",
        "require": "./dist/commonjs-browser/index.js"
      },
      "default": "./dist/esm-browser/index.js"
    },
    "./package.json": "./package.json"
  },
  "module": "./dist/esm-node/index.js",
  "browser": {
    "./dist/md5.js": "./dist/md5-browser.js",
    "./dist/native.js": "./dist/native-browser.js",
    "./dist/rng.js": "./dist/rng-browser.js",
    "./dist/sha1.js": "./dist/sha1-browser.js",
    "./dist/esm-node/index.js": "./dist/esm-browser/index.js"
  },
  "files": [
    "CHANGELOG.md",
    "CONTRIBUTING.md",
    "LICENSE.md",
    "README.md",
    "dist",
    "wrapper.mjs"
  ],
  "devDependencies": {
    "@babel/cli": "7.18.10",
    "@babel/core": "7.18.10",
    "@babel/eslint-parser": "7.18.9",
    "@babel/preset-env": "7.18.10",
    "@commitlint/cli": "17.0.3",
    "@commitlint/config-conventional": "17.0.3",
    "bundlewatch": "0.3.3",
    "eslint": "8.21.0",
    "eslint-config-prettier": "8.5.0",
    "eslint-config-standard": "17.0.0",
    "eslint-plugin-import": "2.26.0",
    "eslint-plugin-node": "11.1.0",
    "eslint-plugin-prettier": "4.2.1",
    "eslint-plugin-promise": "6.0.0",
    "husky": "8.0.1",
    "jest": "28.1.3",
    "lint-staged": "13.0.3",
    "npm-run-all": "4.1.5",
    "optional-dev-dependency": "2.0.1",
    "prettier": "2.7.1",
    "random-seed": "0.3.0",
    "runmd": "1.3.9",
    "standard-version": "9.5.0"
  },
  "optionalDevDependencies": {
    "@wdio/browserstack-service": "7.16.10",
    "@wdio/cli": "7.16.10",
    "@wdio/jasmine-framework": "7.16.6",
    "@wdio/local-runner": "7.16.10",
    "@wdio/spec-reporter": "7.16.9",
    "@wdio/static-server-service": "7.16.6"
  },
  "scripts": {
    "examples:browser:webpack:build": "cd examples/browser-webpack && npm install && npm run build",
    "examples:browser:rollup:build": "cd examples/browser-rollup && npm install && npm run build",
    "examples:node:commonjs:test": "cd examples/node-commonjs && npm install && npm test",
    "examples:node:esmodules:test": "cd examples/node-esmodules && npm install && npm test",
    "examples:node:jest:test": "cd examples/node-jest && npm install && npm test",
    "prepare": "cd $( git rev-parse --show-toplevel ) && husky install",
    "lint": "npm run eslint:check && npm run prettier:check",
    "eslint:check": "eslint src/ test/ examples/ *.js",
    "eslint:fix": "eslint --fix src/ test/ examples/ *.js",
    "pretest": "[ -n $CI ] || npm run build",
    "test": "BABEL_ENV=commonjsNode node --throw-deprecation node_modules/.bin/jest test/unit/",
    "pretest:browser": "optional-dev-dependency && npm run build && npm-run-all --parallel examples:browser:**",
    "test:browser": "wdio run ./wdio.conf.js",
    "pretest:node": "npm run build",
    "test:node": "npm-run-all --parallel examples:node:**",
    "test:pack": "./scripts/testpack.sh",
    "pretest:benchmark": "npm run build",
    "test:benchmark": "cd examples/benchmark && npm install && npm test",
    "prettier:check": "prettier --check '**/*.{js,jsx,json,md}'",
    "prettier:fix": "prettier --write '**/*.{js,jsx,json,md}'",
    "bundlewatch": "npm run pretest:browser && bundlewatch --config bundlewatch.config.json",
    "md": "runmd --watch --output=README.md README_js.md",
    "docs": "( node --version | grep -q 'v18' ) && ( npm run build && npx runmd --output=README.md README_js.md )",
    "docs:diff": "npm run docs && git diff --quiet README.md",
    "build": "./scripts/build.sh",
    "prepack": "npm run build",
    "release": "standard-version --no-verify"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/uuidjs/uuid.git"
  },
  "lint-staged": {
    "*.{js,jsx,json,md}": [
      "prettier --write"
    ],
    "*.{js,jsx}": [
      "eslint --fix"
    ]
  },
  "standard-version": {
    "scripts": {
      "postchangelog": "prettier --write CHANGELOG.md"
    }
  }
}
