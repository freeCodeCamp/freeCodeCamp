---
id: bd7123c9c444eddfaeb5bdef
title: Declare String Variables
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvWU6'
---

## Description
<section id='description'>
Previously we have used the code
<code>var myName = "your name";</code>
<code>"your name"</code> is called a <dfn>string</dfn> <dfn>literal</dfn>. It is a string because it is a series of zero or more characters enclosed in single or double quotes.
</section>

## Instructions
<section id='instructions'>
Create two new <code>string</code> variables: <code>myFirstName</code> and <code>myLastName</code> and assign them the values of your first and last name, respectively.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myFirstName</code> should be a string with at least one character in it.
    testString: assert((function(){if(typeof myFirstName !== "undefined" && typeof myFirstName === "string" && myFirstName.length > 0){return true;}else{return false;}})(), '<code>myFirstName</code> should be a string with at least one character in it.');
  - text: <code>myLastName</code> should be a string with at least one character in it.
    testString: assert((function(){if(typeof myLastName !== "undefined" && typeof myLastName === "string" && myLastName.length > 0){return true;}else{return false;}})(), '<code>myLastName</code> should be a string with at least one character in it.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var firstName = "Alan";
var lastName = "Turing";

// Only change code below this line


```

</div>


### After Test
<div id='js-teardown'>

```js
if(typeof myFirstName !== "undefined" && typeof myLastName !== "undefined"){(function(){return myFirstName + ', ' + myLastName;})();}
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myFirstName = "Alan";
var myLastName = "Turing";
```

</section>
