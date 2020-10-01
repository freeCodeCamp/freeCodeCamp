---
id: 5eb3e4aa847216613aa81983
title: Semiprime
challengeType: 5
forumTopicId: 385318
---

## Description

<section id='description'>
Semiprime numbers are natural numbers that are products of exactly two (possibly equal) <a href="https://rosettacode.org/wiki/prime_number" target="_blank">prime numbers</a>.
<pre>1679  =  23 x 73</pre>
</section>

## Instructions

<section id='instructions'>
Write a function that returns true if a number is semiprime, or false if it is not.
</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>isSemiPrime</code> should be a function.
    testString: assert(typeof isSemiPrime === 'function');
  - text: <code>isSemiPrime(100)</code> should return a boolean.
    testString: assert(typeof isSemiPrime(100) === 'boolean');
  - text: <code>isSemiPrime(100)</code> should return <code>false</code>.
    testString: assert.equal(isSemiPrime(100), false);
  - text: <code>isSemiPrime(504)</code> should return <code>false</code>.
    testString: assert.equal(isSemiPrime(504), false);
  - text: <code>isSemiPrime(4)</code> should return <code>true</code>.
    testString: assert.equal(isSemiPrime(4), true);
  - text: <code>isSemiPrime(46)</code> should return <code>true</code>.
    testString: assert.equal(isSemiPrime(46), true);
  - text: <code>isSemiPrime(13)</code> should return <code>false</code>.
    testString: assert.equal(isSemiPrime(13), false);
  - text: <code>isSemiPrime(74)</code> should return <code>true</code>.
    testString: assert.equal(isSemiPrime(74), true);
  - text: <code>isSemiPrime(1679)</code> should return <code>true</code>.
    testString: assert.equal(isSemiPrime(1679), true);
  - text: <code>isSemiPrime(2)</code> should return <code>false</code>.
    testString: assert.equal(isSemiPrime(2), false);
  - text: <code>isSemiPrime(95)</code> should return <code>true</code>.
    testString: assert.equal(isSemiPrime(95), true);
  - text: <code>isSemiPrime(124)</code> should return <code>false</code>.
    testString: assert.equal(isSemiPrime(124), false);
```

</section>

## Challenge Seed

<section id='challengeSeed'>
<div id='js-seed'>

```js
function isSemiPrime(n) {

}
```

</div>
</section>

## Solution

<section id='solution'>

```js
function isSemiPrime(n) {
  if (n <= 3) return false;

  var ans = [];
  var done = false;
  while (!done) {
    if (n % 2 === 0) {
      ans.push(2);
      n /= 2;
      continue;
    }
    if (n % 3 === 0) {
      ans.push(3);
      n /= 3;
      continue;
    }
    if (n === 1) return ans.length == 2;
    var sr = Math.sqrt(n);
    done = true;
    // try to divide the checked number by all numbers till its square root.
    for (var i = 6; i <= sr; i += 6) {
      if (n % (i - 1) === 0) {
        // is n divisible by i-1?
        ans.push(i - 1);
        n /= i - 1;
        done = false;
        break;
      }
      if (n % (i + 1) === 0) {
        // is n divisible by i+1?
        ans.push(i + 1);
        n /= i + 1;
        done = false;
        break;
      }
    }
  }
  ans.push(n);
  return ans.length == 2;
}
```

</section>
