---
id: 5900f3ec1000cf542c50fefe
title: 'Завдання 127: abc-збіги'
challengeType: 1
forumTopicId: 301754
dashedName: problem-127-abc-hits
---

# --description--

Радикалом числа $n$ — $rad(n)$ — називають добуток простих множників $n$. Наприклад, $504 = 2^3 × 3^2 × 7$, тому $rad(504) = 2 × 3 × 7 = 42$.

Три натуральні числа (a, b, c) будуть abc-збігом, якщо:

1. $НСД(a, b) = НСД(a, c) = НСД(b, c) = 1$
2. $a &lt; b$
3. $a + b = c$
4. $rad(abc) &lt; c$

Наприклад, (5, 27, 32) є abc-збігом, оскільки:

1. $НСД(5, 27) = НСД(5, 32) = НСД(27, 32) = 1$
2. $5 &lt; 27$
3. $5 + 27 = 32$
4. $rad(4320) = 30 &lt; 32$

Виявляється, abc-збіги досить рідкісні та існує лише 31 abc-збіг за умови $c &lt; 1000$, де $\sum{c} = 12523$.

Знайдіть $\sum{c}$ за умови $c &lt; 120000$.

# --hints--

`abcHits()` має повернути `18407904`.

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
