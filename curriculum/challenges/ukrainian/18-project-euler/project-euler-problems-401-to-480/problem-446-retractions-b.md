---
id: 5900f52c1000cf542c51003d
title: 'Завдання 446: ретракції В'
challengeType: 1
forumTopicId: 302118
dashedName: problem-446-retractions-b
---

# --description--

Сімейство функцій $f_{n, a, b}$ для кожного цілого числа $n > 1$ задано як:

$f_{n, a, b}(x) ≡ ax + b\bmod n$ для цілих $a, b, x$ та $0 \lt a \lt n$, $0 \le b \lt n$, $0 \le x \lt n$.

Назвемо $f_{n, a, b}$ ретракцією, якщо $f_{n, a, b}(f_{n, a, b}(x)) \equiv f_{n, a, b}(x)\bmod n$ для кожного $0 \le x \lt n$.

Нехай $R(n)$ буде кількістю ретракцій для $n$.

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
