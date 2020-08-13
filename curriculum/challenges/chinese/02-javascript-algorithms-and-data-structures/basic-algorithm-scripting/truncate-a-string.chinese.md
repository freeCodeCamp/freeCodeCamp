---
id: ac6993d51946422351508a41
title: Truncate a String
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: 截断字符串
---

## Description
<section id="description">如果字符串（第一个参数）长于给定的最大字符串长度（第二个参数），则截断该字符串。返回带有<code>...</code>结尾的截断字符串。如果卡住，请记得使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> 。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>truncateString(&quot;A-tisket a-tasket A green and yellow basket&quot;, 8)</code>应该返回“A-tisket ......”。'
    testString: assert(truncateString("A-tisket a-tasket A green and yellow basket", 8) === "A-tisket...");
  - text: '<code>truncateString(&quot;Peter Piper picked a peck of pickled peppers&quot;, 11)</code>应该回归“Peter Piper ......”。'
    testString: assert(truncateString("Peter Piper picked a peck of pickled peppers", 11) === "Peter Piper...");
  - text: '<code>truncateString(&quot;A-tisket a-tasket A green and yellow basket&quot;, &quot;A-tisket a-tasket A green and yellow basket&quot;.length)</code>应该返回“A-tisket a-tasket A green and yellow basket”。'
    testString: assert(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) === "A-tisket a-tasket A green and yellow basket");
  - text: '<code>truncateString(&quot;A-tisket a-tasket A green and yellow basket&quot;, &quot;A-tisket a-tasket A green and yellow basket&quot;.length + 2)</code>应返回“A-tisket a-tasket A green and yellow basket”。'
    testString: assert(truncateString('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length + 2) === 'A-tisket a-tasket A green and yellow basket');
  - text: '<code>truncateString(&quot;A-&quot;, 1)</code>应返回“A ...”。'
    testString: assert(truncateString("A-", 1) === "A...");
  - text: '<code>truncateString(&quot;Absolutely Longer&quot;, 2)</code>应返回“Ab ...”。'
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
// solution required
```

/section>
