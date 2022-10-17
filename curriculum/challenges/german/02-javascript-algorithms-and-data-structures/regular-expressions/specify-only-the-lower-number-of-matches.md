---
id: 587d7db9367417b2b2512ba6
title: Lege nur die niedrigste Anzahl von Übereinstimmungen fest
challengeType: 1
forumTopicId: 301366
dashedName: specify-only-the-lower-number-of-matches
---

# --description--

Du kannst die Unter- und Oberzahl der Muster mit Quantifizierern in geschweiften Klammern angeben. Manchmal willst du nur die Untergrenze für die Anzahl der Muster angeben, aber keine Obergrenze.

Wenn du nur die Unterzahl der Muster angeben willst, behalte die erste Zahl gefolgt von einem Komma bei.

Um zum Beispiel nur den String `hah` zu finden, in dem der Buchstabe `a` mindestens `3` Mal vorkommt, würde dein regulärer Ausdruck `/ha{3,}h/` lauten.

```js
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);
```

In dieser Reihenfolge würden die drei `test`-Aufrufe `true`, `false` und `true` zurückgeben.

# --instructions--

Ändere den regulärer Ausdruck `haRegex` so, dass er nur auf das Wort `Hazzah` passt, wenn es vier oder mehr Buchstaben `z` hat.

# --hints--

Dein regulärer Ausdruck sollte geschweifte Klammern verwenden.

```js
assert(haRegex.source.match(/{.*?}/).length > 0);
```

Dein regulärer Ausdruck sollte nicht auf den String `Hazzah` zutreffen.

```js
haRegex.lastIndex = 0;
assert(!haRegex.test('Hazzah'));
```

Dein regulärer Ausdruck sollte nicht auf den String `Hazzzah` zutreffen.

```js
haRegex.lastIndex = 0;
assert(!haRegex.test('Hazzzah'));
```

Dein regulärer Ausdruck sollte auf den String `Hazzzzah` zutreffen.

```js
assert('Hazzzzah'.match(haRegex)[0].length === 8);
```

Dein regulärer Ausdruck sollte auf den String `Hazzzzzah` zutreffen.

```js
assert('Hazzzzzah'.match(haRegex)[0].length === 9);
```

Dein regulärer Ausdruck sollte auf den String `Hazzzzzzah` zutreffen

```js
assert('Hazzzzzzah'.match(haRegex)[0].length === 10);
```

Dein regulärer Ausdruck sollte auf den String `Hazzah` passen, der 30 `z` enthält.

```js
assert('Hazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzah'.match(haRegex)[0].length === 34);
```

# --seed--

## --seed-contents--

```js
let haStr = "Hazzzzah";
let haRegex = /change/; // Change this line
let result = haRegex.test(haStr);
```

# --solutions--

```js
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
```
