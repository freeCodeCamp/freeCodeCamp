---
id: 5900f4b41000cf542c50ffc7
challengeType: 5
title: 'Problem 328: Lowest-cost Search'
videoUrl: ''
localeTitle: 'Problema 328: Búsqueda de menor costo'
---

## Description
<section id="description"> Estamos tratando de encontrar un número oculto seleccionado del conjunto de enteros {1, 2, ..., n} haciendo preguntas. Cada número (pregunta) que hacemos, tiene un costo igual al número solicitado y obtenemos una de las tres respuestas posibles: &quot;Su conjetura es menor que el número oculto&quot;, o &quot;¡Sí, eso es!&quot;, O &quot;Su conjetura es más alto que el número oculto &quot;. Dado el valor de n, una estrategia óptima minimiza el costo total (es decir, la suma de todas las preguntas formuladas) para el peor de los casos. P.ej <p> Si n = 3, lo mejor que podemos hacer es, obviamente, pedir el número &quot;2&quot;. La respuesta nos llevará inmediatamente a encontrar el número oculto (a un costo total = 2). </p><p> Si n = 8, podríamos decidir utilizar un tipo de estrategia de &quot;búsqueda binaria&quot;: nuestra primera pregunta sería &quot;4&quot; y si el número oculto es mayor que 4 necesitaremos una o dos preguntas adicionales. Deje que nuestra segunda pregunta sea &quot;6&quot;. Si el número oculto aún es mayor que 6, necesitaremos una tercera pregunta para discriminar entre 7 y 8. Por lo tanto, nuestra tercera pregunta será &quot;7&quot; y el costo total para este escenario en el peor de los casos será 4 + 6 + 7 = 17. </p><p> Podemos mejorar considerablemente el costo del caso más desfavorable para n = 8, al preguntar &quot;5&quot; como nuestra primera pregunta. Si se nos dice que el número oculto es mayor que 5, nuestra segunda pregunta será &quot;7&quot;, entonces sabremos con certeza cuál es el número oculto (por un costo total de 5 + 7 = 12). Si nos dicen que el número oculto es menor que 5, nuestra segunda pregunta será &quot;3&quot; y si el número oculto es menor que 3, nuestra tercera pregunta será &quot;1&quot;, lo que da un costo total de 5 + 3 + 1 = 9. Desde 12&gt; 9, el costo más desfavorable para esta estrategia es 12. Eso es mejor que lo que hemos logrado anteriormente con la estrategia de &quot;búsqueda binaria&quot;; También es mejor o igual que cualquier otra estrategia. Entonces, de hecho, acabamos de describir una estrategia óptima para n = 8. </p><p> Sea C (n) el costo más desfavorable alcanzado por una estrategia óptima para n, como se describe anteriormente. Por lo tanto, C (1) = 0, C (2) = 1, C (3) = 2 y C (8) = 12. De manera similar, C (100) = 400 y C (n) = 17575. </p><p> Encuentra C (n). </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler328()</code> debe devolver 260511850222.
    testString: 'assert.strictEqual(euler328(), 260511850222, "<code>euler328()</code> should return 260511850222.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler328() {
  // Good luck!
  return true;
}

euler328();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
