{
  "name": "ajv",
  "version": "6.12.6",
  "description": "Another JSON Schema Validator",
  "main": "lib/ajv.js",
  "typings": "lib/ajv.d.ts",
  "files": [
    "lib/",
    "dist/",
    "scripts/",
    "LICENSE",
    ".tonic_example.js"
  ],
  "scripts": {
    "eslint": "eslint lib/{compile/,}*.js spec/{**/,}*.js scripts --ignore-pattern spec/JSON-Schema-Test-Suite",
    "jshint": "jshint lib/{compile/,}*.js",
    "lint": "npm run jshint && npm run eslint",
    "test-spec": "mocha spec/{**/,}*.spec.js -R spec",
    "test-fast": "AJV_FAST_TEST=true npm run test-spec",
    "test-debug": "npm run test-spec -- --inspect-brk",
    "test-cov": "nyc npm run test-spec",
    "test-ts": "tsc --target ES5 --noImplicitAny --noEmit spec/typescript/index.ts",
    "bundle": "del-cli dist && node ./scripts/bundle.js . Ajv pure_getters",
    "bundle-beautify": "node ./scripts/bundle.js js-beautify",
    "build": "del-cli lib/dotjs/*.js \"!lib/dotjs/index.js\" && node scripts/compile-dots.js",
    "test-karma": "karma start",
    "test-browser": "del-cli .browser && npm run bundle && scripts/prepare-tests && npm run test-karma",
    "test-all": "npm run test-cov && if-node-version 10 npm run test-browser",
    "test": "npm run lint && npm run build && npm run test-all",
    "prepublish": "npm run build && npm run bundle",
    "watch": "watch \"npm run build\" ./lib/dot"
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
  "repository": {
    "type": "git",
    "url": "https://github.com/ajv-validator/ajv.git"
  },
  "keywords": [
    "JSON",
    "schema",
    "validator",
    "validation",
    "jsonschema",
    "json-schema",
    "json-schema-validator",
    "json-schema-validation"
  ],
  "author": "Evgeny Poberezkin",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/ajv-validator/ajv/issues"
  },
  "homepage": "https://github.com/ajv-validator/ajv",
  "tonicExampleFilename": ".tonic_example.js",
  "dependencies": {
    "fast-deep-equal": "^3.1.1",
    "fast-json-stable-stringify": "^2.0.0",
    "json-schema-traverse": "^0.4.1",
    "uri-js": "^4.2.2"
  },
  "devDependencies": {
    "ajv-async": "^1.0.0",
    "bluebird": "^3.5.3",
    "brfs": "^2.0.0",
    "browserify": "^16.2.0",
    "chai": "^4.0.1",
    "coveralls": "^3.0.1",
    "del-cli": "^3.0.0",
    "dot": "^1.0.3",
    "eslint": "^7.3.1",
    "gh-pages-generator": "^0.2.3",
    "glob": "^7.0.0",
    "if-node-version": "^1.0.0",
    "js-beautify": "^1.7.3",
    "jshint": "^2.10.2",
    "json-schema-test": "^2.0.0",
    "karma": "^5.0.0",
    "karma-chrome-launcher": "^3.0.0",
    "karma-mocha": "^2.0.0",
    "karma-sauce-launcher": "^4.1.3",
    "mocha": "^8.0.1",
    "nyc": "^15.0.0",
    "pre-commit": "^1.1.1",
    "require-globify": "^1.3.0",
    "typescript": "^3.9.5",
    "uglify-js": "^3.6.9",
    "watch": "^1.0.0"
  },
  "collective": {
    "type": "opencollective",
    "url": "https://opencollective.com/ajv"
  },
  "funding": {
    "type": "github",
    "url": "https://github.com/sponsors/epoberezkin"
  }
}
