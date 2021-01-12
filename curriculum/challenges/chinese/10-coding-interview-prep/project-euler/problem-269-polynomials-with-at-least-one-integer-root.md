---
id: 5900f4791000cf542c50ff8c
title: 问题269：具有至少一个整数根的多项式
challengeType: 5
videoUrl: ''
dashedName: problem-269-polynomials-with-at-least-one-integer-root
---

# --description--

多项式P（x）的根或零是等式P（x）= 0的解。将Pn定义为其系数是n的数字的多项式。例如，P5703（x）= 5x3 + 7x2 + 3。

我们可以看到：Pn（0）是n的最后一位，Pn（1）是n的位数之和，Pn（10）是n本身。定义Z（k）作为正整数的数量，n ，不超过多项式Pn具有至少一个整数根的k。

可以证实Z（100 000）是14696。

什么是Z（1016）？

# --hints--

`euler269()`应该返回1311109198529286。

```js
assert.strictEqual(euler269(), 1311109198529286);
```

# --seed--

## --seed-contents--

```js
function euler269() {

  return true;
}

euler269();
```

# --solutions--

```js
// solution required
```
