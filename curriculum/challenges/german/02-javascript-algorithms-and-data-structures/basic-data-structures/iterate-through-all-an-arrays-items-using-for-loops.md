---
id: 587d7b7b367417b2b2512b15
title: Wiederholung durch alle Elemente eines Arrays mit For-Schleifen
challengeType: 1
forumTopicId: 301161
dashedName: iterate-through-all-an-arrays-items-using-for-loops
---

# --description--

Bei der Arbeit mit Arrays ist es manchmal sehr praktisch, wenn man durch jedes Element iterieren kann, um ein oder mehrere Elemente zu finden, die man braucht, oder um ein Array auf der Grundlage der Datenelemente, die bestimmte Kriterien erfüllen, zu bearbeiten. JavaScript bietet mehrere eingebaute Methoden, die jeweils auf leicht unterschiedliche Weise über Arrays iterieren, um unterschiedliche Ergebnisse zu erzielen (sowie `every()`, `forEach()`, `map()`, etc.), die Technik jedoch, die am flexibelsten ist und uns die größte Kontrolle bietet, ist eine einfache `for`-Schleife.

Beachte Folgendes:

```js
function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
```

Wenn man eine `for` -Schleife verwendet, durchläuft und greift diese Funktion auf jedes Element des Arrays zu, und unterzieht es einem einfachen Test, den wir erstellt haben. Auf diese Weise haben wir einfach und programmatisch ermittelt, welche Datenelemente größer als `10` sind, und einen neuen Array, `[12, 14, 80]`, zurückgegeben, der diese Elemente enthält.

# --instructions--

Wir haben eine Funktion `filteredArray` definiert, welche einen verschachtelten Array `arr` und `elem` als Argumente benötigt und einen neuen Array zurückgibt. `elem` stellt ein Element dar, das auf einem oder mehreren Arrays, die in `arr` verschachtelt sind, vorhanden sein könnte. Verändere die Funktion, indem du eine `for`-Schleife verwendest, um eine gefilterte Version des übergebenden Arrays zurückzuerhalten, sodass jeder Array, der in `arr` verschachtelt ist und `elem` enthält, entfernt wurde.

# --hints--

`filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)` sollte `[[10, 8, 3], [14, 6, 23]]` zurückgeben

```js
assert.deepEqual(
  filteredArray(
    [
      [10, 8, 3],
      [14, 6, 23],
      [3, 18, 6]
    ],
    18
  ),
  [
    [10, 8, 3],
    [14, 6, 23]
  ]
);
```

`filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2)` sollte `[["flutes", 4]]` zurückgeben

```js
assert.deepEqual(
  filteredArray(
    [
      ['trumpets', 2],
      ['flutes', 4],
      ['saxophones', 2]
    ],
    2
  ),
  [['flutes', 4]]
);
```

`filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter")` sollte `[["amy", "beth", "sam"]]` zurückgeben

```js
assert.deepEqual(
  filteredArray(
    [
      ['amy', 'beth', 'sam'],
      ['dave', 'sean', 'peter']
    ],
    'peter'
  ),
  [['amy', 'beth', 'sam']]
);
```

`filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)` sollte `[]` zurückgeben

```js
assert.deepEqual(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9]
    ],
    3
  ),
  []
);
```

Die Funktion `filteredArray` sollte eine `for`-Schleife verwenden

```js
assert.notStrictEqual(filteredArray.toString().search(/for/), -1);
```

# --seed--

## --seed-contents--

```js
function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line

  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
```

# --solutions--

```js
function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i<arr.length; i++) {
    if (arr[i].indexOf(elem) < 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
```
