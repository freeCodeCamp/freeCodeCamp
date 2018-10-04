---
id: 587d7dbb367417b2b2512bac
title: Remove Whitespace from Start and End
challengeType: 1
---

## Description
<section id='description'>
Sometimes whitespace characters around strings are not wanted but are there. Typical processing of strings is to remove the whitespace at the start and end of it.
</section>

## Instructions
<section id='instructions'>
Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.
<strong>Note</strong><br>The <code>.trim()</code> method would work here, but you'll need to complete this challenge using regular expressions.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>result</code> should equal to <code>"Hello, World!"</code>'
    testString: 'assert(result == "Hello, World!", ''<code>result</code> should equal to <code>"Hello, World!"</code>'');'
  - text: You should not use the <code>.trim()</code> method.
    testString: 'assert(!code.match(/\.trim\(.*?\)/), ''You should not use the <code>.trim()</code> method.'');'
  - text: The <code>result</code> variable should not be set equal to a string.
    testString: 'assert(!code.match(/result\s*=\s*".*?"/), ''The <code>result</code> variable should not be set equal to a string.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let hello = "   Hello, World!  ";
let wsRegex = /change/; // Change this line
let result = hello; // Change this line
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
