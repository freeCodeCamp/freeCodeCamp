---
id: 597089c87eec450c68aa1643
title: プリミティブデータ型を定義
challengeType: 1
forumTopicId: 302248
dashedName: define-a-primitive-data-type
---

# --description--

Define a type that behaves like an integer but has a lowest valid value of 1 and a highest valid value of 10.

エラー処理:

<ul>
  <li>If you try to instantiate a <code>Num</code> with a value outside of 1 - 10, it should throw a <code>TypeError</code> with an error message of <code>'Out of range'</code>.</li>
  <li><code>Num</code> を数字ではない値でインスタンス化しようとすると、<code>TypeError</code> が返され、<code>'Not a Number'</code> のエラーメッセージが表示されます。</li>
</ul>

# --hints--

`Num` という関数です。

```js
assert(typeof Num === 'function');
```

`new Num(4)` はオブジェクトを返します。

```js
assert(typeof new Num(4) === 'object');
```

`new Num('test')` は TypeError を返し、「Not a Number」のメッセージが表示されます。

```js
assert.throws(() => new Num('test'), TypeError);
```

`new Num(0)` は TypeError を返し、「Out of range」のメッセージが表示されます。

```js
assert.throws(() => new Num(0), TypeError);
```

`new Num(-5)` は TypeError を返し、「Out of range」のメッセージが表示されます。

```js
assert.throws(() => new Num(-5), TypeError);
```

`new Num(10)` は TypeError を返し、「Out of range」のメッセージが表示されます。

```js
assert.throws(() => new Num(11), TypeError);
```

`new Num(20)` は TypeError を返し、「Out of range」のメッセージが表示されます。

```js
assert.throws(() => new Num(20), TypeError);
```

`new Num(3) + new Num(4)` は 7 と等しくなります。

```js
assert.equal(new Num(3) + new Num(4), 7);
```

`new Num(3) - new Num(4)` は -1 と等しくなります。

```js
assert.equal(new Num(3) - new Num(4), -1);
```

`new Num(3) * new Num(4)` は 12 と等しくなります。

```js
assert.equal(new Num(3) * new Num(4), 12);
```

`new Num(3) / new Num(4)` は 0.75 と等しくなります。

```js
assert.equal(new Num(3) / new Num(4), 0.75);
```

`new Num(3) < new Num(4)` は真となります。

```js
assert(new Num(3) < new Num(4));
```

`new Num(3) > new Num(4)` は偽となります。

```js
assert(!(new Num(3) > new Num(4)));
```

`(new Num(5)).toString()` は「5」を返します。

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
