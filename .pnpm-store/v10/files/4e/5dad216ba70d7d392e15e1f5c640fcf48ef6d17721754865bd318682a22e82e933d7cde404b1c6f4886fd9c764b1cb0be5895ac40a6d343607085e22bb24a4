{
  "name": "@standard-schema/utils",
  "description": "The official runtime utils for Standard Schema",
  "version": "0.3.0",
  "license": "MIT",
  "author": "Fabian Hiller",
  "repository": {
    "type": "git",
    "url": "https://github.com/standard-schema/standard-schema"
  },
  "keywords": [
    "standard",
    "schema",
    "utils"
  ],
  "type": "module",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": {
        "types": "./dist/index.d.ts",
        "default": "./dist/index.js"
      },
      "require": {
        "types": "./dist/index.d.cts",
        "default": "./dist/index.cjs"
      }
    }
  },
  "sideEffects": false,
  "files": [
    "dist"
  ],
  "publishConfig": {
    "access": "public"
  },
  "devDependencies": {
    "@standard-schema/spec": "npm:@jsr/standard-schema__spec@1.0.0-beta.4",
    "@vitest/coverage-v8": "2.1.2",
    "tsup": "^8.3.0",
    "typescript": "^5.6.2",
    "vite": "^5.4.8",
    "vitest": "^2.1.2"
  },
  "scripts": {
    "test": "vitest",
    "coverage": "vitest run --coverage --isolate",
    "lint": "pnpm biome lint ./src",
    "format": "pnpm biome format --write ./src",
    "check": "pnpm biome check ./src",
    "build": "tsup"
  }
}