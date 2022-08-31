---
id: 587d7b90367417b2b2512b65
title: Teil eines Arrays mit der slice-Methode zurückgeben
challengeType: 1
forumTopicId: 301239
dashedName: return-part-of-an-array-using-the-slice-method
---

# --description--

Die Methode `slice` gibt eine Kopie bestimmter Elemente eines Arrays zurück. Sie kann zwei Argumente annehmen: Das erste gibt den Index an, an dem das Slice beginnen soll, das zweite ist der Index, an dem das Slice enden soll (und ist nicht exklusiv). Wenn die Argumente nicht angegeben werden, wird standardmäßig am Anfang des Arrays begonnen und bis zum Ende durchgezogen, was eine einfache Möglichkeit ist, eine Kopie des gesamten Arrays zu erstellen. Die Methode `slice` verändert das ursprüngliche Array nicht, sondern gibt ein neues zurück.

Hier ist ein Beispiel:

```js
const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const newArray = arr.slice(1, 3);
```

`newArray` würde den Wert `["Dog", "Tiger"]` haben.

# --instructions--

Verwende die Methode `slice` in der Funktion `sliceArray`, um einen Teil des Arrays `anim` mit den angegebenen Indizes `beginSlice` und `endSlice` zurückzugeben. Die Funktion sollte ein Array zurückgeben.

# --hints--

Dein Code sollte die Methode `slice` verwenden.

```js
assert(code.match(/\.slice/g));
```

Die Variable `inputAnim` sollte sich nicht ändern.

```js
assert(
  JSON.stringify(inputAnim) ===
    JSON.stringify(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'])
);
```

`sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3)` sollte `["Dog", "Tiger"]` zurückgeben.

```js
assert(
  JSON.stringify(sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 1, 3)) ===
    JSON.stringify(['Dog', 'Tiger'])
);
```

`sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1)` sollte `["Cat"]` zurückgeben.

```js
assert(
  JSON.stringify(sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 0, 1)) ===
    JSON.stringify(['Cat'])
);
```

`sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4)` sollte `["Dog", "Tiger", "Zebra"]` zurückgeben.

```js
assert(
  JSON.stringify(sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 1, 4)) ===
    JSON.stringify(['Dog', 'Tiger', 'Zebra'])
);
```

# --seed--

## --seed-contents--

```js
function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line


  // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
```

# --solutions--

```js
function sliceArray(anim, beginSlice, endSlice) {
  return anim.slice(beginSlice, endSlice);
}
const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
```
