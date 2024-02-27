---
id: 5900f4971000cf542c50ffa9
title: 'Problem 298: Selektive Amnesie'
challengeType: 1
forumTopicId: 301950
dashedName: problem-298-selective-amnesia
---

# --description--

Larry and Robin play a memory game involving of a sequence of random numbers between 1 and 10, inclusive, that are called out one at a time. Each player can remember up to 5 previous numbers. When the called number is in a player's memory, that player is awarded a point. If it's not, the player adds the called number to his memory, removing another number if his memory is full.

Beide Spieler beginnen ohne eine Zahl im Gedächtnis. Beide Spieler fügen immer neue noch nicht gannnete Zahlen in ihren Speicher ein, verwenden aber eine andere Strategie, um zu entscheiden, welche Nummer entfernt werden soll: Larrys Strategie besteht darin, die Nummer zu entfernen, die am längsten nicht mehr genannt wurde. Robins Strategie ist es, die Nummer zu entfernen, die er sich am längsten gemerkt hat.

Beispielspiel:

| Turn | Aufgerufene Nummer | Larry's memory | Larry's score | Robin's memory | Robin's score |
| ---- | ------------------ | --------------:| ------------- | -------------- | ------------- |
| 1    | 1                  |              1 | 0             | 1              | 0             |
| 2    | 2                  |            1,2 | 0             | 1,2            | 0             |
| 3    | 4                  |          1,2,4 | 0             | 1,2,4          | 0             |
| 4    | 6                  |        1,2,4,6 | 0             | 1,2,4,6        | 0             |
| 5    | 1                  |        1,2,4,6 | 1             | 1,2,4,6        | 1             |
| 6    | 8                  |      1,2,4,6,8 | 1             | 1,2,4,6,8      | 1             |
| 7    | 10                 |     1,4,6,8,10 | 1             | 2,4,6,8,10     | 1             |
| 8    | 2                  |     1,2,6,8,10 | 1             | 2,4,6,8,10     | 2             |
| 9    | 4                  |     1,2,4,8,10 | 1             | 2,4,6,8,10     | 3             |
| 10   | 1                  |     1,2,4,8,10 | 2             | 1,4,6,8,10     | 3             |

Berücksichtigt man Larry's Punktzahl bei $L$ und Robin's Punktzahl bei $R$, was ist der vorraussichtliche Wert von $|L - R|$ nach 50 Zügen? Gib deine Antwort auf acht Dezimalstellen gerundet im Format x.xxxxxxxx an.

# --hints--

`selectiveAmnesia()` should return `1.76882294`.

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
