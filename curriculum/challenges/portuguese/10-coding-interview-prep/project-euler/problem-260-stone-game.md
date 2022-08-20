---
id: 5900f4701000cf542c50ff83
title: 'Problema 260: Jogo da pedra'
challengeType: 1
forumTopicId: 301909
dashedName: problem-260-stone-game
---

# --description--

Uma partida é jogada com três pilhas de pedras e dois jogadores.

No turno de cada jogador, ele remove uma ou mais pedras das pilhas. No entanto, se o jogador recebe pedras de mais de uma pilha, o mesmo número de pedras deve ser removido de cada uma das pilhas selecionadas.

Em outras palavras, o jogador escolhe algumas $N > 0$ e as remove:

- $N$ pedras de qualquer pilha; ou
- $N$ pedras de duas pilhas (total de $2N$); ou
- $N$ pedras de três pilhas (total de $3N$).

O jogador que ficar com a(s) última(s) pedra(s) ganha o jogo.

Uma configuração vencedora é aquela onde o primeiro jogador pode forçar uma vitória.

Por exemplo, (0,0,13), (0,11,11) e (5,5,5) são configurações vencedores porque o primeiro jogador pode remover imediatamente todas as pedras.

Uma configuração perdedora é aquela onde o segundo jogador pode forçar uma vitória, não importa o que o primeiro jogador faça.

Por exemplo, (0,1,2) e (1,3,3) são configurações perdedoras: qualquer movimento legal deixa uma configuração vencedora para o segundo jogador.

Considere todas as configurações perdedoras ($x_i$,$y_i$,$z_i$) onde $x_i ≤ y_i ≤ z_i ≤ 100$. Podemos verificar que $\sum (x_i + y_i + z_i) = 173.895$ para elas.

Encontre $\sum (x_i + y_i + z_i)$ onde ($x_i$,$y_i$,$z_i$) passa pelas configurações perdedoras com $x_i ≤ y_i ≤ z_i ≤ 1000$.

# --hints--

`stoneGame()` deve retornar `167542057`.

```js
assert.strictEqual(stoneGame(), 167542057);
```

# --seed--

## --seed-contents--

```js
function stoneGame() {

  return true;
}

stoneGame();
```

# --solutions--

```js
// solution required
```
