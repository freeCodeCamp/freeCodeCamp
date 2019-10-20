---
id: 587d7b7b367417b2b2512b13
title: Copy an Array with the Spread Operator
challengeType: 1
videoUrl: ''
localeTitle: Copiar uma matriz com o operador de propagação
---

## Description
<section id="description"> Enquanto <code>slice()</code> nos permite ser seletivo sobre quais elementos de um array copiar, entre várias outras tarefas úteis, o novo <dfn>operador spread</dfn> do ES6 nos permite copiar facilmente <em>todos</em> os elementos de um array, em ordem, com uma sintaxe simples e altamente legível. A sintaxe de propagação simplesmente se parece com isso: <code>...</code> Na prática, podemos usar o operador de propagação para copiar uma matriz da seguinte forma: <blockquote> let thisArray = [verdadeiro, verdadeiro, indefinido, falso, nulo]; <br> deixe thatArray = [... thisArray]; <br> // thatArray é igual a [verdadeiro, verdadeiro, indefinido, falso, nulo] <br> // thisArray permanece inalterado e é idêntico a thatArray </blockquote></section>

## Instructions
<section id="instructions"> Nós definimos uma função, <code>copyMachine</code> que pega <code>arr</code> (um array) e <code>num</code> (um número) como argumentos. A função deve retornar uma nova matriz composta de um <code>num</code> cópias de <code>arr</code> . Nós fizemos a maior parte do trabalho para você, mas ainda não funciona bem. Modifique a função usando a sintaxe de propagação para que ela funcione corretamente (dica: outro método que já abordamos pode ser útil aqui!). </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>copyMachine([true, false, true], 2)</code> deve retornar <code>[[true, false, true], [true, false, true]]</code>'
    testString: 'assert.deepEqual(copyMachine([true, false, true], 2), [[true, false, true], [true, false, true]], "<code>copyMachine([true, false, true], 2)</code> should return <code>[[true, false, true], [true, false, true]]</code>");'
  - text: '<code>copyMachine([1, 2, 3], 5)</code> deve retornar <code>[[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]</code>'
    testString: 'assert.deepEqual(copyMachine([1, 2, 3], 5), [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]], "<code>copyMachine([1, 2, 3], 5)</code> should return <code>[[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]</code>");'
  - text: '<code>copyMachine([true, true, null], 1)</code> deve retornar <code>[[true, true, null]]</code>'
    testString: 'assert.deepEqual(copyMachine([true, true, null], 1), [[true, true, null]], "<code>copyMachine([true, true, null], 1)</code> should return <code>[[true, true, null]]</code>");'
  - text: '<code>copyMachine([&quot;it works&quot;], 3)</code> deve retornar <code>[[&quot;it works&quot;], [&quot;it works&quot;], [&quot;it works&quot;]]</code>'
    testString: 'assert.deepEqual(copyMachine(["it works"], 3), [["it works"], ["it works"], ["it works"]], "<code>copyMachine(["it works"], 3)</code> should return <code>[["it works"], ["it works"], ["it works"]]</code>");'
  - text: A função <code>copyMachine</code> deve utilizar o <code>spread operator</code> com array <code>arr</code>
    testString: 'assert.notStrictEqual(copyMachine.toString().indexOf(".concat(_toConsumableArray(arr))"), -1, "The <code>copyMachine</code> function should utilize the <code>spread operator</code> with array <code>arr</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // change code below this line

    // change code above this line
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
