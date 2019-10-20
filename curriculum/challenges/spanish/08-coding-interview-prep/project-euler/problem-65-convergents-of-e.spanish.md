---
id: 5900f3ad1000cf542c50fec0
challengeType: 5
title: 'Problem 65: Convergents of e'
videoUrl: ''
localeTitle: 'Problem 65: Convergentes of e'
---

## Description
<section id="description"> La raíz cuadrada de 2 se puede escribir como una fracción continua infinita. <p> √2 = 1 + 1 </p><p> 2 + 1 </p><p> 2 + 1 </p><p> 2 + 1 </p><p> 2 + ... </p><p> La fracción continua infinita se puede escribir, √2 = [1; (2)], (2) indica que 2 repeticiones hasta el infinito. De manera similar, √23 = [4; (1,3,1,8)]. Resulta que la secuencia de valores parciales de fracciones continuas para raíces cuadradas proporciona las mejores aproximaciones racionales. Consideremos los convergentes para √2. </p><p> 1 + 1 = 3/2 </p><p> 2 </p><p> 1 + 1 = 7/5 </p><p> 2 + 1 </p><p> 2 </p><p> 1 + 1 = 17/12 </p><p> 2 + 1 </p><p> 2 + 1 </p><p> 2 </p><p> 1 + 1 = 41/29 </p><p> 2 + 1 </p><p> 2 + 1 </p><p> 2 + 1 </p><p> 2 </p><p> Por lo tanto, la secuencia de los primeros diez convergentes para √2 es: 1, 3/2, 7/5, 17/12, 41/29, 99/70, 239/169, 577/408, 1393/985, 3363/2378 , ... Lo que más sorprende es que la constante matemática importante, e = [2; 1,2,1, 1,4,1, 1,6,1, ..., 1,2k, 1, ...]. Los primeros diez términos en la secuencia de convergentes para e son: 2, 3, 8/3, 11/4, 19/7, 87/32, 106/39, 193/71, 1264/465, 1457/536,. .. La suma de dígitos en el numerador del décimo convergente es 1 + 4 + 5 + 7 = 17. Encuentre la suma de los dígitos en el numerador del centésimo convergente de la fracción continua para e. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler65()</code> debe devolver 272.
    testString: 'assert.strictEqual(euler65(), 272, "<code>euler65()</code> should return 272.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler65() {
  // Good luck!
  return true;
}

euler65();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
