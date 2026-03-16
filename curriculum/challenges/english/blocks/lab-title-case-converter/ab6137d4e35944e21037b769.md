---
id: ab6137d4e35944e21037b769
title: Build a Title Case Converter
challengeType: 26
dashedName: build-a-title-case-converter
---

# --description--

In this lab you will create a function that converts a string to title case. Title case means that the first letter of each word is capitalized and the rest of the word is in lower case.

`"Web Development Is Awesome"` is an example of a title cased string.

**Objective**: Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should have a `titleCase` function that takes a string as an argument.
1. The `titleCase` function should return a string with the first letter of each word capitalized and the rest of the word in lower case.
1. `titleCase("I like to code")` should return `"I Like To Code"`.
1. `titleCase("javaScript is fun")` should return `"Javascript Is Fun"`.

# --hints--

You should create a function named `titleCase`.

```js
assert.isFunction(titleCase);
```

`titleCase` should take a single argument.

```js
assert.lengthOf(titleCase, 1);
```


`titleCase("I'm a little tea pot")` should return a string.

```js
assert.isString(titleCase("I'm a little tea pot"));
```

`titleCase("I'm a little tea pot")` should return the string `I'm A Little Tea Pot`.

```js
assert.strictEqual(titleCase("I'm a little tea pot"), "I'm A Little Tea Pot");
```

`titleCase("sHoRt AnD sToUt")` should return the string `Short And Stout`.

```js
assert.strictEqual(titleCase('sHoRt AnD sToUt'), 'Short And Stout');
```

`titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")` should return the string `Here Is My Handle Here Is My Spout`.

```js
assert.strictEqual(
  titleCase('HERE IS MY HANDLE HERE IS MY SPOUT'),
  'Here Is My Handle Here Is My Spout'
);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function titleCase(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase())
    .join(' ');
}
```
