---
id: 587d7b7c367417b2b2512b1b
title: Use the delete Keyword to Remove Object Properties
challengeType: 1
forumTopicId: 301168
---

## Description
<section id='description'>
Now you know what objects are and their basic features and advantages. In short, they are key-value stores which provide a flexible, intuitive way to structure data, <strong><em>and</em></strong>, they provide very fast lookup time. Throughout the rest of these challenges, we will describe several common operations you can perform on objects so you can become comfortable applying these useful data structures in your programs.
In earlier challenges, we have both added to and modified an object's key-value pairs. Here we will see how we can <em>remove</em> a key-value pair from an object.
Let's revisit our <code>foods</code> object example one last time. If we wanted to remove the <code>apples</code> key, we can remove it by using the <code>delete</code> keyword like this:

```js
delete foods.apples;
```

</section>

## Instructions
<section id='instructions'>
Use the delete keyword to remove the <code>oranges</code>, <code>plums</code>, and <code>strawberries</code> keys from the <code>foods</code> object.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'The <code>foods</code> object should only have three keys: <code>apples</code>, <code>grapes</code>, and <code>bananas</code>.'
    testString: 'assert(!foods.hasOwnProperty(''oranges'') && !foods.hasOwnProperty(''plums'') && !foods.hasOwnProperty(''strawberries'') && Object.keys(foods).length === 3);'
  - text: The <code>oranges</code>, <code>plums</code>, and <code>strawberries</code> keys should be removed using <code>delete</code>.
    testString: assert(code.search(/oranges:/) !== -1 && code.search(/plums:/) !== -1 && code.search(/strawberries:/) !== -1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line

// Only change code above this line

console.log(foods);
```

</div>



</section>

## Solution
<section id='solution'>

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

console.log(foods);
```

</section>
