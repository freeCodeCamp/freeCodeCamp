---
id: 56533eb9ac21ba0edf2244bc
title: Shopping List
challengeType: 1
forumTopicId: 18280
dashedName: shopping-list
---

# --description--

Create a shopping list in the variable `myList`. The list should be a multi-dimensional array containing several sub-arrays.

The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.

```js
["Chocolate Bar", 15]
```

There should be at least 5 sub-arrays in the list.

# --hints--

`myList` should be an array.

```js
assert.isArray(myList);
```

The first elements in each of your sub-arrays should all be strings.

```js
for(let i = 0; i < myList.length; i++)
{
  assert.isString(myList[i][0]); 
}
```

The second elements in each of your sub-arrays should all be numbers.

```js
for(let i = 0; i < myList.length; i++)
{
  assert.isNumber(myList[i][1]); 
}
```

You should have at least 5 items in your list.

```js
assert.isAtLeast(myList.length, 5);
```

# --seed--

## --seed-contents--

```js
const myList = [];
```

# --solutions--

```js
const myList = [
  ["Candy", 10],
  ["Potatoes", 12],
  ["Eggs", 12],
  ["Catfood", 1],
  ["Toads", 9]
];
```
