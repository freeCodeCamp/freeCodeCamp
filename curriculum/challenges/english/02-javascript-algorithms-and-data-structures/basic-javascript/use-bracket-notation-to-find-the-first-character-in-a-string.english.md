---
id: bd7123c9c549eddfaeb5bdef
title: Use Bracket Notation to Find the First Character in a String
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8JwhW'
forumTopicId: 18341
---

## Description
<section id='description'>
<dfn>Bracket notation</dfn> is a way to get a character at a specific <code>index</code> within a string.
Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. They start at 0. This is referred to as <dfn>Zero-based</dfn> indexing.
For example, the character at index 0 in the word "Charles" is "C". So if <code>var firstName = "Charles"</code>, you can get the value of the first letter of the string by using <code>firstName[0]</code>.

Example:

```js
var firstName = "Charles";
var firstLetter = firstName[0]; // firstLetter is "C"
```

</section>

## Instructions
<section id='instructions'>
Use bracket notation to find the first character in the <code>lastName</code> variable and assign it to <code>firstLetterOfLastName</code>.
<strong>Hint: </strong> Try looking at the example above if you get stuck.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>firstLetterOfLastName</code> variable should have the value of <code>L</code>.
    testString: assert(firstLetterOfLastName === 'L');
  - text: You should use bracket notation.
    testString: assert(code.match(/firstLetterOfLastName\s*?=\s*?lastName\[.*?\]/));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName; // Change this line

```

</div>


### After Test
<div id='js-teardown'>

```js
(function(v){return v;})(firstLetterOfLastName);
```

</div>

</section>

## Solution
<section id='solution'>


```js
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];
```

</section>
