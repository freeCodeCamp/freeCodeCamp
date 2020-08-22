---
id: 5679ceb97cbaa8c51670a16b
title: Returning Boolean Values from Functions
challengeType: 1
videoUrl: ''
localeTitle: Retornando valores booleanos de funções
---

## Description
<section id="description"> Você pode se lembrar de <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator" target="_blank">Comparação com o Operador de Igualdade</a> que todos os operadores de comparação retornam um valor booleano <code>true</code> ou <code>false</code> . Às vezes as pessoas usam uma instrução if / else para fazer uma comparação, como esta: <blockquote> função isEqual (a, b) { <br> if (a === b) { <br> retorno verdadeiro; <br> } outro { <br> retorna falso; <br> } <br> } </blockquote> Mas há uma maneira melhor de fazer isso. Como <code>===</code> retorna <code>true</code> ou <code>false</code> , podemos retornar o resultado da comparação: <blockquote> função isEqual (a, b) { <br> return a === b; <br> } </blockquote></section>

## Instructions
<section id="instructions"> Corrigir a função <code>isLess</code> para remover as instruções <code>if/else</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>isLess(10,15)</code> deve retornar <code>true</code>'
    testString: 'assert(isLess(10,15) === true, "<code>isLess(10,15)</code> should return <code>true</code>");'
  - text: '<code>isLess(15,10)</code> deve retornar <code>false</code>'
    testString: 'assert(isLess(15, 10) === false, "<code>isLess(15,10)</code> should return <code>false</code>");'
  - text: Você não deve usar nenhuma instrução <code>if</code> ou <code>else</code>
    testString: 'assert(!/if|else/g.test(code), "You should not use any <code>if</code> or <code>else</code> statements");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function isLess(a, b) {
  // Fix this code
  if (a < b) {
    return true;
  } else {
    return false;
  }
}

// Change these values to test
isLess(10, 15);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
