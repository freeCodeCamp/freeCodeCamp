---
id: 587d7db7367417b2b2512b9e
title: Match Ending String Patterns
challengeType: 1

videoUrl: ''
localeTitle: Match Ending String Patterns
---

## Description
<section id='description'>
在上一个挑战中，你学习了使用<code>^</code>符号来搜寻字符串开头的匹配模式。还有一种方法可以搜寻字符串末尾的匹配模式。
你可以使用正则表达式的<code>美元</code>符号<code>$</code>来搜寻字符串的结尾。
<blockquote>let theEnding = "This is a never ending story";<br>let storyRegex = /story$/;<br>storyRegex.test(theEnding);<br>// Returns true<br>let noEnding = "Sometimes a story will have to end";<br>storyRegex.test(noEnding);<br>// Returns false<br></blockquote>
</section>

## Instructions
<section id='instructions'>
使用<code>$</code>在字符串<code>caboose</code>的末尾匹配<code>"caboose"</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "你应该在正则表达式使用美元符号<code>$</code>来搜寻<code>'caboose'</code>。"
    testString: assert(lastRegex.source == "caboose$", '你应该在正则表达式使用美元符号<code>$</code>来搜寻<code>"caboose"</code>。');
  - text: 你的正则表达式不应该使用任何标志。
    testString: assert(lastRegex.flags == "", '你的正则表达式不应该使用任何标志。');
  - text: "你应该在字符串<code>'The last car on a train is the caboose'</code>的末尾匹配<code>'caboose'</code>。"
    testString: assert(lastRegex.test("The last car on a train is the caboose"), '你应该在字符串<code>"The last car on a train is the caboose"</code>的末尾匹配<code>"caboose"</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              