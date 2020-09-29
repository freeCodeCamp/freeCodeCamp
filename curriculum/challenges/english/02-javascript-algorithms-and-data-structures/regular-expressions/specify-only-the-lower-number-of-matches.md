---
id: 587d7db9367417b2b2512ba6
title: Specify Only the Lower Number of Matches
challengeType: 1
forumTopicId: 301366
---

## Description
<section id='description'>
You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want to specify the lower number of patterns with no upper limit.
To only specify the lower number of patterns, keep the first number followed by a comma.
For example, to match only the string <code>"hah"</code> with the letter <code>a</code> appearing at least <code>3</code> times, your regex would be <code>/ha{3,}h/</code>.

```js
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
multipleA.test(A100); // Returns true
```

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
    testString: assert(haRegex.source.match(/{.*?}/).length > 0);
  - text: Your regex should not match <code>"Hazzah"</code>
    testString: assert(!haRegex.test("Hazzah"));
  - text: Your regex should not match <code>"Hazzzah"</code>
    testString: assert(!haRegex.test("Hazzzah"));
  - text: Your regex should match <code>"Hazzzzah"</code>
    testString: assert("Hazzzzah".match(haRegex)[0].length === 8);
  - text: Your regex should match <code>"Hazzzzzah"</code>
    testString: assert("Hazzzzzah".match(haRegex)[0].length === 9);
  - text: Your regex should match <code>"Hazzzzzzah"</code>
    testString: assert("Hazzzzzzah".match(haRegex)[0].length === 10);
  - text: Your regex should match <code>"Hazzah"</code> with 30 <code>z</code>'s in it.
    testString: assert("Hazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzah".match(haRegex)[0].length === 34);

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
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
```

</section>
