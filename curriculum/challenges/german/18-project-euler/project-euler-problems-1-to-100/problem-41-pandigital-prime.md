---
id: 5900f3951000cf542c50fea8
title: 'Problem 41: Pandigital prime'
challengeType: 1
forumTopicId: 302078
dashedName: problem-41-pandigital-prime
---

# --description--

Wir sagen, dass eine `n`-stellige Zahl pandigital ist, wenn sie alle Ziffern 1 bis `n` genau einmal verwendet. For example, 2143 is a 4-digit pandigital and is also prime.

Was ist die größte `n`-zählige pandigitale Primzahl, die es gibt?

# --hints--

`pandigitalPrime(4)` sollte eine Zahl zurückgeben.

```js
assert(typeof pandigitalPrime(4) === 'number');
```

`pandigitalPrime(4)` sollte 4231 zurückgeben.

```js
assert(pandigitalPrime(4) == 4231);
```

`pandigitalPrime(7)` sollte 7652413 zurückgeben.

```js
assert(pandigitalPrime(7) == 7652413);
```

# --seed--

## --seed-contents--

```js
function pandigitalPrime(n) {

  return n;
}

pandigitalPrime(7);
```

# --solutions--

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
