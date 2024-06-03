---
id: 5a23c84252665b21eecc7e82
title: 最大公約數
challengeType: 1
forumTopicId: 302277
dashedName: greatest-common-divisor
---

# --description--

Write a function that returns the greatest common divisor of two integers.

# --hints--

`gcd`應該是一個功能。

```js
assert(typeof gcd == 'function');
```

`gcd(24,36)`應該返回一個數字。

```js
assert(typeof gcd(24, 36) == 'number');
```

`gcd(24,36)`應該返回`12` 。

```js
assert.equal(gcd(24, 36), 12);
```

`gcd(30,48)`應該返回`6` 。

```js
assert.equal(gcd(30, 48), 6);
```

`gcd(10,15)`應該返回`5` 。

```js
assert.equal(gcd(10, 15), 5);
```

`gcd(100,25)`應該返回`25` 。

```js
assert.equal(gcd(100, 25), 25);
```

`gcd(13,250)`應該返回`1` 。

```js
assert.equal(gcd(13, 250), 1);
```

`gcd(1300,250)`應該返回`50` 。

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
