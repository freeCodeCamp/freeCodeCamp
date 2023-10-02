---
id: 5a23c84252665b21eecc7e82
title: 最大公約数
challengeType: 1
forumTopicId: 302277
dashedName: greatest-common-divisor
---

# --description--

2つの整数の最大公約数を返す関数を記述します。

# --hints--

`gcd`は関数とします。

```js
assert(typeof gcd == 'function');
```

`gcd(24,36)` は数値を返す必要があります。

```js
assert(typeof gcd(24, 36) == 'number');
```

`gcd(24,36)` は`12`を返す必要があります。

```js
assert.equal(gcd(24, 36), 12);
```

`gcd(30,48)` は`6`を返す必要があります。

```js
assert.equal(gcd(30, 48), 6);
```

`gcd(10,15)` は`5`を返す必要があります。

```js
assert.equal(gcd(10, 15), 5);
```

`gcd(100,25)` は`25`を返す必要があります。

```js
assert.equal(gcd(100, 25), 25);
```

`gcd(13,250)` は`1`を返す必要があります。

```js
assert.equal(gcd(13, 250), 1);
```

`gcd(1300,250)` は`50`を返す必要があります。

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
