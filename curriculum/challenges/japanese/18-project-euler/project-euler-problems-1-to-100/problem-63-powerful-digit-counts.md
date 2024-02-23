---
id: 5900f3ab1000cf542c50febe
title: '問題 63: 累乗の桁数'
challengeType: 1
forumTopicId: 302175
dashedName: problem-63-powerful-digit-counts
---

# --description--

5 桁の数 16807 = 7<sup>5</sup> は、数の 5 乗です。 同様に、9 桁の数 134217728 = 8<sup>9</sup> は、数の 9 乗です。

数の `n` 乗である `n` 桁の正の整数がいくつあるかを返す関数を完成させなさい。

# --hints--

`powerfulDigitCounts(1)` は数値を返す必要があります。

```js
assert(typeof powerfulDigitCounts(1) === 'number');
```

`powerfulDigitCounts(1)` は `9` を返す必要があります。

```js
assert.strictEqual(powerfulDigitCounts(1), 9);
```

`powerfulDigitCounts(2)` は `6` を返す必要があります。

```js
assert.strictEqual(powerfulDigitCounts(2), 6);
```

`powerfulDigitCounts(3)` は `5` を返す必要があります。

```js
assert.strictEqual(powerfulDigitCounts(3), 5);
```

`powerfulDigitCounts(4)` は `4` を返す必要があります。

```js
assert.strictEqual(powerfulDigitCounts(4), 4);
```

`powerfulDigitCounts(5)` は `3` を返す必要があります。

```js
assert.strictEqual(powerfulDigitCounts(5), 3);
```

`powerfulDigitCounts(6)` は `3` を返す必要があります。

```js
assert.strictEqual(powerfulDigitCounts(6), 3);
```

`powerfulDigitCounts(7)` は `2` を返す必要があります。

```js
assert.strictEqual(powerfulDigitCounts(7), 2);
```

`powerfulDigitCounts(8)` は `2` を返す必要があります。

```js
assert.strictEqual(powerfulDigitCounts(8), 2);
```

`powerfulDigitCounts(10)` は `2` を返す必要があります。

```js
assert.strictEqual(powerfulDigitCounts(10), 2);
```

`powerfulDigitCounts(21)` は `1` を返す必要があります。

```js
assert.strictEqual(powerfulDigitCounts(21), 1);
```

# --seed--

## --seed-contents--

```js
function powerfulDigitCounts(n) {

  return true;
}

powerfulDigitCounts(1);
```

# --solutions--

```js
function powerfulDigitCounts(n) {
  function countDigits(num) {
    let counter = 0;
    while (num > 0) {
      num = Math.floor(num / 10);
      counter++;
    }
    return counter;
  }

  let numbersCount = 0;

  let curNum = 1;
  while (curNum < 10) {
    let power = n;
    if (power === countDigits(curNum ** power)) {
      numbersCount++;
    }
    curNum++;
  }

  return numbersCount;
}
```
