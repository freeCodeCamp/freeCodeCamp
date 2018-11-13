---
id: 5900f3761000cf542c50fe88
challengeType: 5
title: 'Problem 9: Special Pythagorean triplet'
---

## Description
<section id='description'>
A Pythagorean triplet is a set of three natural numbers, <var>a</var> < <var>b</var> < <var>c</var>, for which,
<div style='text-align: center;'><var>a</var><sup>2</sup> + <var>b</var><sup>2</sup> = <var>c</var><sup>2</sup></div>
For example, 3<sup>2</sup> + 4<sup>2</sup> = 9 + 16 = 25 = 5<sup>2</sup>.
There exists exactly one Pythagorean triplet for which <var>a</var> + <var>b</var> + <var>c</var> = 1000. Find the product <var>abc</var> such that <var>a</var> + <var>b</var> + <var>c</var> = <code>n</code>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>specialPythagoreanTriplet(1000)</code> should return 31875000.
    testString: assert.strictEqual(specialPythagoreanTriplet(1000), 31875000, '<code>specialPythagoreanTriplet(1000)</code> should return 31875000.');
  - text: <code>specialPythagoreanTriplet(24)</code> should return 480.
    testString: assert.strictEqual(specialPythagoreanTriplet(24), 480, '<code>specialPythagoreanTriplet(24)</code> should return 480.');
  - text: <code>specialPythagoreanTriplet(120)</code> should return 49920.
    testString: assert.strictEqual(specialPythagoreanTriplet(120), 49920, '<code>specialPythagoreanTriplet(120)</code> should return 49920.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function specialPythagoreanTriplet(n) {
 let sumOfabc = n;
 // Good luck!
 return true;
}

specialPythagoreanTriplet(1000);
```

</div>



</section>

## Solution
<section id='solution'>


```js
const specialPythagoreanTriplet = (n)=>{
 let sumOfabc = n;
 let a,b,c;
 for(a = 1; a<=sumOfabc/3; a++){
 for(b = a+1; b<=sumOfabc/2; b++){
 c = Math.sqrt(a*a+b*b);
 if((a+b+c) == sumOfabc){
 return a*b*c;
 }
 }
 }
}
```

</section>
