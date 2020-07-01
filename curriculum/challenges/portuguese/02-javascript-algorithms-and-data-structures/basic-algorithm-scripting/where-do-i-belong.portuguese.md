---
id: a24c1a4622e3c05097f71d67
title: Where do I Belong
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Onde eu pertenço
---

## Description
<section id="description"> Retorna o índice mais baixo no qual um valor (segundo argumento) deve ser inserido em uma matriz (primeiro argumento) depois de ter sido classificado. O valor retornado deve ser um número. Por exemplo, <code>getIndexToIns([1,2,3,4], 1.5)</code> deve retornar <code>1</code> porque é maior que <code>1</code> (índice 0), mas menor que <code>2</code> (índice 1). Da mesma forma, <code>getIndexToIns([20,3,5], 19)</code> deve retornar <code>2</code> porque, uma vez que a matriz foi classificada, ela será semelhante a <code>[3,5,20]</code> e <code>19</code> será menor que <code>20</code> (índice 2) e maior que <code>5</code> ( índice 1). Lembre-se de usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> se você ficar preso. Escreva seu próprio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>getIndexToIns([10, 20, 30, 40, 50], 35)</code> deve retornar <code>3</code> .'
    testString: 'assert(getIndexToIns([10, 20, 30, 40, 50], 35) === 3, "<code>getIndexToIns([10, 20, 30, 40, 50], 35)</code> should return <code>3</code>.");'
  - text: '<code>getIndexToIns([10, 20, 30, 40, 50], 35)</code> deve retornar um número.'
    testString: 'assert(typeof(getIndexToIns([10, 20, 30, 40, 50], 35)) === "number", "<code>getIndexToIns([10, 20, 30, 40, 50], 35)</code> should return a number.");'
  - text: '<code>getIndexToIns([10, 20, 30, 40, 50], 30)</code> deve retornar <code>2</code> .'
    testString: 'assert(getIndexToIns([10, 20, 30, 40, 50], 30) === 2, "<code>getIndexToIns([10, 20, 30, 40, 50], 30)</code> should return <code>2</code>.");'
  - text: '<code>getIndexToIns([10, 20, 30, 40, 50], 30)</code> deve retornar um número.'
    testString: 'assert(typeof(getIndexToIns([10, 20, 30, 40, 50], 30)) === "number", "<code>getIndexToIns([10, 20, 30, 40, 50], 30)</code> should return a number.");'
  - text: '<code>getIndexToIns([40, 60], 50)</code> deve retornar <code>1</code> .'
    testString: 'assert(getIndexToIns([40, 60], 50) === 1, "<code>getIndexToIns([40, 60], 50)</code> should return <code>1</code>.");'
  - text: '<code>getIndexToIns([40, 60], 50)</code> deve retornar um número.'
    testString: 'assert(typeof(getIndexToIns([40, 60], 50)) === "number", "<code>getIndexToIns([40, 60], 50)</code> should return a number.");'
  - text: '<code>getIndexToIns([3, 10, 5], 3)</code> deve retornar <code>0</code> .'
    testString: 'assert(getIndexToIns([3, 10, 5], 3) === 0, "<code>getIndexToIns([3, 10, 5], 3)</code> should return <code>0</code>.");'
  - text: '<code>getIndexToIns([3, 10, 5], 3)</code> deve retornar um número.'
    testString: 'assert(typeof(getIndexToIns([3, 10, 5], 3)) === "number", "<code>getIndexToIns([3, 10, 5], 3)</code> should return a number.");'
  - text: '<code>getIndexToIns([5, 3, 20, 3], 5)</code> deve retornar <code>2</code> .'
    testString: 'assert(getIndexToIns([5, 3, 20, 3], 5) === 2, "<code>getIndexToIns([5, 3, 20, 3], 5)</code> should return <code>2</code>.");'
  - text: '<code>getIndexToIns([5, 3, 20, 3], 5)</code> deve retornar um número.'
    testString: 'assert(typeof(getIndexToIns([5, 3, 20, 3], 5)) === "number", "<code>getIndexToIns([5, 3, 20, 3], 5)</code> should return a number.");'
  - text: '<code>getIndexToIns([2, 20, 10], 19)</code> deve retornar <code>2</code> .'
    testString: 'assert(getIndexToIns([2, 20, 10], 19) === 2, "<code>getIndexToIns([2, 20, 10], 19)</code> should return <code>2</code>.");'
  - text: '<code>getIndexToIns([2, 20, 10], 19)</code> deve retornar um número.'
    testString: 'assert(typeof(getIndexToIns([2, 20, 10], 19)) === "number", "<code>getIndexToIns([2, 20, 10], 19)</code> should return a number.");'
  - text: '<code>getIndexToIns([2, 5, 10], 15)</code> deve retornar <code>3</code> .'
    testString: 'assert(getIndexToIns([2, 5, 10], 15) === 3, "<code>getIndexToIns([2, 5, 10], 15)</code> should return <code>3</code>.");'
  - text: '<code>getIndexToIns([2, 5, 10], 15)</code> deve retornar um número.'
    testString: 'assert(typeof(getIndexToIns([2, 5, 10], 15)) === "number", "<code>getIndexToIns([2, 5, 10], 15)</code> should return a number.");'
  - text: '<code>getIndexToIns([], 1)</code> deve retornar <code>0</code> .'
    testString: 'assert(getIndexToIns([], 1) === 0, "<code>getIndexToIns([], 1)</code> should return <code>0</code>.");'
  - text: '<code>getIndexToIns([], 1)</code> deve retornar um número.'
    testString: 'assert(typeof(getIndexToIns([], 1)) === "number", "<code>getIndexToIns([], 1)</code> should return a number.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  return num;
}

getIndexToIns([40, 60], 50);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
