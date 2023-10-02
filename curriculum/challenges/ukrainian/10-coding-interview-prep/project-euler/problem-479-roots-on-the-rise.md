---
id: 5900f54b1000cf542c51005d
title: 'Задача 479: Корені на підйомі'
challengeType: 1
forumTopicId: 302156
dashedName: problem-479-roots-on-the-rise
---

# --description--

Нехай $a_k$, $b_k$ та $c_k$ представляють три рішення (дійсні та комплексні числа) для виразу $\frac{1}{x} = {\left(\frac{k}{x} \right)}^2 (k + x^2) - kx$.

Наприклад, для $k = 5$ ми бачимо, що $\\{a_5, b_5, c_5\\}$ майже рівні $\\{5.727244, -0.363622 + 2.057397i, -0.363622 - 2.057397i\\}$.

Нехай $S(n) = \displaystyle\sum_{p = 1}^n \sum_{k = 1}^n {(a_k + b_k)}^p {(b_k + c_k)}^p {(c_k + a_k)}^p$ для всіх цілих $p$, $k$, таких що $1 ≤ p, k ≤ n$.

Цікаво, що $S(n)$ завжди є цілим числом. Наприклад, $S(4) = 51\\,160$.

Знайдіть $S({10}^6) \text{ modulo } 1\\,000\\,000\\,007$.

# --hints--

`rootsOnTheRise()` має повернути `191541795`.

```js
assert.strictEqual(rootsOnTheRise(), 191541795);
```

# --seed--

## --seed-contents--

```js
function rootsOnTheRise() {

  return true;
}

rootsOnTheRise();
```

# --solutions--

```js
// solution required
```
