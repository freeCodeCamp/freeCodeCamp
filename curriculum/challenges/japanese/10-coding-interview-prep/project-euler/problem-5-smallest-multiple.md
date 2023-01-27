---
id: 5900f3711000cf542c50fe84
title: '問題 5: 最小の倍数'
challengeType: 1
forumTopicId: 302160
dashedName: problem-5-smallest-multiple
---

# --description--

2520 は、1 から 10 までのすべての数字で割り切れる最小の数です。

1 から `n` までのすべての数字で割り切れる最小の正の数を求めなさい。

# --hints--

`smallestMult(5)` は数値を返す必要があります。

```js
assert(typeof smallestMult(5) === 'number');
```

`smallestMult(5)` は 60 を返す必要があります。

```js
assert.strictEqual(smallestMult(5), 60);
```

`smallestMult(7)` は 420を返す必要があります。

```js
assert.strictEqual(smallestMult(7), 420);
```

`smallestMult(10)` は 2520 を返す必要があります。

```js
assert.strictEqual(smallestMult(10), 2520);
```

`smallestMult(13)` は 360360 を返す必要があります。

```js
assert.strictEqual(smallestMult(13), 360360);
```

`smallestMult(20)` は 232792560 を返す必要があります。

```js
assert.strictEqual(smallestMult(20), 232792560);
```

# --seed--

## --seed-contents--

```js
function smallestMult(n) {

  return true;
}

smallestMult(20);
```

# --solutions--

```js
function smallestMult(n){
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a%b); // Euclidean algorithm
  }

  function lcm(a, b) {
    return a * b / gcd(a, b);
  }
  var result = 1;
  for(var i = 2; i <= n; i++) {
    result = lcm(result, i);
  }
  return result;
}
```
