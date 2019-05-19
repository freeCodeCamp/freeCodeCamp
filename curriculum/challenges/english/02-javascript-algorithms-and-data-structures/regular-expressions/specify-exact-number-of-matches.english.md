---
id: 587d7db9367417b2b2512ba7
title: Specify Exact Number of Matches
challengeType: 1
---

## Description
<section id='description'>
You can specify the lower and upper number of patterns with <code>quantity specifiers</code> using curly brackets. Sometimes you only want a specific number of matches.
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
    testString: assert(timRegex.source.match(/{.*?}/).length > 0, 'Your regex should use curly brackets.');
  - text: Your regex should not match <code>"Timber"</code>
    testString: assert(!timRegex.test("Timber"), 'Your regex should not match <code>"Timber"</code>');
  - text: Your regex should not match <code>"Timmber"</code>
    testString: assert(!timRegex.test("Timmber"), 'Your regex should not match <code>"Timmber"</code>');
  - text: Your regex should not match <code>"Timmmber"</code>
    testString: assert(!timRegex.test("Timmmber"), 'Your regex should not match <code>"Timmmber"</code>');
  - text: Your regex should match <code>"Timmmmber"</code>
    testString: assert(timRegex.test("Timmmmber"), 'Your regex should match <code>"Timmmmber"</code>');
  - text: Your regex should not match <code>"Timber"</code> with 30 <code>m</code>'s in it.
    testString: assert(!timRegex.test("Ti" + "m".repeat(30) + "ber"), 'Your regex should not match <code>"Timber"</code> with 30 <code>m</code>\'s in it.');

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
