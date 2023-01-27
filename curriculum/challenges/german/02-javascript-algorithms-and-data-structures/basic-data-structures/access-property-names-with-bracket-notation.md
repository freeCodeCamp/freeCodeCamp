---
id: 587d7b7c367417b2b2512b1a
title: Zugriff auf Eigenschaftsnamen mit der Klammernotation
challengeType: 1
forumTopicId: 301150
dashedName: access-property-names-with-bracket-notation
---

# --description--

In der ersten Aufgabe zu Objekten haben wir erwähnt, dass die Klammernotation eine Möglichkeit bietet, auf Eigenschaftswerte zuzugreifen, indem eine Variable ausgewertet wird. Stell dir zum Beispiel vor, unser `foods` Objekt wird in einem Programm für eine Supermarktkasse verwendet. Wir haben eine Funktion, die `selectedFood` festlegt und wir möchten überprüfen, ob es im Objekt `foods` vorhanden ist. Dies könnte so aussehen:

```js
let selectedFood = getCurrentFood(scannedItem);
let inventory = foods[selectedFood];
```

Dieser Code wird den in der Variable `selectedFood` gespeicherten Schlüsselwert auswerten und dann den entsprechenden Wert zu diesem Schlüssel aus dem Objekt `foods` ausgeben oder `undefined` falls er nicht vorhanden ist. Die Klammernotation ist sehr nützlich, weil Objekteigenschaften vor der Laufzeit manchmal unbekannt sind oder dynamischer auf sie zugegriffen werden muss.

# --instructions--

Wir haben eine Funktion namens `checkInventory` definiert, die ein gescanntes Produkt als ein Argument erhält. Gib den aktuellen Wert zum `scannedItem` Schlüssel des `foods` Objekts zurück. Du kannst davon ausgehen, dass nur gültige Schlüssel als ein Argument an `checkInventory` übergeben werden.

# --hints--

`checkInventory` sollte eine Funktion sein.

```js
assert.strictEqual(typeof checkInventory, 'function');
```

Das `foods` Objekt sollte nur die folgenden Schlüssel-Wert-Paare enthalten: `apples: 25`, `oranges: 32`, `plums: 28`, `bananas: 13`, `grapes: 35`, `strawberries: 27`.

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

`checkInventory("apples")` sollte `25` zurückgeben.

```js
assert.strictEqual(checkInventory('apples'), 25);
```

`checkInventory("bananas")` sollte `13` zurückgeben.

```js
assert.strictEqual(checkInventory('bananas'), 13);
```

`checkInventory("strawberries")` sollte `27` zurückgeben.

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
