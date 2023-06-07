---
id: 5900f3951000cf542c50fea8
title: 'Problema 41: Primi pandigitali'
challengeType: 1
forumTopicId: 302078
dashedName: problem-41-pandigital-prime
---

# --description--

Diremo che un numero di cifre `n` è pandigitale se utilizza tutte le cifre da 1 a `n` esattamente una volta. Ad esempio, 2143 è un pandigitale a 4 cifre ed è anche primo.

Qual è il più grande pandigitale primo a `n` cifre esistente?

# --hints--

`pandigitalPrime(4)` dovrebbe restituire un numero.

```js
assert(typeof pandigitalPrime(4) === 'number');
```

`pandigitalPrime(4)` dovrebbe restituire 4231.

```js
assert(pandigitalPrime(4) == 4231);
```

`pandigitalPrime(7)` dovrebbe restituire 7652413.

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
