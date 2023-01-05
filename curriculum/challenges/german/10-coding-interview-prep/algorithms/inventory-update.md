---
id: a56138aff60341a09ed6c480
title: Inventory Update
challengeType: 1
forumTopicId: 16019
dashedName: inventory-update
---

# --description--

Vergleiche und aktualisiere des in einem 2D-Array gespeicherten Bestands mit einem zweiten 2D-Array einer neuen Lieferung. Update the current existing inventory item quantities (in `arr1`). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

# --hints--

Die Funktion `updateInventory` soll ein Array zurückgeben.

```js
assert.isArray(
  updateInventory(
    [
      [21, 'Bowling Ball'],
      [2, 'Dirty Sock'],
      [1, 'Hair Pin'],
      [5, 'Microphone']
    ],
    [
      [2, 'Hair Pin'],
      [3, 'Half-Eaten Apple'],
      [67, 'Bowling Ball'],
      [7, 'Toothpaste']
    ]
  )
);
```

`updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])` soll ein Array der Länge 6 zurückgeben.

```js
assert.equal(
  updateInventory(
    [
      [21, 'Bowling Ball'],
      [2, 'Dirty Sock'],
      [1, 'Hair Pin'],
      [5, 'Microphone']
    ],
    [
      [2, 'Hair Pin'],
      [3, 'Half-Eaten Apple'],
      [67, 'Bowling Ball'],
      [7, 'Toothpaste']
    ]
  ).length,
  6
);
```

`updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])` sollte `[[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]` zurückgeben.

```js
assert.deepEqual(
  updateInventory(
    [
      [21, 'Bowling Ball'],
      [2, 'Dirty Sock'],
      [1, 'Hair Pin'],
      [5, 'Microphone']
    ],
    [
      [2, 'Hair Pin'],
      [3, 'Half-Eaten Apple'],
      [67, 'Bowling Ball'],
      [7, 'Toothpaste']
    ]
  ),
  [
    [88, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [3, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [5, 'Microphone'],
    [7, 'Toothpaste']
  ]
);
```

`updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [])` sollte `[[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]` zurückgeben.

```js
assert.deepEqual(
  updateInventory(
    [
      [21, 'Bowling Ball'],
      [2, 'Dirty Sock'],
      [1, 'Hair Pin'],
      [5, 'Microphone']
    ],
    []
  ),
  [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone']
  ]
);
```

`updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])` sollte `[[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]]` zurückgeben.

```js
assert.deepEqual(
  updateInventory(
    [],
    [
      [2, 'Hair Pin'],
      [3, 'Half-Eaten Apple'],
      [67, 'Bowling Ball'],
      [7, 'Toothpaste']
    ]
  ),
  [
    [67, 'Bowling Ball'],
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [7, 'Toothpaste']
  ]
);
```

`updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]])` sollte `[[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]]` zurückgeben.

```js
assert.deepEqual(
  updateInventory(
    [
      [0, 'Bowling Ball'],
      [0, 'Dirty Sock'],
      [0, 'Hair Pin'],
      [0, 'Microphone']
    ],
    [
      [1, 'Hair Pin'],
      [1, 'Half-Eaten Apple'],
      [1, 'Bowling Ball'],
      [1, 'Toothpaste']
    ]
  ),
  [
    [1, 'Bowling Ball'],
    [0, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [1, 'Half-Eaten Apple'],
    [0, 'Microphone'],
    [1, 'Toothpaste']
  ]
);
```

# --seed--

## --seed-contents--

```js
function updateInventory(arr1, arr2) {
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
```

# --solutions--

```js
function updateInventory(arr1, arr2) {
  arr2.forEach(function(item) {
    createOrUpdate(arr1, item);
  });
  // All inventory must be accounted for or you're fired!
  return arr1;
}

function createOrUpdate(arr1, item) {
  var index = -1;
  while (++index < arr1.length) {
    if (arr1[index][1] === item[1]) {
      arr1[index][0] += item[0];
      return;
    }
    if (arr1[index][1] > item[1]) {
      break;
    }
  }
  arr1.splice(index, 0, item);
}

// Example inventory lists
var curInv = [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone']
];

var newInv = [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste']
];

updateInventory(curInv, newInv);
```
