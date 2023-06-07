---
id: 5900f4a11000cf542c50ffb4
title: 'Problem 309: Integer-Leitern'
challengeType: 1
forumTopicId: 301963
dashedName: problem-309-integer-ladders
---

# --description--

Bei dem klassischen Problem "Leitern zu überqueren" sind die Längen $x$ und $y$ zweier Leitern gegeben, die an den gegenüberliegenden Wänden einer schmalen, ebenen Straße stehen. Wir erhalten auch die Höhe $h$ über der Straße, in der sich die beiden Leitern kreuzen, und wir sollen die Breite der Straße ($w$) bestimmen.

<img class="img-responsive center-block" alt="Leitern x und y, die sich in der Höhe h kreuzen und auf gegenüberliegenden Wänden der Straße mit der Breite w aufliegen" src="https://cdn.freecodecamp.org/curriculum/project-euler/integer-ladders.gif" style="background-color: white; padding: 10px;" />

Wir befassen uns hier nur mit Fällen, in denen alle vier Variablen positive Integer sind. Wenn zum Beispiel $x = 70$, $y = 119$ und $h = 30$, können wir berechnen, dass $w = 56$.

Tatsächlich gibt es für die ganzzahligen Werte $x$, $y$, $h$ und $0 &lt; x &lt; y &lt; 200$ nur fünf Tripel ($x$, $y$, $h$), die ganzzahlige Lösungen für $w$ ergeben: (70, 119, 30), (74, 182, 21), (87, 105, 35), (100, 116, 35) und (119, 175, 40).

Für die ganzzahligen Werte $x$, $y$, $h$ und $0 &lt; x &lt; y &lt; 1\,000\,000$, wie viele Tripel ($x$, $y$, $h$) ergeben ganzzahlige Lösungen für $w$?

# --hints--

`integerLadders()` sollte `210139` zurückgeben.

```js
assert.strictEqual(integerLadders(), 210139);
```

# --seed--

## --seed-contents--

```js
function integerLadders() {

  return true;
}

integerLadders();
```

# --solutions--

```js
// solution required
```
