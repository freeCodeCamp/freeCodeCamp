---
id: 5900f53b1000cf542c51004d
challengeType: 5
title: 'Problem 462: Permutation of 3-smooth numbers'
videoUrl: ''
localeTitle: 'Problema 462: Permutación de 3 números lisos'
---

## Description
<section id="description"> Un número 3-suave es un número entero que no tiene un factor primo mayor que 3. Para un entero N, definimos S (N) como el conjunto de números 3-suave menores o iguales a N. Por ejemplo, S (20) = {1, 2, 3, 4, 6, 8, 9, 12, 16, 18}. <p> Definimos F (N) como el número de permutaciones de S (N) en las que cada elemento viene después de todos sus divisores apropiados. </p><p> Esta es una de las posibles permutaciones para N = 20. </p><ul><li> 1, 2, 4, 3, 9, 8, 16, 6, 18, 12. Esto no es una permutación válida porque 12 viene antes de su divisor 6. </li><li> 1, 2, 4, 3, 9, 8, 12, 16, 6, 18. </li></ul><p> Podemos verificar que F (6) = 5, F (8) = 9, F (20) = 450 y F (1000) ≈ 8.8521816557e21. Encontrar F (1018). Dé como respuesta su notación científica redondeada a diez dígitos después del punto decimal. Cuando dé su respuesta, use una e minúscula para separar la mantisa y el exponente. Por ejemplo, si la respuesta es 112,233,445,566,778,899 entonces el formato de respuesta sería 1.1223344557e17. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler462()</code> debe devolver el infinito.
    testString: 'assert.strictEqual(euler462(), Infinity, "<code>euler462()</code> should return Infinity.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler462() {
  // Good luck!
  return true;
}

euler462();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
