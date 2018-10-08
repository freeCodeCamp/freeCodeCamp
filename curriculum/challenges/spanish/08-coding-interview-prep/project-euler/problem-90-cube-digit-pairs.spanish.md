---
id: 5
localeTitle: 5900f3c61000cf542c50fed9
challengeType: 5
title: 'Problem 90: Cube digit pairs'
---

## Description
<section id='description'> 
Cada una de las seis caras en un cubo tiene un dígito diferente (0 a 9) escrito en él; Lo mismo se hace con un segundo cubo. Al colocar los dos cubos uno al lado del otro en diferentes posiciones, podemos formar una variedad de números de 2 dígitos. 

Por ejemplo, el número cuadrado 64 podría formarse: 




De hecho, al elegir cuidadosamente los dígitos en ambos cubos es posible mostrar todos los números cuadrados debajo de cien: 01, 04, 09, 16, 25, 36, 49, 64 y 81. 

Por ejemplo, una forma de lograrlo es colocando {0, 5, 6, 7, 8, 9} en un cubo y {1, 2, 3 , 4, 8, 9} en el otro cubo. 

Sin embargo, para este problema, permitiremos que el 6 o el 9 se inviertan de manera que una disposición como {0, 5, 6, 7, 8, 9} y {1, 2, 3, 4, 6, 7} permite que se muestren los nueve números cuadrados; de lo contrario, sería imposible obtener 09. 

Al determinar un arreglo distinto, nos interesan los dígitos de cada cubo, no el orden. 

{1, 2, 3, 4, 5, 6} es equivalente a {3, 6, 4, 1, 2, 5} 
{1, 2, 3, 4, 5, 6} es distinto de {1 , 2, 3, 4, 5, 9} 

Pero como estamos permitiendo que se inviertan 6 y 9, los dos conjuntos distintos en el último ejemplo representan el conjunto extendido {1, 2, 3, 4, 5, 6 , 9} con el propósito de formar números de 2 dígitos. 

¿Cuántos arreglos distintos de los dos cubos permiten que se muestren todos los números cuadrados? 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler90()</code> debe devolver 1217.
    testString: 'assert.strictEqual(euler90(), 1217, "<code>euler90()</code> should return 1217.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler90() {
  // Good luck!
  return true;
}

euler90();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
