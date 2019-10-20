---
title: Towers of Hanoi
id: 5951ed8945deab770972ae56
challengeType: 5
videoUrl: ''
localeTitle: Torres de Hanoi
---

## Description
<section id="description"> Tarea: <p> Resuelve el problema de las <a href="https://en.wikipedia.org/wiki/Towers_of_Hanoi" title="wp: torres_de_hanoi">Torres de Hanoi</a> . </p><p> Su solución debe aceptar el número de discos como los primeros parámetros, y tres cadenas utilizadas para identificar cada una de las tres pilas de discos, por ejemplo <code>towerOfHanoi(4, &#39;A&#39;, &#39;B&#39;, &#39;C&#39;)</code> . La función debe devolver una matriz de matrices que contiene la lista de movimientos, origen -&gt; destino. Por ejemplo, la matriz <code>[[&#39;A&#39;, &#39;C&#39;], [&#39;B&#39;, &#39;A&#39;]]</code> indica que el primer movimiento fue mover un disco de la pila A a C, y el segundo movimiento fue mover un disco disco de pila B a A. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>towerOfHanoi</code> es una función.
    testString: 'assert(typeof towerOfHanoi === "function", "<code>towerOfHanoi</code> is a function.");'
  - text: '<code>towerOfHanoi(3, ...)</code> debe devolver 7 movimientos.'
    testString: 'assert(res3.length === 7, "<code>towerOfHanoi(3, ...)</code> should return 7 moves.");'
  - text: '<code>towerOfHanoi(3, &quot;A&quot;, &quot;B&quot;, &quot;C&quot;)</code> debe devolver [[&quot;A&quot;, &quot;B&quot;], [&quot;A&quot;, &quot;C&quot;], [&quot;B&quot;, &quot;C&quot;], [ &quot;A&quot;, &quot;B&quot;], [&quot;C&quot;, &quot;A&quot;], [&quot;C&quot;, &quot;B&quot;], [&quot;A&quot;, &quot;B&quot;]]. &quot;)'
    testString: 'assert.deepEqual(towerOfHanoi(3, "A", "B", "C"), res3Moves, "<code>towerOfHanoi(3, "A", "B", "C")</code> should return [["A","B"],["A","C"],["B","C"],["A","B"],["C","A"],["C","B"],["A","B"]].");'
  - text: '<code>towerOfHanoi(5, &quot;X&quot;, &quot;Y&quot;, &quot;Z&quot;)</code> décimo movimiento debe ser Y -&gt; X.'
    testString: 'assert.deepEqual(res5[9], ["Y", "X"], "<code>towerOfHanoi(5, "X", "Y", "Z")</code> 10th move should be Y -> X.");'
  - text: '<code>towerOfHanoi(7, &quot;A&quot;, &quot;B&quot;, &quot;C&quot;)</code> primeros diez movimientos son [[&quot;A&quot;, &quot;B&quot;], [&quot;A&quot;, &quot;C&quot;], [&quot;B&quot;, &quot;C&quot;] , [&quot;A&quot;, &quot;B&quot;], [&quot;C&quot;, &quot;A&quot;], [&quot;C&quot;, &quot;B&quot;], [&quot;A&quot;, &quot;B&quot;], [&quot;A&quot;, &quot;C&quot;] , [&quot;B&quot;, &quot;C&quot;], [&quot;B&quot;, &quot;A&quot;]]. &quot;)'
    testString: 'assert.deepEqual(towerOfHanoi(7, "A", "B", "C").slice(0, 10), res7First10Moves, "<code>towerOfHanoi(7, "A", "B", "C")</code> first ten moves are [["A","B"],["A","C"],["B","C"],["A","B"],["C","A"],["C","B"],["A","B"],["A","C"],["B","C"],["B","A"]].");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function towerOfHanoi (n, a, b, c) {
  // Good luck!
  return [[]];
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
