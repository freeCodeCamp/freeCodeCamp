---
title: Count the coins
id: 59713bd26bdeb8a594fb9413
localeTitle: 59713bd26bdeb8a594fb9413
challengeType: 5
---

## Description
<section id='description'> 
<p> Hay cuatro tipos de monedas comunes en moneda <a href="https://en.wikipedia.org/wiki/United_States" title="enlace: https://en.wikipedia.org/wiki/United_States">estadounidense</a> : </p> 
trimestres (25 centavos) 
monedas de diez centavos (10 centavos) 
centavos (5 centavos) y 
centavos (1 centavo) 
<p> Hay seis formas de hacer cambio por 15 centavos: </p> 
Un centavo y un centavo 
Un centavo y 5 centavos 
3 centavos 
2 centavos y 5 centavos 
Un centavo y 10 centavos 
15 centavos 
Tarea: 
<p> Implemente una función para determinar cuántas maneras hay de hacer un cambio por un dólar usando estas monedas comunes. (1 dólar = 100 centavos). </p> 
Referencia: 
<a href="http://mitpress.mit.edu/sicp/full-text/book/book-Z-H-11.html#%_sec_Temp_52" title="enlace: http://mitpress.mit.edu/sicp/full-text/book/book-Z-H-11.html#%_sec_Temp_52">un algoritmo de MIT Press</a> . 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>countCoins</code> es una función.
    testString: 'assert(typeof countCoins === "function", "<code>countCoins</code> is a function.");'
  - text: <code>countCoints()</code> debe devolver 242.
    testString: 'assert.equal(countCoins(), 242, "<code>countCoints()</code> should return 242.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function countCoins () {
  // Good luck!
  return true;
}
```

</div>



</section>

## Solution
<section id='solution'>


```js
function countCoins () {
  let t = 100;
  const operands = [1, 5, 10, 25];
  const targetsLength = t + 1;
  const operandsLength = operands.length;
  t = [1];

  for (let a = 0; a < operandsLength; a++) {
    for (let b = 1; b < targetsLength; b++) {
      // initialise undefined target
      t[b] = t[b] ? t[b] : 0;

      // accumulate target + operand ways
      t[b] += (b < operands[a]) ? 0 : t[b - operands[a]];
    }
  }

  return t[targetsLength - 1];
}

```

</section>
