---
id: 5900f54a1000cf542c51005c
title: 'Problem 477: Zahlenreihenfolge-Spiel'
challengeType: 1
forumTopicId: 302154
dashedName: problem-477-number-sequence-game
---

# --description--

Das Zahlenfolgespiel beginnt mit einer Folge $S$ von $N$ Zahlen, die in eine Zeile geschrieben werden.

Zwei Spieler wechseln sich ab. Wenn ein Spieler an der Reihe ist, muss er entweder die erste oder die letzte verbleibende Zahl in der Reihe auswählen und entfernen.

Die Punktzahl des Spielers ergibt sich aus der Summe aller Zahlen, die er gezogen hat. Jeder Spieler versucht, seine eigene Summe zu maximieren.

Wenn $N = 4$ und $S = \\{1, 2, 10, 3\\}$, dann maximiert jeder Spieler seine Punktzahl wie folgt:

- Spieler 1: entfernt die erste Zahl (1)
- Spieler 2: entfernt die letzte Zahl aus der verbleibenden Sequenz (3)
- Spieler 1: entfernt die letzte Zahl aus der verbleibenden Sequenz (10)
- Spieler 2: entfernt die verbleibende Zahl (2)

Die Punktzahl von Spieler 1 beträgt $1 + 10 = 11$.

$F(N)$ ist die Punktzahl von Spieler 1, wenn beide Spieler die optimale Strategie für die Folge $S = \\{s_1, s_2, \ldots, s_N\\}$ verfolgen und ist somit definiert als:

- $s_1 = 0$
- $s_{i + 1} = ({s_i}^2 + 45)$ modulo $1\\,000\\,000\\,007$

Die Folge beginnt mit $S = \\{0, 45, 2\\,070, 4\\,284\\,945, 753\,524\\,550, 478\,107\\,844, 894\,218\\,625, \ldots\\\}$.

Folgendes ist gegeben: $F(2) = 45$, $F(4) = 4\\,284\\,990$, $F(100) = 26\\,365\\,463\\,243$, $F(104) = 2\\,495\\,838\\,522\\,951$.

Finde $F({10}^8)$.

# --hints--

`numberSequenceGame()` sollte `25044905874565164` zurückgeben.

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
