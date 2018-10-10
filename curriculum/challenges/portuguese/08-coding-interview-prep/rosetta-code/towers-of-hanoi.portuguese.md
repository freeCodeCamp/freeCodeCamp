---
title: Towers of Hanoi
id: 5951ed8945deab770972ae56
challengeType: 5
videoUrl: ''
localeTitle: Torres de hanoi
---

## Description
<section id="description"> Tarefa: <p> Resolva o problema <a href="https://en.wikipedia.org/wiki/Towers_of_Hanoi" title="wp: Towers_of_Hanoi">das Torres de Hanói</a> . </p><p> Sua solução deve aceitar o número de discos como os primeiros parâmetros e três strings usadas para identificar cada uma das três pilhas de discos, por exemplo, <code>towerOfHanoi(4, &#39;A&#39;, &#39;B&#39;, &#39;C&#39;)</code> . A função deve retornar um array de arrays contendo a lista de movimentos, source -&gt; destination. Por exemplo, a matriz <code>[[&#39;A&#39;, &#39;C&#39;], [&#39;B&#39;, &#39;A&#39;]]</code> indica que o primeiro movimento foi mover um disco da pilha A para C, e o segundo movimento foi mover um disco disco da pilha B para A. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>towerOfHanoi</code> é uma função.
    testString: 'assert(typeof towerOfHanoi === "function", "<code>towerOfHanoi</code> is a function.");'
  - text: '<code>towerOfHanoi(3, ...)</code> deve retornar 7 movimentos.'
    testString: 'assert(res3.length === 7, "<code>towerOfHanoi(3, ...)</code> should return 7 moves.");'
  - text: '<code>towerOfHanoi(3, &quot;A&quot;, &quot;B&quot;, &quot;C&quot;)</code> deve retornar [[&quot;A&quot;, &quot;B&quot;], [&quot;A&quot;, &quot;C&quot;], [&quot;B&quot;, &quot;C&quot;], [ &quot;A&quot;, &quot;B&quot;], [&quot;C&quot;, &quot;A&quot;], [&quot;C&quot;, &quot;B&quot;], [&quot;A&quot;, &quot;B&quot;]]. &quot;)'
    testString: 'assert.deepEqual(towerOfHanoi(3, "A", "B", "C"), res3Moves, "<code>towerOfHanoi(3, "A", "B", "C")</code> should return [["A","B"],["A","C"],["B","C"],["A","B"],["C","A"],["C","B"],["A","B"]].");'
  - text: '<code>towerOfHanoi(5, &quot;X&quot;, &quot;Y&quot;, &quot;Z&quot;)</code> 10º movimento deve ser Y -&gt; X.'
    testString: 'assert.deepEqual(res5[9], ["Y", "X"], "<code>towerOfHanoi(5, "X", "Y", "Z")</code> 10th move should be Y -> X.");'
  - text: '<code>towerOfHanoi(7, &quot;A&quot;, &quot;B&quot;, &quot;C&quot;)</code> primeiros dez movimentos são [[&quot;A&quot;, &quot;B&quot;], [&quot;A&quot;, &quot;C&quot;], [&quot;B&quot;, &quot;C&quot;] , [&quot;A&quot;, &quot;B&quot;], [&quot;C&quot;, &quot;A&quot;], [&quot;C&quot;, &quot;B&quot;], [&quot;A&quot;, &quot;B&quot;], [&quot;A&quot;, &quot;C&quot;] , [&quot;B&quot;, &quot;C&quot;], [&quot;B&quot;, &quot;A&quot;]]. &quot;)'
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
