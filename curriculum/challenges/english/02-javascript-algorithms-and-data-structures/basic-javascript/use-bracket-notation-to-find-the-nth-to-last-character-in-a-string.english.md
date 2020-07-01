---
id: bd7123c9c452eddfaeb5bdef
title: Use Bracket Notation to Find the Nth-to-Last Character in a String
challengeType: 1
isHidden: false
videoUrl: 'https://scrimba.com/c/cw4vkh9'
forumTopicId: 18344
---

## Description
<section id='description'>
You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character.
For example, you can get the value of the third-to-last letter of the <code>var firstName = "Charles"</code> string by using <code>firstName[firstName.length - 3]</code>

Example:

```js
var firstName = "Charles";
var thirdToLastLetter = firstName[firstName.length - 3]; // thirdToLastLetter is "l"
```

</section>

## Instructions
<section id='instructions'>
Use <dfn>bracket notation</dfn> to find the second-to-last character in the <code>lastName</code> string.
<strong>Hint: </strong> Try looking at the example above if you get stuck.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>secondToLastLetterOfLastName</code> should be "c".
    testString: assert(secondToLastLetterOfLastName === 'c');
  - text: You should use <code>.length</code> to get the second last letter.
    testString: assert(code.match(/\.length/g).length > 0);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName; // Change this line


```

</div>


### After Test
<div id='js-teardown'>

```js
(function(v){return v;})(secondToLastLetterOfLastName);
```

</div>

</section>

## Solution
<section id='solution'>


```js
var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];
```

</section>
