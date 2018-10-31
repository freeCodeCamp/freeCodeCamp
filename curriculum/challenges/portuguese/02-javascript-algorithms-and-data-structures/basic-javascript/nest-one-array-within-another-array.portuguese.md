---
id: cf1111c1c11feddfaeb7bdef
title: Nest one Array within Another Array
challengeType: 1
videoUrl: ''
localeTitle: Aninhar uma matriz dentro de outra matriz
---

## Description
<section id="description"> Você também pode aninhar matrizes dentro de outras matrizes, como este: <code>[[&quot;Bulls&quot;, 23], [&quot;White Sox&quot;, 45]]</code> . Isso também é chamado <dfn>de matriz multidimensional <dfn>.</dfn></dfn> </section>

## Instructions
<section id="instructions"> Crie uma matriz aninhada chamada <code>myArray</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myArray</code> deve ter pelo menos um array aninhado em outro array.
    testString: 'assert(Array.isArray(myArray) && myArray.some(Array.isArray), "<code>myArray</code> should have at least one array nested within another array.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = [["the universe", 42], ["everything", 101010]];

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
