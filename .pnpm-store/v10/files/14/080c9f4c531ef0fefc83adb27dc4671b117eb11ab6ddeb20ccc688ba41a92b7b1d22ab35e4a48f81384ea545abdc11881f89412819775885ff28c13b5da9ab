{
  "name": "@jridgewell/remapping",
  "version": "2.3.5",
  "description": "Remap sequential sourcemaps through transformations to point at the original source code",
  "keywords": [
    "source",
    "map",
    "remap"
  ],
  "main": "dist/remapping.umd.js",
  "module": "dist/remapping.mjs",
  "types": "types/remapping.d.cts",
  "files": [
    "dist",
    "src",
    "types"
  ],
  "exports": {
    ".": [
      {
        "import": {
          "types": "./types/remapping.d.mts",
          "default": "./dist/remapping.mjs"
        },
        "default": {
          "types": "./types/remapping.d.cts",
          "default": "./dist/remapping.umd.js"
        }
      },
      "./dist/remapping.umd.js"
    ],
    "./package.json": "./package.json"
  },
  "scripts": {
    "benchmark": "run-s build:code benchmark:*",
    "benchmark:install": "cd benchmark && npm install",
    "benchmark:only": "node --expose-gc benchmark/index.js",
    "build": "run-s -n build:code build:types",
    "build:code": "node ../../esbuild.mjs remapping.ts",
    "build:types": "run-s build:types:force build:types:emit build:types:mts",
    "build:types:force": "rimraf tsconfig.build.tsbuildinfo",
    "build:types:emit": "tsc --project tsconfig.build.json",
    "build:types:mts": "node ../../mts-types.mjs",
    "clean": "run-s -n clean:code clean:types",
    "clean:code": "tsc --build --clean tsconfig.build.json",
    "clean:types": "rimraf dist types",
    "test": "run-s -n test:types test:only test:format",
    "test:format": "prettier --check '{src,test}/**/*.ts'",
    "test:only": "mocha",
    "test:types": "eslint '{src,test}/**/*.ts'",
    "lint": "run-s -n lint:types lint:format",
    "lint:format": "npm run test:format -- --write",
    "lint:types": "npm run test:types -- --fix",
    "prepublishOnly": "npm run-s -n build test"
  },
  "homepage": "https://github.com/jridgewell/sourcemaps/tree/main/packages/remapping",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/jridgewell/sourcemaps.git",
    "directory": "packages/remapping"
  },
  "author": "Justin Ridgewell <justin@ridgewell.name>",
  "license": "MIT",
  "dependencies": {
    "@jridgewell/gen-mapping": "^0.3.5",
    "@jridgewell/trace-mapping": "^0.3.24"
  },
  "devDependencies": {
    "source-map": "0.6.1"
  }
}
