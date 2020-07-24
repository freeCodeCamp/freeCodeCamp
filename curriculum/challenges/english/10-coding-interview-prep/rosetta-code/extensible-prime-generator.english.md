---
title: Extensible prime generator
id: 598ee8b91b410510ae82efef
challengeType: 5
isHidden: false
forumTopicId: 302262
---

## Description
<section id='description'>
Write a generator of prime numbers, in order, that will automatically adjust to accommodate the generation of any reasonably high prime.
The generator should be able to:
<ul>
  <li>Show the first <code>n</code> prime numbers</li>
  <li>Show the prime numbers in a range</li>
  <li>Show the number of primes in a range</li>
  <li>Show the <code>n<sup>th</sup></code> prime number</li>
</ul>
The function should have two parameters. The first will receive <code>n</code> or the range as an array. The second will receive a boolean, that specifies if the function returns the prime numbers as an array or a single number(the number of primes in the range or the <code>n<sup>th</sup></code> prime). According to the parameters the function should return an array.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>primeGenerator</code> should be a function.
    testString: assert(typeof primeGenerator === 'function');
  - text: <code>primeGenerator(20, true)</code> should return <code>[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71]</code>.
    testString: assert.deepEqual(primeGenerator(20, true), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71]);
  - text: <code>primeGenerator([100, 150], true)</code> should return <code>[101, 103, 107, 109, 113, 127, 131, 137, 139, 149]</code>.
    testString: assert.deepEqual(primeGenerator([100, 150], true), [101, 103, 107, 109, 113, 127, 131, 137, 139, 149]);
  - text: <code>primeGenerator([7700, 8000], false)</code> should return <code>30</code>.
    testString: assert.equal(primeGenerator([7700, 8000], false), 30);
  - text: <code>primeGenerator(10000, false)</code> should return <code>104729</code>.
    testString: assert.equal(primeGenerator(10000, false), 104729);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function primeGenerator(num, showPrimes) {
  // Good luck!
}
```

</div>



</section>

## Solution
<section id='solution'>


```js
// noprotect
function primeGenerator(num, showPrimes) {
  let i,
    arr = [];

  function isPrime(num) {
    // try primes <= 16
    if (num <= 16) { return (
      num == 2 || num == 3 || num == 5 || num == 7 || num == 11 || num == 13
    ); }
    // cull multiples of 2, 3, 5 or 7
    if (num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0)
      { return false; }
    // cull square numbers ending in 1, 3, 7 or 9
    for (let i = 10; i * i <= num; i += 10) {
      if (num % (i + 1) == 0) return false;
      if (num % (i + 3) == 0) return false;
      if (num % (i + 7) == 0) return false;
      if (num % (i + 9) == 0) return false;
    }
    return true;
  }

  if (typeof num === 'number') {
    for (i = 0; arr.length < num; i++) if (isPrime(i)) arr.push(i);
    // first x primes
    if (showPrimes) return arr;
    // xth prime
    return arr.pop();
  }

  if (Array.isArray(num)) {
    for (i = num[0]; i <= num[1]; i++) if (isPrime(i)) arr.push(i);
    // primes between x .. y
    if (showPrimes) return arr;
    // number of primes between x .. y
    return arr.length;
  }
}

```

</section>
