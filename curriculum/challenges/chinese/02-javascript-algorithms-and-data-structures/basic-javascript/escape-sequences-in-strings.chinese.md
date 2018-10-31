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
  - text: <code>myStr</code>不应包含任何空格
    testString: 'assert(!/ /.test(myStr), "<code>myStr</code> should not contain any spaces");'
  - text: <code>myStr</code>应包含的字符串<code>FirstLine</code> ， <code>SecondLine</code>和<code>ThirdLine</code> （记住区分大小写）
    testString: 'assert(/FirstLine/.test(myStr) && /SecondLine/.test(myStr) && /ThirdLine/.test(myStr), "<code>myStr</code> should contain the strings <code>FirstLine</code>, <code>SecondLine</code> and <code>ThirdLine</code> (remember case sensitivity)");'
  - text: <code>FirstLine</code>后面应跟换行符<code>\n</code>
    testString: 'assert(/FirstLine\n/.test(myStr), "<code>FirstLine</code> should be followed by the newline character <code>\n</code>");'
  - text: <code>myStr</code>应该包含一个制表字符<code>\t</code> ，它跟在换行符后面
    testString: 'assert(/\n\t/.test(myStr), "<code>myStr</code> should contain a tab character <code>\t</code> which follows a newline character");'
  - text: <code>SecondLine</code>应该以反斜杠字符<code>\\</code>开头
    testString: 'assert(/\SecondLine/.test(myStr), "<code>SecondLine</code> should be preceded by the backslash character <code>\\</code>");'
  - text: <code>SecondLine</code>和<code>ThirdLine</code>之间应该有换行符
    testString: 'assert(/SecondLine\nThirdLine/.test(myStr), "There should be a newline character between <code>SecondLine</code> and <code>ThirdLine</code>");'

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
