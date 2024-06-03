---
id: 5900f4451000cf542c50ff57
title: 'Завдання 216: визначення простих чисел вигляду 2n2-1'
challengeType: 1
forumTopicId: 301858
dashedName: problem-216-investigating-the-primality-of-numbers-of-the-form-2n2-1
---

# --description--

Розглянемо числа $t(n)$ вигляду $t(n) = 2n^2 - 1$ за умови $n > 1$.

Такі перші числа: 7, 17, 31, 49, 71, 97, 127 та 161.

Виявляється, що лише $49 = 7 \times 7$ та $161 = 7 \times 23$ не є простими числами.

За умови $n ≤ 10000$ існує 2202 числа $t(n)$, які є простими.

Скільки чисел $t(n)$ є простими за умови $n ≤ 50\\,000\\,000$?

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
