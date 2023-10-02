---
id: 5900f4551000cf542c50ff67
title: 'Problem 232: The Race'
challengeType: 1
forumTopicId: 301876
dashedName: problem-232-the-race
---

# --description--

Zwei Spieler teilen sich eine unparteiische Münze und spielen abwechselnd "The Race".

Wenn Spieler 1 an der Reihe ist, wirft er die Münze einmal: Wenn sie Kopf zeigt, erhält er einen Punkt; wenn sie Zahl zeigt, erhält er keinen Punkt.

Wenn Spieler 2 an der Reihe ist, wählt er eine positive ganze Zahl $T$ und wirft die Münze $T$ Mal: Wenn sie immer Kopf zeigt, erhält er $2^{T - 1}$ Punkte; andernfalls erhält er keine Punkte.

Spieler 1 fängt an. Der Gewinner ist der erste, der 100 oder mehr Punkte erreicht.

In jedem Zug wählt Spieler 2 die Anzahl $T$ der Münzwürfe, die seine Gewinnwahrscheinlichkeit maximiert.

Wie hoch ist die Wahrscheinlichkeit, dass Spieler 2 gewinnt?

Gib deine Antwort auf acht Dezimalstellen gerundet in der Form 0.abcdefgh an.

# --hints--

`theRace()` sollte `0.83648556` zurückgeben.

```js
assert.strictEqual(theRace(), 0.83648556);
```

# --seed--

## --seed-contents--

```js
function theRace() {

  return true;
}

theRace();
```

# --solutions--

```js
// solution required
```
