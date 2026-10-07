{
  "name": "escalade",
  "version": "3.2.0",
  "repository": "lukeed/escalade",
  "description": "A tiny (183B to 210B) and fast utility to ascend parent directories",
  "module": "dist/index.mjs",
  "main": "dist/index.js",
  "types": "index.d.ts",
  "license": "MIT",
  "author": {
    "name": "Luke Edwards",
    "email": "luke.edwards05@gmail.com",
    "url": "https://lukeed.com"
  },
  "exports": {
    ".": [
      {
        "import": {
          "types": "./index.d.mts",
          "default": "./dist/index.mjs"
        },
        "require": {
          "types": "./index.d.ts",
          "default": "./dist/index.js"
        }
      },
      "./dist/index.js"
    ],
    "./sync": [
      {
        "import": {
          "types": "./sync/index.d.mts",
          "default": "./sync/index.mjs"
        },
        "require": {
          "types": "./sync/index.d.ts",
          "default": "./sync/index.js"
        }
      },
      "./sync/index.js"
    ]
  },
  "files": [
    "*.d.mts",
    "*.d.ts",
    "dist",
    "sync"
  ],
  "modes": {
    "sync": "src/sync.js",
    "default": "src/async.js"
  },
  "engines": {
    "node": ">=6"
  },
  "scripts": {
    "build": "bundt",
    "pretest": "npm run build",
    "test": "uvu -r esm test -i fixtures"
  },
  "keywords": [
    "find",
    "parent",
    "parents",
    "directory",
    "search",
    "walk"
  ],
  "devDependencies": {
    "bundt": "1.1.1",
    "esm": "3.2.25",
    "uvu": "0.3.3"
  }
}
