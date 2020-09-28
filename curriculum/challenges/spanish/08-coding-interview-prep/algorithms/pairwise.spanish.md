---
id: a3f503de51cfab748ff001aa
title: Pairwise
challengeType: 5
videoUrl: ''
localeTitle: Por pares
---

## Description
<section id="description"> Dada una matriz <code>arr</code> , encuentre pares de elementos cuya suma sea igual al segundo argumento <code>arg</code> y devuelva la suma de sus índices. Puede usar varios pares que tengan los mismos elementos numéricos pero diferentes índices. Cada par debe usar los índices disponibles más bajos posibles. Una vez que se ha utilizado un elemento, no puede reutilizarse para emparejarse con otro elemento. Por ejemplo, por <code>pairwise([1, 1, 2], 3)</code> crea un par <code>[2, 1]</code> usando el 1 en el índice 0 en lugar del 1 en el índice 1, porque 0 + 2 &lt;1 + 2. Por ejemplo, por <code>pairwise([7, 9, 11, 13, 15], 20)</code> devuelve <code>6</code> . Los pares que suman 20 son <code>[7, 13]</code> y <code>[9, 11]</code> . Luego podemos escribir la matriz con sus índices y valores. <table class="table"><tbody><tr><th> <strong>Índice</strong> </th><th> 0 </th><th> 1 </th><th> 2 </th><th> 3 </th><th> 4 </th></tr><tr><td> Valor </td><td> 7 </td><td> 9 </td><td> 11 </td><td> 13 </td><td> 15 </td></tr></tbody></table> A continuación tomaremos sus índices correspondientes y los añadiremos. 7 + 13 = 20 → Índices 0 + 3 = 3 <br> 9 + 11 = 20 → Índices 1 + 2 = 3 <br> 3 + 3 = 6 → Volver <code>6</code> Recuerde usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Lectura-Búsqueda-Preguntar</a> si se atasca. Trate de hacer programación en pareja. Escribe tu propio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>pairwise([1, 4, 2, 3, 0, 5], 7)</code> debe devolver 11.'
    testString: 'assert.deepEqual(pairwise([1, 4, 2, 3, 0, 5], 7), 11, "<code>pairwise([1, 4, 2, 3, 0, 5], 7)</code> should return 11.");'
  - text: '<code>pairwise([1, 3, 2, 4], 4)</code> debe devolver 1.'
    testString: 'assert.deepEqual(pairwise([1, 3, 2, 4], 4), 1, "<code>pairwise([1, 3, 2, 4], 4)</code> should return 1.");'
  - text: '<code>pairwise([1, 1, 1], 2)</code> debe devolver 1.'
    testString: 'assert.deepEqual(pairwise([1, 1, 1], 2), 1, "<code>pairwise([1, 1, 1], 2)</code> should return 1.");'
  - text: '<code>pairwise([0, 0, 0, 0, 1, 1], 1)</code> debe devolver 10.'
    testString: 'assert.deepEqual(pairwise([0, 0, 0, 0, 1, 1], 1), 10, "<code>pairwise([0, 0, 0, 0, 1, 1], 1)</code> should return 10.");'
  - text: '<code>pairwise([], 100)</code> debe devolver 0.'
    testString: 'assert.deepEqual(pairwise([], 100), 0, "<code>pairwise([], 100)</code> should return 0.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function pairwise(arr, arg) {
  return arg;
}

pairwise([1,4,2,3,0,5], 7);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
