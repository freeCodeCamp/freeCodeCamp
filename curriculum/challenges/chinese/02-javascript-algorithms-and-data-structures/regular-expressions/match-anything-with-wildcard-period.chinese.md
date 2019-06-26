---
id: 587d7db5367417b2b2512b94
title: Match Anything with Wildcard Period
challengeType: 1
videoUrl: ''
localeTitle: 匹配通配符期间的任何内容
---

## Description
<section id="description">有时您不会（或不需要）知道模式中的确切字符。想到所有匹配的单词，比如拼写错误需要很长时间。幸运的是，您可以使用通配符来节省时间： <code>.</code>通配符<code>.</code>将匹配任何一个字符。通配符也称为<code>dot</code>和<code>period</code> 。您可以像使用正则表达式中的任何其他字符一样使用通配符。例如，如果你想匹配<code>&quot;hug&quot;</code> ， <code>&quot;huh&quot;</code> ， <code>&quot;hut&quot;</code>和<code>&quot;hum&quot;</code> ，你可以使用正则表达式<code>/hu./</code>来匹配所有四个单词。 <blockquote>让humStr =“我会哼唱一首歌”; <br>让hugStr =“熊抱”; <br>让huRegex = /hu./; <br> humStr.match（huRegex）; //返回[“hum”] <br> hugStr.match（huRegex）; //返回[“拥抱”] </blockquote></section>

## Instructions
<section id="instructions">完成正则表达式<code>unRegex</code> ，使其匹配字符串<code>&quot;run&quot;</code> ， <code>&quot;sun&quot;</code> ， <code>&quot;fun&quot;</code> ， <code>&quot;pun&quot;</code> ， <code>&quot;nun&quot;</code>和<code>&quot;bun&quot;</code> 。你的正则表达式应该使用通配符。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 測試文本
    testString: assert(true);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /change/; // Change this line
let result = unRegex.test(exampleStr);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
