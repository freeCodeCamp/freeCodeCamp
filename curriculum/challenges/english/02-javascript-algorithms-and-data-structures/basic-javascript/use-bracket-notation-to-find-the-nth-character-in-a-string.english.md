---
id: bd7123c9c450eddfaeb5bdef
title: Use Bracket Notation to Find the Nth Character in a String
challengeType: 1
---

## Description
<section id='description'>
You can also use <dfn>bracket notation</dfn> to get the character at other positions within a string.
Remember that computers start counting at <code>0</code>, so the first character is actually the zeroth character.
</section>

## Instructions
<section id='instructions'>
Let's try to set <code>thirdLetterOfLastName</code> to equal the third letter of the <code>lastName</code> variable using bracket notation.
<strong>Hint</strong><br>Try looking at the <code>secondLetterOfFirstName</code> variable declaration if you get stuck.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>thirdLetterOfLastName</code> variable should have the value of <code>v</code>.
    testString: 'assert(thirdLetterOfLastName === "v", "The <code>thirdLetterOfLastName</code> variable should have the value of <code>v</code>.");'
  - text: You should use bracket notation.
    testString: 'assert(code.match(/thirdLetterOfLastName\s*?=\s*?lastName\[.*?\]/), "You should use bracket notation.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var thirdLetterOfLastName = lastName;


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
var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];
```

</section>
