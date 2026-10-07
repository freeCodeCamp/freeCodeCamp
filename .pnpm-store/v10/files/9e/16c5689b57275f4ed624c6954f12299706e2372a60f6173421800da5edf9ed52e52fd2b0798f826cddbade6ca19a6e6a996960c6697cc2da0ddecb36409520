{
  "name": "ms",
  "version": "2.1.3",
  "description": "Tiny millisecond conversion utility",
  "repository": "vercel/ms",
  "main": "./index",
  "files": [
    "index.js"
  ],
  "scripts": {
    "precommit": "lint-staged",
    "lint": "eslint lib/* bin/*",
    "test": "mocha tests.js"
  },
  "eslintConfig": {
    "extends": "eslint:recommended",
    "env": {
      "node": true,
      "es6": true
    }
  },
  "lint-staged": {
    "*.js": [
      "npm run lint",
      "prettier --single-quote --write",
      "git add"
    ]
  },
  "license": "MIT",
  "devDependencies": {
    "eslint": "4.18.2",
    "expect.js": "0.3.1",
    "husky": "0.14.3",
    "lint-staged": "5.0.0",
    "mocha": "4.0.1",
    "prettier": "2.0.5"
  }
}
