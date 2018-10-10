---
id: 587d7b85367417b2b2512b38
title: Catch Use of Assignment Operator Instead of Equality Operator
challengeType: 1
videoUrl: ''
localeTitle: Pegar o uso do operador de atribuição em vez do operador de igualdade
---

## Description
<section id="description"> Programas de ramificação, ou seja, aqueles que fazem coisas diferentes se determinadas condições forem atendidas, dependem de <code>if</code> , <code>else if</code> e <code>else</code> instruções em JavaScript. A condição às vezes assume a forma de testar se um resultado é igual a um valor. Essa lógica é falada (em inglês, pelo menos) como &quot;se x for igual a y, então ...&quot;, o que pode literalmente ser traduzido em código usando o operador <code>=</code> ou atribuição. Isso leva a um fluxo de controle inesperado no seu programa. Como abordado em desafios anteriores, o operador de atribuição ( <code>=</code> ) em JavaScript atribui um valor a um nome de variável. E os operadores <code>==</code> e <code>===</code> verificam a igualdade (o triplo <code>===</code> testa a igualdade estrita, significando que o valor e o tipo são iguais). O código abaixo atribui <code>x</code> como 2, que é avaliado como <code>true</code> . Quase todos os valores em JavaScript são avaliados como <code>true</code> , exceto os que são conhecidos como &quot;falsy&quot;: <code>false</code> , <code>0</code> , <code>&quot;&quot;</code> (uma string vazia), <code>NaN</code> , <code>undefined</code> e <code>null</code> . <blockquote> seja x = 1; <br> seja y = 2; <br> if (x = y) { <br> // este bloco de códigos será executado para qualquer valor de y (a menos que y tenha sido originalmente definido como falsy) <br> } outro { <br> // este bloco de código é o que deve ser executado (mas não será) neste exemplo <br> } </blockquote></section>

## Instructions
<section id="instructions"> Corrija a condição para que o programa execute a ramificação direita e o valor apropriado seja atribuído ao <code>result</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Seu código deve corrigir a condição para verificar a igualdade, em vez de usar a atribuição.'
    testString: 'assert(result == "Not equal!", "Your code should fix the condition so it checks for equality, instead of using assignment.");'
  - text: A condição pode usar <code>==</code> ou <code>===</code> para testar a igualdade.
    testString: 'assert(code.match(/x\s*?===?\s*?y/g), "The condition can use either <code>==</code> or <code>===</code> to test for equality.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let x = 7;
let y = 9;
let result = "to come";

if(x = y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
