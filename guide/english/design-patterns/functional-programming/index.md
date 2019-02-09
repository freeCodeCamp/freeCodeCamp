---
title: Functional Programming
---
## Functional Programming

## Outline
* Why Functional programming?
* Functional programming basic principles
* Functional programming languages

### Why Functional Programming?

Functional programming (sometimes abbreviated as FP) has had a resurgence among Javascript developers recently because of the focus on functional programming principles in popular libraries such as [Redux](https://redux.js.org/).

Although functional programming can be intimidating for some beginning developers, knowing some of the basics can be very useful regardless of what libraries you use. Specifically thinking about times when to use declarative programming and pure functions—for example, to keep code clean, easy to read, easy to test, and easy to maintain—helps as you move towards larger projects where you might be working with multiple developers and want a good [code smell](https://guide.freecodecamp.org/agile/code-smells/). It's also something often asked about briefly in coding interviews, so even knowing a few basic principles can be very helpful. This article represents only the most bare-bones overview; more research is recommended.

### Basic Principles:
The three most basic principles of functional programming are:
1. Use pure functions.
2. Avoid shared or mutable state. Prefer immutable state, where state is necessary.
3. Use declarative programming, which focuses more on **what** needs to be done (ex. using good function names as declarative verbs) rather than imperative programming, which spells out exactly **how** to do it.

#### Pure Functions
Pure Functions are functions which are consistent--if you give them the same inputs, they always return the same outputs.
A pure function, with no side effects:
  ```javascript
  var count = 0;
  function countOne(i) {
    return i+1;
  }
  var next = countOne(count);
  var third = countOne(countOne(count));
  console.log(count); // 0
  console.log(next); // 1
  console.log(third); // 2
  ```
Not a pure function, because of side effects:
  ```javascript
  var count = 0;
  function countOne() {
    return count = count + 1;
  }
  var next = countOne();
  var third = countOne();
  console.log(count); // 2
  console.log(next); // 1
  console.log(next); // 2
  ```
#### Avoid shared or mutable (changeable) state
Using parameters creates function-specific scope.
  ```javascript
  function count(number) {
    return 1;
  }
  function double(number) {
    return number * 2;
  }
  console.log(count(1)); // 2
  console.log(double(1)); // 2
  ```
Using shared, global variables means that changes might be unpredictable, especially when variables are shared between multiple files.
  ```javascript
  var number = 1;
  function count() {
    return number = number + 1;
  }
  function double() {
    return number = number * 2;
  }
  console.log(count()); // 2
  console.log(double()); // 4
  ```

#### Use declarative programming
A simple example, which is
classic imperative, spells out every step:
  ```javascript
  var values = [3, 7, 29, 'forty-seven', 'a book'];
  var strings = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] === "string") {
      strings.push(values[i]);
    }
  }
  console.log(strings); // ['forty-seven', 'a book']
  ```
An example which is declarative, relies on functions:
  ```javascript
  var values = [3, 7, 29, 'forty-seven', 'a book'];
  var strings = values.filter(function(value) {
    return typeof value === "string";
  });
  console.log(strings); // ['forty-seven', 'a book']
  ```
Even simpler with ES6:
  ```javascript
  var values = [3, 7, 29, 'forty-seven', 'a book'];
  var strings = values.filter(value => typeof value === "string");
  console.log(strings); // ['forty-seven', 'a book']
  ```

### Functional programming languages

There are also some programming languages that by design emphasize a functional programming pattern, such as Scala, Haskell, or Clojure, which you might hear a lot about if you start to google Functional Programming. If you really like it and want to do a much deeper dive into functional programming, you might think about taking a course in one of those.

### More information:
* [A fantastic introduction to the terms with a few practice examples](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)
* [Functional Programming Wikipedia Article](https://en.wikipedia.org/wiki/Functional_programming)
