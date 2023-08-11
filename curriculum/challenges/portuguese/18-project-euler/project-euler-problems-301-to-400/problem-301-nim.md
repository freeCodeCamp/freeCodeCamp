---
id: 5900f4991000cf542c50ffab
title: 'Problema 301: Nim'
challengeType: 1
forumTopicId: 301955
dashedName: problem-301-nim
---

# --description--

Nim é um jogo jogado com pilhas de pedras, onde dois jogadores, cada um em seu turno, removem um número de pedras qualquer de alguma das pilhas até que nenhuma pedra permaneça.

Vamos considerar a versão normal de jogo do Nim, com três pilhas, que funciona da seguinte forma:

- No início do jogo, há três pilhas de pedras.
- Em sua vez, o jogador remove qualquer número positivo de pedras de qualquer pilha.
- O primeiro jogador que não puder fazer movimentos (por não haver pedras sobrando) perde.

Se ($n_1$, $n_2$, $n_3$) indica uma posição do Nim composta por pilhas de tamanho $n_1$, $n_2$ e $n_3$, há uma função simples $X(n_1,n_2, _3)$ — que você pode procurar ou tentar deduzir por conta própria — que retorna:

- zero se, com estratégia perfeita, o jogador que está prestes a fazer seu movimento perder; ou
- diferente de zero se, com a estratégia perfeita, o jogador que está prestes a fazer seu movimento vencer.

Por exemplo $X(1, 2, 3) = 0$ porque, independentemente do jogador atual, o oponente dele pode responder com um movimento que deixa duas pilhas de tamanho igual, ponto em que qualquer movimento do jogador atual pode ser espelhado por seu oponente até que nenhuma pedra permaneça e o jogador atual perca. Para ilustrar:

- o jogador atual deixa (1,2,1) nas pilhas
- oponente deixa (1,0,1)
- o jogador atual deixa (0,0,1) nas pilhas
- o oponente deixa (0,0,0) e ganha.

Para quantos números inteiros positivos $n ≤ 2^{30}$ temos que $X(n, 2n, 3n) = 0$?

# --hints--

`nim()` deve retornar `2178309`.

```js
assert.strictEqual(nim(), 2178309);
```

# --seed--

## --seed-contents--

```js
function nim() {

  return true;
}

nim();
```

# --solutions--

```js
// solution required
```
