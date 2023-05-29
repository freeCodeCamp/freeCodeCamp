---
id: 5900f52a1000cf542c51003b
title: 'Problema 444: A loteria da mesa redonda'
challengeType: 1
forumTopicId: 302116
dashedName: problem-444-the-roundtable-lottery
---

# --description--

Um grupo de $p$ pessoas decide se sentar ao redor de uma mesa redonda e jogar um jogo de cartas colecionáveis de bilhetes de loteria. Cada pessoa começa com um bilhete de loteria não raspado atribuído a ela aleatoriamente. Cada bilhete, quando raspado, revela um prêmio que varia de £1 até £$p$, sem que dois bilhetes tenham o mesmo prêmio. O objetivo do jogo é que cada pessoa maximize os ganhos em seus bilhetes ao sair do jogo.

Uma pessoa arbitrária é escolhida para ser o primeiro jogador. Dando a volta na mesa, cada jogador tem apenas uma de duas opções:

1.  O jogador pode raspar seu bilhete e revelar o valor dele para todos na mesa.
2.  O jogador pode trocar seu bilhete não raspado pelo bilhete raspado de um jogador anterior e, em seguida, sair do jogo com esse bilhete. O jogador anterior pode, então, raspar seu bilhete recém-adquirido e revelar o valor dele para todos na mesa.

O jogo termina quando todos os bilhetes tenham sido raspados. Todos os jogadores que ainda restarem à mesa têm de sair com os bilhetes que se encontram em suas mãos.

Assuma que cada jogador usa a estratégia ideal para maximizar o valor esperado de seus ganhos com os bilhetes.

Considere $E(p)$ como representando o número esperado de jogadores restantes na mesa quando o jogo termina em um jogo que consiste em $p$ jogadores (por exemplo, $E(111) = 5,2912$ quando arredondado para 5 algarismos significativos).

Considere $S_1(N) = \displaystyle\sum_{p = 1}^N E(p)$.

Considere $S_k(N) = \displaystyle\sum_{p = 1}^N S_{k - 1}(p)$ para $k > 1$.

Encontre $S_{20}({10}^{14})$ e escreva sua resposta como uma string em notação científica arredondada para 10 algarismos significativos. Use `e` em letra minúscula para separar a mantissa do expoente. Por exemplo, a resposta para $S_3(100)$ seria `5.983679014e5`.

# --hints--

`roundtableLottery()` deve retornar uma string.

```js
assert(typeof roundtableLottery() === 'string');
```

`roundtableLottery()` deve retornar a string `1.200856722e263`.

```js
assert.strictEqual(roundtableLottery(), '1.200856722e263');
```

# --seed--

## --seed-contents--

```js
function roundtableLottery() {

  return true;
}

roundtableLottery();
```

# --solutions--

```js
// solution required
```
