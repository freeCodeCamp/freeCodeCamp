---
id: 587d7b86367417b2b2512b3d
title: Prevent Infinite Loops with a Valid Terminal Condition
challengeType: 1
forumTopicId: 301192
---

## Description
<section id='description'>
The final topic is the dreaded infinite loop. Loops are great tools when you need your program to run a code block a certain number of times or until a condition is met, but they need a terminal condition that ends the looping. Infinite loops are likely to freeze or crash the browser, and cause general program execution mayhem, which no one wants.
There was an example of an infinite loop in the introduction to this section - it had no terminal condition to break out of the <code>while</code> loop inside <code>loopy()</code>. Do NOT call this function!

```js
function loopy() {
  while(true) {
    console.log("Hello, world!");
  }
}
```

It's the programmer's job to ensure that the terminal condition, which tells the program when to break out of the loop code, is eventually reached. One error is incrementing or decrementing a counter variable in the wrong direction from the terminal condition. Another one is accidentally resetting a counter or index variable within the loop code, instead of incrementing or decrementing it.
</section>

## Instructions
<section id='instructions'>
The <code>myFunc()</code> function contains an infinite loop because the terminal condition <code>i != 4</code> will never evaluate to <code>false</code> (and break the looping) - <code>i</code> will increment by 2 each pass, and jump right over 4 since <code>i</code> is odd to start. Fix the comparison operator in the terminal condition so the loop only runs for <code>i</code> less than or equal to 4.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should change the comparison operator in the terminal condition (the middle part) of the <code>for</code> loop.
    testString: assert(code.match(/i\s*?<=\s*?4;/g).length == 1);
  - text: Your code should fix the comparison operator in the terminal condition of the loop.
    testString: assert(!code.match(/i\s*?!=\s*?4;/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function myFunc() {
  for (let i = 1; i != 4; i += 2) {
    console.log("Still going!");
  }
}
```

</div>



</section>

## Solution
<section id='solution'>

```js
function myFunc() {
 for (let i = 1; i <= 4; i += 2) {
   console.log("Still going!");
 }
}
```

</section>
