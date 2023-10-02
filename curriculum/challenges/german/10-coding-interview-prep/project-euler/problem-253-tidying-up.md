---
id: 5900f4691000cf542c50ff7c
title: 'Problem 253: Aufräumen'
challengeType: 1
forumTopicId: 301901
dashedName: problem-253-tidying-up
---

# --description--

Ein kleines Kind hat eine "Zahlenraupe", die aus vierzig Puzzlestücken besteht, auf denen jeweils eine Zahl steht, die, wenn sie in einer Reihe zusammengefügt werden, die Zahlen 1 bis 40 ergeben.

Jeden Abend muss der Vater des Kindes die Teile der Raupe aufsammeln, die im Spielzimmer verstreut sind. Er hebt die Teile nach dem Zufallsprinzip auf und bringt sie in die richtige Reihenfolge.

Während die Raupe auf diese Weise aufgebaut wird, bildet sie verschiedene Segmente, die allmählich ineinander übergehen. Die Anzahl der Segmente beginnt bei Null (keine Spielsteine), steigt im Allgemeinen auf etwa elf oder zwölf an und nimmt dann wieder ab, bevor sie bei einem einzigen Segment endet (alle Spielsteine sind platziert).

Zum Beispiel:

| Piece Placed | Bisherige Segmente |
| ------------ | ------------------ |
| 12           | 1                  |
| 4            | 2                  |
| 29           | 3                  |
| 6            | 4                  |
| 34           | 5                  |
| 5            | 4                  |
| 35           | 4                  |
| …            | …                  |

Lasse $M$ die maximale Anzahl von Segmenten sein, die beim Aufräumen der Raupe zufällig gefunden werden. Bei einer zehnteiligen Raupe ist die Anzahl der Möglichkeiten für jedes $M$

| M | Möglichkeiten |
| - | ------------- |
| 1 | 512           |
| 2 | 250912        |
| 3 | 1815264       |
| 4 | 1418112       |
| 5 | 144000        |

der wahrscheinlichste Wert von $M$ ist also 3 und der Durchschnittswert ist $\frac{385\\,643}{113\\,400} = 3,400732$, gerundet auf sechs Dezimalstellen.

Der wahrscheinlichste Wert von $M$ für eine vierzigteilige Raupe ist 11; aber was ist der durchschnittliche Wert von $M$? Gib deine Antwort auf sechs Dezimalstellen gerundet an.

# --hints--

`tidyingUp()` sollte `11.492847` zurückgeben.

```js
assert.strictEqual(tidyingUp(), 11.492847);
```

# --seed--

## --seed-contents--

```js
function tidyingUp() {

  return true;
}

tidyingUp();
```

# --solutions--

```js
// solution required
```
