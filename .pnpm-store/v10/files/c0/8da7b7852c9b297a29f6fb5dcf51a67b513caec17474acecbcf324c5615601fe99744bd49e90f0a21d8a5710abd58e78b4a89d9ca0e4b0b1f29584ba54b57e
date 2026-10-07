{
  "name": "toidentifier",
  "description": "Convert a string of words to a JavaScript identifier",
  "version": "1.0.1",
  "author": "Douglas Christopher Wilson <doug@somethingdoug.com>",
  "contributors": [
    "Douglas Christopher Wilson <doug@somethingdoug.com>",
    "Nick Baugh <niftylettuce@gmail.com> (http://niftylettuce.com/)"
  ],
  "repository": "component/toidentifier",
  "devDependencies": {
    "eslint": "7.32.0",
    "eslint-config-standard": "14.1.1",
    "eslint-plugin-import": "2.25.3",
    "eslint-plugin-markdown": "2.2.1",
    "eslint-plugin-node": "11.1.0",
    "eslint-plugin-promise": "4.3.1",
    "eslint-plugin-standard": "4.1.0",
    "mocha": "9.1.3",
    "nyc": "15.1.0"
  },
  "engines": {
    "node": ">=0.6"
  },
  "license": "MIT",
  "files": [
    "HISTORY.md",
    "LICENSE",
    "index.js"
  ],
  "scripts": {
    "lint": "eslint .",
    "test": "mocha --reporter spec --bail --check-leaks test/",
    "test-ci": "nyc --reporter=lcov --reporter=text npm test",
    "test-cov": "nyc --reporter=html --reporter=text npm test",
    "version": "node scripts/version-history.js && git add HISTORY.md"
  }
}
