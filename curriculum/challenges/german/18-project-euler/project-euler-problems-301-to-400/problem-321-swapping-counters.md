---
id: 5900f4ae1000cf542c50ffc0
title: 'Problem 321: Spielsteine vertauschen'
challengeType: 1
forumTopicId: 301978
dashedName: problem-321-swapping-counters
---

# --description--

A horizontal row comprising of $2n + 1$ squares has $n$ red counters placed at one end and $n$ blue counters at the other end, being separated by a single empty square in the center. For example, when $n = 3$.

<img class="img-responsive center-block" alt="drei Quadrate mit roten und blauen Zählern an den gegenüberliegenden Enden der Reihe, getrennt durch ein leeres Feld" src="https://cdn.freecodecamp.org/curriculum/project-euler/swapping-counters-1.gif" style="background-color: white; padding: 10px;" />

Ein Spielstein kann sich von einem Feld zum nächsten bewegen (schieben) oder über einen anderen Spielstein springen (hüpfen), solange das Feld neben diesem Spielstein unbesetzt ist.

<img class="img-responsive center-block" alt="erlaubte Züge des Spielsteins" src="https://cdn.freecodecamp.org/curriculum/project-euler/swapping-counters-2.gif" style="background-color: white; padding: 10px;" />

Lasse $M(n)$ die minimale Anzahl von Zügen/Aktionen sein, um die Positionen der farbigen Spielsteine vollständig umzukehren, d.h. alle roten Spielsteine nach rechts und alle blauen Spielsteine nach links zu bewegen.

Es kann nachgewiesen werden, dass $M(3) = 15$ ist, was zufällig auch eine Dreieckszahl ist.

Wenn wir eine Sequenz erstellen, die auf den Werten von n basiert, für die $M(n)$ eine Dreieckszahl ist, dann wären die ersten fünf Terme: 1, 3, 10, 22, und 63, und ihre Summe wäre 99.

Finde die Summe der ersten vierzig Begriffe dieser Folge.

# --hints--

`swappingCounters()` should return `2470433131948040`.

```js
assert.strictEqual(swappingCounters(), 2470433131948040);
```

# --seed--

## --seed-contents--

```js
function swappingCounters() {

  return true;
}

swappingCounters();
```

# --solutions--

```js
// solution required
```
