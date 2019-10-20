---
id: 56533eb9ac21ba0edf2244b5
title: Escaping Literal Quotes in Strings
challengeType: 1
videoUrl: ''
localeTitle: 逃避字符串中的字面引用
---

## Description
<section id="description">在定义字符串时，必须以单引号或双引号开头和结尾。当你需要一个文字报价会发生什么： <code>&quot;</code>还是<code>&#39;</code> ？你的字符串里面在JavaScript中，你可以放置一个<dfn>反斜杠</dfn> （从考虑到它作为字符串报价的最终<dfn>逃脱</dfn>报价<code>\</code>在引号前）。 <code>var sampleStr = &quot;Alan said, \&quot;Peter is learning JavaScript\&quot;.&quot;;</code>这告诉JavaScript，以下引用不是字符串的结尾，而是应该出现在字符串中。所以如果要将它打印到控制台，你会得到： <code>Alan said, &quot;Peter is learning JavaScript&quot;.</code> </section>

## Instructions
<section id="instructions">使用<dfn>反斜杠</dfn>将字符串分配给<code>myStr</code>变量，这样如果要将其打印到控制台，您会看到： <code>I am a &quot;double quoted&quot; string inside &quot;double quotes&quot;.</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您应该使用两个双引号（ <code>&quot;</code> ）和四个转义双引号（ <code>\&quot;</code> ）。
    testString: 'assert(code.match(/\\"/g).length === 4 && code.match(/[^\\]"/g).length === 2, "You should use two double quotes (<code>&quot;</code>) and four escaped double quotes (<code>&#92;&quot;</code>).");'
  - text: 变量myStr应该包含字符串： <code>I am a &quot;double quoted&quot; string inside &quot;double quotes&quot;.</code>
    testString: 'assert(myStr === "I am a \"double quoted\" string inside \"double quotes\".", "Variable myStr should contain the string: <code>I am a "double quoted" string inside "double quotes".</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myStr = ""; // Change this line

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
