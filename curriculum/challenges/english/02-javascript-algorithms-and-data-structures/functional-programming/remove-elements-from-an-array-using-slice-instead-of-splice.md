---
id: 9d7123c8c441eeafaeb5bdef
title: Remove Elements from an Array Using slice Instead of splice
challengeType: 1
forumTopicId: 301236
dashedName: remove-elements-from-an-array-using-slice-instead-of-splice
---

# --description--

A common pattern while working with arrays is when you want to remove items and keep the rest of the array. JavaScript offers the `splice` method for this, which takes arguments for the index of where to start removing items, then the number of items to remove. If the second argument is not provided, the default is to remove items through the end. However, the `splice` method mutates the original array it is called on. Here's an example:

```js
const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1);
```

Here `splice` returns the string `London` and deletes it from the cities array. `cities` will have the value `["Chicago", "Delhi", "Islamabad", "Berlin"]`.

As we saw in the last challenge, the `slice` method does not mutate the original array, but returns a new one which can be saved into a variable. Recall that the `slice` method takes two arguments for the indices to begin and end the slice (the end is non-inclusive), and returns those items in a new array. Using the `slice` method instead of `splice` helps to avoid any array-mutating side effects.

# --instructions--

Rewrite the function `nonMutatingSplice` by using `slice` instead of `splice`. It should limit the provided `cities` array to a length of 3, and return a new array with only the first three items.

Do not mutate the original array provided to the function.

# --hints--

Your code should use the `slice` method.

```js
assert(__helpers.removeJSComments(code).match(/\.slice/g));
```

Your code should not use the `splice` method.

```js
assert(!__helpers.removeJSComments(code).match(/\.?[\s\S]*?splice/g));
```

You should not mutate the original array passed to the function.

```js
assert.deepEqual(_inputCities, ["Chicago", "Delhi", "Islamabad", "London", "Berlin"]);
```

`nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"])` should return `["Chicago", "Delhi", "Islamabad"]`.

```js
assert.deepEqual(nonMutatingSplice(_inputCities), ["Chicago", "Delhi", "Islamabad"]);
```

# --seed--

## --seed-contents--

```js
function nonMutatingSplice(cities) {

  return cities.splice(3);
}
```

## --after-user-code--

```js
const _inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
```

# --solutions--

```js
function nonMutatingSplice(cities) {
  return cities.slice(0,3);
}
```
