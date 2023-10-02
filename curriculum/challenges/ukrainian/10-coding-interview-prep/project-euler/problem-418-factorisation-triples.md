---
id: 5900f50f1000cf542c510021
title: 'Завдання 418: Факторизаційні трійки'
challengeType: 1
forumTopicId: 302087
dashedName: problem-418-factorisation-triples
---

# --description--

Нехай $n$ – натуральне число. Трійка цілих чисел ($a$, $b$, $c$) називається факторизаційною трійкою числа $n$, якщо:

- $1 ≤ a ≤ b ≤ c$
- $a \times b \times c = n$.

Визначте $f(n)$ як $a + b + c$ для факторизаційної трійки ($a$, $b$, $c$) числа $n$, що мінімізує $\frac{c}{a}$. Можна довести, що ця трійка унікальна.

Наприклад, $f(165) = 19$, $f(100\\,100) = 142$ та $f(20!) = 4\\,034\\,872$.

Знайдіть $f(43!)$.

# --hints--

`factorisationTriples()` має повернути `1177163565297340400`.

```js
assert.strictEqual(factorisationTriples(), 1177163565297340400);
```

# --seed--

## --seed-contents--

```js
function factorisationTriples() {

  return true;
}

factorisationTriples();
```

# --solutions--

```js
// solution required
```
