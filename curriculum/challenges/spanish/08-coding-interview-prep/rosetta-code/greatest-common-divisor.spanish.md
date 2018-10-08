---
title: Greatest common divisor
id: 5a23c84252665b21eecc7e82
localeTitle: 5a23c84252665b21eecc7e82
challengeType: 5
---

## Description
<section id='description'> 
Escribe una función que devuelva el mayor divisor común de dos enteros. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>gcd</code> debería ser una función.
    testString: 'assert(typeof gcd=="function","<code>gcd</code> should be a function.");'
  - text: <code>gcd(24,36)</code> debe devolver un número.
    testString: 'assert(typeof gcd(24,36)=="number","<code>gcd(24,36)</code> should return a number.");'
  - text: <code>gcd(24,36)</code> debe devolver <code>12</code> .
    testString: 'assert.equal(gcd(24,36),12,"<code>gcd(24,36)</code> should return <code>12</code>.");'
  - text: <code>gcd(30,48)</code> debe devolver <code>6</code> .
    testString: 'assert.equal(gcd(30,48),6,"<code>gcd(30,48)</code> should return <code>6</code>.");'
  - text: <code>gcd(10,15)</code> debe devolver <code>5</code> .
    testString: 'assert.equal(gcd(10,15),5,"<code>gcd(10,15)</code> should return <code>5</code>.");'
  - text: <code>gcd(100,25)</code> debe devolver <code>25</code> .
    testString: 'assert.equal(gcd(100,25),25,"<code>gcd(100,25)</code> should return <code>25</code>.");'
  - text: <code>gcd(13,250)</code> debe devolver <code>1</code> .
    testString: 'assert.equal(gcd(13,250),1,"<code>gcd(13,250)</code> should return <code>1</code>.");'
  - text: <code>gcd(1300,250)</code> debe devolver <code>50</code> .
    testString: 'assert.equal(gcd(1300,250),50,"<code>gcd(1300,250)</code> should return <code>50</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function gcd(a, b) {
  // Good luck!
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
