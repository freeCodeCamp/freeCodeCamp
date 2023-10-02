---
id: 587d7dba367417b2b2512ba8
title: Prüfe auf Alle oder Keine
challengeType: 1
forumTopicId: 301338
dashedName: check-for-all-or-none
---

# --description--

Manchmal gibt es Teile des Musters, nach dem du suchen möchtest, die es vielleicht gar nicht gibt. Es kann aber wichtig sein, sie trotzdem zu überprüfen.

Du kannst die mögliche Existenz eines Elements mit einem Fragezeichen angeben, `?`. Damit wird geprüft, ob das vorhergehende Element Null oder Eins ist. Du kannst dir dieses Symbol so vorstellen, dass das vorangegangene Element optional ist.

Es gibt zum Beispiel leichte Unterschiede zwischen amerikanischem und britischem Englisch und du kannst das Fragezeichen verwenden, um beide Schreibweisen abzugleichen.

```js
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);
```

Beide Aufrufe der Methode `test` würden `true` zurückgeben.

# --instructions--

Ändere den regulären Ausdruck `favRegex` so, dass er sowohl auf die amerikanische (`favorite`) als auch auf die britische (`favourite`) Version des Wortes passt.

# --hints--

Dein regulärer Ausdruck sollte das optionale Symbol `?` verwenden.

```js
favRegex.lastIndex = 0;
assert(favRegex.source.match(/\?/).length > 0);
```

Dein regulärer Ausdruck sollte mit dem String `favorite` übereinstimmen.

```js
favRegex.lastIndex = 0;
assert(favRegex.test('favorite'));
```

Dein regulärer Ausdruck sollte mit dem String `favourite` übereinstimmen.

```js
favRegex.lastIndex = 0;
assert(favRegex.test('favourite'));
```

Dein regulärer Ausdruck sollte nicht auf den String `fav` passen.

```js
favRegex.lastIndex = 0;
assert(!favRegex.test('fav'));
```

# --seed--

## --seed-contents--

```js
let favWord = "favorite";
let favRegex = /change/; // Change this line
let result = favRegex.test(favWord);
```

# --solutions--

```js
let favWord = "favorite";
let favRegex = /favou?r/;
let result = favRegex.test(favWord);
```
