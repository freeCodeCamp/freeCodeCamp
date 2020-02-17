---
id: 587d7db4367417b2b2512b93
title: Find More Than the First Match
challengeType: 1
videoUrl: ''
localeTitle: 找到比第一场比赛更多的东西
---

## Description
<section id="description">到目前为止，您只能提取或搜索一次模式。 <blockquote>让testStr =“重复，重复，重复”; <br>让ourRegex = /重复/; <br> testStr.match（ourRegex）; <br> //返回[“重复”] </blockquote>要多次搜索或提取模式，可以使用<code>g</code>标志。 <blockquote> let repeatRegex = / Repeat / g; <br> testStr.match（repeatRegex）; <br> //返回[“重复”，“重复”，“重复”] </blockquote></section>

## Instructions
<section id="instructions">使用正则表达式<code>starRegex</code> ，找到并提取字符串<code>twinkleStar</code> <code>&quot;Twinkle&quot;</code>单词。 <strong>注意</strong> <br>你可以在你的正则表达式上有多个标志，比如<code>/search/gi</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式<code>starRegex</code>应该使用全局标志<code>g</code>
    testString: assert(starRegex.flags.match(/g/).length == 1);
  - text: 你的正则表达式<code>starRegex</code>应该使用不区分大小写的标志<code>i</code>
    testString: assert(starRegex.flags.match(/i/).length == 1);
  - text: 您的匹配应匹配<code>&quot;Twinkle&quot;</code>一词的出现次数
    testString: assert(result.sort().join() == twinkleStar.match(/twinkle/gi).sort().join());
  - text: 您的匹配<code>result</code>应该包含两个元素。
    testString: assert(result.length == 2);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /change/; // Change this line
let result = twinkleStar; // Change this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
