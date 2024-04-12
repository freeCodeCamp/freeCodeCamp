---
id: 5900f3b01000cf542c50fec3
title: 'Problem 68: Magischer 5er-Ring'
challengeType: 1
forumTopicId: 302180
dashedName: problem-68-magic-5-gon-ring
---

# --description--

Betrachte den folgenden "magischen" 3er-Ring, der mit den Zahlen 1 bis 6 gefüllt ist, wobei jede Zeile die Zahl neun ergibt.

<img class="img-responsive center-block" alt="ein fertiges Beispiel eines 3er-Rings" src="https://cdn-media-1.freecodecamp.org/project-euler/3-gon-ring.png" style="background-color: white; padding: 10px;" />

Wenn man **im Uhrzeigersinn** arbeitet und von der Dreiergruppe mit dem numerisch niedrigsten externen Knoten (4,3,2 in diesem Beispiel) ausgeht, kann jede Lösung eindeutig beschrieben werden. Die obige Lösung kann zum Beispiel durch die Menge beschrieben werden: 4,3,2; 6,2,1; 5,1,3.

Es ist möglich, den Ring mit vier verschiedenen Summen zu vervollständigen: 9, 10, 11 und 12. Es gibt insgesamt acht Lösungen.

<div style='text-align: center;'>

| <div style='width: 100px;'>Summe</div> | <div style='width: 250px;'>Lösungset</div> |
| -------------------------------------- | --------------------------------------------- |
| 9                                      | 4,2,3; 5,3,1; 6,1,2                           |
| 9                                      | 4,3,2; 6,2,1; 5,1,3                           |
| 10                                     | 2,3,5; 4,5,1; 6,1,3                           |
| 10                                     | 2,5,3; 6,3,1; 4,1,5                           |
| 11                                     | 1,4,6; 3,6,2; 5,2,4                           |
| 11                                     | 1,6,4; 5,4,2; 3,2,6                           |
| 12                                     | 1,5,6; 2,6,4; 3,4,5                           |
| 12                                     | 1,6,5; 3,5,4; 2,4,6                           |

</div>

Durch Verkettung der einzelnen Gruppen können 9-stellige Zahlenfolgen gebildet werden; die maximale Zahlenfolge für einen 3er-Ring ist 432621513.

Mit den Zahlen 1 bis 10 lassen sich je nach Anordnung 16- und 17-stellige Zahlenfolgen bilden. Was ist die maximale **16-stellige** Zahlenfolge für einen "magischen" 5er-Ring?

<img class="img-responsive center-block" alt="ein leeres Diagramm eines 5er-Rings" src="https://cdn-media-1.freecodecamp.org/project-euler/5-gon-ring.png" style="background-color: white; padding: 10px;" />

# --hints--

`magic5GonRing()` sollte eine Zahl zurückgeben.

```js
assert(typeof magic5GonRing() === 'number');
```

`magic5GonRing()` sollte 6531031914842725 zurückgeben.

```js
assert.strictEqual(magic5GonRing(), 6531031914842725);
```

# --seed--

## --seed-contents--

```js
function magic5GonRing() {

  return true;
}

magic5GonRing();
```

# --solutions--

```js
// solution required
```
