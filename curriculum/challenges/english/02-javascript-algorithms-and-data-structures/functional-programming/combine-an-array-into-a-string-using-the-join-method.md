---
id: 587d7daa367417b2b2512b6c
title: Combine an Array into a String Using the join Method
challengeType: 1
forumTopicId: 18221
dashedName: combine-an-array-into-a-string-using-the-join-method
---

# --description--

The `join` method is used to join the elements of an array together to create a string. It takes an argument for the delimiter that is used to separate the array elements in the string.

Here's an example:

```js
var arr = ["Hello", "World"];
var str = arr.join(" ");
```

`str` would have a value of the string `Hello World`.
# --instructions--

Use the `join` method (among others) inside the `sentensify` function to make a sentence from the words in the string `str`. The function should return a string. For example, `I-like-Star-Wars` would be converted to `I like Star Wars`. For this challenge, do not use the `replace` method.

# --hints--

Your code should use the `join` method.

```js
assert(code.match(/\.join/g));
```

Your code should not use the `replace` method.

```js
assert(!code.match(/\.?[\s\S]*?replace/g));
```

`sentensify("May-the-force-be-with-you")` should return a string.

```js
assert(typeof sentensify('May-the-force-be-with-you') === 'string');
```

`sentensify("May-the-force-be-with-you")` should return the string `May the force be with you`.

```js
assert(sentensify('May-the-force-be-with-you') === 'May the force be with you');
```

`sentensify("The.force.is.strong.with.this.one")` should return the string `The force is strong with this one`.

```js
assert(
  sentensify('The.force.is.strong.with.this.one') ===
    'The force is strong with this one'
);
```

`sentensify("There,has,been,an,awakening")` should return the string `There has been an awakening`.

```js
assert(
  sentensify('There,has,been,an,awakening') === 'There has been an awakening'
);
```

# --seed--

## --seed-contents--

```js
function sentensify(str) {
  // Only change code below this line


  // Only change code above this line
}
sentensify("May-the-force-be-with-you");
```

# --solutions--

```js
function sentensify(str) {
  // Only change code below this line
  return str.split(/\W/).join(' ');
  // Only change code above this line
}
```
