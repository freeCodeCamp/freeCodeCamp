---
title: Greatest common divisor
id: 5a23c84252665b21eecc7e82
challengeType: 5
forumTopicId: 302277
---

## Description
<section id='description'>
Write a function that returns the greatest common divisor of two integers.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>gcd</code> should be a function.
    testString: assert(typeof gcd=='function');
  - text: <code>gcd(24,36)</code> should return a number.
    testString: assert(typeof gcd(24,36)=='number');
  - text: <code>gcd(24,36)</code> should return <code>12</code>.
    testString: assert.equal(gcd(24,36),12);
  - text: <code>gcd(30,48)</code> should return <code>6</code>.
    testString: assert.equal(gcd(30,48),6);
  - text: <code>gcd(10,15)</code> should return <code>5</code>.
    testString: assert.equal(gcd(10,15),5);
  - text: <code>gcd(100,25)</code> should return <code>25</code>.
    testString: assert.equal(gcd(100,25),25);
  - text: <code>gcd(13,250)</code> should return <code>1</code>.
    testString: assert.equal(gcd(13,250),1);
  - text: <code>gcd(1300,250)</code> should return <code>50</code>.
    testString: assert.equal(gcd(1300,250),50);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function gcd(a, b) {

}
```

</div>



</section>

## Solution
<section id='solution'>


```js
function gcd(a, b) {
  return b==0 ? Math.abs(a):gcd(b, a % b);
}

```

</section>
