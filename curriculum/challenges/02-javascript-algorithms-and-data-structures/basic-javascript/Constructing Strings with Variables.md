---
id: 56533eb9ac21ba0edf2244b9
title: Constructing Strings with Variables
challengeType: 1
---

## Description
<section id='description'>
Sometimes you will need to build a string, <a href="https://en.wikipedia.org/wiki/Mad_Libs" target="_blank">Mad Libs</a> style. By using the concatenation operator (<code>+</code>), you can insert one or more variables into a string you're building.
</section>

## Instructions
<section id='instructions'>
Set <code>myName</code> to a string equal to your name and build <code>myStr</code> with <code>myName</code> between the strings <code>"My name is "</code> and <code>" and I am well!"</code>
</section>

## Tests
<section id='tests'>

```yml
- text: <code>myName</code> should be set to a string at least 3 characters long
  testString: 'assert(typeof myName !== "undefined" && myName.length > 2, "<code>myName</code> should be set to a string at least 3 characters long");'
- text: Use two <code>+</code> operators to build <code>myStr</code> with <code>myName</code> inside it
  testString: 'assert(code.match(/[""]\s*\+\s*myName\s*\+\s*[""]/g).length > 0, "Use two <code>+</code> operators to build <code>myStr</code> with <code>myName</code> inside it");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

// Only change code below this line
var myName;
var myStr;


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
var myName = "Bob";
var myStr = "My name is " + myName + " and I am well!";
```

</section>
