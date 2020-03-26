---
id: bd7123c9c448eddfaeb5bdef
title: Find the Length of a String
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvmqEAd'
forumTopicId: 18182
---

## Description
<section id='description'>
You can find the length of a <code>String</code> value by writing <code>.length</code> after the string variable or string literal.
<code>"Alan Peter".length; // 10</code>
For example, if we created a variable <code>var firstName = "Charles"</code>, we could find out how long the string <code>"Charles"</code> is by using the <code>firstName.length</code> property.
</section>

## Instructions
<section id='instructions'>
Use the <code>.length</code> property to count the number of characters in the <code>lastName</code> variable and assign it to <code>lastNameLength</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'You should not change the variable declarations in the <code>// Setup</code> section.'
    testString: assert(code.match(/var lastNameLength = 0;/) && code.match(/var lastName = "Lovelace";/));   
  - text: <code>lastNameLength</code> should be equal to eight.
    testString: assert(typeof lastNameLength !== 'undefined' && lastNameLength === 8); 
  - text: 'You should be getting the length of <code>lastName</code> by using <code>.length</code> like this: <code>lastName.length</code>.'
    testString: assert(code.match(/=\s*lastName\.length/g) && !code.match(/lastName\s*=\s*8/));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line

lastNameLength = lastName;


```

</div>

</section>

## Solution
<section id='solution'>


```js
var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;
```

</section>
