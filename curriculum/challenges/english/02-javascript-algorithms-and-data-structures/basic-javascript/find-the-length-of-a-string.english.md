---
id: bd7123c9c448eddfaeb5bdef
title: Find the Length of a String
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvmqEAd'
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
  - text: <code>lastNameLength</code> should be equal to eight.
    testString: assert((function(){if(typeof lastNameLength !== "undefined" && typeof lastNameLength === "number" && lastNameLength === 8){return true;}else{return false;}})(), '<code>lastNameLength</code> should be equal to eight.');
  - text: 'You should be getting the length of <code>lastName</code> by using <code>.length</code> like this: <code>lastName.length</code>.'
    testString: 'assert((function(){if(code.match(/\.length/gi) && code.match(/\.length/gi).length >= 2 && code.match(/var lastNameLength \= 0;/gi) && code.match(/var lastNameLength \= 0;/gi).length >= 1){return true;}else{return false;}})(), ''You should be getting the length of <code>lastName</code> by using <code>.length</code> like this: <code>lastName.length</code>.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;

// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line.

lastNameLength = lastName;


```

</div>


### After Test
<div id='js-teardown'>

```js
if(typeof lastNameLength !== "undefined"){(function(){return lastNameLength;})();}
```

</div>

</section>

## Solution
<section id='solution'>


```js
var firstNameLength = 0;
var firstName = "Ada";
firstNameLength = firstName.length;

var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;
```

</section>
