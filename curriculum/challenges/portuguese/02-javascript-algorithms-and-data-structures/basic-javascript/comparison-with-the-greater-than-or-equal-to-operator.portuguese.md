---
id: 56533eb9ac21ba0edf2244d5
title: Comparison with the Greater Than Or Equal To Operator
challengeType: 1
videoUrl: ''
localeTitle: Comparação com o maior que ou igual ao operador
---

## Description
<section id="description"> O <code>greater than or equal to</code> operador ( <code>&gt;=</code> ) compara os valores de dois números. Se o número à esquerda for maior ou igual ao número à direita, ele retornará <code>true</code> . Caso contrário, retorna <code>false</code> . Como o operador de igualdade, <code>greater than or equal to</code> operador converterá os tipos de dados durante a comparação. <strong>Exemplos</strong> <blockquote> 6&gt; = 6 // verdadeiro <br> 7&gt; = &#39;3&#39; // verdadeiro <br> 2&gt; = 3 // falso <br> &#39;7&#39;&gt; = 9 // falso </blockquote></section>

## Instructions
<section id="instructions"> Adicione o operador <code>greater than or equal to</code> às linhas indicadas para que as instruções de retorno façam sentido. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testGreaterOrEqual(0)</code> deve retornar &quot;Menor que 10&quot;
    testString: 'assert(testGreaterOrEqual(0) === "Less than 10", "<code>testGreaterOrEqual(0)</code> should return "Less than 10"");'
  - text: <code>testGreaterOrEqual(9)</code> deve retornar &quot;Menor que 10&quot;
    testString: 'assert(testGreaterOrEqual(9) === "Less than 10", "<code>testGreaterOrEqual(9)</code> should return "Less than 10"");'
  - text: <code>testGreaterOrEqual(10)</code> deve retornar &quot;10 ou mais&quot;
    testString: 'assert(testGreaterOrEqual(10) === "10 or Over", "<code>testGreaterOrEqual(10)</code> should return "10 or Over"");'
  - text: <code>testGreaterOrEqual(11)</code> deve retornar &quot;10 ou mais&quot;
    testString: 'assert(testGreaterOrEqual(11) === "10 or Over", "<code>testGreaterOrEqual(11)</code> should return "10 or Over"");'
  - text: <code>testGreaterOrEqual(19)</code> deve retornar &quot;10 ou mais&quot;
    testString: 'assert(testGreaterOrEqual(19) === "10 or Over", "<code>testGreaterOrEqual(19)</code> should return "10 or Over"");'
  - text: <code>testGreaterOrEqual(100)</code> deve retornar &quot;20 ou mais&quot;
    testString: 'assert(testGreaterOrEqual(100) === "20 or Over", "<code>testGreaterOrEqual(100)</code> should return "20 or Over"");'
  - text: <code>testGreaterOrEqual(21)</code> deve retornar &quot;20 ou mais&quot;
    testString: 'assert(testGreaterOrEqual(21) === "20 or Over", "<code>testGreaterOrEqual(21)</code> should return "20 or Over"");'
  - text: Você deve usar o operador <code>&gt;=</code> pelo menos duas vezes
    testString: 'assert(code.match(/val\s*>=\s*("|")*\d+("|")*/g).length > 1, "You should use the <code>&gt;=</code> operator at least twice");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testGreaterOrEqual(val) {
  if (val) {  // Change this line
    return "20 or Over";
  }

  if (val) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

// Change this value to test
testGreaterOrEqual(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
