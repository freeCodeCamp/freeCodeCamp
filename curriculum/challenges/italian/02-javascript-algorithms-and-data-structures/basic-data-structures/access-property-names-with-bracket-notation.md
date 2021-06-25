---
id: 587d7b7c367417b2b2512b1a
title: Accedere ai nomi delle proprietà con la notazione a parentesi
challengeType: 1
forumTopicId: 301150
dashedName: access-property-names-with-bracket-notation
---

# --description--

Nella prima sfida sugli oggetti abbiamo menzionato l'uso della notazione a parentesi come modo per accedere ai valori delle proprietà utilizzando la valutazione di una variabile. Per esempio, immagina che il nostro oggetto `foods` venga utilizzato in un programma per il registratore di cassa di un supermercato. Abbiamo una funzione che imposta `selectedFood` e vogliamo controllare se nel nostro oggetto `foods` è presente quel cibo. Questo potrebbe apparire così:

```js
let selectedFood = getCurrentFood(scannedItem);
let inventory = foods[selectedFood];
```

Questo codice valuterà il valore memorizzato nella variabile `selectedFood` e restituirà il valore di quella proprietà nell'oggetto `foods`, oppure `undefined` se non è presente. La notazione a parentesi è molto utile perché a volte le proprietà dell'oggetto non sono note prima dell'esecuzione o abbiamo bisogno di accedervi in modo più dinamico.

# --instructions--

Abbiamo definito una funzione, `checkInventory`, che riceve un elemento scansionato come argomento. Restituisci il valore corrente della proprietà `scannedItem` nell'oggetto `foods`. Puoi supporre che saranno fornite come argomento solo chiavi valide per `checkInventory`.

# --hints--

`checkInventory` dovrebbe essere una funzione.

```js
assert.strictEqual(typeof checkInventory, 'function');
```

L'oggetto `foods` dovrebbe avere solo le seguenti coppie di proprietà-valori: `apples: 25`, `oranges: 32`, `plums: 28`, `bananas: 13`, `grapes: 35`, `strawberries: 27`.

```js
assert.deepEqual(foods, {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
});
```

`checkInventory("apples")` dovrebbe restituire `25`.

```js
assert.strictEqual(checkInventory('apples'), 25);
```

`checkInventory("bananas")` dovrebbe restituire `13`.

```js
assert.strictEqual(checkInventory('bananas'), 13);
```

`checkInventory("strawberries")` dovrebbe restituire `27`.

```js
assert.strictEqual(checkInventory('strawberries'), 27);
```

# --seed--

## --seed-contents--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line

  // Only change code above this line
}

console.log(checkInventory("apples"));
```

# --solutions--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  return foods[scannedItem];
}
```
