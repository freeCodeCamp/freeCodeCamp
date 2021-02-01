---
id: 5900f36f1000cf542c50fe82
title: 问题3：最大素数
challengeType: 5
videoUrl: ''
dashedName: problem-3-largest-prime-factor
---

# --description--

13195的主要因子是5、7、13和29。

给定<code>数字<!-- code-->的最大素数是多少？</code>

# --hints--

`largestPrimeFactor(2)`应该返回2。

```js
assert.strictEqual(largestPrimeFactor(2), 2);
```

`largestPrimeFactor(3)`应该返回3。

```js
assert.strictEqual(largestPrimeFactor(3), 3);
```

`largestPrimeFactor(5)`应该返回5。

```js
assert.strictEqual(largestPrimeFactor(5), 5);
```

`largestPrimeFactor(7)`应该返回7。

```js
assert.strictEqual(largestPrimeFactor(7), 7);
```

`largestPrimeFactor(13195)`应该返回29。

```js
assert.strictEqual(largestPrimeFactor(13195), 29);
```

`largestPrimeFactor(600851475143)`应该返回6857。

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
