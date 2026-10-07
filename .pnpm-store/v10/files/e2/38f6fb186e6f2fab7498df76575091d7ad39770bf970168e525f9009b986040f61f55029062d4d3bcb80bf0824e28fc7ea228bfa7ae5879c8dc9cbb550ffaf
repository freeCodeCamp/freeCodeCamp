{
  "name": "icss-utils",
  "version": "5.1.0",
  "description": "ICSS utils for postcss ast",
  "main": "src/index.js",
  "engines": {
    "node": "^10 || ^12 || >= 14"
  },
  "files": [
    "src"
  ],
  "scripts": {
    "prettier": "prettier -l --ignore-path .gitignore . \"!test/test-cases\"",
    "eslint": "eslint --ignore-path .gitignore .",
    "lint": "yarn eslint && yarn prettier",
    "test:only": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage --collectCoverageFrom=\"src/**/*\"",
    "pretest": "yarn lint",
    "test": "yarn test:coverage",
    "prepublishOnly": "yarn test"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/css-modules/icss-utils.git"
  },
  "keywords": [
    "css",
    "modules",
    "icss",
    "postcss"
  ],
  "author": "Glen Maddern",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/css-modules/icss-utils/issues"
  },
  "homepage": "https://github.com/css-modules/icss-utils#readme",
  "devDependencies": {
    "coveralls": "^3.1.0",
    "eslint": "^7.9.0",
    "eslint-config-prettier": "^6.12.0",
    "husky": "^4.3.0",
    "jest": "^26.4.2",
    "lint-staged": "^10.4.0",
    "postcss": "^8.1.0",
    "prettier": "^2.1.2"
  },
  "peerDependencies": {
    "postcss": "^8.1.0"
  }
}
