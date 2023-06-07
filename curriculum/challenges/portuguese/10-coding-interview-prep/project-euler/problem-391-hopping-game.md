---
id: 5900f4f31000cf542c510006
title: 'Problema 391: Jogo de saltos'
challengeType: 1
forumTopicId: 302056
dashedName: problem-391-hopping-game
---

# --description--

Considere $s_k$ como o número de 1s ao escrever os números de 0 a $k$ em binário.

Por exemplo, escrevendo de 0 a 5 em binário, temos 0, 1, 10, 11, 100 e 101. São sete números 1, portanto $s_5 = 7$.

A sequência $S = \\{s_k : k ≥ 0\\}$ começa com $\\{0, 1, 2, 4, 5, 7, 9, 12, \ldots\\}$.

Dois jogadores jogam. Antes de o jogo começar, um número $n$ é selecionado. Um contador $c$ começa em 0. A cada turno, o jogador escolhe um número de 1 a $n$ (inclusive) e aumenta $c$ por aquele número. O valor resultante de $c$ deve pertencer a $S$. Se não houver mais movimentos válidos, o jogador perde.

Por exemplo, com $n = 5$ e começando com $c = 0$:

- O jogador 1 escolhe 4, então $c$ passa a ser $0 + 4 = 4$.
- O jogador 2 escolhe 5, então $c$ passa a ser $4 + 5 = 9$.
- O jogador 1 escolhe 3, então $c$ passa a ser $9 + 3 = 12$.
- etc.

Observe que $c$ deve sempre pertencer a $S$ e que cada jogador pode aumentar $c$ em, no máximo, $n$.

Considere $M(n)$ como o maior número que o primeiro jogador pode escolher em sua primeira jogada para forçar uma vitórias, e que $M(n) = 0$ se esse movimento não existir. Por exemplo, $M(2) = 2$, $M(7) = 1$ e $M(20) = 4$.

Pode-se verificar que $\sum M{(n)}^3 = 8150$ para $1 ≤ n ≤ 20$.

Encontre a $\sum M{(n)}^3$ para $1 ≤ n ≤ 1000$.

# --hints--

`hoppingGame()` deve retornar `61029882288`.

```js
assert.strictEqual(hoppingGame(), 61029882288);
```

# --seed--

## --seed-contents--

```js
function hoppingGame() {

  return true;
}

hoppingGame();
```

# --solutions--

```js
// solution required
```
