<h1 align=center>
  <a href="http://chaijs.com" title="Chai Documentation">
    <img alt="ChaiJS" src="http://chaijs.com/img/chai-logo.png"/> deep-eql
  </a>
</h1>

<p align=center>
  Improved deep equality testing for [node](http://nodejs.org) and the browser.
</p>

<p align=center>
  <a href="./LICENSE">
    <img
      alt="license:mit"
      src="https://img.shields.io/badge/license-mit-green.svg?style=flat-square"
    />
  </a><a href="https://github.com/chaijs/deep-eql/releases">
    <img
      alt="tag:?"
      src="https://img.shields.io/github/tag/chaijs/deep-eql.svg?style=flat-square"
    />
  </a><a href="https://travis-ci.org/chaijs/deep-eql">
    <img
      alt="build:?"
      src="https://img.shields.io/travis/chaijs/deep-eql/master.svg?style=flat-square"
    />
  </a><a href="https://coveralls.io/r/chaijs/deep-eql">
    <img
      alt="coverage:?"
      src="https://img.shields.io/coveralls/chaijs/deep-eql/master.svg?style=flat-square"
    />
  </a><a href="https://www.npmjs.com/packages/deep-eql">
    <img
      alt="code quality:?"
      src="https://img.shields.io/codacy/6de187aa62274dbea6e69a3c27e798da.svg?style=flat-square"
    />
  </a><a href="https://www.npmjs.com/packages/deep-eql">
    <img
      alt="dependencies:?"
      src="https://img.shields.io/npm/dm/deep-eql.svg?style=flat-square"
    />
  </a><a href="">
    <img
      alt="devDependencies:?"
      src="https://img.shields.io/david/chaijs/deep-eql.svg?style=flat-square"
    />
  </a><a href="https://github.com/nodejs/LTS#lts-schedule1">
    <img
      alt="Supported Node Version: 4+"
      src="https://img.shields.io/badge/node-4+-43853d.svg?style=flat-square"
    />
  </a>
  <br/>
  <a href="https://saucelabs.com/u/chaijs-deep-eql">
    <img
      alt="Selenium Test Status"
      src="https://saucelabs.com/browser-matrix/chaijs-deep-eql.svg"
    />
  </a>
  <br>
  <a href="https://chai-slack.herokuapp.com/">
    <img
      alt="Join the Slack chat"
      src="https://img.shields.io/badge/slack-join%20chat-E2206F.svg?style=flat-square"
    />
  </a>
  <a href="https://gitter.im/chaijs/deep-eql">
    <img
      alt="Join the Gitter chat"
      src="https://img.shields.io/badge/gitter-join%20chat-D0104D.svg?style=flat-square"
    />
  </a>
</p>

## What is Deep-Eql?

Deep Eql is a module which you can use to determine if two objects are "deeply" equal - that is, rather than having referential equality (`a === b`), this module checks an object's keys recursively, until it finds primitives to check for referential equality. For more on equality in JavaScript, read [the comparison operators article on mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators).

As an example, take the following:

```js
1 === 1 // These are primitives, they hold the same reference - they are strictly equal
1 == '1' // These are two different primitives, through type coercion they hold the same value - they are loosely equal
{ a: 1 } !== { a: 1 } // These are two different objects, they hold different references and so are not strictly equal - even though they hold the same values inside
{ a: 1 } != { a: 1 } // They have the same type, meaning loose equality performs the same check as strict equality - they are still not equal.

var deepEql = require("deep-eql");
deepEql({ a: 1 }, { a: 1 }) === true // deepEql can determine that they share the same keys and those keys share the same values, therefore they are deeply equal!
```

## Installation

### Node.js

`deep-eql` is available on [npm](http://npmjs.org).

    $ npm install deep-eql

## Usage

The primary export of `deep-eql` is function that can be given two objects to compare. It will always return a boolean which can be used to determine if two objects are deeply equal.

### Rules

- Strict equality for non-traversable nodes according to [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is):
  - `eql(NaN, NaN).should.be.true;`
  - `eql(-0, +0).should.be.false;`
- All own and inherited enumerable properties are considered:
  - `eql(Object.create({ foo: { a: 1 } }), Object.create({ foo: { a: 1 } })).should.be.true;`
  - `eql(Object.create({ foo: { a: 1 } }), Object.create({ foo: { a: 2 } })).should.be.false;`
- Arguments are not Arrays:
  - `eql([], arguments).should.be.false;`
  - `eql([], Array.prototype.slice.call(arguments)).should.be.true;`
- Error objects are compared by reference (see https://github.com/chaijs/chai/issues/608):
  - `eql(new Error('msg'), new Error('msg')).should.be.false;`
  - `var err = new Error('msg'); eql(err, err).should.be.true;`
