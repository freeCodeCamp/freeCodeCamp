---
id: 587d7db9367417b2b2512ba7
title: Specify Exact Number of Matches
challengeType: 1
isHidden: false
forumTopicId: 301365
---

## Description
<section id='description'>
You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want a specific number of matches.
To specify a certain number of patterns, just have that one number between the curly brackets.
For example, to match only the word <code>"hah"</code> with the letter <code>a</code> <code>3</code> times, your regex would be <code>/ha{3}h/</code>.

```js
let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4); // Returns false
multipleHA.test(A3); // Returns true
multipleHA.test(A100); // Returns false
```

</section>

## Instructions
<section id='instructions'>
Change the regex <code>timRegex</code> to match the word <code>"Timber"</code> only when it has four letter <code>m</code>'s.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex should use curly brackets.
    testString: assert(timRegex.source.match(/{.*?}/).length > 0);
  - text: Your regex should not match <code>"Timber"</code>
    testString: timRegex.lastIndex = 0; assert(!timRegex.test("Timber"));
  - text: Your regex should not match <code>"Timmber"</code>
    testString: timRegex.lastIndex = 0; assert(!timRegex.test("Timmber"));
  - text: Your regex should not match <code>"Timmmber"</code>
    testString: timRegex.lastIndex = 0; assert(!timRegex.test("Timmmber"));
  - text: Your regex should match <code>"Timmmmber"</code>
    testString: timRegex.lastIndex = 0; assert(timRegex.test("Timmmmber"));
  - text: Your regex should not match <code>"Timber"</code> with 30 <code>m</code>'s in it.
    testString: timRegex.lastIndex = 0; assert(!timRegex.test("Ti" + "m".repeat(30) + "ber"));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let timStr = "Timmmmber";
let timRegex = /change/; // Change this line
let result = timRegex.test(timStr);
```

</div>



</section>

## Solution
<section id='solution'>

```js
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);
```

</section>
