---
id: 5900f4241000cf542c50ff37
title: 'Завдання 184: трикутники, що містять початок координат'
challengeType: 1
forumTopicId: 301820
dashedName: problem-184-triangles-containing-the-origin
---

# --description--

Розглянемо $I_r$ як множину точок $(x,y)$ з цілими координатами, які знаходяться всередині круга з радіусом $r$ з центром в початку координат, тобто $x^2 + y^2 &lt; r^2$.

Якщо радіус дорівнює 2, то $I_2$ має дев’ять точок: (0,0), (1,0), (1,1), (0,1), (-1,1), (-1,0), (-1,-1), (0,-1) та (1,-1). Існує вісім трикутників, чиї вершини розташовані в $I_2$ та які містять початок координат. Два з них наведено нижче, а решту можна отримати шляхом обертання.

<img class="img-responsive center-block" alt="круг з радіусом 2 з центром в початку координат, з дев’ятьма позначеними точками й двома трикутниками: (-1,0), (0,1), (1,-1) та (-1,1), (0,-1), (1,1)" src="https://cdn.freecodecamp.org/curriculum/project-euler/triangles-containing-the-origin.gif" style="background-color: white; padding: 10px;" />

Якщо радіус дорівнює 3, то існує 360 трикутників, які містять початок координат та чиї вершини розташовані в $I_3$, а для $I_5$ це число становить 10600.

Скільки існує трикутників, які містять початок координат та чиї вершини розташовані в $I_{105}$?

# --hints--

`trianglesContainingOrigin()` має повернути `1725323624056`.

```js
assert.strictEqual(trianglesContainingOrigin(), 1725323624056);
```

# --seed--

## --seed-contents--

```js
function trianglesContainingOrigin() {

  return true;
}

trianglesContainingOrigin();
```

# --solutions--

```js
// solution required
```
