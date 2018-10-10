---
id: 5900f4f11000cf542c510003
challengeType: 5
title: 'Problem 387: Harshad Numbers'
videoUrl: ''
localeTitle: 'Problema 387: Números de Harshad'
---

## Description
<section id="description"> Un número Harshad o Niven es un número que es divisible por la suma de sus dígitos. 201 es un número de Harshad porque es divisible por 3 (la suma de sus dígitos). Cuando truncamos el último dígito de 201, obtenemos 20, que es un número de Harshad. Cuando truncamos el último dígito de 20, obtenemos 2, que también es un número de Harshad. Llamemos a un número de Harshad que, al truncar recursivamente el último dígito, siempre da como resultado que un número de Harshad se convierta en un número de Harshad correcto truncable. <p> También: 201/3 = 67 que es primo. Llamemos a un número de Harshad que, cuando se divide por la suma de sus dígitos, da como resultado un número primo de Harshad fuerte. </p><p> Ahora toma el número 2011 que es primo. Cuando truncamos el último dígito, obtenemos 201, un número de Harshad fuerte que también se puede truncar. Llamemos a estos primos fuertes, primos de Harshad truncables a la derecha. </p><p> Se da por sentado que la suma de los números primos de Harshad, fuertes y truncables a la derecha, inferiores a 10000 es 90619. </p><p> Halla la suma de los números de Harshad fuertes, truncables a la derecha, menores que 1014. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler387()</code> debe devolver 696067597313468.
    testString: 'assert.strictEqual(euler387(), 696067597313468, "<code>euler387()</code> should return 696067597313468.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler387() {
  // Good luck!
  return true;
}

euler387();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
