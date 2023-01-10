---
id: 5900f36f1000cf542c50fe82
title: '問題 3：最大素數因子'
challengeType: 1
forumTopicId: 301952
dashedName: problem-3-largest-prime-factor
---

# --description--

13195 的素數因子是 5、7、13 和 29。

求給出數 `number` 的最大素數因子是多少?

# --hints--

`largestPrimeFactor(2)` 應該返回一個數字。

```js
assert(typeof largestPrimeFactor(2) === 'number');
```

`largestPrimeFactor(2)` 應該返回 2。

```js
assert.strictEqual(largestPrimeFactor(2), 2);
```

`largestPrimeFactor(3)` 應該返回 3。

```js
assert.strictEqual(largestPrimeFactor(3), 3);
```

`largestPrimeFactor(5)` 應該返回 5。

```js
assert.strictEqual(largestPrimeFactor(5), 5);
```

`largestPrimeFactor(7)` 應該返回 7。

```js
assert.strictEqual(largestPrimeFactor(7), 7);
```

`largestPrimeFactor(8)` 應該返回 2。

```js
assert.strictEqual(largestPrimeFactor(8), 2);
```

`largestPrimeFactor(13195)` 應該返回 29。

```js
assert.strictEqual(largestPrimeFactor(13195), 29);
```

`largestPrimeFactor(600851475143)` 應該返回 6857。

```js
assert.strictEqual(largestPrimeFactor(600851475143), 6857);
```

# --seed--

## --seed-contents--

```js
function largestPrimeFactor(number) {

  return true;
}

largestPrimeFactor(13195);
```

# --solutions--

```js
const largestPrimeFactor = (number) => {
  let largestFactor = number;

  for (let i = 2; i <= Math.sqrt(largestFactor); i++) {
    if (!(largestFactor % i)) {
      let factor = largestFactor / i;
      let candidate = largestPrimeFactor(factor);

      return i > candidate ? i : candidate;
    }
  }

  return largestFactor;
}
```
