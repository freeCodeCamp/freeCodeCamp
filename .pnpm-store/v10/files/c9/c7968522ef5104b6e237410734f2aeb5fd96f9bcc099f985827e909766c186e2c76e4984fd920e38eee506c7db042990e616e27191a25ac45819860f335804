{
  "name": "commander",
  "version": "7.2.0",
  "description": "the complete solution for node.js command-line programs",
  "keywords": [
    "commander",
    "command",
    "option",
    "parser",
    "cli",
    "argument",
    "args",
    "argv"
  ],
  "author": "TJ Holowaychuk <tj@vision-media.ca>",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/tj/commander.js.git"
  },
  "scripts": {
    "lint": "eslint index.js esm.mjs \"tests/**/*.js\"",
    "typescript-lint": "eslint typings/*.ts tests/*.ts",
    "test": "jest && npm run test-typings",
    "test-esm": "node --experimental-modules ./tests/esm-imports-test.mjs",
    "test-typings": "tsd",
    "typescript-checkJS": "tsc --allowJS --checkJS index.js --noEmit",
    "test-all": "npm run test && npm run lint && npm run typescript-lint && npm run typescript-checkJS && npm run test-esm"
  },
  "main": "./index.js",
  "files": [
    "index.js",
    "esm.mjs",
    "typings/index.d.ts",
    "package-support.json"
  ],
  "type": "commonjs",
  "dependencies": {},
  "devDependencies": {
    "@types/jest": "^26.0.20",
    "@types/node": "^14.14.20",
    "@typescript-eslint/eslint-plugin": "^4.12.0",
    "@typescript-eslint/parser": "^4.12.0",
    "eslint": "^7.17.0",
    "eslint-config-standard": "^16.0.2",
    "eslint-plugin-jest": "^24.1.3",
    "jest": "^26.6.3",
    "standard": "^16.0.3",
    "ts-jest": "^26.5.1",
    "tsd": "^0.14.0",
    "typescript": "^4.1.2"
  },
  "types": "typings/index.d.ts",
  "jest": {
    "testEnvironment": "node",
    "collectCoverage": true,
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    "testPathIgnorePatterns": [
      "/node_modules/"
    ]
  },
  "engines": {
    "node": ">= 10"
  },
  "support": true
}
