---
title: 100 doors
id: 594810f028c0303b75339acb
challengeType: 5
videoUrl: ''
localeTitle: 100 portas
---

## Description
<section id="description"><p> Existem 100 portas em uma fila que estão todas fechadas inicialmente. Você faz 100 passes pelas portas. Na primeira vez, visite cada porta e &#39;ative&#39; a porta (se a porta estiver fechada, abra-a; se estiver aberta, feche-a). Na segunda vez, visite apenas todas as segundas portas (ou seja, porta nº 2, nº 4, nº 6, ...) e alterne-a. Na terceira vez, visite todas as 3as portas (por exemplo, porta # 3, # 6, # 9, ...), etc., até visitar apenas a 100ª porta. </p><p> Implemente uma função para determinar o estado das portas após a última passagem. Retorne o resultado final em uma matriz, com apenas o número da porta incluído na matriz, se estiver aberto. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getFinalOpenedDoors</code> é uma função.
    testString: 'assert(typeof getFinalOpenedDoors === "function", "<code>getFinalOpenedDoors</code> is a function.");'
  - text: <code>getFinalOpenedDoors</code> deve retornar uma matriz.
    testString: 'assert(Array.isArray(getFinalOpenedDoors(100)), "<code>getFinalOpenedDoors</code> should return an array.");'
  - text: <code>getFinalOpenedDoors</code> não produziu os resultados corretos.
    testString: 'assert.deepEqual(getFinalOpenedDoors(100), solution, "<code>getFinalOpenedDoors</code> did not produce the correct results.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function getFinalOpenedDoors (numDoors) {
  // Good luck!
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
