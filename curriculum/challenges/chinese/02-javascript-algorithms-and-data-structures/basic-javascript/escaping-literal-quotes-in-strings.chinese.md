---
id: 56533eb9ac21ba0edf2244b5
title: Escaping Literal Quotes in Strings
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvgSr'
forumTopicId: 17568
localeTitle: 转义字符串中的引号
---

## Description
<section id='description'>
定义一个字符串必须要用单引号或双引号来包裹它。那么当你的字符串里面包含：<code>"</code>或者<code>'</code>时该怎么办呢?
在 JavaScript 中，你可以通过在引号前面使用<dfn>反斜杠</dfn>（<code>\</code>）来转义引号。
<code>var sampleStr = "Alan said, \"Peter is learning JavaScript\".";</code>
有了转义符号，JavaScript 就知道这个单引号或双引号并不是字符串的结尾，而是字符串内的字符。所以，上面的字符串打印到控制台的结果为：
<code>Alan said, "Peter is learning JavaScript".</code>
</section>

## Instructions
<section id='instructions'>
使用<dfn>反斜杠</dfn>将一个字符串赋值给变量<code>myStr</code>，打印到控制台，输出为：
<code>I am a "double quoted" string inside "double quotes".</code>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的代码中应该包含两个双引号 (<code>&quot;</code>) 以及四个转义的双引 (<code>&#92;&quot;</code>)。
    testString: assert(code.match(/\\"/g).length === 4 && code.match(/[^\\]"/g).length === 2);
  - text: 变量 myStr 应该包含字符串<code>I am a "double quoted" string inside "double quotes".</code>。
    testString: assert(myStr === "I am a \"double quoted\" string inside \"double quotes\".");

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
(function(){
  if(typeof myStr === 'string') {
    console.log("myStr = \"" + myStr + "\"");
  } else {
    console.log("myStr is undefined");
  }
})();
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";
```

</section>
