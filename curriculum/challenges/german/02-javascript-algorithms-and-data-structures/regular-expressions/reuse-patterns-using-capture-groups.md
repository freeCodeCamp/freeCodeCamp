---
id: 587d7dbb367417b2b2512baa
title: Wiederverwendung von Mustern mithilfe von Erfassungsgruppen
challengeType: 1
forumTopicId: 301364
dashedName: reuse-patterns-using-capture-groups
---

# --description--

Angenommen, du willst ein Wort finden, das mehrmals vorkommt, wie unten.

```js
let repeatStr = "row row row your boat";
```

Du könntest `/row row row/` verwenden, aber was ist, wenn du nicht weißt, welches Wort wiederholt wird? <dfn>Erfassungsgruppen (Capture Groups)</dfn> können verwendet werden, um wiederholte Teilstrings zu finden.

Erfassungsgruppen werden gebildet, indem das zu erfassende Regex-Muster in Klammern eingeschlossen wird. In diesem Fall ist das Ziel, ein Wort zu erfassen, das aus alphanumerischen Zeichen besteht, also wird die Erfassungsgruppe `\w+` sein, eingeschlossen von Klammern: `/(\w+)/`.

Der Teilstring, auf den die Gruppe passt, wird in einer temporären "Variablen" gespeichert, auf die innerhalb desselben regulären Ausdrucks mit einem Backslash und der Nummer der Erfassungsgruppe zugegriffen werden kann (z.B. `\1`). Erfassungsgruppen werden automatisch nach der Position ihrer öffnenden Klammern (von links nach rechts) nummeriert, beginnend bei 1.

Das folgende Beispiel passt auf ein Wort, das dreimal durch Leerzeichen getrennt vorkommt:

```js
let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]
```

Wenn du die Methode `.match()` auf einen String anwendest, erhältst du ein Array mit dem passenden Teilstring zusammen mit seinen erfassten Gruppen zurück.


# --instructions--

Verwende Erfassungsgruppen in `reRegex`, um einen String zu finden, der nur aus der gleichen Zahl besteht, die genau dreimal durch einzelne Leerzeichen getrennt wiederholt wird.

# --hints--

Dein regulärer Ausdruck sollte die Kurzzeichen-Klasse für Ziffern verwenden.

```js
assert(reRegex.source.match(/\\d/));
```

Dein regulärer Ausdruck sollte eine Erfassungsgruppe zweimal wiederverwenden.

```js
assert(reRegex.source.match(/\\1|\\2/g).length >= 2);
```

Dein regulärer Ausdruck sollte auf den String `42 42 42` zutreffen.

```js
reRegex.lastIndex = 0;
assert(reRegex.test('42 42 42'));
```

Dein regulärer Ausdruck sollte auf den String `100 100 100` zutreffen.

```js
reRegex.lastIndex = 0;
assert(reRegex.test('100 100 100'));
```

Dein regulärer Ausdruck sollte nicht auf den String `42 42 42 42` zutreffen.

```js
assert.equal('42 42 42 42'.match(reRegex.source), null);
```

Dein regulärer Ausdruck sollte nicht auf den String `42 42` zutreffen.

```js
assert.equal('42 42'.match(reRegex.source), null);
```

Dein regulärer Ausdruck sollte nicht auf den String `101 102 103` zutreffen

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('101 102 103'));
```

Dein regulärer Ausdruck sollte nicht auf den String `1 2 3` zutreffen.

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('1 2 3'));
```

Dein regulärer Ausdruck sollte auf den String `10 10 10` zutreffen.

```js
reRegex.lastIndex = 0;
assert(reRegex.test('10 10 10'));
```

Dein regulärer Ausdruck sollte nicht auf den String `42\t42\t42` zutreffen.

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('42\t42\t42'));
```

Dein regulärer Ausdruck sollte nicht auf den String `42  42  42` zutreffen.

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('42  42  42'));
```

# --seed--

## --seed-contents--

```js
let repeatNum = "42 42 42";
let reRegex = /change/; // Change this line
let result = reRegex.test(repeatNum);
```

# --solutions--

```js
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/;
let result = reRegex.test(repeatNum);
```
