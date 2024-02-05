---
id: 5900f3981000cf542c50feab
title: '問題 44: 五角数'
challengeType: 1
forumTopicId: 302111
dashedName: problem-44-pentagon-numbers
---

# --description--

五角数は P<sub>n</sub>=`n`(3`n`-1)/2 で得られます。 最初の 10 個 の五角数は次のとおりです。

1, 5, 12, 22, 35, 51, 70, 92, 117, 145, ...

P<sub>4</sub> + P<sub>7</sub> = 22 + 70 = 92 = P<sub>8</sub> であることが分かります。 しかし、それらの差である 70 − 22 = 48 は五角数ではありません。

和と差が五角数であり D = |P<sub>k</sub> − P<sub>j</sub>| が最小化されるような、五角数 P<sub>j</sub> と P<sub>k</sub> の対を特定し、D の値を求めなさい。

# --hints--

`pentagonNumbers()` は数値を返す必要があります。

```js
assert(typeof pentagonNumbers() === 'number');
```

`pentagonNumbers()` は 5482660 を返す必要があります。

```js
assert.strictEqual(pentagonNumbers(), 5482660);
```

# --seed--

## --seed-contents--

```js
function pentagonNumbers() {

  return true;
}

pentagonNumbers();
```

# --solutions--

```js
function pentagonNumbers() {
  function isPentagonal(num) {
  // Formula found by solving pentagonal number
  // equation for n.
  const n = (Math.sqrt((24 * num) + 1) + 1) / 6;
  return n % 1 === 0;
  }

  function pentagonal(num) {
    return (num * ((3 * num) - 1)) / 2;
  }
  let result;
  let i = 1;
  while (!result) {
  i++;
  const num1 = (i * ((3 * i) - 1)) / 2; // Pentagonal num formula
  const minDiff = num1 - (((i - 1) * ((3 * (i - 1)) - 1)) / 2);
  let j = i - 1;
  while (j > 0 && !result) {
  const num2 = (j * ((3 * j) - 1)) / 2;
  if (isPentagonal(num1 - num2) && isPentagonal(num1 + num2)) {
        result = num1 - num2;
      }
      j--;
    }
  }
  return result;
  }
```
