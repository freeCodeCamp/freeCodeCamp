---
id: 5
localeTitle: 5900f4051000cf542c50ff18
challengeType: 5
title: 'Problem 153: Investigating Gaussian Integers'
---

## Description
<section id='description'> 
Como todos sabemos, la ecuación x2 = -1 no tiene soluciones para x real. 

Si, sin embargo, introducimos el número imaginario i, esta ecuación tiene dos soluciones: x = i y x = -i. 

Si vamos un paso más allá, la ecuación (x-3) 2 = -4 tiene dos soluciones complejas: x = 3 + 2i y x = 3-2i. 
x = 3 + 2i y x = 3-2i se llaman el conjugado complejo de cada uno. 

números de la forma a + bi se denominan números complejos. 

En general, a + bi y a − bi son complejos conjugados entre sí. 
Un entero gaussiano es un número complejo a + bi tal que a y b son enteros. 

Los enteros regulares también son enteros gaussianos (con b = 0). 

Para distinguirlos de los enteros gaussianos con b ≠ 0 los llamamos &quot;enteros racionales&quot;. 

Un entero gaussiano se llama divisor de un entero racional n si el resultado es también un entero gaussiano. 

Si, por ejemplo, dividimos 5 por 1 + 2i, podemos simplificar de la siguiente manera: 

Multiplica el numerador y el denominador por el complejo conjugado de 1 + 2i: 1−2i. 

El resultado es 
. 

Entonces 1 + 2i es un divisor de 5. 

Ten en cuenta que 1 + i no es un divisor de 5 porque. 

Tenga en cuenta también que si el entero gaussiano (a + bi) es un divisor de un entero racional n, entonces su conjugado complejo (a-bi) también es un divisor de n. 
De hecho, 5 tiene seis divisores, por lo que la parte real es positiva: {1, 1 + 2i, 1 - 2i, 2 + i, 2 - i, 5}. 

La siguiente es una tabla de todos los divisores para los primeros cinco enteros racionales positivos: 

n divisores enteros gaussianos 
con partSum real s (n) de estos 

divisores111 
21, 1 + i, 1-i , 25 
31, 34 
41, 1 + i, 1-i, 2, 2 + 2i, 2-2i, 413 
51, 1 + 2i, 1-2i, 2 + i, 2-i, 512 
Para Divisores con partes reales positivas, entonces, tenemos:. 
Para 1 ≤ n ≤ 105, ∑ s (n) = 17924657155. 
¿Qué es ∑ s (n) para 1 ≤ n ≤ 108? 
</section>

## Instructions
<section id='instructions'> 

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
