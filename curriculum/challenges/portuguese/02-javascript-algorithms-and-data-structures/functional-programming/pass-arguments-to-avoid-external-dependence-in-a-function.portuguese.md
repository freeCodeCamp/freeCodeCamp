---
id: 587d7b8e367417b2b2512b5f
title: Pass Arguments to Avoid External Dependence in a Function
challengeType: 1
videoUrl: ''
localeTitle: Passar Argumentos para Evitar Dependência Externa em uma Função
---

## Description
<section id="description"> O último desafio foi um passo mais próximo dos princípios de programação funcional, mas ainda falta algo. Nós não alteramos o valor da variável global, mas a função <code>incrementer</code> não funcionaria sem a variável global <code>fixedValue</code> estar lá. Outro princípio da programação funcional é sempre declarar suas dependências explicitamente. Isso significa que, se uma função depende de uma variável ou objeto estar presente, passe essa variável ou o  objeto diretamente para a função como um argumento. Existem várias boas conseqüências desse princípio. A função é mais fácil de testar, você sabe exatamente qual entrada é necessária e não depende de mais nada em seu programa. Isso pode lhe dar mais confiança quando você altera, remove ou adiciona um novo código. Você saberia o que você pode ou não pode mudar e você pode ver onde estão as possíveis armadilhas. Finalmente, a função sempre produziria a mesma saída para o mesmo conjunto de entradas, independentemente da parte do código que a executa. </section>

## Instructions
<section id="instructions"> Vamos atualizar a função <code>incrementer</code> para declarar claramente suas dependências. Escreva a função <code>incrementer</code> de modo que ela receba um argumento e, em seguida, aumente o valor em um. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Sua <code>incrementer</code> função não deve alterar o valor de <code>fixedValue</code> .
    testString: 'assert(fixedValue === 4, "Your function <code>incrementer</code> should not change the value of <code>fixedValue</code>.");'
  - text: Sua função <code>incrementer</code> deve ter um parâmetro.
    testString: 'assert(code.match(/function\s+?incrementer\s*?\(.+?\)/g), "Your <code>incrementer</code> function should take a parameter.");'
  - text: Sua função <code>incrementer</code> deve retornar um valor que é maior que o valor <code>fixedValue</code> .
    testString: 'assert(newValue === 5, "Your <code>incrementer</code> function should return a value that is one larger than the <code>fixedValue</code> value.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// the global variable
var fixedValue = 4;

// Add your code below this line
function incrementer () {


  // Add your code above this line
}

var newValue = incrementer(fixedValue); // Should equal 5
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
