---
id: 66c748ffdfbe4f2ede268be2
title: Step 19
challengeType: 1
dashedName: step-19
---

# --description--

In this final step of the workshop, log the final grocery list to the console.

Start by adding a `console.log` statement. Inside the `console.log` statement, use template literal syntax to log the message `"Here is the final shopping list: "` followed by the `shoppingList` array.

And with this last step your grocery list is complete!

# --hints--

You should have a console.log statement that logs the message `"Here is the final shopping list: "` followed by the `shoppingList` array.

```js
assert.match(code, /console\.log\(("')(Here\s+is\s+the\s+final\s+shopping\s+list:\s+\${shoppingList})\1\)/);
```

# --seed--

## --seed-contents--

```js
console.log("Grocery shopping list");

const shoppingList = [];

console.log("It will be nice to have some fruit to eat.");

shoppingList.push("Apples");
console.log(`Current Shopping List: ${shoppingList}`);

shoppingList.push("Grapes");
console.log(`Current Shopping List: ${shoppingList}`);

console.log("It looks like we need to get some cooking oil.");

shoppingList.unshift("Vegetable Oil");
console.log(`Current Shopping List: ${shoppingList}`);

shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
console.log(`Current Shopping List: ${shoppingList}`);

console.log("This looks like to much junk food. Let's remove the last item from the list.");

shoppingList.pop();
console.log(`Current Shopping List: ${shoppingList}`);

console.log("It might be nice to get a dessert. Let's add that to the top of the list so we get that first.");

shoppingList.unshift("Chocolate Cake");
console.log(`Current Shopping List: ${shoppingList}`);

console.log("On second thought, maybe we should be more health conscious. Let's remove the dessert from the list.");

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
console.log(`Current Shopping List: ${shoppingList}`);

shoppingList.push("Grapes");
console.log(`Current Shopping List: ${shoppingList}`);

console.log("It looks like we need to get some cooking oil.");

shoppingList.unshift("Vegetable Oil");
console.log(`Current Shopping List: ${shoppingList}`);

shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
console.log(`Current Shopping List: ${shoppingList}`);

console.log("This looks like to much junk food. Let's remove the last item from the list.");

shoppingList.pop();
console.log(`Current Shopping List: ${shoppingList}`);

console.log("It might be nice to get a dessert. Let's add that to the top of the list so we get that first.");

shoppingList.unshift("Chocolate Cake");
console.log(`Current Shopping List: ${shoppingList}`);

console.log("On second thought, maybe we should be more health conscious. Let's remove the dessert from the list.");

shoppingList.shift();
shoppingList[0] = "Canola Oil";

console.log(`Here is the final shopping list: ${shoppingList}`);
```
