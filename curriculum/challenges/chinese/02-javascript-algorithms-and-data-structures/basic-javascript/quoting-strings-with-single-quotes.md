---
id: 56533eb9ac21ba0edf2244b4
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmnhM'
forumTopicId: 18260
title: 用单引号引用字符串
---

## Description
<section id='description'>
JavaScript 中的<dfn>字符串</dfn>可以使用开始和结束都是同类型的单引号或双引号表示，与其他一些编程语言不同的是，单引号和双引号的功能在 JavaScript 中是相同的。

```js
doubleQuoteStr = "This is a string"; 
singleQuoteStr = 'This is also a string';
```

当你需要在一个字符串中使用多个引号的时候，你可以使用单引号包裹双引号或者相反。常见的场景比如在字符串中包含对话的句子需要用引号包裹。另外比如在一个包含有<code>&#60;a&#62;</code>标签的字符串中，<code>&#60;a&#62;</code>标签的属性值需要用引号包裹。

```js
conversation = 'Finn exclaims to Jake, "Algebraic!"';
```

但是，如果你想在字符串中使用与最外层相同的引号，会有一些问题。要知道，字符串在开头和结尾都有相同的引号，如果在中间使用了相同的引号，字符串会提前中止并抛出错误。

```js
goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
badStr = 'Finn responds, "Let's go!"'; // Throws an error
```

在上面的<code>goodStr</code>中，通过使用反斜杠<code>\</code>转义字符可以安全地使用两种引号
<strong>提示</strong><br/>不要把反斜杠<code>\</code>和斜杠<code>/</code>搞混，它们不是一回事。
</section>

## Instructions
<section id='instructions'>
把字符串更改为开头和结尾使用单引号的字符串，并且不包含转义字符。
这样字符串中的<code>&#60;a&#62;</code>标签里面任何地方都可以使用双引号。你需要将最外层引号更改为单引号，以便删除转义字符。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 删除所有<code>反斜杠</code> (<code>\</code>)。
    testString: assert(!/\\/g.test(code) && myStr.match('\\s*<a href\\s*=\\s*"http://www.example.com"\\s*target\\s*=\\s*"_blank">\\s*Link\\s*</a>\\s*'));
  - text: 应该要有两个单引号<code>&#39;</code>和四个双引号<code>&quot;</code>。
    testString: assert(code.match(/"/g).length === 4 && code.match(/'/g).length === 2);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";


```

</div>


### After Test
<div id='js-teardown'>

```js
(function() { return "myStr = " + myStr; })();
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
```

</section>
