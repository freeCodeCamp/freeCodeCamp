---
id: bd7123c9c451eddfaeb5bdef
title: Use Bracket Notation to Find the Last Character in a String
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQGcv'
forumTopicId: 18342
---

## Description
<section id='description'>
In order to get the last letter of a string, you can subtract one from the string's length.
For example, if <code>var firstName = "Charles"</code>, you can get the value of the last letter of the string by using <code>firstName[firstName.length - 1]</code>.
</section>

## Instructions
<section id='instructions'>
Use <dfn>bracket notation</dfn> to find the last character in the <code>lastName</code> variable.
<strong>Hint</strong><br>Try looking at the <code>lastLetterOfFirstName</code> variable declaration if you get stuck.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>lastLetterOfLastName</code> should be "e".
    testString: assert(lastLetterOfLastName === "e");
  - text: You have to use <code>.length</code> to get the last letter.
    testString: assert(code.match(/\.length/g).length === 2);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var lastLetterOfLastName = lastName;


```

</div>


### After Test
<div id='js-teardown'>

```js
(function(v){return v;})(lastLetterOfLastName);
```

</div>

</section>

## Solution
<section id='solution'>


```js
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];
```

</section>
