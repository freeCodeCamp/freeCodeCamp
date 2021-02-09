---
id: 5900f3941000cf542c50fea7
title: 'Problem 40: Champernowne''s constant'
challengeType: 5
forumTopicId: 302066
dashedName: problem-40-champernownes-constant
---

# --description--

An irrational decimal fraction is created by concatenating the positive integers:

0.12345678910**1**112131415161718192021...

It can be seen that the 12<sup>th</sup> digit of the fractional part is 1.

If *d<sub>n</sub>* represents the *n*<sup>th</sup> digit of the fractional part, find the value of the following expression.

d<sub>1</sub> × d<sub>10</sub> × d<sub>100</sub> × d<sub>1000</sub> × d<sub>10000</sub> × d<sub>100000</sub> × d<sub>1000000</sub>

# --hints--

`champernownesConstant(100)` should return a number.

```js
assert(typeof champernownesConstant(100) === 'number');
```

`champernownesConstant(100)` should return 5.

```js
assert.strictEqual(champernownesConstant(100), 5);
```

`champernownesConstant(1000)` should return 15.

```js
assert.strictEqual(champernownesConstant(1000), 15);
```

`champernownesConstant(1000000)` should return 210.

```js
assert.strictEqual(champernownesConstant(1000000), 210);
```

# --seed--

## --seed-contents--

```js
function champernownesConstant(n) {

  return true;
}

champernownesConstant(100);
```

# --solutions--

```js
function champernownesConstant(n) {
  let fractionalPart = '';
  for (let i = 0; fractionalPart.length <= n; i++) {
    fractionalPart += i.toString();
  }

  let product = 1;
  for (let i = 0; i < n.toString().length; i++) {
    const index = 10 ** i;
    product *= parseInt(fractionalPart[index], 10);
  }

  return product;
}
```
