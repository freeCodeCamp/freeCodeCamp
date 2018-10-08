---
id: 5
localeTitle: 5900f46d1000cf542c50ff7f
challengeType: 5
title: 'Problem 255: Rounded Square Roots'
---

## Description
<section id='description'> 
Definimos la raíz cuadrada redondeada de un entero positivo n como la raíz cuadrada de n redondeada al entero más cercano. 

El siguiente procedimiento (esencialmente el método de Heron adaptado a la aritmética de enteros) encuentra la raíz cuadrada redondeada de n: 
Sea d el número de dígitos del número n. 
Si d es impar, configure x0 = 2 × 10 (d-1) ⁄2. 
Si d es par, establezca x0 = 7 × 10 (d-2) ⁄2. 
Repetir: 




hasta que xk + 1 = xk. 

A modo de ejemplo, encontremos la raíz cuadrada redondeada de n = 4321.n tiene 4 dígitos, por lo que x0 = 7 × 10 (4-2) ⁄2 = 70. 
Dado que x2 = x1, paramos aquí . 
Entonces, después de solo dos iteraciones, hemos encontrado que la raíz cuadrada redondeada de 4321 es 66 (la raíz cuadrada real es 65.7343137…). 

El número de iteraciones requeridas al usar este método es sorprendentemente bajo. 
Por ejemplo, podemos encontrar la raíz cuadrada redondeada de un entero de 5 dígitos (10,000 ≤ n ≤ 99,999) con un promedio de 3.2102888889 iteraciones (el valor promedio se redondea a 10 lugares decimales). 

Utilizando el procedimiento descrito anteriormente, ¿cuál es el número promedio de iteraciones requeridas para encontrar la raíz cuadrada redondeada de un número de 14 dígitos (1013 ≤ n &lt;1014)? 
Da tu respuesta redondeada a 10 decimales. 

Nota: Los símbolos ⌊x⌋ y ⌈x⌉ representan la función de piso y la función de techo respectivamente. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler255()</code> debe devolver 4.447401118.
    testString: 'assert.strictEqual(euler255(), 4.447401118, "<code>euler255()</code> should return 4.447401118.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler255() {
  // Good luck!
  return true;
}

euler255();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
