ansi-html [![NPM version](https://badge.fury.io/js/ansi-html.svg)](http://badge.fury.io/js/ansi-html) [![Build Status](https://travis-ci.org/Tjatse/ansi-html.svg?branch=master)](https://travis-ci.org/Tjatse/ansi-html)
=========
An elegant lib that converts the chalked (ANSI) text to HTML.

# Coverage
- All styles of [chalk](https://github.com/sindresorhus/chalk) (100%) and [colors](https://github.com/Marak/colors.js).
- There are over **150** randomized test cases under `test`.

# Installation
```
$ npm install ansi-html
```

# Usage
```javascript
var ansiHTML = require('ansi-html');
var str = ansiHTML('[ANSI_TEXT]');
```

e.g.:
```javascript
var chalk = require('chalk');

var str = chalk.bold.red('foo') + ' bar';
console.log('[ANSI]', str)
console.log('[HTML]', ansiHTML(str));
```

See complete examples under `test` / `examples` directory.

# Set Colors
```javascript
ansiHTML.setColors({
  reset: ['555', '666'], // FOREGROUND-COLOR or [FOREGROUND-COLOR] or [, BACKGROUND-COLOR] or [FOREGROUND-COLOR, BACKGROUND-COLOR]
  black: 'aaa',	// String
  red: 'bbb',
  green: 'ccc',
  yellow: 'ddd',
  blue: 'eee',
  magenta: 'fff',
  cyan: '999',
  lightgrey: '888',
  darkgrey: '777'
});
```

# Reset
```javascript
ansiHTML.reset();
```

# Exposed Tags
```javascript
var openTags = ansiHTML.tags.open;
var closeTags = ansiHTML.tags.close;
```

# Test
```
$ npm install -l
$ npm test
```
