---
id: 587d7b7a367417b2b2512b12
title: Kopiere Array-Elemente mit der slice() - Methode
challengeType: 1
forumTopicId: 301158
dashedName: copy-array-items-using-slice
---

# --description--

Die nächste Methode, mit der wir uns beschäftigen ist `slice()`. Anstatt einen Array zu verändern, kopiert oder *extrahiert* `slice()` eine bestimmte Anzahl an Elementen in einen neuen Array, sodass der aufgerufene Array unverändert bleibt. `slice()` benötigt nur 2 Parameter -- der erste ist der Index, an welchem die Extraktion beginnen soll, und der zweite ist der Index, an welchem die Extraktion gestoppt werden soll (die Extraktion wird bis zum Ende auftreten, jedoch ohne das Element an diesem Index). Beachte Folgendes:

```js
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
```

`todaysWeather` würde den Wert `['snow', 'sleet']` haben, während `weatherConditions` immer noch `['rain', 'snow', 'sleet', 'hail', 'clear']` hat.

Wir haben in der Tat einen neuen Array erstellt, indem wir Elemente aus einem bestehenden Array extrahiert haben.

# --instructions--

Wir haben eine Funktion `forecast` definiert, die einen Array als ein Argument verwendet. Verändere die Funktion mit `slice()`, um Informationen aus dem Argument-Array zu extrahieren und einen neuen Array mit den String-Elementen `warm` und `sunny` zurückzugeben.

# --hints--

`forecast` sollte `["warm", "sunny"]` zurückgeben

```js
assert.deepEqual(
  forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']),
  ['warm', 'sunny']
);
```

Die Funktion `forecast` sollte die `slice()` Methode verwenden

```js
assert(/\.slice\(/.test(code));
```

# --seed--

## --seed-contents--

```js
function forecast(arr) {
  // Only change code below this line

  return arr;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
```

# --solutions--

```js
function forecast(arr) {
  return arr.slice(2,4);
}
```
