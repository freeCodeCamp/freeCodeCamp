---
id: 587d7b87367417b2b2512b43
title: Verwende Pfeilfunktionen, um präzise anonyme Funktionen zu schreiben
challengeType: 1
forumTopicId: 301211
dashedName: use-arrow-functions-to-write-concise-anonymous-functions
---

# --description--

In JavaScript brauchen wir unsere Funktionen oft nicht zu benennen, vor allem wenn wir eine Funktion als Argument an eine andere Funktion übergeben. Stattdessen erstellen wir Inline-Funktionen. Wir brauchen diese Funktionen nicht zu benennen, weil wir sie nirgendwo anders wiederverwenden.

Um dies zu erreichen, verwenden wir oft die folgende Syntax:

```js
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
```

ES6 bietet uns den syntaktischen Zucker, um anonyme Funktionen nicht auf diese Weise schreiben zu müssen. Stattdessen kannst du die **Pfeilfunktionssyntax** verwenden:

```js
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
```

Wenn es keinen Funktionsrumpf gibt, sondern nur einen Rückgabewert, kannst du mit der Pfeilfunktionssyntax das Schlüsselwort `return` sowie die Klammern, die den Code umgeben, weglassen. Dies hilft, kleinere Funktionen in einzeilige Anweisungen zu vereinfachen:

```js
const myFunc = () => "value";
```

Dieser Code gibt standardmäßig immer noch den String `value` zurück.

# --instructions--

Schreibe die Funktion, die der Variablen `magic` zugewiesen ist und ein `new Date()` zurückgibt, so um, dass sie die Syntax der Pfeilfunktion verwendet. Stelle außerdem sicher, dass nichts mit dem Schlüsselwort `var` definiert ist.

# --hints--

Du solltest das Schlüsselwort `var` ersetzen.

```js
assert.notMatch(code, /var/g)
```

`magic` sollte eine konstante Variable sein (indem du `const` benutzt).

```js
assert.match(code, /const\s+magic/g)
```

`magic` sollte eine Funktion (`function`) sein.

```js
assert(typeof magic === 'function');
```

`magic()` sollte das richtige Datum zurückgeben.

```js
assert(magic().setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0));
```

Das Schlüsselwort `function` sollte nicht verwendet werden.

```js
assert.notMatch(code, /function/g)
```

# --seed--

## --seed-contents--

```js
var magic = function() {
  return new Date();
};
```

# --solutions--

```js
const magic = () => {
  return new Date();
};
```
