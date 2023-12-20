---
id: 597089c87eec450c68aa1643
title: Define a primitive data type
challengeType: 1
forumTopicId: 302248
dashedName: define-a-primitive-data-type
---

# --description--

Define a type that behaves like an integer but has a lowest valid value of 1 and a highest valid value of 10.

Error handling:

<ul>
  <li>If you try to instantiate a <code>Num</code> with a value outside of 1 - 10, it should throw a <code>TypeError</code> with an error message of <code>'Out of range'</code>.</li>
  <li>If you try to instantiate a <code>Num</code> with a value that is not a number, it should throw a <code>TypeError</code> with an error message of <code>'Not a Number'</code>.</li>
</ul>

# --hints--

`Num` should be a function.

```js
assert(typeof Num === 'function');
```

`new Num(4)` should return an object.

```js
assert(typeof new Num(4) === 'object');
```

`new Num('test')` should throw a TypeError with message 'Not a Number'.

```js
assert.throws(() => new Num('test'), TypeError);
```

`new Num(0)` should throw a TypeError with message 'Out of range'.

```js
assert.throws(() => new Num(0), TypeError);
```

`new Num(-5)` should throw a TypeError with message 'Out of range'.

```js
assert.throws(() => new Num(-5), TypeError);
```

`new Num(10)` should throw a TypeError with message 'Out of range'.

```js
assert.throws(() => new Num(11), TypeError);
```

`new Num(20)` should throw a TypeError with message 'Out of range'.

```js
assert.throws(() => new Num(20), TypeError);
```

`new Num(3) + new Num(4)` should equal 7.

```js
assert.equal(new Num(3) + new Num(4), 7);
```

`new Num(3) - new Num(4)` should equal -1.

```js
assert.equal(new Num(3) - new Num(4), -1);
```

`new Num(3) * new Num(4)` should equal 12.

```js
assert.equal(new Num(3) * new Num(4), 12);
```

`new Num(3) / new Num(4)` should equal 0.75.

```js
assert.equal(new Num(3) / new Num(4), 0.75);
```

`new Num(3) < new Num(4)` should be true.

```js
assert(new Num(3) < new Num(4));
```

`new Num(3) > new Num(4)` should be false.

```js
assert(!(new Num(3) > new Num(4)));
```

`(new Num(5)).toString()` should return '5'

```js
assert.equal(new Num(5).toString(), '5');
```

# --seed--

## --seed-contents--

```js
function Num(n) {

  return n;
}
```

# --solutions--

```js
function Num(n) {
  if (isNaN(n)) {
    throw new TypeError('Not a Number');
  }
  if (n < 1 || n > 10) {
    throw new TypeError('Out of range');
  }

  this._value = +n;
}
Num.prototype.valueOf = function() { return this._value; };
Num.prototype.toString = function () { return this._value.toString(); };
```
