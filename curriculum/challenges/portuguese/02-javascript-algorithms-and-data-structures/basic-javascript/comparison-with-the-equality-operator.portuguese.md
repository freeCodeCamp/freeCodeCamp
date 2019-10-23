---
id: 56533eb9ac21ba0edf2244d0
title: Comparison with the Equality Operator
challengeType: 1
videoUrl: ''
localeTitle: Comparação com o operador de igualdade
---

## Description
<section id="description"> Existem muitos <dfn>operadores de comparação</dfn> em JavaScript. Todos esses operadores retornam um valor booleano <code>true</code> ou <code>false</code> . O operador mais básico é o operador de igualdade <code>==</code> . O operador de igualdade compara dois valores e retorna <code>true</code> se eles forem equivalentes ou <code>false</code> se não forem. Observe que a igualdade é diferente da atribuição ( <code>=</code> ), que atribui o valor à direita do operador a uma variável à esquerda. <blockquote> function equalityTest (myVal) { <br> if (myVal == 10) { <br> return &quot;Equal&quot;; <br> } <br> return &quot;Não igual&quot;; <br> } </blockquote> Se <code>myVal</code> for igual a <code>10</code> , o operador de igualdade retornará <code>true</code> , portanto o código nas chaves será executado e a função retornará <code>&quot;Equal&quot;</code> . Caso contrário, a função retornará <code>&quot;Not Equal&quot;</code> . Para que o JavaScript compare dois <code>data types</code> diferentes (por exemplo, <code>numbers</code> e <code>strings</code> ), ele deve converter um tipo em outro. Isso é conhecido como &quot;Type Coerção&quot;. Uma vez feito, no entanto, ele pode comparar os termos da seguinte forma: <blockquote> 1 == 1 // verdadeiro <br> 1 == 2 // false <br> 1 == &#39;1&#39; // verdadeiro <br> &quot;3&quot; == 3 // verdadeiro </blockquote></section>

## Instructions
<section id="instructions"> Adicione o <code>equality operator</code> à linha indicada para que a função retorne &quot;Equal&quot; quando <code>val</code> é equivalente a <code>12</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testEqual(10)</code> deve retornar &quot;não igual&quot;
    testString: 'assert(testEqual(10) === "Not Equal", "<code>testEqual(10)</code> should return "Not Equal"");'
  - text: <code>testEqual(12)</code> deve retornar &quot;Equal&quot;
    testString: 'assert(testEqual(12) === "Equal", "<code>testEqual(12)</code> should return "Equal"");'
  - text: <code>testEqual(&quot;12&quot;)</code> deve retornar &quot;Igual&quot;
    testString: 'assert(testEqual("12") === "Equal", "<code>testEqual("12")</code> should return "Equal"");'
  - text: Você deve usar o operador <code>==</code>
    testString: 'assert(code.match(/==/g) && !code.match(/===/g), "You should use the <code>==</code> operator");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function testEqual(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
