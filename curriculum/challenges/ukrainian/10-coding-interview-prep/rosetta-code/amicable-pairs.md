---
id: 5949b579404977fbaefcd737
title: Дружні числа
challengeType: 1
forumTopicId: 302225
dashedName: amicable-pairs
---

# --description--

Two integers $N$ and $M$ are said to be amicable pairs if $N \\neq M$ and the sum of the proper divisors of $N$ ($\\mathrm{sum}(\\mathrm{propDivs}(N))$) $= M$ as well as $\\mathrm{sum}(\\mathrm{propDivs}(M)) = N$.

**Приклад:**

**1184** та **1210** - це дружні числа з власними дільниками:

<ul>
  <li>1, 2, 4, 8, 16, 32, 37, 74, 148, 296, 592 and</li>
  <li>1, 2, 5, 10, 11, 22, 55, 110, 121, 242, 605 respectively.</li>
</ul>

The sum of the divisors for the first value, **1184**, is **1210** and the sum of the divisors for the second value, **1210**, is **1184**.

# --instructions--

Calculate and show here the Amicable pairs below 20,000 (there are eight).

# --hints--

`amicablePairsUpTo` має бути функцією.

```js
assert(typeof amicablePairsUpTo === 'function');
```

`amicablePairsUpTo(300)` повинен повертати `[[220,284]]`.

```js
assert.deepEqual(amicablePairsUpTo(300), answer300);
```

`amicablePairsUpTo(3000)` повинен повертати `[[220,284],[1184,1210],[2620,2924]]`.

```js
assert.deepEqual(amicablePairsUpTo(3000), answer3000);
```

`amicablePairsUpTo(20000)` повинен повертати `[[220,284],[1184,1210],[2620,2924],[5020,5564],[6232,6368],[10744,10856],[12285,14595],[17296,18416]]`.

```js
assert.deepEqual(amicablePairsUpTo(20000), answer20000);
```

# --seed--

## --after-user-code--

```js
const answer300 = [[220, 284]];
const answer3000 = [
  [220, 284],
  [1184, 1210],
  [2620, 2924]
];
const answer20000 = [
  [220, 284],
  [1184, 1210],
  [2620, 2924],
  [5020, 5564],
  [6232, 6368],
  [10744, 10856],
  [12285, 14595],
  [17296, 18416]
];
```

## --seed-contents--

```js
function amicablePairsUpTo(maxNum) {

  return true;
}
```

# --solutions--

```js
// amicablePairsUpTo :: Int -> [(Int, Int)]
function amicablePairsUpTo(maxNum) {
  return range(1, maxNum)
    .map(x => properDivisors(x)
      .reduce((a, b) => a + b, 0))
    .reduce((a, m, i, lst) => {
      const n = i + 1;

      return (m > n) && lst[m - 1] === n ?
        a.concat([
          [n, m]
        ]) : a;
    }, []);
}

// properDivisors :: Int -> [Int]
function properDivisors(n) {
  if (n < 2) return [];

  const rRoot = Math.sqrt(n);
  const intRoot = Math.floor(rRoot);
  const blnPerfectSquare = rRoot === intRoot;
  const lows = range(1, intRoot)
  .filter(x => (n % x) === 0);

  return lows.concat(lows.slice(1)
    .map(x => n / x)
    .reverse()
    .slice(blnPerfectSquare | 0));
}

// Int -> Int -> Maybe Int -> [Int]
function range(m, n, step) {
  const d = (step || 1) * (n >= m ? 1 : -1);

  return Array.from({
    length: Math.floor((n - m) / d) + 1
  }, (_, i) => m + (i * d));
}
```
