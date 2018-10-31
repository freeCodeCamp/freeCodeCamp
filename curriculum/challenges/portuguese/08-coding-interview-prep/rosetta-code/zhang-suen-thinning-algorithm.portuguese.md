---
title: Zhang-Suen thinning algorithm
id: 594810f028c0303b75339ad7
challengeType: 5
videoUrl: ''
localeTitle: Algoritmo de desbaste de Zhang-Suen
---

## Description
<section id="description"> Este é um algoritmo usado para afinar uma imagem em preto e branco, ou seja, um bit por pixel. Por exemplo, com uma imagem de entrada de: <pre> ##############################
 ##################################
 #####################################
 ##################################
   ##########################
   ###### ##############
   ########################
   #######################
   ########################
   ###### ##############
   ###### ##############
   ##########################
 ##################################
 ######## #####################################
 ###########################################
 ########################################
                                                           </pre> Produz a saída thinned: <pre>
<pre> <code># ########## ####### ## # #### # # # ## # # # # # # # # # ############ # # # # # # # # # # # # # # ## # ############ ### ### &lt;/pre&gt;</code> </pre>
<h2> Algoritmo </h2>
Suponha que os pixels pretos sejam um e que os pixels brancos sejam zero, e que a imagem de entrada seja uma matriz N retangular por M de uns e zeros.
O algoritmo opera em todos os pixels pretos P1 que podem ter oito vizinhos. Os vizinhos são, em ordem, organizados como:
<table border="1">
  <tbody><tr><td> P9 </td><td> P2 </td><td> P3 </td></tr>
  <tr><td> P8 </td><td> <b>P1</b> </td><td> P4 </td></tr>
  <tr><td> P7 </td><td> P6 </td><td> P5 </td></tr>
</tbody></table>
Obviamente, os pixels limites da imagem não podem ter os oito vizinhos completos.
<pre> <code>Define $A(P1)$ = the number of transitions from white to black, (0 -&gt; 1) in the sequence P2,P3,P4,P5,P6,P7,P8,P9,P2. (Note the extra P2 at the end - it is circular). Define $B(P1)$ = the number of black pixel neighbours of P1. ( = sum(P2 .. P9) )</code> </pre>
<h3> Passo 1: </h3>
Todos os pixels são testados e os pixels que satisfazem todas as condições a seguir (simultaneamente) são anotados neste estágio.
  (0) O pixel é preto e tem oito vizinhos
  (1) $ 2 &lt;= B (P1) &lt;= 6 $
  (2) $ A (P1) = 1 $
  (3) Pelo menos um dos P2 e P4 e P6 é branco
  (4) Pelo menos um dos P4 e P6 e P8 é branco
Depois de iterar sobre a imagem e coletar todos os pixels que satisfazem todas as condições da etapa 1, todos esses pixels que satisfazem as condições são definidos como branco.
<h3> Passo 2: </h3>
Todos os pixels são novamente testados e os pixels que satisfazem todas as condições a seguir são apenas observados neste estágio.
  (0) O pixel é preto e tem oito vizinhos
  (1) $ 2 &lt;= B (P1) &lt;= 6 $
  (2) $ A (P1) = 1 $
  (3) Pelo menos um dos pontos P2 e P4 e &quot;&#39;P8&quot;&#39; é branco
  (4) Pelo menos um de &quot;&#39;P2&quot;&#39; e P6 e P8 é branco
Depois de iterar sobre a imagem e coletar todos os pixels que satisfazem todas as condições da etapa 2, todos esses pixels que satisfazem as condições são novamente definidos como branco.
Iteração:
Se algum pixel tiver sido definido nessa rodada da etapa 1 ou da etapa 2, todas as etapas serão repetidas até que nenhum pixel da imagem seja alterado.
<p>
Tarefa:
Escreva uma rotina para realizar o desbaste de Zhang-Suen em uma matriz de imagem de uns e zeros.
</p>
</pre></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>thinImage</code> deve ser uma função
    testString: 'assert.equal(typeof thinImage, "function", "<code>thinImage</code> must be a function");'
  - text: <code>thinImage</code> deve retornar um array
    testString: 'assert(Array.isArray(result), "<code>thinImage</code> must return an array");'
  - text: <code>thinImage</code> deve retornar um array de strings
    testString: 'assert.equal(typeof result[0], "string", "<code>thinImage</code> must return an array of strings");'
  - text: <code>thinImage</code> deve retornar um array de strings
    testString: 'assert.deepEqual(result, expected, "<code>thinImage</code> must return an array of strings");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const testImage = [
  '                                                          ',
  ' #################                   #############        ',
  ' ##################               ################        ',
  ' ###################            ##################        ',
  ' ########     #######          ###################        ',
  '   ######     #######         #######       ######        ',
  '   ######     #######        #######                      ',
  '   #################         #######                      ',
  '   ################          #######                      ',
  '   #################         #######                      ',
  '   ######     #######        #######                      ',
  '   ######     #######        #######                      ',
  '   ######     #######         #######       ######        ',
  ' ########     #######          ###################        ',
  ' ########     ####### ######    ################## ###### ',
  ' ########     ####### ######      ################ ###### ',
  ' ########     ####### ######         ############# ###### ',
  '                                                          '];

function thinImage(image) {
  // Good luck!
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
