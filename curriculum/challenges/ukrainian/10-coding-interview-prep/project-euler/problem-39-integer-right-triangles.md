---
id: 5900f3931000cf542c50fea6
title: 'Завдання 39: Цілочисельні прямокутні трикутники'
challengeType: 1
forumTopicId: 302054
dashedName: problem-39-integer-right-triangles
---

# --description--

Якщо `p` — це периметр прямокутного трикутника з цілочисельними довжинами сторін {a,b,c}, то для p = 120 є три рішення.

{20,48,52}, {24,45,51}, {30,40,50}

При якому значенні `p`≤`n` кількість рішень буде максимальною?

# --hints--

`intRightTriangles(500)` має повернути число.

```js
assert(typeof intRightTriangles(500) === 'number');
```

`intRightTriangles(500)` має повернути число 420.

```js
assert(intRightTriangles(500) == 420);
```

`intRightTriangles(800)` має повернути число 720.

```js
assert(intRightTriangles(800) == 720);
```

`intRightTriangles(900)` має повернути число 840.

```js
assert(intRightTriangles(900) == 840);
```

`intRightTriangles(1000)` має повернути число 840.

```js
assert(intRightTriangles(1000) == 840);
```

# --seed--

## --seed-contents--

```js
function intRightTriangles(n) {

  return n;
}

intRightTriangles(500);
```

# --solutions--

```js
// Original idea for this solution came from
// https://www.xarg.org/puzzle/project-euler/problem-39/

function intRightTriangles(n) {
  // store the number of triangles with a given perimeter
  let triangles = {};
  // a is the shortest side
  for (let a = 3; a < n / 3; a++)
  // o is the opposite side and is at least as long as a
    for (let o = a; o < n / 2; o++) {
      let h = Math.sqrt(a * a + o * o); // hypotenuse
      let p = a + o + h;  // perimeter
      if ((h % 1) === 0 && p <= n) {
        triangles[p] = (triangles[p] || 0) + 1;
      }
    }

  let max = 0, maxp = null;
  for (let p in triangles) {
    if (max < triangles[p]) {
      max = triangles[p];
      maxp = parseInt(p);
    }
  }
  return maxp;
}
```
