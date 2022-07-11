---
id: 5900f4da1000cf542c50ffed
title: 'Problema 366: Jogo da pedra III'
challengeType: 1
forumTopicId: 302027
dashedName: problem-366-stone-game-iii
---

# --description--

Dois jogadores, Anton e Bernhard, estão jogando o seguinte jogo.

Existe uma pilha de $n$ pedras.

O primeiro jogador pode remover qualquer número positivo de pedras, mas não a pilha toda.

Depois disso, cada jogador pode remover, no máximo, o dobro das pedras que seu oponente removeu no movimento anterior.

O jogador que remover a última pedra ganha.

Ex: $n = 5$

Se o primeiro jogador pegar mais do que uma pedra, o próximo jogador será capaz de pegar todas as pedras restantes.

Se o primeiro jogador pegar uma pedra, deixando quatro, o oponente dele pegará também uma pedra, deixando três pedras.

O primeiro jogador não pode pegar todas as três pedras restantes porque ele pode pegar no máximo $2 \times 1 = 2$ pedras. Então digamos que ele também leve uma pedra, deixando 2.

O segundo jogador pode pegar as duas pedras restantes e ganhar.

Portanto, 5 é uma posição em que o primeiro jogador perde.

Para algumas posições vencedoras, há mais de um movimento possível para o primeiro jogador.

Ex: quando $n = 17$, o primeiro jogador pode remover uma ou quatro pedras.

Considere $M(n)$ como o número máximo de pedras que o primeiro jogador pode remover em uma posição vencedora em seu primeiro movimento e $M(n) = 0$ para qualquer outra posição.

A $\sum M(n)$ para $n ≤ 100$ é 728.

Encontre a $\sum M(n)$ para $n ≤ {10}^{18}$. Dê sua resposta modulo ${10}^8$.

# --hints--

`stoneGameThree()` deve retornar `88351299`.

```js
assert.strictEqual(stoneGameThree(), 88351299);
```

# --seed--

## --seed-contents--

```js
function stoneGameThree() {

  return true;
}

stoneGameThree();
```

# --solutions--

```js
// solution required
```
