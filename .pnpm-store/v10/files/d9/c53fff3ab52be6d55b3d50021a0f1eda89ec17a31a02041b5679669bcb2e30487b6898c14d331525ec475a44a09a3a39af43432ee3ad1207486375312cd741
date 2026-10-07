{
  "name": "cliui",
  "version": "8.0.1",
  "description": "easily create complex multi-column command-line-interfaces",
  "main": "build/index.cjs",
  "exports": {
    ".": [
      {
        "import": "./index.mjs",
        "require": "./build/index.cjs"
      },
      "./build/index.cjs"
    ]
  },
  "type": "module",
  "module": "./index.mjs",
  "scripts": {
    "check": "standardx '**/*.ts' && standardx '**/*.js' && standardx '**/*.cjs'",
    "fix": "standardx --fix '**/*.ts' && standardx --fix '**/*.js' && standardx --fix '**/*.cjs'",
    "pretest": "rimraf build && tsc -p tsconfig.test.json && cross-env NODE_ENV=test npm run build:cjs",
    "test": "c8 mocha ./test/*.cjs",
    "test:esm": "c8 mocha ./test/esm/cliui-test.mjs",
    "postest": "check",
    "coverage": "c8 report --check-coverage",
    "precompile": "rimraf build",
    "compile": "tsc",
    "postcompile": "npm run build:cjs",
    "build:cjs": "rollup -c",
    "prepare": "npm run compile"
  },
  "repository": "yargs/cliui",
  "standard": {
    "ignore": [
      "**/example/**"
    ],
    "globals": [
      "it"
    ]
  },
  "keywords": [
    "cli",
    "command-line",
    "layout",
    "design",
    "console",
    "wrap",
    "table"
  ],
  "author": "Ben Coe <ben@npmjs.com>",
  "license": "ISC",
  "dependencies": {
    "string-width": "^4.2.0",
    "strip-ansi": "^6.0.1",
    "wrap-ansi": "^7.0.0"
  },
  "devDependencies": {
    "@types/node": "^14.0.27",
    "@typescript-eslint/eslint-plugin": "^4.0.0",
    "@typescript-eslint/parser": "^4.0.0",
    "c8": "^7.3.0",
    "chai": "^4.2.0",
    "chalk": "^4.1.0",
    "cross-env": "^7.0.2",
    "eslint": "^7.6.0",
    "eslint-plugin-import": "^2.22.0",
    "eslint-plugin-node": "^11.1.0",
    "gts": "^3.0.0",
    "mocha": "^10.0.0",
    "rimraf": "^3.0.2",
    "rollup": "^2.23.1",
    "rollup-plugin-ts": "^3.0.2",
    "standardx": "^7.0.0",
    "typescript": "^4.0.0"
  },
  "files": [
    "build",
    "index.mjs",
    "!*.d.ts"
  ],
  "engines": {
    "node": ">=12"
  }
}
