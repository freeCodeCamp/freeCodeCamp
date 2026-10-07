{
  "name": "whatwg-url",
  "version": "5.0.0",
  "description": "An implementation of the WHATWG URL Standard's URL API and parsing machinery",
  "main": "lib/public-api.js",
  "files": [
    "lib/"
  ],
  "author": "Sebastian Mayr <github@smayr.name>",
  "license": "MIT",
  "repository": "jsdom/whatwg-url",
  "dependencies": {
    "tr46": "~0.0.3",
    "webidl-conversions": "^3.0.0"
  },
  "devDependencies": {
    "eslint": "^2.6.0",
    "istanbul": "~0.4.3",
    "mocha": "^2.2.4",
    "recast": "~0.10.29",
    "request": "^2.55.0",
    "webidl2js": "^3.0.2"
  },
  "scripts": {
    "build": "node scripts/transform.js && node scripts/convert-idl.js",
    "coverage": "istanbul cover node_modules/mocha/bin/_mocha",
    "lint": "eslint .",
    "prepublish": "npm run build",
    "pretest": "node scripts/get-latest-platform-tests.js && npm run build",
    "test": "mocha"
  }
}
