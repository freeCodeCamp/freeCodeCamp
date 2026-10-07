{
  "name": "bson",
  "description": "A bson parser for node.js and the browser",
  "keywords": [
    "mongodb",
    "bson",
    "parser"
  ],
  "files": [
    "lib",
    "src",
    "bson.d.ts",
    "etc/prepare.js",
    "vendor"
  ],
  "types": "bson.d.ts",
  "version": "7.2.0",
  "author": {
    "name": "The MongoDB NodeJS Team",
    "email": "dbx-node@mongodb.com"
  },
  "license": "Apache-2.0",
  "contributors": [],
  "repository": "mongodb/js-bson",
  "bugs": {
    "url": "https://jira.mongodb.org/projects/NODE/issues/"
  },
  "devDependencies": {
    "@istanbuljs/nyc-config-typescript": "^1.0.2",
    "@microsoft/api-extractor": "^7.52.5",
    "@rollup/plugin-node-resolve": "^16.0.1",
    "@rollup/plugin-typescript": "^12.1.2",
    "@types/chai": "^4.3.17",
    "@types/mocha": "^10.0.7",
    "@types/node": "^24.2.1",
    "@types/sinon": "^17.0.4",
    "@types/sinon-chai": "^3.2.12",
    "@typescript-eslint/eslint-plugin": "^8.31.1",
    "@typescript-eslint/parser": "^8.31.1",
    "benchmark": "^2.1.4",
    "chai": "^4.4.1",
    "chalk": "^5.3.0",
    "dbx-js-tools": "github:mongodb-js/dbx-js-tools#main",
    "eslint": "^9.33.0",
    "eslint-config-prettier": "^10.1.2",
    "eslint-plugin-prettier": "^5.2.6",
    "eslint-plugin-tsdoc": "^0.4.0",
    "magic-string": "^0.30.11",
    "mocha": "^11.7.1",
    "node-fetch": "^3.3.2",
    "nyc": "^17.1.0",
    "prettier": "^3.5.3",
    "rollup": "^4.40.1",
    "sinon": "^21.0.0",
    "sinon-chai": "^3.7.0",
    "source-map-support": "^0.5.21",
    "tar": "^7.4.3",
    "ts-node": "^10.9.2",
    "tsd": "^0.33.0",
    "typescript": "^5.8.3",
    "typescript-cached-transpile": "0.0.6",
    "uuid": "^11.1.0"
  },
  "tsd": {
    "directory": "test/types",
    "compilerOptions": {
      "strict": true,
      "target": "esnext",
      "module": "commonjs",
      "moduleResolution": "node"
    }
  },
  "config": {
    "native": false
  },
  "main": "./lib/bson.cjs",
  "module": "./lib/bson.node.mjs",
  "exports": {
    "browser": {
      "types": "./bson.d.ts",
      "default": "./lib/bson.mjs"
    },
    "react-native": "./lib/bson.rn.cjs",
    "default": {
      "types": "./bson.d.ts",
      "import": "./lib/bson.node.mjs",
      "require": "./lib/bson.cjs"
    }
  },
  "compass:exports": {
    "import": "./lib/bson.cjs",
    "require": "./lib/bson.cjs"
  },
  "engines": {
    "node": ">=20.19.0"
  },
  "scripts": {
    "pretest": "npm run build",
    "test": "npm run check:node && npm run check:web",
    "check:node": "WEB=false mocha test/node",
    "check:tsd": "npm run build:dts && tsd",
    "check:web": "WEB=true mocha test/node",
    "check:granular-bench": "npm run build:bench && npm run check:baseline-bench && node ./test/bench/etc/run_granular_benchmarks.js",
    "check:spec-bench": "npm run build:bench && npm run check:baseline-bench && node ./test/bench/lib/spec/bsonBench.js",
    "check:custom-bench": "npm run build && npm run check:baseline-bench && node ./test/bench/custom/main.mjs",
    "check:baseline-bench": "node ./test/bench/etc/cpuBaseline.js",
    "build:bench": "cd test/bench && npx tsc",
    "build:ts": "node ./node_modules/typescript/bin/tsc",
    "build:dts": "npm run build:ts && api-extractor run --typescript-compiler-folder node_modules/typescript --local && node etc/clean_definition_files.cjs",
    "build:bundle": "rollup -c rollup.config.mjs",
    "build": "npm run build:dts && npm run build:bundle",
    "check:lint": "ESLINT_USE_FLAT_CONFIG=false eslint -v && ESLINT_USE_FLAT_CONFIG=false eslint --ext '.js,.ts' --max-warnings=0 src test && npm run build:dts && npm run check:tsd",
    "format": "ESLINT_USE_FLAT_CONFIG=false eslint --ext '.js,.ts' src test --fix",
    "check:coverage": "nyc --check-coverage npm run check:node",
    "prepare": "node etc/prepare.js",
    "release": "standard-version -i HISTORY.md"
  }
}
