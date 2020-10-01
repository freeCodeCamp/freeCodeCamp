---
id: 56533eb9ac21ba0edf2244b6
title: Escape Sequences in Strings
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvmqRh6'
forumTopicId: 17567
localeTitle: 字符串中的转义序列
---

## Description
<section id='description'>
引号不是字符串中唯一可以被<dfn>转义</dfn>的字符。使用转义字符有两个原因：首先是可以让你使用无法输入的字符，例如退格。其次是可以让你在一个字符串中表示多个引号，而不会出错。我们在之前的挑战中学到了这个。
<table class="table table-striped"><thead><tr><th>代码</th><th>输出</th></tr></thead><tbody><tr><td><code>\'</code></td><td>单引号</td></tr><tr><td><code>\"</code></td><td>双引号</td></tr><tr><td><code>\\</code></td><td>反斜杠</td></tr><tr><td><code>\n</code></td><td>换行符</td></tr><tr><td><code>\r</code></td><td>回车符</td></tr><tr><td><code>\t</code></td><td>制表符</td></tr><tr><td><code>\b</code></td><td>退格</td></tr><tr><td><code>\f</code></td><td>换页符</td></tr></tbody></table>
<em>请注意，必须对反斜杠本身进行转义才能显示为反斜杠。</em>
</section>

## Instructions
<section id='instructions'>
使用转义字符将下面三行文本字符串赋给变量<code>myStr</code>。
<blockquote>FirstLine<br/>&nbsp;&nbsp;&nbsp;&nbsp;\SecondLine<br/>ThirdLine</blockquote>
你需要使用转义字符正确地插入特殊字符，确保间距与上面文本一致并且单词或转义字符之间没有空格。
像这样用转义字符写出来：
<q>FirstLine<code>换行符</code><code>制表符</code><code>反斜杠</code>SecondLine<code>换行符</code>ThirdLine</q>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myStr</code>不能包含空格。
    testString: assert(!/ /.test(myStr));
  - text: <code>myStr</code>应该包含字符串<code>FirstLine</code>, <code>SecondLine</code> and <code>ThirdLine</code> （记得区分大小写）。
    testString: assert(/FirstLine/.test(myStr) && /SecondLine/.test(myStr) && /ThirdLine/.test(myStr));
  - text: <code>FirstLine</code>后面应该是一个新行<code>\n</code>。
    testString: assert(/FirstLine\n/.test(myStr));
  - text: <code>myStr</code>应该包含制表符<code>\t</code>并且制表符要在换行符后面。
    testString: assert(/\n\t/.test(myStr));
  - text: <code>SecondLine</code>前面应该是反斜杠<code>\\</code>。
    testString: assert(/\SecondLine/.test(myStr));
  - text: <code>SecondLine</code>和<code>ThirdLine</code>之间应该是换行符。
    testString: assert(/SecondLine\nThirdLine/.test(myStr));
  - text: <code>myStr</code> 应该只包含介绍里面展示的字符串。
    testString: assert(myStr === 'FirstLine\n\t\\SecondLine\nThirdLine');    

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
(function(){
if (myStr !== undefined){
console.log('myStr:\n' + myStr);}})();
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
```

</section>
