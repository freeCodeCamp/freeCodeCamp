tmpl [![Build Status](https://secure.travis-ci.org/nshah/nodejs-tmpl.png)](http://travis-ci.org/nshah/nodejs-tmpl)
====

Simple string formatting using `{}`.

```javascript
assert.equal(
  tmpl('the answer is {answer}', { answer: 42 }),
  'the answer is 42')
```
