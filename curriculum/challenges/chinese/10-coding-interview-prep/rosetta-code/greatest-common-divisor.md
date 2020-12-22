---
id: 5a23c84252665b21eecc7e82
title: 最大公约数
challengeType: 5
videoUrl: ''
---

# --description--

编写一个函数，返回两个整数的最大公约数。

# --hints--

`gcd`应该是一个功能。

```js
assert(typeof gcd == 'function');
```

`gcd(24,36)`应该返回一个数字。

```js
assert(typeof gcd(24, 36) == 'number');
```

`gcd(24,36)`应该返回`12` 。

```js
assert.equal(gcd(24, 36), 12);
```

`gcd(30,48)`应该返回`6` 。

```js
assert.equal(gcd(30, 48), 6);
```

`gcd(10,15)`应该返回`5` 。

```js
assert.equal(gcd(10, 15), 5);
```

`gcd(100,25)`应该返回`25` 。

```js
assert.equal(gcd(100, 25), 25);
```

`gcd(13,250)`应该返回`1` 。

```js
assert.equal(gcd(13, 250), 1);
```

`gcd(1300,250)`应该返回`50` 。

```js
assert.equal(gcd(1300, 250), 50);
```

# --solutions--

