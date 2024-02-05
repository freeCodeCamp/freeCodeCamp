---
id: 5900f3fc1000cf542c50ff0e
title: 'Завдання 143: вивчення точки Торрічеллі у трикутниках'
challengeType: 1
forumTopicId: 301772
dashedName: problem-143-investigating-the-torricelli-point-of-a-triangle
---

# --description--

Нехай ABC буде трикутником з внутрішніми кутами меншими за 120 градусів. Нехай Х буде будь-якою точкою всередині трикутника, а $XA = p$, $XC = q$ та $XB = r$.

Ферма кинув виклик Торрічеллі, аби той знайшов таке розміщення Х, щоб p + q + r зводилось до мінімуму.

Торрічеллі зміг довести, що якщо рівносторонні трикутники AOB, BNC та AMC будуються з кожної сторони трикутника ABC, то описані навколо AOB, BNC та AMC кола будуть перетинатися в одній точці T, всередині трикутника. Крім того, він довів, що точка Т, названа точкою Торрічеллі / Ферма, мінімізує $p + q + r$. Також можна помітити, що при мінімізації суми, $AN = BM = CO = p + q + r $ і AN, BM і CO також перетинаються в точці T.

<img class="img-responsive center-block" alt="рівносторонні трикутники AOB, BNC та AMC будуються з кожної сторони трикутника ABC; з описаними навколо AOB, BNC та AMC колами, які будуть перетинатися в одній точці T, всередині трикутника" src="https://cdn.freecodecamp.org/curriculum/project-euler/investigating-the-torricelli-point-of-a-triangle.png" style="background-color: white; padding: 10px;" />

Якщо сума зведена до мінімуму і a, b, c, p, q та r є натуральними числами, ми називатимемо трикутник ABC трикутником Торрічеллі. Наприклад, $a = 399$, $b = 455$, $c = 511$ є прикладом трикутника Торрічеллі, у якого $p + q + r = 784$. Знайдіть суму всіх різних значень $p + q + r + r ≤ 120000$ для трикутників Торрічеллі.

# --hints--

`sumTorricelliTriangles()` має повернути `30758397`.

```js
assert.strictEqual(sumTorricelliTriangles(), 30758397);
```

# --seed--

## --seed-contents--

```js
function sumTorricelliTriangles() {

  return true;
}

sumTorricelliTriangles();
```

# --solutions--

```js
// solution required
```
