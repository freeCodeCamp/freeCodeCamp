---
id: 5900f4d91000cf542c50ffea
title: 'Завдання 364: комфортна відстань'
challengeType: 1
forumTopicId: 302025
dashedName: problem-364-comfortable-distance
---

# --description--

Ряд складається з $N$ місць. Приходить $N$ людей та вони починають займати місця згідно з такими правилами:

1. Якщо є будь-яке місце, сусідні місця якого не зайняті, це місце займають.
2. Якщо такого місця немає, але є місце, для якого зайнято лише одне сусіднє, це місце займають.
3. В іншому випадку займають одне з доступних місць.

Нехай $T(N)$ буде кількістю можливостей для $N$ людей зайняти $N$ місць за даними правилами. Наступний малюнок показує $T(4) = 8$.

<img class="img-responsive center-block" alt="вісім способів зайняти N місць N людьми" src="https://cdn.freecodecamp.org/curriculum/project-euler/comfortable-distance.gif" style="background-color: white; padding: 10px;" />

Можна довести, що $T(10) = 61\\,632$ та $T(1\\,000)\bmod 100\\,000\\,007 = 47\\,255\\,094$.

Знайдіть $T(1\\,000\\,000)\bmod 100\\,000\\,007$.

# --hints--

`comfortableDistance()` має повернути `44855254`.

```js
assert.strictEqual(comfortableDistance(), 44855254);
```

# --seed--

## --seed-contents--

```js
function comfortableDistance() {

  return true;
}

comfortableDistance();
```

# --solutions--

```js
// solution required
```
