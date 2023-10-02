---
id: 5900f44e1000cf542c50ff60
title: '問題 225: トリボナッチ数列の非約数'
challengeType: 1
forumTopicId: 301868
dashedName: problem-225-tribonacci-non-divisors
---

# --description--

数列 1, 1, 1, 3, 5, 9, 17, 31, 57, 105, 193, 355, 653, 1201 ...

これは、$T_1 = T_2 = T_3 = 1$ および $T_n = T_{n - 1} + T_{n - 2} + T_{n - 3}$ で定義されます。

27 で割り切れる数がこの数列に含まれていないことを証明できます。 実は、27 はこの性質を持つ最小の奇数です。

上の数列のいずれの項の約数でもない ${124}$ 番目の奇数を求めなさい。

# --hints--

`tribonacciNonDivisors()` は `2009` を返す必要があります。

```js
assert.strictEqual(tribonacciNonDivisors(), 2009);
```

# --seed--

## --seed-contents--

```js
function tribonacciNonDivisors() {

  return true;
}

tribonacciNonDivisors();
```

# --solutions--

```js
// solution required
```
