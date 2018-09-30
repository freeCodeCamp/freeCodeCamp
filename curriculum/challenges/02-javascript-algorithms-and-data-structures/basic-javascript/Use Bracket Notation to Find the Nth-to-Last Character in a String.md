---
id: bd7123c9c452eddfaeb5bdef
title: Use Bracket Notation to Find the Nth-to-Last Character in a String
challengeType: 1
---

## Description
<section id='description'>
You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character.
For example, you can get the value of the third-to-last letter of the <code>var firstName = "Charles"</code> string by using <code>firstName[firstName.length - 3]</code>
</section>

## Instructions
<section id='instructions'>
Use <dfn>bracket notation</dfn> to find the second-to-last character in the <code>lastName</code> string.
<strong>Hint</strong><br>Try looking at the <code>thirdToLastLetterOfFirstName</code> variable declaration if you get stuck.
</section>

## Tests
<section id='tests'>

```yml
- text: <code>secondToLastLetterOfLastName</code> should be "c".
  testString: 'assert(secondToLastLetterOfLastName === "c", "<code>secondToLastLetterOfLastName</code> should be "c".");'
- text: You have to use <code>.length</code> to get the second last letter.
  testString: 'assert(code.match(/\.length/g).length === 2, "You have to use <code>.length</code> to get the second last letter.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName;


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
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];
```

</section>
