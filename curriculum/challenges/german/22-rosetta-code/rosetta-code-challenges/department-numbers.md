---
id: 59f40b17e79dbf1ab720ed7a
title: Nummern der Abteilungen
challengeType: 1
forumTopicId: 302249
dashedName: department-numbers
---

# --description--

There is a highly organized city that has decided to assign a number to each of their departments:

<ul>
  <li>Police department</li>
  <li>Sanitätsabteilung</li>
  <li>Feuerwehr</li>
</ul>

Jede Abteilung kann eine Nummer zwischen 1 und 7 (einschließlich) haben.

Die drei Abteilungsnummern müssen eindeutig sein (sich voneinander unterscheiden) und die Summe der Zahlen muss 12 ergeben.

Der Polizeichef mag keine ungeraden Zahlen und möchte eine gerade Zahl für seine Abteilung haben.

# --instructions--

Schreibe ein Programm, das alle gültigen Kombinationen als Auflistung ausgibt.

```js
[2, 3, 7] [2, 4, 6] [2, 6, 4]
[2, 7, 3] [4, 1, 7] [4, 2, 6]
[4, 3, 5] [4, 5, 3] [4, 6, 2]
[4, 7, 1] [6, 1, 5] [6, 2, 4]
[6, 4, 2] [6, 5, 1]
```

# --hints--

`combinations` sollte eine Funktion sein.

```js
assert(typeof combinations === 'function');
```

`combinations([1, 2, 3], 6)` sollte eine Auflistung zurückgeben.

```js
assert(Array.isArray(combinations([1, 2, 3], 6)));
```

`combinations([1, 2, 3, 4, 5, 6, 7], 12)` sollte eine Auflistung der Länge 14 zurückgeben.

```js
assert(combinations(nums, total).length === len);
```

`combinations([1, 2, 3, 4, 5, 6, 7], 12)` sollte alle gültigen Kombinationen zurückgeben.

```js
assert.deepEqual(combinations(nums, total), result);
```

# --seed--

## --after-user-code--

```js
const nums = [1, 2, 3, 4, 5, 6, 7];
const total = 12;
const len = 14;
const result = [
  [2, 3, 7],
  [2, 4, 6],
  [2, 6, 4],
  [2, 7, 3],
  [4, 1, 7],
  [4, 2, 6],
  [4, 3, 5],
  [4, 5, 3],
  [4, 6, 2],
  [4, 7, 1],
  [6, 1, 5],
  [6, 2, 4],
  [6, 4, 2],
  [6, 5, 1]
];
```

## --seed-contents--

```js
function combinations(possibleNumbers, total) {

  return true;
}
```

# --solutions--

```js
function combinations(possibleNumbers, total) {
  let firstNumber;
  let secondNumber;
  let thirdNumber;
  const allCombinations = [];

  for (let i = 0; i < possibleNumbers.length; i += 1) {
    firstNumber = possibleNumbers[i];

    if (firstNumber % 2 === 0) {
      for (let j = 0; j < possibleNumbers.length; j += 1) {
        secondNumber = possibleNumbers[j];

        if (j !== i && firstNumber + secondNumber <= total) {
          thirdNumber = total - firstNumber - secondNumber;

          if (thirdNumber !== firstNumber && thirdNumber !== secondNumber && possibleNumbers.includes(thirdNumber)) {
            allCombinations.push([firstNumber, secondNumber, thirdNumber]);
          }
        }
      }
    }
  }
  return allCombinations;
}
```
