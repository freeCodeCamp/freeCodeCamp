---
id: 5900f4241000cf542c50ff37
title: 'Завдання 184: трикутники, що містять початок координат'
challengeType: 1
forumTopicId: 301820
dashedName: problem-184-triangles-containing-the-origin
---

# --description--

Розглянемо множину $I_r$ точок $(x,y)$ з цілочисленими координатами всередині кола з радіусом $r$ з центром у початку координат, тобто: $x^2 + y^2 &lt; r^2$.

Якщо радіус дорівнює 2, тоді $I_2$ містить точки (0,0), (1,0), (1,1), (0,1), (-1,1), (-1,0), (-1,-1), (0,-1) і (1,-1). Існує вісім трикутників з трьома вершинами в $I_2$, які всередині містять початок координат. Два з них наведено нижче, а решта отримується завдяки їх повертанню.

<img class="img-responsive center-block" alt="радіус кола, який дорівнює 2, із центром у початку координат, з дев'ятьма позначеними точками й двома трикутниками - (-1,0), (0,1), (1,-1) і (-1,1), (0,-1), (1,1)" src="https://cdn.freecodecamp.org/curriculum/project-euler/triangles-containing-the-origin.gif" style="background-color: white; padding: 10px;" />

Якщо радіус дорівнює 3, існує 360 трикутників, які містять початок координат всередині й для яких всі вершини в $I_3$, а для $I_5$ їх кількість дорівнює 10600.

Скільки існує трикутників, які містять початок координат всередині й для яких всі вершини в $I_{105}$?

# --hints--

`trianglesContainingOrigin()` має повертати `1725323624056`.

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
