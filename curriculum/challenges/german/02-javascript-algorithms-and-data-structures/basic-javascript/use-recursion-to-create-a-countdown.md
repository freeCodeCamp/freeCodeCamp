---
id: 5cd9a70215d3c4e65518328f
title: Verwende Rekursion, um einen Countdown zu erstellen
challengeType: 1
forumTopicId: 305925
dashedName: use-recursion-to-create-a-countdown
---

# --description--

In einer <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion" target="_blank" rel="noopener noreferrer nofollow">vorherigen Aufgabe</a> hast du gelernt, wie man eine `for`-Schleife durch Rekursion ersetzt. Schauen wir uns nun eine komplexere Funktion an, die ein Array von aufeinanderfolgenden ganzen Zahlen (Integers) zurückgibt, beginnend mit `1` bis zu der an die Funktion übergebenen Zahl.

Wie in der vorhergehenden Aufgabe erwähnt, wird es einen <dfn>Basisfall</dfn> geben. Der Basisfall teilt der rekursiven Funktion mit, wann sie sich nicht mehr selbst aufrufen muss. Es handelt sich um einen einfachen Fall, bei dem der Rückgabewert bereits bekannt ist. Es wird auch einen <dfn>rekursiven Aufruf</dfn> geben, der die ursprüngliche Funktion mit anderen Argumenten ausführt. Wenn die Funktion richtig geschrieben ist, wird schließlich der Basisfall erreicht.

Angenommen, du willst eine rekursive Funktion schreiben, die ein Array mit den Zahlen `1` bis `n` zurückgibt. Diese Funktion muss ein Argument, `n`, akzeptieren, das die endgültige Zahl darstellt. Dann muss er sich selbst mit immer kleineren Werten von `n` aufrufen, bis er `1` erreicht. Du könntest die Funktion wie folgt schreiben:

```javascript
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
```

Der Wert `[1, 2, 3, 4, 5]` wird in der Konsole angezeigt.

Auf den ersten Blick erscheint dies widersprüchlich, da der Wert von `n` *abnehmend* ist, aber die Werte im endgültigen Array sind *zunehmend*. Das liegt daran, dass der Push zuletzt erfolgt, nachdem der rekursive Aufruf zurückgekehrt ist. An dem Punkt, an dem `n` in das Array geschoben wird, wurde `countup(n - 1)` bereits ausgewertet und liefert `[1, 2, ..., n - 1]`.

# --instructions--

Wir haben eine Funktion namens `countdown` mit einem Parameter (`n`) definiert. Die Funktion sollte eine Rekursion verwenden, um ein Array mit den ganzen Zahlen `n` bis `1` basierend auf dem Parameter `n` zurückzugeben. Wenn die Funktion mit einer Zahl kleiner als 1 aufgerufen wird, sollte die Funktion ein leeres Array zurückgeben. Wenn du diese Funktion zum Beispiel mit `n = 5` aufrufst, wird das Array `[5, 4, 3, 2, 1]` zurückgegeben. Deine Funktion muss eine Rekursion verwenden, indem sie sich selbst aufruft und darf keine Schleifen verwenden.

# --hints--

`countdown(-1)` sollte ein leeres Array zurückgeben.

```js
assert.isEmpty(countdown(-1));
```

`countdown(10)` sollte `[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]` zurückgeben

```js
assert.deepStrictEqual(countdown(10), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
```

`countdown(5)` sollte `[5, 4, 3, 2, 1]` zurückgeben

```js
assert.deepStrictEqual(countdown(5), [5, 4, 3, 2, 1]);
```

Dein Code sollte keine Schleifen enthalten (`for`, `while` oder Funktionen höherer Ordnung wie `forEach`, `map`, `filter` und `reduce`).

```js
assert(
  !code.match(/for|while|forEach|map|filter|reduce/g)
);
```

Um dieses Problem zu lösen, solltest du eine Rekursion verwenden.

```js
assert(
  countdown.toString().match(/countdown\s*\(.+\)/)
);
```

Globale Variablen sollten nicht zum Zwischenspeichern des Arrays verwendet werden.

```js
countdown(1)
assert.deepStrictEqual(countdown(5), [5, 4, 3, 2, 1]);
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
function countdown(n){
  return;
}
// Only change code above this line
```

# --solutions--

```js
function countdown(n){
   return n < 1 ? [] : [n].concat(countdown(n - 1));
}
```
