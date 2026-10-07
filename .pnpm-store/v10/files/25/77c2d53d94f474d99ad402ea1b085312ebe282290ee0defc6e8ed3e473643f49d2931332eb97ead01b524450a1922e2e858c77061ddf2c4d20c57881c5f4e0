{
  "name": "@humanfs/core",
  "version": "0.19.1",
  "description": "The core of the humanfs library.",
  "type": "module",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "exports": {
    "import": {
      "types": "./dist/index.d.ts",
      "default": "./src/index.js"
    }
  },
  "files": [
    "dist",
    "src"
  ],
  "scripts": {
    "build": "tsc",
    "prepare": "npm run build",
    "pretest": "npm run build",
    "test": "c8 mocha tests"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/humanwhocodes/humanfs.git"
  },
  "publishConfig": {
    "access": "public"
  },
  "keywords": [
    "filesystem",
    "fs",
    "hfs",
    "files"
  ],
  "author": "Nicholas C. Zakas",
  "license": "Apache-2.0",
  "bugs": {
    "url": "https://github.com/humanwhocodes/humanfs/issues"
  },
  "homepage": "https://github.com/humanwhocodes/humanfs#readme",
  "engines": {
    "node": ">=18.18.0"
  },
  "devDependencies": {
    "@humanfs/types": "^0.15.0",
    "c8": "^9.0.0",
    "mocha": "^10.2.0",
    "typescript": "^5.2.2"
  }
}
