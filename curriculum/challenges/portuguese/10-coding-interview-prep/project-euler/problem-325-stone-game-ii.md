---
id: 5900f4b11000cf542c50ffc4
title: 'Problema 325: Jogo da pedra II'
challengeType: 1
forumTopicId: 301982
dashedName: problem-325-stone-game-ii
---

# --description--

Uma partida é jogada com duas pilhas de pedras e dois jogadores. No turno de cada jogador, ele pode remover um número de pedras da pilha maior. O número de pedras removidas deve ser um múltiplo positivo do número de pedras na pilha menor.

Exemplo: considere o par ordenado (6,14) como capaz de descrever uma configuração com 6 pedras na pilha menor e 14 pedras na pilha maior. Então, o primeiro jogador pode remover 6 ou 12 pedras da pilha maior.

O jogador que pegar todas as pedras de uma pilha ganha o jogo.

Uma configuração vencedora é aquela onde o primeiro jogador pode forçar uma vitória. Por exemplo, (1,5), (2,6) e (3,12) são configurações vencedores porque o primeiro jogador pode remover imediatamente todas as pedras na segunda pilha.

Uma configuração perdedora é aquela onde o segundo jogador pode forçar uma vitória, não importando o que o primeiro jogador faça. Por exemplo, (2,3) e (3,4) são configurações perdedoras: qualquer movimento legal deixa uma configuração vencedora para o segundo jogador.

Defina $S(N)$ como a soma de ($x_i + y_i$) para todas as configurações perdedoras ($x_i$, $y_i$), $0 &lt; x_i &lt; y_i ≤ N$. Podemos verificar que $S(10) = 211$ e $S({10}^4) = 230.312.207.313$.

Encontre $S({10}^{16})\bmod 7^{10}$.

# --hints--

`stoneGameTwo()` deve retornar `54672965`.

```js
assert.strictEqual(stoneGameTwo(), 54672965);
```

# --seed--

## --seed-contents--

```js
function stoneGameTwo() {

  return true;
}

stoneGameTwo();
```

# --solutions--

```js
// solution required
```
