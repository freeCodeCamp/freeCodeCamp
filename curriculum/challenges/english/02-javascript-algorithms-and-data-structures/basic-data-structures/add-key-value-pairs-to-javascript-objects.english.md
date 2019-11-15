---
id: 587d7b7c367417b2b2512b18
title: Add Key-Value Pairs to JavaScript Objects
challengeType: 1
forumTopicId: 301153
---

## Description
<section id='description'>
At their most basic, objects are just collections of <dfn>key-value pairs</dfn>, or in other words, pieces of data mapped to unique identifiers that we call <dfn>properties</dfn> or <dfn>keys</dfn>. Let's take a look at a very simple example:

```js
let FCC_User = {
  username: 'awesome_coder',
  followers: 572,
  points: 1741,
  completedProjects: 15
};
```

The above code defines an object called <code>FCC_User</code> that has four <dfn>properties</dfn>, each of which map to a specific value. If we wanted to know the number of <code>followers</code> <code>FCC_User</code> has, we can access that property by writing:

```js
let userData = FCC_User.followers;
// userData equals 572
```

This is called <dfn>dot notation</dfn>. Alternatively, we can also access the property with brackets, like so:

```js
let userData = FCC_User['followers'];
// userData equals 572
```

Notice that with <dfn>bracket notation</dfn>, we enclosed <code>followers</code> in quotes. This is because the brackets actually allow us to pass a variable in to be evaluated as a property name (hint: keep this in mind for later!). Had we passed <code>followers</code> in without the quotes, the JavaScript engine would have attempted to evaluate it as a variable, and a <code>ReferenceError: followers is not defined</code> would have been thrown.
</section>

## Instructions
<section id='instructions'>
Using the same syntax, we can also <em><strong>add new</strong></em> key-value pairs to objects. We've created a <code>foods</code> object with three entries. Add three more entries: <code>bananas</code> with a value of <code>13</code>, <code>grapes</code> with a value of <code>35</code>, and <code>strawberries</code> with a value of <code>27</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>foods</code> should be an object.
    testString: assert(typeof foods === 'object');
  - text: The <code>foods</code> object should have a key <code>"bananas"</code> with a value of <code>13</code>.
    testString: assert(foods.bananas === 13);
  - text: The <code>foods</code> object should have a key <code>"grapes"</code> with a value of <code>35</code>.
    testString: assert(foods.grapes === 35);
  - text: The <code>foods</code> object should have a key <code>"strawberries"</code> with a value of <code>27</code>.
    testString: assert(foods.strawberries === 27);
  - text: The key-value pairs should be set using dot or bracket notation.
    testString: assert(code.search(/bananas:/) === -1 && code.search(/grapes:/) === -1 && code.search(/strawberries:/) === -1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// change code below this line

// change code above this line

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
  plums: 28
};

// change code below this line
foods['bananas'] = 13;
foods['grapes']  = 35;
foods['strawberries'] = 27;
// change code above this line
```

</section>
