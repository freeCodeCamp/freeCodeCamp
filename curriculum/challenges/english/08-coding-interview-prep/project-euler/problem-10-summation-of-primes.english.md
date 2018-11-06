---
id: 5900f3761000cf542c50fe89
challengeType: 5
title: 'Problem 10: Summation of primes'
---

## Description
<section id='description'>
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below n.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>primeSummation(17)</code> should return 41.
    testString: assert.strictEqual(primeSummation(17), 41, '<code>primeSummation(17)</code> should return 41.');
  - text: <code>primeSummation(2001)</code> should return 277050.
    testString: assert.strictEqual(primeSummation(2001), 277050, '<code>primeSummation(2001)</code> should return 277050.');
  - text: <code>primeSummation(140759)</code> should return 873608362.
    testString: assert.strictEqual(primeSummation(140759), 873608362, '<code>primeSummation(140759)</code> should return 873608362.');
  - text: <code>primeSummation(2000000)</code> should return 142913828922.
    testString: assert.strictEqual(primeSummation(2000000), 142913828922, '<code>primeSummation(2000000)</code> should return 142913828922.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function primeSummation(n) {
  // Good luck!
  return true;
}

primeSummation(2000000);
```

</div>

</section>

## Solution
<section id='solution'>

```js
//noprotect
function primeSummation(n) {
  if (n < 3) { return 0 };
  let nums = [0, 0, 2];
  for (let i = 3; i < n; i += 2){
    nums.push(i);
    nums.push(0);
  }
  let sum = 2;
  for (let i = 3; i < n; i += 2){
    if (nums[i] !== 0){
      sum += nums[i];
      for (let j = i*i; j < n; j += i){
        nums[j] = 0;
      }
    }
  }
  return sum;
}
```

</section>
