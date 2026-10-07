{
  "name": "balanced-match",
  "description": "Match balanced character pairs, like \"{\" and \"}\"",
  "version": "4.0.4",
  "files": [
    "dist"
  ],
  "repository": {
    "type": "git",
    "url": "git://github.com/juliangruber/balanced-match.git"
  },
  "exports": {
    "./package.json": "./package.json",
    ".": {
      "import": {
        "types": "./dist/esm/index.d.ts",
        "default": "./dist/esm/index.js"
      },
      "require": {
        "types": "./dist/commonjs/index.d.ts",
        "default": "./dist/commonjs/index.js"
      }
    }
  },
  "type": "module",
  "scripts": {
    "preversion": "npm test",
    "postversion": "npm publish",
    "prepublishOnly": "git push origin --follow-tags",
    "prepare": "tshy",
    "pretest": "npm run prepare",
    "presnap": "npm run prepare",
    "test": "tap",
    "snap": "tap",
    "format": "prettier --write .",
    "benchmark": "node benchmark/index.js",
    "typedoc": "typedoc --tsconfig .tshy/esm.json ./src/*.ts"
  },
  "devDependencies": {
    "@types/brace-expansion": "^1.1.2",
    "@types/node": "^25.2.1",
    "mkdirp": "^3.0.1",
    "prettier": "^3.3.2",
    "tap": "^21.6.2",
    "tshy": "^3.0.2",
    "typedoc": "^0.28.5"
  },
  "keywords": [
    "match",
    "regexp",
    "test",
    "balanced",
    "parse"
  ],
  "license": "MIT",
  "engines": {
    "node": "18 || 20 || >=22"
  },
  "tshy": {
    "exports": {
      "./package.json": "./package.json",
      ".": "./src/index.ts"
    }
  },
  "main": "./dist/commonjs/index.js",
  "types": "./dist/commonjs/index.d.ts",
  "module": "./dist/esm/index.js"
}
