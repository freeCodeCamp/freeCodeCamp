---
id: 5900f4ee1000cf542c510000
title: 'Завдання 385: еліпси всередині трикутників'
challengeType: 1
forumTopicId: 302049
dashedName: problem-385-ellipses-inside-triangles
---

# --description--

Для будь-якого якого трикутника $T$ на площині можна показати, що існує унікальний еліпс з найбільшою площею, розташований повністю в $T$.

<img class="img-responsive center-block" alt="еліпс повністю всередині трикутника" src="https://cdn.freecodecamp.org/curriculum/project-euler/ellipses-inside-triangles.png" style="background-color: white; padding: 10px;" />

Для даного $n$ розглянемо такі трикутники $T$:

-   вершини $T$ мають цілі координати з абсолютною величиною $≤ n$
-   фокусами<sup>1</sup> найбільшого еліпса всередині $T$ є $(\sqrt{13}, 0)$ та $(-\sqrt{13}, 0)$.

Нехай $A(n)$ буде сумою площ усіх таких трикутників.

Наприклад, за умови $n = 8$ існує два таких трикутники. Їхніми вершинами є (-4,-3), (-4,3), (8,0) та (4,3), (4,-3), (-8,0), а площа кожного трикутника дорівнює 36. Отже, $A(8) = 36 + 36 = 72$.

Можна довести, що $A(10) = 252$, $A(100) = 34\\,632$ та $A(1000) = 3\\,529\\,008$.

Знайдіть $A(1\\,000\\,000\\,000)$.

<sup>1</sup>Фокусами еліпса є дві точки $A$ та $B$, за яких $AP + PB$ є константою для кожної точки $P$ на межі еліпса.

# --hints--

`ellipsesInsideTriangles()` має повернути `3776957309612154000`.

```js
assert.strictEqual(ellipsesInsideTriangles(), 3776957309612154000);
```

# --seed--

## --seed-contents--

```js
function ellipsesInsideTriangles() {

  return true;
}

ellipsesInsideTriangles();
```

# --solutions--

```js
// solution required
```
