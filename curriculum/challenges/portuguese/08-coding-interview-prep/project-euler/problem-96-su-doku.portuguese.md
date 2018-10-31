---
id: 5900f3cc1000cf542c50fedf
challengeType: 5
title: 'Problem 96: Su Doku'
videoUrl: ''
localeTitle: 'Problema 96: Su Doku'
---

## Description
<section id="description"> Su Doku (lugar número japonês significa) é o nome dado a um conceito de quebra-cabeça popular. Sua origem não é clara, mas o crédito deve ser atribuído a Leonhard Euler, que inventou uma idéia semelhante e muito mais difícil, denominada Latin Squares. O objetivo dos quebra-cabeças de Su Doku, entretanto, é substituir os espaços em branco (ou zeros) em uma grade de 9 por 9, de modo que cada linha, coluna e caixa 3 por 3 contenha cada um dos dígitos 1 a 9. Abaixo, um exemplo de uma típica grade de quebra-cabeça inicial e sua grade de solução. <p> 0 0 39 0 00 0 1 0 2 03 0 58 0 6 6 0 00 0 14 0 0 0 0 87 0 00 0 6 1 0 20 0 07 0 8 9 0 00 0 82 0 0 0 0 28 0 00 0 5 6 0 92 0 30 1 0 5 0 00 0 93 0 0 </p><p> 4 8 39 6 72 5 1 9 2 13 4 58 7 6 6 5 78 2 14 9 3 5 4 87 2 91 3 6 1 3 25 6 47 9 8 9 7 61 3 82 4 5 3 7 28 1 46 9 5 6 8 92 5 34 1 7 5 1 47 6 93 8 2 </p><p> Um quebra-cabeça bem construído de Su Doku tem uma solução única e pode ser resolvido pela lógica, embora possa ser necessário empregar métodos de &quot;adivinhação e teste&quot; para eliminar opções (há muita opinião contestada sobre isso). A complexidade da pesquisa determina a dificuldade do quebra-cabeça; o exemplo acima é considerado fácil porque pode ser resolvido por dedução direta direta. O arquivo de texto 6K, sudoku.txt (clique direito e &#39;Salvar Link / Alvo Como ...&#39;), contém cinquenta diferentes enigmas Su Doku que variam em dificuldade, mas todos com soluções únicas (o primeiro quebra-cabeça no arquivo é o exemplo acima ). Ao resolver todos os cinquenta quebra-cabeças, encontre a soma dos números de 3 dígitos encontrados no canto superior esquerdo de cada grade da solução; por exemplo, 483 é o número de 3 dígitos encontrado no canto superior esquerdo da grade da solução acima. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler96()</code> deve retornar 24702.
    testString: 'assert.strictEqual(euler96(), 24702, "<code>euler96()</code> should return 24702.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler96() {
  // Good luck!
  return true;
}

euler96();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
