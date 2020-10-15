---
id: 587d7db9367417b2b2512ba7
challengeType: 1
forumTopicId: 301365
title: 指定匹配的确切数量
---

## Description
<section id='description'>
可以使用带有花括号的<code>数量说明符</code>来指定匹配模式的上下限。但有时只需要特定数量的匹配。
要指定一定数量的匹配模式，只需在大括号之间放置一个数字。
例如，要只匹配字母<code>a</code>出现<code>3</code>次的单词<code>"hah"</code>，正则表达式应为<code>/ha{3}h/</code>。

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
修改正则表达式<code>timRegex</code>，以匹配仅有四个字母单词<code>m</code>的单词<code>"Timber"</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式应该使用花括号。
    testString: assert(timRegex.source.match(/{.*?}/).length > 0);
  - text: "你的正则表达式不应该匹配<code>'Timber'</code>。"
    testString: assert(!timRegex.test("Timber"));
  - text: "你的正则表达式不应该匹配<code>'Timmber'</code>。"
    testString: assert(!timRegex.test("Timmber"));
  - text: "你的正则表达式不应该匹配<code>'Timmmber'</code>。"
    testString: assert(!timRegex.test("Timmmber"));
  - text: "你的正则表达式应该匹配<code>'Timmmmber'</code>。"
    testString: assert(timRegex.test("Timmmmber"));
  - text: "你的正则表达式不应该匹配包含 30 个字母<code>m</code>的<code>'Timber'</code>。"
    testString: assert(!timRegex.test("Ti" + "m".repeat(30) + "ber"));

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
