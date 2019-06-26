---
id: 56533eb9ac21ba0edf2244b6
title: Escape Sequences in Strings
challengeType: 1
videoUrl: ''
localeTitle: 字符串中的转义序列
---

## Description
<section id="description">引号不是可以在字符串中<dfn>转义</dfn>的唯一字符。使用转义字符有两个原因：首先是允许您使用您可能无法输入的字符，例如退格。其次是允许你在一个字符串中表示多个引号，而不会误解你的意思。我们在之前的挑战中学到了这一点。 <table class="table table-striped"><thead><tr><th>码</th><th>产量</th></tr></thead><tbody><tr><td> <code>\&#39;</code> </td> <td>单引号</td></tr><tr><td> <code>\&quot;</code> </td> <td>双引号</td></tr><tr><td> <code>\\</code> </td> <td>反斜线</td></tr><tr><td> <code>\n</code> </td> <td>新队</td></tr><tr><td> <code>\r</code> </td> <td>回车</td></tr><tr><td> <code>\t</code> </td> <td>标签</td></tr><tr><td> <code>\b</code> </td> <td>退格</td></tr><tr><td> <code>\f</code> </td> <td>形式饲料</td></tr></tbody></table> <em>请注意，必须对反斜杠本身进行转义才能显示为反斜杠。</em> </section>

## Instructions
<section id="instructions">使用转义序列将以下三行文本分配到单个变量<code>myStr</code> 。 <blockquote>第一行<br> \第二行<br> ThirdLine </blockquote>您将需要使用转义序列正确插入特殊字符。您还需要按照上面的间距来跟踪，在转义序列或单词之间没有空格。这是写出转义序列的文本。 <q>FirstLine <code>newline</code> <code>tab</code> <code>backslash</code> SecondLine <code>newline</code> ThirdLine</q> </section>

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
var myStr; // Change this line

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
