---
id: a56138aff60341a09ed6c480
title: Atualização de inventário
challengeType: 1
forumTopicId: 16019
dashedName: inventory-update
---

# --description--

Compare e atualize o inventário armazenado em um array 2D contrastando-o com um segundo array 2D de uma nova entrega. Atualize as quantidades atuais de itens do inventário (em `arr1`). Se um item não puder ser encontrado, adicione o novo item e sua quantidade no array do inventário. O array do inventário retornado deve estar em ordem alfabética por item.

# --hints--

A função `updateInventory` deve retornar um array.

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

`updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])` deve retornar um array de tamanho 6.

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

`updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])` deve retornar `[[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]`.

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

`updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [])` deve retornar `[[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]`.

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

`updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])` deve retornar `[[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]]`.

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

`updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]])` deve retornar `[[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]]`.

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
