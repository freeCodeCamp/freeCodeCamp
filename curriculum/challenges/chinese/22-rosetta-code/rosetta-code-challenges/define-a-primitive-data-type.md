---
id: 597089c87eec450c68aa1643
title: 定义原始数据类型
challengeType: 1
forumTopicId: 302248
dashedName: define-a-primitive-data-type
---

# --description--

Define a type that behaves like an integer but has a lowest valid value of 1 and a highest valid value of 10.

错误处理：

<ul>
  <li>If you try to instantiate a <code>Num</code> with a value outside of 1 - 10, it should throw a <code>TypeError</code> with an error message of <code>'Out of range'</code>.</li>
  <li>如果您尝试使用不是数字的值来实例化 <code>Num</code>，它应该抛出一个 <code>TypeError</code> 并带有 <code>'Not a Number'</code> 的错误消息。</li>
</ul>

# --hints--

`Num` 应该是一个函数。

```js
assert(typeof Num === 'function');
```

`new Num(4)` 应该返回一个对象。

```js
assert(typeof new Num(4) === 'object');
```

`new Num('test')` 应该抛出一个带有消息“Not a Number”的 TypeError。

```js
assert.throws(() => new Num('test'), TypeError);
```

`new Num(0)` 应该抛出一个带有消息“Out of range”的 TypeError。

```js
assert.throws(() => new Num(0), TypeError);
```

`new Num(-5)` 应该抛出一个带有消息“Out of range”的 TypeError。

```js
assert.throws(() => new Num(-5), TypeError);
```

`new Num(10)` 应该抛出一个带有消息“Out of range”的 TypeError。

```js
assert.throws(() => new Num(11), TypeError);
```

`new Num(20)` 应该抛出一个带有消息“超出范围”的 TypeError。

```js
assert.throws(() => new Num(20), TypeError);
```

`new Num(3) + new Num(4)` 应该等于 7。

```js
assert.equal(new Num(3) + new Num(4), 7);
```

`new Num(3) - new Num(4)` 应该等于 -1。

```js
assert.equal(new Num(3) - new Num(4), -1);
```

`new Num(3) * new Num(4)` 应该等于 12。

```js
assert.equal(new Num(3) * new Num(4), 12);
```

`new Num(3) / new Num(4)` 应该等于 0.75。

```js
assert.equal(new Num(3) / new Num(4), 0.75);
```

`new Num(3) < new Num(4)` 应该是真的。

```js
assert(new Num(3) < new Num(4));
```

`new Num(3) > new Num(4)` 应该是假的。

```js
assert(!(new Num(3) > new Num(4)));
```

`(new Num(5)).toString()` 应该返回 '5'

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
