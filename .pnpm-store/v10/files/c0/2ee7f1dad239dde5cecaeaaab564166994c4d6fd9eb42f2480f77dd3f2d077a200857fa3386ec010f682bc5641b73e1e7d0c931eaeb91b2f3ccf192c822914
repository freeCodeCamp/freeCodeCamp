{
  "name": "fast-glob",
  "version": "3.3.3",
  "description": "It's a very fast and efficient glob library for Node.js",
  "license": "MIT",
  "repository": "mrmlnc/fast-glob",
  "author": {
    "name": "Denis Malinochkin",
    "url": "https://mrmlnc.com"
  },
  "engines": {
    "node": ">=8.6.0"
  },
  "main": "out/index.js",
  "typings": "out/index.d.ts",
  "files": [
    "out",
    "!out/{benchmark,tests}",
    "!out/**/*.map",
    "!out/**/*.spec.*"
  ],
  "keywords": [
    "glob",
    "patterns",
    "fast",
    "implementation"
  ],
  "devDependencies": {
    "@nodelib/fs.macchiato": "^1.0.1",
    "@types/glob-parent": "^5.1.0",
    "@types/merge2": "^1.1.4",
    "@types/micromatch": "^4.0.0",
    "@types/mocha": "^5.2.7",
    "@types/node": "^14.18.53",
    "@types/picomatch": "^2.3.0",
    "@types/sinon": "^7.5.0",
    "bencho": "^0.1.1",
    "eslint": "^6.5.1",
    "eslint-config-mrmlnc": "^1.1.0",
    "execa": "^7.1.1",
    "fast-glob": "^3.0.4",
    "fdir": "6.0.1",
    "glob": "^10.0.0",
    "hereby": "^1.8.1",
    "mocha": "^6.2.1",
    "rimraf": "^5.0.0",
    "sinon": "^7.5.0",
    "snap-shot-it": "^7.9.10",
    "typescript": "^4.9.5"
  },
  "dependencies": {
    "@nodelib/fs.stat": "^2.0.2",
    "@nodelib/fs.walk": "^1.2.3",
    "glob-parent": "^5.1.2",
    "merge2": "^1.3.0",
    "micromatch": "^4.0.8"
  },
  "scripts": {
    "clean": "rimraf out",
    "lint": "eslint \"src/**/*.ts\" --cache",
    "compile": "tsc",
    "test": "mocha \"out/**/*.spec.js\" -s 0",
    "test:e2e": "mocha \"out/**/*.e2e.js\" -s 0",
    "test:e2e:sync": "mocha \"out/**/*.e2e.js\" -s 0 --grep \"\\(sync\\)\"",
    "test:e2e:async": "mocha \"out/**/*.e2e.js\" -s 0 --grep \"\\(async\\)\"",
    "test:e2e:stream": "mocha \"out/**/*.e2e.js\" -s 0 --grep \"\\(stream\\)\"",
    "build": "npm run clean && npm run compile && npm run lint && npm test",
    "watch": "npm run clean && npm run compile -- -- --sourceMap --watch",
    "bench:async": "npm run bench:product:async && npm run bench:regression:async",
    "bench:stream": "npm run bench:product:stream && npm run bench:regression:stream",
    "bench:sync": "npm run bench:product:sync && npm run bench:regression:sync",
    "bench:product": "npm run bench:product:async && npm run bench:product:sync && npm run bench:product:stream",
    "bench:product:async": "hereby bench:product:async",
    "bench:product:sync": "hereby bench:product:sync",
    "bench:product:stream": "hereby bench:product:stream",
    "bench:regression": "npm run bench:regression:async && npm run bench:regression:sync && npm run bench:regression:stream",
    "bench:regression:async": "hereby bench:regression:async",
    "bench:regression:sync": "hereby bench:regression:sync",
    "bench:regression:stream": "hereby bench:regression:stream"
  }
}
