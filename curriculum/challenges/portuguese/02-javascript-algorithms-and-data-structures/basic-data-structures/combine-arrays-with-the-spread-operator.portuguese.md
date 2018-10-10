---
id: 587d7b7b367417b2b2512b17
title: Combine Arrays with the Spread Operator
challengeType: 1
videoUrl: ''
localeTitle: Combine Arrays com o Operador de Spread
---

## Description
<section id="description"> Outra grande vantagem do operador de <dfn>propagação</dfn> é a capacidade de combinar matrizes ou de inserir todos os elementos de um array em outro, em qualquer índice. Com sintaxes mais tradicionais, podemos concatenar matrizes, mas isso só nos permite combinar matrizes no final de um, e no início de outro. A sintaxe de propagação torna a seguinte operação extremamente simples: <blockquote> deixe thisArray = [&#39;sábio&#39;, &#39;alecrim&#39;, &#39;salsa&#39;, &#39;tomilho&#39;]; <br><br> deixe thatArray = [&#39;manjericão&#39;, &#39;coentro&#39;, ... thisArray, &#39;coentro&#39;]; <br> // thatArray agora é igual a [&#39;manjericão&#39;, &#39;coentro&#39;, &#39;sálvia&#39;, &#39;alecrim&#39;, &#39;salsa&#39;, &#39;tomilho&#39;, &#39;coentro&#39;] </blockquote> Usando a sintaxe de propagação, acabamos de obter uma operação que teria sido mais complexa e mais detalhada se tivéssemos usado métodos tradicionais. </section>

## Instructions
<section id="instructions"> Definimos uma função <code>spreadOut</code> que retorna a <code>sentence</code> variável, modifica a função usando o operador <dfn>spread</dfn> para que ela retorne a matriz <code>[&#39;learning&#39;, &#39;to&#39;, &#39;code&#39;, &#39;is&#39;, &#39;fun&#39;]</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>spreadOut</code> deve retornar <code>[&quot;learning&quot;, &quot;to&quot;, &quot;code&quot;, &quot;is&quot;, &quot;fun&quot;]</code>'
    testString: 'assert.deepEqual(spreadOut(), ["learning", "to", "code", "is", "fun"], "<code>spreadOut</code> should return <code>["learning", "to", "code", "is", "fun"]</code>");'
  - text: A função <code>spreadOut</code> deve utilizar a sintaxe de propagação
    testString: 'assert.notStrictEqual(spreadOut.toString().search(/[...]/), -1, "The <code>spreadOut</code> function should utilize spread syntax");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence; // change this line
  return sentence;
}

// do not change code below this line
console.log(spreadOut());

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
