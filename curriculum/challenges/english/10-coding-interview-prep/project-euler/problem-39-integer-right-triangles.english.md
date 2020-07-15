---
id: 5900f3931000cf542c50fea6
challengeType: 5
isHidden: false
title: 'Problem 39: Integer right triangles'
forumTopicId: 302054
---

## Description
<section id='description'>

If <var>p</var> is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.

{20,48,52}, {24,45,51}, {30,40,50}

For which value of <var>p</var> ≤ `n`, is the number of solutions maximized?

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>intRightTriangles(500)</code> should return a number.
    testString: assert(typeof intRightTriangles(500) === 'number');
  - text: <code>intRightTriangles(500)</code> should return 420.
    testString: assert(intRightTriangles(500) == 420);
  - text: <code>intRightTriangles(800)</code> should return 720.
    testString: assert(intRightTriangles(800) == 720);
  - text: <code>intRightTriangles(900)</code> should return 840.
    testString: assert(intRightTriangles(900) == 840);
  - text: <code>intRightTriangles(1000)</code> should return 840.
    testString: assert(intRightTriangles(1000) == 840);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function intRightTriangles(n) {
  // Good luck!
  return n;
}

intRightTriangles(500);
```

</div>



</section>

## Solution
<section id='solution'>

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

</section>
