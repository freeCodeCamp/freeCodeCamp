---
id: 5900f5041000cf542c510016
title: 'Завдання 407: ідемпотентні елементи'
challengeType: 1
forumTopicId: 302075
dashedName: problem-407-idempotents
---

# --description--

Якщо обчислити $a^2\bmod 6$ за умови $0 ≤ a ≤ 5$, то отримаємо 0, 1, 4, 3, 4, 1.

Найбільше значення $a^2 ≡ a\bmod 6$ становить $4$.

Назвемо $M(n)$ найбільшим значенням $a &lt; n$, за якого $a^2 ≡ a (\text{mod } n)$. Отже, $M(6) = 4$.

Знайдіть $\sum M(n)$ за умови $1 ≤ n ≤ {10}^7$.

# --hints--

`idempotents()` має повернути `39782849136421`.

```js
assert.strictEqual(idempotents(), 39782849136421);
```

# --seed--

## --seed-contents--

```js
function idempotents() {

  return true;
}

idempotents();
```

# --solutions--

```js
// solution required
```
