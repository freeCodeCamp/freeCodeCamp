---
id: 587d7dab367417b2b2512b70
title: Einführung in Currying und partielle Anwendung
challengeType: 1
forumTopicId: 301232
dashedName: introduction-to-currying-and-partial-application
---

# --description--

Die Anzahl der Argumente, die eine Funktion benötigt, nennt man die <dfn>Natur</dfn> der Funktion. Das <dfn>Currying</dfn> einer Funktion bedeutet, dass eine Funktion der Ordnung N in N Funktionen der Ordnung 1 transformiert wird.

Mit anderen Worten: Eine Funktion wird so umstrukturiert, dass sie ein Argument annimmt und dann eine andere Funktion zurückgibt, die das nächste Argument annimmt, und so weiter.

Hier ist ein Beispiel:

```js
function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function(y) {
    return x + y;
  }
}

const curried = x => y => x + y

curried(1)(2)
```

`curried(1)(2)` würde `3` zurückgeben.

Das ist in deinem Programm nützlich, wenn du nicht alle Argumente für eine Funktion auf einmal angeben kannst. Du kannst jeden Funktionsaufruf in einer Variablen speichern, die die zurückgegebene Funktionsreferenz enthält, die das nächste Argument übernimmt, wenn es verfügbar ist. Hier ist ein Beispiel, in dem die Curried-Funktion aus dem obigen Beispiel verwendet wird:

```js
const funcForY = curried(1);
console.log(funcForY(2)); // 3
```

In ähnlicher Weise kann <dfn>partielle Anwendung</dfn> als Anwendung einiger Argumente auf eine Funktion und die Rückgabe einer anderen Funktion, die auf weitere Argumente angewendet wird, beschrieben werden. Hier ist ein Beispiel:

```js
function impartial(x, y, z) {
  return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13
```

# --instructions--

Fülle den Körper der Funktion `add` so aus, dass sie Currying verwendet, um die Parameter `x`, `y` und `z` hinzuzufügen.

# --hints--

`add(10)(20)(30)` sollte `60` zurückgeben.

```js
assert(add(10)(20)(30) === 60);
```

`add(1)(2)(3)` sollte `6` zurückgeben.

```js
assert(add(1)(2)(3) === 6);
```

`add(11)(22)(33)` sollte `66` zurückgeben.

```js
assert(add(11)(22)(33) === 66);
```

Dein Code sollte eine abschließende Anweisung enthalten, die `x + y + z` zurückgibt.

```js
assert(code.match(/[xyz]\s*?\+\s*?[xyz]\s*?\+\s*?[xyz]/g));
```

# --seed--

## --seed-contents--

```js
function add(x) {
  // Only change code below this line


  // Only change code above this line
}

add(10)(20)(30);
```

# --solutions--

```js
const add = x => y => z => x + y + z
```
