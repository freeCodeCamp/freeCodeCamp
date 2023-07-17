---
id: 5900f5221000cf542c510033
title: 'Problema 436: Aposta injusta'
challengeType: 1
forumTopicId: 302107
dashedName: problem-436-unfair-wager
---

# --description--

Julie propõe a seguinte aposta à sua irmã Louise.

Ela sugere que joguem um jogo de azar para determinar quem lavará a louça.

Para esse jogo, elas usarão um gerador de números aleatórios independentes distribuídos uniformemente entre 0 e 1.

O jogo começa com $S = 0$.

O primeiro jogador, Louise, adiciona a $S$ números aleatórios diferentes do gerador até $S > 1$ e registra seu último número aleatório '$x$'.

O segundo jogador, Julie, continua a adicionar a $S$ números aleatórios diferentes do gerador até $S > 2$ e registra seu último número aleatório '$y$'.

O jogador com o maior número ganha e o perdedor lava a louça, ou seja, se $y > x$ o segundo jogador vence.

Por exemplo, se o primeiro jogador tem 0,62 e 0,44, a vez do primeiro jogador termina, já que $0,62 + 0,44 > 1$ e $x = 0,44$. Se o segundo jogador tem 0,1, 0,27 e 0,91, a vez do segundo jogador termina, já que $0,62 + 0,44 + 0,1 + 0,27 + 0,91 > 2$ e $y = 0,91$. Como $y > x$, o segundo jogador vence.

Louise pensa por uns instantes e declara: "Isso não é justo".

Qual é a probabilidade de o segundo jogador vencer? Arredonde sua resposta para até 10 casas decimais usando o formato 0.abcdefghij

# --hints--

`unfairWager()` deve retornar `0.5276662759`.

```js
assert.strictEqual(unfairWager(), 0.5276662759);
```

# --seed--

## --seed-contents--

```js
function unfairWager() {

  return true;
}

unfairWager();
```

# --solutions--

```js
// solution required
```
