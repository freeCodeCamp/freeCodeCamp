---
id: 5900f3951000cf542c50fea8
title: '問題 41: パンデジタル素数'
challengeType: 1
forumTopicId: 302078
dashedName: problem-41-pandigital-prime
---

# --description--

1 から `n` までのすべての数字がちょうど 1 回ずつ使われている `n` 桁の数を、「パンデジタルである」と表現することにします。 例えば、2143 という 4 桁の数は 1 から 4 のパンデジタル数であり、素数でもあります。

存在する `n` 桁のパンデジタル素数のうち、最大のものを求めなさい。

# --hints--

`pandigitalPrime(4)` は数値を返す必要があります。

```js
assert(typeof pandigitalPrime(4) === 'number');
```

`pandigitalPrime(4)` は4231を返す必要があります。

```js
assert(pandigitalPrime(4) == 4231);
```

`pandigitalPrime(7)` は 7652413 を返す必要があります。

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
