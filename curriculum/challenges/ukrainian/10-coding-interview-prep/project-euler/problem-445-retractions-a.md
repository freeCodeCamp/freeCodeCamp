---
id: 5900f52a1000cf542c51003c
title: 'Завдання 445: Ретракції А'
challengeType: 1
forumTopicId: 302117
dashedName: problem-445-retractions-a
---

# --description--

Для кожного цілого числа $n> 1$, сімейство функцій $f_{n, a, b}$ визначається як:

$f_{n, a, b}(x) ≡ ax + b\bmod n$ для $a, b, x$ ціле число та $0 \lt a \lt n$, $0 \le b \lt n$, $0 \le x \lt n$.

Ми назвемо $f_{n, a, b}$ скороченням якщо $f_{n, a, b}(f_{n, a, b}(x)) \equiv f_{n, a, b}(x)\bmod n$ для кожного $0 \le x \lt n$.

Нехай $R(n)$ буде числом скорочень для $n$.

Дано, що

$$\sum_{k = 1}^{99\\,999} R(\displaystyle\binom{100\\,000}{k}) \equiv 628\\,701\\,600\bmod 1\\,000\\,000\\,007$$

Знайдіть $$\sum_{k = 1}^{9\\,999\\,999} R(\displaystyle\binom{10\\,000\\,000}{k})$$ Дайте відповідь за модулем $1\\,000\\,000\\,007$.

# --hints--

`retractionsA()` має повернути `659104042`.

```js
assert.strictEqual(retractionsA(), 659104042);
```

# --seed--

## --seed-contents--

```js
function retractionsA() {

  return true;
}

retractionsA();
```

# --solutions--

```js
// solution required
```
