---
id: 56104e9e514f539506016a5c
title: Iterate Odd Numbers With a For Loop
challengeType: 1
videoUrl: ''
localeTitle: Iterar números ímpares com um loop for
---

## Description
<section id="description"> Para laços não tem que iterar um de cada vez. Ao alterar nossa <code>final-expression</code> , podemos contar por números pares. Começaremos em <code>i = 0</code> e em loop enquanto <code>i &lt; 10</code> . Vamos incrementar <code>i</code> por 2 cada loop com <code>i += 2</code> . <blockquote> var ourArray = []; <br> para (var i = 0; i &lt;10; i + = 2) { <br> ourArray.push (i); <br> } </blockquote> <code>ourArray</code> irá agora conter <code>[0,2,4,6,8]</code> . Vamos mudar a nossa <code>initialization</code> para que possamos contar por números ímpares. </section>

## Instructions
<section id="instructions"> Empurre os números ímpares de 1 a 9 para <code>myArray</code> usando um loop <code>for</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Você deve estar usando um <code>for</code> loop para isso.
    testString: 'assert(code.match(/for\s*\(/g).length > 1, "You should be using a <code>for</code> loop for this.");'
  - text: '<code>myArray</code> deve ser igual a <code>[1,3,5,7,9]</code> .'
    testString: 'assert.deepEqual(myArray, [1,3,5,7,9], "<code>myArray</code> should equal <code>[1,3,5,7,9]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.

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
