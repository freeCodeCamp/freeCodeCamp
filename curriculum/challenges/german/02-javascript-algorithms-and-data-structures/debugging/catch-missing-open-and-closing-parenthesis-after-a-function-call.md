---
id: 587d7b85367417b2b2512b39
title: Fehlende offene und schließende Klammern nach einem Funktionsaufruf abfangen
challengeType: 1
forumTopicId: 301185
dashedName: catch-missing-open-and-closing-parenthesis-after-a-function-call
---

# --description--

Wenn eine Funktion oder Methode keine Argumente annimmt, kann es sein, dass Du beim Aufruf vergisst, die (leeren) öffnenden und schließenden Klammern zu setzen. Oft wird das Ergebnis eines Funktionsaufrufs in einer Variablen gespeichert, die du dann in deinem Code weiterverwenden kannst. Dieser Fehler kann erkannt werden, indem Variablenwerte (oder ihre Typen) auf der Konsole protokolliert werden und festgestellt wird, dass eine Variable auf eine Funktionsreferenz gesetzt ist, anstatt auf den erwarteten Wert, den die Funktion zurückgibt.

Die Variablen im folgenden Beispiel sind unterschiedlich:

```js
function myFunction() {
  return "You rock!";
}
let varOne = myFunction;
let varTwo = myFunction();
```

Hier ist `varOne` die Funktion `myFunction` und `varTwo` ist der String `You rock!`.

# --instructions--

Korrigiere den Code so, dass die Variable `result` auf den Wert gesetzt wird, der beim Aufruf der Funktion `getNine` zurückgegeben wird.

# --hints--

Dein Code sollte die Variable `result` so verändern, dass sie auf die Zahl gesetzt wird, die die Funktion `getNine` zurückgibt.

```js
assert(result == 9);
```

Dein Code sollte die Funktion `getNine` aufrufen.

```js
assert(code.match(/getNine\(\)/g).length == 2);
```

# --seed--

## --seed-contents--

```js
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine;
console.log(result);
```

# --solutions--

```js
function getNine() {
 let x = 6;
 let y = 3;
 return x + y;
}

let result = getNine();
console.log(result);
```
