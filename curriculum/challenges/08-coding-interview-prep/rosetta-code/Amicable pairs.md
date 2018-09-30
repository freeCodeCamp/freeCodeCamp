---
title: Amicable pairs
id: 5949b579404977fbaefcd737
challengeType: 5
---

## Description
<section id='description'>
Two integers $N$ and $M$ are said to be <a href="https://en.wikipedia.org/wiki/Amicable numbers" title="wp: Amicable numbers">amicable pairs</a> if $N \neq M$ and the sum of the <a href="http://rosettacode.org/wiki/Proper divisors" title="Proper divisors">proper divisors</a> of $N$ ($\mathrm{sum}(\mathrm{propDivs}(N))$) $= M$ as well as $\mathrm{sum}(\mathrm{propDivs}(M)) = N$.
Example:
1184 and 1210 are an amicable pair, with proper divisors:
 1, 2, 4, 8, 16, 32, 37, 74, 148, 296, 592  and
 1, 2, 5, 10, 11, 22, 55, 110, 121, 242, 605   respectively.
Task:
Calculate and show here the Amicable pairs below 20,000 (there are eight).
Related tasks
<a href="http://rosettacode.org/wiki/Proper divisors" title="Proper divisors">Proper divisors</a>
<a href="http://rosettacode.org/wiki/Abundant, deficient and perfect number classifications" title="Abundant, deficient and perfect number classifications">Abundant, deficient and perfect number classifications</a>
<a href="http://rosettacode.org/wiki/Aliquot sequence classifications" title="Aliquot sequence classifications">Aliquot sequence classifications</a> and its amicable classification.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: <code>amicablePairsUpTo</code> is a function.
  testString: 'assert(typeof amicablePairsUpTo === "function", "<code>amicablePairsUpTo</code> is a function.");'
- text: '<code>amicablePairsUpTo(300)</code> should return <code>[[220,284]]</code>.'
  testString: 'assert.deepEqual(amicablePairsUpTo(300), answer300, "<code>amicablePairsUpTo(300)</code> should return <code>[[220,284]]</code>.");'
- text: '<code>amicablePairsUpTo(3000)</code> should return <code>[[220,284],[1184,1210],[2620,2924]]</code>.'
  testString: 'assert.deepEqual(amicablePairsUpTo(3000), answer3000, "<code>amicablePairsUpTo(3000)</code> should return <code>[[220,284],[1184,1210],[2620,2924]]</code>.");'
- text: '<code>amicablePairsUpTo(20000)</code> should return <code>[[220,284],[1184,1210],[2620,2924],[5020,5564],[6232,6368],[10744,10856],[12285,14595],[17296,18416]]</code>.'
  testString: 'assert.deepEqual(amicablePairsUpTo(20000), answer20000, "<code>amicablePairsUpTo(20000)</code> should return <code>[[220,284],[1184,1210],[2620,2924],[5020,5564],[6232,6368],[10744,10856],[12285,14595],[17296,18416]]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function amicablePairsUpTo (maxNum) {
  // Good luck!
  return true;
}
```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>


```js
// amicablePairsUpTo :: Int -> [(Int, Int)]
function amicablePairsUpTo (maxNum) {
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
function properDivisors (n) {
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
function range (m, n, step) {
  const d = (step || 1) * (n >= m ? 1 : -1);

  return Array.from({
    length: Math.floor((n - m) / d) + 1
  }, (_, i) => m + (i * d));
}

```

</section>
