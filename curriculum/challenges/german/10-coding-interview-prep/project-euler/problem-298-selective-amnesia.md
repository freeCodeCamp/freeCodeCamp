---
id: 5900f4971000cf542c50ffa9
title: 'Problem 298: Selektive Amnesie'
challengeType: 1
forumTopicId: 301950
dashedName: problem-298-selective-amnesia
---

# --description--

Larry und Robin spielen ein Gedächtnisspiel mit einer Sequenz von zufälligen Zahlen zwischen 1 und 10, welche nacheinander aufgerufen werden. Jeder Spieler kann sich bis zu 5 vorherige Zahlen merken. Wenn sich die aufgerufene Nummer im Gedächtnis eines Spielers befindet, erhält dieser Spieler einen Punkt. Wenn das nicht der Fall ist, fügt der Spieler die aufgerufene Nummer seinem Gedächtnis hinzu, indem er eine weitere Zahl löscht, wenn er sich nichts mehr merken kann.

Beide Spieler beginnen ohne eine Zahl im Gedächtnis. Beide Spieler fügen immer neue noch nicht gannnete Zahlen in ihren Speicher ein, verwenden aber eine andere Strategie, um zu entscheiden, welche Nummer entfernt werden soll: Larrys Strategie besteht darin, die Nummer zu entfernen, die am längsten nicht mehr genannt wurde. Robins Strategie ist es, die Nummer zu entfernen, die er sich am längsten gemerkt hat.

Beispielspiel:

| Zug | Aufgerufene Nummer | Larry's Gedächtnis | Larry's Punktzahl | Robin's Gedächtnis | Robin's Punktzahl |
| --- | ------------------ | ------------------:| ----------------- | ------------------ | ----------------- |
| 1   | 1                  |                  1 | 0                 | 1                  | 0                 |
| 2   | 2                  |                1,2 | 0                 | 1,2                | 0                 |
| 3   | 4                  |              1,2,4 | 0                 | 1,2,4              | 0                 |
| 4   | 6                  |            1,2,4,6 | 0                 | 1,2,4,6            | 0                 |
| 5   | 1                  |            1,2,4,6 | 1                 | 1,2,4,6            | 1                 |
| 6   | 8                  |          1,2,4,6,8 | 1                 | 1,2,4,6,8          | 1                 |
| 7   | 10                 |         1,4,6,8,10 | 1                 | 2,4,6,8,10         | 1                 |
| 8   | 2                  |         1,2,6,8,10 | 1                 | 2,4,6,8,10         | 2                 |
| 9   | 4                  |         1,2,4,8,10 | 1                 | 2,4,6,8,10         | 3                 |
| 10  | 1                  |         1,2,4,8,10 | 2                 | 1,4,6,8,10         | 3                 |

Berücksichtigt man Larry's Punktzahl bei $L$ und Robin's Punktzahl bei $R$, was ist der vorraussichtliche Wert von $|L - R|$ nach 50 Zügen? Gebe deine Antwort auf sechs Dezimalstellen gerundet in der Form x.xxxxxxxx an .

# --hints--

`selectiveAmnesia()` sollte `1.76882294` zurückgeben.

```js
assert.strictEqual(selectiveAmnesia(), 1.76882294);
```

# --seed--

## --seed-contents--

```js
function selectiveAmnesia() {

  return true;
}

selectiveAmnesia();
```

# --solutions--

```js
// solution required
```
