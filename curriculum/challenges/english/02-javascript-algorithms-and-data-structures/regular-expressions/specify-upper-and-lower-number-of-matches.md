---
id: 587d7db9367417b2b2512ba5
title: Specify Upper and Lower Number of Matches
challengeType: 1
forumTopicId: 301367
---

## Description

<section id='description'>

Recall that you use the plus sign `+` to look for one or more characters and the asterisk `*` to look for zero or more characters. These are convenient but sometimes you want to match a certain range of patterns.

You can specify the lower and upper number of patterns with <dfn>quantity specifiers</dfn>. Quantity specifiers are used with curly brackets (`{` and `}`). You put two numbers between the curly brackets - for the lower and upper number of patterns.

For example, to match only the letter `a` appearing between `3` and `5` times in the string `"ah"`, your regex would be `/a{3,5}h/`.

```js
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
```

</section>

## Instructions

<section id='instructions'>

Change the regex `ohRegex` to match the entire phrase `"Oh no"` only when it has `3` to `6` letter `h`'s.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: Your regex should use curly brackets.
    testString: assert(ohRegex.source.match(/{.*?}/).length > 0);
  - text: Your regex should not match <code>"Ohh no"</code>
    testString: assert(!ohRegex.test("Ohh no"));
  - text: Your regex should match <code>"Ohhh no"</code>
    testString: assert("Ohhh no".match(ohRegex)[0].length === 7);
  - text: Your regex should match <code>"Ohhhh no"</code>
    testString: assert("Ohhhh no".match(ohRegex)[0].length === 8);
  - text: Your regex should match <code>"Ohhhhh no"</code>
    testString: assert("Ohhhhh no".match(ohRegex)[0].length === 9);
  - text: Your regex should match <code>"Ohhhhhh no"</code>
    testString: assert("Ohhhhhh no".match(ohRegex)[0].length === 10);
  - text: Your regex should not match <code>"Ohhhhhhh no"</code>
    testString: assert(!ohRegex.test("Ohhhhhhh no"));

```

</section>

## Challenge Seed

<section id='challengeSeed'>
<div id='js-seed'>

```js
let ohStr = "Ohhh no";
let ohRegex = /change/; // Change this line
let result = ohRegex.test(ohStr);
```

</div>

</section>

## Solution

<section id='solution'>

```js
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);
```

</section>
