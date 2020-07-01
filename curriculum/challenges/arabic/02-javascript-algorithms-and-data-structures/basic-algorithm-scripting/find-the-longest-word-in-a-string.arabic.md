---
id: a26cbbe9ad8655a977e1ceb5
title: Find the Longest Word in a String
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: ابحث عن أطول كلمة في سلسلة
---

## Description
<section id="description"> إرجاع طول الكلمة الأطول في الجملة المتوفرة. يجب أن يكون ردك رقمًا. تذكر استخدام <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> إذا واجهتك مشكلة. اكتب الكود الخاص بك. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>findLongestWordLength(&quot;The quick brown fox jumped over the lazy dog&quot;)</code> يجب إرجاع رقم.
    testString: 'assert(typeof findLongestWordLength("The quick brown fox jumped over the lazy dog") === "number", "<code>findLongestWordLength("The quick brown fox jumped over the lazy dog")</code> should return a number.");'
  - text: <code>findLongestWordLength(&quot;The quick brown fox jumped over the lazy dog&quot;)</code> يجب أن يعود 6.
    testString: 'assert(findLongestWordLength("The quick brown fox jumped over the lazy dog") === 6, "<code>findLongestWordLength("The quick brown fox jumped over the lazy dog")</code> should return 6.");'
  - text: <code>findLongestWordLength(&quot;May the force be with you&quot;)</code> 5.
    testString: 'assert(findLongestWordLength("May the force be with you") === 5, "<code>findLongestWordLength("May the force be with you")</code> should return 5.");'
  - text: <code>findLongestWordLength(&quot;Google do a barrel roll&quot;)</code> 6.
    testString: 'assert(findLongestWordLength("Google do a barrel roll") === 6, "<code>findLongestWordLength("Google do a barrel roll")</code> should return 6.");'
  - text: <code>findLongestWordLength(&quot;What is the average airspeed velocity of an unladen swallow&quot;)</code> 8.
    testString: 'assert(findLongestWordLength("What is the average airspeed velocity of an unladen swallow") === 8, "<code>findLongestWordLength("What is the average airspeed velocity of an unladen swallow")</code> should return 8.");'
  - text: <code>findLongestWordLength(&quot;What if we try a super-long word such as otorhinolaryngology&quot;)</code> يجب أن ترجع 19.
    testString: 'assert(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") === 19, "<code>findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")</code> should return 19.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function findLongestWordLength(str) {
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
