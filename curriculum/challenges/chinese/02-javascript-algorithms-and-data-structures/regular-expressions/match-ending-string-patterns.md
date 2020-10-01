---
id: 587d7db7367417b2b2512b9e
challengeType: 1
forumTopicId: 301352
title: 匹配字符串的末尾
---

## Description
<section id='description'>
在上一个挑战中，学习了使用<code>^</code>符号来搜寻字符串开头的匹配模式。还有一种方法可以搜寻字符串末尾的匹配模式。
可以使用正则表达式的<code>美元</code>符号<code>$</code>来搜寻字符串的结尾。

```js
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
// Returns true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
// Returns false

```

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
    testString: assert(lastRegex.source == "caboose$");
  - text: 你的正则表达式不应该使用任何标志。
    testString: assert(lastRegex.flags == "");
  - text: "你应该在字符串<code>'The last car on a train is the caboose'</code>的末尾匹配<code>'caboose'</code>。"
    testString: assert(lastRegex.test("The last car on a train is the caboose"));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let caboose = "The last car on a train is the caboose";
let lastRegex = /change/; // Change this line
let result = lastRegex.test(caboose);
```

</div>



</section>

## Solution
<section id='solution'>

```js
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);
```

</section>
