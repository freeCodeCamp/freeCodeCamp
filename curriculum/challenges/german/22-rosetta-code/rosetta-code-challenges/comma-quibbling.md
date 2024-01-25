---
id: 596e414344c3b2872167f0fe
title: Wortklauberei mit Kommas
challengeType: 1
forumTopicId: 302234
dashedName: comma-quibbling
---

# --description--

<a href="https://rosettacode.org/wiki/Comma_quibbling" target="_blank" rel="noopener noreferrer nofollow">Comma quibbling</a> is a task originally set by Eric Lippert in his blog.

# --instructions--

Schreibe eine Funktion, um eine Zeichenkettenausgabe zu erzeugen, die die Verkettung von Eingabewörtern aus einer Liste/Sequenz ist:

<ol>
  <li>An input of no words produces the output string of just the two brace characters (<code>"{}"</code>)</li>
  <li>Eine Eingabe von nur einem Wort, z.B. <code>["ABC"]</code>, erzeugt die Ausgabezeichenfolge des Wortes innerhalb der zwei Klammern z.B. <code>"{ABC}"</code></li>
  <li>Eine Eingabe von zwei Wörtern, z.B. <code>["ABC", "DEF"]</code>, erzeugt den Ausgabe-String der beiden Wörter innerhalb der beiden Klammern, wobei die Wörter durch den String <code>" and "</code> getrennt sind, z.B. <code>"{ABC and DEF}"</code></li>
  <li>Eine Eingabe von drei oder mehr Wörtern, z. B. <code>["ABC", "DEF", "G", "H"]</code>, ergibt die Ausgabe aller Wörter bis auf das letzte Wort, das durch <code>", "</code> getrennt ist, wobei das letzte Wort durch <code>" and "</code> getrennt ist und alle Wörter in geschweiften Klammern stehen; z.B. <code>"{ABC, DEF, G and H}"</code></li>
</ol>

Teste deine Funktion mit der folgenden Reihe von Eingaben, die deine Ausgabe hier auf dieser Seite zeigen:

<ul>
  <li>[] # (No input words).</li>
  <li>["ABC"]</li>
  <li>["ABC", "DEF"]</li>
  <li>["ABC", "DEF", "G", "H"]</li>
</ul>

**Hinweis:** Bei dieser Aufgabe wird davon ausgegangen, dass Wörter nicht leere Zeichenketten mit Großbuchstaben sind.

# --hints--

`quibble` sollte eine Funktion sein.

```js
assert(typeof quibble === 'function');
```

`quibble(["ABC"])` sollte einen String zurückgeben.

```js
assert(typeof quibble(['ABC']) === 'string');
```

`quibble([])` sollte "{}" zurückgeben.

```js
assert.equal(quibble(testCases[0]), results[0]);
```

`quibble(["ABC"])` sollte `"{ABC}"` zurückgeben.

```js
assert.equal(quibble(testCases[1]), results[1]);
```

`quibble(["ABC", "DEF"])` sollte `"{ABC and DEF}"` zurückgeben.

```js
assert.equal(quibble(testCases[2]), results[2]);
```

`quibble(["ABC", "DEF", "G", "H"])` sollte `"{ABC, DEF, G and H}"` zurückgeben.

```js
assert.equal(quibble(testCases[3]), results[3]);
```

# --seed--

## --after-user-code--

```js
const testCases = [[], ["ABC"], ["ABC", "DEF"], ["ABC", "DEF", "G", "H"]];
const results = ["{}", "{ABC}", "{ABC and DEF}", "{ABC, DEF, G and H}"];
```

## --seed-contents--

```js
function quibble(words) {

  return true;
}
```

# --solutions--

```js
function quibble(words) {
  return "{" +
    words.slice(0, words.length - 1).join(", ") +
   (words.length > 1 ? " and " : "") +
   (words[words.length - 1] || '') +
  "}";
}
```
