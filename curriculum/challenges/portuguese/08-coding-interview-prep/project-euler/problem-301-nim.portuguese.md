---
id: 5900f4991000cf542c50ffab
challengeType: 5
title: 'Problem 301: Nim'
videoUrl: ''
localeTitle: 'Problema 301: Ele'
---

## Description
<section id="description"> Nim é um jogo jogado com montes de pedras, onde dois jogadores, por sua vez, removem qualquer quantidade de pedras de qualquer pilha até que não restem pedras. <p> Consideraremos a versão normal de três heap do Nim, que funciona da seguinte maneira: </p><ul><li><p> No início do jogo, há três montes de pedras. </p></li><li><p> Por sua vez, o jogador remove qualquer número positivo de pedras de uma única pilha. </p></li><li><p> O primeiro jogador incapaz de se mover (porque nenhuma pedra permanece) perde. </p><p> Se (n1, n2, n3) indicar uma posição Nim consistindo de montes de tamanho n1, n2 e n3, então há uma função simples X (n1, n2, n3) - que você pode procurar ou tentar deduzir por si mesmo - que retorna: zero se, com estratégia perfeita, o jogador prestes a se mover perderá; ou não-zero se, com estratégia perfeita, o jogador prestes a se mover eventualmente vencer.Por exemplo, X (1,2,3) = 0 porque, não importa o que o jogador atual faça, seu oponente pode responder com um movimento que sai dois montes de tamanho igual, ponto em que cada movimento do jogador atual pode ser espelhado pelo oponente até que não restem pedras; então o jogador atual perde. Ilustrar: </p></li><li><p> jogador atual move-se para (1,2,1) </p></li><li><p> oponente se move para (1,0,1) </p></li><li><p> jogador atual move-se para (0,0,1) </p></li><li><p> oponente se move para (0,0,0), e assim ganha. </p></li></ul><p> Para quantos inteiros positivos n ≤ 230 X (n, 2n, 3n) = 0? </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler301()</code> deve retornar 2178309.
    testString: 'assert.strictEqual(euler301(), 2178309, "<code>euler301()</code> should return 2178309.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler301() {
  // Good luck!
  return true;
}

euler301();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
