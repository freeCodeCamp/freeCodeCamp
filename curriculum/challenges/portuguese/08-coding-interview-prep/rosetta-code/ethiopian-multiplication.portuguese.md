---
title: Ethiopian multiplication
id: 599d1566a02b571412643b84
challengeType: 5
videoUrl: ''
localeTitle: Multiplicação etíope
---

## Description
<section id="description"><p> A multiplicação etíope é um método de multiplicar inteiros usando apenas adição, duplicação e redução pela metade. </p><p> Método: </p> Pegue dois números para serem multiplicados e anote-os no topo de duas colunas. Na coluna da esquerda, separe repetidamente o último número, descartando qualquer resto, e escreva o resultado abaixo do último na mesma coluna, até você escrever um valor de 1. Na coluna da direita repetidamente, duplique o último número e escreva o número. resultado abaixo. pare quando você adicionar um resultado na mesma linha de onde a coluna da esquerda mostra 1. Examine a tabela produzida e descarte qualquer linha na qual o valor na coluna da esquerda seja par. Soma os valores na coluna da direita que permanecem para produzir o resultado da multiplicação dos dois números originais juntos <p> Por exemplo: 17 × 34 </p><p> 17 34 </p><p> Reduzindo a primeira coluna: </p><p> 17 34 </p><p> 8 </p><p> 4 </p><p> 2 </p><p> 1 </p><p> Duplicando a segunda coluna: </p><p> 17 34 </p><p> 8 68 </p><p> 4 136 </p><p> 2 272 </p><p> 1 544 </p><p> Linhas de ataque cuja primeira célula é par: </p><p> 17 34 </p><p> 8 <strike>68</strike> </p><p> 4 <strike>136</strike> </p><p> 2 <strike>272</strike> </p><p> 1 544 </p><p> Soma os números restantes na coluna da direita: </p><p> 17 34 </p><p> 8 - </p><p> 4 --- </p><p> 2 --- </p><p> 1 544 </p><p> ==== </p><p> 578 </p><p> Então 17 multiplicado por 34, pelo método etíope é 578. </p> Tarefa: <p> A tarefa é definir três funções / métodos / procedimentos / sub-rotinas nomeadas: </p> um para reduzir pela metade um inteiro, um para dobrar um inteiro e um para indicar se um inteiro é par. <p> Use essas funções para criar uma função que faça multiplicação etíope. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>eth_mult</code> é uma função.
    testString: 'assert(typeof eth_mult === "function", "<code>eth_mult</code> is a function.");'
  - text: '<code>eth_mult(17,34)</code> deve retornar <code>578</code> .'
    testString: 'assert.equal(eth_mult(17, 34), 578, "<code>eth_mult(17,34)</code> should return <code>578</code>.");'
  - text: '<code>eth_mult(23,46)</code> deve retornar <code>1058</code> .'
    testString: 'assert.equal(eth_mult(23, 46), 1058, "<code>eth_mult(23,46)</code> should return <code>1058</code>.");'
  - text: '<code>eth_mult(12,27)</code> deve retornar <code>324</code> .'
    testString: 'assert.equal(eth_mult(12, 27), 324, "<code>eth_mult(12,27)</code> should return <code>324</code>.");'
  - text: '<code>eth_mult(56,98)</code> deve retornar <code>5488</code> .'
    testString: 'assert.equal(eth_mult(56, 98), 5488, "<code>eth_mult(56,98)</code> should return <code>5488</code>.");'
  - text: '<code>eth_mult(63,74)</code> deve retornar <code>4662</code> .'
    testString: 'assert.equal(eth_mult(63, 74), 4662, "<code>eth_mult(63,74)</code> should return <code>4662</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function eth_mult (a, b) {
  // Good luck!
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
