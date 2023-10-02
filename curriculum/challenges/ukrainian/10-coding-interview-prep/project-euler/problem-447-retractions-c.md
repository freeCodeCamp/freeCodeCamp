---
id: 5900f52c1000cf542c51003e
title: 'Завдання 447: Скорочення С'
challengeType: 1
forumTopicId: 302119
dashedName: problem-447-retractions-c
---

# --description--

Для кожного цілого числа $n> 1$, сімейство функцій $f_{n, a, b}$ визначається як:

$f_{n, a, b}(x) ≡ ax + b\bmod n$ для $a, b, x$ ціле число та $0 \lt a \lt n$, $0 \le b \lt n$, $0 \le x \lt n$.

Ми назвемо $f_{n, a, b}$ скороченням якщо $f_{n, a, b}(f_{n, a, b}(x)) \equiv f_{n, a, b}(x)\bmod n$ для кожного $0 \le x \lt n$.

Нехай $R(n)$ буде числом скорочення для $n$.

$F(N) = \displaystyle\sum_{n = 2}^N R(n)$.

$F({10}^7) ≡ 638\\,042\\,271\bmod 1\\,000\\,000\\,007$.

Знайдіть $F({10}^{14})$. Дайте відповідь за модулем $1\\,000\\,000\\,007$.

# --hints--

`retractionsC()` має повернути `530553372`.

```js
assert.strictEqual(retractionsC(), 530553372);
```

# --seed--

## --seed-contents--

```js
function retractionsC() {

  return true;
}

retractionsC();
```

# --solutions--

```js
// solution required
```
