---
id: 5a23c84252665b21eecc7e82
title: Größter gemeinsamer Teiler
challengeType: 1
forumTopicId: 302277
dashedName: greatest-common-divisor
---

# --description--

Write a function that returns the greatest common divisor of two integers.

# --hints--

`gcd` sollte eine Funktion sein.

```js
assert(typeof gcd == 'function');
```

`gcd(24,36)` sollte eine Zahl zurückgeben.

```js
assert(typeof gcd(24, 36) == 'number');
```

`gcd(24,36)` sollte `12` zurückgeben.

```js
assert.equal(gcd(24, 36), 12);
```

`gcd(30,48)` sollte `6` zurückgeben.

```js
assert.equal(gcd(30, 48), 6);
```

`gcd(10,15)` sollte `5` zurückgeben.

```js
assert.equal(gcd(10, 15), 5);
```

`gcd(100,25)` sollte `25` zurückgeben.

```js
assert.equal(gcd(100, 25), 25);
```

`gcd(13,250)` sollte `1` zurückgeben.

```js
assert.equal(gcd(13, 250), 1);
```

`gcd(1300,250)` sollte `50` zurückgeben.

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
