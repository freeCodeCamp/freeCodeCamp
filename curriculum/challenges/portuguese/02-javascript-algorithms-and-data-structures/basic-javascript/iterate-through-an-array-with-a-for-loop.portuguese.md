---
id: 5675e877dbd60be8ad28edc6
title: Iterate Through an Array with a For Loop
challengeType: 1
videoUrl: ''
localeTitle: Iterar por meio de uma matriz com um loop for
---

## Description
<section id="description"> Uma tarefa comum em JavaScript é fazer uma iteração no conteúdo de uma matriz. Uma maneira de fazer isso é com um loop <code>for</code> . Este código irá mostrar cada elemento da array <code>arr</code> para o console: <blockquote> var arr = [10,9,8,7,6]; <br> para (var i = 0; i &lt;arr.length; i ++) { <br> console.log (arr [i]); <br> } </blockquote> Lembre-se que os Arrays possuem numeração baseada em zero, o que significa que o último índice do array é length - 1. Nossa <dfn>condição</dfn> para este loop é <code>i &lt; arr.length</code> , que para quando <code>i</code> tiver comprimento - 1. </section>

## Instructions
<section id="instructions"> Declare e inicialize um <code>total</code> variáveis ​​para <code>0</code> . Use um loop <code>for</code> para adicionar o valor de cada elemento da matriz <code>myArr</code> ao <code>total</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>total</code> deve ser declarado e inicializado para 0
    testString: 'assert(code.match(/var.*?total\s*=\s*0.*?;/), "<code>total</code> should be declared and initialized to 0");'
  - text: <code>total</code> deve ser igual a 20
    testString: 'assert(total === 20, "<code>total</code> should equal 20");'
  - text: Você deve usar um loop <code>for</code> para iterar pelo <code>myArr</code>
    testString: 'assert(code.match(/for\s*\(/g).length > 1 && code.match(/myArr\s*\[/), "You should use a <code>for</code> loop to iterate through <code>myArr</code>");'
  - text: Não defina o <code>total</code> para 20 diretamente
    testString: 'assert(!code.match(/total[\s\+\-]*=\s*(\d(?!\s*[;,])|[1-9])/g), "Do not set <code>total</code> to 20 directly");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line

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
