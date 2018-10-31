---
id: 587d7b84367417b2b2512b36
title: 'Catch Unclosed Parentheses, Brackets, Braces and Quotes'
challengeType: 1
videoUrl: ''
localeTitle: 'Pegar parênteses, suportes, chaves e citações não fechadas'
---

## Description
<section id="description"> Outro erro de sintaxe a ter em conta é que todos os parênteses, parênteses, chaves e cotações de abertura têm um par de fecho. Esquecer uma parte tende a acontecer quando você está editando um código existente e inserindo itens com um dos tipos de par. Além disso, tome cuidado ao aninhar blocos de código em outros, como adicionar uma função de retorno de chamada como um argumento para um método. Uma maneira de evitar esse erro é, assim que o caractere de abertura for digitado, incluir imediatamente a correspondência de fechamento, em seguida, mova o cursor de volta entre eles e continue a codificação. Felizmente, a maioria dos editores de código modernos gera a segunda metade do par automaticamente. </section>

## Instructions
<section id="instructions"> Corrigir os dois erros de par no código. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve corrigir a parte que falta na matriz.
    testString: 'assert(code.match(/myArray\s*?=\s*?\[\s*?1\s*?,\s*?2\s*?,\s*?3\s*?\];/g), "Your code should fix the missing piece of the array.");'
  - text: 'Seu código deve corrigir a parte que falta do método <code>.reduce()</code> . A saída do console deve mostrar que &quot;Soma dos valores da matriz é: 6&quot;.'
    testString: 'assert(arraySum === 6, "Your code should fix the missing piece of the <code>.reduce()</code> method. The console output should show that "Sum of array values is: 6".");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let myArray = [1, 2, 3;
let arraySum = myArray.reduce((previous, current =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
