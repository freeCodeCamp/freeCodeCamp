---
id: 5900f49d1000cf542c50ffaf
title: 'Завдання 304: Прімоначчі'
challengeType: 1
forumTopicId: 301958
dashedName: problem-304-primonacci
---

# --description--

Для будь-якого додатного цілого числа $n$ функція $\text{next_prime}(n)$ повертає найменші прості числа $p$, такі як $p > n$.

Послідовність $a(n)$ визначається так: $a(1) = \text{next_prime}({10}^{14})$ і $a(n) = \text{next_prime}(a(n - 1))$ для $n > 1$.

Послідовність Фібоначчі $f(n)$ визначається так: $f(0) = 0$, $f(1) = 1$ і $f(n) = f(n - 1) + f(n - 2)$ для $n > 1$.

Послідовність $b(n)$ визначається як $f(a(n))$.

Знайдіть $\sum b(n)$ для $1≤n≤100\\,000$. Дайте відповідь $\bmod 1\\,234\\,567\\,891\\,011$.

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
