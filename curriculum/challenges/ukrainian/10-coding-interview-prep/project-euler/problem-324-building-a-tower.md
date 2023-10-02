---
id: 5900f4b11000cf542c50ffc3
title: 'Завдання 324: Побудова вежі'
challengeType: 1
forumTopicId: 301981
dashedName: problem-324-building-a-tower
---

# --description--

Нехай $f(n)$ представляє кількість способів, як можна заповнити вежу $3×3×n$ блоками $2×1×1$. Дозволяється обертати блоки будь-яким чином; однак повороти, віддзеркалення самої вежі тощо вважаються різними.

Наприклад, (з $q = 100\\,000\\,007$):

$$\begin{align}   & f(2) = 229, \\\\
  & f(4) = 117\\,805, \\\\   & f(10)\bmod q = 96\\,149\\,360, \\\\
  & f({10}^3)\bmod q = 24\\,806\\,056, \\\\ & f({10}^6)\bmod q = 30\\,808\\,124. \end{align}$$

Знайдіть $f({10}^{10000})\bmod 100\\,000\\,007$.

# --hints--

`buildingTower()` має повернути `96972774`.

```js
assert.strictEqual(buildingTower(), 96972774);
```

# --seed--

## --seed-contents--

```js
function buildingTower() {

  return true;
}

buildingTower();
```

# --solutions--

```js
// solution required
```
