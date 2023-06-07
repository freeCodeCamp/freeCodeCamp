---
id: 5900f4b91000cf542c50ffcb
title: 'Задача 332: сферичні трикутники'
challengeType: 1
forumTopicId: 301990
dashedName: problem-332-spherical-triangles
---

# --description--

Сферичний трикутник - це фігура, утворена на поверхні сфери трьома великими круговими дугами, що попарно перетинаються у трьох вершинах.

<img class="img-responsive center-block" alt="сферичний трикутник, утворений на поверхні сфери" src="https://cdn.freecodecamp.org/curriculum/project-euler/spherical-triangles.jpg" style="background-color: white; padding: 10px;" />

Нехай $C(r)$ буде сферою з центром (0,0,0) і радіусом $r$.

Нехай $Z(r)$ буде набором точок на поверхні $C(r)$ з цілими координатами.

Нехай $T(r)$ буде набором сферичних трикутників з вершинами в $Z(r)$. Вироджені сферичні трикутники, утворені трьома точками на одній великій дузі, є <u>не</u>включені до $T(r)$.

Нехай $A(r)$ буде площею найменшого сферичного трикутника в $T(r)$.

Наприклад $A(14)$ є 3.294040, округлений до шести десяткових знаків.

Знайдіть$\displaystyle \sum_{r = 1}^{50} A(r)$. Округліть відповідь до шести десяткових знаків.

# --hints--

`sphericalTriangles()`повинен повертатися як `2717.751525`.

```js
assert.strictEqual(sphericalTriangles(), 2717.751525);
```

# --seed--

## --seed-contents--

```js
function sphericalTriangles() {

  return true;
}

sphericalTriangles();
```

# --solutions--

```js
// solution required
```
