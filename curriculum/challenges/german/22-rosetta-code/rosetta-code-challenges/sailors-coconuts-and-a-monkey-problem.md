---
id: 59da22823d04c95919d46269
title: 'Matrosen, Kokosnüsse und ein Affenproblem'
challengeType: 1
forumTopicId: 302304
dashedName: sailors-coconuts-and-a-monkey-problem
---

# --description--

Five sailors are shipwrecked on an island and collect a large pile of coconuts during the day.

In dieser Nacht wacht der erste Matrose auf und beschließt, sich seinen ersten Anteil zu nehmen, also versucht er, den Haufen Kokosnüsse gleichmäßig in fünf Haufen aufzuteilen, stellt aber fest, dass eine Kokosnuss übrig bleibt, die er einem Affen zuwirft, versteckt dann "seinen", der fünf gleich großen Kokosnussstapel und schiebt die anderen vier Stapel wieder zu einem einzigen sichtbaren Kokosnussstapel zusammen und geht ins Bett.

Um es kurz zu machen: Jeder der Matrosen steht nacheinander einmal in der Nacht auf und führt dieselben Handlungen aus: Er teilt den Kokosnusshaufen in fünf Haufen, stellt fest, dass eine Kokosnuss übrig ist, gibt dem Affen die übrig gebliebene Kokosnuss und schiebt dann die anderen vier Stapel zu einem einzigen Stapel zusammen.

Am Morgen (nach der heimlichen und separaten Aktion der fünf Matrosen während der Nacht) werden die verbleibenden Kokosnüsse in fünf gleiche Haufen für jeden der Matrosen aufgeteilt, woraufhin sich herausstellt, dass der Haufen Kokosnüsse gleichmäßig unter den Matrosen aufgeteilt werden kann und kein Rest übrig bleibt. (Nichts für den Affen am Morgen.)

# --instructions--

Erstelle eine Funktion, die die kleinstmögliche Größe des anfänglichen Haufens von Kokosnüssen zurückgibt, die während des Tages für `N` Matrosen gesammelt wurden. **Anmerkung:** Die Geschichte wird natürlich in einer Welt erzählt, in der das Einsammeln einer beliebigen Anzahl von Kokosnüssen an einem Tag und das mehrfache Teilen des Haufens usw. zeitlich in die Handlung passen, so dass die Mathematik nicht beeinträchtigt wird.

# --hints--

`splitCoconuts` sollte eine Funktion sein.

```js
assert(typeof splitCoconuts === 'function');
```

`splitCoconuts(5)` sollte 3121 zurückgeben.

```js
assert(splitCoconuts(5) === 3121);
```

`splitCoconuts(6)` sollte 233275 zurückgeben.

```js
assert(splitCoconuts(6) === 233275);
```

`splitCoconuts(7)` sollte 823537 zurückgeben.

```js
assert(splitCoconuts(7) === 823537);
```

# --seed--

## --seed-contents--

```js
function splitCoconuts(intSailors) {

  return true;
}
```

# --solutions--

```js
function splitCoconuts(intSailors) {
  let intNuts = intSailors;
  let result = splitCoconutsHelper(intNuts, intSailors);
  while (!result) {
    intNuts += 1;
    result = splitCoconutsHelper(intNuts, intSailors);
  }

  return intNuts;
}

function splitCoconutsHelper(intNuts, intSailors, intDepth) {
  const nDepth = intDepth !== undefined ? intDepth : intSailors;
  const portion = Math.floor(intNuts / intSailors);
  const remain = intNuts % intSailors;

  if (portion <= 0 || remain !== (nDepth ? 1 : 0)) {
    return null;
  }

  if (nDepth) {
    return splitCoconutsHelper(
      intNuts - portion - remain, intSailors, nDepth - 1
    );
  }

  return intNuts;
}
```
