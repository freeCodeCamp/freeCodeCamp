{
    "name": "node-fetch",
    "version": "2.7.0",
    "description": "A light-weight module that brings window.fetch to node.js",
    "main": "lib/index.js",
    "browser": "./browser.js",
    "module": "lib/index.mjs",
    "files": [
        "lib/index.js",
        "lib/index.mjs",
        "lib/index.es.js",
        "browser.js"
    ],
    "engines": {
        "node": "4.x || >=6.0.0"
    },
    "scripts": {
        "build": "cross-env BABEL_ENV=rollup rollup -c",
        "prepare": "npm run build",
        "test": "cross-env BABEL_ENV=test mocha --require babel-register --throw-deprecation test/test.js",
        "report": "cross-env BABEL_ENV=coverage nyc --reporter lcov --reporter text mocha -R spec test/test.js",
        "coverage": "cross-env BABEL_ENV=coverage nyc --reporter json --reporter text mocha -R spec test/test.js && codecov -f coverage/coverage-final.json"
    },
    "repository": {
        "type": "git",
        "url": "https://github.com/bitinn/node-fetch.git"
    },
    "keywords": [
        "fetch",
        "http",
        "promise"
    ],
    "author": "David Frank",
    "license": "MIT",
    "bugs": {
        "url": "https://github.com/bitinn/node-fetch/issues"
    },
    "homepage": "https://github.com/bitinn/node-fetch",
    "dependencies": {
        "whatwg-url": "^5.0.0"
    },
    "peerDependencies": {
        "encoding": "^0.1.0"
    },
    "peerDependenciesMeta": {
        "encoding": {
            "optional": true
        }
    },
    "devDependencies": {
        "@ungap/url-search-params": "^0.1.2",
        "abort-controller": "^1.1.0",
        "abortcontroller-polyfill": "^1.3.0",
        "babel-core": "^6.26.3",
        "babel-plugin-istanbul": "^4.1.6",
        "babel-plugin-transform-async-generator-functions": "^6.24.1",
        "babel-polyfill": "^6.26.0",
        "babel-preset-env": "1.4.0",
        "babel-register": "^6.16.3",
        "chai": "^3.5.0",
        "chai-as-promised": "^7.1.1",
        "chai-iterator": "^1.1.1",
        "chai-string": "~1.3.0",
        "codecov": "3.3.0",
        "cross-env": "^5.2.0",
        "form-data": "^2.3.3",
        "is-builtin-module": "^1.0.0",
        "mocha": "^5.0.0",
        "nyc": "11.9.0",
        "parted": "^0.1.1",
        "promise": "^8.0.3",
        "resumer": "0.0.0",
        "rollup": "^0.63.4",
        "rollup-plugin-babel": "^3.0.7",
        "string-to-arraybuffer": "^1.0.2",
        "teeny-request": "3.7.0"
    },
    "release": {
        "branches": [
            "+([0-9]).x",
            "main",
            "next",
            {
                "name": "beta",
                "prerelease": true
            }
        ]
    }
}
