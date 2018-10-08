---
title: Harshad or Niven series
id: 595668ca4cfe1af2fb9818d4
localeTitle: 595668ca4cfe1af2fb9818d4
challengeType: 5
---

## Description
<section id='description'> 
<p> Los números de <a href="http://mathworld.wolfram.com/HarshadNumber.html" title="enlace: http://mathworld.wolfram.com/HarshadNumber.html">Harshad</a> o Niven son enteros positivos ≥ 1 que son divisibles por la suma de sus dígitos. </p><p> Por ejemplo, 42 es un <a href="http://rosettacode.org/wiki/oeis:A005349" title="oeis: a005349">número de Harshad</a> ya que 42 es divisible por (4 + 2) sin resto. </p> 
Supongamos que la serie se define como los números en orden creciente. 
Tarea: 
<p> Implementar una función para generar miembros sucesivos de la secuencia de Harshad. </p><p> Úselo para enumerar los primeros veinte miembros de la secuencia y enumerar el primer número de Harshad mayor que 1000. </p> 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>isHarshadOrNiven</code> es una función.
    testString: 'assert(typeof isHarshadOrNiven === "function", "<code>isHarshadOrNiven</code> is a function.");'
  - text: &#39; <code>isHarshadOrNiven()</code> debe devolver <code>{&quot;firstTwenty&quot;: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, 20, 21, 24, 27, 30, 36, 40, 42],&quot;firstOver1000&quot;: 1002}</code> &#39;
    testString: 'assert.deepEqual(isHarshadOrNiven(), res, "<code>isHarshadOrNiven()</code> should return <code>{"firstTwenty": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, 20, 21, 24, 27, 30, 36, 40, 42],"firstOver1000": 1002}</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function isHarshadOrNiven () {
  const res = {
    firstTwenty: [],
    firstOver1000: undefined
  };
  // Change after this line

  return res;
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
function isHarshadOrNiven() {
  const res = {
    firstTwenty: [],
    firstOver1000: undefined
  };

  function isHarshad(n) {
    let s = 0;
    const nStr = n.toString();
    for (let i = 0; i < nStr.length; ++i) {
      s += parseInt(nStr.charAt(i), 10);
    }
    return n % s === 0;
  }

  let count = 0;
  const harshads = [];

  for (let n = 1; count < 20; ++n) {
    if (isHarshad(n)) {
      count++;
      harshads.push(n);
    }
  }

  res.firstTwenty = harshads;

  let h = 1000;
  while (!isHarshad(++h));
  res.firstOver1000 = h;

  return res;
}

```

</section>
