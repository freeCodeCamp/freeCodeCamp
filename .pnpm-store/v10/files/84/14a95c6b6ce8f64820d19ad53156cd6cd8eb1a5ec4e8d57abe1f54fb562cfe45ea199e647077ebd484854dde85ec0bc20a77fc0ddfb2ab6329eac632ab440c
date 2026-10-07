{
  "name": "fast-json-stable-stringify",
  "version": "2.1.0",
  "description": "deterministic `JSON.stringify()` - a faster version of substack's json-stable-strigify without jsonify",
  "main": "index.js",
  "types": "index.d.ts",
  "dependencies": {},
  "devDependencies": {
    "benchmark": "^2.1.4",
    "coveralls": "^3.0.0",
    "eslint": "^6.7.0",
    "fast-stable-stringify": "latest",
    "faster-stable-stringify": "latest",
    "json-stable-stringify": "latest",
    "nyc": "^14.1.0",
    "pre-commit": "^1.2.2",
    "tape": "^4.11.0"
  },
  "scripts": {
    "eslint": "eslint index.js test",
    "test-spec": "tape test/*.js",
    "test": "npm run eslint && nyc npm run test-spec"
  },
  "repository": {
    "type": "git",
    "url": "git://github.com/epoberezkin/fast-json-stable-stringify.git"
  },
  "homepage": "https://github.com/epoberezkin/fast-json-stable-stringify",
  "keywords": [
    "json",
    "stringify",
    "deterministic",
    "hash",
    "stable"
  ],
  "author": {
    "name": "James Halliday",
    "email": "mail@substack.net",
    "url": "http://substack.net"
  },
  "license": "MIT",
  "nyc": {
    "exclude": [
      "test",
      "node_modules"
    ],
    "reporter": [
      "lcov",
      "text-summary"
    ]
  }
}
