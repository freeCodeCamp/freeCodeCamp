---
title: Deal cards for FreeCell
id: 59694356a6e7011f7f1c5f4e
challengeType: 5
videoUrl: ''
localeTitle: Cartões de oferta para o FreeCell
---

## Description
<section id="description"><p> Free Cell é o jogo de cartas de paciência que Paul Alfille apresentou ao sistema PLATO em 1978. Jim Horne, da Microsoft, mudou o nome para FreeCell e reimplementou o jogo para <a href="http://rosettacode.org/wiki/DOS" title="DOS">DOS</a> e <a href="http://rosettacode.org/wiki/Windows" title="janelas">Windows</a> . </p><p> Esta versão introduziu 32000 ofertas numeradas. (A <a href="http://www.solitairelaboratory.com/fcfaq.html" title="link: http://www.solitairelaboratory.com/fcfaq.html">FAQ do FreeCell</a> conta este histórico.) </p><p> Como o jogo se tornou popular, Jim Horne divulgou <a href="http://www.solitairelaboratory.com/mshuffle.txt" title="link: http://www.solitairelaboratory.com/mshuffle.txt">o algoritmo</a> , e outras implementações do FreeCell começaram a reproduzir os acordos da Microsoft. </p><p> Estas ofertas são numeradas de 1 a 32000. </p><p> Versões mais recentes da Microsoft têm 1 milhão de transações, numeradas de 1 a 1000000; algumas implementações permitem números fora desse intervalo. </p><p> O algoritmo usa este <a href="http://rosettacode.org/wiki/linear congruential generator" title="gerador congruente linear">gerador congruente linear</a> da Microsoft C: </p> $ state_ {n + 1} \ equiv 214013 \ times state_n + 2531011 \ pmod {2 ^ {31}} $ $ rand_n = state_n \ div 2 ^ {16} $ $ rand_n $ está no intervalo de 0 a 32767. <p> O algoritmo segue: </p> Semente o RNG com o número do acordo. Crie um <a href="http://rosettacode.org/wiki/array" title="array">conjunto</a> de 52 cartas: Ás de Paus, Ás de Diamantes, Ás de Copas, Ás de Espadas, 2 de Paus, 2 de Ouros e assim por diante nas classificações: Ás, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, rainha, rei. Os índices de array são 0 a 51, com Ace of Clubs em 0 e King of Spades em 51. Até que o array esteja vazio: Escolha um card aleatório no índice ≡ próximo número aleatório (mod array length). Troque este cartão aleatório com a última carta da matriz. Remova este cartão aleatório da matriz. (O comprimento da matriz diminui em 1.) Lide com este cartão aleatório. Lance todos os 52 cards, com a face para cima, em 8 colunas. As 8 primeiras cartas vão para 8 colunas, as 8 cartas seguintes vão para as 8 primeiras cartas e assim por diante. Exemplo: <p> Ordem para negociar cartões </p><p></p><pre> 1 2 3 4 5 6 7 8
 9 10 11 12 13 14 15 16
17 18 19 20 21 22 23 24
25 26 27 28 29 30 31 32
33 34 35 36 37 38 39 40
41 42 43 44 45 46 47 48
49 50 51 52 </pre><p></p><p> Jogo # 1 </p><p></p><pre> [
[&#39;JD&#39;, &#39;2D&#39;, &#39;9H&#39;, &#39;JC&#39;, &#39;5D&#39;, &#39;7H&#39;, &#39;7C&#39;, &#39;5H&#39;],
[&#39;KD&#39;, &#39;KC&#39;, &#39;9S&#39;, &#39;5S&#39;, &#39;AD&#39;, &#39;QC&#39;, &#39;KH&#39;, &#39;3H&#39;],
[2S, KS, 9D, QD, JS, AS, AH, 3C],
[4C, 5C, TS, QH, 4H, AC, 4D, 7S],
[&#39;3S&#39;, &#39;TD&#39;, &#39;4S&#39;, &#39;TH&#39;, &#39;8H&#39;, &#39;2C&#39;, &#39;JH&#39;, &#39;7D&#39;],
[6D, 8S, 8D, QS, 6C, 3D, 8C, TC]
[&#39;6S&#39;, &#39;9C&#39;, &#39;2H&#39;, &#39;6H&#39;]
] </pre><p></p><p> Jogo # 617 </p><p></p><pre> [
[&#39;7D&#39;, &#39;AD&#39;, &#39;5C&#39;, &#39;3S&#39;, &#39;5S&#39;, &#39;8C&#39;, &#39;2D&#39;, &#39;AH&#39;],
[&#39;TD&#39;, &#39;7S&#39;, &#39;QD&#39;, &#39;AC&#39;, &#39;6D&#39;, &#39;8H&#39;, &#39;AS&#39;, &#39;KH&#39;],
[&#39;TH&#39;, &#39;QC&#39;, &#39;3H&#39;, &#39;9D&#39;, &#39;6S&#39;, &#39;8D&#39;, &#39;3D&#39;, &#39;TC&#39;],
[&#39;KD&#39;, &#39;5H&#39;, &#39;9S&#39;, &#39;3C&#39;, &#39;8S&#39;, &#39;7H&#39;, &#39;4D&#39;, &#39;JS&#39;],
[4C, QS, 9C, 9H, 7C, 6H, 2C, 2S],
[&#39;4S&#39;, &#39;TS&#39;, &#39;2H&#39;, &#39;5D&#39;, &#39;JC&#39;, &#39;6C&#39;, &#39;JH&#39;, &#39;QH&#39;],
[&#39;JD&#39;, &#39;KS&#39;, &#39;KC&#39;, &#39;4H&#39;]
] </pre><p></p> Tarefa: <p> Escreva uma função para pegar um número de oferta e negociar as cartas na mesma ordem que este algoritmo. </p><p> A função deve retornar um array bidimensional representando a placa FreeCell. </p><p> As transações também podem ser verificadas em relação <a href="http://freecellgamesolutions.com/" title="link: http://freecellgamesolutions.com/">às soluções FreeCell para os jogos de 1000000</a> . </p><p> (Evoca uma solução de vídeo e exibe a transação inicial.) </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>dealFreeCell</code> é uma função.
    testString: 'assert(typeof dealFreeCell === "function", "<code>dealFreeCell</code> is a function.");'
  - text: <code>dealFreeCell(seed)</code> deve retornar um objeto.
    testString: 'assert(typeof dealFreeCell(1) === "object", "<code>dealFreeCell(seed)</code> should return an object.");'
  - text: <code>dealFreeCell(seed)</code> deve retornar uma matriz de tamanho 7.
    testString: 'assert(dealFreeCell(1).length === 7, "<code>dealFreeCell(seed)</code> should return an array of length 7.");'
  - text: '<code>dealFreeCell(1)</code> deve retornar um array idêntico ao exemplo &quot;Game # 1&quot;'
    testString: 'assert.deepEqual(dealFreeCell(1), game1, "<code>dealFreeCell(1)</code> should return an array identical to example "Game #1"");'
  - text: '<code>dealFreeCell(617)</code> deve retornar um array idêntico ao exemplo &quot;Game # 617&quot;'
    testString: 'assert.deepEqual(dealFreeCell(617), game617, "<code>dealFreeCell(617)</code> should return an array identical to example "Game #617"");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function dealFreeCell (seed) {
  // Good luck!
  return true;
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
