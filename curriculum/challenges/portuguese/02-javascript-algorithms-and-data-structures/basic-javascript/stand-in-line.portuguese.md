---
id: 56533eb9ac21ba0edf2244c6
title: Stand in Line
challengeType: 1
videoUrl: ''
localeTitle: Ficar na fila
---

## Description
<section id="description"> Na Ciência da Computação, uma <dfn>fila</dfn> é uma <dfn>Estrutura de Dados</dfn> abstrata, na qual os itens são mantidos em ordem. Novos itens podem ser adicionados na parte de trás da <code>queue</code> e itens antigos são retirados da frente da <code>queue</code> . Escreva uma função <code>nextInLine</code> que recebe um array ( <code>arr</code> ) e um número ( <code>item</code> ) como argumentos. Adicione o número ao final da matriz e remova o primeiro elemento da matriz. A função <code>nextInLine</code> deve então retornar o elemento que foi removido. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>nextInLine([], 5)</code> deve retornar um número.'
    testString: 'assert.isNumber(nextInLine([],5), "<code>nextInLine([], 5)</code> should return a number.");'
  - text: '<code>nextInLine([], 1)</code> deve retornar <code>1</code>'
    testString: 'assert(nextInLine([],1) === 1, "<code>nextInLine([], 1)</code> should return <code>1</code>");'
  - text: '<code>nextInLine([2], 1)</code> deve retornar <code>2</code>'
    testString: 'assert(nextInLine([2],1) === 2, "<code>nextInLine([2], 1)</code> should return <code>2</code>");'
  - text: '<code>nextInLine([5,6,7,8,9], 1)</code> deve retornar <code>5</code>'
    testString: 'assert(nextInLine([5,6,7,8,9],1) === 5, "<code>nextInLine([5,6,7,8,9], 1)</code> should return <code>5</code>");'
  - text: 'Após <code>nextInLine(testArr, 10)</code> , <code>testArr[4]</code> deve ser <code>10</code>'
    testString: 'nextInLine(testArr, 10); assert(testArr[4] === 10, "After <code>nextInLine(testArr, 10)</code>, <code>testArr[4]</code> should be <code>10</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function nextInLine(arr, item) {
  // Your code here

  return item;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));

```

</div>

### Before Test
<div id='js-setup'>

```js
var logOutput = [];
var originalConsole = console
function capture() {
    var nativeLog = console.log;
    console.log = function (message) {
        logOutput.push(message);
        if(nativeLog.apply) {
          nativeLog.apply(originalConsole, arguments);
        } else {
          var nativeMsg = Array.prototype.slice.apply(arguments).join(' ');
          nativeLog(nativeMsg);
        }
    };
}

function uncapture() {
  console.log = originalConsole.log;
}

capture();

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
