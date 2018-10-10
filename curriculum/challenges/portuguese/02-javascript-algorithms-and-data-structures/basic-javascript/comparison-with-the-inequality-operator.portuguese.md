---
id: 56533eb9ac21ba0edf2244d2
title: Comparison with the Inequality Operator
challengeType: 1
videoUrl: ''
localeTitle: Comparação com o operador Inequality
---

## Description
<section id="description"> O operador de desigualdade ( <code>!=</code> ) É o oposto do operador de igualdade. Significa &quot;Não igual&quot; e retorna <code>false</code> onde a igualdade retornaria <code>true</code> e <em>vice-versa</em> . Como o operador de igualdade, o operador de desigualdade converterá tipos de dados de valores durante a comparação. <strong>Exemplos</strong> <blockquote> 1! = 2 // verdadeiro <br> 1! = &quot;1&quot; // false <br> 1! = &#39;1&#39; // false <br> 1! = Verdadeiro // falso <br> 0! = Falso // falso </blockquote></section>

## Instructions
<section id="instructions"> Adicione o operador de desigualdade <code>!=</code> Na instrução <code>if</code> para que a função retorne &quot;Not Equal&quot; quando <code>val</code> não for equivalente a <code>99</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testNotEqual(99)</code> deve retornar &quot;igual&quot;
    testString: 'assert(testNotEqual(99) === "Equal", "<code>testNotEqual(99)</code> should return "Equal"");'
  - text: <code>testNotEqual(&quot;99&quot;)</code> deve retornar &quot;igual&quot;
    testString: 'assert(testNotEqual("99") === "Equal", "<code>testNotEqual("99")</code> should return "Equal"");'
  - text: <code>testNotEqual(12)</code> deve retornar &quot;não igual&quot;
    testString: 'assert(testNotEqual(12) === "Not Equal", "<code>testNotEqual(12)</code> should return "Not Equal"");'
  - text: <code>testNotEqual(&quot;12&quot;)</code> deve retornar &quot;não igual&quot;
    testString: 'assert(testNotEqual("12") === "Not Equal", "<code>testNotEqual("12")</code> should return "Not Equal"");'
  - text: <code>testNotEqual(&quot;bob&quot;)</code> deve retornar &quot;não igual&quot;
    testString: 'assert(testNotEqual("bob") === "Not Equal", "<code>testNotEqual("bob")</code> should return "Not Equal"");'
  - text: Você deve usar o operador <code>!=</code>
    testString: 'assert(code.match(/(?!!==)!=/), "You should use the <code>!=</code> operator");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function testNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testNotEqual(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
