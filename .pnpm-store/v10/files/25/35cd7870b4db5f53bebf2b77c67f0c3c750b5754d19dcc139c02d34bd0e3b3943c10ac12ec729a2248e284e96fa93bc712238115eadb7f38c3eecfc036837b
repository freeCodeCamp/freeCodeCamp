{
  "name": "fast-deep-equal",
  "version": "3.1.3",
  "description": "Fast deep equal",
  "main": "index.js",
  "scripts": {
    "eslint": "eslint *.js benchmark/*.js spec/*.js",
    "build": "node build",
    "benchmark": "npm i && npm run build && cd ./benchmark && npm i && node ./",
    "test-spec": "mocha spec/*.spec.js -R spec",
    "test-cov": "nyc npm run test-spec",
    "test-ts": "tsc --target ES5 --noImplicitAny index.d.ts",
    "test": "npm run build && npm run eslint && npm run test-ts && npm run test-cov",
    "prepublish": "npm run build"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/epoberezkin/fast-deep-equal.git"
  },
  "keywords": [
    "fast",
    "equal",
    "deep-equal"
  ],
  "author": "Evgeny Poberezkin",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/epoberezkin/fast-deep-equal/issues"
  },
  "homepage": "https://github.com/epoberezkin/fast-deep-equal#readme",
  "devDependencies": {
    "coveralls": "^3.1.0",
    "dot": "^1.1.2",
    "eslint": "^7.2.0",
    "mocha": "^7.2.0",
    "nyc": "^15.1.0",
    "pre-commit": "^1.2.2",
    "react": "^16.12.0",
    "react-test-renderer": "^16.12.0",
    "sinon": "^9.0.2",
    "typescript": "^3.9.5"
  },
  "nyc": {
    "exclude": [
      "**/spec/**",
      "node_modules"
    ],
    "reporter": [
      "lcov",
      "text-summary"
    ]
  },
  "files": [
    "index.js",
    "index.d.ts",
    "react.js",
    "react.d.ts",
    "es6/"
  ],
  "types": "index.d.ts"
}
