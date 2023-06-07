---
id: 5900f49f1000cf542c50ffb1
title: 'Problem 306: Papierstreifen-Spiel'
challengeType: 1
forumTopicId: 301960
dashedName: problem-306-paper-strip-game
---

# --description--

Das folgende Spiel ist ein klassisches Beispiel für die kombinatorische Spieltheorie:

Zwei Spieler beginnen mit einem Streifen aus $n$ weißen Feldern und wechseln sich ab. In jedem Zug wählt ein Spieler zwei zusammenhängende weiße Quadrate aus und malt sie schwarz an. Der erste Spieler, der keinen Zug machen kann, hat verloren.

- $n = 1$: Keine gültigen Züge, also verliert der erste Spieler automatisch.
- $n = 2$: Nur ein gültiger Zug, nach dem der zweite Spieler verliert.
- $n = 3$: Zwei gültige Züge, aber beide führen zu einer Situation, in der der zweite Spieler verliert.
- $n = 4$: Es gibt drei gültige Züge für den ersten Spieler; er kann das Spiel gewinnen, indem er die beiden mittleren Felder anmalt.
- $n = 5$: Vier gültige Züge für den ersten Spieler (unten in rot dargestellt); aber egal, was der Spieler macht, der zweite Spieler (blau) gewinnt.

<img class="img-responsive center-block" alt="gültige Startzüge für Streifen mit 5 Feldern" src="https://cdn.freecodecamp.org/curriculum/project-euler/paper-strip-game.gif" style="background-color: white; padding: 10px;" />

Für $1 ≤ n ≤ 5$ gibt es also 3 Werte von $n$, für die der erste Spieler einen Sieg erzwingen kann.

Analog dazu gibt es für $1 ≤ n ≤ 50$ 40 Werte von $n$, für die der erste Spieler einen Sieg erzwingen kann.

Für $1 ≤ n ≤ 1\\,000\\,000$, wie viele Werte von $n$ gibt es, für die der erste Spieler einen Sieg erzwingen kann?

# --hints--

`paperStripGame()` sollte `852938` zurückgeben.

```js
assert.strictEqual(paperStripGame(), 852938);
```

# --seed--

## --seed-contents--

```js
function paperStripGame() {

  return true;
}

paperStripGame();
```

# --solutions--

```js
// solution required
```
