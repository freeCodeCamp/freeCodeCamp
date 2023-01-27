---
id: 587d7daa367417b2b2512b6b
title: Einen String mit der split-Methode in ein Array aufteilen
challengeType: 1
forumTopicId: 18305
dashedName: split-a-string-into-an-array-using-the-split-method
---

# --description--

Die Methode `split` zerlegt einen String in ein Array von Strings. Sie benötigt ein Argument für das Trennzeichen, das ein Zeichen zum Aufbrechen des Strings oder ein regulärer Ausdruck sein kann. Wenn das Begrenzungszeichen zum Beispiel ein Leerzeichen ist, erhältst du ein Array mit Wörtern, und wenn das Begrenzungszeichen ein leerer String ist, erhältst du ein Array mit jedem Zeichen des Strings.

Hier sind zwei Beispiele, die einen String mit Hilfe eines regulären Ausdrucks nach Leerzeichen und einen anderen nach Ziffern aufteilen:

```js
const str = "Hello World";
const bySpace = str.split(" ");

const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/);
```

`bySpace` würde den Wert `["Hello", "World"]` haben und `byDigits` würde den Wert `["How", "are", "you", "today"]` haben.

Da Strings unveränderlich sind, macht es die Methode `split` einfacher, mit ihnen zu arbeiten.

# --instructions--

Verwende die Methode `split` innerhalb der Funktion `splitify`, um `str` in ein Array von Wörtern zu zerlegen. Die Funktion sollte das Array zurückgeben. Beachte, dass die Wörter nicht immer durch Leerzeichen getrennt sind und das Feld keine Satzzeichen enthalten sollte.

# --hints--

Dein Code sollte die Methode `split` verwenden.

```js
assert(code.match(/\.split/g));
```

`splitify("Hello World,I-am code")` sollte `["Hello", "World", "I", "am", "code"]` zurückgeben.

```js
assert(
  JSON.stringify(splitify('Hello World,I-am code')) ===
    JSON.stringify(['Hello', 'World', 'I', 'am', 'code'])
);
```

`splitify("Earth-is-our home")` sollte `["Earth", "is", "our", "home"]` zurückgeben.

```js
assert(
  JSON.stringify(splitify('Earth-is-our home')) ===
    JSON.stringify(['Earth', 'is', 'our', 'home'])
);
```

`splitify("This.is.a-sentence")` sollte `["This", "is", "a", "sentence"]` zurückgeben.

```js
assert(
  JSON.stringify(splitify('This.is.a-sentence')) ===
    JSON.stringify(['This', 'is', 'a', 'sentence'])
);
```

# --seed--

## --seed-contents--

```js
function splitify(str) {
  // Only change code below this line


  // Only change code above this line
}

splitify("Hello World,I-am code");
```

# --solutions--

```js
function splitify(str) {
  return str.split(/\W/);
}
```
