---
title: Testing with Chaijs
---
<a href='http://chaijs.com' target='_blank' rel='nofollow'>Chai</a> is a testing library for Node.js.

### Installation
You can install Chai in your project through npm.
```
npm install chai
```
##### Pro-tip
Add Chai in devDependencies of  _package.json_, using * as version tag. In this way, you always have the most recent version.
```
"devDependencies": {
  "chai": "*"
}
```

### How to use

#### Assert
You can use _assert_ to check if your tests are performing well.
```
var assert = require('chai').assert, foo = 'bar', beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

assert.typeOf(foo, 'string'); // without optional message
assert.typeOf(foo, 'string', 'foo is a string'); // with optional message
assert.equal(foo, 'bar', 'foo equal `bar`');
assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');
```

### More info:

*   `help chai assert`
*   `help chai expectations`
