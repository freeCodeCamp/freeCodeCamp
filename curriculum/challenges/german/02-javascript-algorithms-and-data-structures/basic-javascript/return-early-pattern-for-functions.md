---
id: 56533eb9ac21ba0edf2244c4
title: Muster für die frühe Rückgabe (Return-Early) bei Funktionen
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQe39Sq'
forumTopicId: 18272
dashedName: return-early-pattern-for-functions
---

# --description--

Wenn eine `return`-Anweisung erreicht wird, stoppt die Ausführung der aktuellen Funktion und die Kontrolle wird an die aufrufende Stelle zurückgegeben.

**Beispiel**

```js
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
```

Das obige Beispiel zeigt den String `Hello` in der Konsole an und gibt den String `World` zurück. Der String `byebye` wird nie in der Konsole angezeigt, weil die Funktion mit der `return`-Anweisung beendet wird.

# --instructions--

Ändere die Funktion `abTest` so, dass die Funktion sofort mit einem Wert von `undefined` beendet wird, wenn `a` oder `b` kleiner als `0` sind.

**Hinweis:**  
Denk daran, dass <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-uninitialized-variables" target="_blank" rel="noopener noreferrer nofollow"><code>undefined</code> ein Schlüsselwort</a> und kein String ist.

# --hints--

`abTest(2, 2)` sollte eine Zahl zurückgeben

```js
assert(typeof abTest(2, 2) === 'number');
```

`abTest(2, 2)` sollte `8` zurückgeben

```js
assert(abTest(2, 2) === 8);
```

`abTest(-2, 2)` sollte `undefined` zurückgeben

```js
assert(abTest(-2, 2) === undefined);
```

`abTest(2, -2)` sollte `undefined` zurückgeben

```js
assert(abTest(2, -2) === undefined);
```

`abTest(2, 8)` sollte `18` zurückgeben

```js
assert(abTest(2, 8) === 18);
```

`abTest(3, 3)` sollte `12` zurückgeben

```js
assert(abTest(3, 3) === 12);
```

`abTest(0, 0)` sollte `0` zurückgeben

```js
assert(abTest(0, 0) === 0);
```

# --seed--

## --seed-contents--

```js
// Setup
function abTest(a, b) {
  // Only change code below this line



  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
```

# --solutions--

```js
function abTest(a, b) {
  if(a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
```
