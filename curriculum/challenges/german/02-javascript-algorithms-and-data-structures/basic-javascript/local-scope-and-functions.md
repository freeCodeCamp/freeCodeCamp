---
id: 56533eb9ac21ba0edf2244bf
title: Lokaler Gültigkeitsbereich und Funktionen
challengeType: 1
videoUrl: 'https://scrimba.com/c/cd62NhM'
forumTopicId: 18227
dashedName: local-scope-and-functions
---

# --description--

Variablen, die innerhalb einer Funktion deklariert werden, sowie die Funktionsparameter, haben einen <dfn>lokalen</dfn> Gültigkeitsbereich. Das bedeutet, dass sie nur innerhalb dieser Funktion sichtbar sind.

Hier ist eine Funktion `myTest` mit einer lokalen Variable namens `loc`.

```js
function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);
```

Der `myTest()` Funktionsaufruf wird den String `foo` in der Konsole anzeigen. Die Zeile `console.log(loc)` (außerhalb der Funktion `myTest`) führt zu einem Fehler, da `loc` außerhalb der Funktion nicht definiert ist.

# --instructions--

Der Editor hat zwei `console.log`s, damit du sehen kannst, was passiert. Überprüfe die Konsole während du programmierst, um zu sehen, wie sie sich verändert. Deklariere eine lokale Variable `myVar` innerhalb von `myLocalScope` und führe die Tests aus.

**Hinweis:** Die Konsole wird immer noch `ReferenceError: myVar is not defined` anzeigen, aber das wird nicht dazu führen, dass die Tests fehlschlagen.

# --hints--

Der Code sollte keine globale Variable `myVar` enthalten.

```js
function declared() {
  myVar;
}

assert.throws(declared, ReferenceError);
```

Du solltest eine lokale Variable `myVar` hinzufügen.

```js
assert(
  /functionmyLocalScope\(\)\{.*(var|let|const)myVar[\s\S]*}/.test(
    __helpers.removeWhiteSpace(code)
  )
);
```

# --seed--

## --seed-contents--

```js
function myLocalScope() {
  // Only change code below this line

  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
```

# --solutions--

```js
function myLocalScope() {
  // Only change code below this line
  let myVar;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
```
