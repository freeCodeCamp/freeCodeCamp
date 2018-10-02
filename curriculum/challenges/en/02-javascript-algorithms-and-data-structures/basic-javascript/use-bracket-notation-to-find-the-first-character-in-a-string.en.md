---
id: bd7123c9c549eddfaeb5bdef
title: Use Bracket Notation to Find the First Character in a String
challengeType: 1
---

## Description
<section id='description'>
<code>Bracket notation</code> is a way to get a character at a specific <code>index</code> within a string.
Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. They start at 0. This is referred to as <dfn>Zero-based</dfn> indexing.
For example, the character at index 0 in the word "Charles" is "C". So if <code>var firstName = "Charles"</code>, you can get the value of the first letter of the string by using <code>firstName[0]</code>.
</section>

## Instructions
<section id='instructions'>
Use <dfn>bracket notation</dfn> to find the first character in the <code>lastName</code> variable and assign it to <code>firstLetterOfLastName</code>.
<strong>Hint</strong><br>Try looking at the <code>firstLetterOfFirstName</code> variable declaration if you get stuck.
</section>

## Tests
<section id='tests'>

```yml
- text: The <code>firstLetterOfLastName</code> variable should have the value of <code>L</code>.
  testString: 'assert(firstLetterOfLastName === ''L'', ''The <code>firstLetterOfLastName</code> variable should have the value of <code>L</code>.'');'
- text: You should use bracket notation.
  testString: 'assert(code.match(/firstLetterOfLastName\s*?=\s*?lastName\[.*?\]/), ''You should use bracket notation.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName;


```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
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
