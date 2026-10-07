{
  "name": "https-proxy-agent",
  "version": "5.0.1",
  "description": "An HTTP(s) proxy `http.Agent` implementation for HTTPS",
  "main": "dist/index",
  "types": "dist/index",
  "files": [
    "dist"
  ],
  "scripts": {
    "prebuild": "rimraf dist",
    "build": "tsc",
    "test": "mocha --reporter spec",
    "test-lint": "eslint src --ext .js,.ts",
    "prepublishOnly": "npm run build"
  },
  "repository": {
    "type": "git",
    "url": "git://github.com/TooTallNate/node-https-proxy-agent.git"
  },
  "keywords": [
    "https",
    "proxy",
    "endpoint",
    "agent"
  ],
  "author": "Nathan Rajlich <nathan@tootallnate.net> (http://n8.io/)",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/TooTallNate/node-https-proxy-agent/issues"
  },
  "dependencies": {
    "agent-base": "6",
    "debug": "4"
  },
  "devDependencies": {
    "@types/debug": "4",
    "@types/node": "^12.12.11",
    "@typescript-eslint/eslint-plugin": "1.6.0",
    "@typescript-eslint/parser": "1.1.0",
    "eslint": "5.16.0",
    "eslint-config-airbnb": "17.1.0",
    "eslint-config-prettier": "4.1.0",
    "eslint-import-resolver-typescript": "1.1.1",
    "eslint-plugin-import": "2.16.0",
    "eslint-plugin-jsx-a11y": "6.2.1",
    "eslint-plugin-react": "7.12.4",
    "mocha": "^6.2.2",
    "proxy": "1",
    "rimraf": "^3.0.0",
    "typescript": "^3.5.3"
  },
  "engines": {
    "node": ">= 6"
  }
}
