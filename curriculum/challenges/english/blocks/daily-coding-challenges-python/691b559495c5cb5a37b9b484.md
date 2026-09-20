---
id: 691b559495c5cb5a37b9b484
title: "Challenge 124: Inventory Update"
challengeType: 29
dashedName: challenge-124
---

# --description--

Given a 2D array representing the inventory of your store, and another 2D array representing a shipment you have received, return your updated inventory.

- Each element in the arrays will have the format: `[quantity, "item"]`, where `quantity` is an integer and `"item"` is a string.
- Update items in the inventory by adding the quantity of any matching items from the shipment.
- If a received item does not exist in the current inventory, add it as a new entry to the end of the inventory.
- Return inventory in the order it was given with new items at the end in the order they appear in the shipment.

For example, given an inventory of `[[2, "apples"], [5, "bananas"]]` and a shipment of `[[1, "apples"], [3, "bananas"]]`, return `[[3, "apples"], [8, "bananas"]]`.

# --hints--

`update_inventory([[2, "apples"], [5, "bananas"]], [[1, "apples"], [3, "bananas"]])` should return `[[3, "apples"], [8, "bananas"]]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(update_inventory([[2, "apples"], [5, "bananas"]], [[1, "apples"], [3, "bananas"]]), [[3, "apples"], [8, "bananas"]])`)
}})
```

`update_inventory([[2, "apples"], [5, "bananas"]], [[1, "apples"], [3, "bananas"], [4, "oranges"]])` should return `[[3, "apples"], [8, "bananas"], [4, "oranges"]]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(update_inventory([[2, "apples"], [5, "bananas"]], [[1, "apples"], [3, "bananas"], [4, "oranges"]]), [[3, "apples"], [8, "bananas"], [4, "oranges"]])`)
}})
```

`update_inventory([], [[10, "apples"], [30, "bananas"], [20, "oranges"]])` should return `[[10, "apples"], [30, "bananas"], [20, "oranges"]]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(update_inventory([], [[10, "apples"], [30, "bananas"], [20, "oranges"]]), [[10, "apples"], [30, "bananas"], [20, "oranges"]])`)
}})
```

`update_inventory([[0, "Bowling Ball"], [0, "Dirty Socks"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]])` should return `[[1, "Bowling Ball"], [0, "Dirty Socks"], [1, "Hair Pin"], [0, "Microphone"], [1, "Half-Eaten Apple"], [1, "Toothpaste"]]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(update_inventory([[0, "Bowling Ball"], [0, "Dirty Socks"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]), [[1, "Bowling Ball"], [0, "Dirty Socks"], [1, "Hair Pin"], [0, "Microphone"], [1, "Half-Eaten Apple"], [1, "Toothpaste"]])`)
}})
```

# --seed--

## --seed-contents--

```py
def update_inventory(inventory, shipment):

    return inventory
```

# --solutions--

```py
def update_inventory(inventory, shipment):
    inventory_map = {item: i for i, (qty, item) in enumerate(inventory)}

    for qty, item in shipment:
        if item in inventory_map:
            index = inventory_map[item]
            inventory[index][0] += qty
        else:
            inventory.append([qty, item])
            inventory_map[item] = len(inventory) - 1

    return inventory
```
