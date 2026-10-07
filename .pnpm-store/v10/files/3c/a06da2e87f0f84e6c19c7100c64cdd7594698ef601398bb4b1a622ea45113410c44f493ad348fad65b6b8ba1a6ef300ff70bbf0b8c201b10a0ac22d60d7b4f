{
  "name": "cross-spawn",
  "version": "7.0.6",
  "description": "Cross platform child_process#spawn and child_process#spawnSync",
  "keywords": [
    "spawn",
    "spawnSync",
    "windows",
    "cross-platform",
    "path-ext",
    "shebang",
    "cmd",
    "execute"
  ],
  "author": "André Cruz <andre@moxy.studio>",
  "homepage": "https://github.com/moxystudio/node-cross-spawn",
  "repository": {
    "type": "git",
    "url": "git@github.com:moxystudio/node-cross-spawn.git"
  },
  "license": "MIT",
  "main": "index.js",
  "files": [
    "lib"
  ],
  "scripts": {
    "lint": "eslint .",
    "test": "jest --env node --coverage",
    "prerelease": "npm t && npm run lint",
    "release": "standard-version",
    "postrelease": "git push --follow-tags origin HEAD && npm publish"
  },
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.js": [
      "eslint --fix",
      "git add"
    ]
  },
  "commitlint": {
    "extends": [
      "@commitlint/config-conventional"
    ]
  },
  "dependencies": {
    "path-key": "^3.1.0",
    "shebang-command": "^2.0.0",
    "which": "^2.0.1"
  },
  "devDependencies": {
    "@commitlint/cli": "^8.1.0",
    "@commitlint/config-conventional": "^8.1.0",
    "babel-core": "^6.26.3",
    "babel-jest": "^24.9.0",
    "babel-preset-moxy": "^3.1.0",
    "eslint": "^5.16.0",
    "eslint-config-moxy": "^7.1.0",
    "husky": "^3.0.5",
    "jest": "^24.9.0",
    "lint-staged": "^9.2.5",
    "mkdirp": "^0.5.1",
    "rimraf": "^3.0.0",
    "standard-version": "^9.5.0"
  },
  "engines": {
    "node": ">= 8"
  }
}
