---
id: 597089c87eec450c68aa1643
title: Визначення примітивного типу даних
challengeType: 1
forumTopicId: 302248
dashedName: define-a-primitive-data-type
---

# --description--

Визначте тип, який поводиться як ціле число, але має найменше допустиме значення 1 та найбільше допустиме значення 10.

Обробка помилок:

<ul>
  <li>Якщо ви спробуєте реалізувати <code>Num</code> зі значенням поза діапазоном 1 - 10, то має виникнути помилка <code>TypeError</code> з повідомленням <code>'Out of range'</code>.</li>
  <li>Якщо ви спробуєте реалізувати <code>Num</code> зі значенням, яке не є числом, то має виникнути помилка <code>TypeError</code> з повідомленням <code>'Not a Number'</code>.</li>
</ul>

# --hints--

`Num` має бути функцією.

```js
assert(typeof Num === 'function');
```

`new Num(4)` має повернути об’єкт.

```js
assert(typeof new Num(4) === 'object');
```

`new Num('test')` має видати TypeError з повідомленням 'Not a Number'.

```js
assert.throws(() => new Num('test'), TypeError);
```

`new Num(0)` має видати TypeError з повідомленням 'Out of range'.

```js
assert.throws(() => new Num(0), TypeError);
```

`new Num(-5)` має видати TypeError з повідомленням 'Out of range'.

```js
assert.throws(() => new Num(-5), TypeError);
```

`new Num(10)` має видати TypeError з повідомленням 'Out of range'.

```js
assert.throws(() => new Num(11), TypeError);
```

`new Num(20)` має видати TypeError з повідомленням 'Out of range'.

```js
assert.throws(() => new Num(20), TypeError);
```

`new Num(3) + new Num(4)` має дорівнювати 7.

```js
assert.equal(new Num(3) + new Num(4), 7);
```

`new Num(3) - new Num(4)` має дорівнювати -1.

```js
assert.equal(new Num(3) - new Num(4), -1);
```

`new Num(3) * new Num(4)` має дорівнювати 12.

```js
assert.equal(new Num(3) * new Num(4), 12);
```

`new Num(3) / new Num(4)` має дорівнювати 0.75.

```js
assert.equal(new Num(3) / new Num(4), 0.75);
```

`new Num(3) < new Num(4)` має бути істиною.

```js
assert(new Num(3) < new Num(4));
```

`new Num(3) > new Num(4)` має бути хибою.

```js
assert(!(new Num(3) > new Num(4)));
```

`(new Num(5)).toString()` має повернути '5'.

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
