{
  "name": "@ampproject/remapping",
  "version": "2.2.1",
  "description": "Remap sequential sourcemaps through transformations to point at the original source code",
  "keywords": [
    "source",
    "map",
    "remap"
  ],
  "main": "dist/remapping.umd.js",
  "module": "dist/remapping.mjs",
  "types": "dist/types/remapping.d.ts",
  "exports": {
    ".": [
      {
        "types": "./dist/types/remapping.d.ts",
        "browser": "./dist/remapping.umd.js",
        "require": "./dist/remapping.umd.js",
        "import": "./dist/remapping.mjs"
      },
      "./dist/remapping.umd.js"
    ],
    "./package.json": "./package.json"
  },
  "files": [
    "dist"
  ],
  "author": "Justin Ridgewell <jridgewell@google.com>",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/ampproject/remapping.git"
  },
  "license": "Apache-2.0",
  "engines": {
    "node": ">=6.0.0"
  },
  "scripts": {
    "build": "run-s -n build:*",
    "build:rollup": "rollup -c rollup.config.js",
    "build:ts": "tsc --project tsconfig.build.json",
    "lint": "run-s -n lint:*",
    "lint:prettier": "npm run test:lint:prettier -- --write",
    "lint:ts": "npm run test:lint:ts -- --fix",
    "prebuild": "rm -rf dist",
    "prepublishOnly": "npm run preversion",
    "preversion": "run-s test build",
    "test": "run-s -n test:lint test:only",
    "test:debug": "node --inspect-brk node_modules/.bin/jest --runInBand",
    "test:lint": "run-s -n test:lint:*",
    "test:lint:prettier": "prettier --check '{src,test}/**/*.ts'",
    "test:lint:ts": "eslint '{src,test}/**/*.ts'",
    "test:only": "jest --coverage",
    "test:watch": "jest --coverage --watch"
  },
  "devDependencies": {
    "@rollup/plugin-typescript": "8.3.2",
    "@types/jest": "27.4.1",
    "@typescript-eslint/eslint-plugin": "5.20.0",
    "@typescript-eslint/parser": "5.20.0",
    "eslint": "8.14.0",
    "eslint-config-prettier": "8.5.0",
    "jest": "27.5.1",
    "jest-config": "27.5.1",
    "npm-run-all": "4.1.5",
    "prettier": "2.6.2",
    "rollup": "2.70.2",
    "ts-jest": "27.1.4",
    "tslib": "2.4.0",
    "typescript": "4.6.3"
  },
  "dependencies": {
    "@jridgewell/gen-mapping": "^0.3.0",
    "@jridgewell/trace-mapping": "^0.3.9"
  }
}
