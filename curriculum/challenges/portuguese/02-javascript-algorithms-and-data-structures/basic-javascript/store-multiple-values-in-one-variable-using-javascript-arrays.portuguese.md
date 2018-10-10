---
id: bd7993c9c69feddfaeb8bdef
title: Store Multiple Values in one Variable using JavaScript Arrays
challengeType: 1
videoUrl: ''
localeTitle: Armazenar vários valores em uma variável usando matrizes JavaScript
---

## Description
<section id="description"> Com variáveis ​​de <code>array</code> JavaScript, podemos armazenar vários dados em um só lugar. Você inicia uma declaração de matriz com um colchete de abertura, termina com um colchete de fechamento e coloca uma vírgula entre cada entrada, assim: <code>var sandwich = [&quot;peanut butter&quot;, &quot;jelly&quot;, &quot;bread&quot;]</code> . </section>

## Instructions
<section id="instructions"> Modifique o novo array <code>myArray</code> para que contenha uma <code>string</code> e um <code>number</code> (nessa ordem). <strong>Sugestão</strong> <br> Consulte o código de exemplo no editor de texto, se você ficar preso. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myArray</code> deve ser um <code>array</code> .
    testString: 'assert(typeof myArray == "object", "<code>myArray</code> should be an <code>array</code>.");'
  - text: O primeiro item no <code>myArray</code> deve ser uma <code>string</code> .
    testString: 'assert(typeof myArray[0] !== "undefined" && typeof myArray[0] == "string", "The first item in <code>myArray</code> should be a <code>string</code>.");'
  - text: O segundo item no <code>myArray</code> deve ser um <code>number</code> .
    testString: 'assert(typeof myArray[1] !== "undefined" && typeof myArray[1] == "number", "The second item in <code>myArray</code> should be a <code>number</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = ["John", 23];

// Only change code below this line.
var myArray = [];

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
