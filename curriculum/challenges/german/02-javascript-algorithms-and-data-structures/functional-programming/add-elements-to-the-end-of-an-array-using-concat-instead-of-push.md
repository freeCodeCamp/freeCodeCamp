---
id: 587d7da9367417b2b2512b67
title: Füge Elemente dem Ende eines Arrays mit Concat statt Push hinzu
challengeType: 1
forumTopicId: 301226
dashedName: add-elements-to-the-end-of-an-array-using-concat-instead-of-push
---

# --description--

Bei funktionalem Programmieren geht es um das Erstellen und Nutzen von nicht verändernden Funktionen.

In der letzten Aufgabe wurde die `concat`-Methode als eine Möglichkeit vorgestellt, Arrays zu einem neuen Array zusammenzuführen, ohne die ursprünglichen Arrays zu verändern. Vergleiche die `concat`- mit der `push`-Methode. `push` fügt Elemente dem Ende des aufgerufenen Arrays hinzu, wodurch sich das Array verändert. Hier ist ein Beispiel:

```js
const arr = [1, 2, 3];
arr.push(4, 5, 6);
```

`arr` hätte nun den modifizierten Wert `[1, 2, 3, 4, 5, 6]`, was nicht dem funktionalen Programmierweg entspricht.

`concat` bietet die Möglichkeit, neue Elemente dem Ende eines Arrays zuzufügen, ohne dass dieses verändert wird. Stattdessen wird ein neues Array zurückgegeben.

# --instructions--

Ändere die `nonMutatingPush`-Funktion so, dass sie `concat` verwendet, um `newItem` dem Ende von `original` hinzuzufügen, ohne dabei die Arrays `original` und `newItem` zu verändern. Die Funktion sollte ein Array zurückgeben.

# --hints--

Dein Code sollte die `concat`-Methode verwenden.

```js
assert(code.match(/\.concat/g));
```

Dein Code sollte nicht die `push`-Methode verwenden.

```js
assert(!code.match(/\.?[\s\S]*?push/g));
```

Das `first`-Array sollte sich nicht verändern.

```js
assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]));
```

Das `second`-Array sollte sich nicht verändern.

```js
assert(JSON.stringify(second) === JSON.stringify([4, 5]));
```

`nonMutatingPush([1, 2, 3], [4, 5])` sollte `[1, 2, 3, 4, 5]` zurückgeben.

```js
assert(
  JSON.stringify(nonMutatingPush([1, 2, 3], [4, 5])) ===
    JSON.stringify([1, 2, 3, 4, 5])
);
```

# --seed--

## --seed-contents--

```js
function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.push(newItem);

  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);
```

# --solutions--

```js
function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}
const first = [1, 2, 3];
const second = [4, 5];
```
