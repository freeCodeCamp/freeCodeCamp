---
id: 5cfa3679138e7d9595b9d9d4
title: Schleifen durch Rekursion ersetzen
challengeType: 1
videoUrl: >-
  https://www.freecodecamp.org/news/how-recursion-works-explained-with-flowcharts-and-a-video-de61f40cb7f9/
forumTopicId: 301175
dashedName: replace-loops-using-recursion
---

# --description--

Rekursion ist das Konzept, dass eine Funktion durch sich selbst aufgerufen werden kann. Damit du das besser verstehst, solltest du dir folgende Aufgabe vorstellen: Multipliziere die ersten `n` Elemente eines Arrays, um das Produkt dieser Elemente zu bilden. Mit einer `for`-Schleife könntest du dies tun:

```js
  function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }
```

Beachte jedoch, dass `multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]`. Das bedeutet, dass du `multiply` in Bezug auf sich selbst umschreiben kannst und nie eine Schleife verwenden musst.

```js
  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
```

Die rekursive Version von `multiply` funktioniert folgendermaßen. Im <dfn>Basisfall</dfn>, in dem `n <= 0` ist, gibt sie 1 zurück. Bei größeren Werten von `n` ruft sie sich selbst auf, aber mit `n - 1`. Dieser Funktionsaufruf wird auf die gleiche Weise ausgewertet, indem `multiply` erneut aufgerufen wird, bis `n <= 0`. An diesem Punkt können alle Funktionen zurückkehren und die ursprüngliche `multiply` liefert die Antwort.

**Beachte:** Rekursive Funktionen müssen einen Basisfall haben, in den sie zurückkehren, ohne die Funktion erneut aufzurufen (in diesem Beispiel, wenn `n <= 0`), sonst können sie ihre Ausführung nie beenden.

# --instructions--

Schreibe eine rekursive Funktion, `sum(arr, n)`, die die Summe der ersten `n` Elemente eines Arrays `arr` zurückgibt.

# --hints--

`sum([1], 0)` sollte gleich 0 sein.

```js
assert.equal(sum([1], 0), 0);
```

`sum([2, 3, 4], 1)` sollte gleich 2 sein.

```js
assert.equal(sum([2, 3, 4], 1), 2);
```

`sum([2, 3, 4, 5], 3)` sollte gleich 9 sein.

```js
assert.equal(sum([2, 3, 4, 5], 3), 9);
```

Dein Code sollte keine Schleifen enthalten (`for` oder `while` oder Funktionen höherer Ordnung wie `forEach`, `map`, `filter`, oder `reduce`).

```js
assert(
  !code.match(/for|while|forEach|map|filter|reduce/g)
);
```

Um dieses Problem zu lösen, solltest du eine Rekursion verwenden.

```js
assert(
  sum.toString().match(/sum\(.*\)/g).length > 1
);
```

# --seed--

## --seed-contents--

```js
function sum(arr, n) {
  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
function sum(arr, n) {
  // Only change code below this line
  if(n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}
```
