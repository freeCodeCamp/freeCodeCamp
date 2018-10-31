---
id: 5900f4cd1000cf542c50ffdf
challengeType: 5
title: 'Problem 352: Blood tests'
videoUrl: ''
localeTitle: 'Problema 352: Exámenes de sangre'
---

## Description
<section id="description"> Cada una de las 25 ovejas en un rebaño debe ser examinada para detectar un virus raro, que se sabe que afecta al 2% de la población de ovejas. Existe una prueba de PCR precisa y extremadamente sensible para las muestras de sangre, que produce un resultado positivo / negativo claro, pero es muy costoso y requiere mucho tiempo. <p> Debido al alto costo, el veterinario a cargo sugiere que en lugar de realizar 25 pruebas separadas, se puede usar el siguiente procedimiento: Las ovejas se dividen en 5 grupos de 5 ovejas en cada grupo. Para cada grupo, las 5 muestras se mezclan y se realiza una única prueba. Luego, si el resultado es negativo, todas las ovejas de ese grupo se consideran libres de virus. Si el resultado es positivo, se realizarán 5 pruebas adicionales (una prueba por separado para cada animal) para determinar la (s) persona (s) afectada (s). </p><p> Dado que la probabilidad de infección para un animal específico es solo de 0.02, la primera prueba (en las muestras agrupadas) para cada grupo será: Negativa (y no se necesitan más pruebas) con una probabilidad de 0.985 = 0.9039207968. Positivo (se necesitan 5 pruebas adicionales) con probabilidad 1 - 0.9039207968 = 0.0960792032. </p><p> Por lo tanto, el número esperado de pruebas para cada grupo es 1 + 0.0960792032 × 5 = 1.480396016. En consecuencia, los 5 grupos pueden evaluarse utilizando un promedio de solo 1.480396016 × 5 = 7.40198008 pruebas, lo que representa un gran ahorro de más del 70%. </p><p> Aunque el esquema que acabamos de describir parece ser muy eficiente, aún puede mejorarse considerablemente (siempre suponiendo que la prueba sea lo suficientemente sensible y que no haya efectos adversos causados ​​por la mezcla de diferentes muestras). Por ejemplo: podemos comenzar realizando una prueba en una mezcla de las 25 muestras. Se puede verificar que en aproximadamente el 60,35% de los casos esta prueba será negativa, por lo que no se necesitarán más pruebas. Solo se requerirán pruebas adicionales para el 39,65% restante de los casos. Si sabemos que al menos un animal en un grupo de 5 está infectado y las primeras 4 pruebas individuales resultan negativas, no hay necesidad de realizar una prueba en el quinto animal (sabemos que debe estar infectado). Podemos probar un número diferente de grupos / número diferente de animales en cada grupo, ajustando esos números en cada nivel para que el número total esperado de pruebas se minimice. </p><p> Para simplificar el amplio rango de posibilidades, hay una restricción que imponemos al diseñar el esquema de prueba más rentable: cada vez que comenzamos con una muestra mixta, todas las ovejas que contribuyen a esa muestra deben ser examinadas completamente (es decir, un veredicto de infección). / Sin virus debe alcanzarse para todos ellos) antes de comenzar a examinar cualquier otro animal. </p><p> Para el ejemplo actual, resulta que el esquema de prueba más rentable (lo llamaremos la estrategia óptima) requiere un promedio de solo 4.155452 pruebas. </p><p> Usando la estrategia óptima, permita que T (s, p) represente el número promedio de pruebas necesarias para detectar un rebaño de ovejas en busca de un virus con probabilidad p de estar presente en cualquier individuo. Así, redondeado a seis lugares decimales, T (25, 0.02) = 4.155452 y T (25, 0.10) = 12.702124. </p><p> Encuentre ΣT (10000, p) para p = 0.01, 0.02, 0.03, ... 0.50. Da tu respuesta redondeada a seis decimales. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler352()</code> debe devolver 378563.260589.
    testString: 'assert.strictEqual(euler352(), 378563.260589, "<code>euler352()</code> should return 378563.260589.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler352() {
  // Good luck!
  return true;
}

euler352();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
