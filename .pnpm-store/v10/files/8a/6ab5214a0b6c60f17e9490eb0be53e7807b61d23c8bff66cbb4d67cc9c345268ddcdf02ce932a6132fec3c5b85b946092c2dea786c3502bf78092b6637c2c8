{
  "name": "axios",
  "version": "1.9.0",
  "description": "Promise based HTTP client for the browser and node.js",
  "main": "index.js",
  "exports": {
    ".": {
      "types": {
        "require": "./index.d.cts",
        "default": "./index.d.ts"
      },
      "browser": {
        "require": "./dist/browser/axios.cjs",
        "default": "./index.js"
      },
      "default": {
        "require": "./dist/node/axios.cjs",
        "default": "./index.js"
      }
    },
    "./lib/adapters/http.js": "./lib/adapters/http.js",
    "./lib/adapters/xhr.js": "./lib/adapters/xhr.js",
    "./unsafe/*": "./lib/*",
    "./unsafe/core/settle.js": "./lib/core/settle.js",
    "./unsafe/core/buildFullPath.js": "./lib/core/buildFullPath.js",
    "./unsafe/helpers/isAbsoluteURL.js": "./lib/helpers/isAbsoluteURL.js",
    "./unsafe/helpers/buildURL.js": "./lib/helpers/buildURL.js",
    "./unsafe/helpers/combineURLs.js": "./lib/helpers/combineURLs.js",
    "./unsafe/adapters/http.js": "./lib/adapters/http.js",
    "./unsafe/adapters/xhr.js": "./lib/adapters/xhr.js",
    "./unsafe/utils.js": "./lib/utils.js",
    "./package.json": "./package.json"
  },
  "type": "module",
  "types": "index.d.ts",
  "scripts": {
    "test": "npm run test:eslint && npm run test:mocha && npm run test:karma && npm run test:dtslint && npm run test:exports",
    "test:eslint": "node bin/ssl_hotfix.js eslint lib/**/*.js",
    "test:dtslint": "dtslint --localTs node_modules/typescript/lib",
    "test:mocha": "node bin/ssl_hotfix.js mocha test/unit/**/*.js --timeout 30000 --exit",
    "test:exports": "node bin/ssl_hotfix.js mocha test/module/test.js --timeout 30000 --exit",
    "test:karma": "node bin/ssl_hotfix.js cross-env LISTEN_ADDR=:: karma start karma.conf.cjs --single-run",
    "test:karma:firefox": "node bin/ssl_hotfix.js cross-env LISTEN_ADDR=:: Browsers=Firefox karma start karma.conf.cjs --single-run",
    "test:karma:server": "node bin/ssl_hotfix.js cross-env karma start karma.conf.cjs",
    "test:build:version": "node ./bin/check-build-version.js",
    "start": "node ./sandbox/server.js",
    "preversion": "gulp version",
    "version": "npm run build && git add dist && git add package.json",
    "prepublishOnly": "npm run test:build:version",
    "postpublish": "git push && git push --tags",
    "build": "gulp clear && cross-env NODE_ENV=production rollup -c -m",
    "examples": "node ./examples/server.js",
    "coveralls": "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
    "fix": "eslint --fix lib/**/*.js",
    "prepare": "husky install && npm run prepare:hooks",
    "prepare:hooks": "npx husky set .husky/commit-msg \"npx commitlint --edit $1\"",
    "release:dry": "release-it --dry-run --no-npm",
    "release:info": "release-it --release-version",
    "release:beta:no-npm": "release-it --preRelease=beta --no-npm",
    "release:beta": "release-it --preRelease=beta",
    "release:no-npm": "release-it --no-npm",
    "release:changelog:fix": "node ./bin/injectContributorsList.js && git add CHANGELOG.md",
    "release": "release-it"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/axios/axios.git"
  },
  "keywords": [
    "xhr",
    "http",
    "ajax",
    "promise",
    "node"
  ],
  "author": "Matt Zabriskie",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/axios/axios/issues"
  },
  "homepage": "https://axios-http.com",
  "devDependencies": {
    "@babel/core": "^7.23.9",
    "@babel/preset-env": "^7.23.9",
    "@commitlint/cli": "^17.8.1",
    "@commitlint/config-conventional": "^17.8.1",
    "@release-it/conventional-changelog": "^5.1.1",
    "@rollup/plugin-babel": "^5.3.1",
    "@rollup/plugin-commonjs": "^15.1.0",
    "@rollup/plugin-json": "^4.1.0",
    "@rollup/plugin-multi-entry": "^4.1.0",
    "@rollup/plugin-node-resolve": "^9.0.0",
    "abortcontroller-polyfill": "^1.7.5",
    "auto-changelog": "^2.4.0",
    "body-parser": "^1.20.2",
    "chalk": "^5.3.0",
    "coveralls": "^3.1.1",
    "cross-env": "^7.0.3",
    "dev-null": "^0.1.1",
    "dtslint": "^4.2.1",
    "es6-promise": "^4.2.8",
    "eslint": "^8.56.0",
    "express": "^4.18.2",
    "formdata-node": "^5.0.1",
    "formidable": "^2.1.2",
    "fs-extra": "^10.1.0",
    "get-stream": "^3.0.0",
    "gulp": "^4.0.2",
    "gzip-size": "^7.0.0",
    "handlebars": "^4.7.8",
    "husky": "^8.0.3",
    "istanbul-instrumenter-loader": "^3.0.1",
    "jasmine-core": "^2.99.1",
    "karma": "^6.3.17",
    "karma-chrome-launcher": "^3.2.0",
    "karma-firefox-launcher": "^2.1.2",
    "karma-jasmine": "^1.1.2",
    "karma-jasmine-ajax": "^0.1.13",
    "karma-rollup-preprocessor": "^7.0.8",
    "karma-safari-launcher": "^1.0.0",
    "karma-sauce-launcher": "^4.3.6",
    "karma-sinon": "^1.0.5",
    "karma-sourcemap-loader": "^0.3.8",
    "memoizee": "^0.4.15",
    "minimist": "^1.2.8",
    "mocha": "^10.3.0",
    "multer": "^1.4.4",
    "pretty-bytes": "^6.1.1",
    "release-it": "^15.11.0",
    "rollup": "^2.79.1",
    "rollup-plugin-auto-external": "^2.0.0",
    "rollup-plugin-bundle-size": "^1.0.3",
    "rollup-plugin-terser": "^7.0.2",
    "sinon": "^4.5.0",
    "stream-throttle": "^0.1.3",
    "string-replace-async": "^3.0.2",
    "terser-webpack-plugin": "^4.2.3",
    "typescript": "^4.9.5",
    "@rollup/plugin-alias": "^5.1.0"
  },
  "browser": {
    "./lib/adapters/http.js": "./lib/helpers/null.js",
    "./lib/platform/node/index.js": "./lib/platform/browser/index.js",
    "./lib/platform/node/classes/FormData.js": "./lib/helpers/null.js"
  },
  "jsdelivr": "dist/axios.min.js",
  "unpkg": "dist/axios.min.js",
  "typings": "./index.d.ts",
  "dependencies": {
    "follow-redirects": "^1.15.6",
    "form-data": "^4.0.0",
    "proxy-from-env": "^1.1.0"
  },
  "bundlesize": [
    {
      "path": "./dist/axios.min.js",
      "threshold": "5kB"
    }
  ],
  "contributors": [
    "Matt Zabriskie (https://github.com/mzabriskie)",
    "Nick Uraltsev (https://github.com/nickuraltsev)",
    "Dmitriy Mozgovoy (https://github.com/DigitalBrainJS)",
    "Jay (https://github.com/jasonsaayman)",
    "Emily Morehouse (https://github.com/emilyemorehouse)",
    "Rubén Norte (https://github.com/rubennorte)",
    "Justin Beckwith (https://github.com/JustinBeckwith)",
    "Martti Laine (https://github.com/codeclown)",
    "Xianming Zhong (https://github.com/chinesedfan)",
    "Rikki Gibson (https://github.com/RikkiGibson)",
    "Remco Haszing (https://github.com/remcohaszing)",
    "Yasu Flores (https://github.com/yasuf)",
    "Ben Carp (https://github.com/carpben)"
  ],
  "sideEffects": false,
  "release-it": {
    "git": {
      "commitMessage": "chore(release): v${version}",
      "push": true,
      "commit": true,
      "tag": true,
      "requireCommits": false,
      "requireCleanWorkingDir": false
    },
    "github": {
      "release": true,
      "draft": true
    },
    "npm": {
      "publish": false,
      "ignoreVersion": false
    },
    "plugins": {
      "@release-it/conventional-changelog": {
        "preset": "angular",
        "infile": "CHANGELOG.md",
        "header": "# Changelog"
      }
    },
    "hooks": {
      "before:init": "npm test",
      "after:bump": "gulp version --bump ${version} && npm run build && npm run test:build:version && git add ./dist && git add ./package-lock.json",
      "before:release": "npm run release:changelog:fix",
      "after:release": "echo Successfully released ${name} v${version} to ${repo.repository}."
    }
  },
  "commitlint": {
    "rules": {
      "header-max-length": [
        2,
        "always",
        130
      ]
    },
    "extends": [
      "@commitlint/config-conventional"
    ]
  }
}