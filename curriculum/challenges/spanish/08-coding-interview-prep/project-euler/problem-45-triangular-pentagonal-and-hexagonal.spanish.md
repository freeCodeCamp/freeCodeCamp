---
id: 5
localeTitle: 5900f3991000cf542c50feac
challengeType: 5
title: 'Problem 45: Triangular, pentagonal, and hexagonal'
---

## Description
<section id='description'> 
números de triángulo, pentagonal y hexagonal son generados por las siguientes fórmulas: 
<div style='display: inline-grid; text-align: center; grid-template-columns: repeat(3, minmax(117px, 12%)); grid-template-rows: auto;'><div> Triángulo </div><div> T <sub>n</sub> = <var>n</var> ( <var>n</var> +1) / 2 </div><div> 1, 3, 6, 10, 15, ... </div></div> 
<div style='display: inline-grid; text-align: center; grid-template-columns: repeat(3, minmax(117px, 12%)); grid-template-rows: auto;'> <div> Pentagonal </div><div> P <sub>n</sub> = <var>n</var> (3 <var>n</var> −1) / 2 </div><div> 1, 5, 12, 22, 35, ... </div></div> 
<div style='display: inline-grid; text-align: center; grid-template-columns: repeat(3, minmax(117px, 12%)); grid-template-rows: auto;'> <div> Hexagonal </div><div> H <sub>n</sub> = <var>n</var> (2 <var>n</var> −1) </div><div> 1, 6, 15, 28, 45, ... </div></div> 
Se puede verificar que T <sub>285</sub> = P <sub>165</sub> = H <sub>143</sub> = 40755. 
Encuentre el siguiente número de triángulo que también sea pentagonal y hexagonal. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>triPentaHexa(40756)</code> debe devolver 1533776805.
    testString: 'assert.strictEqual(triPentaHexa(40756), 1533776805, "<code>triPentaHexa(40756)</code> should return 1533776805.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function triPentaHexa(n) {
  // Good luck!
  return true;
}

triPentaHexa(40756);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function triPentaHexa(n) {
  function triangular(num) {
  return (num * (num + 1)) / 2;
}

function isPentagonal(num) {
  // Formula found by completing the square and
  // solving for n.
  const n = (Math.sqrt((24 * num) + 1) + 1) / 6;
  return n % 1 === 0;
}

  function isHexagonal(num) {
  // Formula found by completing the square and
  // solving for n.
  const n = Math.sqrt(0.5 * (num + (1 / 8))) + 0.25;
 return n % 1 === 0;
}

let iTri = n;
let tri;
let found = false;
while (!found) {
  iTri++;
  tri = triangular(iTri);
  if (isPentagonal(tri) && isHexagonal(tri)) {
    found = true;
    }
  }
  return tri;
}
```

</section>
