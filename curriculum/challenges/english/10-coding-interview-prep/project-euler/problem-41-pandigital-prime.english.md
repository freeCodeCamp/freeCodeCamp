---
id: 5900f3951000cf542c50fea8
challengeType: 5
isHidden: false
title: 'Problem 41: Pandigital prime'
forumTopicId: 302078
---

## Description
<section id='description'>

We shall say that an <var>n</var>-digit number is pandigital if it makes use of all the digits 1 to <var>n</var> exactly once. For example, 2143 is a 4-digit pandigital and is also prime.

What is the largest `n`-length digit pandigital prime that exists?

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>pandigitalPrime(4)</code> should return a number.
    testString: assert(typeof pandigitalPrime(4) === 'number');
  - text: <code>pandigitalPrime(4)</code> should return 4231.
    testString: assert(pandigitalPrime(4) == 4231);
  - text: <code>pandigitalPrime(7)</code> should return 7652413.
    testString: assert(pandigitalPrime(7) == 7652413);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function pandigitalPrime(n) {
  // Good luck!
  return n;
}

pandigitalPrime(7);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function pandigitalPrime(n) {
  function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num !== 1;
  }

  function getPermutations(n) {
    if (n === 1) {
      permutations.push(digitsArr.join(''));
    } else {
      for (let i = 0; i < n - 1; i++) {
        getPermutations(n - 1);
        // swap(n % 2 === 0 ? i : 0, n - 1);
        if (n % 2 === 0) {
          swap(i, n - 1);
        } else {
          swap(0, n - 1);
        }
      }
      getPermutations(n - 1);
    }
  }
  function swap(x, y) {
    let temp = digitsArr[x];
    digitsArr[x] = digitsArr[y];
    digitsArr[y] = temp;
  }
  let max = 0;
  let permutations = [];
  let digitsArr;
  let pandigitalNum = '';

  for (let max = n; max > 0; max--) {
    pandigitalNum += max;
  }

  for (let i = 0; i < pandigitalNum.length; i++) {
    if (max > 0) {
      break;
    } else {
      permutations = [];
      const currMax = pandigitalNum.slice(i);
      digitsArr = currMax.split('');
      getPermutations(digitsArr.length);

      // sort permutations in descending order
      permutations.sort(function(a, b) {
        return b - a;
      });

      for (let perm of permutations) {
        const thisPerm = parseInt(perm);
        if (isPrime(thisPerm)) {
          max = thisPerm;
          break;
        }
      }
    }
  }

  return max;
}
```

</section>
