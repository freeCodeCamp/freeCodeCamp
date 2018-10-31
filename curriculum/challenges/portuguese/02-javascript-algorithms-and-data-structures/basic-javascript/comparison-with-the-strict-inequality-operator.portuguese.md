---
id: 56533eb9ac21ba0edf2244d3
title: Comparison with the Strict Inequality Operator
challengeType: 1
videoUrl: ''
localeTitle: Comparação com o Operador Estrito da Desigualdade
---

## Description
<section id="description"> O operador de desigualdade restrita ( <code>!==</code> ) é o oposto lógico do operador de igualdade estrito. Significa &quot;estritamente não igual&quot; e retorna <code>false</code> onde a igualdade estrita retornaria <code>true</code> e <em>vice-versa</em> . A desigualdade estrita não converte tipos de dados. <strong>Exemplos</strong> <blockquote> 3! == 3 // false <br> 3! == &#39;3&#39; // true <br> 4! == 3 // verdadeiro </blockquote></section>

## Instructions
<section id="instructions"> Adicione o <code>strict inequality operator</code> à instrução <code>if</code> para que a função retorne &quot;Not Equal&quot; quando <code>val</code> não for estritamente igual a <code>17</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testStrictNotEqual(17)</code> deve retornar &quot;Igual&quot;
    testString: 'assert(testStrictNotEqual(17) === "Equal", "<code>testStrictNotEqual(17)</code> should return "Equal"");'
  - text: <code>testStrictNotEqual(&quot;17&quot;)</code> deve retornar &quot;não igual&quot;
    testString: 'assert(testStrictNotEqual("17") === "Not Equal", "<code>testStrictNotEqual("17")</code> should return "Not Equal"");'
  - text: <code>testStrictNotEqual(12)</code> deve retornar &quot;não igual&quot;
    testString: 'assert(testStrictNotEqual(12) === "Not Equal", "<code>testStrictNotEqual(12)</code> should return "Not Equal"");'
  - text: <code>testStrictNotEqual(&quot;bob&quot;)</code> deve retornar &quot;não igual&quot;
    testString: 'assert(testStrictNotEqual("bob") === "Not Equal", "<code>testStrictNotEqual("bob")</code> should return "Not Equal"");'
  - text: Você deve usar o operador <code>!==</code>
    testString: 'assert(code.match(/(val\s*!==\s*\d+)|(\d+\s*!==\s*val)/g).length > 0, "You should use the <code>!==</code> operator");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function testStrictNotEqual(val) {
  // Only Change Code Below this Line

  if (val) {

  // Only Change Code Above this Line

    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testStrictNotEqual(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
