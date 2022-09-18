---
id: cf1111c1c12feddfaeb3bdef
title: Verwende bedingte Logik mit If-Anweisungen
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87mf3'
forumTopicId: 18348
dashedName: use-conditional-logic-with-if-statements
---

# --description--

`if`-Anweisungen werden verwendet, um Entscheidungen im Code zu treffen. Das Schlüsselwort `if` weist JavaScript an, den Code in den geschweiften Klammern unter bestimmten Bedingungen auszuführen, die in den Klammern definiert sind. Diese Bedingungen sind als `Boolean`-Bedingungen bekannt und sie können nur `true` oder `false` sein.

Wenn die Bedingung als `true` ausgewertet wird, führt das Programm die Anweisung innerhalb der geschweiften Klammern aus. Wenn die boolesche Bedingung als `false` ausgewertet wird, wird die Anweisung innerhalb der geschweiften Klammern nicht ausgeführt.

**Pseudocode**

<blockquote>if (<i>Bedingung ist wahr</i>) {<br>  <i>Anweisung wird ausgeführt</i><br>}</blockquote>

**Beispiel**

```js
function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);
```

`test(true)` gibt den String `It was true` zurück, und `test(false)` gibt den String `It was false` zurück.

Wenn `test` mit einem Wert von `true` aufgerufen wird, wertet die `if`-Anweisung `myCondition` aus, um zu sehen, ob sie `true` ist oder nicht. Da es `true` ist, gibt die Funktion `It was true` zurück. Wenn wir `test` mit einem Wert von `false` aufrufen, ist `myCondition` *nicht* `true` und die Anweisung in den geschweiften Klammern wird nicht ausgeführt und die Funktion gibt `It was false` zurück.

# --instructions--

Erstelle eine `if`-Anweisung innerhalb der Funktion, um `Yes, that was true` zurückzugeben, wenn der Parameter `wasThatTrue` gleich `true` ist und ansonsten `No, that was false`.

# --hints--

`trueOrFalse` sollte eine Funktion sein

```js
assert(typeof trueOrFalse === 'function');
```

`trueOrFalse(true)` sollte einen String zurückgeben

```js
assert(typeof trueOrFalse(true) === 'string');
```

`trueOrFalse(false)` sollte einen String zurückgeben

```js
assert(typeof trueOrFalse(false) === 'string');
```

`trueOrFalse(true)` sollte den String `Yes, that was true` zurückgeben

```js
assert(trueOrFalse(true) === 'Yes, that was true');
```

`trueOrFalse(false)` sollte den String `No, that was false` zurückgeben

```js
assert(trueOrFalse(false) === 'No, that was false');
```

# --seed--

## --seed-contents--

```js
function trueOrFalse(wasThatTrue) {
  // Only change code below this line



  // Only change code above this line

}
```

# --solutions--

```js
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}
```
