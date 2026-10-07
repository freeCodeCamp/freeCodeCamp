{
  "name": "deepmerge",
  "description": "A library for deep (recursive) merging of Javascript objects",
  "keywords": [
    "merge",
    "deep",
    "extend",
    "copy",
    "clone",
    "recursive"
  ],
  "version": "4.3.1",
  "homepage": "https://github.com/TehShrike/deepmerge",
  "repository": {
    "type": "git",
    "url": "git://github.com/TehShrike/deepmerge.git"
  },
  "main": "dist/cjs.js",
  "engines": {
    "node": ">=0.10.0"
  },
  "scripts": {
    "build": "rollup -c",
    "test": "npm run build && tape test/*.js && jsmd readme.md && npm run test:typescript",
    "test:typescript": "tsc --noEmit test/typescript.ts && ts-node test/typescript.ts",
    "size": "npm run build && uglifyjs --compress --mangle -- ./dist/umd.js | gzip -c | wc -c"
  },
  "devDependencies": {
    "@types/node": "^8.10.54",
    "is-mergeable-object": "1.1.0",
    "is-plain-object": "^5.0.0",
    "jsmd": "^1.0.2",
    "rollup": "^1.23.1",
    "rollup-plugin-commonjs": "^10.1.0",
    "rollup-plugin-node-resolve": "^5.2.0",
    "tape": "^4.11.0",
    "ts-node": "7.0.1",
    "typescript": "=2.2.2",
    "uglify-js": "^3.6.1"
  },
  "license": "MIT"
}
