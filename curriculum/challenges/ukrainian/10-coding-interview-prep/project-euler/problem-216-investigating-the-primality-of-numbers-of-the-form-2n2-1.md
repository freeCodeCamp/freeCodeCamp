---
id: 5900f4451000cf542c50ff57
title: 'Завдання 216: Визначення простих чисел, які мають вигляд 2n2-1'
challengeType: 1
forumTopicId: 301858
dashedName: problem-216-investigating-the-primality-of-numbers-of-the-form-2n2-1
---

# --description--

Розглянемо числа $t(n)$, які мають вигляд $t(n) = 2n^2 - 1$, з $n > 1$.

Перші такі числа – це 7, 17, 31, 49, 71, 97, 127 і 161.

Виявляється, що лише $49 = 7 \times 7$ і $161 = 7 \times 23$ не прості числа.

Для $n ≤ 10000$ існує 2202 простих числа $t(n)$.

Скільки чисел $t(n)$ є простими для $n ≤ 50\\,000\\,000$?

# --hints--

`primalityOfNumbers()` має повернути `5437849`.

```js
assert.strictEqual(primalityOfNumbers(), 5437849);
```

# --seed--

## --seed-contents--

```js
function primalityOfNumbers() {

  return true;
}

primalityOfNumbers();
```

# --solutions--

```js
// solution required
```
