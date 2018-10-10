---
id: 587d7b83367417b2b2512b37
title: Understanding the Differences between the freeCodeCamp and Browser Console
challengeType: 1
videoUrl: ''
localeTitle: Entendendo as Diferenças entre o FreeCodeCamp e o Console do Navegador
---

## Description
<section id="description"> Você deve ter notado que alguns desafios do freeCodeCamp JavaScript incluem seu próprio console. Este console se comporta de maneira um pouco diferente do console do navegador usado no último desafio. O desafio a seguir destina-se a destacar algumas das diferenças entre o console freeCodeCamp e o console do navegador. Primeiro, o console do navegador. Quando você carrega e executa um arquivo JavaScript comum em seu navegador, as instruções <code>console.log()</code> imprimem exatamente o que você diz para imprimir no console do navegador o número exato de vezes que você solicitou. Em seu editor de texto no navegador, o processo é um pouco diferente e pode ser confuso no início. Os valores passados ​​para o <code>console.log()</code> no bloco do editor de texto executam cada conjunto de testes, bem como mais uma vez para qualquer chamada de função que você tenha em seu código. Isso se presta a um comportamento interessante e pode atrapalhar você no início, porque um valor registrado que você espera ver apenas uma vez pode ser impresso várias vezes, dependendo do número de testes e dos valores sendo passados ​​para esses testes. Se você quiser ver apenas sua saída única e não precisar se preocupar em executar os ciclos de teste, use <code>console.clear()</code> . </section>

## Instructions
<section id="instructions"> Use <code>console.log()</code> para imprimir as variáveis ​​no código onde indicado. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Use <code>console.log()</code> para imprimir a variável <code>outputTwo</code> . No seu Console do Navegador, isso deve imprimir o valor da variável duas vezes.'
    testString: 'assert(code.match(/console\.log\(outputTwo\)/g), "Use <code>console.log()</code> to print the <code>outputTwo</code> variable.  In your Browser Console this should print out the value of the variable two times.");'
  - text: Use <code>console.log()</code> para imprimir a variável <code>outputOne</code> .
    testString: 'assert(code.match(/console\.log\(outputOne\)/g), "Use <code>console.log()</code> to print the <code>outputOne</code> variable.");'
  - text: 'Use <code>console.clear()</code> para modificar sua saída, de forma que a variável <code>outputOne</code> apenas <code>outputOne</code> uma vez.'
    testString: 'assert(code.match(/^(\s*console.clear\(\);?\s*)$/gm), "Use <code>console.clear()</code> to modify your output so that <code>outputOne</code> variable only outputs once.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Open your browser console
let outputTwo = "This will print to the browser console 2 times";
// Use console.log() to print the outputTwo variable


let outputOne = "Try to get this to log only once to the browser console";
// Use console.clear() in the next line to print the outputOne only once


// Use console.log() to print the outputOne variable

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
