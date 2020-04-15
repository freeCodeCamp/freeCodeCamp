---
id: 56533eb9ac21ba0edf2244b4
title: Quoting Strings with Single Quotes
challengeType: 1
videoUrl: ''
localeTitle: 单引号引用字符串
---

## Description
<section id="description"> JavaScript中的<dfn>字符串</dfn>值可以使用单引号或双引号编写，只要您以相同类型的引号开头和结尾即可。与其他一些编程语言不同，单引号和双引号在JavaScript中的工作方式相同。 <blockquote> doubleQuoteStr =“这是一个字符串”; <br> singleQuoteStr =&#39;这也是一个字符串&#39;; </blockquote>你可能想要使用一种报价而不是另一种报价的原因是你想在字符串中使用这两种报价。如果要将对话保存在字符串中并将对话用引号括起，则可能会发生这种情况。它的另一个用途是在一个字符串中保存带引号中各种属性的<code>&lt;a&gt;</code>标签。 <blockquote>谈话=&#39;芬恩向杰克惊呼，“代数！”&#39;; </blockquote>但是，如果您需要使用其中的最外层引号，这将成为一个问题。请记住，字符串在开头和结尾都有相同的引用。但是如果你在中间的某个地方有相同的引用，字符串将提前停止并抛出错误。 <blockquote> goodStr =&#39;杰克问芬恩，“嘿，我们去冒险吧？” <br> badStr =&#39;芬恩回答，“我们走了！”&#39;; //引发错误</blockquote>在上面的<dfn>goodStr中</dfn> ，您可以使用反斜杠<code>\</code>作为转义字符安全地使用两个引号。 <strong>注意</strong> <br>反斜杠<code>\</code>不应与正斜杠<code>/</code>混淆。他们不做同样的事情。 </section>

## Instructions
<section id="instructions">将提供的字符串更改为在开头和结尾使用单引号的字符串，并且不包含转义字符。现在，字符串中的<code>&lt;a&gt;</code>标签在任何地方都使用双引号。您需要将外引号更改为单引号，以便删除转义字符。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 删除所有<code>backslashes</code> （ <code>\</code> ）
    testString: assert(!/\\/g.test(code) && myStr.match('\\s*<a href\\s*=\\s*"http://www.example.com"\\s*target\\s*=\\s*"_blank">\\s*Link\\s*</a>\\s*'));
  - text: '你应该有两个单引号<code>&#39;</code>和四个双引号<code>&quot;</code>'
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
