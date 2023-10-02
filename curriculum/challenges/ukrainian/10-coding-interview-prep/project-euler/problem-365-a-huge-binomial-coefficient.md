---
id: 5900f4da1000cf542c50ffec
title: 'Задача 365: Величезний біноміальний коефіцієнт'
challengeType: 1
forumTopicId: 302026
dashedName: problem-365-a-huge-binomial-coefficient
---

# --description--

Біномінальний коефіцієнт $\displaystyle\binom{{10}^{18}}{{10}^9}$ є числом з більш ніж 9 мільярдами ($9 × {10}^9$) цифр.

Нехай $M(n, k, m)$ позначає біномінальний коефіцієнт $\displaystyle\binom{n}{k}$ модуля $m$.

Обчисліть $\sum M({10}^{18}, {10}^9, p \times q \times r)$ для $1000 &lt; p &lt; q &lt; r &lt; 5000$ та $p$, $q$, $r$ — прості числа.

# --hints--

`hugeBinomialCoefficient()` має повернути `162619462356610300`.

```js
assert.strictEqual(hugeBinomialCoefficient(), 162619462356610300);
```

# --seed--

## --seed-contents--

```js
function hugeBinomialCoefficient() {

  return true;
}

hugeBinomialCoefficient();
```

# --solutions--

```js
// solution required
```
