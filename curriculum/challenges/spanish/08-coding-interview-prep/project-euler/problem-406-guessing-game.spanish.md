---
id: 5900f5021000cf542c510015
challengeType: 5
title: 'Problem 406: Guessing Game'
videoUrl: ''
localeTitle: 'Problema 406: Juego de adivinanzas'
---

## Description
<section id="description"> Estamos tratando de encontrar un número oculto seleccionado del conjunto de enteros {1, 2, ..., n} haciendo preguntas. Cada número (pregunta) que hacemos, obtenemos una de tres respuestas posibles: &quot;Su conjetura es menor que el número oculto&quot; (e incurre en un costo de a), o &quot;Su conjetura es mayor que el número oculto&quot; (y incurrir en un costo de b), o &quot;¡Sí, eso es!&quot; (Y el juego termina). Dado el valor de n, a yb, una estrategia óptima minimiza el costo total para el peor de los casos posibles. <p> Por ejemplo, si n = 5, a = 2 y b = 3, entonces podemos comenzar por preguntar &quot;2&quot; como nuestra primera pregunta. </p><p> Si se nos dice que 2 es mayor que el número oculto (para un costo de b = 3), estamos seguros de que &quot;1&quot; es el número oculto (para un costo total de 3). Si se nos dice que 2 es menor que el número oculto (por un costo de a = 2), entonces nuestra siguiente pregunta será &quot;4&quot;. Si se nos dice que 4 es mayor que el número oculto (para un costo de b = 3), estamos seguros de que &quot;3&quot; es el número oculto (para un costo total de 2 + 3 = 5). Si se nos dice que 4 es menor que el número oculto (para un costo de a = 2), estamos seguros de que &quot;5&quot; es el número oculto (para un costo total de 2 + 2 = 4). Por lo tanto, el costo en el peor de los casos alcanzado por esta estrategia es 5. También se puede demostrar que este es el costo más bajo en el peor de los casos. Entonces, de hecho, acabamos de describir una estrategia óptima para los valores dados de n, a y b. </p><p> Sea C (n, a, b) el costo más desfavorable alcanzado por una estrategia óptima para los valores dados de n, a y b. </p><p> Aquí hay algunos ejemplos: C (5, 2, 3) = 5 C (500, √2, √3) = 13.22073197 ... C (20000, 5, 7) = 82 C (2000000, √5, √7 ) = 49.63755955 ... </p><p> Sea Fk los números de Fibonacci: Fk = Fk-1 + Fk-2 con los casos base F1 = F2 = 1.Encuentre ≤1≤k≤30 C (1012, √k, √Fk), y dé su respuesta redondeada a 8 Decimales detrás del punto decimal. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler406()</code> debe devolver 36813.12757207.
    testString: 'assert.strictEqual(euler406(), 36813.12757207, "<code>euler406()</code> should return 36813.12757207.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler406() {
  // Good luck!
  return true;
}

euler406();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
