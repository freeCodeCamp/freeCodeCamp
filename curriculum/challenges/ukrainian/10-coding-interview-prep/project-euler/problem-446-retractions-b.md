---
id: 5900f52c1000cf542c51003d
title: 'Завдання 446: Скорочення B'
challengeType: 1
forumTopicId: 302118
dashedName: problem-446-retractions-b
---

# --description--

Для кожного цілого числа $n> 1$, сімейство функцій $f_{n, a, b}$ визначається як:

$f_{n, a, b}(x) ≡ ax + b\bmod n$ для $a, b, x$ ціле число та $0 \lt a \lt n$, $0 \le b \lt n$, $0 \le x \lt n$.

Ми назвемо $f_{n, a, b}$ скороченням якщо $f_{n, a, b}(f_{n, a, b}(x)) \equiv f_{n, a, b}(x)\bmod n$ для кожного $0 \le x \lt n$.

Нехай $R(n)$ буде числом скорочення для $n$.

$F(N) = \displaystyle\sum_{n = 1}^N R(n^4 + 4)$.

$F(1024) = 77\\,532\\,377\\,300\\,600$.

Знайдіть $F({10}^7)$. Дайте відповідь за модулем $1\\,000\\,000\\,007$.

# --hints--

`retractionsB()` має повернути `907803852`.

```js
assert.strictEqual(retractionsB(), 907803852);
```

# --seed--

## --seed-contents--

```js
function retractionsB() {

  return true;
}

retractionsB();
```

# --solutions--

```js
// solution required
```
