---
id: 5d712346c441eddfaeb5bdef
title: Alle Zahlen abgleichen
challengeType: 1
forumTopicId: 18181
dashedName: match-all-numbers
---

# --description--

Du hast Kurzformen für gängige Zeichenkettenmuster wie alphanumerische Zeichen gelernt. Ein anderes gängiges Muster ist die Suche nach Ziffern oder Zahlen.

Die Abkürzung für die Suche nach Ziffernzeichen ist `\d`, mit einem kleingeschriebenen `d`. Dies entspricht der Zeichenklasse `[0-9]`, die nach einem einzelnen Zeichen mit einer beliebigen Zahl zwischen null und neun sucht.

# --instructions--

Verwende die Kurzzeichen-Klasse `\d`, um zu zählen, wie viele Ziffern ein Filmtitel hat. Ausgeschriebene Zahlen ("sechs" statt 6) zählen nicht.

# --hints--

Dein regulärer Ausdruck sollte die Kurzform für Ziffernzeichen verwenden

```js
assert(/\\d/.test(numRegex.source));
```

Dein regulärer Ausdruck sollte den globalen Flag verwenden.

```js
assert(numRegex.global);
```

Deine regulärer Ausdruck sollte 1 Ziffer in dem String `9` finden.

```js
assert('9'.match(numRegex).length == 1);
```

Dein regulärer Ausdruck sollte 2 Ziffern in dem String `Catch 22` finden.

```js
assert('Catch 22'.match(numRegex).length == 2);
```

Dein regulärer Ausdruck sollte 3 Ziffern in dem String `101 Dalmatians` finden.

```js
assert('101 Dalmatians'.match(numRegex).length == 3);
```

Dein regulärer Ausdruck sollte keine Ziffern in dem String `One, Two, Three` finden.

```js
assert('One, Two, Three'.match(numRegex) == null);
```

Dein regulärer Ausdruck sollte 2 Ziffern in dem String `21 Jump Street` finden.

```js
assert('21 Jump Street'.match(numRegex).length == 2);
```

Dein regulärer Ausdruck sollte 4 Ziffern in dem String `2001: A Space Odyssey` finden.

```js
assert('2001: A Space Odyssey'.match(numRegex).length == 4);
```

# --seed--

## --seed-contents--

```js
let movieName = "2001: A Space Odyssey";
let numRegex = /change/; // Change this line
let result = movieName.match(numRegex).length;
```

# --solutions--

```js
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;
```
