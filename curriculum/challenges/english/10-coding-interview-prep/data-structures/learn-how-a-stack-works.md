---
id: 587d8250367417b2b2512c5e
title: Learn how a Stack Works
challengeType: 1
forumTopicId: 301705
---

## Description
<section id='description'>
You are probably familiar with stack of books on your table. You have likely used the undo feature of a text editor. You are also probably used to hitting the back button on your phone to go back to the previous view in your app.
You know what they all have in common? They all store the data in a way so that you can traverse backwards.
The topmost book in the stack was the one that was put there last. If you remove that book from your stack's top, you would expose the book that was put there before the last book and so on.
If you think about it, in all the above examples, you are getting <dfn>Last-In-First-Out</dfn> type of service. We will try to mimic this with our code.
This data storage scheme is called a <dfn>Stack</dfn>. In particular, we would have to implement the <code>push()</code> method that pushes JavaScript objects at the top of the stack; and <code>pop()</code> method, that removes the JavaScript object that's at the top of the stack at the current moment.
</section>

## Instructions
<section id='instructions'>
Here we have a stack of homework assignments represented as an array: <code>"BIO12"</code> is at the base, and <code>"PSY44"</code> is at the top of the stack.
Modify the given array and treat it like a <code>stack</code> using the JavaScript methods mentioned above. Remove the top element <code>"PSY44"</code> from the stack. Then add <code>"CS50"</code> to be the new top element of the stack.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>homeworkStack</code> should only contain 4 elements.
    testString: assert(homeworkStack.length === 4);
  - text: The last element in <code>homeworkStack</code> should be <code>"CS50"</code>.
    testString: assert(homeworkStack[3] === 'CS50');
  - text: <code>homeworkStack</code> should not contain <code>"PSY44"</code>.
    testString: assert(homeworkStack.indexOf('PSY44') === -1);
  - text: The initial declaration of the <code>homeworkStack</code> should not be changed.
    testString: assert(code.match(/=/g).length === 1 && /homeworkStack\s*=\s*\["BIO12"\s*,\s*"HIS80"\s*,\s*"MAT122"\s*,\s*"PSY44"\]/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
var homeworkStack = ["BIO12","HIS80","MAT122","PSY44"];
// Only change code below this line

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
