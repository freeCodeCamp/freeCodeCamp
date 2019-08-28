---
title: Amicable pairs
id: 5949b579404977fbaefcd737
challengeType: 5
forumTopicId: 302225
localeTitle: Дружественные пары
---

## Description
<section id='description'>
Два целых числа $ N $ и $ M $ называются <a href="https://en.wikipedia.org/wiki/Amicable numbers" title="wp: дружественные номера">дружественными парами,</a> если $ N \ neq M $ и сумма <a href="http://rosettacode.org/wiki/Proper divisors" title="Собственные делители">собственных делителей</a> $ N $ ($ \ mathrm {sum} (\ mathrm {propDivs} (N)) $) $ = M $, а также $ \ mathrm {sum} (\ mathrm {propDivs} (M)) = N $. Пример: 1184 и 1210 являются дружной парой с соответствующими делителями: 1, 2, 4, 8, 16, 32, 37, 74, 148, 296, 592 и 1, 2, 5, 10, 11, 22, 55, 110, 121, 242, 605 соответственно. Задача: рассчитать и показать здесь дружественные пары ниже 20 000 (их восемь). Связанные задачи <a href="http://rosettacode.org/wiki/Proper divisors" title="Собственные делители">Правильные делители</a> <a href="http://rosettacode.org/wiki/Abundant, deficient and perfect number classifications" title="Обильные, неполные и совершенные классификации номеров">Обильные, неполные и совершенные классификации чисел Классификация</a> <a href="http://rosettacode.org/wiki/Aliquot sequence classifications" title="Классификация последовательности аликвот">последовательности аликвот</a> и ее дружественная классификация.
</section>

## Instructions
<section id='instructions'>
Calculate and show here the Amicable pairs below 20,000 (there are eight).
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>amicablePairsUpTo</code> is a function.
    testString: assert(typeof amicablePairsUpTo === 'function');
  - text: <code>amicablePairsUpTo(300)</code> should return <code>[[220,284]]</code>.
    testString: assert.deepEqual(amicablePairsUpTo(300), answer300);
  - text: <code>amicablePairsUpTo(3000)</code> should return <code>[[220,284],[1184,1210],[2620,2924]]</code>.
    testString: assert.deepEqual(amicablePairsUpTo(3000), answer3000);
  - text: <code>amicablePairsUpTo(20000)</code> should return <code>[[220,284],[1184,1210],[2620,2924],[5020,5564],[6232,6368],[10744,10856],[12285,14595],[17296,18416]]</code>.
    testString: assert.deepEqual(amicablePairsUpTo(20000), answer20000);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function amicablePairsUpTo(maxNum) {
  // Good luck!
  return true;
}

```

</div>

### After Tests
<div id='js-teardown'>

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

</div>

</section>

## Solution
<section id='solution'>

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

</section>
