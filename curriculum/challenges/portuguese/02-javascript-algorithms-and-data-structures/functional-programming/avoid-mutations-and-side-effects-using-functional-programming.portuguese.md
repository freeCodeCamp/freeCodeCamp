---
id: 587d7b8e367417b2b2512b5e
title: Avoid Mutations and Side Effects Using Functional Programming
challengeType: 1
videoUrl: ''
localeTitle: Evite Mutações e Efeitos Colaterais Usando Programação Funcional
---

## Description
<section id="description"> Se você ainda não descobriu, o problema no desafio anterior era com a chamada de <code>splice</code> na função <code>tabClose()</code> . Infelizmente, a <code>splice</code> altera a matriz original em que é chamada, portanto, a segunda chamada a ela usou uma matriz modificada e gerou resultados inesperados. Este é um pequeno exemplo de um padrão muito maior - você chama uma função em uma variável, matriz ou um objeto, e a função altera a variável ou algo no objeto. Um dos principais princípios da programação funcional é não mudar as coisas. Mudanças levam a bugs. É mais fácil evitar erros sabendo que suas funções não alteram nada, incluindo os argumentos da função ou qualquer variável global. O exemplo anterior não teve operações complicadas, mas o método de <code>splice</code> alterou o array original e resultou em um bug. Lembre-se que na programação funcional, mudar ou alterar coisas é chamado de <code>mutation</code> , e o resultado é chamado de <code>side effect</code> . Uma função, idealmente, deveria ser uma <code>pure function</code> , o que significa que não causa efeitos colaterais. Vamos tentar dominar essa disciplina e não alterar nenhuma variável ou objeto em nosso código. </section>

## Instructions
<section id="instructions"> Preencha o código para o <code>incrementer</code> função para que ele retorne o valor da variável global <code>fixedValue</code> aumentado em um. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu <code>incrementer</code> função não deve alterar o valor de <code>fixedValue</code> .
    testString: 'assert(fixedValue === 4, "Your function <code>incrementer</code> should not change the value of <code>fixedValue</code>.");'
  - text: Sua função de <code>incrementer</code> deve retornar um valor que é maior que o valor <code>fixedValue</code> .
    testString: 'assert(newValue === 5, "Your <code>incrementer</code> function should return a value that is one larger than the <code>fixedValue</code> value.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// the global variable
var fixedValue = 4;

function incrementer () {
  // Add your code below this line


  // Add your code above this line
}

var newValue = incrementer(); // Should equal 5
console.log(fixedValue); // Should print 4

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
