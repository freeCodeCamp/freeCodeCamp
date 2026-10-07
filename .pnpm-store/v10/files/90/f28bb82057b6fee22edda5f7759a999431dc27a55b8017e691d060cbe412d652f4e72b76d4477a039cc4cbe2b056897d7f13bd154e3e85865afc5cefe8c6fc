{
  "name": "@jridgewell/trace-mapping",
  "version": "0.3.31",
  "description": "Trace the original position through a source map",
  "keywords": [
    "source",
    "map"
  ],
  "main": "dist/trace-mapping.umd.js",
  "module": "dist/trace-mapping.mjs",
  "types": "types/trace-mapping.d.cts",
  "files": [
    "dist",
    "src",
    "types"
  ],
  "exports": {
    ".": [
      {
        "import": {
          "types": "./types/trace-mapping.d.mts",
          "default": "./dist/trace-mapping.mjs"
        },
        "default": {
          "types": "./types/trace-mapping.d.cts",
          "default": "./dist/trace-mapping.umd.js"
        }
      },
      "./dist/trace-mapping.umd.js"
    ],
    "./package.json": "./package.json"
  },
  "scripts": {
    "benchmark": "run-s build:code benchmark:*",
    "benchmark:install": "cd benchmark && npm install",
    "benchmark:only": "node --expose-gc benchmark/index.mjs",
    "build": "run-s -n build:code build:types",
    "build:code": "node ../../esbuild.mjs trace-mapping.ts",
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
  "homepage": "https://github.com/jridgewell/sourcemaps/tree/main/packages/trace-mapping",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/jridgewell/sourcemaps.git",
    "directory": "packages/trace-mapping"
  },
  "author": "Justin Ridgewell <justin@ridgewell.name>",
  "license": "MIT",
  "dependencies": {
    "@jridgewell/resolve-uri": "^3.1.0",
    "@jridgewell/sourcemap-codec": "^1.4.14"
  }
}
