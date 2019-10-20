---
id: 5cfa550e84205a357704ccb6
title: Use Destructuring Assignment to Extract Values from Objects
challengeType: 1
forumTopicId: 301216
---

## Description
<section id='description'>
<dfn>Destructuring assignment</dfn> is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

Consider the following ES5 code:

```js
const user = { name: 'John Doe', age: 34 };

const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34
```

Here's an equivalent assignment statement using the ES6 destructuring syntax:

```js
const { name, age } = user;
// name = 'John Doe', age = 34
```

Here, the <code>name</code> and <code>age</code> variables will be created and assigned the values of their respective values from the <code>user</code> object. You can see how much cleaner this is.

You can extract as many or few values from the object as you want.
</section>

## Instructions
<section id='instructions'>
Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables <code>today</code> and <code>tomorrow</code> the values of <code>today</code> and <code>tomorrow</code> from the <code>HIGH_TEMPERATURES</code> object.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should remove the ES5 assignment syntax.
    testString: assert(!code.match(/today = HIGH_TEMPERATURES\.today/g) && !code.match(/tomorrow = HIGH_TEMPERATURES\.tomorrow/g))
  - text: You should use destructuring to create the <code>today</code> variable.
    testString: assert(code.match(/(var|let|const)\s*{\s*(today[^}]*|[^,]*,\s*today)\s*}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g));
  - text: You should use destructuring to create the <code>tomorrow</code> variable.
    testString: assert(code.match(/(var|let|const)\s*{\s*(tomorrow[^}]*|[^,]*,\s*tomorrow)\s*}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g));
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// change code below this line

const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;

// change code above this line

console.log(yesterday) // should be not defined
console.log(today); // should be 77
console.log(tomorrow); // should be 80
```

</div>
</section>

## Solution
<section id='solution'>

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// change code below this line

const { today, tomorrow } = HIGH_TEMPERATURES;

// change code above this line

console.log(yesterday) // should be not defined
console.log(today); // should be 77
console.log(tomorrow); // should be 80
```

</section>
