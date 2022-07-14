---
id: 5900f49d1000cf542c50ffb0
title: 'Завдання 305: Рефлексивна позиція'
challengeType: 1
forumTopicId: 301959
dashedName: problem-305-reflexive-position
---

# --description--

Назвімо $S$ (нескінченним) рядом, що створюється шляхом об'єднання послідовних додатних цілих чисел (які починаються з 1), записаних в десятковій системі числення.

Таким чином, $S = 1234567891011121314151617181920212223242\ldots$

Нескладно здогадатись, що будь-яке число буде показане нескінченну кількість разів у $S$.

Назвімо $f(n)$ початковою позицією $n^{\text{th}}$ входження $n$ в $S$. Наприклад, $f(1) = 1$, $f(5) = 81$, $f(12) = 271$ і $f(7780) = 111\\,111\\,365$.

Знайдіть $\sum f(3^k) для 1 ≤ k ≤ 13$.

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
