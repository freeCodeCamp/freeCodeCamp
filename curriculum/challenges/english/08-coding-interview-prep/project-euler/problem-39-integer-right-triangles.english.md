---
id: 5900f3931000cf542c50fea6
challengeType: 5
title: 'Problem 39: Integer right triangles'
forumTopicId: 302054
---

## Description
<section id='description'>
If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.
{20,48,52}, {24,45,51}, {30,40,50}
For which value of p ≤ n, is the number of solutions maximised?
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
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

console.log(intRightTriangles(500)); // 420
```

</div>



</section>

## Solution
<section id='solution'>

```js
function intRightTriangles(n) {
  let i = 0;
  let count = 0;
  let pMax = 12;
  for(let p = 12; p <= n; p++){
    let pCount = 0;
    // shortest side: a, starting from a 3,4,5 triangle
    for(let a = 3; a <= p/2; a++){
      // hypotenuse, h, after substituting for o = p - h -a 
      // in h*h = a*a + o*o;
      let h = 1/2 * (-Math.sqrt(a*a + 2*a*p - p*p) - a + p)
      // is integer:
      if ((h | 0) === h) {
        pCount++;   
      }
    }
    if(pCount > count) {
      pMax = p;
      count = pCount;
    }
  }
  return pMax;
}

```

</section>
