---
id: 5900f5431000cf542c510055
title: 'Problem 470: Super Ramvok'
challengeType: 1
forumTopicId: 302146
dashedName: problem-470-super-ramvok
---

# --description--

Nehmen wir ein einziges Spiel Ramvok:

Lasse $t$ die maximale Anzahl an Spielzügen sein, die das Spiel dauert. Wenn $t = 0$, dann endet das Spiel sofort. Andernfalls würfelt der Spieler in jeder Runde $i$ einen Würfel. Wenn $i &lt; t$ gewürfelt wurde, kann der Spieler entweder das Spiel beenden und einen Preis in Höhe des aktuellen Wurfes erhalten, oder den Wurf verwerfen und es in der nächsten Runde erneut versuchen. Ist $i = t$, so kann der Wurf nicht verworfen werden und der Gewinn muss angenommen werden. Bevor das Spiel beginnt, wird $t$ vom Spieler gewählt, der dann für eine gewisse Konstante $c$ eine Vorauszahlung $ct$ leisten muss. Für $c = 0$ kann $t$ unendlich groß gewählt werden (mit Vorlaufkosten von 0). Lasse $R(d, c)$ der erwartete Gewinn (d.h. der Nettogewinn) sein, den der Spieler aus einem einzigen optimal gespielten Ramvok-Spiel erhält, wenn er einen fairen Würfel mit $d$-Seiten und eine Kostenkonstante $c$ hat. Zum Beispiel, $R(4, 0.2) = 2.65$. Es wird davon ausgegangen, dass der Spieler über ausreichende finanzielle Mittel verfügt, um alle Vorabkosten zu bezahlen.

Betrachte nun eine Partie Super Ramvok:

In Super Ramvok wird das Spiel Ramvok wiederholt, aber mit einer leichten Abwandlung gespielt. Nach jedem Spiel wird der Würfel verändert. Der Veränderungsprozess läuft folgendermaßen ab: Der Würfel wird einmal gewürfelt, und wenn die resultierende Seite die Punkte sichtbar macht, wird diese Seite in eine leere Seite umgewandelt. Wenn die Fläche bereits leer ist, wird sie auf ihren ursprünglichen Wert zurückgesetzt. Nachdem die Änderung vorgenommen wurde, kann eine neue Partie Ramvok beginnen (und während einer solchen Partie wird der Würfel bei jedem Zug geworfen, bis eine Seite mit einem Wert darauf erscheint). Der Spieler weiß zu jeder Zeit, welche Flächen leer sind und welche nicht. Das Spiel Super Ramvok endet, wenn alle Seiten des Würfels leer sind.

Lasse $S(d, c)$ der erwartete Gewinn sein, den der Spieler bei einer optimal gespielten Partie Super-Ramvok erhält, wenn er mit einem fairen Würfel mit $d$ Seiten (alle Seiten sichtbar) beginnt und die Kostenkonstante $c$ hat. Zum Beispiel $S(6, 1) = 208.3$.

Lasse $F(n) = \sum_{4 ≤ d ≤ n} \sum_{0 ≤ c ≤ n} S(d, c)$ sein.

Berechne $F(20)$, gerundet auf den nächsten Integer.

# --hints--

`superRamvok()` sollte `147668794` zurückgeben.

```js
assert.strictEqual(superRamvok(), 147668794);
```

# --seed--

## --seed-contents--

```js
function superRamvok() {

  return true;
}

superRamvok();
```

# --solutions--

```js
// solution required
```
