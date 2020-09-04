---
id: 587d7db7367417b2b2512b9d
title: Match Beginning String Patterns
challengeType: 1
forumTopicId: 301349
---

## Description
<section id='description'>
Prior challenges showed that regular expressions can be used to look for a number of matches. They are also used to search for patterns in specific positions in strings.
In an earlier challenge, you used the caret character (<code>^</code>) inside a character set to create a negated character set in the form <code>[^thingsThatWillNotBeMatched]</code>. Outside of a character set, the caret is used to search for patterns at the beginning of strings.

```js
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
// Returns true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
// Returns false
```

</section>

## Instructions
<section id='instructions'>
Use the caret character in a regex to find <code>"Cal"</code> only in the beginning of the string <code>rickyAndCal</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex should search for <code>"Cal"</code> with a capital letter.
    testString: assert(calRegex.source == "^Cal");
  - text: Your regex should not use any flags.
    testString: assert(calRegex.flags == "");
  - text: Your regex should match <code>"Cal"</code> at the beginning of the string.
    testString: assert(calRegex.test("Cal and Ricky both like racing."));
  - text: Your regex should not match <code>"Cal"</code> in the middle of a string.
    testString: assert(!calRegex.test("Ricky and Cal both like racing."));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /change/; // Change this line
let result = calRegex.test(rickyAndCal);
```

</div>



</section>

## Solution
<section id='solution'>

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
```

</section>
