{
  "name": "@jridgewell/sourcemap-codec",
  "version": "1.5.5",
  "description": "Encode/decode sourcemap mappings",
  "keywords": [
    "sourcemap",
    "vlq"
  ],
  "main": "dist/sourcemap-codec.umd.js",
  "module": "dist/sourcemap-codec.mjs",
  "types": "types/sourcemap-codec.d.cts",
  "files": [
    "dist",
    "src",
    "types"
  ],
  "exports": {
    ".": [
      {
        "import": {
          "types": "./types/sourcemap-codec.d.mts",
          "default": "./dist/sourcemap-codec.mjs"
        },
        "default": {
          "types": "./types/sourcemap-codec.d.cts",
          "default": "./dist/sourcemap-codec.umd.js"
        }
      },
      "./dist/sourcemap-codec.umd.js"
    ],
    "./package.json": "./package.json"
  },
  "scripts": {
    "benchmark": "run-s build:code benchmark:*",
    "benchmark:install": "cd benchmark && npm install",
    "benchmark:only": "node --expose-gc benchmark/index.js",
    "build": "run-s -n build:code build:types",
    "build:code": "node ../../esbuild.mjs sourcemap-codec.ts",
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
  "homepage": "https://github.com/jridgewell/sourcemaps/tree/main/packages/sourcemap-codec",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/jridgewell/sourcemaps.git",
    "directory": "packages/sourcemap-codec"
  },
  "author": "Justin Ridgewell <justin@ridgewell.name>",
  "license": "MIT"
}
