---
id: a26cbbe9ad8655a977e1ceb5
title: Find the Longest Word in a String
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: 找到字符串中最长的单词
---

## Description
<section id="description">返回所提供句子中最长单词的长度。您的回答应该是一个数字。如果卡住，请记得使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> 。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>findLongestWordLength(&quot;The quick brown fox jumped over the lazy dog&quot;)</code>应该返回一个数字。
    testString: assert(typeof findLongestWordLength("The quick brown fox jumped over the lazy dog") === "number");
  - text: <code>findLongestWordLength(&quot;The quick brown fox jumped over the lazy dog&quot;)</code>应该返回6。
    testString: assert(findLongestWordLength("The quick brown fox jumped over the lazy dog") === 6);
  - text: <code>findLongestWordLength(&quot;May the force be with you&quot;)</code>应该返回5。
    testString: assert(findLongestWordLength("May the force be with you") === 5);
  - text: <code>findLongestWordLength(&quot;Google do a barrel roll&quot;)</code>应返回6。
    testString: assert(findLongestWordLength("Google do a barrel roll") === 6);
  - text: <code>findLongestWordLength(&quot;What is the average airspeed velocity of an unladen swallow&quot;)</code>应该返回8。
    testString: assert(findLongestWordLength("What is the average airspeed velocity of an unladen swallow") === 8);
  - text: <code>findLongestWordLength(&quot;What if we try a super-long word such as otorhinolaryngology&quot;)</code>应该返回19。
    testString: assert(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") === 19);

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

/section>
