---
id: 587d7db9367417b2b2512ba6
title: Specify Only the Lower Number of Matches
challengeType: 1
---

## Description
<section id='description'>
You can specify the lower and upper number of patterns with <code>quantity specifiers</code> using curly brackets. Sometimes you only want to specify the lower number of patterns with no upper limit.
To only specify the lower number of patterns, keep the first number followed by a comma.
For example, to match only the string <code>"hah"</code> with the letter <code>a</code> appearing at least <code>3</code> times, your regex would be <code>/ha{3,}h/</code>.
<blockquote>let A4 = "haaaah";<br>let A2 = "haah";<br>let A100 = "h" + "a".repeat(100) + "h";<br>let multipleA = /ha{3,}h/;<br>multipleA.test(A4); // Returns true<br>multipleA.test(A2); // Returns false<br>multipleA.test(A100); // Returns true</blockquote>
</section>

## Instructions
<section id='instructions'>
Change the regex <code>haRegex</code> to match the word <code>"Hazzah"</code> only when it has four or more letter <code>z</code>'s.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex should use curly brackets.
    testString: 'assert(haRegex.source.match(/{.*?}/).length > 0, ''Your regex should use curly brackets.'');'
  - text: Your regex should not match <code>"Hazzah"</code>
    testString: 'assert(!haRegex.test("Hazzah"), ''Your regex should not match <code>"Hazzah"</code>'');'
  - text: Your regex should not match <code>"Hazzzah"</code>
    testString: 'assert(!haRegex.test("Hazzzah"), ''Your regex should not match <code>"Hazzzah"</code>'');'
  - text: Your regex should match <code>"Hazzzzah"</code>
    testString: 'assert(haRegex.test("Hazzzzah"), ''Your regex should match <code>"Hazzzzah"</code>'');'
  - text: Your regex should match <code>"Hazzzzzah"</code>
    testString: 'assert(haRegex.test("Hazzzzzah"), ''Your regex should match <code>"Hazzzzzah"</code>'');'
  - text: Your regex should match <code>"Hazzzzzzah"</code>
    testString: 'assert(haRegex.test("Hazzzzzzah"), ''Your regex should match <code>"Hazzzzzzah"</code>'');'
  - text: Your regex should match <code>"Hazzah"</code> with 30 <code>z</code>\'s in it.
    testString: 'assert(haRegex.test("Ha" + "z".repeat(30) + "ah"), ''Your regex should match <code>"Hazzah"</code> with 30 <code>z</code>\''s in it.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let haStr = "Hazzzzah";
let haRegex = /change/; // Change this line
let result = haRegex.test(haStr);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
