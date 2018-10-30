<h1 align=center>
  <a href="http://chaijs.com" title="Chai Documentation">
    <img alt="ChaiJS" src="http://chaijs.com/img/chai-logo.png"/> check-error
  </a>
</h1>

<p align=center>
  Error comparison and information related utility for <a href="http://nodejs.org">node</a> and the browser.
</p>

<p align=center>
  <a href="./LICENSE">
    <img
      alt="license:mit"
      src="https://img.shields.io/badge/license-mit-green.svg?style=flat-square"
    />
  </a>
  <a href="https://github.com/chaijs/check-error/releases">
    <img
      alt="tag:?"
      src="https://img.shields.io/github/tag/chaijs/check-error.svg?style=flat-square"
    />
  </a>
  <a href="https://travis-ci.org/chaijs/check-error">
    <img
      alt="build:?"
      src="https://img.shields.io/travis/chaijs/check-error/master.svg?style=flat-square"
    />
  </a>
  <a href="https://coveralls.io/r/chaijs/check-error">
    <img
      alt="coverage:?"
      src="https://img.shields.io/coveralls/chaijs/check-error/master.svg?style=flat-square"
    />
  </a>
  <a href="https://www.npmjs.com/packages/check-error">
    <img
      alt="npm:?"
      src="https://img.shields.io/npm/v/check-error.svg?style=flat-square"
    />
  </a>
  <a href="https://www.npmjs.com/packages/check-error">
    <img
      alt="dependencies:?"
      src="https://img.shields.io/npm/dm/check-error.svg?style=flat-square"
    />
  </a>
  <a href="">
    <img
      alt="devDependencies:?"
      src="https://img.shields.io/david/chaijs/check-error.svg?style=flat-square"
    />
  </a>
  <br/>
  <a href="https://saucelabs.com/u/chaijs-check-error">
    <img
      alt="Selenium Test Status"
      src="https://saucelabs.com/browser-matrix/chaijs-check-error.svg"
    />
  </a>
  <br>
  <a href="https://chai-slack.herokuapp.com/">
    <img
      alt="Join the Slack chat"
      src="https://img.shields.io/badge/slack-join%20chat-E2206F.svg?style=flat-square"
    />
  </a>
  <a href="https://gitter.im/chaijs/chai">
    <img
      alt="Join the Gitter chat"
      src="https://img.shields.io/badge/gitter-join%20chat-D0104D.svg?style=flat-square"
    />
  </a>
</p>

## What is Check-Error?

Check-Error is a module which you can use to retrieve an Error's information such as its `message` or `constructor` name and also to check whether two Errors are compatible based on their messages, constructors or even instances.

## Installation

### Node.js

`check-error` is available on [npm](http://npmjs.org). To install it, type:

    $ npm install check-error

### Browsers

You can also use it within the browser; install via npm and use the `check-error.js` file found within the download. For example:

```html
<script src="./node_modules/check-error/check-error.js"></script>
```

## Usage

The primary export of `check-error` is an object which has the following methods:

* `compatibleInstance(err, errorLike)` - Checks if an error is compatible with another `errorLike` object. If `errorLike` is an error instance we do a strict comparison, otherwise we return `false` by default, because instances of objects can only be compatible if they're both error instances.
* `compatibleConstructor(err, errorLike)` - Checks if an error's constructor is compatible with another `errorLike` object. If `err` has the same constructor as `errorLike` or if `err` is an instance of `errorLike`.
* `compatibleMessage(err, errMatcher)` - Checks if an error message is compatible with an `errMatcher` RegExp or String (we check if the message contains the String).
* `getConstructorName(errorLike)` - Retrieves the name of a constructor, an error's constructor or `errorLike` itself if it's not an error instance or constructor.
* `getMessage(err)` - Retrieves the message of an error or `err` itself if it's a String. If `err` or `err.message` is undefined we return an empty String.

```js
var checkError = require('check-error');
```

#### .compatibleInstance(err, errorLike)

```js
var checkError = require('check-error');

var funcThatThrows = function() { throw new TypeError('I am a TypeError') };
var caughtErr;

try {
  funcThatThrows();
} catch(e) {
  caughtErr = e;
}

var sameInstance = caughtErr;

checkError.compatibleInstance(caughtErr, sameInstance); // true
checkError.compatibleInstance(caughtErr, new TypeError('Another error')); // false
```

#### .compatibleConstructor(err, errorLike)

```js
var checkError = require('check-error');

var funcThatThrows = function() { throw new TypeError('I am a TypeError') };
var caughtErr;

try {
  funcThatThrows();
} catch(e) {
  caughtErr = e;
}

checkError.compatibleConstructor(caughtErr, Error); // true
checkError.compatibleConstructor(caughtErr, TypeError); // true
checkError.compatibleConstructor(caughtErr, RangeError); // false
```

#### .compatibleMessage(err, errMatcher)

```js
var checkError = require('check-error');

var funcThatThrows = function() { throw new TypeError('I am a TypeError') };
var caughtErr;

try {
  funcThatThrows();
} catch(e) {
  caughtErr = e;
}

var sameInstance = caughtErr;

checkError.compatibleMessage(caughtErr, /TypeError$/); // true
checkError.compatibleMessage(caughtErr, 'I am a'); // true
checkError.compatibleMessage(caughtErr, /unicorn/); // false
checkError.compatibleMessage(caughtErr, 'I do not exist'); // false
```

#### .getConstructorName(errorLike)

```js
var checkError = require('check-error');

var funcThatThrows = function() { throw new TypeError('I am a TypeError') };
var caughtErr;

try {
  funcThatThrows();
} catch(e) {
  caughtErr = e;
}

var sameInstance = caughtErr;

checkError.getConstructorName(caughtErr) // 'TypeError'
```

#### .getMessage(err)

```js
var checkError = require('check-error');

var funcThatThrows = function() { throw new TypeError('I am a TypeError') };
var caughtErr;

try {
  funcThatThrows();
} catch(e) {
  caughtErr = e;
}

var sameInstance = caughtErr;

checkError.getMessage(caughtErr) // 'I am a TypeError'
```
