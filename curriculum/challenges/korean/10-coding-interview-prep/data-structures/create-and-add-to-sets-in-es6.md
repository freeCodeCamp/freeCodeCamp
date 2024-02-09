---
id: 587d8254367417b2b2512c70
title: Create and Add to Sets in ES6
challengeType: 1
forumTopicId: 301636
dashedName: create-and-add-to-sets-in-es6
---

# --description--

Now that you have worked through ES5, you are going to perform something similar in ES6. This will be considerably easier. ES6 contains a built-in data structure `Set` so many of the operations you wrote by hand are now included for you. Let's take a look:

To create a new empty set:

```js
var set = new Set();
```

You can create a set with a value:

```js
var set = new Set(1);
```

You can create a set with an array:

```js
var set = new Set([1, 2, 3]);
```

Once you have created a set, you can add the values you wish using the `add` method:

```js
var set = new Set([1, 2, 3]);
set.add([4, 5, 6]);
```

As a reminder, a set is a data structure that cannot contain duplicate values:

```js
var set = new Set([1, 2, 3, 1, 2, 3]);
// set contains [1, 2, 3] only
```

# --instructions--

For this exercise, return a set with the following values: `1, 2, 3, 'Taco', 'Cat', 'Awesome'`

# --hints--

Your `Set` should only contain the values `1, 2, 3, Taco, Cat, Awesome`.

```js
assert(
  (function () {
    var test = checkSet();
    return (
      test.size == 6 &&
      test.has(1) &&
      test.has(2) &&
      test.has(3) &&
      test.has('Taco') &&
      test.has('Cat') &&
      test.has('Awesome')
    );
  })()
);
```

# --seed--

## --seed-contents--

```js
function checkSet() {
  var set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]);
  // Only change code below this line

  // Only change code above this line
  console.log(Array.from(set));
  return set;
}

checkSet();
```

# --solutions--

```js
function checkSet(){var set = new Set([1,2,3,'Taco','Cat','Awesome']);
return set;}
```
