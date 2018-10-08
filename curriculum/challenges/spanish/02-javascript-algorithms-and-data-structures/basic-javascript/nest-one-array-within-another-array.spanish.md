---
id: cf1111c1c11feddfaeb7bdef
title: Nest one Array within Another Array
localeTitle: Anidar una matriz dentro de otra matriz
challengeType: 1
---

## Description
<section id='description'> 
También puede anidar matrices dentro de otras matrices, como esta: <code>[[&quot;Bulls&quot;, 23], [&quot;White Sox&quot;, 45]]</code> . Esto también se llama una <dfn>matriz multidimensional <dfn>. <code>0</code></dfn></dfn> </section>

## Instructions
<section id='instructions'> 
Crea una matriz anidada llamada <code>myArray</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myArray</code> debe tener al menos una matriz anidada dentro de otra matriz.
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
var myArray = [[1,2,3]];
```

</section>
