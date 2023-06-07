---
id: 5900f3ec1000cf542c50fefe
title: 'Завдання 127: abc-збіги'
challengeType: 1
forumTopicId: 301754
dashedName: problem-127-abc-hits
---

# --description--

Радикалом числа $n$, $rad(n)$ називають добуток простих множників $n$. Наприклад, $504 = 2^3 × 3^2 × 7$, отже $rad(504) = 2 × 7 = 42$.

Нехай число-триплет з додатними цілими числами (a, b, c) abc-збіг, якщо:

1. $GCD(a, b) = GCD(a, c) = GCD(b, c) = 1$
2. $a &lt; b$
3. $a + b = c$
4. $rad(abc) &lt; c$

Наприклад, (5, 27, 32) - це abc-збіг, тому що:

1. $GCD(5, 27) = GCD(5, 32) = GCD(27, 32) = 1$
2. $5 &lt; 27$
3. $5 + 27 = 32$
4. $rad(4320) = 30 &lt; 32$

Виявляється, abc-збіги - досить рідкісні і існує тільки 31 abc-збігів для $c &lt; 1000$, with $\sum{c} = 12523$.

Знайдіть $\sum{c}$ для $c &lt; 120000$.

# --hints--

`abcHits()` повинен повертатися як `18407904`.

```js
assert.strictEqual(abcHits(), 18407904);
```

# --seed--

## --seed-contents--

```js
function abcHits() {

  return true;
}

abcHits();
```

# --solutions--

```js
// solution required
```
