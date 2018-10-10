---
id: 5900f5431000cf542c510055
challengeType: 5
title: 'Problem 470: Super Ramvok'
videoUrl: ''
localeTitle: 'Problema 470: Super Ramvok'
---

## Description
<section id="description"> Considere um único jogo de Ramvok: <p> Vamos representar o número máximo de turnos que o jogo dura. Se t = 0, o jogo termina imediatamente. Caso contrário, em cada turno eu, o jogador rola um dado. Após o lançamento, se o jogador puder parar o jogo e receber um prêmio igual ao valor do teste atual, ou descartar o teste e tentar novamente no próximo turno. Se i = t, o rolo não pode ser descartado e o prêmio deve ser aceito. Antes do jogo começar, t é escolhido pelo jogador, que deve então pagar um custo inicial ct por alguma constante c. Para c = 0, t pode ser escolhido para ser infinito (com um custo inicial de 0). Seja R (d, c) o lucro esperado (ou seja, ganho líquido) que o jogador recebe de um único jogo de Ramvok jogado da melhor maneira, dado um dado de d-face justo e custo constante c. Por exemplo, R (4, 0,2) = 2,65. Suponha que o jogador tenha fundos suficientes para pagar quaisquer custos iniciais. </p><p> Agora considere um jogo de Super Ramvok: </p><p> Em Super Ramvok, o jogo de Ramvok é jogado repetidamente, mas com uma ligeira modificação. Após cada jogo, o dado é alterado. O processo de alteração é o seguinte: O dado é rolado uma vez, e se a face resultante tiver seus pontos visíveis, então essa face é alterada para ficar em branco. Se o rosto já estiver em branco, ele será alterado novamente para seu valor original. Depois que a alteração é feita, outro jogo de Ramvok pode começar (e durante tal jogo, a cada turno, o dado é rolado até que um rosto com um valor nele apareça). O jogador sabe quais rostos estão em branco e quais não estão em todos os momentos. O jogo de Super Ramvok termina quando todas as faces do dado estiverem em branco. </p><p> Seja S (d, c) o lucro esperado que o jogador recebe de um jogo otimamente jogado de Super Ramvok, dado um dado justo em d-face para começar (com todos os lados visíveis) e custo constante c. Por exemplo, S (6, 1) = 208,3. </p><p> Seja F (n) = ∑4≤d≤n ∑0≤c≤n S (d, c). </p><p> Calcular F (20), arredondado para o inteiro mais próximo. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert.strictEqual(euler470(), 147668794, "<code>euler470()</code> should return 147668794.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler470() {
  // Good luck!
  return true;
}

euler470();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
