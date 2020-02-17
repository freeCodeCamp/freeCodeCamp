---
id: 587d7dba367417b2b2512ba8
title: Check for All or None
challengeType: 1
videoUrl: ''
localeTitle: 检查全部或无
---

## Description
<section id="description">有时，您要搜索的模式可能包含可能存在或可能不存在的模式。但是，尽管如此，检查它们可能很重要。您可以指定可能存在带问号的元素， <code>?</code> 。这将检查前一个元素中的零个或一个。您可以将此符号视为前一个元素是可选的。例如，美式英语和英式英语略有不同，您可以使用问号来匹配两种拼写。 <blockquote>让美国人=“颜色”; <br>让british =“color”; <br>让rainbowRegex = / colou？r /; <br> rainbowRegex.test（美国）; //返回true <br> rainbowRegex.test（英国）; //返回true </blockquote></section>

## Instructions
<section id="instructions">更改正则表达式<code>favRegex</code>以匹配该单词的美国英语（收藏）和英国英语（收藏）版本。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式应该使用可选的符号， <code>?</code> 。
    testString: assert(favRegex.source.match(/\?/).length > 0);
  - text: 你的正则表达式应该匹配<code>&quot;favorite&quot;</code>
    testString: assert(favRegex.test("favorite"));
  - text: 你的正则表达式应该匹配<code>&quot;favourite&quot;</code>
    testString: assert(favRegex.test("favourite"));
  - text: 你的正则表达式不应该匹配<code>&quot;fav&quot;</code>
    testString: assert(!favRegex.test("fav"));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let favWord = "favorite";
let favRegex = /change/; // Change this line
let result = favRegex.test(favWord);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
