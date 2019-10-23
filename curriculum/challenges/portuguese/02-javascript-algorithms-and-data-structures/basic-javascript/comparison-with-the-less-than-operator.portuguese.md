---
id: 56533eb9ac21ba0edf2244d6
title: Comparison with the Less Than Operator
challengeType: 1
videoUrl: ''
localeTitle: Comparação com o menor que o operador
---

## Description
<section id="description"> O operador <dfn>menor que</dfn> ( <code>&lt;</code> ) compara os valores de dois números. Se o número à esquerda for menor que o número à direita, ele retornará <code>true</code> . Caso contrário, retorna <code>false</code> . Como o operador de igualdade, o operador <dfn>menor que</dfn> converte tipos de dados durante a comparação. <strong>Exemplos</strong> <blockquote> 2 &lt;5 // verdadeiro <br> &#39;3&#39; &lt;7 // verdadeiro <br> 5 &lt;5 // falso <br> 3 &lt;2 // falso <br> &#39;8&#39; &lt;4 // falso </blockquote></section>

## Instructions
<section id="instructions"> Adicione o operador <code>less than</code> às linhas indicadas para que as instruções de retorno façam sentido. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testLessThan(0)</code> deve retornar &quot;Abaixo de 25&quot;
    testString: 'assert(testLessThan(0) === "Under 25", "<code>testLessThan(0)</code> should return "Under 25"");'
  - text: <code>testLessThan(24)</code> deve retornar &quot;Abaixo de 25&quot;
    testString: 'assert(testLessThan(24) === "Under 25", "<code>testLessThan(24)</code> should return "Under 25"");'
  - text: <code>testLessThan(25)</code> deve retornar &quot;Under 55&quot;
    testString: 'assert(testLessThan(25) === "Under 55", "<code>testLessThan(25)</code> should return "Under 55"");'
  - text: <code>testLessThan(54)</code> deve retornar &quot;Under 55&quot;
    testString: 'assert(testLessThan(54) === "Under 55", "<code>testLessThan(54)</code> should return "Under 55"");'
  - text: <code>testLessThan(55)</code> deve retornar &quot;55 ou mais&quot;
    testString: 'assert(testLessThan(55) === "55 or Over", "<code>testLessThan(55)</code> should return "55 or Over"");'
  - text: <code>testLessThan(99)</code> deve retornar &quot;55 ou mais&quot;
    testString: 'assert(testLessThan(99) === "55 or Over", "<code>testLessThan(99)</code> should return "55 or Over"");'
  - text: Você deve usar o operador <code>&lt;</code> pelo menos duas vezes
    testString: 'assert(code.match(/val\s*<\s*("|")*\d+("|")*/g).length > 1, "You should use the <code>&lt;</code> operator at least twice");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testLessThan(val) {
  if (val) {  // Change this line
    return "Under 25";
  }

  if (val) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

// Change this value to test
testLessThan(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
