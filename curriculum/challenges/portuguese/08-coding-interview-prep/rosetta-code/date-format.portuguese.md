---
title: Date format
id: 59669d08d75b60482359409f
challengeType: 5
videoUrl: ''
localeTitle: Formato de data
---

## Description
<section id="description"> Tarefa: <p> Retornar uma matriz com a data atual nos formatos: </p><p> - 2007-11-23 e </p><p> - domingo, 23 de novembro de 2007 </p><p> Exemplo de saída: <code>[&#39;2007-11-23&#39;, &#39;Sunday, November 23, 2007&#39;]</code> </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getDateFormats</code> é uma função.
    testString: 'assert(typeof getDateFormats === "function", "<code>getDateFormats</code> is a function.");'
  - text: Deve retornar um objeto.
    testString: 'assert(typeof getDateFormats() === "object", "Should return an object.");'
  - text: Devolveu um array com 2 elementos.
    testString: 'assert(getDateFormats().length === 2, "Should returned an array with 2 elements.");'
  - text: Deve devolver a data correta no formato correto
    testString: 'assert.deepEqual(getDateFormats(), dates, equalsMessage);'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function getDateFormats () {
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
