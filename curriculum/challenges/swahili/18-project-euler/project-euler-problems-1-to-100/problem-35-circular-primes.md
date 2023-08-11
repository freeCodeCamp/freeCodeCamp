---
id: 5900f38f1000cf542c50fea2
title: 'Problem 35: Circular primes'
challengeType: 1
forumTopicId: 302009
dashedName: problem-35-circular-primes
---

# --description--

The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

How many circular primes are there below `n`, whereas 100 ≤ `n` ≤ 1000000?

**Note:**

Circular primes individual rotation can exceed `n`.

# --hints--

`circularPrimes(100)` should return a number.

```js
assert(typeof circularPrimes(100) === 'number');
```

`circularPrimes(100)` should return 13.

```js
assert(circularPrimes(100) == 13);
```

`circularPrimes(100000)` should return 43.

```js
assert(circularPrimes(100000) == 43);
```

`circularPrimes(250000)` should return 45.

```js
assert(circularPrimes(250000) == 45);
```

`circularPrimes(500000)` should return 49.

```js
assert(circularPrimes(500000) == 49);
```

`circularPrimes(750000)` should return 49.

```js
assert(circularPrimes(750000) == 49);
```

`circularPrimes(1000000)` should return 55.

```js
assert(circularPrimes(1000000) == 55);
```

# --seed--

## --seed-contents--

```js
function circularPrimes(n) {

  return n;
}

circularPrimes(1000000);
```

# --solutions--

```js
function rotate(n) {
  if (n.length == 1) return n;
  return n.slice(1) + n[0];
}

function circularPrimes(n) {
  // Nearest n < 10^k
  const bound = 10 ** Math.ceil(Math.log10(n));
  const primes = [0, 0, 2];
  let count = 0;

  // Making primes array
  for (let i = 4; i <= bound; i += 2) {
    primes.push(i - 1);
    primes.push(0);
  }

  // Getting upperbound
  const upperBound = Math.ceil(Math.sqrt(bound));

  // Setting other non-prime numbers to 0
  for (let i = 3; i < upperBound; i += 2) {
    if (primes[i]) {
      for (let j = i * i; j < bound; j += i) {
        primes[j] = 0;
      }
    }
  }

  // Iterating through the array
  for (let i = 2; i < n; i++) {
    if (primes[i]) {
      let curr = String(primes[i]);
      let tmp = 1; // tmp variable to hold the no of rotations
      for (let x = rotate(curr); x != curr; x = rotate(x)) {
        if (x > n && primes[x]) {
          continue;
        }
        else if (!primes[x]) {
          // If the rotated value is 0 then it isn't a circular prime, break the loop
          tmp = 0;
          break;
        }
        tmp++;
        primes[x] = 0;
      }
      count += tmp;
    }
  }
  return count;
}
```
