{
  "name": "@standard-schema/spec",
  "description": "A family of specs for interoperable TypeScript",
  "version": "1.1.0",
  "license": "MIT",
  "author": "Colin McDonnell",
  "homepage": "https://standardschema.dev",
  "repository": {
    "type": "git",
    "url": "https://github.com/standard-schema/standard-schema"
  },
  "keywords": [
    "typescript",
    "schema",
    "validation",
    "standard",
    "interface"
  ],
  "type": "module",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "standard-schema-spec": "./src/index.ts",
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
    "tsup": "^8.3.0",
    "typescript": "^5.6.2"
  },
  "scripts": {
    "lint": "pnpm biome lint ./src",
    "format": "pnpm biome format --write ./src",
    "check": "pnpm biome check ./src",
    "build": "tsup"
  }
}