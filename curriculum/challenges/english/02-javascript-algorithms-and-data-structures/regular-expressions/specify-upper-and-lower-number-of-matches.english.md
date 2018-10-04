---
id: 587d7db9367417b2b2512ba5
title: Specify Upper and Lower Number of Matches
challengeType: 1
---

## Description
<section id='description'>
Recall that you use the plus sign <code>+</code> to look for one or more characters and the asterisk <code>*</code> to look for zero or more characters. These are convenient but sometimes you want to match a certain range of patterns.
You can specify the lower and upper number of patterns with <code>quantity specifiers</code>. Quantity specifiers are used with curly brackets (<code>{</code> and <code>}</code>). You put two numbers between the curly brackets - for the lower and upper number of patterns.
For example, to match only the letter <code>a</code> appearing between <code>3</code> and <code>5</code> times in the string <code>"ah"</code>, your regex would be <code>/a{3,5}h/</code>.
<blockquote>let A4 = "aaaah";<br>let A2 = "aah";<br>let multipleA = /a{3,5}h/;<br>multipleA.test(A4); // Returns true<br>multipleA.test(A2); // Returns false</blockquote>
</section>

## Instructions
<section id='instructions'>
Change the regex <code>ohRegex</code> to match only <code>3</code> to <code>6</code> letter <code>h</code>'s in the word <code>"Oh no"</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex should use curly brackets.
    testString: 'assert(ohRegex.source.match(/{.*?}/).length > 0, ''Your regex should use curly brackets.'');'
  - text: Your regex should not match <code>"Ohh no"</code>
    testString: 'assert(!ohRegex.test("Ohh no"), ''Your regex should not match <code>"Ohh no"</code>'');'
  - text: Your regex should match <code>"Ohhh no"</code>
    testString: 'assert(ohRegex.test("Ohhh no"), ''Your regex should match <code>"Ohhh no"</code>'');'
  - text: Your regex should match <code>"Ohhhh no"</code>
    testString: 'assert(ohRegex.test("Ohhhh no"), ''Your regex should match <code>"Ohhhh no"</code>'');'
  - text: Your regex should match <code>"Ohhhhh no"</code>
    testString: 'assert(ohRegex.test("Ohhhhh no"), ''Your regex should match <code>"Ohhhhh no"</code>'');'
  - text: Your regex should match <code>"Ohhhhhh no"</code>
    testString: 'assert(ohRegex.test("Ohhhhhh no"), ''Your regex should match <code>"Ohhhhhh no"</code>'');'
  - text: Your regex should not match <code>"Ohhhhhhh no"</code>
    testString: 'assert(!ohRegex.test("Ohhhhhhh no"), ''Your regex should not match <code>"Ohhhhhhh no"</code>'');'

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
// solution required
```
</section>
