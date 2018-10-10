---
id: 56105e7b514f539506016a5e
title: Count Backwards With a For Loop
challengeType: 1
videoUrl: ''
localeTitle: Conte para trás com um loop for
---

## Description
<section id="description"> Um loop for também pode contar para trás, desde que possamos definir as condições certas. Para contar para trás por dois, precisaremos alterar nossa <code>initialization</code> , <code>condition</code> e <code>final-expression</code> . Vamos começar em <code>i = 10</code> e fazer um loop enquanto <code>i &gt; 0</code> . Diminuiremos <code>i</code> por 2 cada loop com <code>i -= 2</code> . <blockquote> var ourArray = []; <br> para (var i = 10; i&gt; 0; i- = 2) { <br> ourArray.push (i); <br> } </blockquote> <code>ourArray</code> agora conterá <code>[10,8,6,4,2]</code> . Vamos alterar nossa <code>initialization</code> e <code>final-expression</code> para que possamos contar para trás por dois por números ímpares. </section>

## Instructions
<section id="instructions"> Empurre os números ímpares de 9 a 1 para <code>myArray</code> usando um loop <code>for</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Você deve estar usando um <code>for</code> loop para isso.
    testString: 'assert(code.match(/for\s*\(/g).length > 1, "You should be using a <code>for</code> loop for this.");'
  - text: Você deve estar usando o método de matriz <code>push</code> .
    testString: 'assert(code.match(/myArray.push/), "You should be using the array method <code>push</code>.");'
  - text: '<code>myArray</code> deve ser igual a <code>[9,7,5,3,1]</code> .'
    testString: 'assert.deepEqual(myArray, [9,7,5,3,1], "<code>myArray</code> should equal <code>[9,7,5,3,1]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
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
