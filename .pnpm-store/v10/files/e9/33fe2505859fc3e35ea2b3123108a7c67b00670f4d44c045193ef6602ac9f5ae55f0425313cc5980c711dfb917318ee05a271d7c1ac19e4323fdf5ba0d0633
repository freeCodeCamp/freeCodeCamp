{
    "name": "domhandler",
    "version": "5.0.3",
    "description": "Handler for htmlparser2 that turns pages into a dom",
    "author": "Felix Boehm <me@feedic.com>",
    "funding": {
        "url": "https://github.com/fb55/domhandler?sponsor=1"
    },
    "license": "BSD-2-Clause",
    "main": "lib/index.js",
    "types": "lib/index.d.ts",
    "module": "lib/esm/index.js",
    "exports": {
        "require": "./lib/index.js",
        "import": "./lib/esm/index.js"
    },
    "sideEffects": false,
    "files": [
        "lib"
    ],
    "scripts": {
        "test": "npm run test:jest && npm run lint",
        "test:jest": "jest",
        "lint": "npm run lint:es && npm run lint:prettier",
        "lint:es": "eslint --ignore-path .gitignore .",
        "lint:prettier": "npm run prettier -- --check",
        "format": "npm run format:es && npm run format:prettier",
        "format:es": "npm run lint:es -- --fix",
        "format:prettier": "npm run prettier -- --write",
        "prettier": "prettier \"**/*.{ts,md,json,yml}\" --ignore-path .gitignore",
        "build": "npm run build:cjs && npm run build:esm",
        "build:cjs": "tsc",
        "build:esm": "tsc --module esnext --target es2019 --outDir lib/esm && echo '{\"type\":\"module\"}' > lib/esm/package.json",
        "prepare": "npm run build"
    },
    "repository": {
        "type": "git",
        "url": "git://github.com/fb55/domhandler.git"
    },
    "keywords": [
        "dom",
        "htmlparser2"
    ],
    "engines": {
        "node": ">= 4"
    },
    "dependencies": {
        "domelementtype": "^2.3.0"
    },
    "devDependencies": {
        "@types/jest": "^27.4.1",
        "@types/node": "^17.0.30",
        "@typescript-eslint/eslint-plugin": "^5.21.0",
        "@typescript-eslint/parser": "^5.21.0",
        "eslint": "^8.14.0",
        "eslint-config-prettier": "^8.5.0",
        "htmlparser2": "^8.0.0",
        "jest": "^27.5.1",
        "prettier": "^2.6.2",
        "ts-jest": "^27.1.4",
        "typescript": "^4.6.4"
    },
    "jest": {
        "preset": "ts-jest",
        "testEnvironment": "node",
        "moduleNameMapper": {
            "^(.*)\\.js$": "$1"
        }
    },
    "prettier": {
        "tabWidth": 4
    }
}
