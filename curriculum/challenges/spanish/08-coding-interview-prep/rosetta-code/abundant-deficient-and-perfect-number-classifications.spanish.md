---
title: 'Abundant, deficient and perfect number classifications'
id: 594810f028c0303b75339acd
localeTitle: 594810f028c0303b75339acd
challengeType: 5
---

## Description
<section id='description'>
<p> Estos definen tres clasificaciones de enteros positivos basados ​​en sus <a href="http://rosettacode.org/wiki/Proper divisors" title="Divisores adecuados">divisores apropiados</a> . </p>
<p> Sea $ P (n) $ la suma de los divisores apropiados de n, donde los divisores apropiados son todos enteros positivos n distintos de n en sí. </p>
<p> Si <code>P(n) &lt; n</code> entonces n se clasifica como &quot;deficiente&quot; </p>
<p> Si <code>P(n) === n</code> , n se clasifica como &quot;perfecto&quot; </p>
<p> Si <code>P(n) &gt; n</code> entonces n se clasifica como &quot;abundante&quot; </p>
<p> Ejemplo: </p>
<p> 6 tiene divisores propios de 1, 2 y 3. </p>
<p> 1 + 2 + 3 = 6, entonces 6 se clasifica como un número perfecto. </p>
<p> Implemente una función que calcula cuántos de los enteros de 1 a 20,000 (inclusive) están en cada una de las tres clases. Muestra el resultado como una matriz en el siguiente formato <code>[deficient, perfect, abundant]</code> . </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getDPA</code> es una función.
    testString: 'assert(typeof getDPA === "function", "<code>getDPA</code> is a function.");'
  - text: <code>getDPA</code> debería devolver una matriz.
    testString: 'assert(Array.isArray(getDPA(100)), "<code>getDPA</code> should return an array.");'
  - text: <code>getDPA</code> valor de retorno de <code>getDPA</code> debe tener una longitud de 3.
    testString: 'assert(getDPA(100).length === 3, "<code>getDPA</code> return value should have a length of 3.");'
  - text: ' <code>getDPA(20000)</code> debe ser igual a [15043, 4, 4953]'
    testString: 'assert.deepEqual(getDPA(20000), solution, "<code>getDPA(20000)</code> should equal [15043, 4, 4953]");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function getDPA (num) {
  // Good luck!
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
function getDPA (num) {
  const dpa = [1, 0, 0];
  for (let n = 2; n <= num; n += 1) {
    let ds = 1;
    const e = Math.sqrt(n);
    for (let d = 2; d < e; d += 1) {
      if (n % d === 0) {
        ds += d + (n / d);
      }
    }
    if (n % e === 0) {
      ds += e;
    }
    dpa[ds < n ? 0 : ds === n ? 1 : 2] += 1;
  }
  return dpa;
}

```

</section>
