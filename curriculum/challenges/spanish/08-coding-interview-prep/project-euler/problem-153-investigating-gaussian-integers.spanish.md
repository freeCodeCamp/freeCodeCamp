---
id: 5900f4051000cf542c50ff18
challengeType: 5
title: 'Problem 153: Investigating Gaussian Integers'
videoUrl: ''
localeTitle: 'Problema 153: Investigando los enteros gaussianos'
---

## Description
<section id="description"> Como todos sabemos, la ecuación x2 = -1 no tiene soluciones para x real. <p> Sin embargo, si introducimos el número imaginario i, esta ecuación tiene dos soluciones: x = i y x = -i. </p><p> Si vamos un paso más allá, la ecuación (x-3) 2 = -4 tiene dos soluciones complejas: x = 3 + 2i y x = 3-2i. x = 3 + 2i y x = 3-2i se llaman el conjugado complejo de cada uno. </p><p> Los números de la forma a + bi se llaman números complejos. </p><p> En general, a + bi y a − bi son complejos conjugados entre sí. Un entero gaussiano es un número complejo a + bi tal que a y b son enteros. </p><p> Los enteros regulares también son enteros gaussianos (con b = 0). </p><p> Para distinguirlos de los enteros gaussianos con b ≠ 0, llamamos a estos enteros &quot;enteros racionales&quot;. </p><p> Un entero gaussiano se llama divisor de un entero racional n si el resultado es también un entero gaussiano. </p><p> Si, por ejemplo, dividimos 5 por 1 + 2i, podemos simplificar de la siguiente manera: </p><p> Multiplica el numerador y el denominador por el conjugado complejo de 1 + 2i: 1−2i. </p><p> El resultado es . </p><p> Entonces 1 + 2i es un divisor de 5. </p><p> Tenga en cuenta que 1 + i no es un divisor de 5 porque. </p><p> Tenga en cuenta también que si el entero gaussiano (a + bi) es un divisor de un entero racional n, entonces su conjugado complejo (a-bi) también es un divisor de n. De hecho, 5 tiene seis divisores, de modo que la parte real es positiva: {1, 1 + 2i, 1 - 2i, 2 + i, 2 - i, 5}. </p><p> La siguiente es una tabla de todos los divisores para los primeros cinco enteros racionales positivos: </p><p> n Divisores enteros gaussianos con partes reales positivas. Sumo (s) de estos </p><p> divisores 111 21, 1 + i, 1-i, 25 31, 34 41, 1 + i, 1-i, 2, 2 + 2i, 2-2i, 413 51, 1 + 2i, 1-2i, 2 + i, 2-i, 512 Para divisores con partes reales positivas, entonces, tenemos:. Para 1 ≤ n ≤ 105, ∑ s (n) = 17924657155. ¿Qué es ∑ s (n) para 1 ≤ n ≤ 108? </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler153()</code> debe devolver 17971254122360636.
    testString: 'assert.strictEqual(euler153(), 17971254122360636, "<code>euler153()</code> should return 17971254122360636.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler153() {
  // Good luck!
  return true;
}

euler153();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
