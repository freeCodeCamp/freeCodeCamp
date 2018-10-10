---
title: Combinations
id: 5958469238c0d8d2632f46db
challengeType: 5
videoUrl: ''
localeTitle: Combinações
---

## Description
<section id="description"> Tarefa: <p> Dados inteiros não negativos <big>m</big> e <big>n</big> , geram todas as <a href="http://mathworld.wolfram.com/Combination.html" title="link: http://mathworld.wolfram.com/Combination.html">combinações</a> de tamanho <big>m</big> dos inteiros de <big>0</big> (zero) a <big>n-1</big> na ordem classificada (cada combinação é classificada e a tabela inteira é classificada). </p> Exemplo: <p> <big>3</big> pente <big>5</big> é: </p><pre> 0 1 2
0 1 3
0 1 4
0 2 3
0 2 4
0 3 4
1 2 3
1 2 4
1 3 4
2 3 4
</pre></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>combinations</code> é uma função.
    testString: 'assert(typeof combinations === "function", "<code>combinations</code> is a function.");'
  - text: '<code>combinations(3, 5)</code> devem retornar <code>[[0, 1, 2], [0, 1, 3], [0, 1, 4], [0, 2, 3], [0, 2, 4], [0, 3, 4], [1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]]</code> .'
    testString: 'assert.deepEqual(combinations(testInput1[0], testInput1[1]), testOutput1, "<code>combinations(3, 5)</code> should return <code>[[0, 1, 2], [0, 1, 3], [0, 1, 4], [0, 2, 3], [0, 2, 4], [0, 3, 4], [1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]]</code>.");'
  - text: '<code>combinations(4, 6)</code> devem retornar <code>[[0,1,2,3], [0,1,2,4], [0,1,2,5], [0,1,3,4], [0,1,3,5], [0,1,4,5], [0,2,3,4], [0,2,3,5], [0,2,4,5], [0,3,4,5], [1,2,3,4], [1,2,3,5], [1,2,4,5], [1,3,4,5], [2,3,4,5]]</code>'
    testString: 'assert.deepEqual(combinations(testInput2[0], testInput2[1]), testOutput2, "<code>combinations(4, 6)</code> should return <code>[[0,1,2,3],  [0,1,2,4],  [0,1,2,5],  [0,1,3,4],  [0,1,3,5],  [0,1,4,5],  [0,2,3,4],  [0,2,3,5],  [0,2,4,5],  [0,3,4,5],  [1,2,3,4],  [1,2,3,5],  [1,2,4,5],  [1,3,4,5],  [2,3,4,5]]</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function combinations (m, n) {
  // Good luck!
  return true;
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
