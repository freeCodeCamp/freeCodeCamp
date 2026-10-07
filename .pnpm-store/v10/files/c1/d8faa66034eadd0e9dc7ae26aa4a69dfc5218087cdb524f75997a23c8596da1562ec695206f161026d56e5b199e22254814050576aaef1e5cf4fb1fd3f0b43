{
  "name": "https-proxy-agent",
  "version": "7.0.6",
  "description": "An HTTP(s) proxy `http.Agent` implementation for HTTPS",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "files": [
    "dist"
  ],
  "repository": {
    "type": "git",
    "url": "https://github.com/TooTallNate/proxy-agents.git",
    "directory": "packages/https-proxy-agent"
  },
  "keywords": [
    "https",
    "proxy",
    "endpoint",
    "agent"
  ],
  "author": "Nathan Rajlich <nathan@tootallnate.net> (http://n8.io/)",
  "license": "MIT",
  "dependencies": {
    "agent-base": "^7.1.2",
    "debug": "4"
  },
  "devDependencies": {
    "@types/async-retry": "^1.4.5",
    "@types/debug": "4",
    "@types/jest": "^29.5.1",
    "@types/node": "^14.18.45",
    "async-listen": "^3.0.0",
    "async-retry": "^1.3.3",
    "jest": "^29.5.0",
    "ts-jest": "^29.1.0",
    "typescript": "^5.0.4",
    "proxy": "2.2.0",
    "tsconfig": "0.0.0"
  },
  "engines": {
    "node": ">= 14"
  },
  "scripts": {
    "build": "tsc",
    "test": "jest --env node --verbose --bail test/test.ts",
    "test-e2e": "jest --env node --verbose --bail test/e2e.test.ts",
    "lint": "eslint --ext .ts",
    "pack": "node ../../scripts/pack.mjs"
  }
}