---
id: 66c748ffdfbe4f2ede268be2
title: Step 20
challengeType: 1
dashedName: step-20
---

# --description--

In this final step of the workshop, log the final grocery list to the console.

And with this last step your grocery list is complete!

# --hints--

You should log the `shoppingList` array to the console.

```js
assert.match(code, /console\.log\(\s*shoppingList\s*\)/);
```

# --seed--

## --seed-contents--

```js
console.log("Grocery shopping list");

const shoppingList = [];

console.log("It will be nice to have some fruit to eat.");

shoppingList.push("Apples");

function getShoppingListMsg() {
  return `Current Shopping List: ${shoppingList}`;
}

console.log(getShoppingListMsg());

shoppingList.push("Grapes");
console.log(getShoppingListMsg());

console.log("It looks like we need to get some cooking oil.");

shoppingList.unshift("Vegetable Oil");
console.log(getShoppingListMsg());

shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
console.log(getShoppingListMsg());

console.log("This looks like too much junk food.");

shoppingList.pop();
console.log(getShoppingListMsg());

console.log("It might be nice to get a dessert.");

shoppingList.unshift("Chocolate Cake");
console.log(getShoppingListMsg());

console.log("On second thought, maybe we should be more health conscious.");

shoppingList.shift();
shoppingList[0] = "Canola Oil";

--fcc-editable-region--

--fcc-editable-region--
```

# --solutions--

```js
console.log("Grocery shopping list");

const shoppingList = [];

console.log("It will be nice to have some fruit to eat.");

shoppingList.push("Apples");

function getShoppingListMsg() {
  return `Current Shopping List: ${shoppingList}`;
}

console.log(getShoppingListMsg());

shoppingList.push("Grapes");
console.log(getShoppingListMsg());

console.log("It looks like we need to get some cooking oil.");

shoppingList.unshift("Vegetable Oil");
console.log(getShoppingListMsg());

shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
console.log(getShoppingListMsg());

console.log("This looks like too much junk food.");

shoppingList.pop();
console.log(getShoppingListMsg());

console.log("It might be nice to get a dessert.");

shoppingList.unshift("Chocolate Cake");
console.log(getShoppingListMsg());

console.log("On second thought, maybe we should be more health conscious.");

shoppingList.shift();
shoppingList[0] = "Canola Oil";

console.log(shoppingList);
```
