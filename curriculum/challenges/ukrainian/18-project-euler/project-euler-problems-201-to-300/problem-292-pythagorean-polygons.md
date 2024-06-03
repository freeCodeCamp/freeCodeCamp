---
id: 5900f4911000cf542c50ffa3
title: 'Завдання 292: багатокутники Піфагора'
challengeType: 1
forumTopicId: 301944
dashedName: problem-292-pythagorean-polygons
---

# --description--

Піфагоровий багатокутник — це опуклий багатокутник з такими властивостями:

- має принаймні три вершини,
- вершини не знаходяться на одній прямій,
- координатами кожної вершини є цілі числа,
- довжиною кожного ребра є ціле число.

Дано $n$. Визначимо $P(n)$ як кількість різних піфагорових багатокутників, периметр яких $≤ n$.

Піфагорові багатокутники мають розглядатися як різні, якщо жоден з них не є відтворенням іншого.

Дано, що $P(4) = 1$, $P(30) = 3655$ та $P(60) = 891045$.

Знайдіть $P(120)$.

# --hints--

`pythagoreanPolygons()` має повернути `3600060866`.

```js
assert.strictEqual(pythagoreanPolygons(), 3600060866);
```

# --seed--

## --seed-contents--

```js
function pythagoreanPolygons() {

  return true;
}

pythagoreanPolygons();
```

# --solutions--

```js
// solution required
```
