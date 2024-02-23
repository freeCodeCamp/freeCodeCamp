---
id: 5900f49d1000cf542c50ffb0
title: 'Завдання 305: рефлексивна позиція'
challengeType: 1
forumTopicId: 301959
dashedName: problem-305-reflexive-position
---

# --description--

Назвемо $S$ (нескінченним) рядком, що створюється шляхом об’єднання послідовних натуральних чисел (починаючи з 1), записаних в десятковій системі.

Таким чином, $S = 1234567891011121314151617181920212223242\ldots$

Легко здогадатись, що будь-яке число з’являтиметься нескінченну кількість разів в межах $S$.

Назвемо $f(n)$ початковою позицією $n^{\text{-ого}}$ повтору числа $n$ в $S$. Наприклад, $f(1) = 1$, $f(5) = 81$, $f(12) = 271$ та $f(7780) = 111\\,111\\,365$.

Знайдіть $\sum f(3^k) за умови 1 ≤ k ≤ 13$.

# --hints--

`reflexivePosition()` має повернути `18174995535140`.

```js
assert.strictEqual(reflexivePosition(), 18174995535140);
```

# --seed--

## --seed-contents--

```js
function reflexivePosition() {

  return true;
}

reflexivePosition();
```

# --solutions--

```js
// solution required
```
