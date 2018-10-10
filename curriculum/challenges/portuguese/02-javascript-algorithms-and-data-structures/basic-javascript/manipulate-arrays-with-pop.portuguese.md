---
id: 56bbb991ad1ed5201cd392cc
title: Manipulate Arrays With pop()
challengeType: 1
videoUrl: ''
localeTitle: Manipular Arrays Com pop ()
---

## Description
<section id="description"> Outra maneira de alterar os dados em uma matriz é com a função <code>.pop()</code> . <code>.pop()</code> é usado para &quot;pop&quot; um valor fora do final de uma matriz. Podemos armazenar esse valor &quot;popped off&quot;, atribuindo-o a uma variável. Em outras palavras, <code>.pop()</code> remove o último elemento de uma matriz e retorna esse elemento. Qualquer tipo de entrada pode ser &quot;popped&quot; fora de um array - números, strings, até matrizes aninhadas. <blockquote> <code>var threeArr = [1, 4, 6]; <br> var oneDown = threeArr.pop(); <br> console.log(oneDown); // Returns 6 <br> console.log(threeArr); // Returns [1, 4]</code> </blockquote> </section>

## Instructions
<section id="instructions"> Use a função <code>.pop()</code> para remover o último item de <code>myArray</code> , atribuindo o valor &quot;popped off&quot; ao <code>removedFromMyArray</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>myArray</code> deve conter apenas <code>[[&quot;John&quot;, 23]]</code> .'
    testString: 'assert((function(d){if(d[0][0] == "John" && d[0][1] === 23 && d[1] == undefined){return true;}else{return false;}})(myArray), "<code>myArray</code> should only contain <code>[["John", 23]]</code>.");'
  - text: Use <code>pop()</code> no <code>myArray</code>
    testString: 'assert(/removedFromMyArray\s*=\s*myArray\s*.\s*pop\s*(\s*)/.test(code), "Use <code>pop()</code> on <code>myArray</code>");'
  - text: '<code>removedFromMyArray</code> deve conter apenas <code>[&quot;cat&quot;, 2]</code> .'
    testString: 'assert((function(d){if(d[0] == "cat" && d[1] === 2 && d[2] == undefined){return true;}else{return false;}})(removedFromMyArray), "<code>removedFromMyArray</code> should only contain <code>["cat", 2]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
var removedFromMyArray;

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
