---
id: 5900f4da1000cf542c50ffec
title: 'Завдання 365: величезний біноміальний коефіцієнт'
challengeType: 1
forumTopicId: 302026
dashedName: problem-365-a-huge-binomial-coefficient
---

# --description--

Біномінальний коефіцієнт $\displaystyle\binom{{10}^{18}}{{10}^9}$ є числом з більш ніж 9 мільярдами ($9 × {10}^9$) цифр.

Нехай $M(n, k, m)$ позначає біномінальний коефіцієнт $\displaystyle\binom{n}{k}$ mod $m$.

Знайдіть $\sum M({10}^{18}, {10}^9, p \times q \times r)$ за умови $1000 &lt; p &lt; q &lt; r &lt; 5000$, де $p$, $q$, $r$ є простими числами.

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
