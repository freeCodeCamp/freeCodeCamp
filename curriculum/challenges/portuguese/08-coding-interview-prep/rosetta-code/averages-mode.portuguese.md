---
title: Averages-Mode
id: 594d8d0ab97724821379b1e6
challengeType: 5
videoUrl: ''
localeTitle: Modo de médias
---

## Description
<section id="description"><p> Escreva um programa para encontrar o valor do <a href="https://en.wikipedia.org/wiki/Mode (statistics)" title="wp: Mode (estatísticas)">modo</a> de uma coleção. </p><p> O caso em que a coleção está vazia pode ser ignorado. É preciso ter cuidado para lidar com o caso em que o modo não é exclusivo. </p><p> Se não for apropriado ou possível suportar uma coleção geral, use um vetor (matriz), se possível. Se não for apropriado ou possível suportar um tipo de valor não especificado, use números inteiros. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>mode</code> é uma função.
    testString: 'assert(typeof mode === "function", "<code>mode</code> is a function.");'
  - text: '<code>mode([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17])</code> deve ser igual a <code>[6]</code>'
    testString: 'assert.deepEqual(mode(arr1), [6], "<code>mode([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17])</code> should equal <code>[6]</code>");'
  - text: '<code>mode([1, 2, 4, 4, 1])</code> deve ser igual a <code>[1, 4]</code> .'
    testString: 'assert.deepEqual(mode(arr2).sort(), [1, 4], "<code>mode([1, 2, 4, 4, 1])</code> should equal <code>[1, 4]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function mode (arr) {
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
