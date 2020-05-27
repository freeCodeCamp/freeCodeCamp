---
id: 587d7b7e367417b2b2512b20
title: Use an Array to Store a Collection of Data
challengeType: 1
isHidden: false
forumTopicId: 301167
---

## Description
<section id='description'>
The below is an example of the simplest implementation of an array data structure. This is known as a <dfn>one-dimensional array</dfn>, meaning it only has one level, or that it does not have any other arrays nested within it. Notice it contains <dfn>booleans</dfn>, <dfn>strings</dfn>, and <dfn>numbers</dfn>, among other valid JavaScript data types:

```js
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);
// logs 7
```

All arrays have a length property, which as shown above, can be very easily accessed with the syntax <code>Array.length</code>.
A more complex implementation of an array can be seen below. This is known as a <dfn>multi-dimensional array</dfn>, or an array that contains other arrays. Notice that this array also contains JavaScript <dfn>objects</dfn>, which we will examine very closely in our next section, but for now, all you need to know is that arrays are also capable of storing complex objects.

```js
let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];
```

</section>

## Instructions
<section id='instructions'>
We have defined a variable called <code>yourArray</code>. Complete the statement by assigning an array of at least 5 elements in length to the <code>yourArray</code> variable. Your array should contain at least one <dfn>string</dfn>, one <dfn>number</dfn>, and one <dfn>boolean</dfn>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>yourArray</code> should be an array.
    testString: assert.strictEqual(Array.isArray(yourArray), true);
  - text: <code>yourArray</code> should be at least 5 elements long.
    testString: assert.isAtLeast(yourArray.length, 5);
  - text: <code>yourArray</code> should contain at least one <code>boolean</code>.
    testString: assert(yourArray.filter( el => typeof el === 'boolean').length >= 1);
  - text: <code>yourArray</code> should contain at least one <code>number</code>.
    testString: assert(yourArray.filter( el => typeof el === 'number').length >= 1);
  - text: <code>yourArray</code> should contain at least one <code>string</code>.
    testString: assert(yourArray.filter( el => typeof el === 'string').length >= 1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let yourArray; // Change this line
```

</div>



</section>

## Solution
<section id='solution'>

```js
let yourArray = ['a string', 100, true, ['one', 2], 'another string'];
```

</section>
