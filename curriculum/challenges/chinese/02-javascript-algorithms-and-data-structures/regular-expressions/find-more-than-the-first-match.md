---
id: 587d7db4367417b2b2512b93
challengeType: 1
forumTopicId: 301342
title: 全局匹配
---

## Description
<section id='description'>
到目前为止，只能提取或搜寻一次模式匹配。

```js
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
// Returns ["Repeat"]
```

若要多次搜寻或提取模式匹配，可以使用<code>g</code>标志。

```js
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
// Returns ["Repeat", "Repeat", "Repeat"]
```

</section>

## Instructions
<section id='instructions'>
使用正则表达式<code>starRegex</code>，从字符串<code>twinkleStar</code>中匹配到所有的<code>"Twinkle"</code>单词并提取出来。
<strong>注意：</strong><br>在正则表达式上可以有多个标志，比如<code>/search/gi</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式<code>starRegex</code>应该使用全局标志<code>g</code>。
    testString: assert(starRegex.flags.match(/g/).length == 1);
  - text: 你的正则表达式<code>starRegex</code>应该使用忽略大小写标志<code>i</code>。
    testString: assert(starRegex.flags.match(/i/).length == 1);
  - text: "你的匹配应该匹配单词<code>'Twinkle'</code>的两个匹配项。"
    testString: assert(result.sort().join() == twinkleStar.match(/twinkle/gi).sort().join());
  - text: 你的匹配<code>结果</code>应该包含两个元素。
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
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);
```

</section>
