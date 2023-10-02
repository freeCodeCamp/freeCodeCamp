---
id: 587d7b7a367417b2b2512b12
title: Copiare elementi degli array usando slice()
challengeType: 1
forumTopicId: 301158
dashedName: copy-array-items-using-slice
---

# --description--

Il prossimo metodo che tratteremo è `slice()`. Invece di modificare un array, `slice()` copia o *estrae* un dato numero di elementi in un nuovo array, lasciando intatto l'array su cui è chiamato. `slice()` richiede solo 2 parametri — il primo è l'indice a cui iniziare l'estrazione, e il secondo è l'indice al quale interrompere l'estrazione (l'estrazione avverrà fino all'elemento a questo indice, che però non sarà incluso). Considera:

```js
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
```

`todaysWeather` avrà il valore `['snow', 'sleet']`, mentre `weatherConditions` sarà ancora `['rain', 'snow', 'sleet', 'hail', 'clear']`.

Di fatto, abbiamo creato un nuovo array estraendo elementi da un array esistente.

# --instructions--

Abbiamo definito una funzione, `forecast`che prende un array come argomento. Modifica la funzione usando `slice()` per estrarre le informazioni dall'array passato come argomento e restituire un nuovo array che contiene le stringhe `warm` e `sunny`.

# --hints--

`forecast` dovrebbe restituire `["warm", "sunny"]`

```js
assert.deepEqual(
  forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']),
  ['warm', 'sunny']
);
```

La funzione `forecast` dovrebbe utilizzare il metodo `slice()`

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
