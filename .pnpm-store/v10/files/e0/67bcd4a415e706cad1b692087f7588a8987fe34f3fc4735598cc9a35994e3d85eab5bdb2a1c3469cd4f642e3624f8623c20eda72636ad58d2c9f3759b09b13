{
  "name": "@eslint/core",
  "version": "0.17.0",
  "description": "Runtime-agnostic core of ESLint",
  "type": "module",
  "types": "./dist/esm/types.d.ts",
  "exports": {
    "types": {
      "import": "./dist/esm/types.d.ts",
      "require": "./dist/cjs/types.d.cts"
    }
  },
  "files": [
    "dist"
  ],
  "publishConfig": {
    "access": "public"
  },
  "scripts": {
    "build:cts": "node -e \"fs.cpSync('dist/esm/types.d.ts', 'dist/cjs/types.d.cts')\"",
    "build": "tsc && npm run build:cts",
    "test:jsr": "npx jsr@latest publish --dry-run",
    "test:types": "tsc -p tests/types/tsconfig.json"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/eslint/rewrite.git",
    "directory": "packages/core"
  },
  "keywords": [
    "eslint",
    "core"
  ],
  "author": "Nicholas C. Zakas",
  "license": "Apache-2.0",
  "bugs": {
    "url": "https://github.com/eslint/rewrite/issues"
  },
  "homepage": "https://github.com/eslint/rewrite/tree/main/packages/core#readme",
  "dependencies": {
    "@types/json-schema": "^7.0.15"
  },
  "devDependencies": {
    "json-schema": "^0.4.0"
  },
  "engines": {
    "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
  }
}
