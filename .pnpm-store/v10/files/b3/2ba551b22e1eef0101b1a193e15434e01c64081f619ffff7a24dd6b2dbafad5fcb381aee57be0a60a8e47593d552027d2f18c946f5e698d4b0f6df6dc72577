{
  "name": "@humanwhocodes/module-importer",
  "version": "1.0.1",
  "description": "Universal module importer for Node.js",
  "main": "src/module-importer.cjs",
  "module": "src/module-importer.js",
  "type": "module",
  "types": "dist/module-importer.d.ts",
  "exports": {
    "require": "./src/module-importer.cjs",
    "import": "./src/module-importer.js"
  },
  "files": [
    "dist",
    "src"
  ],
  "publishConfig": {
    "access": "public"
  },
  "gitHooks": {
    "pre-commit": "lint-staged"
  },
  "lint-staged": {
    "*.js": [
      "eslint --fix"
    ]
  },
  "funding": {
    "type": "github",
    "url": "https://github.com/sponsors/nzakas"
  },
  "scripts": {
    "build": "rollup -c && tsc",
    "prepare": "npm run build",
    "lint": "eslint src/ tests/",
    "test:unit": "c8 mocha tests/module-importer.test.js",
    "test:build": "node tests/pkg.test.cjs && node tests/pkg.test.mjs",
    "test": "npm run test:unit && npm run test:build"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/humanwhocodes/module-importer.git"
  },
  "keywords": [
    "modules",
    "esm",
    "commonjs"
  ],
  "engines": {
    "node": ">=12.22"
  },
  "author": "Nicholas C. Zaks",
  "license": "Apache-2.0",
  "devDependencies": {
    "@types/node": "^18.7.6",
    "c8": "7.12.0",
    "chai": "4.3.6",
    "eslint": "8.22.0",
    "lint-staged": "13.0.3",
    "mocha": "9.2.2",
    "rollup": "2.78.0",
    "typescript": "4.7.4",
    "yorkie": "2.0.0"
  }
}
