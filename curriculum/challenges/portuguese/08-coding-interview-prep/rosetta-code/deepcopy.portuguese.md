---
title: Deepcopy
id: 596a8888ab7c01048de257d5
challengeType: 5
videoUrl: ''
localeTitle: Deepcopy
---

## Description
<section id="description"> Tarefa: <p> Escreva uma função que retorna uma cópia profunda de um determinado objeto. </p><p> A cópia não deve ser o mesmo objeto que foi fornecido. </p><p> Esta tarefa não testará para: </p> Objetos com propriedades que são funções Objetos de data ou objeto com propriedades que são Objetos de data RegEx ou objeto com propriedades que são objetos RegEx Cópia de protótipo </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>deepcopy</code> deve ser uma função.
    testString: 'assert(typeof deepcopy === "function", "<code>deepcopy</code> should be a function.");'
  - text: '<code>deepcopy({test: &quot;test&quot;})</code> deve retornar um objeto.'
    testString: 'assert(typeof deepcopy(obj1) === "object", "<code>deepcopy({test: "test"})</code> should return an object.");'
  - text: Não deve retornar o mesmo objeto que foi fornecido.
    testString: 'assert(deepcopy(obj2) != obj2, "Should not return the same object that was provided.");'
  - text: 'Quando passado um objeto contendo uma matriz, deve retornar uma cópia profunda do objeto.'
    testString: 'assert.deepEqual(deepcopy(obj2), obj2, "When passed an object containing an array, should return a deep copy of the object.");'
  - text: 'Quando passado um objeto contendo outro objeto, deve retornar uma cópia profunda do objeto.'
    testString: 'assert.deepEqual(deepcopy(obj3), obj3, "When passed an object containing another object, should return a deep copy of the object.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function deepcopy (obj) {
  // Good luck!
  return true;
}

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
