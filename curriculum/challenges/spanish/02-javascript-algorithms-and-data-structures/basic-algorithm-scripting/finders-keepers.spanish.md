---
id: a6e40f1041b06c996f7b2406
title: Finders Keepers
localeTitle: Buscadores guardianes
isRequired: true
challengeType: 5
---

## Description
<section id='description'> 
Cree una función que examine una matriz (primer argumento) y devuelva el primer elemento de la matriz que pase una prueba de verdad (segundo argumento). Si ningún elemento pasa la prueba, devuelva indefinido. 
Recuerda usar <a href='http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> si te atascas. Trate de emparejar el programa. Escribe tu propio código. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: &#39; <code>findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })</code> debe devolver 8.&#39;
    testString: 'assert.strictEqual(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }), 8, "<code>findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })</code> should return 8.");'
  - text: &#39; <code>findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })</code> debe devolver undefined.&#39;
    testString: 'assert.strictEqual(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }), undefined, "<code>findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })</code> should return undefined.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function findElement(arr, func) {
  let num = 0;
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function findElement(arr, func) {
  let num;

  arr.some(e => {
    if (func(e)) {
      num = e;
      return true;
    }
  });

  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

```

</section>
