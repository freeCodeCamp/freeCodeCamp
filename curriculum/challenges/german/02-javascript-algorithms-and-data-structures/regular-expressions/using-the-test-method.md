---
id: 587d7db3367417b2b2512b8e
title: Anwendung der Methode test
challengeType: 1
forumTopicId: 301369
dashedName: using-the-test-method
---

# --description--

Reguläre Ausdrücke (Regex) werden in Programmiersprachen verwendet, um Teile von Texten abzugleichen. Du erstellst Muster ("Pattern"), die dir bei diesem Abgleich helfen.

Wenn du das Wort `the` in dem String `The dog chased the cat` finden willst, kannst du den folgenden regulären Ausdruck verwenden: `/the/`. Beachte, dass Anführungszeichen innerhalb des regulären Ausdrucks nicht erforderlich sind.

JavaScript hat mehrere Möglichkeiten, Regexe zu verwenden. Eine Möglichkeit, eine Regex zu testen, ist die Methode `.test()`. Die Methode `.test()` nimmt den Regex, wendet ihn auf einen String an (der in die Klammern gesetzt wird) und gibt `true` oder `false` zurück, wenn dein Muster etwas findet oder nicht.

```js
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
```

Die Methode `test` gibt hier `true` zurück.

# --instructions--

Wende den Regex `myRegex` auf den String `myString` mit der Methode `.test()` an.

# --hints--

Du solltest `.test()` verwenden, um den Regex zu testen.

```js
assert(code.match(/myRegex.test\(\s*myString\s*\)/));
```

Dein Ergebnis sollte `true` zurückgeben.

```js
assert(result === true);
```

# --seed--

## --seed-contents--

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex; // Change this line
```

# --solutions--

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
```
