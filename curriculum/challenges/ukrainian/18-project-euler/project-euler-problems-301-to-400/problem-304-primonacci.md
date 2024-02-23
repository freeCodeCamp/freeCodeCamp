---
id: 5900f49d1000cf542c50ffaf
title: 'Завдання 304: простоначчі'
challengeType: 1
forumTopicId: 301958
dashedName: problem-304-primonacci
---

# --description--

Функція $\text{next_prime}(n)$, де $n$ є будь-яким натуральним числом, повертає найменше просте число $p$ за умови $p > n$.

Послідовність $a(n)$ визначена як $a(1) = \text{next_prime}({10}^{14})$ та $a(n) = \text{next_prime}(a(n - 1))$ за умови $n > 1$.

Послідовність Фібоначчі $f(n)$ визначається як $f(0) = 0$, $f(1) = 1$ та $f(n) = f(n - 1) + f(n - 2)$ за умови $n > 1$.

Послідовність $b(n)$ визначається як $f(a(n))$.

Знайдіть $\sum b(n)$ за умови $1≤n≤100\\,000$. Надайте відповідь за $\bmod 1\\,234\\,567\\,891\\,011$.

# --hints--

`primonacci()` має повернути `283988410192`.

```js
assert.strictEqual(primonacci(), 283988410192);
```

# --seed--

## --seed-contents--

```js
function primonacci() {

  return true;
}

primonacci();
```

# --solutions--

```js
// solution required
```
