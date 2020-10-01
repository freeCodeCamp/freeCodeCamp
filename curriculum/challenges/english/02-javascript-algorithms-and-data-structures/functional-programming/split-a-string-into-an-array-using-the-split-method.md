---
id: 587d7daa367417b2b2512b6b
title: Split a String into an Array Using the split Method
challengeType: 1
forumTopicId: 18305
---

## Description
<section id='description'>
The <code>split</code> method splits a string into an array of strings. It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression. For example, if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, you get an array of each character in the string.
Here are two examples that split one string by spaces, then another by digits using a regular expression:

```js
var str = "Hello World";
var bySpace = str.split(" ");
// Sets bySpace to ["Hello", "World"]

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);
// Sets byDigits to ["How", "are", "you", "today"]
```

Since strings are immutable, the <code>split</code> method makes it easier to work with them.
</section>

## Instructions
<section id='instructions'>
Use the <code>split</code> method inside the <code>splitify</code> function to split <code>str</code> into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the <code>split</code> method.
    testString: assert(code.match(/\.split/g));
  - text: <code>splitify("Hello World,I-am code")</code> should return <code>["Hello", "World", "I", "am", "code"]</code>.
    testString: assert(JSON.stringify(splitify("Hello World,I-am code")) === JSON.stringify(["Hello", "World", "I", "am", "code"]));
  - text: <code>splitify("Earth-is-our home")</code> should return <code>["Earth", "is", "our", "home"]</code>.
    testString: assert(JSON.stringify(splitify("Earth-is-our home")) === JSON.stringify(["Earth", "is", "our", "home"]));
  - text: <code>splitify("This.is.a-sentence")</code> should return <code>["This", "is", "a", "sentence"]</code>.
    testString: assert(JSON.stringify(splitify("This.is.a-sentence")) === JSON.stringify(["This", "is", "a", "sentence"]));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function splitify(str) {
  // Only change code below this line


  // Only change code above this line
}
splitify("Hello World,I-am code");
```

</div>



</section>

## Solution
<section id='solution'>

```js
function splitify(str) {
  // Only change code below this line
  return str.split(/\W/);
  // Only change code above this line
}
```

</section>
