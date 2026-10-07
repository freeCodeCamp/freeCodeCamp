{
  "name": "@eslint/config-helpers",
  "version": "0.4.2",
  "description": "Helper utilities for creating ESLint configuration",
  "type": "module",
  "main": "dist/esm/index.js",
  "types": "dist/esm/index.d.ts",
  "exports": {
    "require": {
      "types": "./dist/cjs/index.d.cts",
      "default": "./dist/cjs/index.cjs"
    },
    "import": {
      "types": "./dist/esm/index.d.ts",
      "default": "./dist/esm/index.js"
    }
  },
  "files": [
    "dist"
  ],
  "publishConfig": {
    "access": "public"
  },
  "directories": {
    "test": "tests"
  },
  "scripts": {
    "build:dedupe-types": "node ../../tools/dedupe-types.js dist/cjs/index.cjs dist/esm/index.js",
    "build:cts": "node ../../tools/build-cts.js dist/esm/index.d.ts dist/cjs/index.d.cts",
    "build": "rollup -c && npm run build:dedupe-types && tsc -p tsconfig.esm.json && npm run build:cts",
    "test": "mocha \"tests/**/*.test.js\"",
    "test:coverage": "c8 npm test",
    "test:jsr": "npx jsr@latest publish --dry-run",
    "test:pnpm": "cd tests/pnpm && pnpm install && pnpm exec tsc",
    "test:types": "tsc -p tests/types/tsconfig.json"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/eslint/rewrite.git",
    "directory": "packages/config-helpers"
  },
  "keywords": [
    "eslint"
  ],
  "license": "Apache-2.0",
  "bugs": {
    "url": "https://github.com/eslint/rewrite/issues"
  },
  "homepage": "https://github.com/eslint/rewrite/tree/main/packages/config-helpers#readme",
  "dependencies": {
    "@eslint/core": "^0.17.0"
  },
  "devDependencies": {
    "eslint": "^9.27.0",
    "rollup-plugin-copy": "^3.5.0"
  },
  "engines": {
    "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
  }
}
