---
id: 5900f40c1000cf542c50ff1e
challengeType: 5
title: 'Problem 159: Digital root sums of factorisations'
videoUrl: ''
localeTitle: 'Problema 159: Sumas de raíz digitales de factorizaciones'
---

## Description
<section id="description"> Un número compuesto puede ser factorizado de muchas maneras diferentes. Por ejemplo, sin incluir la multiplicación por uno, 24 se pueden factorizar de 7 formas distintas: <p> 24 = 2x2x2x3 24 = 2x3x4 24 = 2x2x6 24 = 4x6 24 = 3x8 24 = 2x12 24 = 24 </p><p> Recuerde que la raíz digital de un número, en la base 10, se encuentra sumando los dígitos de ese número, y repitiendo ese proceso hasta que se llega a un número que es menor que 10. Por lo tanto, la raíz digital de 467 es 8. Nosotros llamará a una suma de raíz digital (DRS) la suma de las raíces digitales de los factores individuales de nuestro número. La siguiente tabla muestra todos los valores de DRS para 24. FactorizaciónDirital Root Sum2x2x2x3 92x3x4 92x2x6 104x6 103x8 112x12 524 6La máxima suma de la raíz digital de 24 es 11. La función mdrs (n) proporciona la máxima suma de la raíz digital de n. Entonces mdrs (24) = 11. Encuentra ∑mdrs (n) para 1 &lt;n &lt;1,000,000. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler159()</code> debe devolver 14489159.
    testString: 'assert.strictEqual(euler159(), 14489159, "<code>euler159()</code> should return 14489159.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler159() {
  // Good luck!
  return true;
}

euler159();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
