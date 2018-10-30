<h1 align=center>
  <a href="http://chaijs.com" title="Chai Documentation">
    <img alt="ChaiJS" src="http://chaijs.com/img/chai-logo.png"/> pathval
  </a>
</h1>

<p align=center>
   Tool for Object value retrieval given a string path for <a href="http://nodejs.org">node</a> and the browser.
</p>

<p align=center>
  <a href="./LICENSE">
    <img
      alt="license:mit"
      src="https://img.shields.io/badge/license-mit-green.svg?style=flat-square"
    />
  </a>
  <a href="https://github.com/chaijs/pathval/releases">
    <img
      alt="tag:?"
      src="https://img.shields.io/github/tag/chaijs/pathval.svg?style=flat-square"
    />
  </a>
  <a href="https://travis-ci.org/chaijs/pathval">
    <img
      alt="build:?"
      src="https://img.shields.io/travis/chaijs/pathval/master.svg?style=flat-square"
    />
  </a>
  <a href="https://coveralls.io/r/chaijs/pathval">
    <img
      alt="coverage:?"
      src="https://img.shields.io/coveralls/chaijs/pathval/master.svg?style=flat-square"
    />
  </a>
  <a href="https://www.npmjs.com/packages/pathval">
    <img
      alt="npm:?"
      src="https://img.shields.io/npm/v/pathval.svg?style=flat-square"
    />
  </a>
  <a href="https://www.npmjs.com/packages/pathval">
    <img
      alt="dependencies:?"
      src="https://img.shields.io/npm/dm/pathval.svg?style=flat-square"
    />
  </a>
  <a href="">
    <img
      alt="devDependencies:?"
      src="https://img.shields.io/david/chaijs/pathval.svg?style=flat-square"
    />
  </a>
  <br/>
  <a href="https://saucelabs.com/u/chaijs-pathval">
    <img
      alt="Selenium Test Status"
      src="https://saucelabs.com/browser-matrix/chaijs-pathval.svg"
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

## What is pathval?

Pathval is a module which you can use to retrieve or set an Object's property for a given `String` path.

## Installation

### Node.js

`pathval` is available on [npm](http://npmjs.org). To install it, type:

    $ npm install pathval

### Browsers

You can also use it within the browser; install via npm and use the `pathval.js` file found within the download. For example:

```html
<script src="./node_modules/pathval/pathval.js"></script>
```

## Usage

The primary export of `pathval` is an object which has the following methods:

* `hasProperty(object, name)` - Checks whether an `object` has `name`d property or numeric array index.
* `getPathInfo(object, path)` - Returns an object with info indicating the value of the `parent` of that path, the `name ` of the property we're retrieving and its `value`.
* `getPathValue(object, path)` - Retrieves the value of a property at a given `path` inside an `object`'.
* `setPathValue(object, path, value)` - Sets the `value` of a property at a given `path` inside an `object`'.

```js
var pathval = require('pathval');
```

#### .hasProperty(object, name)

```js
var pathval = require('pathval');

var obj = { prop: 'a value' };
pathval.hasProperty(obj, 'prop'); // true
```

#### .getPathInfo(object, path)

```js
var pathval = require('pathval');

var obj = { earth: { country: 'Brazil' } };
pathval.getPathInfo(obj, 'earth.country'); // { parent: { country: 'Brazil'  }, name: 'country', value: 'Brazil', exists: true }
```

#### .getPathValue(object, path)

```js
var pathval = require('pathval');

var obj = { earth: { country: 'Brazil' } };
pathval.getPathValue(obj, 'earth.country'); // 'Brazil'
```

#### .setPathValue(object, path, value)

```js
var pathval = require('pathval');

var obj = { earth: { country: 'Brazil' } };
pathval.setPathValue(obj, 'earth.country', 'USA');

obj.earth.country; // 'USA'
```
