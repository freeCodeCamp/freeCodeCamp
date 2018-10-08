---
id: 587d7db7367417b2b2512b9d
title: Match Beginning String Patterns
challengeType: 1
---

## Description
<section id='description'>
Prior challenges showed that regular expressions can be used to look for a number of matches. They are also used to search for patterns in specific positions in strings.
In an earlier challenge, you used the <code>caret</code> character (<code>^</code>) inside a <code>character set</code> to create a <code>negated character set</code> in the form <code>[^thingsThatWillNotBeMatched]</code>. Outside of a <code>character set</code>, the <code>caret</code> is used to search for patterns at the beginning of strings.
<blockquote>let firstString = "Ricky is first and can be found.";<br>let firstRegex = /^Ricky/;<br>firstRegex.test(firstString);<br>// Returns true<br>let notFirst = "You can't find Ricky now.";<br>firstRegex.test(notFirst);<br>// Returns false</blockquote>
</section>

## Instructions
<section id='instructions'>
Use the <code>caret</code> character in a regex to find <code>"Cal"</code> only in the beginning of the string <code>rickyAndCal</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex should search for <code>"Cal"</code> with a capital letter.
    testString: 'assert(calRegex.source == "^Cal", "Your regex should search for <code>"Cal"</code> with a capital letter.");'
  - text: Your regex should not use any flags.
    testString: 'assert(calRegex.flags == "", "Your regex should not use any flags.");'
  - text: Your regex should match <code>"Cal"</code> at the beginning of the string.
    testString: 'assert(calRegex.test("Cal and Ricky both like racing."), "Your regex should match <code>"Cal"</code> at the beginning of the string.");'
  - text: Your regex should not match <code>"Cal"</code> in the middle of a string.
    testString: 'assert(!calRegex.test("Ricky and Cal both like racing."), "Your regex should not match <code>"Cal"</code> in the middle of a string.");'

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
// solution required
```
</section>
