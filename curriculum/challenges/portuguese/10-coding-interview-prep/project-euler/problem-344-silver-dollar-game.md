---
id: 5900f4c51000cf542c50ffd7
title: 'Problema 344: Jogo do dólar de prata'
challengeType: 1
forumTopicId: 302003
dashedName: problem-344-silver-dollar-game
---

# --description--

Uma variante de N.G. de Bruijn, conhecida como o jogo do dólar de prata, pode ser descrita da seguinte forma:

Em uma faixa de quadrados, várias moedas são colocadas, estando, no máximo, uma moeda por quadrado. Apenas uma moeda, chamada de dólar de prata, tem qualquer valor. Dois jogadores se revezam fazendo movimentos. Em cada turno, um jogador deve fazer um movimento regular ou especial.

Um movimento regular consiste em selecionar uma moeda e movê-la um ou mais quadrados para a esquerda. A moeda não pode se mover para fora da faixa, ou saltar sobre ou por cima de outra moeda.

Como alternativa, o jogador pode escolher fazer o movimento especial de guardar a moeda mais à esquerda, em vez de fazer um movimento regular. Se nenhum movimento regular for possível, o jogador será forçado a guardar a moeda mais à esquerda.

O vencedor é o jogador que guarda o dólar de prata.

<img class="img-responsive center-block" alt="jogo do dólar de prata" src="https://cdn.freecodecamp.org/curriculum/project-euler/silver-dollar-game.gif" style="background-color: white; padding: 10px;" />

Uma configuração vencedora é um arranjo de moedas na faixa onde o primeiro jogador pode forçar uma vitória, não importa o que o segundo jogador fizer.

Considere $W(n, c)$ como o número de configurações vencedoras para uma faixa de $n$ quadrados, $c$ moedas sem valor e um dólar de prata.

Você é informado de que $W(10, 2) = 324$ e $W(100, 10) = 1.514.704.946.113.500$.

Encontre $W(1.000.000, 100)$ modulo o número semiprimo $1000.036.000.099 (= 1.000.003 \times 1.000.033)$.

# --hints--

`silverDollarGame()` deve retornar `65579304332`.

```js
assert.strictEqual(silverDollarGame(), 65579304332);
```

# --seed--

## --seed-contents--

```js
function silverDollarGame() {

  return true;
}

silverDollarGame();
```

# --solutions--

```js
// solution required
```
