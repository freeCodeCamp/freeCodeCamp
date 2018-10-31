---
id: 56533eb9ac21ba0edf2244d4
title: Comparison with the Greater Than Operator
challengeType: 1
videoUrl: ''
localeTitle: Comparação com o operador Maior que
---

## Description
<section id="description"> O operador maior que ( <code>&gt;</code> ) compara os valores de dois números. Se o número à esquerda for maior que o número à direita, ele retornará <code>true</code> . Caso contrário, retorna <code>false</code> . Como o operador de igualdade, maior que o operador converterá tipos de dados de valores durante a comparação. <strong>Exemplos</strong> <blockquote> 5&gt; 3 // verdadeiro <br> 7&gt; &#39;3&#39; // verdadeiro <br> 2&gt; 3 // falso <br> &#39;1&#39;&gt; 9 // falso </blockquote></section>

## Instructions
<section id="instructions"> Adicione o operador <code>greater than</code> às linhas indicadas para que as instruções de retorno façam sentido. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testGreaterThan(0)</code> deve retornar &quot;10 ou menos&quot;
    testString: 'assert(testGreaterThan(0) === "10 or Under", "<code>testGreaterThan(0)</code> should return "10 or Under"");'
  - text: <code>testGreaterThan(10)</code> deve retornar &quot;10 ou menos&quot;
    testString: 'assert(testGreaterThan(10) === "10 or Under", "<code>testGreaterThan(10)</code> should return "10 or Under"");'
  - text: <code>testGreaterThan(11)</code> deve retornar &quot;Mais de 10&quot;
    testString: 'assert(testGreaterThan(11) === "Over 10", "<code>testGreaterThan(11)</code> should return "Over 10"");'
  - text: <code>testGreaterThan(99)</code> deve retornar &quot;Mais de 10&quot;
    testString: 'assert(testGreaterThan(99) === "Over 10", "<code>testGreaterThan(99)</code> should return "Over 10"");'
  - text: <code>testGreaterThan(100)</code> deve retornar &quot;Mais de 10&quot;
    testString: 'assert(testGreaterThan(100) === "Over 10", "<code>testGreaterThan(100)</code> should return "Over 10"");'
  - text: <code>testGreaterThan(101)</code> deve retornar &quot;Mais de 100&quot;
    testString: 'assert(testGreaterThan(101) === "Over 100", "<code>testGreaterThan(101)</code> should return "Over 100"");'
  - text: <code>testGreaterThan(150)</code> deve retornar &quot;Mais de 100&quot;
    testString: 'assert(testGreaterThan(150) === "Over 100", "<code>testGreaterThan(150)</code> should return "Over 100"");'
  - text: Você deve usar o operador <code>&gt;</code> pelo menos duas vezes
    testString: 'assert(code.match(/val\s*>\s*("|")*\d+("|")*/g).length > 1, "You should use the <code>&gt;</code> operator at least twice");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testGreaterThan(val) {
  if (val) {  // Change this line
    return "Over 100";
  }

  if (val) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

// Change this value to test
testGreaterThan(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
