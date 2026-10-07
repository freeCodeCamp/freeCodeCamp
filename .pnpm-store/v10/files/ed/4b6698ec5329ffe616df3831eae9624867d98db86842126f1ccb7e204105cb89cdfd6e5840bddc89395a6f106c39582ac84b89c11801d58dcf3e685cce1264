{
  "name": "agent-base",
  "version": "6.0.2",
  "description": "Turn a function into an `http.Agent` instance",
  "main": "dist/src/index",
  "typings": "dist/src/index",
  "files": [
    "dist/src",
    "src"
  ],
  "scripts": {
    "prebuild": "rimraf dist",
    "build": "tsc",
    "postbuild": "cpy --parents src test '!**/*.ts' dist",
    "test": "mocha --reporter spec dist/test/*.js",
    "test-lint": "eslint src --ext .js,.ts",
    "prepublishOnly": "npm run build"
  },
  "repository": {
    "type": "git",
    "url": "git://github.com/TooTallNate/node-agent-base.git"
  },
  "keywords": [
    "http",
    "agent",
    "base",
    "barebones",
    "https"
  ],
  "author": "Nathan Rajlich <nathan@tootallnate.net> (http://n8.io/)",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/TooTallNate/node-agent-base/issues"
  },
  "dependencies": {
    "debug": "4"
  },
  "devDependencies": {
    "@types/debug": "4",
    "@types/mocha": "^5.2.7",
    "@types/node": "^14.0.20",
    "@types/semver": "^7.1.0",
    "@types/ws": "^6.0.3",
    "@typescript-eslint/eslint-plugin": "1.6.0",
    "@typescript-eslint/parser": "1.1.0",
    "async-listen": "^1.2.0",
    "cpy-cli": "^2.0.0",
    "eslint": "5.16.0",
    "eslint-config-airbnb": "17.1.0",
    "eslint-config-prettier": "4.1.0",
    "eslint-import-resolver-typescript": "1.1.1",
    "eslint-plugin-import": "2.16.0",
    "eslint-plugin-jsx-a11y": "6.2.1",
    "eslint-plugin-react": "7.12.4",
    "mocha": "^6.2.0",
    "rimraf": "^3.0.0",
    "semver": "^7.1.2",
    "typescript": "^3.5.3",
    "ws": "^3.0.0"
  },
  "engines": {
    "node": ">= 6.0.0"
  }
}
