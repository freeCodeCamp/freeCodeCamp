---
id: 56533eb9ac21ba0edf2244d7
title: Comparison with the Less Than Or Equal To Operator
challengeType: 1
videoUrl: ''
localeTitle: Comparação com o menor ou igual ao operador
---

## Description
<section id="description"> O operador <code>less than or equal to</code> ( <code>&lt;=</code> ) compara os valores de dois números. Se o número à esquerda for menor ou igual ao número à direita, ele retornará <code>true</code> . Se o número à esquerda for maior que o número à direita, ele retornará <code>false</code> . Como o operador de igualdade, <code>less than or equal to</code> converte tipos de dados. <strong>Exemplos</strong> <blockquote> 4 &lt;= 5 // verdadeiro <br> &#39;7&#39; &lt;= 7 // verdadeiro <br> 5 &lt;= 5 // verdadeiro <br> 3 &lt;= 2 // falso <br> &#39;8&#39; &lt;= 4 // falso </blockquote></section>

## Instructions
<section id="instructions"> Adicione o operador <code>less than or equal to</code> das linhas indicadas para que as instruções de retorno façam sentido. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testLessOrEqual(0)</code> deve retornar &quot;Menor ou igual a 12&quot;
    testString: 'assert(testLessOrEqual(0) === "Smaller Than or Equal to 12", "<code>testLessOrEqual(0)</code> should return "Smaller Than or Equal to 12"");'
  - text: <code>testLessOrEqual(11)</code> deve retornar &quot;Menor ou igual a 12&quot;
    testString: 'assert(testLessOrEqual(11) === "Smaller Than or Equal to 12", "<code>testLessOrEqual(11)</code> should return "Smaller Than or Equal to 12"");'
  - text: <code>testLessOrEqual(12)</code> deve retornar &quot;Menor ou igual a 12&quot;
    testString: 'assert(testLessOrEqual(12) === "Smaller Than or Equal to 12", "<code>testLessOrEqual(12)</code> should return "Smaller Than or Equal to 12"");'
  - text: <code>testLessOrEqual(23)</code> deve retornar &quot;Menor ou igual a 24&quot;
    testString: 'assert(testLessOrEqual(23) === "Smaller Than or Equal to 24", "<code>testLessOrEqual(23)</code> should return "Smaller Than or Equal to 24"");'
  - text: <code>testLessOrEqual(24)</code> deve retornar &quot;Menor ou igual a 24&quot;
    testString: 'assert(testLessOrEqual(24) === "Smaller Than or Equal to 24", "<code>testLessOrEqual(24)</code> should return "Smaller Than or Equal to 24"");'
  - text: <code>testLessOrEqual(25)</code> deve retornar &quot;mais de 24&quot;
    testString: 'assert(testLessOrEqual(25) === "More Than 24", "<code>testLessOrEqual(25)</code> should return "More Than 24"");'
  - text: <code>testLessOrEqual(55)</code> deve retornar &quot;mais de 24&quot;
    testString: 'assert(testLessOrEqual(55) === "More Than 24", "<code>testLessOrEqual(55)</code> should return "More Than 24"");'
  - text: Você deve usar o operador <code>&lt;=</code> pelo menos duas vezes
    testString: 'assert(code.match(/val\s*<=\s*("|")*\d+("|")*/g).length > 1, "You should use the <code>&lt;=</code> operator at least twice");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testLessOrEqual(val) {
  if (val) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

// Change this value to test
testLessOrEqual(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
