---
id: 587d8250367417b2b2512c5f
title: Create a Stack Class
challengeType: 1
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert((function(){var test = new Stack(); return (typeof test.push === "function")}()), "Your <code>Stack</code> class should have a <code>push</code> method.");'
  - text: ''
    testString: 'assert((function(){var test = new Stack(); return (typeof test.pop === "function")}()), "Your <code>Stack</code> class should have a <code>pop</code> method.");'
  - text: ''
    testString: 'assert((function(){var test = new Stack(); return (typeof test.peek === "function")}()), "Your <code>Stack</code> class should have a <code>peek</code> method.");'
  - text: ''
    testString: 'assert((function(){var test = new Stack(); return (typeof test.isEmpty === "function")}()), "Your <code>Stack</code> class should have a <code>isEmpty</code> method.");'
  - text: ''
    testString: 'assert((function(){var test = new Stack(); return (typeof test.clear === "function")}()), "Your <code>Stack</code> class should have a <code>clear</code> method.");'
  - text: ''
    testString: 'assert((function(){var test = new Stack();  test.push("CS50"); return (test.peek() === "CS50")}()), "The <code>peek</code> method should return the top element of the stack");'
  - text: ''
    testString: 'assert((function(){var test = new Stack(); test.push("CS50"); return (test.pop() === "CS50");}()), "The <code>pop</code> method should remove and return the top element of the stack");'
  - text: ''
    testString: 'assert((function(){var test = new Stack(); return test.isEmpty()}()), "The <code>isEmpty</code> method should return true if a stack does not contain any elements");'
  - text: ''
    testString: 'assert((function(){var test = new Stack();  test.push("CS50"); test.clear(); return (test.isEmpty())}()), "The <code>clear</code> method should remove all element from the stack");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

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

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
