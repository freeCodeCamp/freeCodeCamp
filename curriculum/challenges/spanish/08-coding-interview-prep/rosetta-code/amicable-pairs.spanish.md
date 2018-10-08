---
title: Amicable pairs
id: 5949b579404977fbaefcd737
localeTitle: 5949b579404977fbaefcd737
challengeType: 5
---

## Description
<section id='description'> 
Se dice que dos enteros $ N $ y $ M $ son <a href="https://en.wikipedia.org/wiki/Amicable numbers" title="wp: números amistosos">pares amigables</a> si $ N \ neq M $ y la suma de los <a href="http://rosettacode.org/wiki/Proper divisors" title="Divisores adecuados">divisores apropiados</a> de $ N $ ($ \ mathrm {suma} (\ mathrm {propDivs} (N) ) $) $ = M $ así como $ \ mathrm {suma} (\ mathrm {propDivs} (M)) = N $. 
Ejemplo: 
1184 y 1210 son un par amigable, con divisores apropiados: 
1, 2, 4, 8, 16, 32, 37, 74, 148, 296, 592 y 
1, 2, 5, 10, 11, 22, 55, 110, 121, 242, 605 respectivamente. 
Tarea: 
Calcula y muestra aquí los pares de amigos por debajo de 20,000 (hay ocho). 
Tareas relacionadas 
<a href="http://rosettacode.org/wiki/Proper divisors" title="Divisores adecuados">Divisores apropiados</a> 
<a href="http://rosettacode.org/wiki/Abundant, deficient and perfect number classifications" title="Numerosas, deficientes y perfectas clasificaciones numéricas.">Clasificaciones numéricas abundantes, deficientes y perfectas</a> 
<a href="http://rosettacode.org/wiki/Aliquot sequence classifications" title="Clasificaciones de secuencias alícuotas">Clasificaciones de secuencias de alícuotas</a> y su clasificación amistosa. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>amicablePairsUpTo</code> es una función.
    testString: 'assert(typeof amicablePairsUpTo === "function", "<code>amicablePairsUpTo</code> is a function.");'
  - text: &#39; <code>amicablePairsUpTo(300)</code> debe devolver <code>[[220,284]]</code> .&#39;
    testString: 'assert.deepEqual(amicablePairsUpTo(300), answer300, "<code>amicablePairsUpTo(300)</code> should return <code>[[220,284]]</code>.");'
  - text: &#39; <code>amicablePairsUpTo(3000)</code> debe devolver <code>[[220,284],[1184,1210],[2620,2924]]</code> .&#39;
    testString: 'assert.deepEqual(amicablePairsUpTo(3000), answer3000, "<code>amicablePairsUpTo(3000)</code> should return <code>[[220,284],[1184,1210],[2620,2924]]</code>.");'
  - text: &#39; <code>amicablePairsUpTo(20000)</code> debe devolver <code>[[220,284],[1184,1210],[2620,2924],[5020,5564],[6232,6368],[10744,10856],[12285,14595],[17296,18416]]</code> . &#39;
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
