---
id: 5a661e0f1068aca922b3ef17
title: Access an Array's Contents Using Bracket Notation
challengeType: 1
forumTopicId: 301149
---

## Description

<section id='description'>

The fundamental feature of any data structure is, of course, the ability to not only store data, but to be able to retrieve that data on command. So, now that we've learned how to create an array, let's begin to think about how we can access that array's information.

When we define a simple array as seen below, there are 3 items in it:

```js
let ourArray = ["a", "b", "c"];
```

In an array, each array item has an <dfn>index</dfn>. This index doubles as the position of that item in the array, and how you reference it. However, it is important to note, that JavaScript arrays are <dfn>zero-indexed</dfn>, meaning that the first element of an array is actually at the ***zeroth*** position, not the first. In order to retrieve an element from an array we can enclose an index in brackets and append it to the end of an array, or more commonly, to a variable which references an array object. This is known as <dfn>bracket notation</dfn>. For example, if we want to retrieve the `"a"` from `ourArray` and assign it to a variable, we can do so with the following code:

```js
let ourVariable = ourArray[0];
// ourVariable equals "a"
```

In addition to accessing the value associated with an index, you can also *set* an index to a value using the same notation:

```js
ourArray[1] = "not b anymore";
// ourArray now equals ["a", "not b anymore", "c"];
```

Using bracket notation, we have now reset the item at index 1 from `"b"`, to `"not b anymore"`.

</section>

## Instructions

<section id='instructions'>

In order to complete this challenge, set the 2nd position (index `1`) of `myArray` to anything you want, besides `"b"`.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>myArray[0]</code> should be equal to <code>"a"</code>
    testString: assert.strictEqual(myArray[0], "a");
  - text: <code>myArray[1]</code> should not be equal to <code>"b"</code>
    testString: assert.notStrictEqual(myArray[1], "b");
  - text: <code>myArray[2]</code> should be equal to <code>"c"</code>
    testString: assert.strictEqual(myArray[2], "c");
  - text: <code>myArray[3]</code> should be equal to <code>"d"</code>
    testString: assert.strictEqual(myArray[3], "d");

```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
let myArray = ["a", "b", "c", "d"];
// Only change code below this line

// Only change code above this line
console.log(myArray);
```

</div>

</section>

## Solution

<section id='solution'>

```js
let myArray = ["a", "b", "c", "d"];
myArray[1] = "e";
```

</section>
