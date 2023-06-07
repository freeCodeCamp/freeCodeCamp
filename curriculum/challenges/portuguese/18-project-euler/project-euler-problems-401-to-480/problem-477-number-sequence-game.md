---
id: 5900f54a1000cf542c51005c
title: 'Problema 477: Jogo de sequência de números'
challengeType: 1
forumTopicId: 302154
dashedName: problem-477-number-sequence-game
---

# --description--

O jogo de sequência de números começa com uma sequência $S$ de $N$ números escritos em uma linha.

Dois jogadores alternam sua vez. Na sua vez, um jogador deve selecionar e remover o primeiro ou o último número restante na sequência.

A pontuação do jogador é a soma de todos os números que ele recebeu. Cada jogador tenta maximizar sua própria soma.

Se $N = 4$ e $S = \\{1, 2, 10, 3\\}$, então cada jogador maximiza sua pontuação da seguinte forma:

- Jogador 1: remove o primeiro número (1)
- Jogador 2: remove o último número da sequência restante (3)
- Jogador 1: remove o último número da sequência restante (10)
- Jogador 2: remove o número restante (2)

A pontuação do jogador 1 é $1 + 10 = 11$.

Considere $F(N)$ como a pontuação do jogador 1 se ambos os jogadores seguirem a estratégia ideal para a sequência $S = \\{s_1, s_2, \ldots, s_N\\}$, definida como:

- $s_1 = 0$
- $s_{i + 1} = ({s_i}^2 + 45)$ modulo $1.000.000.007$

A sequência começa com $S = \\{0, 45, 2.070, 4.284.945, 753.524.550, 478.107.844, 894.218.625, \ldots\\}$.

Você é informado de que $F(2) = 45$, $F(4) = 4.284.990$, $F(100) = 26.365.463.243$, $F(104) = 2.495.838.522.951$.

Encontre $F({10}^8)$.

# --hints--

`numberSequenceGame()` deve retornar `25044905874565164`.

```js
assert.strictEqual(numberSequenceGame(), 25044905874565164);
```

# --seed--

## --seed-contents--

```js
function numberSequenceGame() {

  return true;
}

numberSequenceGame();
```

# --solutions--

```js
// solution required
```
