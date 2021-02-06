---
id: 587d8250367417b2b2512c5f
title: Create a Stack Class
challengeType: 1
forumTopicId: 301633
dashedName: create-a-stack-class
---

# --description--

In the last section, we talked about what a stack is and how we can use an array to represent a stack. In this section, we will be creating our own stack class. Although you can use arrays to create stacks, sometimes it is best to limit the amount of control we have with our stacks. Apart from the `push` and `pop` method, stacks have other useful methods. Let's add a `peek`, `isEmpty`, and `clear` method to our stack class.

# --instructions--

Write a `push` method that pushes an element to the top of the stack, a `pop` method that removes and returns the element on the top of the stack, a `peek` method that looks at the top element in the stack, an `isEmpty` method that checks if the stack is empty, and a `clear` method that removes all elements from the stack. Normally stacks don't have this, but we've added a `print` helper method that console logs the collection.

# --hints--

Your `Stack` class should have a `push` method.

```js
assert(
  (function () {
    var test = new Stack();
    return typeof test.push === 'function';
  })()
);
```

Your `Stack` class should have a `pop` method.

```js
assert(
  (function () {
    var test = new Stack();
    return typeof test.pop === 'function';
  })()
);
```

Your `Stack` class should have a `peek` method.

```js
assert(
  (function () {
    var test = new Stack();
    return typeof test.peek === 'function';
  })()
);
```

Your `Stack` class should have a `isEmpty` method.

```js
assert(
  (function () {
    var test = new Stack();
    return typeof test.isEmpty === 'function';
  })()
);
```

Your `Stack` class should have a `clear` method.

```js
assert(
  (function () {
    var test = new Stack();
    return typeof test.clear === 'function';
  })()
);
```

The `peek` method should return the top element of the stack

```js
assert(
  (function () {
    var test = new Stack();
    test.push('CS50');
    return test.peek() === 'CS50';
  })()
);
```

The `pop` method should remove and return the top element of the stack

```js
assert(
  (function () {
    var test = new Stack();
    test.push('CS50');
    return test.pop() === 'CS50';
  })()
);
```

The `isEmpty` method should return true if a stack does not contain any elements

```js
assert(
  (function () {
    var test = new Stack();
    return test.isEmpty();
  })()
);
```

The `clear` method should remove all element from the stack

```js
assert(
  (function () {
    var test = new Stack();
    test.push('CS50');
    test.clear();
    return test.isEmpty();
  })()
);
```

# --seed--

## --seed-contents--

```js
function Stack() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
class Stack {
  constructor() {
    this.collection = [];
  }
  print() {
    console.log(this.collection);
  }
  push(val) {
    this.collection.push(val);
  }
  pop() {
    return this.collection.pop();
  }
  peek() {
    return this.collection[this.collection.length - 1];
  }
  isEmpty() {
    return this.collection.length === 0;
  }
  clear() {
    return (this.collection.length = 0);
  }
}
```
