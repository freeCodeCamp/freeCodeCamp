---
id: 587d7b84367417b2b2512b36
title: 'Catch Unclosed Parentheses, Brackets, Braces and Quotes'
challengeType: 1
isHidden: false
forumTopicId: 301190
---

## Description
<section id='description'>
Another syntax error to be aware of is that all opening parentheses, brackets, curly braces, and quotes have a closing pair. Forgetting a piece tends to happen when you're editing existing code and inserting items with one of the pair types. Also, take care when nesting code blocks into others, such as adding a callback function as an argument to a method.
One way to avoid this mistake is as soon as the opening character is typed, immediately include the closing match, then move the cursor back between them and continue coding. Fortunately, most modern code editors generate the second half of the pair automatically.
</section>

## Instructions
<section id='instructions'>
Fix the two pair errors in the code.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should fix the missing piece of the array.
    testString: assert(code.match(/myArray\s*?=\s*?\[\s*?1\s*?,\s*?2\s*?,\s*?3\s*?\];/g));
  - text: 'Your code should fix the missing piece of the <code>.reduce()</code> method. The console output should show that "Sum of array values is: 6".'
    testString: 'assert(arraySum === 6);'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let myArray = [1, 2, 3;
let arraySum = myArray.reduce((previous, current =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);
```

</div>



</section>

## Solution
<section id='solution'>

```js
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);
```

</section>
