---
id: 579e2a2c335b9d72dd32e05c
title: Slice and Splice
isRequired: true
isBeta: true
challengeType: 5
videoUrl: ''
localeTitle: Rebanada y empalme
---

## Description
<section id="description"> Te dan dos matrices y un índice. Utilizar los métodos de matriz <code>slice</code> y <code>splice</code> para copiar cada elemento de la primera matriz en la segunda matriz, en orden. Comience a insertar elementos en el índice <code>n</code> de la segunda matriz. Devuelve la matriz resultante. Las matrices de entrada deben permanecer iguales después de que se ejecute la función. Recuerda usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> si te atascas. Escribe tu propio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>frankenSplice([1, 2, 3], [4, 5], 1)</code> debe devolver <code>[4, 1, 2, 3, 5]</code> .'
    testString: 'assert.deepEqual(frankenSplice([1, 2, 3], [4, 5], 1), [4, 1, 2, 3, 5], "<code>frankenSplice([1, 2, 3], [4, 5], 1)</code> should return <code>[4, 1, 2, 3, 5]</code>.");'
  - text: '<code>frankenSplice([1, 2], [&quot;a&quot;, &quot;b&quot;], 1)</code> debe devolver <code>[&quot;a&quot;, 1, 2, &quot;b&quot;]</code> .'
    testString: 'assert.deepEqual(frankenSplice(testArr1, testArr2, 1), ["a", 1, 2, "b"], "<code>frankenSplice([1, 2], ["a", "b"], 1)</code> should return <code>["a", 1, 2, "b"]</code>.");'
  - text: '<code>frankenSplice([&quot;claw&quot;, &quot;tentacle&quot;], [&quot;head&quot;, &quot;shoulders&quot;, &quot;knees&quot;, &quot;toes&quot;], 2)</code> debe devolver <code>[&quot;head&quot;, &quot;shoulders&quot;, &quot;claw&quot;, &quot;tentacle&quot;, &quot;knees&quot;, &quot;toes&quot;]</code> .'
    testString: 'assert.deepEqual(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2), ["head", "shoulders", "claw", "tentacle", "knees", "toes"], "<code>frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)</code> should return <code>["head", "shoulders", "claw", "tentacle", "knees", "toes"]</code>.");'
  - text: Todos los elementos de la primera matriz se deben agregar a la segunda matriz en su orden original.
    testString: 'assert.deepEqual(frankenSplice([1, 2, 3, 4], [], 0), [1, 2, 3, 4], "All elements from the first array should be added to the second array in their original order.");'
  - text: La primera matriz debe permanecer igual después de que se ejecute la función.
    testString: 'assert(testArr1[0] === 1 && testArr1[1] === 2, "The first array should remain the same after the function runs.");'
  - text: La segunda matriz debe permanecer igual después de que se ejecute la función.
    testString: 'assert(testArr2[0] === "a" && testArr2[1] === "b", "The second array should remain the same after the function runs.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

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
