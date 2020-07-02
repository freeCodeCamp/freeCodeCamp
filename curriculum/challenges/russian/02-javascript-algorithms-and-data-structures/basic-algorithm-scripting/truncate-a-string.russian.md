---
id: ac6993d51946422351508a41
title: Truncate a String
isRequired: true
challengeType: 5
forumTopicId: 16089
localeTitle: Усекать строку
---

## Description
<section id='description'>
Усечь строку (первый аргумент), если она длиннее заданной максимальной длины строки (второй аргумент). Возвращает усеченную строку с <code>...</code> окончанием. Не забудьте использовать <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Напишите свой собственный код.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>truncateString("A-tisket a-tasket A green and yellow basket", 8)</code> should return "A-tisket...".
    testString: assert(truncateString("A-tisket a-tasket A green and yellow basket", 8) === "A-tisket...");
  - text: <code>truncateString("Peter Piper picked a peck of pickled peppers", 11)</code> should return "Peter Piper...".
    testString: assert(truncateString("Peter Piper picked a peck of pickled peppers", 11) === "Peter Piper...");
  - text: <code>truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)</code> should return "A-tisket a-tasket A green and yellow basket".
    testString: assert(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) === "A-tisket a-tasket A green and yellow basket");
  - text: <code>truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)</code> should return "A-tisket a-tasket A green and yellow basket".
    testString: assert(truncateString('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length + 2) === 'A-tisket a-tasket A green and yellow basket');
  - text: <code>truncateString("A-", 1)</code> should return "A...".
    testString: assert(truncateString("A-", 1) === "A...");
  - text: <code>truncateString("Absolutely Longer", 2)</code> should return "Ab...".
    testString: assert(truncateString("Absolutely Longer", 2) === "Ab...");

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
