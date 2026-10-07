{
    "name": "iconv-lite",
    "description": "Convert character encodings in pure javascript.",
    "version": "0.7.2",
    "license": "MIT",
    "keywords": [
        "iconv",
        "convert",
        "charset",
        "icu"
    ],
    "author": "Alexander Shtuchkin <ashtuchkin@gmail.com>",
    "main": "./lib/index.js",
    "typings": "./lib/index.d.ts",
    "homepage": "https://github.com/pillarjs/iconv-lite",
    "bugs": "https://github.com/pillarjs/iconv-lite/issues",
    "files": [
        "lib/",
        "encodings/",
        "types/"
    ],
    "funding": {
      "type": "opencollective",
      "url": "https://opencollective.com/express"
    },
    "repository": {
        "type": "git",
        "url": "https://github.com/pillarjs/iconv-lite.git"
    },
    "engines": {
        "node": ">=0.10.0"
    },
    "scripts": {
        "lint": "eslint",
        "lint:fix": "eslint --fix",
        "test": "mocha --reporter spec --check-leaks --grep .",
        "test:ci": "nyc --exclude test --reporter=lcovonly --reporter=text npm test",
        "test:cov": "nyc --exclude test --reporter=html --reporter=text npm test",
        "test:performance": "node --allow-natives-syntax performance/index.js",
        "test:tap": "mocha --reporter tap --check-leaks --grep .",
        "test:typescript": "tsc && attw --pack",
        "test:webpack": "npm pack && mv iconv-lite-*.tgz test/webpack/iconv-lite.tgz && cd test/webpack && npm install && npm run test && rm iconv-lite.tgz",
        "typegen": "node generation/gen-typings.js"
    },
    "browser": {
        "stream": false
    },
    "devDependencies": {
        "@arethetypeswrong/cli": "^0.17.4",
        "@stylistic/eslint-plugin": "^5.1.0",
        "@stylistic/eslint-plugin-js": "^4.1.0",
        "@types/node": "^24.0.12",
        "async": "^3.2.0",
        "bench-node": "^0.10.0",
        "eslint": "^9.0.0",
        "errto": "^0.2.1",
        "expect-type": "^1.2.0",
        "iconv": "^2.3.5",
        "mocha": "^6.2.2",
        "neostandard": "^0.12.0",    
        "nyc": "^14.1.1",
        "request": "^2.88.2",
        "semver": "^6.3.0",
        "typescript": "~5.9.2",
        "unorm": "^1.6.0"
    },
    "dependencies": {
        "safer-buffer": ">= 2.1.2 < 3.0.0"
    }
}
