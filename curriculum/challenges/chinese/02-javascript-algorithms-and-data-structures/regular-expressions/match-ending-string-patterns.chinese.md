---
id: 587d7db7367417b2b2512b9e
title: Match Ending String Patterns
challengeType: 1
videoUrl: ''
localeTitle: 匹配结束字符串模式
---

## Description
<section id="description">在上一个挑战中，您学会了使用<code>caret</code>来搜索字符串开头的模式。还有一种方法可以在字符串末尾搜索模式。您可以使用正则表达式末尾的<code>dollar sign</code>字符<code>$</code>来搜索字符串的结尾。 <blockquote>让theEnding =“这是一个永无止境的故事”; <br>让storyRegex = / story $ /; <br> storyRegex.test（theEnding）; <br> //返回true <br>让noEnding =“有时故事必须结束”; <br> storyRegex.test（noEnding）; <br> //返回false <br></blockquote></section>

## Instructions
<section id="instructions">使用锚字符（ <code>$</code> ）来匹配字符串<code>&quot;caboose&quot;</code>在字符串的结尾<code>caboose</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您应该在正则表达式中使用美元符号<code>$</code> anchor搜索<code>&quot;caboose&quot;</code> 。
    testString: assert(lastRegex.source == "caboose$");
  - text: 你的正则表达式不应该使用任何标志。
    testString: assert(lastRegex.flags == "");
  - text: 您应该在字符串末尾匹配<code>&quot;caboose&quot;</code> <code>&quot;The last car on a train is the caboose&quot;</code>
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
// solution required
```
</section>
