---
id: 5a23c84252665b21eecc7e82
title: Найбільший спільний дільник
challengeType: 1
forumTopicId: 302277
dashedName: greatest-common-divisor
---

# --description--

Напишіть функцію, яка повертає найбільший спільний дільник двох цілих чисел.

# --hints--

`gcd` має бути функцією.

```js
assert(typeof gcd == 'function');
```

`gcd(24,36)` має повернути число.

```js
assert(typeof gcd(24, 36) == 'number');
```

`gcd(24,36)` має повернути `12`.

```js
assert.equal(gcd(24, 36), 12);
```

`gcd(30,48)` має повернути `6`.

```js
assert.equal(gcd(30, 48), 6);
```

`gcd(10,15)` має повернути `5`.

```js
assert.equal(gcd(10, 15), 5);
```

`gcd(100,25)` має повернути `25`.

```js
assert.equal(gcd(100, 25), 25);
```

`gcd(13,250)` має повернути `1`.

```js
assert.equal(gcd(13, 250), 1);
```

`gcd(1300,250)` має повернути `50`.

```js
assert.equal(gcd(1300, 250), 50);
```

# --seed--

## --seed-contents--

```js
function gcd(a, b) {

}
```

# --solutions--

```js
function gcd(a, b) {
  return b==0 ? Math.abs(a):gcd(b, a % b);
}
```
