---
id: 5900f4201000cf542c50ff33
challengeType: 5
isHidden: false
title: 'Problem 180: Rational zeros of a function of three variables'
forumTopicId: 301816
---

## Description
<section id='description'>
For any integer n, consider the three functions
f1,n(x,y,z) = xn+1 + yn+1 − zn+1f2,n(x,y,z) = (xy + yz + zx)*(xn-1 + yn-1 − zn-1)f3,n(x,y,z) = xyz*(xn-2 + yn-2 − zn-2)
and their combination
fn(x,y,z) = f1,n(x,y,z) + f2,n(x,y,z) − f3,n(x,y,z)
We call (x,y,z) a golden triple of order k if x, y, and z are all rational numbers of the form a / b with
0 < a < b ≤ k and there is (at least) one integer n, so that fn(x,y,z) = 0.
Let s(x,y,z) = x + y + z.
Let t = u / v be the sum of all distinct s(x,y,z) for all golden triples (x,y,z) of order 35. All the s(x,y,z) and t  must be in reduced form.
Find u + v.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler180()</code> should return 285196020571078980.
    testString: assert.strictEqual(euler180(), 285196020571078980);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler180() {
  // Good luck!
  return true;
}

euler180();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
