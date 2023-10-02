---
id: 587d7db7367417b2b2512b9c
title: Finde einen oder mehrere Kriminelle bei einer Jagd
challengeType: 1
forumTopicId: 301343
dashedName: find-one-or-more-criminals-in-a-hunt
---

# --description--

Zeit, eine Pause einzulegen und deine neuen Schreibfähigkeiten für reguläre Ausdrücke zu testen. Eine Gruppe von Kriminellen ist aus dem Gefängnis ausgebrochen und weggelaufen, aber du weißt nicht, wie viele. Du weißt aber, dass sie eng zusammenbleiben, wenn sie mit anderen Menschen zusammen sind. Du bist dafür verantwortlich, alle Verbrecher auf einmal zu finden.

Hier ist ein Beispiel, um zu sehen, wie man das macht:

Der reguläre Ausdruck `/z+/` passt auf den Buchstaben `z`, wenn er ein oder mehrere Male hintereinander erscheint. Er würde Übereinstimmungen in allen folgenden Strings finden:

```js
"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"
```

Aber er findet keine Übereinstimmungen in den folgenden Strings, da es keinen Buchstaben `z` gibt:

```js
""
"ABC"
"abcabc"
```

# --instructions--

Schreibe einen "gierigen" (greedy) regulären Ausdruck, der einen oder mehrere Kriminelle innerhalb einer Gruppe von anderen Menschen findet. Ein Krimineller wird durch den Großbuchstaben `C` dargestellt.

# --hints--

Dein regulärer Ausdruck sollte auf einen Kriminellen (`C`) in dem String `C` passen.

```js
assert('C'.match(reCriminals) && 'C'.match(reCriminals)[0] == 'C');
```

Dein regulärer Ausdruck sollte auf zwei Kriminelle (`CC`) in dem String `CC` passen.

```js
assert('CC'.match(reCriminals) && 'CC'.match(reCriminals)[0] == 'CC');
```

Dein regulärer Ausdruck sollte auf drei Kriminelle (`CCC`) in dem String `P1P5P4CCCcP2P6P3` passen.

```js
assert(
  'P1P5P4CCCcP2P6P3'.match(reCriminals) &&
    'P1P5P4CCCcP2P6P3'.match(reCriminals)[0] == 'CCC'
);
```

Dein regulärer Ausdruck sollte auf fünf Kriminelle (`CCCCC`) in dem String `P6P2P7P4P5CCCCCP3P1` passen.

```js
assert(
  'P6P2P7P4P5CCCCCP3P1'.match(reCriminals) &&
    'P6P2P7P4P5CCCCCP3P1'.match(reCriminals)[0] == 'CCCCC'
);
```

Dein regulärer Ausdruck sollte keine Kriminellen in dem leeren String `""` finden.

```js
reCriminals.lastIndex = 0;
assert(!reCriminals.test(''));
```

Dein regulärer Ausdruck sollte keine Kriminellen in dem String `P1P2P3` finden.

```js
reCriminals.lastIndex = 0;
assert(!reCriminals.test('P1P2P3'));
```

Dein regulärer Ausdruck sollte 50 Kriminelle (`CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC`) in dem String `P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3`. finden.

```js
assert(
  'P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3'.match(
    reCriminals
  ) &&
    'P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3'.match(
      reCriminals
    )[0] == 'CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC'
);
```

# --seed--

## --seed-contents--

```js
let reCriminals = /./; // Change this line
```

# --solutions--

```js
let reCriminals = /C+/; // Change this line
```
