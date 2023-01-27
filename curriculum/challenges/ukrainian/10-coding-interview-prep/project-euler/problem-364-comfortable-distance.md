---
id: 5900f4d91000cf542c50ffea
title: 'Задача 364: Комфортна відстань'
challengeType: 1
forumTopicId: 302025
dashedName: problem-364-comfortable-distance
---

# --description--

Є $N$ місць поспіль. $N$ людей приходять один за одним та займають місця відповідно до таких правил:

1. Якщо є будь-яке місце, сусіднє місце (місця) якого не зайняте, займіть таке місце.
2. Якщо такого місця немає і є місце, для якого зайнято лише одне сусіднє місце, займіть таке місце.
3. В іншому випадку займіть одне з наявних місць.

Нехай $T(N)$ буде кількістю можливостей, що $N$ місць зайняті $N$ людьми з даними правилами. Наступний малюнок показує $T(4) = 8$.

<img class="img-responsive center-block" alt="вісім способів для N місць, зайняті N людьми" src="https://cdn.freecodecamp.org/curriculum/project-euler/comfortable-distance.gif" style="background-color: white; padding: 10px;" />

Можна перевірити, що $T(10) = 61\\,632$ та $T(1\\,000)\bmod 100\\,000\\,007 = 47\\,255\\,094$.

Знайдіть $T(100\\,000\\,000)\bmod 1\\,000\\,007$.

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
