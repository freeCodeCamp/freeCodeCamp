---
id: 587d7b87367417b2b2512b40
title: Compare Scopes of the var and let Keywords
challengeType: 1
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'getUserInput => assert(!getUserInput("index").match(/var/g),"<code>var</code> does not exist in code.");'
  - text: ''
    testString: 'getUserInput => assert(getUserInput("index").match(/(i\s*=\s*).*\s*.*\s*.*\1("|")block\s*scope\2/g), "The variable <code>i</code> declared in the if statement should equal "block scope".");'
  - text: ''
    testString: 'assert(checkScope() === "function scope", "<code>checkScope()</code> should return "function scope"");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkScope() {
"use strict";
  var i = "function scope";
  if (true) {
    i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
