---
id: 56bbb991ad1ed5201cd392cd
title: Manipulate Arrays With shift()
challengeType: 1
videoUrl: ''
localeTitle: Manipular Matrizes Com Deslocamento ()
---

## Description
<section id="description"> <code>pop()</code> sempre remove o último elemento de um array. E se você quiser remover o primeiro? É aí que <code>.shift()</code> . Funciona exatamente como o <code>.pop()</code> , exceto que ele remove o primeiro elemento em vez do último. </section>

## Instructions
<section id="instructions"> Use a função <code>.shift()</code> para remover o primeiro item de <code>myArray</code> , atribuindo o valor &quot; <code>removedFromMyArray</code> off&quot; ao <code>removedFromMyArray</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>myArray</code> agora deve ser igual a <code>[[&quot;dog&quot;, 3]]</code> .'
    testString: 'assert((function(d){if(d[0][0] == "dog" && d[0][1] === 3 && d[1] == undefined){return true;}else{return false;}})(myArray), "<code>myArray</code> should now equal <code>[["dog", 3]]</code>.");'
  - text: '<code>removedFromMyArray</code> deve conter <code>[&quot;John&quot;, 23]</code> .'
    testString: 'assert((function(d){if(d[0] == "John" && d[1] === 23 && typeof removedFromMyArray === "object"){return true;}else{return false;}})(removedFromMyArray), "<code>removedFromMyArray</code> should contain <code>["John", 23]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// Setup
var myArray = [["John", 23], ["dog", 3]];

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
