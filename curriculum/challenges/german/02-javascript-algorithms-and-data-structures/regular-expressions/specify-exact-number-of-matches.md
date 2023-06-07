---
id: 587d7db9367417b2b2512ba7
title: Lege die genaue Anzahl der Übereinstimmungen fest
challengeType: 1
forumTopicId: 301365
dashedName: specify-exact-number-of-matches
---

# --description--

Du kannst die Unter- und Oberzahl der Muster mit Quantifizierern in geschweiften Klammern angeben. Manchmal möchtest du nur eine bestimmte Anzahl von Übereinstimmungen.

Wenn du eine bestimmte Anzahl von Mustern angeben willst, gib einfach diese Zahl zwischen die geschweiften Klammern ein.

Um zum Beispiel nur das Wort `hah` mit dem Buchstaben `a` `3` Mal zu finden, würde dein regulärer Ausdruck `/ha{3}h/` lauten.

```js
let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4);
multipleHA.test(A3);
multipleHA.test(A100);
```

In dieser Reihenfolge würden die drei `test`-Aufrufe `false`, `true` und `false` zurückgeben.

# --instructions--

Ändere den regulären Ausdruck `timRegex` so, dass er nur auf das Wort `Timber` passt, wenn es vier Buchstaben `m` hat.

# --hints--

Dein regulärer Ausdruck sollte geschweifte Klammern verwenden.

```js
assert(timRegex.source.match(/{.*?}/).length > 0);
```

Dein regulärer Ausdruck sollte nicht auf den String `Timber` passen.

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Timber'));
```

Dein regulärer Ausdruck sollte nicht auf den String `Timmber` passen.

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Timmber'));
```

Dein regulärer Ausdruck sollte nicht auf den String `Timmmber` passen.

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Timmmber'));
```

Dein regulärer Ausdruck sollte mit dem String `Timmmmber` übereinstimmen.

```js
timRegex.lastIndex = 0;
assert(timRegex.test('Timmmmber'));
```

Dein regulärer Ausdruck sollte nicht auf den String `Timber` mit 30 `m` passen.

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Ti' + 'm'.repeat(30) + 'ber'));
```

# --seed--

## --seed-contents--

```js
let timStr = "Timmmmber";
let timRegex = /change/; // Change this line
let result = timRegex.test(timStr);
```

# --solutions--

```js
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);
```
