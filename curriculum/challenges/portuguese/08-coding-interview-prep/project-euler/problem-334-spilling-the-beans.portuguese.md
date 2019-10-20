---
id: 5900f4ba1000cf542c50ffcd
challengeType: 5
title: 'Problem 334: Spilling the beans'
videoUrl: ''
localeTitle: 'Problema 334: Derramando o Feijão'
---

## Description
<section id="description"> No céu de Platão, existe um número infinito de taças em linha reta. Cada tigela contém alguns ou nenhum de um número finito de grãos. Uma criança joga um jogo, que permite apenas um tipo de movimento: remover dois feijões de qualquer tigela e colocar um em cada uma das duas tigelas adjacentes. O jogo termina quando cada tigela contém um ou nenhum feijão. <p> Por exemplo, considere duas taças adjacentes contendo 2 e 3 beans respectivamente, todas as outras taças sendo vazias. Os oito movimentos a seguir terminarão o jogo: </p><p> Você recebe as seguintes sequências: t0 = 123456. </p><pre> <code> ti = ti-12 , if ti-1 is even ti-12 926252, if ti-1 is odd where ⌊x⌋ is the floor function and is the bitwise XOR operator. bi = ( ti mod 211) + 1.</code> </pre><p> Os dois primeiros termos da última seqüência são b1 = 289 e b2 = 145. Se começarmos com b1 e b2 em duas taças adjacentes, serão necessários 3419100 movimentos para finalizar o jogo. </p><p> Considere agora 1500 taças adjacentes contendo b1, b2, ..., b1500 respectivamente, todas as outras taças sendo vazias. Descubra quantos movimentos são necessários antes do término do jogo. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler334()</code> deve retornar 150320021261690850.
    testString: 'assert.strictEqual(euler334(), 150320021261690850, "<code>euler334()</code> should return 150320021261690850.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler334() {
  // Good luck!
  return true;
}

euler334();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
