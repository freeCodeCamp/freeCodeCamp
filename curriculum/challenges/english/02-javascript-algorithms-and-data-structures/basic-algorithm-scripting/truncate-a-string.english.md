---
id: ac6993d51946422351508a41
title: Truncate a String
isRequired: true
challengeType: 5
---

## Description
<section id='description'>
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a <code>...</code> ending.
Remember to use <a href="http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514" target="_blank">Read-Search-Ask</a> if you get stuck. Write your own code.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>truncateString("A-tisket a-tasket A green and yellow basket", 8)</code> should return "A-tisket...".
    testString: assert(truncateString("A-tisket a-tasket A green and yellow basket", 8) === "A-tisket...", '<code>truncateString("A-tisket a-tasket A green and yellow basket", 8)</code> should return "A-tisket...".');
  - text: <code>truncateString("Peter Piper picked a peck of pickled peppers", 11)</code> should return "Peter Piper...".
    testString: assert(truncateString("Peter Piper picked a peck of pickled peppers", 11) === "Peter Piper...", '<code>truncateString("Peter Piper picked a peck of pickled peppers", 11)</code> should return "Peter Piper...".');
  - text: <code>truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)</code> should return "A-tisket a-tasket A green and yellow basket".
    testString: assert(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) === "A-tisket a-tasket A green and yellow basket", '<code>truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)</code> should return "A-tisket a-tasket A green and yellow basket".');
  - text: <code>truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)</code> should return "A-tisket a-tasket A green and yellow basket".
    testString: assert(truncateString('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length + 2) === 'A-tisket a-tasket A green and yellow basket', '<code>truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)</code> should return "A-tisket a-tasket A green and yellow basket".');
  - text: <code>truncateString("A-", 1)</code> should return "A...".
    testString: assert(truncateString("A-", 1) === "A...", '<code>truncateString("A-", 1)</code> should return "A...".');
  - text: <code>truncateString("Absolutely Longer", 2)</code> should return "Ab...".
    testString: assert(truncateString("Absolutely Longer", 2) === "Ab...", '<code>truncateString("Absolutely Longer", 2)</code> should return "Ab...".');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function truncateString(str, num) {
  // Clear out that junk in your trunk
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function truncateString(str, num) {
  if (num >= str.length) {
    return str;
  }

  return str.slice(0, num) + '...';
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

```

</section>
