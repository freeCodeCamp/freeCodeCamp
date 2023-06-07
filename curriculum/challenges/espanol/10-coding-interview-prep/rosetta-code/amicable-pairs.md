---
id: 5949b579404977fbaefcd737
title: Pares amigables
challengeType: 1
forumTopicId: 302225
dashedName: amicable-pairs
---

# --description--

Se dice que dos enteros $N$ y $M$ son pares amigables si $N \\neq M$ y la suma de los divisores apropiados de $N$ ($\\mathrm{sum}(\\mathrm{propDivs}(N))$) $= M$, así como $\\mathrm{sum}(\\mathrm{propDivs}(M)) = N$.

**Por ejemplo:**

**1184** y **1210** son un par amigable, con los divisores adecuados:

<ul>
  <li>1, 2, 4, 8, 16, 32, 37, 74, 148, 296, 592 y</li>
  <li>1, 2, 5, 10, 11, 22, 55, 110, 121, 242, 605 respectivamente.</li>
</ul>

La suma de los divisores para el primer valor, **1184**, es **1210** y la suma de los divisores para el segundo valor, **1210**, es **1184**.

# --instructions--

Calculate and show here the Amicable pairs below 20,000 (there are eight).

# --hints--

`amicablePairsUpTo` should be a function.

```js
assert(typeof amicablePairsUpTo === 'function');
```

`amicablePairsUpTo(300)` should return `[[220,284]]`.

```js
assert.deepEqual(amicablePairsUpTo(300), answer300);
```

`amicablePairsUpTo(3000)` should return `[[220,284],[1184,1210],[2620,2924]]`.

```js
assert.deepEqual(amicablePairsUpTo(3000), answer3000);
```

`amicablePairsUpTo(20000)` should return `[[220,284],[1184,1210],[2620,2924],[5020,5564],[6232,6368],[10744,10856],[12285,14595],[17296,18416]]`.

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
