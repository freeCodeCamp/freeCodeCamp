{
  "name": "json-schema-traverse",
  "version": "0.4.1",
  "description": "Traverse JSON Schema passing each schema object to callback",
  "main": "index.js",
  "scripts": {
    "eslint": "eslint index.js spec",
    "test-spec": "mocha spec -R spec",
    "test": "npm run eslint && nyc npm run test-spec"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/epoberezkin/json-schema-traverse.git"
  },
  "keywords": [
    "JSON-Schema",
    "traverse",
    "iterate"
  ],
  "author": "Evgeny Poberezkin",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/epoberezkin/json-schema-traverse/issues"
  },
  "homepage": "https://github.com/epoberezkin/json-schema-traverse#readme",
  "devDependencies": {
    "coveralls": "^2.13.1",
    "eslint": "^3.19.0",
    "mocha": "^3.4.2",
    "nyc": "^11.0.2",
    "pre-commit": "^1.2.2"
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
  }
}
