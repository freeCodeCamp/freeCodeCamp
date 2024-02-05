---
id: 5900f4c51000cf542c50ffd7
title: 'Problem 344: Silberdollar-Spiel'
challengeType: 1
forumTopicId: 302003
dashedName: problem-344-silver-dollar-game
---

# --description--

One variant of N.G. de Bruijn's silver dollar game can be described as follows:

Auf einem Streifen von Quadraten wird eine Anzahl von Münzen platziert, höchstens eine Münze pro Quadrat. Nur eine Münze, der Silberdollar, hat einen Wert. Zwei Spieler machen abwechselnd Züge. In jedem Zug muss ein Spieler entweder einen normalen oder einen besonderen Zug machen.

Ein regulärer Zug besteht darin, eine Münze auszuwählen und sie ein oder mehrere Felder nach links zu bewegen. Die Münze kann sich nicht aus dem Streifen herausbewegen oder auf oder über eine andere Münze springen.

Alternativ kann der Spieler auch den Sonderzug wählen, bei dem er die linke Münze einsteckt, anstatt einen normalen Zug zu machen. Wenn keine regulären Züge möglich sind, ist der Spieler gezwungen, die Münze links einzusacken.

Der Gewinner ist der Spieler, der den Silberdollar einsteckt.

<img class="img-responsive center-block" alt="Silberdollar-Spiel" src="https://cdn.freecodecamp.org/curriculum/project-euler/silver-dollar-game.gif" style="background-color: white; padding: 10px;" />

Eine Gewinnkonfiguration ist eine Anordnung von Münzen auf dem Streifen, bei der der erste Spieler einen Gewinn erzwingen kann, egal was der zweite Spieler tut.

Lasse $W(n, c)$ die Anzahl der Gewinnkonfigurationen für einen Streifen aus $n$ Quadraten sein, $c$ wertlosen Münzen und einem Silberdollar.

You are given that $W(10, 2) = 324$ and $W(100, 10) = 1\\,514\\,704\\,946\\,113\\,500$.

Finde $W(1\\,000\\,000, 100)$ modulo der Halbzahl $1000\\,036\\,000\,099 (= 1\\,000\,003 \times 1\\,000\,033)$.

# --hints--

`silverDollarGame()` should return `65579304332`.

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
