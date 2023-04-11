---
id: 56533eb9ac21ba0edf2244b6
title: Escape-Sequenzen in Strings
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvmqRh6'
forumTopicId: 17567
dashedName: escape-sequences-in-strings
---

# --description--

Anführungszeichen sind nicht die einzigen Zeichen, die innerhalb eines Strings <dfn>ausgelassen</dfn> werden können. Escape-Sequenzen ermöglichen es dir, Zeichen zu verwenden, die du sonst nicht in einem String verwenden könntest.

<table class='table table-striped'><thead><tr><th>Code</th><th>Ausgabe</th></tr></thead><tbody><tr><td><code>\'</code></td><td>Einzelnes Anführungszeichen</td></tr><tr><td><code>\"</code></td><td>Doppeltes Anführungszeichen</td></tr><tr><td><code>\\</code></td><td>Backslash</td></tr><tr><td><code>\n</code></td><td>Zeilenumbruch</td></tr><tr><td><code>\t</code></td><td>Tabulator</td></tr><tr><td><code>\r</code></td><td>Wagenrücklauf (Carriage Return)</td></tr><tr><td><code>\b</code></td><td>backspace</td></tr><tr><td><code>\f</code></td><td>Seitenvorschub (Formfeed)</td></tr></tbody></table>

*Note that the backslash itself must be escaped in order to display as a backslash.*

# --instructions--

Assign the following three lines of text into the single variable `myStr` using escape sequences.

<pre>
FirstLine
  \SecondLine
ThirdLine
</pre>

Um Sonderzeichen korrekt einzufügen, musst du Escape-Sequenzen verwenden. Du musst auch die Abstände so einhalten, wie sie oben aussehen, ohne Leerzeichen zwischen Escape-Sequenzen oder Wörtern.

**Hinweis:** Die Einrückung für `SecondLine` wird mit dem Tabulator-Escape-Zeichen erreicht, nicht mit Leerzeichen.

# --hints--

`myStr` sollte keine Leerzeichen enthalten

```js
assert(!/ /.test(myStr));
```

`myStr` should contain the strings `FirstLine`, `SecondLine` and `ThirdLine` (remember case sensitivity)

```js
assert(
  /FirstLine/.test(myStr) && /SecondLine/.test(myStr) && /ThirdLine/.test(myStr)
);
```

`FirstLine` should be followed by the newline character `\n`

```js
assert(/FirstLine\n/.test(myStr));
```

`myStr` should contain a tab character `\t` which follows a newline character

```js
assert(/\n\t/.test(myStr));
```

`SecondLine` should be preceded by the backslash character `\`

```js
assert(/\\SecondLine/.test(myStr));
```

There should be a newline character between `SecondLine` and `ThirdLine`

```js
assert(/SecondLine\nThirdLine/.test(myStr));
```

`myStr` sollte nur die in der Anleitung angegebenen Zeichen enthalten

```js
assert(myStr === 'FirstLine\n\t\\SecondLine\nThirdLine');
```

# --seed--

## --seed-contents--

```js
const myStr = ""; // Change this line
```

# --solutions--

```js
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
```
