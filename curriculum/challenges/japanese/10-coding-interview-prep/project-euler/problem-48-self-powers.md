---
id: 5900f39c1000cf542c50feaf
title: '問題 48: それ自体の累乗'
challengeType: 1
forumTopicId: 302157
dashedName: problem-48-self-powers
---

# --description--

連続数字について考えます。1<sup>1</sup> + 2<sup>2</sup> + 3<sup>3</sup> + ... + 10<sup>10</sup> = 10405071317 です。

連続数字 1<sup>1</sup> + 2<sup>2</sup> + 3<sup>3</sup> + ... + 1000<sup>1000</sup> の最後の 10 桁を求めなさい。

# --hints--

`selfPowers(10, 3)` は数値を返す必要があります。

```js
assert(typeof selfPowers(10, 3) === 'number');
```

`selfPowers(10, 3)` は 317 を返す必要があります。

```js
assert.strictEqual(selfPowers(10, 3), 317);
```

`selfPowers(150, 6)` は 29045 を返す必要があります。

```js
assert.strictEqual(selfPowers(150, 6), 29045);
```

`selfPowers(673, 7)` は 2473989 を返す必要があります。

```js
assert.strictEqual(selfPowers(673, 7), 2473989);
```

`selfPowers(1000, 10)` は 9110846700 を返す必要があります。

```js
assert.strictEqual(selfPowers(1000, 10), 9110846700);
```

# --seed--

## --seed-contents--

```js
function selfPowers(power, lastDigits) {

  return true;
}

selfPowers(1000, 10);
```

# --solutions--

```js
function selfPowers(power, lastDigits) {
  let sum = 0;
  const modulo = Math.pow(10, lastDigits);

  for (let i = 1; i <= power; i++) {
    let temp = i;
    for (let j = 1; j < i; j++) {
      temp *= i;
      temp %= modulo;
    }

    sum += temp;
    sum %= modulo;
  }

  return sum;
}
```
