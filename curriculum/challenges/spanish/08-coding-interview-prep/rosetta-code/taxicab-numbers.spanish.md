---
title: Taxicab numbers
id: 594ecc0d9a8cf816e3340187
localeTitle: 594ecc0d9a8cf816e3340187
challengeType: 5
---

## Description
<section id='description'> 
Un <a href="https://en.wikipedia.org/wiki/Hardy–Ramanujan number" title="wp: Hardy – número de Ramanujan">número de taxi</a> 
(la definición que se usa aquí) es un entero positivo que se puede expresar como la suma de dos cubos positivos de más de una manera. 
El primer número de taxi es 1729, que es: 
1 <sup>3</sup> + 12 <sup>3</sup> y 
9 <sup>3</sup> + 10 <sup>3</sup> . 
números de Taxi también se conocen como: 
* números de taxi 
* Los números de taxis 
* Los números de taxis 
números * Hardy-Ramanujan 
Tarea: 
Escribir una función que devuelve el menor número de taxis N. 
Para cada uno de los números de taxis, muestre el número y sus cubos constituyentes. 
Vea también: 
[http://oeis.org/A001235 A001235 números de taxis] en la Enciclopedia en línea de secuencias de números enteros. 
<a href="http://mathworld.wolfram.com/Hardy-RamanujanNumber.html">Hardy-Ramanujan Number</a> en MathWorld. 
<a href="http://mathworld.wolfram.com/TaxicabNumber.html">número de taxi</a> en MathWorld. 
<a href="https://en.wikipedia.org/wiki/Taxicab_number">número de taxi</a> en Wikipedia. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>taxicabNumbers</code> es una función.
    testString: 'assert(typeof taxicabNumbers === "function", "<code>taxicabNumbers </code> is a function.");'
  - text: <code>taxicabNumbers</code> debe devolver una matriz.
    testString: 'assert(typeof taxicabNumbers(2) === "object", "<code>taxicabNumbers </code> should return an array.");'
  - text: <code>taxicabNumbers</code> debe devolver una serie de números.
    testString: 'assert(typeof taxicabNumbers(100)[0] === "number", "<code>taxicabNumbers </code> should return an array of numbers.");'
  - text: &#39; <code>taxicabNumbers(4)</code> debe devolver [1729, 4104, 13832, 20683].&#39;
    testString: 'assert.deepEqual(taxicabNumbers(4), res4, "<code>taxicabNumbers(4) </code> must return [1729, 4104, 13832, 20683].");'
  - text: &#39;taxicabNumbers (25) debe devolver [1729, 4104, 13832, 20683, 32832, 39312, 40033, 46683, 64232, 65728, 110808, 134379, 149389, 165464, 171288, 196041, 216125, 262656, 31446, 320264, 327763, 373464, 402597] &#39;
    testString: 'assert.deepEqual(taxicabNumbers(25), res25, "taxicabNumbers(25) should return [1729, 4104, 13832, 20683, 32832, 39312, 40033, 46683, 64232, 65728, 110656, 110808, 134379, 149389, 165464, 171288, 195841, 216027, 216125, 262656, 314496, 320264, 327763, 373464, 402597]");'
  - text: &#39;taxicabNumbers (39) los números resultantes del 20 al 29 deben ser [314496,320264,327763,373464,402597,439101,443889,513000,513856].&#39;
    testString: 'assert.deepEqual(taxicabNumbers(39).slice(20, 29), res39From20To29, "taxicabNumbers(39) resulting numbers from 20 - 29 should be [314496,320264,327763,373464,402597,439101,443889,513000,513856].");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function taxicabNumbers (n) {
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
function taxicabNumbers(nNumbers) {
  const cubeN = [];
  const s3s = {};

  const e = 100;
  for (let n = 1; n < e; n += 1) {
    cubeN[n] = n * n * n;
  }

  for (let a = 1; a < e - 1; a += 1) {
    const a3 = cubeN[a];
    for (let b = a; b < e; b += 1) {
      const b3 = cubeN[b];
      const s3 = a3 + b3;

      let abs = s3s[s3];
      if (!abs) {
        s3s[s3] = abs = [];
      }
      abs.push([a, b]);
    }
  }

  let i = 0;
  const res = [];
  Object.keys(s3s).forEach(s3 => {
    const abs = s3s[s3];
    if (abs.length >= 2) { // No two cube pairs found
      i += 1;
      if (i <= nNumbers) {
        res.push(s3);
      }
    }
  });
  return res.map(item => parseInt(item, 10));
}

```

</section>
