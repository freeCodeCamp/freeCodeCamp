---
id: 587d7db9367417b2b2512ba4
title: Nicht-Leerzeichen abgleichen
challengeType: 1
forumTopicId: 18210
dashedName: match-non-whitespace-characters
---

# --description--

Du hast gelernt, wie man nach Leerzeichen sucht, indem man `\s` mit einem kleingeschriebenen `s` verwendet. Du kannst auch nach allem außer Leerzeichen suchen.

Suche nach Nicht-Leerzeichen mit `\S`, das ist ein groß geschriebenes `s`. Dieses Muster passt nicht auf Leerzeichen, Wagenrücklauf, Tabulator, Seitenvorschub und Zeilenumbruch. Du kannst es dir ähnlich vorstellen wie die Zeichenklasse `[^ \r\t\f\n\v]`.

```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;
```

Der Wert, der von der Methode `.length` zurückgegeben wird, wäre `32`.

# --instructions--

Ändere den regulären Ausdruck `countNonWhiteSpace`, um nach mehreren Zeichen ohne Leerzeichen in einem String zu suchen.

# --hints--

Dein regulärer Ausdruck sollte den globalen Flag verwenden.

```js
assert(countNonWhiteSpace.global);
```

Dein regulärer Ausdruck sollte das Kurzzeichen `\S` verwenden, um alle Zeichen ohne Leerzeichen zu finden.

```js
assert(/\\S/.test(countNonWhiteSpace.source));
```

Dein regulärer Ausdruck sollte 35 Nicht-Leerzeichen in dem String `Men are from Mars and women are from Venus.` finden.

```js
assert(
  'Men are from Mars and women are from Venus.'.match(countNonWhiteSpace)
    .length == 35
);
```

Dein regulärer Ausdruck sollte 23 Nicht-Leerzeichen in dem String `Space: the final frontier.` finden.

```js
assert('Space: the final frontier.'.match(countNonWhiteSpace).length == 23);
```

Dein regulärer Ausdruck sollte 21 Nicht-Leerzeichen in dem String `MindYourPersonalSpace` finden.

```js
assert('MindYourPersonalSpace'.match(countNonWhiteSpace).length == 21);
```

# --seed--

## --seed-contents--

```js
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /change/; // Change this line
let result = sample.match(countNonWhiteSpace);
```

# --solutions--

```js
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);
```
