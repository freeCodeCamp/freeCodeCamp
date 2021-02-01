---
id: 5900f3711000cf542c50fe84
title: 问题5：最小的倍数
challengeType: 5
videoUrl: ''
dashedName: problem-5-smallest-multiple
---

# --description--

2520是可以除以1到10中的每个数字而没有任何余数的最小数字。从1到`n`所有数字均可被整除的最小正数是多少？

# --hints--

`smallestMult(5)`应该返回60。

```js
assert.strictEqual(smallestMult(5), 60);
```

`smallestMult(7)`应该返回420。

```js
assert.strictEqual(smallestMult(7), 420);
```

`smallestMult(10)`应返回2520。

```js
assert.strictEqual(smallestMult(10), 2520);
```

`smallestMult(13)`应返回360360。

```js
assert.strictEqual(smallestMult(13), 360360);
```

`smallestMult(20)`应该返回232792560。

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
