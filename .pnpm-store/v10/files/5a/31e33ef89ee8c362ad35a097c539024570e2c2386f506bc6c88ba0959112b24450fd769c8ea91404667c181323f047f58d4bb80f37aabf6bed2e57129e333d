{
  "name": "emoji-regex",
  "version": "8.0.0",
  "description": "A regular expression to match all Emoji-only symbols as per the Unicode Standard.",
  "homepage": "https://mths.be/emoji-regex",
  "main": "index.js",
  "types": "index.d.ts",
  "keywords": [
    "unicode",
    "regex",
    "regexp",
    "regular expressions",
    "code points",
    "symbols",
    "characters",
    "emoji"
  ],
  "license": "MIT",
  "author": {
    "name": "Mathias Bynens",
    "url": "https://mathiasbynens.be/"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/mathiasbynens/emoji-regex.git"
  },
  "bugs": "https://github.com/mathiasbynens/emoji-regex/issues",
  "files": [
    "LICENSE-MIT.txt",
    "index.js",
    "index.d.ts",
    "text.js",
    "es2015/index.js",
    "es2015/text.js"
  ],
  "scripts": {
    "build": "rm -rf -- es2015; babel src -d .; NODE_ENV=es2015 babel src -d ./es2015; node script/inject-sequences.js",
    "test": "mocha",
    "test:watch": "npm run test -- --watch"
  },
  "devDependencies": {
    "@babel/cli": "^7.2.3",
    "@babel/core": "^7.3.4",
    "@babel/plugin-proposal-unicode-property-regex": "^7.2.0",
    "@babel/preset-env": "^7.3.4",
    "mocha": "^6.0.2",
    "regexgen": "^1.3.0",
    "unicode-12.0.0": "^0.7.9"
  }
}
