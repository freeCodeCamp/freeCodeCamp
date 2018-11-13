---
id: 587d8250367417b2b2512c5f
title: Create a Stack Class
challengeType: 1
---

## Description
<section id='description'>
In the last section, we talked about what a stack is and how we can use an array to represent a stack. In this section, we will be creating our own stack class.
Although you can use arrays to create stacks, sometimes it is best to limit the amount of control we have with our stacks.
Apart from the <code>push</code> and <code>pop</code> method, stacks have other useful methods. Let's add a <code>peek</code>, <code>isEmpty</code>, and <code>clear</code> method to our stack class.
Instructions
Write a <code>push</code> method that pushes an element to the top of the stack, a <code>pop</code> method that removes the element on the top of the stack, a <code>peek</code> method that looks at the first element in the stack, an <code>isEmpty</code> method that checks if the stack is empty, and a <code>clear</code> method that removes all elements from the stack.
Normally stacks don't have this, but we've added a <code>print</code> helper method that console logs the collection.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>Stack</code> class should have a <code>push</code> method.
    testString: assert((function(){var test = new Stack(); return (typeof test.push === 'function')}()), 'Your <code>Stack</code> class should have a <code>push</code> method.');
  - text: Your <code>Stack</code> class should have a <code>pop</code> method.
    testString: assert((function(){var test = new Stack(); return (typeof test.pop === 'function')}()), 'Your <code>Stack</code> class should have a <code>pop</code> method.');
  - text: Your <code>Stack</code> class should have a <code>peek</code> method.
    testString: assert((function(){var test = new Stack(); return (typeof test.peek === 'function')}()), 'Your <code>Stack</code> class should have a <code>peek</code> method.');
  - text: Your <code>Stack</code> class should have a <code>isEmpty</code> method.
    testString: assert((function(){var test = new Stack(); return (typeof test.isEmpty === 'function')}()), 'Your <code>Stack</code> class should have a <code>isEmpty</code> method.');
  - text: Your <code>Stack</code> class should have a <code>clear</code> method.
    testString: assert((function(){var test = new Stack(); return (typeof test.clear === 'function')}()), 'Your <code>Stack</code> class should have a <code>clear</code> method.');
  - text: The <code>peek</code> method should return the top element of the stack
    testString: assert((function(){var test = new Stack();  test.push('CS50'); return (test.peek() === 'CS50')}()), 'The <code>peek</code> method should return the top element of the stack');
  - text: The <code>pop</code> method should remove and return the top element of the stack
    testString: assert((function(){var test = new Stack(); test.push('CS50'); return (test.pop() === 'CS50');}()), 'The <code>pop</code> method should remove and return the top element of the stack');
  - text: The <code>isEmpty</code> method should return true if a stack does not contain any elements
    testString: assert((function(){var test = new Stack(); return test.isEmpty()}()), 'The <code>isEmpty</code> method should return true if a stack does not contain any elements');
  - text: The <code>clear</code> method should remove all element from the stack
    testString: assert((function(){var test = new Stack();  test.push('CS50'); test.clear(); return (test.isEmpty())}()), 'The <code>clear</code> method should remove all element from the stack');

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
class Stack {
    constructor() {
        this.collection = [];
    }
    print(){
        console.log(this.collection);
    }
    push(val){
        this.collection.push(val);
    }
    pop(){
        return this.collection.pop();
    }
    peek(){
        return this.collection[this.collection.length-1];
    }
    isEmpty(){
        return this.collection.length === 0;
    }
    clear(){
        return this.collection.length = 0;
    }
}
```
</section>
