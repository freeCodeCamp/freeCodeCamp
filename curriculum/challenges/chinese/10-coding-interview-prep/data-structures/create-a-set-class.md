---
id: 8d1323c8c441eddfaeb5bdef
title: Create a Set Class
challengeType: 1
forumTopicId: 301632
dashedName: create-a-set-class
---

# --description--

In this exercise we are going to create a class named `Set` to emulate an abstract data structure called "set". A set is like an array, but it cannot contain duplicate values. The typical use for a set is to simply check for the presence of an item. We can see how the ES6 `Set` object works in the example below:

```js
const set1 = new Set([1, 2, 3, 5, 5, 2, 0]);
console.log(set1);
// output: {1, 2, 3, 5, 0}
console.log(set1.has(1));
// output: true
console.log(set1.has(6));
// output: false
```

First, we will create an add method that adds a value to our set collection as long as the value does not already exist in the set. Then we will create a remove method that removes a value from the set collection if it already exists. And finally, we will create a size method that returns the number of elements inside the set collection.

# --instructions--

Create an `add` method that adds a unique value to the set collection and returns `true` if the value was successfully added and `false` otherwise.

Create a `remove` method that accepts a value and checks if it exists in the set. If it does, then this method should remove it from the set collection, and return `true`. Otherwise, it should return `false`. Create a `size` method that returns the size of the set collection.

# --hints--

Your `Set` class should have an `add` method.

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.add === 'function';
  })()
);
```

Your `add` method should not add duplicate values.

```js
assert(
  (function () {
    var test = new Set();
    test.add('a');
    test.add('b');
    test.add('a');
    var vals = test.values();
    return vals[0] === 'a' && vals[1] === 'b' && vals.length === 2;
  })()
);
```

Your `add` method should return `true` when a value has been successfully added.

```js
assert(
  (function () {
    var test = new Set();
    var result = test.add('a');
    return result != undefined && result === true;
  })()
);
```

Your `add` method should return `false` when a duplicate value is added.

```js
assert(
  (function () {
    var test = new Set();
    test.add('a');
    var result = test.add('a');
    return result != undefined && result === false;
  })()
);
```

Your `Set` class should have a `remove` method.

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.remove === 'function';
  })()
);
```

Your `remove` method should only remove items that are present in the set.

```js
assert.deepEqual(
  (function () {
    var test = new Set();
    test.add('a');
    test.add('b');
    test.remove('c');
    return test.values();
  })(),
  ['a', 'b']
);
```

Your `remove` method should remove the given item from the set.

```js
assert(
  (function () {
    var test = new Set();
    test.add('a');
    test.add('b');
    test.remove('a');
    var vals = test.values();
    return vals[0] === 'b' && vals.length === 1;
  })()
);
```

Your `Set` class should have a `size` method.

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.size === 'function';
  })()
);
```

The `size` method should return the number of elements in the collection.

```js
assert(
  (function () {
    var test = new Set();
    test.add('a');
    test.add('b');
    test.remove('a');
    return test.size() === 1;
  })()
);
```

# --seed--

## --seed-contents--

```js
class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set
  values() {
    return Object.values(this.dictionary);
  }

  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
class Set {
  constructor() {
    this.dictionary = {};
    this.length = 0;
  }

  has(element) {
    return this.dictionary[element] !== undefined;
  }

  values() {
    return Object.values(this.dictionary);
  }

  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = element;
      this.length++;
      return true;
    }

    return false;
  }

  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }

  size() {
    return this.length;
  }
}
```
