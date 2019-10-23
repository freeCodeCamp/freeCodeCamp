---
id: cf1111c1c12feddfaeb3bdef
title: Use Conditional Logic with If Statements
challengeType: 1
videoUrl: ''
localeTitle: Use Lógica Condicional com Declarações If
---

## Description
<section id="description"> <code>If</code> instruções são usadas para tomar decisões no código. A palavra-chave <code>if</code> diz ao JavaScript para executar o código nas chaves em determinadas condições, definidas entre parênteses. Essas condições são conhecidas como condições <code>Boolean</code> e podem ser <code>true</code> ou <code>false</code> . Quando a condição é avaliada como <code>true</code> , o programa executa a instrução dentro das chaves. Quando a condição booleana é avaliada como <code>false</code> , a instrução dentro das chaves não será executada. <strong>Pseudo-código</strong> <blockquote> if ( <i>condição é verdadeira</i> ) { <br> <i>instrução é executada</i> <br> } </blockquote> <strong>Exemplo</strong> <blockquote> teste de função (myCondition) { <br> if (myCondition) { <br> return &quot;Foi verdade&quot;; <br> } <br> return &quot;Foi falso&quot;; <br> } <br> teste (verdadeiro); // retorna &quot;Foi verdade&quot; <br> teste (falso); // retorna &quot;foi falso&quot; </blockquote> Quando o <code>test</code> é chamado com um valor <code>true</code> , a instrução <code>if</code> avalia <code>myCondition</code> para ver se é <code>true</code> ou não. Como é <code>true</code> , a função retorna <code>&quot;It was true&quot;</code> . Quando chamamos <code>test</code> com um valor <code>false</code> , <code>myCondition</code> <em>não</em> é <code>true</code> e a instrução nas chaves não é executada e a função retorna <code>&quot;It was false&quot;</code> is <code>&quot;It was false&quot;</code> . </section>

## Instructions
<section id="instructions"> Crie uma declaração <code>if</code> dentro da função para retornar <code>&quot;Yes, that was true&quot;</code> se o parâmetro <code>wasThatTrue</code> for <code>true</code> e retornar <code>&quot;No, that was false&quot;</code> caso contrário. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>trueOrFalse</code> deve ser uma função
    testString: 'assert(typeof trueOrFalse === "function", "<code>trueOrFalse</code> should be a function");'
  - text: <code>trueOrFalse(true)</code> deve retornar uma string
    testString: 'assert(typeof trueOrFalse(true) === "string", "<code>trueOrFalse(true)</code> should return a string");'
  - text: <code>trueOrFalse(false)</code> deve retornar uma string
    testString: 'assert(typeof trueOrFalse(false) === "string", "<code>trueOrFalse(false)</code> should return a string");'
  - text: '<code>trueOrFalse(true)</code> deve retornar &quot;Sim, isso era verdade&quot;'
    testString: 'assert(trueOrFalse(true) === "Yes, that was true", "<code>trueOrFalse(true)</code> should return "Yes, that was true"");'
  - text: '<code>trueOrFalse(false)</code> deve retornar &quot;Não, isso foi falso&quot;'
    testString: 'assert(trueOrFalse(false) === "No, that was false", "<code>trueOrFalse(false)</code> should return "No, that was false"");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.



  // Only change code above this line.

}

// Change this value to test
trueOrFalse(true);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
