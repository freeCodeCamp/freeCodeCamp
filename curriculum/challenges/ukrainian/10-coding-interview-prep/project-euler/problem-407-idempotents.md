---
id: 5900f5041000cf542c510016
title: 'Задача 407: Ідемпотентні елементи'
challengeType: 1
forumTopicId: 302075
dashedName: problem-407-idempotents
---

# --description--

Якщо обчислити $a^2\bmod 6$ для $0 ≤ a ≤ 5$ ми отримаємо: 0, 1, 4, 3, 4, 1.

Найбільше значення $a^2 ≡ a\bmod 6$ становить $4$.

Назвімо $M(n)$ найбільшим значенням $a &lt; n$ так, що $a^2 ≡ a (\text{mod } n)$. Отже, $M(6) = 4$.

Знайдіть $\sum M(n)$ для $1 ≤ n ≤ {10}^7$.

# --hints--

`idempotents()` повинен повертатися як `39782849136421`.

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
