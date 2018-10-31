---
id: 5900f4f31000cf542c510006
challengeType: 5
title: 'Problem 391: Hopping Game'
videoUrl: ''
localeTitle: 'Problema 391: Jogo Saltitante'
---

## Description
<section id="description"> Seja sk o número de 1s ao escrever os números de 0 a k em binário. Por exemplo, escrevendo 0 a 5 em binário, temos 0, 1, 10, 11, 100, 101. Existem sete 1s, então s5 = 7. A sequência S = {sk: k ≥ 0} inicia {0, 1 , 2, 4, 5, 7, 9, 12, ...}. <p> Um jogo é jogado por dois jogadores. Antes do jogo começar, um número n é escolhido. Um contador c começa em 0. A cada turno, o jogador escolhe um número de 1 an (inclusive) e aumenta c por esse número. O valor resultante de c deve ser um membro de S. Se não houver mais movimentos válidos, o jogador perde. </p><p> Por exemplo: Seja n = 5. c começa em 0. O jogador 1 escolhe 4, então c se torna 0 + 4 = 4. O jogador 2 escolhe 5, então c se torna 4 + 5 = 9. O jogador 1 escolhe 3, então c se torna 9 + 3 = 12. etc. Note que c deve sempre pertencer a S, e cada jogador pode aumentar c no máximo n. </p><p> Seja M (n) o maior número que o primeiro jogador pode escolher em seu primeiro turno para forçar uma vitória, e M (n) = 0 se não houver tal movimento. Por exemplo, M (2) = 2, M (7) = 1 e M (20) = 4. </p><p> Dado Σ (M (n)) 3 = 8150 para 1 ≤ n ≤ 20. </p><p> Encontre Σ (M (n)) 3 para 1 ≤ n ≤ 1000. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler391()</code> deve retornar 61029882288.
    testString: 'assert.strictEqual(euler391(), 61029882288, "<code>euler391()</code> should return 61029882288.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler391() {
  // Good luck!
  return true;
}

euler391();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
