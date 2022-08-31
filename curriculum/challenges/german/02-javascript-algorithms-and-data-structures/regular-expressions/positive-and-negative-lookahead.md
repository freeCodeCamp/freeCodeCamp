---
id: 587d7dba367417b2b2512ba9
title: Positive vorausschauende Behauptung und negative zurückblickende Behauptung (Lookaheads)
challengeType: 1
forumTopicId: 301360
dashedName: positive-and-negative-lookahead
---

# --description--

<dfn>Lookaheads</dfn> sind Muster, die JavaScript anweisen, in deinem String nach Mustern zu suchen, die weiter hinten liegen. Das kann nützlich sein, wenn du nach mehreren Mustern für denselben String suchen willst.

Es gibt zwei Arten von Lookaheads: <dfn>positive Lookaheads</dfn> und <dfn>negative Lookaheads</dfn>.

Ein positiver Lookahead prüft, ob das Element im Suchmuster vorhanden ist, gleicht es aber nicht tatsächlich ab. Ein positiver Lookahead wird in Form von `(?=...)` verwendet, wobei das `...` der erforderliche Teil ist, der nicht abgeglichen wird.

Ein negativer Lookahead hingegen prüft, ob das Element im Suchmuster nicht vorhanden ist. Ein negativer Lookahead wird in Form von `(?!...)` verwendet, wobei `...` das Muster ist, das du nicht haben willst. Der Rest des Musters wird zurückgegeben, wenn der negative Lookahead-Teil nicht vorhanden ist.

Die Lookaheads sind etwas verwirrend, aber ein paar Beispiele werden dir helfen.

```js
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);
```

Beide `match`-Aufrufe würden `["q"]` zurückgeben.

Eine praktischere Anwendung von Lookaheads ist die Überprüfung von zwei oder mehr Mustern in einem String. Hier ist ein (naiver) einfacher Passwortprüfer, der nach 3 bis 6 Zeichen und mindestens einer Zahl sucht:

```js
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);
```

# --instructions--

Verwende Lookaheads in der `pwRegex`, um Passwörter abzugleichen, die mehr als 5 Zeichen lang sind und zwei aufeinanderfolgende Ziffern haben.

# --hints--

Dein regulärer Ausdruck sollte zwei positive `lookaheads` verwenden.

```js
assert(pwRegex.source.match(/\(\?=.*?\)\(\?=.*?\)/) !== null);
```

Dein regulärer Ausdruck sollte nicht auf den String `astronaut` passen.

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('astronaut'));
```

Dein regulärer Ausdruck sollte nicht auf den String `banan1` passen.

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('banan1'));
```

Dein regulärer Ausdruck sollte auf den String `bana12` passen.

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('bana12'));
```

Dein regulärer Ausdruck sollte auf den String `abc123` passen.

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('abc123'));
```

Dein regulärer Ausdruck sollte nicht auf den String `12345` passen.

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('12345'));
```

Dein regulärer Ausdruck sollte auf den String `8pass99` passen.

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('8pass99'));
```

Dein regulärer Ausdruck sollte nicht auf den String `1a2bcde` passen.

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('1a2bcde'));
```

Dein regulärer Ausdruck sollte auf den String `astr1on11aut` passen.

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('astr1on11aut'));
```

# --seed--

## --seed-contents--

```js
let sampleWord = "astronaut";
let pwRegex = /change/; // Change this line
let result = pwRegex.test(sampleWord);
```

# --solutions--

```js
let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
```
