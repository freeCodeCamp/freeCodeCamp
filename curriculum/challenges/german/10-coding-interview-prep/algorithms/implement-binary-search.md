---
id: 61abc7ebf3029b56226de5b6
title: Implementiere eine Binärsuche
challengeType: 1
forumTopicId: 487618
dashedName: implement-binary-search
---

# --description--

Die binäre Suche ist ein **O(log(n))** Effizienz-Algorithmus zum Finden eines Elements innerhalb eines sortierten Arrays. Dieser funktioniert auf folgende Weise:

1. Finde die mittlere `value` des sortierten Arrays. If `value == target` return `true` (The value has been found and the search is complete).
1. Falls die mittlere `value < target`, durchsuche im nächsten Schritt nur die rechte Hälfte des Arrays.
1. Falls die mittlere `value > target`, durchsuche im nächsten Schritt nur die linke Hälfte des Arrays.
1. If after searching the whole array the value is not present, return `false` (The array has been searched and the value is not in the array).

Wie du siehst, halbierst du so erfolgreich einen Array mit einer Effizienz von log(n). Für diese Herausforderung wollen wir, dass du zeigst, wie du arbeitest – wie du zum Zielwert gelangt bist... welchen Weg du eingeschlagen hast!

# --instructions--

Schreibe die Funktion `binarySearch`, welche einen binären Suchalgorithmus für einen Array implementiert – dieser soll dann einen Array mit dem von dir verwendeten Weg (jeder Mittelwertvergleich), um den Zielwert im Array zu finden, zurückgeben.

Der Funktion wird ein sortierter Array mit Integern sowie ein Zielwert übergeben. Es wird ein Array zurückgegeben, das (in Reihenfolge) den mittleren Wert enthält, den du bei jeder Halbierung des ursprünglichen Arrays gefunden hast, bis du den Zielwert gefunden hast. Der Zielwert sollte das letzte Element des zurückgegebenen Arrays sein. If the value is not found, return the string `Value Not Found`.

Beispielsweise sollte `binarySearch([1,2,3,4,5,6,7], 5)` den Array `[4,6,5]` zurückgeben.

Für diese Aufgabe MUSS – bei Halbierungen – `Math.floor()` verwendet werden, und bei Divisionen `Math.floor(x/2)`. Hierdurch wird ein konsistenter und überprüfbarer Pfad zurückgegeben.

**Hinweis:** Folgender Array wird in den Tests verwendet:

```js
const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];
```

# --hints--

`binarySearch` sollte eine Funktion sein.

```js
assert(typeof binarySearch == 'function');
```

`binarySearch(testArray, 0)` sollte `[13, 5, 2, 0]` zurückgeben.

```js
assert.deepEqual(binarySearch(_testArray, 0), [13, 5, 2, 0]);
```

`binarySearch(testArray, 1)` sollte `[13, 5, 2, 0, 1]` zurückgeben.

```js
assert.deepEqual(binarySearch(_testArray, 1), [13, 5, 2, 0, 1]);
```


`binarySearch(testArray, 2)` sollte `[13, 5, 2]` zurückgeben.

```js
assert.deepEqual(binarySearch(_testArray, 2), [13, 5, 2]);
```

`binarySearch(testArray, 6)` sollte den String `Value Not Found` zurückgeben.

```js
assert.strictEqual(binarySearch(_testArray, 6), 'Value Not Found');
```

`binarySearch(testArray, 11)` sollte `[13, 5, 10, 11]` zurückgeben.

```js
assert.deepEqual(binarySearch(_testArray, 11), [13, 5, 10, 11])
```

`binarySearch(testArray, 13)` sollte `[13]` zurückgeben.

```js
assert.deepEqual(binarySearch(_testArray, 13), [13]);
```

`binarySearch(testArray, 70)` sollte `[13, 19, 22, 49, 70]` zurückgeben.

```js
assert.deepEqual(binarySearch(_testArray, 70), [13, 19, 22, 49, 70]);
```

# --seed--

## --after-user-code--

```js
const _testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];
```

## --seed-contents--

```js
function binarySearch(searchList, value) {
  let arrayPath = [];
  return arrayPath;
}
```



# --solutions--

```js
let binarySearch = (searchList, value) => {
  let arrayPath = [];

  // set initial L - M - R
  let left = 0;
  let right = searchList.length - 1;
  let middle = Math.floor(right / 2);

  // if first comparison finds value
  if (searchList[middle] == value) {
    arrayPath.push(searchList[middle]);
    return arrayPath;
  }

  while (searchList[middle] !== value) {
    // add to output array
    arrayPath.push(searchList[middle]);

    // not found
    if (right < left) {
      return 'Value Not Found';
    }
    // value is in left or right portion of array
    // update L - M - R
    if (searchList[middle] > value) {
      right = middle - 1;
      middle = left + Math.floor((right - left) / 2);
    } else {
      left = middle + 1;
      middle = left + Math.floor((right - left) / 2);
    }

    // if found update output array and exit
    if (searchList[middle] == value) {
      arrayPath.push(searchList[middle]);

      break;
    }
  }
  return arrayPath;
};
```
