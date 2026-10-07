{
  "name": "@jridgewell/gen-mapping",
  "version": "0.3.13",
  "description": "Generate source maps",
  "keywords": [
    "source",
    "map"
  ],
  "main": "dist/gen-mapping.umd.js",
  "module": "dist/gen-mapping.mjs",
  "types": "types/gen-mapping.d.cts",
  "files": [
    "dist",
    "src",
    "types"
  ],
  "exports": {
    ".": [
      {
        "import": {
          "types": "./types/gen-mapping.d.mts",
          "default": "./dist/gen-mapping.mjs"
        },
        "default": {
          "types": "./types/gen-mapping.d.cts",
          "default": "./dist/gen-mapping.umd.js"
        }
      },
      "./dist/gen-mapping.umd.js"
    ],
    "./package.json": "./package.json"
  },
  "scripts": {
    "benchmark": "run-s build:code benchmark:*",
    "benchmark:install": "cd benchmark && npm install",
    "benchmark:only": "node --expose-gc benchmark/index.js",
    "build": "run-s -n build:code build:types",
    "build:code": "node ../../esbuild.mjs gen-mapping.ts",
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
  "homepage": "https://github.com/jridgewell/sourcemaps/tree/main/packages/gen-mapping",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/jridgewell/sourcemaps.git",
    "directory": "packages/gen-mapping"
  },
  "author": "Justin Ridgewell <justin@ridgewell.name>",
  "license": "MIT",
  "dependencies": {
    "@jridgewell/sourcemap-codec": "^1.5.0",
    "@jridgewell/trace-mapping": "^0.3.24"
  }
}
