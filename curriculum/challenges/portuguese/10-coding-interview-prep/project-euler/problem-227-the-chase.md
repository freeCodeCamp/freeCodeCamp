---
id: 5900f44f1000cf542c50ff61
title: 'Problema 227: A caçada'
challengeType: 5
forumTopicId: 301870
dashedName: problem-227-the-chase
---

# --description--

"A caçada" é um jogo que consiste em dois dados e um número par de jogadores.

Os jogadores sentam-se ao redor de uma mesa. O jogo começa com dois jogadores opostos tendo um dado cada. A cada turno, os dois jogadores que têm o dado o rolam.

Se o jogador rolar um 1, ele passa o dado ao vizinho à esquerda.

Se o jogador rolar um 6, ele passa o dado ao vizinho à direita.

Caso contrário, ele mantém o dado no próximo turno.

O jogo termina quando um jogador tem os dois dados depois que eles forem rolados e passados. Aquele jogador perdeu.

Em um jogo com 100 jogadores, qual é o número esperado de turnos que dure o jogo? Dê sua resposta arredondada para dez algarismos significativos (total de casas somando antes e depois da vírgula).

# --hints--

`theChase()` deve retornar `3780.618622`.

```js
assert.strictEqual(theChase(), 3780.618622);
```

# --seed--

## --seed-contents--

```js
function theChase() {

  return true;
}

theChase();
```

# --solutions--

```js
// solution required
```
